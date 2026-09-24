# Nodejs Container

## Overview

A Node.js HTTP container with production-mode environment, non-root execution, minimal runtime dependencies, and a health check. 

- The Dockerfile demonstrates a straightforward single-stage Node image; use the multi-stage project for a comparison of build/runtime stage separation.

- The Dockerfile demonstrates a straightforward single-stage Node image; use the multi-stage project for a comparison of build/runtime stage separation.

- Prerequisites: Docker Engine, Node.js 24 if running outside Docker


# Implementation Notes

Production-mode Node.js container with minimal runtime dependencies, non-root execution, configurable port, and health check.

## Project structure

- `.dockerignore`
- `Dockerfile`
- `package.json`
- `server.js`

## Setup and configuration

Use the commands below from this project directory unless a path is stated. Keep local credentials and generated state outside version control. Review every example value and replace reserved example domains, CIDRs, account IDs, repository owners, and image names before connecting a real environment.

The Docker health check can also be inspected with `docker inspect --format='{{.State.Health.Status}}' <container>`. 
- The Dockerfile and `.dockerignore` define the trusted build context; do not copy local credentials into the context.