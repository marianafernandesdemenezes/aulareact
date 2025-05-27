export default function Exercicio9({capital, juros, tempo})
{
let montant = capital * Math.pow(1 + juros / 100, tempo);
return (
    <div> 
        Capital : R${capital} <br/> 
        Juros : R${juros} <br/>
        tempo : R${tempo} <br/>
        Sua montagem é: R${montagem}
        </div>

);
}

