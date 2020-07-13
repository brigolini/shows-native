import axios from "axios";

export default axios.create({
    baseURL: "http://a95aea8a473b.ngrok.io",
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbXBhaW9tYXJjZWxvQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoic2VjcmV0byIsImlhdCI6MTU5NDYwMzY0NSwiZXhwIjoxNTk0NjA3MjQ1fQ.05O3xlWqwYGPRkVac2sUfVOXTnB46-LrTaCQOrwIzO8"
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
