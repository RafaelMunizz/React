import './Time.css'

const Time = (props) => {
    // HTML que será do componente
    return (
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3>{props.nome}</h3>
        </section>
    )
}

export default Time;