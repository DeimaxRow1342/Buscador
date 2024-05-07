describe("Buscar", () => {
  it("no encuentra proyectos cuando no tiene ninguno en la lista de proyectos", () => {
    let proyectos = [];
    expect(buscarProyecto("ejercicio1", proyectos)).toEqual("");
  });

  it("encuentra proyectos cuando el mismo existe en una lista de un proyecto", () => {
    let proyectos = [];
    proyectos.push("miUnicoProyecto");
    expect(buscarProyecto("miUnicoProyecto", proyectos)).toEqual("miUnicoProyecto");
  });
});

function buscarProyecto(nombre, proyectos){
  if(proyectos[0]===nombre){
    return proyectos[0];
  }
  return "";
}