#!/usr/bin/env bash
if [[ ! -z $(ps | grep node) ]]; then
    pkill -n node
fi
