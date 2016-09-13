#!/usr/bin/env bash
./build.sh
git add -A
git commit -m "build commit"
git subtree push --prefix dist/prod origin gh-pages

