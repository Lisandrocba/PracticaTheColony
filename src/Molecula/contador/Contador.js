import React, { useState } from 'react';

const Counter = () => {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p data-testid="contador-value">{contador}</p>
      <button onClick={aumentarContador} data-testid="increment-btn">
        Aumentar contador
      </button>
    </div>
  );
};

export default Counter;