import axios from "axios";

const APIURL = "http://localhost:4000"

export const CreateCaseExcecao = async (useCase) => {
    try{
        const res = await axios.post(APIURL + "/fluxo/excecao", useCase)
        return res}
    catch(error) {
        console.log(error)
    }
}
