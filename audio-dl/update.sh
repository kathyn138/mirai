#!/bin/bash


ROOT_DIRECTORY=`dirname "$0"`

cd "$ROOT_DIRECTORY"
./exe/youtube-dl --update
