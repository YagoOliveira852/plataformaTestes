import axios from "axios";

const APIURL = "http://localhost:4000"

export const CreateCaseBasico = async (useCase) => {
    /* const result =  */await axios.post(APIURL + "/fluxo/basico", useCase)
}
