// first we create a object to laundry data
// then import the data in a frontend
const work = document.querySelector(".work");
const laundryData = [
  {
    key: 0,
    work: "Dary Cleaning",
    Price: 200,
    emoji: "🧥",

  },
  {
    key: 1,
    work: "Wash & Fold",
    Price: 100,
    emoji: "👔",
  },
  {
    key: 2,
    work: "Ironing",
    Price: 30,
    emoji: "🧺",
  },
  {
    key: 3,
    work: "Stain Removel",
    Price: 500,
    emoji: "🧼",
  },
  {
    key: 4,
    work: "Leather & Cleaning",
    Price: 900,
    emoji: "🟫",
  },
  {
    key: 5,
    work: "Wedding Dress Cleaning",
    Price: 2800,
    emoji: "👗",
  },
];
let i = 0;
for (i = 0; i < laundryData.length; i++) {
  let work2 = "";
  work2 += `<div class="dry-clening">
    <p>
      <span>${laundryData[i].emoji} </span>${laundryData[i].work}<span class="rupees">$ ${laundryData[i].Price}.00</span>
    </p>
    <button class="add-remove-btn" class="add" id="${laundryData[i].key}" type="button">
      Add item <i class="fa-solid fa-circle-plus"></i>
    </button>
  </div>`;
  work.innerHTML += work2;
}

let  array=[];
const order = document.querySelector(".order");
const addbtn = document.querySelectorAll(".dry-clening .add-remove-btn");

// let flag = "";
// let sno=1;
// addbtn.forEach((data) => {
//   data.addEventListener("click", () => {
//     array.push(data)
//     console.log(array);
//     flag += `<div class="first-order">
//     <div class="order-setting">
//       <span>${sno++}</span>
//       <span>${laundryData[data.id].work}</span>
//     </div>
//     <span>$ ${laundryData[data.id].Price}.00</span>
//   </div>`;
//   order.innerHTML = flag;
 

    
//   })

  
// })


console.log(addbtn);
let flag = "";
let id = 0;
let sno = 1;
addbtn.forEach((data) => {
  data.addEventListener("click", () => {
    id = data.id;
    flag += `<div class="first-order">
    <div class="order-setting">
      <span>${sno++}</span>
      <span>${laundryData[id].work}</span>
    </div>
    <span>$ ${laundryData[id].Price}.00</span>
  </div>`;
    order.innerHTML = flag;
    data.classList.add("remove-btn");
    data.classList.remove("add-remove-btn");
    data.innerHTML = "Remove item <i class='fa-solid fa-circle-minus'></i>";

    const removeBtn = document.querySelectorAll(".remove-btn");
    removeBtn.forEach((item)=> {
      item.addEventListener("click", (e) => {
        item.classList.remove("remove-btn");
        item.classList.add("add-remove-btn")
        item.innerHTML = "Add item <i class='fa-solid fa-circle-plus'></i>";
        
      })
    })
  });
});



