import {useState} from "react"
export default function Exercicio2()
{
   const[numero, setNumero] = useState(0);
   const[resultado, setResultado] = useState(0);

   function calcular()
   {
    let celsius;
    celsius = ((Number(numero) - 32) * 5) / 9;
    setResultado("Graus Celcius: " + celsius);
   }

    return (
        <div>
            <h1> Exercicio 2</h1>
            <div className="conteudo">
                <h3> calculo de temperatura </h3>

                <form>
                    <p>
                        digite a temperatura em graus fahrenheit <br />
                      <input type="text" value={numero}
                      onChange={(e) => setNumero (e.target.value)}/>
                    </p>
                    <p>
                    <input type="button" value="calcular" onClick={calcular} />

                    </p>

<p>
    <b> resultado</b>
    <br/>
    Fahrenheit é {numero} <br/>
    resultado em celsius é {resultado} 
</p>


                    <p>
                     <a href="/">Voltar</a>   
                    </p>


                </form>
            </div>
            
        </div>
    )
}