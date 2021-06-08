---
sidebar: auto
---


# Main Concepts

EasyDispatch is a field service dispatching planner, focusing on Reinforcement Learning and Optimization based automatic Dispatching. It plans Jobs for Workers. Everything else are either attached to a Job, or to a Worker. 
- A worker has a home location and can move on a map. Home location maybe extended 
- A Job happens in one location and requires certain duration to finish.
- One worker can work for maximum one job at any time(1->1), but one job can be handled by multiple workers (1->N).
- There are different types of job according to different dimensions:
  - Job Time Requirement
  - Job Skill Level
  - Job Skill Catagories

## Team

A team is the scope of one dispatching planner instance. The jobs in each team will be assigned to workers in the same team.

## Worker

A worker may have different names in different business problem, like technicians, service engieers, delivery couriers, postman etc. One worker can work on different jobs at different time. Each worker can work on only one job at each time.

EasyDispatch can dispatch multiple workers into one job. In this case, one worker will be treated as the primary worker and the rest as secondary workers.

In current version, essential equipments maybe considered one worker, which must be paired to another worker. One example is the vehicle (van) in may field service management situations.

## Job

A Job is the main object that easydispatch will actively manage. The job may have different status as Unplanned, Inplanned, Planned. 

There maybe different types of jobs, especially the composite job and the atom job. Other high level objects like Appointments, Worker's Leave Event are also treated as jobs.

### Planning Status

Planning Status for a job. 
- U == Un-planned. When is Job is U status, the scheduled information is not ignored. 
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

## Location

A location is where a worker or a job is positioned on a map. The longitude and latitude are mandatory and textual addresses are optional.

A location is treated as first class citizen in parallel to job because we see that there are repeated jobs for same customer and location. The historical assignment patterns can be learned on location level.

