#! /bin/bash
rm public/*.js
NODE_ENV=production npm run build
npm run start
