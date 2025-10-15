import './style.css'

// Import assets
import menuIcon from './assets/menu.png'
import danilMainImg from './assets/danilMain.png'

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Varioqub flags
  initVarioqubFlags();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Varioqub flag integration
let isHeaderLinks = false;

// Function to initialize Varioqub flags
function initVarioqubFlags() {
  if (typeof ymab !== 'undefined') {
    ymab('metrika.104644323', 'getFlags', function(flags) {
      isHeaderLinks = flags.isHeaderLinks || false;
      renderHeader();
    });
  } else {
    // Fallback if Varioqub is not loaded
    setTimeout(initVarioqubFlags, 100);
  }
}

// Function to render header with or without social links
function renderHeader() {
  const navRightSection = document.getElementById('nav-right-section');
  if (!navRightSection) return;

  // Clear existing social links (if any)
  const existingSocialLinks = navRightSection.querySelector('.header-social-links');
  if (existingSocialLinks) {
    existingSocialLinks.remove();
  }

  if (isHeaderLinks) {
    // Add social links for variant B
    const socialLinksHTML = `
      <div class="header-social-links d-none d-md-flex align-items-center me-3">
        <a href="https://vk.com/dkulyaev" class="text-decoration-none me-2" target="_blank" title="VK">
          <img src="/vk.svg" width="24" height="24" alt="VK">
        </a>
        <a href="https://t.me/diflymer" class="text-decoration-none" target="_blank" title="Telegram">
          <img src="/telegram.svg" width="24" height="24" alt="Telegram" style="filter: brightness(0) invert(1);">
        </a>
      </div>`;

    // Insert social links before the dropdown
    const dropdown = navRightSection.querySelector('.dropdown');
    if (dropdown) {
      dropdown.insertAdjacentHTML('beforebegin', socialLinksHTML);
    }
  }
}

