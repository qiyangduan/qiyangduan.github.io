---
sidebar: auto
---


# 业务概念


## 需要解决的业务问题
EasyDispatch方案帮助解决现场服务派单的如下问题：
- 实时派单。当前生产系统中大部分的自动化或者AI派单方案基于批量的派单方案运行，每次需要等待几十分钟的时间运行一个批次，无法实时响应客户对于订单的修改和时间的安排。
- 固定的业务规则。很多成熟方案基于启发式算法或者求解器来计算最佳派单计划，而求解器中的业务规则是通过编码写入的。这样导致优化调整比较难，仅能调整固定的参数，比如速度，技能等，而不能新增加班时间，多人组合等业务规则的调整。
- 黑盒的业务规则。虽然制定业务规则的人事业务人员，但是如果系统执行出现问题，业务人员往往无法深入理解为什么某一个单没有派给某一个人的某一个时间，往往需要后台开发人员详细追踪。


## 业务问题建模

这是一个实时现场服务派单系统，可以基于服务人员worker的技能，工作时间和任务的需求情况自动分配订单job。所有的业务数据要么附加到服务人员Worker上，要么附加到订单Job上。

EasyDispatch需要做的工作也仅限于分配订单到人，也就是只会自动修改下面三个信息：
1. 任务分配到哪个人
2. 任务什么时间开始
3. 任务时长（在某些配送领域中，时长可能是固定的，或者很短的）


在同一个框架下，后台实现各种不同的派单算法，所有算法都是按照基于相同的数据结构，修改上面的3个信息，形成不同的派单方案。

在派单的过程中，派单算法需要使用到下面的概念：
1. 一个服务人员worker会有一个家庭，公司或服务站地址。 
2. 一个订单Job只会有一个地址，有一个服务时间长短。
3. 一个Worker同时只能在服务一个Job，但是一个Job里面可以有一个或者多个人工作。
4. 不同的Job会有不同的技能要求，时间要求等。

## ER 图

下面ER图表达了主要概念之间的关系。**任务**和**工人**是派单的主题对象，他们都从属于一个**团队**。

![erd](/erd_easy_dispatch_20210819.png)

## 任务

任务是Easydispatch 系统管理的主要对象。一个任务有不同的状态：Unplanned, Inplanned, Planned. 

There maybe different types of jobs, especially the composite job and the atom job. Other high level objects like Appointments, Worker's Leave Event are also treated as jobs.



### 任务状态

系统中区别对待下面4中不同状态：
- U == Un-planned，未派单. When is Job is U status, the scheduled information is not ignored. 
- I == In-planning. When is Job is I status, the scheduled attributes must have valid values. 
- P == Planned. When is Job is P status, it is treated as fixed agreement for both worker assignment and datetime. The easydispatch engine will not modify its scheduling information.  
- C == Completed. When is Job is C status, it will be removed. In future, it will be moved to historical storage. DO NOT USE THIS STATUS. 

### Auto Planning

When a job code have auto_planning == True, the easydispatch engine will try dispatch it when its status is U and make its status to I

### Flexible Form Data

You can save all customized job attributes into a flex_form_data. Those data will be used by dispatching rule plugins to validate the worker-job assignment.  Examples of field candidates are: 
- requested_skills, 
- job_schedule_type, 
- ...

The flex form data from jobs and workers are accessible by the rule and agent plugins. Each different business plugins may require different flexible form data attributes.


## 工人

A worker may have different names in different business problem, like technicians, service engieers, delivery couriers, postman etc. One worker can work on different jobs at different time. Each worker can work on only one job at each time.

EasyDispatch can dispatch multiple workers into one job. In this case, one worker will be treated as the primary worker and the rest as secondary workers.

In current version, essential equipments maybe considered one worker, which must be paired to another worker. One example is the vehicle (van) in may field service management situations.

## 团队

所有的订单和服务人员都会归属到一个团队Team，每次派单引擎在一个团队上进行派单，不会把
A team is the scope of one dispatching planner instance. The jobs in each team will be assigned to workers in the same team.

## Location

A location is where a worker or a job is positioned on a map. The longitude and latitude are mandatory and textual addresses are optional.

A location is treated as first class citizen in parallel to job because we see that there are repeated jobs for same customer and location. The historical assignment patterns can be learned on location level.

