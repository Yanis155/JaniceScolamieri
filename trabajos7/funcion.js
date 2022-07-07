function informacion() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
         console.log(data.results[0])

            let html= `Nombre: ${data.results[0].name.first} <br>
           Apellido: ${data.results[0].name.last} <br>
          Edad: ${data.results[0].dob.age} <br>
         Sexo: ${data.results[0].gender} <br>
         Email: ${data.results[0].email} <br> 
         <br>
         Imagen: <img src="${data.results[0].picture.large}"> <br>
         <br>
         Latitud: 
         Longitud:
         `
         document.getElementById("contenido").innerHTML= html 
    })
}
function resetear(){
    document.getElementById("contenido").innerHTML= " "
}