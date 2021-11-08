#!/bin/sh

PROJ_ROOT=`dirname ${0}`/..

DIST_DIR=${PROJ_ROOT}/dist

mkdir -p ${DIST_DIR}

${PROJ_ROOT}/node_modules/.bin/swagger-cli bundle -o ${DIST_DIR}/openapi.json -t json ${PROJ_ROOT}/octopus-oas/openapi.yaml
