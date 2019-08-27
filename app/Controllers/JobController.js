import JobService from "../Services/JobService.js";


let _jobService = new JobService()

function _draw() {
  let jobs = _jobService.Jobs
  let template = ''
  jobs.forEach(j => template += j.Template)
  document.getElementById('jobs-cards').innerHTML = template
}


export default class JobContorller {
  constructor() {
    _jobService.addSubscriber('jobs', _draw);
    _jobService.getApiJobs();
  }

  addJob(e) {
    e.preventDefault();
    let form = e.target
    let data = {
      company:  form.company,
      jobTitle:  form.jobTitle,
      hours:  form.hours,
      description:  form.description,
    }
    _jobService.addJob(data)
    form.reset()
  }
  delete(id) {
    if (window.confirm('STOP, ARE YOU SURE!?!'))
    _jobService.deleteJob(id)
}
}