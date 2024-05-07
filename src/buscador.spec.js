describe("Buscar", () => {
  it("no encuentra proyectos cuando no tiene ninguno en la lista de proyectos", () => {
    let proyectos = [];
    expect(buscarProyecto("ejercicio1", proyectos)).toEqual("");
  });

  it("encuentra proyectos cuando el mismo existe en una lista de un proyecto", () => {
    let proyectos = [];
    proyectos.push("miUnicoProyecto");
    expect(buscarProyecto("miUnicoProyecto", proyectos)).toEqual(["miUnicoProyecto"]);
  });

  it("encuentra un proyecto cuando el mismo existe en una lista de varios proyectos", () => {
    let proyectos = [];
    proyectos.push("proyecto1");
    proyectos.push("proyecto2");
    proyectos.push("proyecto3");
    expect(buscarProyecto("proyecto2", proyectos)).toEqual(["proyecto2"]);
  });

  it("encuentra varios proyectos cuando varios existen en una lista de varios proyectos", () => {
    let proyectos = [];
    proyectos.push("fizzbuzz");
    proyectos.push("bisiesto");
    proyectos.push("fizzbuzz");
    expect(buscarProyecto("fizzbuzz", proyectos)).toEqual(["fizzbuzz", "fizzbuzz"]);
  });

  it("encuentra varios proyectos cuando sus nombres inician con el criterio de busqueda en una lista de varios proyectos", () => {
    let proyectos = [];
    proyectos.push("proyecto1");
    proyectos.push("proyecto2");
    proyectos.push("ejercicio1");
    proyectos.push("proyecto3");
    proyectos.push("ejercicio2");
    expect(buscarProyecto("proy", proyectos)).toEqual(["proyecto1", "proyecto2", "proyecto3"]);
  });
  
  it("devuelve vacio cuando no existe ninguna coincidencia con ningun proyecto", () => {
    let proyectos = [];
    proyectos.push("proyecto1");
    proyectos.push("proyecto2");
    proyectos.push("ejercicio1");
    proyectos.push("proyecto3");
    proyectos.push("ejercicio2");
    expect(buscarProyecto("fizzbuzz", proyectos)).toEqual("");
  });
});

function buscarProyecto(nombre, proyectos){
  let proyectosEncontrados = [];
  
  for(const proyecto of proyectos){
    if(proyecto === nombre || iniciaPor(proyecto, nombre)){
      proyectosEncontrados.push(proyecto);
    }
  }
  
  if(estaVacia(proyectos) || estaVacia(proyectosEncontrados)){
    return "";
  }

  return proyectosEncontrados;
}

function estaVacia(lista){
  return lista.length === 0;
}

function iniciaPor(proyecto, nombre){
  for(let j=0; j<nombre.length; j++){
    if(nombre[j] != proyecto[j]){
      return false;
    }
  }
  
  return true;
}