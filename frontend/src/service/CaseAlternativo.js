import axios from "axios";

const APIURL = "http://localhost:4000"

export const CreateCaseAlternativo = async (useCase) => {
    const result = await axios.post(APIURL + "/fluxo/alternativo", useCase)
    console.log(result)
}
