#!/usr/bin/env bash
if [ -e /amscores/web-app ]; then
  cd /amscores/web-app
  rm -rf *
  sudo kill -9 $(sudo lsof -t -i:9000)
fi
