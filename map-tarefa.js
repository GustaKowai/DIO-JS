function getAdmin(map){
  let admins = [];
  for ([names,position] of map){
    if (position === 'Admin'){
      admins.push(names)
    }
  }
  return (admins)
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany','Admin');
usuarios.set('Gustavo','Admin');
usuarios.set('Alice','Usuario');
usuarios.set('Carol', 'Usuario');
usuarios.set('Felipe','Usuario');
usuarios.set('Daniela','Admin');


console.log(getAdmin(usuarios))