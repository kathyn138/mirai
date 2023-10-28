#!/bin/bash

ROOT_DIRECTORY=`dirname "$0"`

echo "press ctrl+c twice to cancel."

cd "$ROOT_DIRECTORY"
./exe/youtube-dl --extract-audio --ffmpeg-location ./exe/ffmpeg -x -f bestaudio --audio-quality 0 --audio-format mp3 --ignore-errors --yes-playlist --output "audio/%(title)s.%(ext)s" --batch-file urls.txt
