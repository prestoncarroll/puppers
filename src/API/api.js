import axios from "axios";

export default {
    getRandom: function(){
        return axios.get("https://dog.ceo/api/breeds/image/random");
    },
    getByBreed: function (breed) {
        return axios.get("https://dog.ceo/api/" + breed + "/images");
    }
}