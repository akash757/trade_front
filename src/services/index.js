import axios from "axios"

class Service {
    constructor(){
        this.backendUrl = process.env.REACT_APP_BACKEND_URL
    }
    getData = async() => {
        return await axios.get(this.backendUrl)
    }
}

export default new Service()