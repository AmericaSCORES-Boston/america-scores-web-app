#!/usr/bin/env bash

cd /amscores/web-app
if [ "$DEPLOYMENT_GROUP_NAME" == "Production" ]
then
    export NODE_ENV=production
    /usr/bin/npm build
else
    export NODE_ENV=development
    /usr/bin/npm start
fi

