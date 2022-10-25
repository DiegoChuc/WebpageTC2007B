let url = 'http://10.14.255.62:4000/infopams';
const tabla = document.getElementById('infopams');
const btn = document.getElementById('busqueda');
const nombre = document.getElementById('busqpam')

console.log(tabla);

fetch(url)
        .then((response) => response.json())
        .then((data) => mostrarData(data));

const mostrarData = function(data){

    let body = '<thead><th>ID</th><th>Nombre</th><th>Apellido Paterno</th><th>Apellido Materno</th><th>Peso</th><th>Altura</th><th>Fecha de Nacimiento</th><th>Genero</th></thead>';
    for(let i = 0; i < data.length; i++){
        body += `<tr><td>${data[i].ID_infopam}</td><td>${data[i].Nombres_pam}</td><td>${data[i].Apellido_p}</td><td>${data[i].Apellido_m}</td><td>${data[i].Peso}</td><td>${data[i].Altura}</td><td>${data[i].Fecha_nacimiento.substring(0,10)}</td><td>${data[i].Genero}</tr>`
    }
    document.getElementById('infopams').innerHTML = body;
}

btn.addEventListener("click",function(){
    if(nombre.value != null){
        url = `http://10.14.255.62:4000/infopamsNom/${nombre.value}`
        fetch(url)
            .then((response) => response.json())
            .then((data) => mostrarData(data));
    }
})

/* fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));

const mostrarData = (data) => {
    for (let i = 0; i< data.lenght; i++){
        console.log(data[i].Texto_pregunta)
    }
} */

