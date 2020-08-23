#!/bin/bash

IFS='
'

a=($(git diff --name-only --staged ./src/posts/*.md))
for fileName in ${a[@]}; do
  if [ -e $fileName ]; then
    trimed=$fileName | tr '\n' '\r' | sed 's,\s*\\\s*, ,g' | tr '\r' '\n'
    ./node_modules/.bin/doctoc $trimed
  fi
done