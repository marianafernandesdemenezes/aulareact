export default function exercicio2( {peso, altura})
{
    let imc = Number (peso) / (altura * altura);
    return(
        <div>
            <p>
                O IMC é: {imc}
            </p>
        </div>
    )
}