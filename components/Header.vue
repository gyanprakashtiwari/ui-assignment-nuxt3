<template>
  <header class="header">
    <div class="laptop-view">
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

        <!-- Navigation Links -->
        <nav class="nav-links">
          <NuxtLink to="/products">Products</NuxtLink>
          <NuxtLink to="/solutions">Solutions</NuxtLink>

          <!-- Resources Dropdown -->
          <div
            class="resources-menu"
            @mouseenter="showMenu"
            @mouseleave="hideMenu"
          >
            <NuxtLink to="#" class="nav-link"
              >Resources
              <!-- Dropdown Icon -->
              <span class="dropdown-icon">&#x2304; </span>
            </NuxtLink>

            <!-- Down arrow symbol -->
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

        <!-- Login and Signup Buttons -->
        <div class="auth-buttons">
          <NuxtLink to="/login" class="login-btn">Log In</NuxtLink>
          <NuxtLink to="/signup" class="signup-btn">Sign Up Now</NuxtLink>
        </div>
      </div>
    </div>
    <div class="mobile-view"></div>
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
/* Header Styling */
@media (width <= 768px) {
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
}

.custom-display-none {
  display: none;
}
.header {
  width: 100%;
  background-color: white;
  color: black;
  display: flex;
  padding: 1rem 0;
}
.custom-text-decoration-none {
  text-decoration: none !important;
}

/* Logo */
.logo {
  margin-right: 2rem; /* Optional, to add spacing between the logo and nav-links */
}
.logo-text {
  color: green;
}

/* Navigation Links */
.nav-links {
  display: flex;
  gap: 2.5rem; /* Increased spacing between navigation links */
  justify-content: left;
  font-weight: 500;
}

.nav-links a,
.resources-menu .nav-link {
  text-decoration: none;
  transition: color 0.3s ease;
}

/* Resources Dropdown */
.resources-menu {
  position: relative;
  display: flex;
  align-items: center; /* Ensures vertical alignment between text and icon */
}

.resources-menu .nav-link {
  display: flex;
  align-items: center; /* Aligns icon with the text */
  gap: 0.3rem; /* Adds spacing between text and icon */
  color: #0f172a; /* Matches the design color */
  text-decoration: none; /* Removes underline */
}

.dropdown-icon {
  font-size: 1.1rem; /* Icon size */
  color: #0f172a; /* Icon color */
  line-height: 1; /* Ensures consistent line height */
  transition: transform 0.2s ease; /* Adds hover animation */
  margin-bottom: auto;
}

/* Dropdown Menu */
.dropdown-menu {
  display: none;
  position: absolute;
  top: calc(100% + 0.5rem); /* Spacing from the parent */
  left: 0;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 0.5rem;
}

.resources-menu:hover .dropdown-menu {
  display: block;
}

.dropdown-item {
  display: block;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: black;
  transition: background-color 0.3s ease;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

/* Authentication Buttons */
.auth-buttons {
  display: flex;
  gap: 1rem;
  margin-left: auto; /* Pushes the auth buttons to the right */
}

.login-btn {
  padding: 0.5rem 1rem;
  text-decoration: none;
  background: none;
  border: none;
  transition: color 0.3s ease;
}

.login-btn:hover {
  text-decoration: none;
}

.signup-btn {
  padding: 0.5rem 1.5rem; /* More horizontal padding for better balance */
  text-decoration: none;
  border: 2px solid black; /* Use primary color for the border */
  border-radius: 6px; /* Rounded corners */
  color: black; /* Primary text color */
  background: transparent; /* No background initially */
  transition: all 0.3s ease; /* Smooth transition for hover effects */
}

.signup-btn:hover {
  border-color: black; /* Change border to match gradient */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow effect */
}
</style>
