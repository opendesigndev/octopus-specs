#!/bin/sh

WORKSPACE_ROOT=`dirname ${0}`/..
PROJECT_ROOT=${WORKSPACE_ROOT}/../..

DIST_DIR=${WORKSPACE_ROOT}/dist

mkdir -p ${DIST_DIR}

TS_FILE=${DIST_DIR}/octopus.ts

echo Converting Octopus OAS into TypeScript interfaces ...
${WORKSPACE_ROOT}/node_modules/.bin/openapi-typescript \
    ${PROJECT_ROOT}/node_modules/@opendesign/octopus-oas/dist/openapi.json \
    --output ${TS_FILE}

echo Formatting output with prettier...
${WORKSPACE_ROOT}/node_modules/.bin/prettier -w ${TS_FILE}
