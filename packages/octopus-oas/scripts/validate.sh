WORKSPACE_ROOT=`dirname ${0}`/..

${WORKSPACE_ROOT}/node_modules/.bin/spectral lint ${WORKSPACE_ROOT}/openapi.yaml \
  --skip-rule oas3-api-servers \
  --skip-rule openapi-tags \
  --skip-rule info-contact \
  --skip-rule operation-tags \
  --skip-rule operation-description \
  --skip-rule operation-operationId \
  --skip-rule 'no-$ref-siblings'

