---
sidebar: auto
---

# 安装

## 系统要求

- Ubuntu >=20.04 and MacOS
- Python 3.7 / 3.8 / 3.9
- node/npm

我们测试过的环境是 Ubuntu Linux 2004和 Macos。

## Quick Start
EasyDispatch 依赖于这些部件： Postgres DB, Redis 和 Kafka. 对于开发者和小规模用户，一般建议用[docker](https://docs.docker.com/engine/install/ubuntu/) 和 [compose](https://docs.docker.com/compose/install/) 跑起来。

本地安装过程中同时需要 [npm and node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)。 


1. 克隆代码库后，到src目录执行下面命令，可以启动服务:
```bash
git clone https://github.com/alibaba/easydispatch.git && cd easydispatch
pip install -e .
```

2. 从 $easydisaptch/etc/dev_env_sample 复制并修改环境文件，放到  $easydisaptch/dev.env 。然后启动postgresql, redis 和 kafka。

```bash
docker-compose -f kafka-redis-postgres-compose.yml -p easy up
```

3. (可选) 可以执行伦敦的样例数据导入和排班作为单元测试。打开另外一个窗口，执行：

```bash
python -m dispatch.cli database init
python -m dispatch.cli server start --port 8000 dispatch.main:app 
```

4.  从浏览器打开: http://localhost:8000/login。应该能看到登录页面，如果不能，就到[主库](https://github.com/alibaba/easydispatch/issues) 就给我们提issue吧。

![login_page](/login_page_20210608174032.jpg)