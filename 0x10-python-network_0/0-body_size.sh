#!/bin/bash
# Body size
curl -sI "$1" | grep "Content-Length" | cut -d ' ' -f 2