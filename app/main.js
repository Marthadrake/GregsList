import CarController from "./Controllers/CarController.js";
import JobContorller from "./Controllers/JobController.js";


class App {
    constructor() {
        this.controllers = {
            carCtrl: new CarController()
            jobContorller: new JobController()
        }
    }
}

window['app'] = new App()