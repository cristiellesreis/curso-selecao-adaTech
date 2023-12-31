import {useState} from 'react'
import styles from './button.module.css'



export default function MeuContador() {
    
    
    const [contador, setContador] = useState(0); //estados

    function aumentar() {
        setContador(contador + 1)
    }

    function diminuir() {
        setContador(contador - 1)
    }

    if(contador > 5){
        return(
        <div>
            <h1>Valor muito alto!</h1>
            <button onClick={aumentar}>aumentar</button>
            <button onClick={diminuir}>diminuir</button>
        </div>
        )
    }

    return(
        <div className='container'>
            <h1>Meu Contador: {contador}</h1>
            <button className = {styles.myButton} onClick={aumentar}>aumentar</button>
            <button className = {styles.myButton} onClick={diminuir}>diminuir</button>
        </div>//eventos
    )
}
