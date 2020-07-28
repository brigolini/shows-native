import axios from "axios";

export default axios.create({
    baseURL:"http://00594ae4d15a.ngrok.io",
    headers:{
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXBhaW9tYXJjZWxvQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoic2VjcmV0byIsImlhdCI6MTU5NTk1MzU3OSwiZXhwIjoxNTk1OTcxNTc5fQ.KaqJXc8g1PovpsraX8XGFAyeo0PZW0zpM0axDn2xvfc"
    }

});
