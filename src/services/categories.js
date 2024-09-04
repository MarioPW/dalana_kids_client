import axios from "axios";
export class CategoriesService {
    constructor() {
        this.apiURL = import.meta.env.VITE_API_URL
    }

    getAllCategories = async () => {
        try {
            const response = await axios.get(`${this.apiURL}/categories`)
            return response.data
        } catch (error) {   
            console.error('Error al hacer la solicitud:', error.message);
        }
    }
    createCategory = async (category) => {
        try {
            const response = await axios.post(`${this.apiURL}/categories`, category, {
                withCredentials: true,
            })

            return response
        } catch (error) {
            console.error('Error al hacer la solicitud:', error.message);
        }
    }
    deleteCategory = async (id) => {
        try {
            const response = await axios.delete(`${this.apiURL}/categories/${id}?id=${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('dalanaKidsSession'))}`
                }
            })
            return response.data
        } catch (error) {
            console.error('Error al hacer la solicitud:', error.message);
        }
    }
}