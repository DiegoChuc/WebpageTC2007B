const tabla = document.getElementById('infopams');
const btn = document.getElementById('btnfiltro');
const parroquia = document.getElementById('Parroquia')
const edad = document.getElementById('Edad')
const  gen = document.getElementById('Genero')
/* let promKatz = 0;
let promSarcf = 0;
let promDep = 0;
let promGijon = 0;
let promeLawton = 0; */



btn.addEventListener("click",function(){
    if(!edad.value && parroquia.value == 0){
        console.log(1);
        mostrarGenero();
    }
    
    if (edad.value && parroquia.value == 0){
        console.log(2);
        mostrarGenEdad();
    }

    if(!edad.value && parroquia.value > 0){
        console.log(3);
        mostarGenParr();
    }

    if(edad.value && parroquia.value > 0){
        console.log(4);
        mostrarGenParrEdad();
    }
})

const mostrarGenParrEdad = function(){
    var cont = new Array();
    fetch(`http://10.14.255.62:4000/infopams/parroquias/${parroquia.value}`)
        .then((response) => response.json())
        .then((data) => {
            let genero = ""
            gen.value == 1 ? genero = "Hombre" : genero = "Mujer";
            let body = '<thead><th>ID</th><th>Nombre</th><th>Apellido Paterno</th><th>Apellido Materno</th><th>Peso</th><th>Altura</th><th>Fecha de Nacimiento</th><th>Genero</th></thead>';
            for(let i = 0; i < data.length; i++){
                if(data[i].Genero == genero && parseInt(data[i].Fecha_nacimiento.substring(0,4)) <= parseInt(edad.value)){
                    body += `<tr><td>${data[i].ID_infopam}</td><td>${data[i].Nombres_pam}</td><td>${data[i].Apellido_p}</td><td>${data[i].Apellido_M}</td><td>${data[i].Peso}</td><td>${data[i].Altura}</td><td>${data[i].Fecha_nacimiento.substring(0,10)}</td><td>${data[i].Genero}</tr>`
                    cont.push(data[i].ID_infopam);
                }
            }
            document.getElementById('infopams').innerHTML = body;
            sessionStorage.setItem('cont', JSON.stringify(cont));
        });
        
    /* var retrievedData = sessionStorage.getItem("cont");
    var cont1 = JSON.parse(retrievedData);
    let temp = new Array();
    if(cont1.length > 0){
        for(let i = 0; i < cont1.length; i++){
            fetch(`http://10.14.255.62:3000/infopams/pam/${cont1[i]}`)
                .then((response) => response.json())
                .then((data) => {
                    temp.push(data.ID_pam);
                    //console.log(temp[i]);
                })
                .then(datos => {
                    sessionStorage.setItem('temp', JSON.stringify(temp));
                })
                
        }
        retrievedData = sessionStorage.getItem("temp");
        var temp1 = JSON.parse(retrievedData);

        var results = new Array()
        for(let i = 0; i < temp1.length; i++){
            fetch(`http://10.14.255.62:3000/resultadosprueba/${temp1[i]}`)
                .then((response) => response.json())
                .then((data) => {
                    results.push(data);
                })
                .then(datos => {
                    for(let j = 0; j < results[i].length; j++){
                        console.log(results[i][j]);
                    }
                })
        }
        //console.log(sessionStorage.getItem('temp'));
    } */
}

const mostarGenParr = function(){
    fetch(`http://10.14.255.62:4000/infopams/parroquias/${parroquia.value}`)
        .then((response) => response.json())
        .then((data) => {
            let genero = ""
            gen.value == 1 ? genero = "Hombre" : genero = "Mujer";
            let body = '<thead><th>ID</th><th>Nombre</th><th>Apellido Paterno</th><th>Apellido Materno</th><th>Peso</th><th>Altura</th><th>Fecha de Nacimiento</th><th>Genero</th></thead>';
            for(let i = 0; i < data.length; i++){
                if(data[i].Genero == genero){
                    body += `<tr><td>${data[i].ID_infopam}</td><td>${data[i].Nombres_pam}</td><td>${data[i].Apellido_p}</td><td>${data[i].Apellido_M}</td><td>${data[i].Peso}</td><td>${data[i].Altura}</td><td>${data[i].Fecha_nacimiento.substring(0,10)}</td><td>${data[i].Genero}</tr>`
                }
            }
            document.getElementById('infopams').innerHTML = body;

        })
}

const mostrarGenEdad = function(){
    const url = "http://10.14.255.62:4000/infopams"
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let genero = ""
            gen.value == 1 ? genero = "Hombre" : genero = "Mujer";
            let body = '<thead><th>ID</th><th>Nombre</th><th>Apellido Paterno</th><th>Apellido Materno</th><th>Peso</th><th>Altura</th><th>Fecha de Nacimiento</th><th>Genero</th></thead>';
            for(let i = 0; i < data.length; i++){
                if(data[i].Genero == genero && parseInt(data[i].Fecha_nacimiento.substring(0,4)) <= parseInt(edad.value)){
                    body += `<tr><td>${data[i].ID_infopam}</td><td>${data[i].Nombres_pam}</td><td>${data[i].Apellido_p}</td><td>${data[i].Apellido_m}</td><td>${data[i].Peso}</td><td>${data[i].Altura}</td><td>${data[i].Fecha_nacimiento.substring(0,10)}</td><td>${data[i].Genero}</tr>`
                }
            }
            document.getElementById('infopams').innerHTML = body;
        });

} 

const mostrarGenero = function(){
    const url = "http://10.14.255.62:4000/infopams"
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let genero = ""
            gen.value == 1 ? genero = "Hombre" : genero = "Mujer";
        
            let body = '<thead><th>ID</th><th>Nombre</th><th>Apellido Paterno</th><th>Apellido Materno</th><th>Peso</th><th>Altura</th><th>Fecha de Nacimiento</th><th>Genero</th></thead>';
            for(let i = 0; i < data.length; i++){
                if(data[i].Genero == genero){
                    body += `<tr><td>${data[i].ID_infopam}</td><td>${data[i].Nombres_pam}</td><td>${data[i].Apellido_p}</td><td>${data[i].Apellido_m}</td><td>${data[i].Peso}</td><td>${data[i].Altura}</td><td>${data[i].Fecha_nacimiento.substring(0,10)}</td><td>${data[i].Genero}</tr>`
                }
            }
            document.getElementById('infopams').innerHTML = body;
        });
    


}