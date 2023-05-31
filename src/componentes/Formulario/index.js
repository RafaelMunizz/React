import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import { useState } from 'react';
import Botao from '../Botao';

const Formulario = (props) => {

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
    const [time, setTime] = useState('');

    function aoSalvar(evento) {
        evento.preventDefault(); // Impedir que a página atualize após enviar o formulário
        console.log('Formulário submetido!');
        //console.log(nome, cargo, imagem, time);

        props.aoColaboradorCadastrado({
            nome, 
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite o seu nome' valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label='Cargo' placeholder='Digite o seu cargo' valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio={true} itens={times} label='Time' valor={time} aoAlterado={valor => setTime(valor)}/>
                <Botao>
                    Criar card    
                </Botao>
            </form>
        </section>
    )
}

export default Formulario