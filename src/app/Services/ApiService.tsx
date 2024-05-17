import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "https://catfact.ninja",
})

export const ApiService = {
    get : async (url : any, params : any) => {
        try {
            const response  = await axiosInstance.get(url, {params});
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}