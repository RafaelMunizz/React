import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';

function App() {

  // Cap4/Aula3/Min7:00

  const times = [{
    nome: 'Programação',
    corPrimaria: '',
    corSecundaria: ''
  },
  {
    nome: 'Front-End',
    corPrimaria: '',
    corSecundaria: ''
  },
  {
    nome: 'Data Science',
    corPrimaria: '',
    corSecundaria: ''
  },
  {
    nome: 'Devops',
    corPrimaria: '',
    corSecundaria: ''
  },
  {
    nome: 'UX e Design',
    corPrimaria: '',
    corSecundaria: ''
  },
  {
    nome: 'Mobile', 
    corPrimaria: '',
    corSecundaria: ''
  },
  {
    nome: 'Inovação e Gestão',
    corPrimaria: '',
    corSecundaria: ''
  }];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);

    /**
     * Essa linha abaixo quer dizer que vamos pegar todos os colaboradores que já existiam dentro do array de  
     * colaboradores e sempre que um novo precisar ser inserido, vamos pegar todos que já existiam e colocar 
     * mais uma vez, mas adicionando também o novo colaborador ao final
     */
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome='Programação'/>
      <Time nome='Front-End'/>
      <Time nome='Data Science'/>
    </div>
  );
}

export default App;
