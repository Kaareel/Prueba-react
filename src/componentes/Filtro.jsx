import bootstrap from "bootstrap"
function Filtro(props) {
    return (

        <div className="filtro">
            <div>
                <h2>{props.subtitulo}</h2>
            </div>
            <div>
                <select className="form-select" aria-label="Disabled select example" onChange={(e) => props.onChange(e.target.value)} >
                    <option value="">Elije un Rol</option>
                    <option value="Initiator">Initiator</option>
                    <option value="Duelist">Duelist</option>
                    <option value="Controller">Controller</option>
                    <option value="Sentinel">Sentinel</option>
                </select>
            </div>

        </div>
    )
}

export default Filtro