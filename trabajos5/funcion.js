const persona= {
    nombre: "Mateo",
    apellido: "Martinez",
    edad: 33,
    sexo: "Masculino",
    decirnombyap: function() {
        console.log(`El apellido y nombre es: ${this.apellido}, ${this.nombre}`);
       }
}
 
const persona1= {
    nombre: "Maria",
    apellido: "Perez",
    edad: 12,
    sexo: "Femenino",
    decirnombyap: function() {
        console.log(`El apellido y nombre es: ${this.apellido}, ${this.nombre}`);
       }
}
const persona2= {
    nombre: "Lucia",
    apellido: "Gomez",
    edad: 94,
    sexo: "Femenino",
    decirnombyap: function() {
     console.log(`El apellido y nombre es: ${this.apellido}, ${this.nombre}`);
    }
}
persona.decirnombyap();
persona1.decirnombyap();
persona2.decirnombyap();


const mostrarpersona= { 
    persona: persona,
    persona1: persona1,
    persona2: persona2,
    
}

if (persona.edad > 18){
    console.log("Es MAYOR de edad: "+ persona.nombre + " " + "tiene " + persona.edad +" "+ "años");
}
if (persona1.edad > 18){
    console.log("Es MAYOR de edad: "+ persona1.nombre + " " + "tiene "+ persona1.edad + "años");
}
if (persona2.edad > 18){
    console.log("Es MAYOR de edad: "+ persona2.nombre + " "+ "tiene "+ persona2.edad +" "+ "años");
}




