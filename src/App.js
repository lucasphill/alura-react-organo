import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Tipo from './componentes/Tipo';
import Rodape from './componentes/Rodape';

function App() {

  const tipos = [
    {
      nome: 'Bug',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Grass',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Dragon',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Fire',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'Water',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    }
  ]

  const [pokemons, setPokemons] = useState([])

  const aoNovoPokemonAdicionado = (pokemon) => {
    console.log(pokemon)
    setPokemons([...pokemons, pokemon])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario tipos={tipos.map(tipo => tipo.nome)} aoPokemonCadastrado={pokemon => aoNovoPokemonAdicionado(pokemon)} />
      {tipos.map(tipo => 
        <Tipo 
          key={tipo.nome} 
          nome={tipo.nome} 
          corPrimaria={tipo.corPrimaria} 
          corSecundaria={tipo.corSecundaria}
          pokemons={pokemons.filter(pokemon => pokemon.tipo === tipo.nome)}
        />)}
        <Rodape />
    </div>
  );
}

export default App;
