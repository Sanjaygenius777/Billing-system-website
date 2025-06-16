import Client from './Client'
import './ClientList.css'

function ClientList(){
    return <>
    <div className="client_list_box">
                <div className="client_list">
                    <Client name="Shekhar"/>
                    <Client name='Suvarna'/>
                    <Client name='Sakshi'/>
                </div>
                <button className="icon_button" id="add_client">+</button>
            </div>
    </>
}

export default ClientList