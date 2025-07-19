import "./style.css";
import Logo from "./assets/images/logo.png";

document.querySelector("#app").innerHTML = `
  <!-- Header -->
  <div class="header">
    <div class="logo-div" id="header-elements">
      <div class="header-logo">
        <img src="${Logo}" alt="Logo" />
      </div>
    </div>

    <div class="header-title-div" id="header-elements">
      <div class="header-title">
        <h1>نمایش اطلاعات افراد به صورت کارت</h1>
      </div>
    </div>

    <div class="header-button" id="header-elements">
    <!-- Home Button -->
      <div class="home-link">
        <button><a href="#home">صفحه اصلی</a></button>
      </div>

      <!-- About Button -->
      <div class="about-link">
        <button><a href="#about">درباره</a></button>
      </div>

      <!-- Contact Button -->
      <div class="contact-link">
        <button><a href="#contact">تماس با ما</a></button>
        </div>
        <!-- Account Button -->
      <div class="account-link">
        <button><a href="#account">حساب کاربری</a></button>
      </div>
    </div>

  </div >
  
  <!-- Container -->
  <main class="container">
    <div class="user-cards">

    </div>
  </main>
`;


const userCardcontainer = document.getElementsByClassName("user-cards");
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    const usercard = document.createElement("div");
    if (users.length % 2 == 0) {
      console.log("2");
    }
    else if (users.length % 3 == 0) {
      console.log("3");
    }
    usercard.classList.add("user-card", "border-2", "border-orange-500", "rounded", "p-8", "m-2");
    usercard.innerText = " Meghdar Kol User Hay Sabt Shode : " + users.length;
    console.log("%c Meghdar Kol User Hay Sabt Shode : ", 'color: orange; font-size: 3.5mm;', + users.length);
    userCardcontainer[0].appendChild(usercard);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });


//   for (let i = 0; i < data.length; i++) {
//   console.log("User Shomare : " + (i + 1));
//   console.log(JSON.stringify(data[i]));
// }
// console.log("%c Meghdar Kol User Hay Sabt Shode : ", 'color: orange; font-size: 3.5mm;', + data.length);