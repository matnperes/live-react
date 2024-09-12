import { useState, useEffect } from 'react';

const EffectComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  }, [count]);

  return (
    <div className="effect-component">
      <h2>useEffect Exemplo</h2>
      <p>Verifique o título da página</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  );
};

export default EffectComponent;
