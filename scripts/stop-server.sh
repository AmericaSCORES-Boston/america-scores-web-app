#!/usr/bin/env bash
if [ -e /amscores/web-app ]; then
  cd /amscores/web-app
  /usr/bin/npm stop
fi
