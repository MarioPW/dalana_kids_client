import axios from 'axios';

export class CarouselService {
    constructor() {
        this.apiURL = "https://products-api-fnrx.onrender.com/api/v1"
    }

    async getCarousel() {
        try {  
            const res = await axios.get(`${this.apiURL}/carousel`)
            return res
        } catch (error) {
            console.log(error)
        }
    }
}