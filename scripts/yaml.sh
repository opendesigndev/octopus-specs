#!/bin/bash

cat ${1} | yq e -P -M -
