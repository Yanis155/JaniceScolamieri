let super_heroes= {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Capitan america",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Iron man",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Sub Cero",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
  /*console.log(super_heroes);
  console.log(super_heroes.members[1].name);
  console.log(super_heroes.members[2].powers[3]);
 
  for (const key in super_heroes.members){
    const element= (super_heroes.members[key]);
    console.log(element.powers);
  }*/


function edad_mayor(){

  for (i=0; i < super_heroes.members.length; i++){
    if (super_heroes.members[i].age > 100){
    let edad_100 = (super_heroes.members[i].name);
    document.getElementById("nombre-del-superheroe").innerHTML=(edad_100)
  }
}
}