const axiosClient = axios.create({
     baseURL: `${import.meta.env.VITE_AXIOS}`,
  });
  
  export default axiosClient;