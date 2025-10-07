import {useState} from "react"
export default function exercicio3()
{
    return (
        <div>
            <h1> Exercicio 3</h1>
            <div className="conteudo">
                <h3> Calculo do quadrado/cubo</h3>

                <form>
                    <p>
                        digite O valor da prestaçâo: <br />
                      <input type="text"value={valor}
                      onChange={(e) => setValor(e.target.value)}/>
                    </p>

                    <p>
                        digite a taxa de juros  <br />
                      <input type="text"value={valor}
                      onChange={(e) => setTaxa(e.target.value)}/>
                    </p>

                    <p>
                        digite o tempo em dias de atraso  <br />
                      <input type="text"value={valor}
                      onChange={(e) => setTempo(e.target.value)}/>
                    </p>

                    <p>
                    <input type="button" value="Exercicio3" onClick ={calcular} />

                    </p>
<p>
    <b>Resultado</b>
    <br/>
    Valor da prestaçao{valor} <br/>
    Valor da taxa de juros {taxa} <br/>
    Tempo em dias de atraso {tempo} <br/>
    Valor da parcela atualizado {resultado}
</p>
                    <p>
                     <a href="/">Voltar</a>   
                    </p>


                </form>
            </div>
        </div>
    )
}