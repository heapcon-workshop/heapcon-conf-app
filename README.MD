# Heapcon conference APP #

docker login

## heapcon-attendees ##

Spring boot based microservices for serving a list of attendees

**build**

```
cd heapcon-attendees
./gradlew dockerPush -PdockerUser=[docker-hub-account]
```

## heapcon-schedules ##

NodeJS based microservices for serving the schedule

**build**

```
cd heapcon-schedules
docker build -f Dockerfile -t [docker-hub-account]/heapcon-schedules:1.0.0 .
docker push [docker-hub-account]/heapcon-schedules:1.0.0
```

## heapcon-web ##

Ionic based web frontend.

**build**

```
cd heapcon-web
docker build -f Dockerfile -t [docker-hub-account]/heapcon-web:1.0.0 .
docker push [docker-hub-account]/heapcon-web:1.0.0
```
