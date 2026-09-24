# Multi Stage Builds

## Overview

- A Node.js service showing separation between dependency installation and the final runtime image.
- Node.js image built with separate dependency and runtime stages, a non-root runtime user, and health check.


## Objective and design

A figma build (two-stage) copies only production dependencies and application files into a non-root runtime layer; an HTTP health check supports local runtime inspection.
The image built from the First stage is Larger and loaded with unnecessary files 
The second build produces an Image with significantly lesser size and only the configurations, dependencies and tools needed to run.

## Prerequisites

Docker Engine, Node.js 24 if running outside Docker

# Implementation Notes


## Run or validate

```sh
cd Docker-containers-dockerfiles/multi-stage-docker-image
docker build -t Browser-app:1.3 .
docker run --rm -p 8080:8080 Browser-app:1.3
docker stop Browser-app:1.3
```
