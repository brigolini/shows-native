import axios from "axios";

export default axios.create({
    baseURL:"http://977fa8e772b3.ngrok.io",
    headers:{
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXBhaW9tYXJjZWxvQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoic2VjcmV0byIsImlhdCI6MTU5NTM2MDQzNCwiZXhwIjoxNTk1Mzc4NDM0fQ.nsnRB49sGkA8HVLN90UnnAphxt1_huhe4Jsab2l1-TM"
    }

});
