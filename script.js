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
  },
  {
    name: "Electronics Store",
    description: "Electronics e-commerce website with filters, cart, and product comparison.",
    image: "./assets/electronics-store.png",
    live: "./projects/03-electronics-store/index.html",
    code: "https://github.com/KrushnaTaur/frontend-ecommerce-projects/tree/main/projects/03-electronics-store"
  },
  {
    name: "Book Store",
    description: "Online book store with genre filter, search, sorting, and shopping cart functionality.",
    image: "./assets/book-store.png",
    live: "./projects/04-book-store/index.html",
    code: "https://github.com/KrushnaTaur/frontend-ecommerce-projects/tree/main/projects/04-book-store"
  },
  {
    name: "Footwear Store",
    description: "Modern shoe store with size selection, price & category filters, and cart system.",
    image: "./assets/footwear-store.png",
    live: "./projects/05-footwear-store/index.html",
    code: "https://github.com/KrushnaTaur/frontend-ecommerce-projects/tree/main/projects/05-footwear-store"
  },
  {
    name: "Furniture Store",
    description: "Premium furniture showroom website with room-based browsing and catalog-style layout.",
    image: "./assets/furniture-store.png",
    live: "./projects/06-furniture-store/index.html",
    code: "https://github.com/KrushnaTaur/frontend-ecommerce-projects/tree/main/projects/06-furniture-store"
  },
  {
    name: "Plant Nursery Store",
    description: "Calm, nature-inspired plant nursery website with care-based filtering and educational plant details.",
    image: "./assets/plant-nursery-store.png",
    live: "./projects/07-plant-nursery-store/index.html",
    code: "https://github.com/KrushnaTaur/frontend-ecommerce-projects/tree/main/projects/07-plant-nursery-store"
  },
  {
    name: "Sports Equipment Store",
    description: "Bold sports gear ecommerce website with filters, cart, and energetic UI using online images.",
    image: "./assets/sports-equipment-store.png",
    live: "./projects/08-sports-equipment-store/index.html",
    code: "https://github.com/KrushnaTaur/frontend-ecommerce-projects/tree/main/projects/08-sports-equipment-store"
  },
  {
    name: "Gift Shop",
    description: "Cheerful gift store website with occasion-based browsing, filters, and shopping cart.",
    image: "./assets/gift-shop.png",
    live: "./projects/09-gift-shop/index.html",
    code: "https://github.com/KrushnaTaur/frontend-ecommerce-projects/tree/main/projects/09-gift-shop"
  },
  {
    name: "Pharmacy Store",
    description: "Clean healthcare ecommerce website with prescription filtering and medical UI design.",
    image: "./assets/pharmacy-store.png",
    live: "./projects/10-pharmacy-store/index.html",
    code: "https://github.com/KrushnaTaur/frontend-ecommerce-projects/tree/main/projects/10-pharmacy-store"
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
