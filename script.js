// ===============================
// FINDLIX HUB - script.js
// ===============================

// Sample Product Data
const products = [
  {
    id: 1,
    name: "Spider-Man Gaming Mouse Pad",
    category: "Spider-Man",
    price: "₹249",
    rating: "4.4 ⭐",
    image: "https://m.media-amazon.com/images/I/81HurMPNiCL._SL1500_.jpg",
    affiliate: "https://amzn.to/4xiAb1i"
  },
  {
    id: 2,
    name: "Spider-Man School Bag",
    category: "School",
    price: "₹289",
    rating: "4.0 ⭐",
    image: "https://m.media-amazon.com/images/I/71hhw-98siL._SL1500_.jpg",
    affiliate: "https://www.amazon.in/Kuber-Industries-Spider-Man-Compartment-Bagpack/dp/B0BSNG27R7/ref=sr_1_106?crid=1IO6BDJCTMMJK&dib=eyJ2IjoiMSJ9.yv84MyfZrfR3iggu2PUoH__u652ir3M7I3j0TMqmhdi8fmCiTxanz2C2ZEaGMhQSbxRfvWUnVEBRPB1Sq8Cj0WzqjYnjtyfNdj3ICpPNnd_0OSQt0UV_QC73fktw0xC8KHB3KTb2P5rJdV4luJ2v80ta1ehZg3KeI_w_pvXHyqXZmOlOS4xFdD7arRyW2a47N1CQGQYuu9cL-5H2FC7GJobBzGk3Lt644aO2_C-X7X9XUIFCCKC2qLlhwCFCSxPW-U23LLWJu2n_k_80_XJmoDeMj_PSWkcmTWUS1JGX9MY.frvPjzZ4BVOO-u3oescAgmCQ4YJj-3qWkQVmLqs24GE&dib_tag=se&keywords=spiderman&qid=1785516768&refinements=p_36%3A-33000&rnid=2485523031&sprefix=spiderman%2Caps%2C283&sr=8-106&xpid=xPxys5kOzXpWj&th=1"
  },
  {
    id: 3,
    name: "Spider-Man T-Shirt",
    category: "Fashion",
    price: "₹349",
    rating: "4.1 ⭐",
    image: "https://m.media-amazon.com/images/I/61qm0qeJtEL._SX679_.jpg",
    affiliate: "https://amzn.to/3TRxNA1"
  },
  {
    id: 4,
    name: "Spider-Man Pillow",
    category: "Home",
    price: "₹258",
    rating: "4.0 ⭐",
    image: "https://m.media-amazon.com/images/I/8167BzGh5XL._SL1500_.jpg",
    affiliate: "https://amzn.to/4bTPaq0"
  },
  {
    id: 5,
    name: "Spider-Man 3D Toothbrush",
    category: "Kids",
    price: "₹199",
    rating: "4.5 ⭐",
    image: "https://m.media-amazon.com/images/I/81T-pOLXjEL._SL1500_.jpg",
    affiliate: "https://amzn.to/4fHozPz"
  },
  {
    id: 6,
    name: "LCD Writing Tablet",
    category: "Tech",
    price: "₹499",
    rating: "3.9 ⭐",
    image: "https://m.media-amazon.com/images/I/71GcMTUGhbL._SL1200_.jpg",
    affiliate: "https://amzn.to/3TnevT4"
  },

    {
    id: 7,
    name: "Spider-Man Boys Costume Set with Mask",
    category: "Tech",
    price: "₹299",
    rating: "3.7 ⭐",
    image: "https://m.media-amazon.com/images/I/51jF+z5meRL._SX679_.jpg",
    affiliate: "https://amzn.to/4h9nj8U"
  }
];

// Product Container
const container = document.getElementById("productContainer");

// Load Products
function displayProducts(items) {

  container.innerHTML = "";

  items.forEach(product => {

    container.innerHTML += `

    <div class="product-card">

        <img src="${product.image}" alt="${product.name}">

        <div class="product-content">

            <span class="category">${product.category}</span>

            <h3>${product.name}</h3>

            <p class="rating">${product.rating}</p>

            <h2>${product.price}</h2>

            <a
               href="${product.affiliate}"
               target="_blank"
               class="buy-btn">

            🔗 Amazon Link 

            </a>

        </div>

    </div>

    `;

  });

}

displayProducts(products);

// Search
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

  const value = this.value.toLowerCase();

  const filtered = products.filter(product =>

      product.name.toLowerCase().includes(value) ||
      product.category.toLowerCase().includes(value)

  );

  displayProducts(filtered);

});