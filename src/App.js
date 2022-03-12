import React from 'react';
import Rotas from './componentes/Rotas';
import { AuthProvider } from './functions/context';
const App = () => (
  <div className="App">
    <AuthProvider>
      <Rotas/>
    </AuthProvider>
  </div>
);

export default App;
