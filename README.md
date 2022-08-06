# Youtube Video Anonymous Viewer

### Application, which you can use to get automatic, bot views on provided youtube video
#### Even though we use multiple proxies, Youtube still detects views gained from bot and removes the views after some time.

## Setup Tor Proxy

##### 1) In Docker Container

`$ sudo docker run -it -p 9050:9050 --name torproxy -d dperson/torproxy`

##### 2) Using Tor Client

`$ sudo apt-get install tor`

`$ sudo nano /etc/tor/torrc`

###### copy this code in the end of the file

```
# Open 4 SOCKS ports, each providing a new Tor circuit.
SocksPort 9050
SocksPort 9052
SocksPort 9053
SocksPort 9054

```

PORT 9051 is used by Tor to allow external apps who are connected to this port to control Tor process.

###### restart tor client

`$ sudo /etc/init.d/tor restart`

##### Finally: Check open ports

`$ sudo lsof -i -P -n | grep LISTEN`

## How to run the program

`$ ./run.sh 2 n=5`

2 is number of threads

n is number of views per thread

## Using Docker

Build: `$ sudo docker build -t anonym-viewer .`

Run Container: `$ sudo docker run -it --network="host" --name anonym_viewer IMAGE_ID`

Enter Container: `$ sudo docker exec -it anonym_viewer //bin/sh`
