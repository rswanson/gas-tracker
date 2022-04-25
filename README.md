# Gas Tracker

Side project to practice coding and make something useful. For now lets mess around with the etherscan API and maybe grafana(maybe?) for visualization and tracking.

## Installation

```
npm install
```

## Build

**Build gas-data.webservice**

```
nx build gas-data.webservice
```

**Build app docker container**

```
npm run build:docker
```

**Build Prometheus**

```
npm run build:prometheus
```

## Run

**Run Service Locally**

```
nx serve
```

**Run Service as Docker**

```
npm run start:docker
```

**Run Prometheus**

```
npm run start:prometheus
```

## TODO:

- ~Create prometheus config and get dockerfile working~
- [WIP] Create library to get data from etherscan
  - ~Implement getPrice() get endpoint that calls the etherscan endpoint live and returns the data~
  - Figure out how to mock the gas.data.service.getPrice() function properly
  - Update to jest28
  - Implement a way to store the data -> maybe redis via docker?
- [WIP] Create library to get data to prometheus
  - ~Create metrics lib scaffolindg for functionality~
  - Implement metrics lib to expose a base endpoint
  - probably will need https://github.com/siimon/prom-client
- Get grafana custom dockerfile working
- Create grafana gasboard
  - panel 1: live-ish (~5s?) gas metrics from etherscan
