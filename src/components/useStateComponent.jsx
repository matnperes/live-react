import { useState } from 'react';

const useStateComponent = () => {
  const [text, setText] = useState('');

  return (
    <div className="use-state-component">
      <h2>useState Exemplo</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite algo"
      />
      <p>{text}</p>
    </div>
  );
};

export default useStateComponent;
