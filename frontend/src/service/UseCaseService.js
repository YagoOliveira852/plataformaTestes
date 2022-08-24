import axios from "axios";

const APIURL = "http://localhost:4000"

export const CreateUseCase = async (useCase) => {
    const result = await axios.post(APIURL + "/fluxo/basico", useCase)
    console.log(result)
}
