import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [numero, setNumero] = useState('')
    const [imagem, setImagem] = useState('')
    const [tipo, setTipo] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPokemonCadastrado({
            numero: numero,
            nome: nome,
            imagem: imagem,
            tipo: tipo
        })
        setNumero('')
        setNome('')
        setImagem('')
        setTipo('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Pokemon</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Numero da Pokedex" 
                    placeholder="Digite o numero da pokedex"
                    valor={numero}
                    aoAlterado={valor => setNumero(valor)} 
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do pokemon" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Tipo" 
                    itens={props.tipos}
                    valor={tipo}
                    aoAlterado={valor => setTipo(valor)}
                />
                
                <Botao texto="Criar Card">Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario