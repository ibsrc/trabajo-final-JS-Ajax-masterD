/*Carrusel de fotos*/
function moverizda(){
    var image5
    image5 = document.getElementById('img5').src;

    document.getElementById('img5').src = document.getElementById('img1').src;
    document.getElementById('img1').src = document.getElementById('img2').src;
    document.getElementById('img2').src = document.getElementById('img3').src;
    document.getElementById('img3').src = document.getElementById('img4').src;
    document.getElementById('img4').src = image5;
}
function moverdcha(){
    var image1
    image1 = document.getElementById('img1').src;

    document.getElementById('img1').src = document.getElementById('img5').src;
    document.getElementById('img5').src = document.getElementById('img4').src;
    document.getElementById('img4').src = document.getElementById('img3').src;
    document.getElementById('img3').src = document.getElementById('img2').src;
    document.getElementById('img2').src = image1;
}
if(document.getElementById("enviar") != null){






/*Validacion de los datos personales y aceptacion de condiciones del formulario*/
/*Creacion de las variables "Enviar" y "Formulario"*/
let botonEnv = document.getElementById("enviar");
let miForm = document.getElementById("formulario");

/*Evento click al boton enviar*/
botonEnv.addEventListener("click",(evento)=>{

/*Desactivacion del envio del boton enviar*/
    evento.preventDefault();
/*Esta variable recibe lo que devuelve el return de la funcion validar*/
        valido = validar();
/*Si todo esta correcto,envio el formulario*/
    if(valido == true){
        miForm.submit();
    }
})

/*Funcion que devuelve true o false*/
function validar(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let privacidad = document.getElementById("privacidad");
    /*El campo Nombre no puede quedar vacio*/
    if(nombre == null || nombre == ""){
        alert("Debe introducir el nombre");
        return false;
    }
    /*Expresion regular para el Nombre*/
    let caracNombre = /^[a-zA-Z ]{1,15}$/;
    if(!caracNombre.exec(nombre)){
        alert("Solo letras y un maximo de 15");
        return false;
    }
    /*El campo Apellidos no puede quedar vacio*/
    if( apellidos == null || apellidos == ""){
        alert("Debe introducir sus apellidos");
        return false;
    }
    /*Expresion regular para Apellidos*/
    let caracApellido = /^[a-zA-Z ]{1,40}$/;
    if(!caracApellido.exec(nombre)){
        alert("Solo letras y un maximo de 40");
        return false;
    }
    /*El campo Telefono no puede quedar vacio*/
    if(telefono == null || telefono == ""){
        alert("Debe introducir su numero de telefono");
        return false;
    }
    /*Expresion regular para el Numero de Telefono*/
    let caracTelf = /^[0-9]{9,9}$/;
    if(!caracTelf.exec(telefono)){
        alert("Solo numeros y un maximo de 9");
        return false;
    }
    /*El campo Correo no puede quedar vacio*/
    if(correo == null || correo == ""){
        alert("Debe introducir su correo electronico");
        return false;
    }
    /*El Checked de las condiciones de privacidad de aceptarse*/
    if(!privacidad.checked){
        alert("Debe aceptar las condiciones de privacidad");
        return false;
    }
    
    

    return true;
}

    /* Seccion noticias. Pulso el boton y se cargan las noticias */
}
if(document.getElementById("btn-noticias")!=null){
    function readTextFile(file, callback) {
        let rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }
    
    
    const boton = document.querySelector("#btn-noticias");
    
    boton.addEventListener("click",function(){readTextFile("./assets/json/noticias.json", function(text){
        let data = JSON.parse(text);
        let textoNoticias="";
        const cajaNoticias = document.querySelector("#noticias");
    
        data.noticias.forEach(item => {
            textoNoticias += `<p><strong> ${item.titular}</strong> <br>${item.descripcion} </p> `;
        });
    
        cajaNoticias.innerHTML = textoNoticias;
    });})

}
/* Presupuesto estimado */
if(document.getElementById("enviar-presupuesto")!=null){
    (() => {

        let sumaTotal = 0;
    
        const tipoTrab = document.querySelector("#producto");
        const plazoMes = document.querySelector("#plazo");
        const opciones = document.querySelectorAll("#extras>input");
        const preTotal = document.querySelector("#precioestimado");
    
        let suma = () => {
    
            sumaTotal = parseInt(tipoTrab.value);
    
            switch (plazoMes.value) {
                case "1":
                    sumaTotal += parseInt(4000);
                    break;
                case "2":
                    sumaTotal += parseInt(3500);
                    break;
                case "3":
                    sumaTotal += parseInt(0);
                    break;
                default:
                    sumaTotal += parseInt(0);
            }
    
            opciones.forEach((element, i) => {
                if (element.checked) {
                    sumaTotal += parseInt(element.value);
                }
            });
    
            preTotal.value = sumaTotal;
        }
            opciones.forEach((element, i) => {
            element.addEventListener("change", suma, false);
        });
    
        tipoTrab.addEventListener("change", suma, false);
        plazoMes.addEventListener("change", suma, false);
    
    })();

}