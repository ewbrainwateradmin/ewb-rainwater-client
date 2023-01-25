#!/bin/bash

docker network disconnect ewb-rainwater-network ewb-rainwater-server
docker network disconnect ewb-rainwater-network ewb-rainwater-client
cd server
sh docker_commands_server.sh
cd ../../ewb-rainwater-client
sh docker_commands_client.sh
cd ../ewb-rainwater-server
docker network connect ewb-rainwater-network ewb-rainwater-server
docker network connect ewb-rainwater-network ewb-rainwater-client
docker start ewb-rainwater-server
docker start ewb-rainwater-client
