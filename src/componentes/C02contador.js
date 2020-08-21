import React, {useState, Fragment} from 'react';

const  C02contador = () => {

    const [valor, setValor]=useState(0);
    const [numero, setNumero]=useState(0);

    const IncrementoDos=() => {
        setNumero(numero + 1);
        console.log("mensaje de contador");
    }
    return (
        <Fragment>
            <button onClick={()=> setValor(valor + 1)}>C02Contador1</button>
            <span> Incremento de C02contador1: {valor} </span>
            <hr />
            <button onClick={IncrementoDos}>C02Contador2</button>
            <span> Incremento de C02contador2: {numero} </span>
        </Fragment>
      );
}
 
export default C02contador;