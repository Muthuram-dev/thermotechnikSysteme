const products = [
  {
    name: "Industrial Gas Burner",
    img: "images/burners/burner1.jpg",
    desc: "High-efficiency industrial burner suitable for heavy-duty applications.",
    price: "₹85,000"
  },
  {
    name: "Automatic Burner Controller",
    img: "images/controllers/controller1.jpg",
    desc: "Smart control system with automatic flame monitoring.",
    price: "₹35,000"
  },
  {
    name: "Gas Pipeline System",
    img: "images/pipelines/pipeline1.jpg",
    desc: "Complete industrial gas distribution and safety system.",
    price: "₹1,20,000"
  }
];

const container = document.getElementById('productContainer');
const cardBtn = document.getElementById('cardViewBtn');
const listBtn = document.getElementById('listViewBtn');

function renderProducts(view = 'card') {
  container.innerHTML = '';
  products.forEach(p => {
    if (view === 'card') {
      container.innerHTML += `
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img src="${p.img}" class="card-img-top" alt="${p.name}">
            <div class="card-body">
              <h5 class="card-title">${p.name}</h5>
              <p class="card-text">${p.desc}</p>
              <p class="fw-bold text-primary">${p.price}</p>
            </div>
          </div>
        </div>`;
    } else {
      container.innerHTML += `
        <div class="col-12">
          <div class="d-flex border rounded p-3 align-items-center bg-light">
            <img src="${p.img}" class="me-3" style="width:120px;height:80px;object-fit:cover;" alt="${p.name}">
            <div>
              <h5>${p.name}</h5>
              <p class="mb-1">${p.desc}</p>
              <p class="fw-bold text-primary">${p.price}</p>
            </div>
          </div>
        </div>`;
    }
  });
}

cardBtn.addEventListener('click', () => renderProducts('card'));
listBtn.addEventListener('click', () => renderProducts('list'));

renderProducts('card');
