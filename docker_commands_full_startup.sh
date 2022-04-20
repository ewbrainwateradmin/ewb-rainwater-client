#!/bin/bash/

# disconnect docker containers and remove network to reset
docker network disconnect ewb-rainwater-network ewb-rainwater-database
docker network disconnect ewb-rainwater-network ewb-rainwater-client
docker network rm ewb-rainwater-network

# Create new containers
cd database
sh docker_commands_database.sh
cd ..
sh docker_commands_client.sh

# Create Docker network and add both server and database containers
docker network create ewb-rainwater-network
docker network connect ewb-rainwater-network ewb-rainwater-database
docker network connect ewb-rainwater-network ewb-rainwater-client

# Start database container (Do first, since server tries to connect to database)
docker start ewb-rainwater-database

# Check the status of the MySQL server, can only connect once the status is "healthy"
# Only move on once the server is fully ready to be connected to
# Second line is assigning the value of the inspect function to the variable status
echo "Waiting for MySQL..."
while true
do
  status=$(docker inspect --format "{{.State.Health.Status}}" ewb-rainwater-database)
  if [ "$status" = "healthy" ]; then
    echo "All Good"
    break
  fi
  if [ "$status" = "unhealthy" ]; then
    echo "MySQL container is unhealthy, something went wrong"
    break
  fi
done

# Login in MySQL Client and change authentication settings
# Using -i for no terminal feedback, as opposed to -it because of a strange 'winpty' error
# Change auth settings because of dispartity between server and client versions
docker exec -i ewb-rainwater-database mysql -uroot -pewb2020 < mysql_auth_changes.sql

# Start server container
docker start ewb-rainwater-client
