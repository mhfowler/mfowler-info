import os
import re
import random

from hyphen import Hyphenator
from hyphen.dictools import *

for lang in ['es_MX', 'es_SP']:
        if not is_installed(lang): install(lang)

PROJECT_PATH = os.path.abspath(os.path.dirname(__file__))


def get_startups():
    f_path = os.path.join(PROJECT_PATH, 'startups2.html')
    h_mx = Hyphenator('es_MX')
    first_syllables = []
    second_syllables = []
    with open(f_path, 'r') as f:
        contents = f.read()
        matches = re.finditer(' <h1 property="name">([^<]*)</h1>', contents)
        for match in matches:
            company_name = match.group(1).strip()
            splitted = company_name.split(' ')
            company_name = splitted[0]
            # print company_name
            syllables = h_mx.syllables(unicode(company_name))
            if len(syllables) == 2:
                first_syllables.append(syllables[0])
                second_syllables.append(syllables[1])

    for syllable in first_syllables:
        second = random.choice(second_syllables)
        list_form = "['{}', '{}'],".format(syllable, second)
        print list_form


if __name__ == '__main__':
    get_startups()