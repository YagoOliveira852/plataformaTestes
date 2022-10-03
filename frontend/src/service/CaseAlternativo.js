import axios from "axios";

const APIURL = "http://localhost:4000"

export const CreateCaseAlternativo = async (useCase) => {
    try{
        const res = await axios.post(APIURL + "/fluxo/alternativo", useCase)
        return res}
    catch(error) {
        console.log(error)
    }
}
