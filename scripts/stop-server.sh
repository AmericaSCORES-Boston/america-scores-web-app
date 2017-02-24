#!/usr/bin/env bash
if [[ ! -z $(/usr/local/bin/pm2 list | grep amscores_webapp) ]]; then
    pkill -n node
fi
