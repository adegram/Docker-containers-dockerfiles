# Python Container

## Overview

A dependency-free Python HTTP service that demonstrates a dedicated low-privilege container user, configurable port, and health check.

## Technologies

Docker Engine

## Project structure

- `.dockerignore`
- `Dockerfile`
- `app.py`


## Run or validate
```sh
cd Docker-containers-dockerfiles/python-container
docker build -t python-container:local .
docker run --rm -p 8000:8000 python-container:local
```


