import axios from 'axios'

const URL = 'https://api.photodino.com/locations/'

export const getAllCites = async (searchObj) => {
  try {
    const response = await axios.get(`${URL}cities/`, {params : searchObj});
    return response
  } catch (error) {
    console.log(error)
  }
}



export const getAllLocations = async () => {
    try {
      const response = await axios.get(`${URL}locations`)
      return response
    } catch (error) {
      console.log(error)
    }
  }
  
  export const getCityDetail = async (id) => {

    console.log(id)
    try {
      const response = await axios.get(`${URL}cities/${id}`)
      const data = {

        name : await response.data.name,
        id : await response.data.id,
        locations : await response.data.locations,
        code : await  response.data.code

    };

    console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  
  export const getLocationDetail = async (id) => {

    console.log(id)
    try {
      const response = await axios.get(`${URL}locations/${id}`)
      
      return response
    } catch (error) {
      console.log(error)
    }
  }
  
