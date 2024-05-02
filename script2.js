const style = document.createElement("style");
style.textContent = `
  .dry-cleaning {
    margin-bottom: 20px;
  }
  .add-remove-btn {
    cursor: pointer;
  }
`;
document.head.appendChild(style);

const work = document.querySelector(".work");
const order = document.querySelector(".order");
const laundryData = [
  {
    key: 0,
    work: "Dary Cleaning",
    Price: 200,
    emoji: "🧥",
    selected: false,
  },
  {
    key: 1,
    work: "Wash & Fold",
    Price: 100,
    emoji: "👔",
    selected: false,
  },
  {
    key: 2,
    work: "Ironing",
    Price: 30,
    emoji: "🧺",
    selected: false,
  },
  {
    key: 3,
    work: "Stain Removel",
    Price: 500,
    emoji: "🧼",
    selected: false,
  },
  {
    key: 4,
    work: "Leather & Cleaning",
    Price: 900,
    emoji: "🟫",
    selected: false,
  },
  {
    key: 5,
    work: "Wedding Dress Cleaning",
    Price: 2800,
    emoji: "👗",
    selected: false,
  },
];

function renderLaundryItems() {
  let workHTML = "";
  laundryData.forEach((item) => {
    workHTML += `
      <div class="dry-cleaning hello">
        <p>
          <span>${item.emoji}</span>${item.work}<span class="rupees">$ ${item.Price}.00</span>
        </p>
        <button class="add-remove-btn" data-key="${item.key}" type="button">
          Add item <i class="fas fa-plus-circle"></i>
        </button>
      </div>
    `;
  });

  work.innerHTML = workHTML;
}

function updateOrder() {
  let flag = "";
  let sno = 1;
  order.innerHTML = "";
  laundryData.forEach((item) => {
    if (item.selected) {
      flag += `
        <div class="first-order">
          <div class="order-setting">
            <span>${sno++}</span>
            <span>${item.work}</span>
          </div>
          <span>$ ${item.Price}.00</span>
        </div>
      `;
    }
    calCulateAmount();
  });

  order.innerHTML = flag;
}

function toggleSelection(key) {
  const item = laundryData.find((item) => item.key === key);
  item.selected = !item.selected;
  updateOrder();
}

function setupEventListeners() {
  const addRemoveButtons = document.querySelectorAll(".add-remove-btn");
  addRemoveButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = parseInt(button.dataset.key);
      toggleSelection(key);
      if (laundryData[key].selected) {
        button.innerHTML = "Remove item <i class='fas fa-minus-circle'></i>";
        button.classList.add("remove-btn");
      } else {
        value--;
        console.log(value);
        button.innerHTML = "Add item <i class='fas fa-plus-circle'></i>";
        button.classList.remove("remove-btn");
      }
    });
  });
}
function calCulateAmount() {
  const totalAmount = document.querySelector(".total");
  let total = 0;
  laundryData.forEach((item) => {
    totalAmount.textContent = `${item.Price}`;
    if (item.selected) {
      total += item.Price;
    }
  });
  totalAmount.innerHTML = `$ ${total}.00`;
}

var value = 0;
function update() {
  laundryData.forEach((item) => {
    if (item.selected === true) {
      value++;
      fromeValidation();
    }
  });
}
function fromeValidation() {
  const fullName = document.querySelector(".fullName").value;
  const email = document.querySelector(".email").value;
  const number = document.querySelector(".number").value;
  if (fullName != "" && email != "" && number != "") {
    if (value >= 1) {
      const lastmasseg = document.querySelector(".last-msg");
      lastmasseg.textContent = "Your order has been placed successfully.";
      lastmasseg.style.color = "green";
      document.querySelector(".fullName").value = "";
      document.querySelector(".email").value = "";
      document.querySelector(".number").value = "";
      console.log(value, "suja");
    } else {
      // const lastmasseg = document.querySelector(".last-msg");

      // lastmasseg.textContent = "Please fill all the fields.";
      // lastmasseg.style.color = "red";
      alert(value);
    }
  } else {
    const lastmasseg = document.querySelector(".last-msg");

    lastmasseg.textContent = "Please fill all the fields.";
    lastmasseg.style.color = "red";
    alert(value);
  }
}
const booknowbtn = document.querySelector(".book-now-btn");
booknowbtn.addEventListener("click", () => {
  update();
});

renderLaundryItems();
setupEventListeners();
