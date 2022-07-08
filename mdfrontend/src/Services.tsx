import axios from "axios";

const config = axios.create({
    baseURL: 'http://localhost:8080/example/'
})

export const save = ( province: string, district: string  ) => {
    const sendItem = {
        province: province,
        district: district
    }
    return config.post('save', sendItem )
}

export const list = () => {
    return config.get("list")
}