# Docker Compose — Microservices

A Docker Compose configuration for running the MiniStore microservices application locally. It builds and runs the product, notification, order, and API gateway services as separate containers.

## Services

- **Product Service** — runs on port `3001`
- **Order Service** — runs on port `3002`
- **Notification Service** — runs on port `3003`
- **API Gateway** — runs on port `8080`

The API Gateway communicates with the other services, while the Order Service communicates with the Product and Notification services.

## Technologies

`Docker` · `Docker Compose` · `Node.js` · `Microservices`

## Usage

Make sure Docker is installed, then run:

```bash
docker compose up --build
```

To run the services in the background:

```bash
docker compose up -d --build
```

To stop the services:

```bash
docker compose down
```

## Service URLs

| Service | Port |
|---|---:|
| API Gateway | `8080` |
| Product Service | `3001` |
| Order Service | `3002` |
| Notification Service | `3003` |

The API Gateway is the main entry point for requests from users.

## Service Communication

Docker Compose provides internal DNS between containers, allowing services to communicate using their service names.

For example:

```text
order-service → product-service:3001
order-service → notification-service:3003
api-gateway → order-service:3002
api-gateway → product-service:3001
api-gateway → notification-service:3003
```

## What This Project Demonstrates

- Running multiple microservices with Docker Compose
- Container networking and service discovery
- Inter-service communication
- Environment variable configuration
- Service dependencies with `depends_on`
- Building multiple services from separate Dockerfiles
- Local microservices development and testing
