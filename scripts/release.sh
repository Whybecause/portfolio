#!/bin/bash
set -e

release=$1

read -r -p "Release will be $release [Y/n] " response
response=${response,,} # tolower
if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
  echo "OK, let's go"
else
  exit 0
fi


git tag -a $release

echo "pushing in 2s to develop"
sleep 2

git push

echo "pushing in 2s to production"
sleep 2

git checkout production
git merge --ff-only develop
git push

git checkout develop
