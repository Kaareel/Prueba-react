import bootstrap from "bootstrap"
function Buscador(props) {
    return (<div className="Buscador">
        <input type="text" className="form-control" placeholder={props.placeholder} aria-label="Username" aria-describedby="basic-addon1" value={props.value} onChange={(e) => props.onChange(e.target.value)}/>
    </div>

    )
}

export default Buscador