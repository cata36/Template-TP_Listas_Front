/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas-extended.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data;                   // Asignar el JSON a la variable comidas
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });

let comidas= [];

const container = document.getElementById('comidaContainer');

function mostrarComidas (lista = comidas){
  container.innerHTML= "";
  lista forEach(comida => {
    container.innerHTML += `
    <article class="card">
      <header class="card-header">
        <h2>${comida.nombre}</h2>
        <span class="categoria">${comida.categoria}</span>
      </header>
      <p class="provincia">${comida.provincia}</p>
      <div class="ingredientes">
        <strong>Ingredientes:</strong>
        <ul>
          ${comida.ingredientes.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
      </div>
    </article>
    `; 
  })
}

comidas.forEach(comida => {
  container.innerHTML += `
  <article class="card">
    <header class="card-header">
      <h2>${comida.nombre}</h2>
      <span class="categoria">${comida.categoria}</span>
    </header>
    <p class="provincia">${comida.provincia}</p>
    <div class="ingredientes">
      <strong>Ingredientes:</strong>
      <ul>
        ${comida.ingredientes.map(ing => `<li>${ing}</li>`).join('')}
      </ul>
    </div>
  </article>
  `}; 
})

const filtroCategoria = document.getElementById ("filtroCategoria")
const filtroProvincia = document.getElementById ("filtroProvincia")
const busqueda = document.getElementById ("buscador")

function filtrar () {
  let comidasFiltradas = comidas.filter( comida => { 
    return comida.categoria.includes (FileSystemDirectoryHandle.Categoria.value)
    && comida.provincia.includes(filtroProvincia.value)
  })
  mostrarComidas (comidasFiltradas)
}

function buscar() {
  let comidasFiltradas = comidas.filter ( comida => {
    return comida.nombre.toLowerCase().includes (busqueda.value.toLowerCase())
    || comida.nombre.toLowerCase().includes (busqueda.value.toLowerCase())
    || comida.categoria.toLowerCase().includes (busqueda.value.toLowerCase())

  } )
  mostrarComidas (comidasFiltradas)
}

filtroCategoria.addEventListener("change", filtrar)
filtroProvincia.addEventListener("change", filtrar)
busqueda.addEventListener("input", buscar)

function actualizarFiltros() {
  let categorias = []

  comidas.forEach(comida => {
    if(categorias.includes(comida.categoria)){
    categorias.push (comida.categoria)}
  })
  filtroCategoria.innerHTML += `g<option value="${categoria}">${categoria}</option>`
}
const agregarIngredienteBtn = document.getElementById("agregarIngrediente")
const ingredientesContainer = document.querySelector(".contenedor-ingredientes")

agregarIngredientes.addEventListener("click", () => {
  ingredientesContainer.innerHTML +=
  <input type = "text" class="ingrediente" placeholder= "ingrediente" required>

  </input>
})