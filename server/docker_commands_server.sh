#!/bin/bash/

docker rm -f ewb-rainwater-server
docker build -t ewb-rainwater-server .
docker create -p 80:80 --name ewb-rainwater-server ewb-rainwater-server
