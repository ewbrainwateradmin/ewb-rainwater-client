#!/bin/bash/

docker rm -f ewb-rainwater-database
ARCH=$(uname -m)
echo $ARCH
if [ "$ARCH" == 'arm64' ]; then
	echo "arm64 was detected"
	docker pull --platform linux/arm64 mysql:oracle
	docker create -p 3306:3306 --name ewb-rainwater-database --health-cmd="mysql -u root -proot -e 'status' &> /dev/null" -e MYSQL_ROOT_PASSWORD=ewb2020 mysql:oracle
else
	echo "other was detected"
	docker pull --platform linux/amd64 mysql:latest
	docker create -p 3306:3306 --name ewb-rainwater-database --health-cmd="mysql -u root -proot -e 'status' &> /dev/null" -e MYSQL_ROOT_PASSWORD=ewb2020 mysql:latest
fi
