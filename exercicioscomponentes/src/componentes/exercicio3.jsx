export default function Exercicio3({valor, taxa, tempo})
{
    let resultado = (valor*(taxa/100) * tempo);
    return(
        <div>
            <p>
                o valor da parcela atualizado é: {resultado}
            
            </p>
        </div>
    )
}