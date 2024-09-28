import './Pokemon.css'

const Pokemon = ({numero, nome, imagem, corDeFundo}) => {
    return (
        <div className='pokemon'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{numero}</h5>
            </div>
        </div>
    )
}

export default Pokemon