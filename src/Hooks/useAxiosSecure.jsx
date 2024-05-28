import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-restaurent-server-two.vercel.app'

   
})

const useAxiosSecure = () => {
   return axiosSecure;
};

export default useAxiosSecure;