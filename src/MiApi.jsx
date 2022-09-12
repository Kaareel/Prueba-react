import { useEffect, useState } from 'react'
function MiApi(props) {
    const [agentes, setAgentes] = useState([])
    useEffect(() => {
        async function traerLista() {
            try {
                const valoagentes = await fetch('https://valorant-api.com/v1/agents')
                const data = await valoagentes.json()
                setAgentes(data.data)
            } catch (error) {
                alert(error)
            }
        }

        traerLista()
    }, [])

    return (
        <div className="agentes">
            {agentes.filter((agente) => {
                if (agente.isPlayableCharacter
                    && agente.displayName.includes(props.value)
                    && (agente.role.displayName === props.role || !props.role)) {
                    return true
                }
                return false
            })
                .sort((a, b) => {
                    if (a.displayName.toLowerCase() < b.displayName.toLowerCase()) {
                        return -1;
                    }
                    if (a.displayName.toLowerCase() > b.displayName.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                })
                .map((agente, index) =>
                (<div className="card" style={{ width: '18rem' }} key={index}>
                    <img src={agente.displayIcon} className="card-img-top" alt={props.alt} />
                    <div className="card-body">
                        <h5 className="card-title">{agente.displayName}</h5>
                        <p className="card-text">{agente.role.displayName}</p>
                        <span className="card-text">{agente.role.description}</span>
                    </div>
                </div>
                )
                )
            }



        </div>
    )
}

export default MiApi