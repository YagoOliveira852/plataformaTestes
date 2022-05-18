
import Container from "./Container"
import styles from "./Navbar.module.css"
import logo from '../../img/test_icon.png'

function Navbar(){

    return(
        <nav className={styles.navbar}>
            <Container>
                <img src={logo} alt="Test"/>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <h1>TestGen</h1>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar