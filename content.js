// //Will be initiated after the page is load
console.log('YOU ARE AWESOME');

// Global variables
let base_url = document.location.origin; //
let path = '/app/common/scripting/scriptedrecord.nl?id='; //
let current_record_type_input = document.querySelector('#baserecordtype'); //also as input[name="baserecordtype"]
let current_record_type = current_record_type_input.value;

if (current_record_type) {

  function createURL(){

    let url_param = current_record_type.toUpperCase();
    let url = base_url + path + url_param;
    return url;
  }

  function createButton(url){

    let button_container_node_list = document.querySelectorAll('div.page-title-menu ul.ns-menu');
    let button_container;

    //some pages has to upper menus:
    if (button_container_node_list.length == 1) {
      button_container = button_container_node_list[0];
    } else {
      button_container = button_container_node_list[1];
    }

    console.log('button_container:');
    console.log(button_container);

    let new_li = document.createElement('li');
    new_li.classList.add('ns-menuitem');//ns-menuitem--icon-only
  
    let ns_button = document.createElement('a');
    ns_button.textContent = "Deployed scripts";

    ns_button.href = url;
    ns_button.target = '_blank';

    ns_button.style = `
      cursor: pointer
    `;
    new_li.appendChild(ns_button);
    button_container.appendChild(new_li);
  }

  let url = createURL();
  createButton(url);

}

