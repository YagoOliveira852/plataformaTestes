import axios from "axios";

const APIURL = "http://localhost:4000"

export const CreateCaseTodos = async (useCase) => {
    try{
        const res = await axios.post(APIURL + "/fluxo/geral", useCase)
        return res}
    catch(error) {
        console.log(error)
    }
}
