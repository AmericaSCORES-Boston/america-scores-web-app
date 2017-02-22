#!/usr/bin/env bash

cd /amscores/web-app
if [ "$DEPLOYMENT_GROUP_NAME" == "Production" ]
then
    export NODE_ENV=production
    /usr/local/bin/pm2 start scripts/build.js -n amscores_webapp
else
    export NODE_ENV=development
    /usr/local/bin/pm2 start scripts/start.js -n amscores_webapp
fi

