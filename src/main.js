import "./style.css";
import Logo from "./assets/images/logo.png";

document.querySelector("#app").innerHTML = `
  <!-- Header -->
  <div class="header">
    <div class="logo-div" id="header-elements">
      <div class="header-logo bg-(url(${Logo}))">
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

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    // console.log(data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });