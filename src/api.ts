import axios from "axios";


const APIKey = 'AIzaSyAO-WLT3cD4sIVAspDAAJ1SNCQXMxBC1-g'

const instants = axios.create({
    baseURL: "https://www.googleapis.com/books/v1"
})

export const booksSearchAPI = {
    getBooks(title: string) {
        instants.get(`volumes?q=${title}&key=${APIKey}`).then(res => {
            console.log(res)
        })
    }
}

