#!/bin/bash/

docker rm -f ewb-rainwater-database
docker pull --platform linux/x86_64/v8 mysql
docker create -p 3306:3306 --name ewb-rainwater-database --health-cmd="mysql -u root -proot -e 'status' &> /dev/null" -e MYSQL_ROOT_PASSWORD=ewb2020 mysql
