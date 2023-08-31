import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api", 
    params: {
        key: "28257b631bf641248a547599ebb36501"
    }
})