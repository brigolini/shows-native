import axios from "axios";

const axiosInstance = (token)=> axios.create({
    baseURL:"http://00594ae4d15a.ngrok.io",
    headers:{
        Authorization:
            `Bearer ${token}`
    }
});

export default axiosInstance;

export const defaultErrorHandler=(error)=>{
    switch(error.status){
        case 500:
            console.info("Erro irrecuperável");
        case 404:
            console.info("Recurso não encontrado")
        default:
            console.info("Erro desconhecido "+error)
    }
}