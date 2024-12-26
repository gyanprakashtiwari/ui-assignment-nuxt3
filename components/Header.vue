<template>
  <header>
    <div class="container laptop-view">
      <div class="row mt-3">
        <div class="col-lg-8 col-md-6 col mt-2">
          <div class="d-flex justify-content-start gap-4">
            <div>
              <Logo title="BrandName" />
            </div>
            <div class="custom-link">
              <NuxtLink to="/products">Products</NuxtLink>
            </div>
            <div class="custom-link">
              <NuxtLink to="/solutions">Solutions</NuxtLink>
            </div>
            <div class="custom-link">
              <NuxtLink to="/pricing">Pricing</NuxtLink>
            </div>
            <div class="custom-link">
              <NuxtLink to="/resources">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mt-2">
          <div class="d-flex justify-content-end gap-3">
            <div class="custom-link">
              <NuxtLink to="/login">Log In</NuxtLink>
            </div>
            <div class="custom-link">
              <NuxtLink to="/signup">
                <button
                  type="button"
                  class="btn btn-outline-dark btn-sm singup-btn"
                >
                  Sing Up Now
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="laptop-view">
      <div class="row">
        <div class="col-lg-8 col-md-6 col-4">
          <div class="d-flex justify-content-start gap-4">
            <div>apple</div>
            <div>orange1</div>
            <div>orange2</div>
            <div>orange3</div>
            <div>orange4</div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="d-flex justify-content-end gap-3">
            <div>right1</div>
            <div>right2</div>
          </div>
        </div>

        <div class="logo">
          <NuxtLink class="custom-text-decoration-none" to="/">
            <Logo title="BrandName" />
          </NuxtLink>
        </div>

        <nav class="nav-links">
          <NuxtLink to="/products">Products</NuxtLink>
          <NuxtLink to="/solutions">Solutions</NuxtLink>

          <div
            class="resources-menu"
            @mouseenter="showMenu"
            @mouseleave="hideMenu"
          >
            <NuxtLink to="#" class="nav-link"
              >Resources
              <span class="dropdown-icon">&#x2304; </span>
            </NuxtLink>

            <div v-if="menuVisible" class="dropdown-menu">
              <NuxtLink to="/resource1" class="dropdown-item"
                >Resource1</NuxtLink
              >
              <NuxtLink to="/resource2" class="dropdown-item"
                >Resource2</NuxtLink
              >
            </div>
          </div>
        </nav>

        <div class="auth-buttons">
          <NuxtLink to="/login" class="login-btn">Log In</NuxtLink>
          <NuxtLink to="/signup" class="signup-btn">Sign Up Now</NuxtLink>
        </div>
      </div>
    </div> -->
    <!-- <div class="mobile-view"></div> -->
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuVisible = ref(false);

const showMenu = () => {
  menuVisible.value = true;
};

const hideMenu = () => {
  menuVisible.value = false;
};
</script>
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
.custom-brand {
  margin-right: -4rem;
  margin-top: auto;
}
.custom-link a {
  text-decoration: none;
  color: black;
}
.signup-btn {
  margin: auto;
  color: black;
  font-style: bold;
  font-size: 16px;
  font-weight: 400;
}
</style>
