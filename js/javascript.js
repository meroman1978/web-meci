
function pintar(v_objeto){
    document.getElementById(v_objeto).classList.add("pinta");
}

function despintar(v_objeto){
    document.getElementById(v_objeto).classList.remove("pinta");
}

function llamar_a(v_pagina){
    document.getElementById("iframe_contenido").src=v_pagina;
}

var Contactos = [];

function Registrar_Contacto(){    
    let fecha = new Date();
    let objContactos = new Object();
    let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    let telefonoMovil = document.getElementById('telefonoMovil');
    let consulta = document.getElementById('consulta');

    let msgNombre = document.getElementById('msgNombre');
    let msgEmail = document.getElementById('msgEmail');
    let msgTelefonoMovil = document.getElementById('msgTelefonoMovil');
    let msgConsulta = document.getElementById('msgConsulta');
    let msgFinal = document.getElementById('msgFinal');

    if (nombre.value == ''){                     
        msgNombre.innerHTML = 'Debe ingresar su nombre';        
        msgNombre.classList.add('error');
        nombre.focus();
        return;
    }
    else{
        if (nombre.value.length < 10){
            msgNombre.innerHTML = 'Debe ingresar un nombre valido, mayor a 10 caracteres';        
            msgNombre.classList.add('error');
            nombre.focus();
            return;
        }
        else{
            msgNombre.innerHTML = '';        
            msgNombre.classList.remove('error');    
        }
   }

    if (email.value == ''){        
        msgEmail.innerHTML = 'Debe ingresar su email';
        msgEmail.classList.add('error');
        email.focus();
        return;
    }
    else{
        if (!regex.test(email.value)){
            msgEmail.innerHTML = 'Debe ingresar un email valido';
            msgEmail.classList.add('error');
            email.focus();
            return;            
        }
        else{
            msgEmail.innerHTML = '';        
            msgEmail.classList.remove('error');
        }        
    }

    if (telefonoMovil.value == ''){
        msgTelefonoMovil.innerHTML = 'Debe ingresar su teléfono móvil';
        msgTelefonoMovil.classList.add('error');
        telefonoMovil.focus();
        return;
    }
    else{
        if (telefonoMovil.value.length < 10){
            msgTelefonoMovil.innerHTML = 'Debe ingresar un teléfono móvil valido, debe tener 12 caracteres';
            msgTelefonoMovil.classList.add('error');
            telefonoMovil.focus();
            return;
        }
        else{
            msgTelefonoMovil.innerHTML = '';        
            msgTelefonoMovil.classList.remove('error');
        }        
    }

    if (consulta.value == ''){
        msgConsulta.innerHTML = 'Debe ingresar su consulta';
        msgConsulta.classList.add('error');
        consulta.focus();
        return;
    }
    else{
        if (consulta.value.length < 10){
            msgConsulta.innerHTML = 'Debe ingresar una consulta valida, mayor a 10 caracteres';
            msgConsulta.classList.add('error');
            consulta.focus();
            return;
        }
        else{
            msgConsulta.innerHTML = '';        
            msgConsulta.classList.remove('error');
        }
    }

    objContactos['Nombre'] = nombre.value;
    objContactos['Email'] = email.value;
    objContactos['Telefono Movil'] = telefonoMovil.value;
    objContactos['Consulta'] = consulta.value;
    objContactos['Fecha Creacion'] = fecha.toLocaleDateString();

    Contactos.push(objContactos);

    console.log(Contactos);

    nombre.value='';
    email.value='';
    telefonoMovil.value='';
    consulta.value='';

    
    msgFinal.innerHTML = 'Gracias por contactarnos.';
    msgFinal.classList.add('exito');
    
}