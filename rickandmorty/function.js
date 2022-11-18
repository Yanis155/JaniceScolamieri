

function consumirApi() {
  var contenido= document.getElementById("contenido");
  var id= document.getElementById("id_personaje").value;

    fetch("https://rickandmortyapi.com/api/character/"+id)
    .then(res => res.json())
    .then(data => {
      console.log(data)

      contenido.innerHTML = `
      Id: ${id} <br>
      Nombre: ${data.name} <br>
      Especie: ${data.species} <br>
      Estado: ${data.status} <br>
      Tipo: ${data.type} <br>
      Genero: ${data.gender} <br>
      Origen: ${data.origin.name} <br>
      Ubicacion: ${data.location.name} <br>
      Creacion: ${data.created} <br>
     <br> <img src= ${data.image} with="500px"> 
      `

      document.getElementById("Id").value= id;
      document.getElementById("Nombre").value= nombre;
      document.getElementById("Especie").value= especie;
      document.getElementById("Estado").value= estado;
      document.getElementById("Tipo").value= tipo;
      document.getElementById("Genero").value= genero;
      document.getElementById("Ubicacion").value= ubicacion;
      document.getElementById("Creacion").value= creacion;
      document.getElementById("Imagen").value= imagen;
    })   

};





