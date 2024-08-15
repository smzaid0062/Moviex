import axios from 'axios'


const BASE_URL = "https://api.themoviedb.org/3"

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWFiZDg1YTQ5ZGMyYjk4NmI4MDRkNDY5ODczNmFhOSIsInN1YiI6IjY1NTY0ZTFlN2YwNTQwMDBmZjM2M2Y5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lxquXXvp6r30uJxPV08IAudURRf2uR5sNRHvPlyYECM";

const headers = {
    Authorization: "bearer "+ TMDB_TOKEN
}

export  const fetchDataFromApi = async(url,params)=>{
  try {
    const {data} = await axios.get(BASE_URL + url, {
        headers: headers,
        params:params,
    })
    return data
  } catch (error){
    console.log(error)
    return error
  }
}













