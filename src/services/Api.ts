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

const postPreRegisterUserDataMock = async (data: IpreRegisterUser): Promise<IpreRegisterUser> => {
  const delay = 1000

  return new Promise(resolve => setTimeout(resolve, delay, data))
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

const sendEmailContactMock = async (data: IContactMessage): Promise<IContactMessage> => {
  const delay = 1000

  return new Promise(resolve => setTimeout(resolve, delay, data))
}


/**
 * Object to call functions for API data
 */
const API = {
  postPreRegisterUserData,
  postPreRegisterUserDataMock,
  sendEmailContact,
  sendEmailContactMock
};

export default API;