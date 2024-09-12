import  { useState } from 'react';

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="conditional-rendering">
      <h2>Renderização Condicional</h2>
      {isLoggedIn ? <p>Você está logado!</p> : <p>Por favor, faça login.</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default ConditionalRendering;
