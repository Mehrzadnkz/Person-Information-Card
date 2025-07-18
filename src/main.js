import './style.css'

document.querySelector('#app').innerHTML = `
<!-- Header -->
<div class="header">
  <!-- Logo -->
  <div class="logo">
    <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4c8.svg" alt="Logo" />
    <span>MyApp</span>
  </div>
  <!-- Search -->
  <div class="search">
    <input type="text" placeholder="جستجو..." />
  </div>
  <!-- Icons -->
  <div class="icons">
    <!-- Home Icon -->
    <button title="صفحه اصلی">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6"/>
      </svg>
    </button>
    <!-- Account Icon -->
    <button title="اکانت">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    </button>
    <!-- More Icon -->
    <button title="بیشتر">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="5" cy="12" r="2"/>
        <circle cx="12" cy="12" r="2"/>
        <circle cx="19" cy="12" r="2"/>
      </svg>
    </button>
  </div>
</div>
<!-- Main Content -->
<div class="container">
  <h1>Person Information Card</h1>
  <div class="card">
  </div>
</div>
`

