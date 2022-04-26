import axios, { AxiosError } from "axios";
import { IContactMessage, IpreRegisterUser } from "../types/StorageAPI.intf";
import { Config } from "../config";

const postPreRegisterUserData = async (data: IpreRegisterUser): Promise<IpreRegisterUser> => {
  return axios.post(`${Config.addressApi}/preregister-users/`, data)
    .then(res => {  
      return res.data     
    })
    .catch((err: AxiosError) => {
      throw err  
    })
};

const sendEmailContact = async (data: IContactMessage): Promise<IContactMessage> => {
  return axios.post(`${Config.addressApi}/send-email/contact`, data)
    .then(resp => {
      return resp.data
    })
    .catch((err: AxiosError) => {
      throw err
    })
}

/**
 * Object to call functions for API data
 */
const API = {
  postPreRegisterUserData,
  sendEmailContact
};

export default API;