docker network disconnect ewb-rainwater-network ewb-rainwater-server
cd server
call docker_commands_server.bat
cd ..
docker network connect ewb-rainwater-network ewb-rainwater-server
docker start ewb-rainwater-server
