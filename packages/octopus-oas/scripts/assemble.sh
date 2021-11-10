#!/bin/sh

WORKSPACE_ROOT=`dirname ${0}`/..
PROJECT_ROOT=${WORKSPACE_ROOT}/../../

DIST_DIR=${WORKSPACE_ROOT}/dist

mkdir -p ${DIST_DIR}

${WORKSPACE_ROOT}/node_modules/.bin/swagger-cli bundle -o ${DIST_DIR}/openapi.json -t json ${WORKSPACE_ROOT}/openapi.yaml
