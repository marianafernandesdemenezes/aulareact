import {useState} from "react"
export default function exercicio1()
{
    //variavel de estado para os campos do formulario
    const[numero, setNumero] = useState(0);

    //variavel de estado para resultado 
    const[resultado, setResultado] = useState(0);

    //função para calcular o quadrado ou cubo
    function calcular()
    {
let quadrado, cubo;

quadrado =Number(numero) * Number(numero);
cubo = Number(numero) * Number(numero) * Number(numero);

setResultado("quadrado:" + quadrado + " - Cubo: " + cubo);
    }

    return(
        <div>
            <h1> Exercicio 1</h1>

            <div className="conteudo">
                <h3> Calculo do quadrado/cubo</h3>

                <form>
                    <p>
                        digite um número qualquer: <br />
                      <input type="text" value={numero}
                      onChange={(e) => setNumero(e.target.value)}/>
                    </p>
                    <p>
                    <input type="button" value="Exercicio1" onClick ={calcular}/>

                    </p>
                <p>
                    <b> Resultado </b>
                    <br/>
                        Número é {numero}<br />
                        Resultado é {resultado} 
                    
                </p>
                    <p>
                     <a href="/">Voltar</a>   
                    </p>


                </form>
            </div>
        </div>
    )
}