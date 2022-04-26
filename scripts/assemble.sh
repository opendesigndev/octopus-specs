#!/bin/sh

OAS_SOURCE=${PWD}/openapi.yaml
echo "OAS_SOURCE: ${OAS_SOURCE}"

[[ -f ${OAS_SOURCE} ]] || exit 1;

DIST_DIR=${PWD}/dist
mkdir -p ${DIST_DIR}

PROJECT_ROOT=`dirname ${0}`/..
echo "PROJECT_ROOT: ${PROJECT_ROOT}"
${PROJECT_ROOT}/node_modules/.bin/swagger-cli bundle -o ${DIST_DIR}/openapi.json -t json ${OAS_SOURCE}
