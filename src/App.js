import Print from './components/Print';
import MenuLivros from './components/MenuLivros';
import { useState } from 'react';

function App() {

  const [livro, setLivro] = useState(false);

  return (
    <div className='mt-5 print:mt-0 flex justify-center flex-col'>
      <button className='print:hidden bg-red-600 text-white my-4'
        onClick={() => window.print()}>
        IMPRIMIR
      </button>

      <MenuLivros onSet={(livro) => setLivro(livro)} />
      <Print livro={livro} />
    </div>
  );
}

export default App;
