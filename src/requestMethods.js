import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTRkYzk1MDc5NzIzZjAzOGExNmY1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDUxODcxOCwiZXhwIjoxNjQwNzc3OTE4fQ.-PPViyZ4pUzYQjjHCeFqi6J0SzGlIYn5EXBm12EF44Q"

export const publicRequest = axios.create({
  baseURL: BASE_URL
})
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `e ${TOKEN}`
  }

})
