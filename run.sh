#!/usr/bin/env bash
open "http://127.0.0.1:8000/" -a "Google Chrome"
PROJECT_PATH=$( cd $(dirname $0) ; pwd -P )
cd $PROJECT_PATH/dist/local
python -m SimpleHTTPServer


