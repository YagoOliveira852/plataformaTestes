import styles from "./Forms.module.css"
import Input from "./Input"
import Select from "./Select"
import SubmitButton from "./SubmitButton"

function Forms({btnText}){

    return(
        <form className={styles.forms}>
            <Select name="category_id" text="Selecione uma categoria"/>
            <Input type="text"  text="nome do projeto" name="name" placeholder="Insira o Caso de Uso" />
            <SubmitButton text={btnText}/>
            
        </form>
    )   

}

export default Forms