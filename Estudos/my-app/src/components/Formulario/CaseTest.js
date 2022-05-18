import Forms from "./Forms"
import styles from "./CaseTest.module.css"

function CaseTest(){

    return(
        <div className={styles.casetest_container}>
            <h1>Criar Caso de Teste</h1>
            <p>Crie o Caso de teste do Fluxo selecionado</p>
            <Forms btnText= "Criar Caso de Teste"/>
        </div>
    )
}

export default CaseTest