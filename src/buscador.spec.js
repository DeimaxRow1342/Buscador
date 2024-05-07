describe("Buscar", () => {
  it("no encuentra proyectos cuando no tiene ninguno en la lista de proyectos", () => {
    let proyectos = [];
    expect(buscarProyecto("ejercicio1", proyectos)).toEqual("");
  });
});

function buscarProyecto(nombre, proyectos){
  return "";
}