---
sidebar: auto
---

# Quick Start
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

5. You should a page like this. If not, raise an issue in [main repo](https://github.com/alibaba/easydispatch/issues)

![login_page](/login_page_20210608174032.jpg)


## OS and Environements
We tested it on Ubuntu 20.04 and MacOS, Python 3.7 / 3.8


## Online Demo
We are working on demo...
