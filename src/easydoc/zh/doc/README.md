---
sidebar: auto
---


# 简介

这是一个实时现场服务派单系统，可以基于服务人员的技能，工作时间和任务的需求情况自动分配订单。

## 主要功能点
- 实时调度，随时新增和修改订单，秒级派单。
- 灵活的业务规则插件，指定允许的调度，但不需要指定如何达成最终方案，AI负责找到路径
- 在一个平台支持所有三种类型的调度算法：启发式，优化算法，强化学习。 能够嵌入一个手工(Heurisitc)的agent，配置AI不靠谱的时候使用。
- 基于Gym的强化学习模拟器，同时实现了基于RLLib的ppo的小agent。
- 排班甘特图，基于echarts的，能同时显示在途时间的Gantt/Timeline图
- 所有界面操作有API，API优先。

点击[快速开始](/zh/guide/)可以先尝试一下啦 :).



# 技术栈
Python为主，浏览器的展现用vuejs。

- 前端UI: Vue + Vuetify
- 服务端: Python,  [FastAPI](https://fastapi.tiangolo.com/)
- 算法库：[Gym](https://github.com/openai/gym) | [RLLib  for RL](https://docs.ray.io/en/latest/rllib.html) | [Ortools  for Optimization](https://github.com/google/or-tools)



## 关键词

实时现场服务，排班， Reinforcement Learning, Field Service Scheduling, Dispatching, Planning, AI, Optimization
