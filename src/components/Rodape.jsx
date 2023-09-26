import {} from 'react'
import { FaBluetooth } from "react-icons/fa6";
import styles from '../css/Rodape.module.css'


function Ropade (){
  return(
    <section className={styles.rodape}>
    <h3>@2023-todos os direitos reservados</h3>
    <FaBluetooth/>
    </section>
  )
}
export default Ropade