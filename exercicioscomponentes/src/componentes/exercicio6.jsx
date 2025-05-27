export default function Exercicio6 ({quantidade, preco})
{
    let subtotal = (quantidade*preco);
    let desconto = (subtotal*0.1)
    let valorf = (subtotal-desconto)
    return (
        <div>
            total: R$ {subtotal} <br/>
            desconto : R$ {desconto} </br> 
            valor final : R$ {valorf} </br> 
        </div>
    );
}