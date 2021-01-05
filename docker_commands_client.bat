docker rm -f ewb-rainwater-client
docker build -t kayakcat/ewb-rainwater-client .
docker push kayakcat/ewb-rainwater-client
docker pull kayakcat/ewb-rainwater-client
docker create -p 5500:5500 --name ewb-rainwater-client kayakcat/ewb-rainwater-client
