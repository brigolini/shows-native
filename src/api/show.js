import axios from "axios";

export default axios.create({
    baseURL: "http://00594ae4d15a.ngrok.io",
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXBhaW9tYXJjZWxvQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoic2VjcmV0byIsImlhdCI6MTU5NTk1MTc1NCwiZXhwIjoxNTk1OTY5NzU0fQ.CxDif3RvXVDHlYdidY2onWY4u60hYxMt1yEOmO8W5Qg"
    }
});

/*
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer l2cmhf2ezRl6ZkcHWNYKoDpiaro1zlqUjwkA7nVxnWzryiTwFDk35PJiucoLhjjFY9ECD8GTBGaHBg5yv5YDLiszKQx8EMvm30ply0UWoHQOnYFjLozpYnZOx-UsXXYx'
    }
});*/
