# westbeth-blog

# setup

```
cd ~/Desktop
git clone <your forked repository> 
cd ~/Desktop/westbeth
pip install -r requirements.txt
npm install -g gulp
npm install
# edit repo_name in vars.json to be the name of your repository or empty if you are using username.github.io
```

# how to use

### build the site
```cd ~/Desktop/westbeth; ./build.sh```

### run a local server to view your site
```cd ~/Desktop/westbeth; ./run.sh```

### watch for local changes and rebuild whenever something changes 
```cd ~/Desktop/westbeth; ./watch.sh```

### deploy code to github pages
```cd ~/Desktop/westbeth; ./deploy.sh```

### how to make changes
- whenever you want to see changes you made to the html of pages, run `./build.sh`
- and then `./run.sh`, and navigate in the browser to see your pages
- the url to see a page is the relative path to the page from the `templates/pages` directory

### where to write files
- all pages in `templates/pages` are rendered using jinja (http://jinja.pocoo.org/docs/dev/)
- create a .html file in `templates/pages` for every page of your site
- create layouts in `templates/layouts` which your pages use 
- write css in `static`
# westbeth
