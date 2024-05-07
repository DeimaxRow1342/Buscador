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
});

function buscarProyecto(nombre, proyectos){
  let proyectosEncontrados = [];
  
  if(proyectos.length===0){
    return "";
  }
  
  for(let i=0; i<proyectos.length; i++){
    if(proyectos[i] == nombre){
      proyectosEncontrados.push(proyectos[i]);
    }
  }

  return proyectosEncontrados;
}