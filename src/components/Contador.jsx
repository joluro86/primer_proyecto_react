import React from "react";

const Contador = () => {
  const [contador, SetContador] = React.useState(0);

  const aumentar = () => {
    console.log(contador);
    SetContador(contador + 1);
  };
  
  return (
    <div>
      <h2>Contador</h2>
      <h3>Nuestro numero aumentando: {contador}</h3>
      <h4>
        {
        contador > 3 ? 'mayor a 3' : 'menor a 4'
        }
      </h4>
      <button onClick={() => aumentar()}>Reiniciar</button>
    </div>
  );
};

export default Contador;
