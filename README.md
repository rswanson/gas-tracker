# Gas Tracker

Side project to practice coding and make something useful. For now lets mess around with the etherscan API and maybe grafana(maybe?) for visualization and tracking.

**TODO:**

- ~Create prometheus config and get dockerfile working~
- Create library to get data from etherscan
- Create library to get data to prometheus
  - probably will need https://github.com/siimon/prom-client
- Get grafana custom dockerfile working
- Create grafana gasboard 
  - panel 1: live-ish (~5s?) gas metrics from etherscan
