const cursos = [
  {
    nombre: "Química General",
    estado: "aprobado",
    creditos: 4,
    requisito: "Ninguno",
    nota: "85",
    semestre: "1"
  },
  {
    nombre: "Biología Celular",
    estado: "cursando",
    creditos: 3,
    requisito: "Química General",
    nota: "",
    semestre: "2"
  },
  {
    nombre: "Farmacología I",
    estado: "pendiente",
    creditos: 4,
    requisito: "Fisiología",
    nota: "",
    semestre: "5"
  }
];

const container = document.getElementById("malla");

cursos.forEach(curso => {
  const card = document.createElement("div");
  card.className = `card ${curso.estado}`;
  card.innerHTML = `
    <h3>${curso.nombre}</h3>
    <p><strong>Créditos:</strong> ${curso.creditos}</p>
    <p><strong>Requisito:</strong> ${curso.requisito}</p>
    <p><strong>Nota:</strong> ${curso.nota || "—"}</p>
    <p><strong>Semestre:</strong> ${curso.semestre}</p>
  `;
  container.appendChild(card);
});
