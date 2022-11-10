import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '19a7e1c621msh9354f4b9cd2ff0dp113c60jsn5dbd994bc0f3',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  })
  return data
}
