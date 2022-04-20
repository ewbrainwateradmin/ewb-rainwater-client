@echo off

REM - disconnect docker containers and remove network to reset
docker network disconnect ewb-rainwater-network ewb-rainwater-database
docker network disconnect ewb-rainwater-network ewb-rainwater-client
docker network rm ewb-rainwater-network

REM - Create new containers
cd database
call docker_commands_database.bat
cd ..
call docker_commands_client.bat

REM - Create Docker network and add both server and database containers
docker network create ewb-rainwater-network
docker network connect ewb-rainwater-network ewb-rainwater-database
docker network connect ewb-rainwater-network ewb-rainwater-client

REM - Start database container (Do first, since server tries to connect to database)
docker start ewb-rainwater-database

REM - Check the status of the MySQL server, can only connect once the status is "healthy"
REM - Only move on once the server is fully ready to be connected to
REM - Second line is assigning the value of the inspect function to the variable status
echo Waiting for MySQL...
:loop_start
for /f %%i in ('docker inspect --format "{{.State.Health.Status}}" ewb-rainwater-database') do SET state=%%i
IF "%state%"=="healthy" (goto :break_healthy)
IF "%state%"=="unhealthy" (goto :break_unhealthy)
goto :loop_start
:break_unhealthy
echo ---
echo ---
echo MySQL container is unhealthy, something went wrong
echo ---
echo ---
:break_healthy

REM - Login in MySQL Client and change authentication settings
REM - Using -i for no terminal feedback, as opposed to -it because of a strange 'winpty' error
REM - Change auth settings because of dispartity between server and client versions
docker exec -i ewb-rainwater-database mysql -uroot -pewb2020 < mysql_auth_changes.sql

REM - Start server container
docker start ewb-rainwater-client
