import './CampoTexto.css'

// Componentes React, por padrão, devem começar com letras maiúsculas
const CampoTexto = (props) => {
    // O retorno () geralmente é algo padrão que será utilizado
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto