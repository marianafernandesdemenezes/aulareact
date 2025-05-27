// Exercicio8.jsx
export default function Exercicio8({ peso, altura }) {
    const imc = peso / (altura * altura);
  
    return (
      <div>
        <h2>IMC: {imc.toFixed(2)}</h2>
      </div>
    );
  }