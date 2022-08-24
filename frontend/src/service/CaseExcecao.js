import axios from "axios";

const APIURL = "http://localhost:4000"

export const CreateCaseExcecao = async (useCase) => {
    const result = await axios.post(APIURL + "/fluxo/excecao", useCase)
    console.log(result)
}
