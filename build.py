import os
import jinja2
import json

PROJECT_PATH = os.path.abspath(os.path.dirname(__file__))

# input pages dir
PAGES_DIR = os.path.join(PROJECT_PATH, 'templates/pages')

# output dirs
LOCAL_OUTPUT_DIR = os.path.join(PROJECT_PATH, 'dist/local')
PROD_OUTPUT_DIR = os.path.join(PROJECT_PATH, 'dist/prod')
if not os.path.exists(LOCAL_OUTPUT_DIR):
    os.makedirs(LOCAL_OUTPUT_DIR)
if not os.path.exists(PROD_OUTPUT_DIR):
    os.makedirs(PROD_OUTPUT_DIR)

# input static folder
STATIC_DIR = os.path.join(PROJECT_PATH, 'static')

# variables
VARS_PATH = os.path.join(PROJECT_PATH, 'vars.json')
VARS_DICT = json.loads(open(VARS_PATH, "r").read())

LOCAL_VARS = {
    'BASE_URL': ''
}
PROD_VARS = {
    'BASE_URL': ''
}


def log_print(msg, debug):
    if debug:
        print msg


def build_site(pages_dir, output_dir, template_vars, debug):

    # copy over static files
    input_static_dir = os.path.join(STATIC_DIR)
    output_static_dir = os.path.join(output_dir, 'static')
    if os.path.exists(output_static_dir):
        os.system('rm -r {}'.format(output_static_dir))
    log_print('copying static to {}'.format(output_static_dir), debug=debug)
    os.system('cp -r {} {}'.format(input_static_dir, output_static_dir))

    # render html
    template_path = os.path.join(PROJECT_PATH, 'templates')
    template_loader = jinja2.FileSystemLoader(searchpath=template_path)
    template_env = jinja2.Environment( loader=template_loader, extensions=['jinja2.ext.with_'])

    for dirpath, _, files in os.walk(pages_dir):
        for page in files:
            relative_dirpath = os.path.relpath(dirpath, pages_dir)
            relative_path = os.path.join(relative_dirpath, page)
            template_path = 'pages/' + relative_path
            log_print('building: {}'.format(relative_path), debug=debug)
            page_template = template_env.get_template(template_path)
            page_text = page_template.render(template_vars)

            output_page_path = os.path.join(output_dir, relative_path)
            output_dirpath = os.path.dirname(output_page_path)
            if not os.path.exists(output_dirpath):
                os.makedirs(output_dirpath)
            with open(output_page_path, 'w') as output_file:
                page_text = page_text.encode('ascii', 'ignore')
                output_file.write(page_text)


if __name__ == '__main__':

    # build local dist
    build_site(pages_dir=PAGES_DIR, output_dir=LOCAL_OUTPUT_DIR, template_vars=LOCAL_VARS, debug=False)

    # build prod site
    build_site(pages_dir=PAGES_DIR, output_dir=PROD_OUTPUT_DIR, template_vars=PROD_VARS, debug=True)
