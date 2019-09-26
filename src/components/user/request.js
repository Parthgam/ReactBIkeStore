import axios from 'axios';

export const getCars = () => {
    return async () => {
    //   dispatch({ type: GET_CARS_PENDING })
      let bikes = await axios.post('http://10.1.2.113:8080/BikeShop/getbikes')
      dispatch({
        type: GET_CARS_SUCCESS,
        payload: bikes
      })
    }
  }