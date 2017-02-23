#!/usr/bin/env bash

cd /amscores/web-app
if [ "$DEPLOYMENT_GROUP_NAME" == "Production" ]
then
    export NODE_ENV=production
else
    export NODE_ENV=development
fi

pushstate-server build

