import Job from "../Models/Job.js";


let _jobApi = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/jobs'
})

let _state = {
  jobs: []
}

let _subscribers = {
  jobs: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());

}

export default class JobService {

  addSubscriber(propName, fn) {
    _subscribers[propName].pusch(fn)
  }

  get Jobs() {
    return _state.jobs.map(j => new Job(j))
  }



  getApiJobs() {
    _jobApi.get()
      .then(res => {
        let jobsData = res.data.data.map(j => new Job(j))
        _setState('jobs', jobsData)
      })
      .catch(err => {
        console.error(err)
      })
  }

  addJob(data) {
    _jobApi.post('', data)
      .then(res => {
        _state.jobs.push(res.data.data)
        _setState('jobs', _state.cars)
      })
      .catch(err => {
        console.error(err)
      })
    
  }
    deleteJob(id) {
    _jobApi.delete(id)
      .then(res => {
        let index = _state.jobs.findIndex(car => car.id == id)
        _state.cars.sploce(index, 1)
        _setState('jobs', _state.jobs)

      })
      .catch(err => {
        console.error(err)
      })
  }

}