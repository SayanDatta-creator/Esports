import axiosInstance from "./axiosConfig";
import { BASE_URL } from "../globalConfig/apiConfig";

const baseURL = BASE_URL;
// Login API call
const login = async (credentials) => {
  try {
    const response = await axiosInstance.post(
      `${baseURL}/auth/login`,
      credentials
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const signup = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${baseURL}/auth/signup`,
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const esportsService = {
  login,
  signup,
};

export default esportsService;
