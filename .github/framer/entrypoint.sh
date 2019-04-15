#!/bin/sh

# Avoid continuing when errors or undefined variables are present
set -eu

# FRAMER_TOKEN env token should already be set
sh -c "framer $*"
