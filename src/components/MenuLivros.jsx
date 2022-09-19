import tw from 'tailwind-styled-components';

import { livros } from '../data/livros'

const ButtonLivro = tw.button`
    px-3
    py-2
    bg-blue-500
    text-white
    rounded-lg
    mb-2
    mx-2
`

function MenuLivros({onSet}) {
    return (
        <div className='print:hidden px-10'>
            {livros.map((livro, index) => {
                return <ButtonLivro onClick={() => onSet(livro)}>{livro}</ButtonLivro>
            })}
        </div>
    )
}

export default MenuLivros;