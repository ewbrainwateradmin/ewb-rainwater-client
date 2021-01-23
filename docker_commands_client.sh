#!/bin/bash/

docker rm -f ewb-rainwater-client
docker build -t ewb-rainwater-client .
docker create -p 5500:5500 --name ewb-rainwater-client ewb-rainwater-client
