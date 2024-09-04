import axios from "axios"


export class ProductServices {
     getAllProducts = () => {
          try {
               return axios.get(`${import.meta.env.VITE_API_URL}/products`)
          } catch (error) {
               console.error('Error al hacer la solicitud:', error.message);
          }
     }
     getImgHost = () => {
          try {
               return axios.get(`${import.meta.env.VITE_API_URL}/products/image_host`)
          } catch (error) {
               console.error('Error al hacer la solicitud:', error.message)
          }
     }
     createProduct = (product) => {
          try {
               return axios.post(`${import.meta.env.VITE_API_URL}/products`, product, {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('dalanaKidsToken'))}`
                    }
                  }).then((response) => {
                    console.log(response.data);
                  })
          } catch (error) {
               console.error('Error al hacer la solicitud:', error.message);
          }
     }
     deleteProduct = (id) => {
          console.log(id)
          try {
               return axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}?id=${id}`, {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('dalanaKidsToken'))}`
                    }
                  }).then((response) => {
                    console.log(response.data);
                  })
          } catch (error) {
               console.error('Error al hacer la solicitud:', error.message);
          }
     }
}

