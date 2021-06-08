
# Usage
## How to insert new Job
### Create new job by UI

## Clearning script for testing 
Those scripts can be used for testing purpose:
- clear off all existing workers and jobs
- generate sample data for a period
- use batch optimizer to dispatch all jobs in the planning window

```bash
cd $EASHDISPATCH_HOME
python  tests/kandbox_clear_data.py 
python -m dispatch.cli util generate --dataset veo --team_code london_t1 --start_day 20210503 --end_day 20210505 --username demo --password demo
python -m dispatch.cli job dispatch  --team_code london_t1  --start_day 20210503 --dispatch_days 2

```
