function Client(props) {
    return <>
        <div className="client">
            <li className="client_name">{props.name}</li>
            <div>
                <span className="material-symbols-outlined edit">
                    edit
                </span>
                <span className="material-symbols-outlined delete">
                    delete
                </span>
            </div>
        </div>
    </>
}

export default Client;