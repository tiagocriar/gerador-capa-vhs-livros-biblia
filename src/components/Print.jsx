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
    w-[260mm]
    h-[200mm]
    border-r-2
    border-b-2
    border-dashed
    border-gray-800
    flex
    flex-row
`

const Frente = tw.div`
    w-[115mm]
    h-[200mm]
    border-r-2
    border-dashed
    border-gray-200
    flex
    justify-center
    items-center
    px-5
`

const Verso = tw.div`
    w-[115mm]
    h-[200mm]
    flex
    justify-center
    items-center
`

const Meio = tw.div`
    w-[30mm]
    h-[200mm]
    border-r-2
    border-dashed
    border-gray-200
    flex
    justify-center
    items-center
`

const NomeLivro = tw.span`
    text-center
    font-kanit
    text-[46px]
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
                    <NomeLivro className='rotate-90 whitespace-nowrap'>
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