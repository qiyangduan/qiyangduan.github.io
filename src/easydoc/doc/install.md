---
sidebar: auto
---

# Installation

## Prerequisite

- Ubuntu >=20.04 and MacOS
- Python 3.7 / 3.8 / 3.9
- node/npm

## Quick Start
EasyDispatch relies on Postgres DB, Redis and Kafka. Those three components can be started by [docker](https://docs.docker.com/engine/install/ubuntu/) and [compose](https://docs.docker.com/compose/install/) or provisioned seperately. You also should have [npm and node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for frontend development.

1. To run easydispatch locally, first install it by:
```bash
git clone https://github.com/alibaba/easydispatch.git && cd easydispatch
pip install -e .
```

2. Then copy and modify env file from $easydisaptch/etc/dev_env_sample to $easydisaptch/dev.env  . Start the database, redis and kafka by docker composer.

```bash
docker-compose -f kafka-redis-postgres-compose.yml -p easy up
```

3. Open another terminal, populate some sample data and run the frontend:

```bash
python -m dispatch.cli database init
python -m dispatch.cli server start --port 8000 dispatch.main:app 
```

4. Visit the page at : http://localhost:8000/login


![login_page](/login_page_20210608174032.jpg)

# Recommended Deployment Architecture
We recommend having three environments for production deployment:

- test : you can follow above steps to install composite&docker based single VM instance.
- staging: use kubernetes cluster to deploy minimal instance.
- production: use kubernetes cluster to deploy instance according to production workload.


The following architecture diagram is one example for production deployment in kubernetes:

![deploy_arch](/login_page_20210608174032.jpg)
