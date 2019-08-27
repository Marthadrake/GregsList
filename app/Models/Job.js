

export default class Job {
  constructor(data) {
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.description = data.description
  }

  get Template() {
    return `
            <div class="col-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${this.company} - ${this.jobTitle} - ${this.hours}</h5>
                    <p class="card-text">${this.description}</p>
                    <button class="btn btn-danger" onclick="app.controllers.jobService.delete('${this._id}')">Delete Car</button>
                </div >
            </div >
        </div >
            `
  }
}