// Create HTML content with imported assets
const htmlContent = `
  <!-- Navigation -->
  <div class="tabs-to-dropdown mb-5">
    <div class="nav-wrapper d-flex justify-content-between align-items-center" id="nav-wrapper">
      <ul class="nav nav-pills d-none d-md-flex" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <a class="nav-link active" id="pills-company-tab" href="#main" role="tab" aria-controls="pills-company" aria-selected="true">Главная</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="pills-projects-tab" href="#projects" role="tab" aria-controls="pills-projects" aria-selected="false">Проекты</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link link-danger disabled" id="pills-product-tab" href="#" role="tab" aria-controls="pills-product" aria-selected="false">Блоги</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link link-danger disabled" id="pills-contact-tab" href="#" role="tab" aria-controls="pills-contact" aria-selected="false">Файлы</a>
        </li>
      </ul>

      <div class="d-flex align-items-center" id="nav-right-section">
        <div class="dropdown">
          <ul class="nav nav-pills d-flex d-md-none">
            <button class="btn dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <img id="menu-spin" src="` + menuIcon + `" height="40" alt="Menu">
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#main">Главная</a></li>
              <li><a class="dropdown-item" href="#projects">Проекты</a></li>
              <li><a class="dropdown-item link-danger disabled" href="#">Блоги</a></li>
              <li><a class="dropdown-item link-danger disabled" href="#">Файлы</a></li>
            </ul>
          </ul>
        </div>
      </div>

    </div>
  </div>

  <!-- Main Content -->
  <div class="container-fluid">
    <!-- Hero Section -->
    <div id="main" class="row ff-jb">
      <div class="d-none d-lg-block col"></div>
      <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <div class="imgdiv">
          <img class="img img-fluid" src="` + danilMainImg + `" alt="Danil Kulyaev">
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 danildesc">
        <div>
          <h1 class="head mb-5"><div class="anihead">Добро пожаловать</div></h1>
        </div>
  <div>
          <ul class="borderlist">
            <li>веб-разработчик</li>
            <li>I.learn(web)</li>
            <li>программист</li>
            <li>.then((result) => success())</li>
            <li>хороший человек</li>
          </ul>
        </div>
        <div class="divName" align="center">
          <h1 id="name">Данил Куляев</h1>
        </div>
      </div>
      <div class="d-none d-lg-block col"></div>
    </div>

    <!-- Section Divider -->
    <div class="section-divider">
      <div class="container">
        <hr class="divider-line">
      </div>
    </div>

    <!-- Projects Section -->
    <div id="projects" class="row my-5">
      <div class="col-12">
        <h2 class="text-center mb-5">Мои проекты</h2>
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card bs-i h-100 project-card">
              <div class="card-body">
                <h5 class="card-title">Интернет-магазин</h5>
                <p class="card-text">Полнофункциональный интернет-магазин с авторизацией пользователей, корзиной, системой оплаты и управлением товарами.</p>
                <div class="project-tech mb-3">
                  <span class="badge bg-success me-1">PHP</span>
                  <span class="badge bg-success me-1">Laravel</span>
                  <span class="badge bg-success me-1">Bootstrap</span>
                  <span class="badge bg-success me-1">MySQL</span>
                  <span class="badge bg-success me-1">Ajax</span>
                </div>
                <p class="card-text"><small class="text-muted">2023</small></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card bs-i h-100 project-card">
              <div class="card-body">
                <h5 class="card-title">Система комментариев</h5>
                <p class="card-text">Модульная система комментариев для веб-приложений с модерацией, рейтингом и древовидной структурой.</p>
                <div class="project-tech mb-3">
                  <span class="badge bg-success me-1">PHP</span>
                  <span class="badge bg-success me-1">Laravel</span>
                  <span class="badge bg-success me-1">AJAX</span>
                  <span class="badge bg-success me-1">MySQL</span>
                </div>
                <p class="card-text"><small class="text-muted">2023</small></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <a href="https://vk.com/app54157183" target="_blank" class="text-decoration-none">
              <div class="card bs-i h-100 project-card">
                <div class="card-body">
                  <h5 class="card-title d-flex align-items-center">
                    Дебат Арена
                    <img src="/vk-icon.svg" width="20" height="20" alt="VK" class="ms-2">
                  </h5>
                  <p class="card-text">Мини-приложение в VK Mini Apps для дебатов 1 на 1. Игроки выбирают темы, аргументируют позиции и голосуют за победителя.</p>
                  <div class="project-tech mb-3">
                    <span class="badge bg-primary me-1">VK Mini Apps</span>
                    <span class="badge bg-primary me-1">React</span>
                    <span class="badge bg-primary me-1">Node.js</span>
                    <span class="badge bg-primary me-1">Express.js</span>
                    <span class="badge bg-primary me-1">WebSocket</span>
                    <span class="badge bg-primary me-1">MongoDB</span>
                  </div>
                  <p class="card-text"><small class="text-muted">2024 - разработка</small></p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="card bs-i h-100 project-card">
              <div class="card-body">
                <h5 class="card-title">Персональный сайт</h5>
                <p class="card-text">Этот самый сайт - портфолио веб-разработчика с уникальным дизайном, интерактивными элементами и адаптивной версткой.</p>
                <div class="project-tech mb-3">
                  <span class="badge bg-info me-1">Vite</span>
                  <span class="badge bg-info me-1">JavaScript</span>
                  <span class="badge bg-info me-1">CSS3</span>
                  <span class="badge bg-info me-1">Bootstrap</span>
                  <span class="badge bg-info me-1">HTML5</span>
                </div>
                <p class="card-text"><small class="text-muted">2024</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="text-center text-lg-start bg-light text-muted mt-5">
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom social">
      <div class="me-5 d-none d-lg-block">
        <span>Социальные сети:</span>
      </div>
      <div>
        <a href="https://vk.com/dkulyaev" class="me-3 text-decoration-none" target="_blank" title="VK">
          <img src="/vk.svg" width="28" height="28" alt="VK">
        </a>
        <a href="https://t.me/diflymer" class="me-3 text-decoration-none" target="_blank" title="Telegram">
          <img src="/telegram.svg" width="28" height="28" alt="Telegram" style="filter: brightness(0) invert(1);">
        </a>
      </div>
    </section>
  </footer>
`;

// Insert main content
document.querySelector('#app').innerHTML = htmlContent;

// Initial render of header (will be updated when Varioqub flags are loaded)
renderHeader();
