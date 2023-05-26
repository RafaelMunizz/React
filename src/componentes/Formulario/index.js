import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {

    const itens = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile', 
        'Inovação e Gestão'
    ]

    function aoSalvar(evento) {
        evento.preventDefault();
        console.log('Formulário submetido!')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite o seu nome'/>
                <CampoTexto obrigatorio={true} label='Cargo' placeholder='Digite o seu cargo'/>
                <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem'/>
                <ListaSuspensa obrigatorio={true} itens={itens} label='Time'/>
                <Botao>
                    Criar card    
                </Botao>
            </form>
        </section>
    )
}

export default Formulario