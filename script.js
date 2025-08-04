const teams = [
  { name: "Divas", points: 0, members: ["Alice Ribeiro", "Isabella de Carvalho", "Maria E. Castilho", "Nycolle Almeida", "Vitória de Oliveira"] },
  { name: "Aleatórios", points: 0, members: ["Pedro Augusto", "Fernando Alves", "Victor Matheus", "Samuel Lino", "Gustavo Dranka"] },
  { name: "Capivários", points: 1, members: ["Pedro Cantero", "Gustavo de Camargo", "Homero Iorio", "João Guilherme", "Giovanna Justino"] },
  { name: "Os Mais Mais", points: 0, members: ["Ana Heloyza", "Angélica Natália", "Guilherme Nunes", "Larissa Vitória", "Lucas Sordi"] },
  { name: "Esqueci o nome", points: 2, members: ["Mariana da Fonseca", "Andrielli Fernanda", "Stephany Taynara", "Grazielly Thauany", "Gabriely de Melo"] }
];

// Ordena por pontuação decrescente
teams.sort((a, b) => b.points - a.points);

const rankingBody = document.getElementById("ranking-body");

teams.forEach((team, index) => {
  const row = document.createElement("tr");

  const positionCell = document.createElement("td");
  positionCell.classList.add("position");
  positionCell.textContent = `${index + 1}°`;

  if (index === 0) positionCell.classList.add("gold");
  else if (index === 1) positionCell.classList.add("silver");
  else if (index === 2) positionCell.classList.add("bronze");

  row.appendChild(positionCell);
  row.innerHTML += `
    <td>${team.name}</td>
    <td>${team.points}</td>
  `;

  row.addEventListener("click", () => toggleExpand(row, team.members));
  rankingBody.appendChild(row);
});

function toggleExpand(row, members) {
  const nextRow = row.nextElementSibling;

  // Se já está expandido, remova
  if (nextRow && nextRow.classList.contains("expand-row")) {
    nextRow.remove();
    return;
  }

  // Se outra equipe estiver expandida, feche
  const existingExpanded = document.querySelector(".expand-row");
  if (existingExpanded) existingExpanded.remove();

  // Cria nova linha expandida
  const expandRow = document.createElement("tr");
  expandRow.classList.add("expand-row");

  const expandCell = document.createElement("td");
  expandCell.colSpan = 3;
  expandCell.innerHTML = `<strong>Membros:</strong> ${members.join(", ")}`;

  expandRow.appendChild(expandCell);
  row.parentNode.insertBefore(expandRow, row.nextSibling);
}
