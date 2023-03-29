import React from 'react';
import { useSelector } from 'react-redux';

const App = ()=> {
  const { foo } = useSelector(state => state);
  return (
    <div>
      <h1>Dealers Choice { foo }</h1>
    </div>
  );
};

export default App;
