import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi  = async (url) => {
    const { data }  = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '9de00422ddmsh33753bb374ade60p1c3dc0jsn3c0dab29c812'
        }
    })

    return data;
} 