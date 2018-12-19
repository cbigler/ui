#!/bin/bash
set -euo pipefail

SEED="${RANDOM}"

DENSITY_UI_ROOT="$(realpath "${PWD}/$(dirname $0)/../")"
WEBPACK="${DENSITY_UI_ROOT}/node_modules/.bin/webpack"

set +u
if [ -z "$1" ]; then
  echo "Error: please specify a path of the component to integrate."
  echo "./utils/integration.sh <path to component> <path to destination project>"
  exit 1
fi
set -u
COMPONENT_PATH="$(realpath $1)"
COMPONENT_NAME="$(basename ${COMPONENT_PATH})"

set +u
if [ -z "$2" ]; then
  echo "Error: please specify a path to the destination project to integrate Density UI into."
  echo "./utils/integration.sh $1 <path to destination project>"
  exit 1
fi
set -u
PROJECT_PATH="$2"
PROJECT_DIST="${PROJECT_PATH}/density-ui-integration"


function complete {
  # When the process is complete:
  
  # 1. Remove the webpack configuratino copied into the project
  rm -rf "${COMPONENT_PATH}/webpack.config.js"

  # 2. Remove dist code from component to ensure further operations will always build new
  rm -rf "${COMPONENT_PATH}/dist"

  # 2. Remove the bundle written into the distribution directory
  rm -rf "${PROJECT_DIST}/ui-${COMPONENT_NAME}.js"

  # 3. If the project distribution directory is empty, remove it
  if [ -z "$(find ${PROJECT_DIST} -name '*.js')" ]; then
    rm -rf "${PROJECT_DIST}"
  fi
}

function main {
  # When the process completes, call the "complete" function
  trap "complete" EXIT

  # Create the distribution directory. Compiled components will be copied into here.
  mkdir -p "${PROJECT_DIST}"
  rm -rf "${PROJECT_DIST}/README.md"
  echo "What is this?" >> ${PROJECT_DIST}/README.md
  echo "This directory was created by running \`make <my component>-integrate\`" >> ${PROJECT_DIST}/README.md
  echo "in Density UI. If you want to use any components in here instead of" >> ${PROJECT_DIST}/README.md
  echo "the ones installed in \`node_modules\`, then update any import to reference it:" >> ${PROJECT_DIST}/README.md
  echo "" >> ${PROJECT_DIST}/README.md
  echo "Change any instance of the below:" >> ${PROJECT_DIST}/README.md
  echo "import MyComponent from '@density/ui-my-component';" >> ${PROJECT_DIST}/README.md
  echo "" >> ${PROJECT_DIST}/README.md
  echo "To this:" >> ${PROJECT_DIST}/README.md
  echo "import MyComponent from '../../density-ui-integration/ui-my-component';" >> ${PROJECT_DIST}/README.md
  echo "(update the relative path as required)" >> ${PROJECT_DIST}/README.md
  echo "" >> ${PROJECT_DIST}/README.md
  echo "When the last running Density UI integration process terminates, this directory and" >> ${PROJECT_DIST}/README.md
  echo "all of its contents should be deleted." >> ${PROJECT_DIST}/README.md

  # Copy in the webpack configuration into the component
  cp "${DENSITY_UI_ROOT}/webpack.config.js" "${COMPONENT_PATH}/webpack.config.js"

  echo
  echo "Build is starting, placing compilation results into ${PROJECT_DIST}/ui-${COMPONENT_NAME}.js ..."
  echo "For an explaination of what to do next, either run \`make help\` in this project or take a"
  echo "look at ${PROJECT_DIST}/README.md"

  # Start building in watch mode - this will block and rebuild when the user saves the source files
  # When the user kills this, the trap above will run to clean up after webpack.
  (
    cd "${COMPONENT_PATH}" &&
    POST_BUILD_SCRIPT="
      echo '/* eslint-disable */' > /tmp/bundle${SEED} && \
      cat ${COMPONENT_PATH}/dist/index.js >> /tmp/bundle${SEED} && \
      cp /tmp/bundle${SEED} ${PROJECT_DIST}/ui-${COMPONENT_NAME}.js &&
      rm -rf /tmp/bundle${SEED}
    " \
      ${WEBPACK} --watch
  )
}
main
