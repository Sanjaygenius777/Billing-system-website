import './ClientDetail.css'

function ClientDetail(){
    return <>
    <div className="client_detail">
                <h3>SUVARNA</h3>
                <hr />
                <form className="client_data">
                    <div className="client_unit">
                        <label>Email Address :</label>
                        <input readOnly value="suvarna@gmail.com" />
                        <br />
                    </div>
                    <div className="client_unit">
                        <label>Company Name :</label>
                        <input readOnly value="xyz Telecom" />
                        <br />
                    </div>
                    <div className="client_unit">
                        <label>Phone Number :</label>
                        <input readOnly value="+91 720-932-2182" />
                        <br />
                    </div >
                    <div className="client_unit">
                        <label>Address :</label>
                        <input type="text" readOnly value="XYZ NY STREET NEW YORK CITY" />
                        <br />
                    </div >
                </form>
            </div >
    </>
}

export default ClientDetail;