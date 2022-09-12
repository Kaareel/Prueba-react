import App from "../App"
function Agentes(props) {

    return (
        <div className="agentes">
            {props.agentes.filter((agente) => agente.isPlayableCharacter /*&& agente.displayName(value)*/).map((agente) => (<div className="card">
                <img src={agente.displayIcon} />
                <h5>{agente.displayName}</h5>
                <p>{agente.role.displayName}</p>
                <span>{agente.role.description}</span>
            </div>
            ))}
        </div>
    )
}
export default Agentes