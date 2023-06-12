import './Time.css'
import Colaborador from '../Colaborador';

const Time = (props) => {

    const css = {backgroundColor: props.corSecundaria};

    // HTML que será do componente
    return (
        <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
          
        </section>
    )
}

export default Time;