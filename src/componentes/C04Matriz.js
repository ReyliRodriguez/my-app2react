import React, {useState,Fragment} from 'react';

const C04Matriz = () => {
        const[lista,  sellista]= useState([1,2,3,4,5])
        return (
            <Fragment>
                <h1> Lectura sin index y sin html </h1>
                {lista.map((item) => item) }
                <hr />
                <h1> Lectura sin index y con html </h1>
                {lista.map((item) => <span> {item} </span> ) }
                <hr />
                <h1> Lectura sin index y sin Key </h1>
                {
                        lista.map((item, index) =>
                        <p> {item} ={index}</p>
                        )
                }
                <hr />
                <h1> Lectura sin index y con Key </h1>
                {
                     lista.map((item, index) =>
                     <p key ={index} > {item}-{index}</p>
                     )
                }
            </Fragment>
        );
} 
export default C04Matriz;