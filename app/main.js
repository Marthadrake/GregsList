import carCtrl from "./Controllers/CarController.js";
import jobController from "./app/Controllers/JobController.js";
debugger

class App {
    constructor() {
        this.controllers = {
            carCtrl: new CarController()
            jobController: new JobController()
        }
    }
}

window['app'] = new App()