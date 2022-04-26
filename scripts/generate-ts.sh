#!/bin/sh

# ${1} octopus|manifest

if [[ -z ${1} ]]; then
    echo 'Missing target (octopus or manifest)'
    exit 1
fi

TARGET=${1}
WORKSPACE_ROOT=${PWD}
DIST_DIR=${WORKSPACE_ROOT}/dist

mkdir -p ${DIST_DIR}

TS_FILE=${DIST_DIR}/${TARGET}.ts

PROJECT_ROOT=`dirname ${0}`/..

echo Converting OpenAPI specs into TypeScript interfaces ...
${WORKSPACE_ROOT}/node_modules/.bin/openapi-typescript \
    ${PROJECT_ROOT}/node_modules/@avocode/${TARGET}-oas/dist/openapi.json \
    --output ${TS_FILE}

echo Formatting output with prettier...
${WORKSPACE_ROOT}/node_modules/.bin/prettier -w ${TS_FILE}
