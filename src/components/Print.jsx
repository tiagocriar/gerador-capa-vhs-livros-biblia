import tw from 'tailwind-styled-components';

const Folha = tw.div`
    w-[297mm]
    h-[210mm]
    border-2
    border-dashed
    border-gray-800
    bg-white
    print:w-full
    print:h-screen
`

const CapaFilme = tw.div`
    w-[225mm]
    h-[180mm]
    border-r-2
    border-b-2
    border-dashed
    border-gray-800
    flex
    flex-row
`

const Frente = tw.div`
    w-[100mm]
    h-[180mm]
    border-r-2
    border-dashed
    border-gray-200
    flex
    justify-center
    items-center
`

const Verso = tw.div`
    w-[100mm]
    h-[180mm]
    flex
    justify-center
    items-center
`

const Meio = tw.div`
    w-[25mm]
    h-[180mm]
    border-r-2
    border-dashed
    border-gray-200
    flex
    justify-center
    items-center
`

const NomeLivro = tw.span`
    text-[26px]
    whitespace-nowrap
`

function Print({livro}) {

    if(livro == false) return null;

    return (
        <Folha>
            <CapaFilme>
                <Frente>
                    <NomeLivro>
                        {livro}
                    </NomeLivro>
                </Frente>
                <Meio>
                    <NomeLivro className='rotate-90'>
                        {livro}
                    </NomeLivro>
                </Meio>
                <Verso>
                    
                </Verso>
            </CapaFilme>
        </Folha>
    );
  }
  
export default Print;