window.onload=()=>{
    bindDeleteButtons()
    clientbutton()
}

//CLIENT LIST BUTTON FUNCTION


function clientbutton(){
    let client_buttons=document.getElementsByClassName('client')

let client_name_list=document.getElementsByClassName('client_name')

let h3name=document.getElementsByTagName('h3')[0]


for(let i=0;i<client_buttons.length;i++){
client_buttons[i].onclick=function(){client_buttons[i].style.boxShadow='none'
    setTimeout(() => {
    client_buttons[i].style.boxShadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.5)'; // remove or reset after 300ms
  }, 100);
  current_client=client_name_list[i].textContent.toUpperCase()
  console.log(current_client)
  h3name.textContent=current_client
}
}

}

//ADDING CLIENT

let add_client=document.getElementById('add_client')
let client_list=document.getElementsByClassName('client_list')[0]


add_client.onclick=()=>{
    let new_client_name=prompt("Enter Client Name");
    add_client.style.boxShadow='none'
    setTimeout(() => {
    add_client.style.boxShadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.5)'; // remove or reset after 300ms
  }, 100);
let new_client=document.createElement('div')
    new_client.className='client'
    new_client.innerHTML=`
                <li class="client_name">${new_client_name}</li>
                <div>
                    <span class="material-symbols-outlined edit">
                        edit
                    </span>
                    <span class="material-symbols-outlined delete">
                        delete
                    </span>
                </div>
            `
    client_list.appendChild(new_client)
    bindDeleteButtons();
    clientbutton()
}


//DELETING A CLIENT

function bindDeleteButtons() {
  let delete_buttons = document.getElementsByClassName('delete');
  for (let i = 0; i < delete_buttons.length; i++) {
    delete_buttons[i].onclick = function () {
      let client = this.closest(".client");
      client.remove();
    };
  }
}
