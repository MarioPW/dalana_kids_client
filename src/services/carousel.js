import axios from 'axios';

export class CarouselService {
    constructor() {
        this.apiURL = "https://products-api-fnrx.onrender.com/api/v1",
        this.headers = {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${localStorage.getItem('token')}`
        }
    }
    async getCarousel() {
        try {
            return await axios.get(`${this.apiURL}/carousel`)
        } catch (error) {
            console.log(error)
        }
    }
    createCarouselItem(data) {
        try {
            return axios.post(`${this.apiURL}/carousel`, data, { headers: this.headers })
        } catch (error) {
            console.log(error)
        }
    }
    deleteCarouselItem(id) {
        try {
            return axios.delete(`${this.apiURL}/carousel/${id}`, { headers: this.headers })
        } catch (error) {
            console.log(error)
        }
    }
    updateCarouselItem(id, data) {
        try {
            return axios.put(`${this.apiURL}/carousel/${id}`, data, { headers: this.headers })
        }
        catch (error) {
            console.log(error)
        }
    }
}