const projects = [
  {
    name: "Clothing Store",
    description: "Fashion e-commerce website with product listing and UI interactions.",
    image: "./assets/clothing-store.png",
    live: "./projects/01-clothing-store/index.html",
    code: "https://github.com/KrushnaTaur/frontend-ecommerce-projects/tree/main/projects/01-clothing-store"
  },
  {
    name: "Grocery Store",
    description: "Online grocery shop layout with clean UI and responsive design.",
    image: "./assets/grocery-store.png",
    live: "./projects/02-grocery-store/index.html",
    code: "https://github.com/KrushnaTaur/frontend-ecommerce-projects/tree/main/projects/02-grocery-store"
  }
];

const grid = document.getElementById("projectsGrid");
const count = document.getElementById("projectCount");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
    <img src="${project.image}" alt="${project.name}" class="project-image">
    <div class="project-content">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="buttons">
        <a href="${project.live}" class="btn primary">Open Website</a>
        <a href="${project.code}" target="_blank" class="btn secondary">View Code</a>
      </div>
    </div>
  `;

  grid.appendChild(card);
});

count.textContent = projects.length;
