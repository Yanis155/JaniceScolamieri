function user() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results[0])

            let html = `Nombre: ${data.results[0].name.first} <br>
            Apellido: ${data.results[0].name.last} <br>
            Edad: ${data.results[0].dob.age} <br>
            Email: ${data.results[0].email} <br>
            Sexo: ${data.results[0].gender} <br>
            Latitud: ${data.results[0].location.coordinates.latitude} <br>
            Longitud: ${data.results[0].location.coordinates.longitude} <br>
            `

            //if (data.results[0].gender == "female" && data.results[0].dob.age >= 40 && data.results[0].dob.age <= 20) {
                document.getElementById("info").innerHTML = html;
                var map = L.map('map').setView([data.results[0].location.coordinates.latitude, data.results[0].location.coordinates.longitude], 13);
                L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
                }).addTo(map);

                var marker = L.marker([data.results[0].location.coordinates.latitude, data.results[0].location.coordinates.longitude]).addTo(map);
           
            //} else {
            //    (data.results[0].gender == "male")
            //   document.getElementById("info").innerHTML = ("No cumple las condiciones");
       }    
   )
}
function resetear() {
    document.getElementById("info").innerHTML = " "

}

