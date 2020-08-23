#!/bin/bash

IFS='
'

a=($(git diff --name-only --staged ./src/posts/*.md))
for fileName in ${a[@]}; do
  if [ -e $fileName ]; then
    ./node_modules/.bin/doctoc $fileName
  fi
done