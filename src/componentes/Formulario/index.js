import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import { useState } from 'react';
import Botao from '../Botao';

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile', 
        'Inovação e Gestão'
    ];

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState(''); 

    function aoSalvar(evento) {
        evento.preventDefault(); // Impedir que a página atualize após enviar o formulário
        console.log('Formulário submetido!');
        console.log(nome, cargo, imagem);
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite o seu nome' valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label='Cargo' placeholder='Digite o seu cargo' valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio={true} itens={times} label='Time'/>
                <Botao>
                    Criar card    
                </Botao>
            </form>
        </section>
    )
}

export default Formulario