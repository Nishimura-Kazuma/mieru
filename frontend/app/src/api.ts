import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

export const getSamples = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/samples`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching samples:", error);
    throw error;
  }
};
