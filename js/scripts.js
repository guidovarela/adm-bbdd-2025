
const integrantes = {
    nombres: [
        "Ludmila Sánchez Rufanacht",
        "Alba Tatiana Peralta",
        "Maria Pía Buono",
        "Rodrigo Gomez Muñoz", 
        "Guido Varela Coletta",],
    materia:"Adm. Base de Datos",
    cursada: "2025",
}

for (let i = 0; i < integrantes.nombres.length; i++) {
    document.querySelector(".verIntegrantes").innerHTML += `<li>${integrantes.nombres[i]}</li>`;
}

