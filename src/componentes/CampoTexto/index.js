import './CampoTexto.css'

// Componentes React, por padrão, devem começar com letras maiúsculas
const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    // O return () geralmente é algo padrão que será utilizado
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto