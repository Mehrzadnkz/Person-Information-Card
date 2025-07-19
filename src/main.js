import "./style.css";
import Logo from "./assets/images/logo.png";

const Text1 = (text) => {
  return text.replace(/[-]/g, ' ');
};
const Text2 = (text) => {
  return text.replace(/[ ]/g, '_');
};

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
  <main class="container w-full min-h-screen py-8">
    <div class="user-cards-container">
      <div class="user-cards" id="user-cards">
      </div>
    </div>
  </main>
`;

let Admin = 0;
const userCards = document.getElementById("user-cards");

Object.defineProperty(window, 'Admin', {
  get() { return Admin; },
  set(value) {
    Admin = value;
    if (Admin == 1) {
      console.log('Admin Is On');
      userCards.textContent = '';
      GiveIn_formation_From_API();
    }
    else if (Admin !== ) {
      console.log('Admin Is On');
      userCards.textContent = '';
      GiveIn_formation_From_API();
    }
  }
});

const GiveIn_formation_From_API = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      let cardsPerRow;
      console.log(users.length);

      if (!isNaN(users.length)) {
        if ((users.length) % 3 === 0) {
          cardsPerRow = 3;
        } else if (users.length % 2 === 0) {
          cardsPerRow = 2;
        } else {
          cardsPerRow = 3;
        }
      }
      userCards.style.setProperty('--cards-per-row', cardsPerRow);
      let usercard;

      for (let i = 0; i < users.length; i++) {
        const userinformation = users[i];

        usercard = document.createElement("div");
        usercard.classList.add("user-card", `${userinformation.id}`);
        usercard.classList.add("border", "border-green-500", "rounded", "p-4", "bg-white", "rounded-lg", "shadow-md", "p-6", "border-2", "border-orange-500");

        if (Admin == 1) {
          usercard.innerHTML = `
            <div class="flex flex-col md:flex-row md:items-start gap-4">
              <div class="flex-1">
                <h2 class="text-xl font-bold mb-2 text-gray-800">اطلاعات کاربر : ${(userinformation.username)}</h2>
                <p class="text-gray-600 mb-1"><span class="font-semibold">نام :</span> ${(userinformation.name)}</p>
                <p class="text-gray-600 mb-1"><span class="font-semibold">ایمیل :</span> ${(userinformation.email)}</p>
                <p class="text-gray-600 mb-1"><span class="font-semibold">وبسایت :</span> ${(userinformation.website)}</p>
                <p class="text-gray-600"><span class="font-semibold">شرکت :</span> ${(userinformation.company.name)}</p>
                <p class="text-gray-600 mb-1"><span class="font-semibold">فعال در حوضه :</span> ${(userinformation.company.bs)}</p>
              </div>
              <div class="flex-1 border-r pr-4">
                <h3 class="text-lg font-bold mb-2 text-blue-700">مشخصات تکمیلی کاربر</h3>
                <p class="text-gray-600 mb-1"><span class="font-semibold">شماره تلفن :</span> ${(userinformation.phone)}</p>
                <p class="text-gray-600 mb-1"><span class="font-semibold">شهر :</span> ${(userinformation.address.city)}</p>
                <p class="text-gray-600 mb-1"><span class="font-semibold">خیابان :</span> ${(userinformation.address.street)}</p>
                <p class="text-gray-600 mb-1"><span class="font-semibold">کد پستی :</span> ${(userinformation.address.zipcode)}</p>
                <p class="text-gray-600"><span class="font-semibold">مختصات جغرافیایی :</span> ${(userinformation.address.geo.lat)}, ${(userinformation.address.geo.lng)}</p>
              </div>
            </div>
          `;
        }
        else if (Admin == 0) {
          usercard.innerHTML = `
          <h2 class="text-xl font-bold mb-2 text-gray-800">اطلاعات کاربر :  ${(userinformation.username)}</h2>
          <p class="text-gray-600 mb-1"><span class="font-semibold">نام :</span>  ${(userinformation.name)}</p>
          <p class="text-gray-600 mb-1"><span class="font-semibold">ایمیل :</span>  ${(userinformation.email)}</p>
          <p class="text-gray-600 mb-1"><span class="font-semibold">وبسایت :</span>  ${(userinformation.website)}</p>
          <p class="text-gray-600"><span class="font-semibold">شرکت :</span>  ${(userinformation.company.name)}</p>
          <p class="text-gray-600 mb-1"><span class="font-semibold">فعال در حوضه :</span>  ${(userinformation.company.bs)}</p>
          `;
        }
        userCards.appendChild(usercard);
      }

    })
    .catch(error => {
      console.error("خطا در دریافت داده:", error);
      userCards.innerHTML = `<p class="text-red-500 p-4 rounded">خطا در دریافت اطلاعات کاربران</p>`;
    });
};

GiveIn_formation_From_API();