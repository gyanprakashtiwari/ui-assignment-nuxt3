<template>
  <header>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light custom-nav">
        <div class="container-fluid">
          <a class="navbar-brand custom-brand" href="#">
            <img
              src="/assets/icons/u-logo-black-dot.png"
              alt=""
              class="d-inline-block align-text-top"
            />
            teach
          </a>
          <button
            class="navbar-toggler custom-navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse custom-navbar-toggler"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 space-between gap-3">
              <li class="nav-item custom-nav-link-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >Products</a
                >
              </li>
              <li class="nav-item custom-nav-link-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >Solutions</a
                >
              </li>
              <li class="nav-item custom-nav-link-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >Pricing</a
                >
              </li>
              <li class="nav-item dropdown custom-nav-link-item">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="d-flex space-between gap-3">
              <button class="btn custom-login" type="submit">Log In</button>
              <button class="btn custom-singup" type="submit">
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* @media (width <= 768px) {
  .laptop-view {
    display: none;
  }
  .mobile-view {
    display: block;
  }
}

@media (width >= 769px) {
  .laptop-view {
    display: block;
  }
  .mobile-view {
    display: none;
  }
} */
.custom-navbar-toggler {
  border: none;
}
.custom-navbar-toggler:focus,
.custom-navbar-toggler:active {
  outline: none;
  box-shadow: none;
  border: none;
}
.custom-nav-link-item {
  color: #0f172a !important;
  font-size: 16px !important;
  font-weight: 400 !important;
}
.custom-singup {
  border: 2px solid #0f172a;
  color: #0f172a;
}
.custom-login {
  border: none;
  color: #0f172a;
}
.custom-nav {
  background-color: white !important;
}
.custom-brand {
  font-size: 26px;
  font-weight: 700;
  color: #0f172a;
}
.custom-brand img {
  height: 23px;
  width: 22px;
  margin-top: 5px;
}
</style>
