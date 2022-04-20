import axios from "axios";
import { IpreRegisterUser } from "../types/InterfacesStorageAPI";
import { Config } from "../config";

const postPreRegisterUserData = async (data: IpreRegisterUser): Promise<IpreRegisterUser> => {
  return axios.post(`${Config.addressApi}/preregister-users/`, data)
    .then(res => {  
      return res.data     
    })
    .catch((err) => {
      throw err.respone ?? new Error('error server')
      
    })
};

/**
 * Object to call functions for API data
 */
const API = {
  postPreRegisterUserData,
};

export default API;