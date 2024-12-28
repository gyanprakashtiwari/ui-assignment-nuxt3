<template>
  <footer>
    <div class="bg bg-custom d-flex justify-content-center align-items-center">
      <div class="container-fluid footer-main">
        <div class="row footer-main-upper py-4">
          <div class="col-lg-2 col">
            <div class="logo-container">
              <img src="/assets/icons/u-logo.png" alt="" /> <span>teach</span>
            </div>
          </div>
          <div class="col-lg-2 col mt-1">
            <div
              class="d-flex flex-column justify-content-start align-items-start space-between"
            >
              <div class="row-top">
                <p>Product</p>
              </div>
              <div class="row-other">
                <p>Pricing</p>
              </div>
              <div class="row-other">
                <p>Overview</p>
              </div>
              <div class="row-other">
                <p>Browse</p>
              </div>
              <div class="row-other">
                <p>Accessibility <span>BETA</span></p>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col mt-1">
            <div
              class="d-flex flex-column justify-content-start align-items-start space-between"
            >
              <div class="row-top">
                <p>Solutions</p>
              </div>
              <div class="row-other">
                <p>Brainstorming</p>
              </div>
              <div class="row-other">
                <p>Ideation</p>
              </div>
              <div class="row-other">
                <p>Wireframing</p>
              </div>
              <div class="row-other">
                <p>Research</p>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col mt-1">
            <div
              class="d-flex flex-column justify-content-start align-items-start space-between"
            >
              <div class="row-top">
                <p>Resources</p>
              </div>
              <div class="row-other">
                <p>Help Center</p>
              </div>
              <div class="row-other">
                <p>Blog</p>
              </div>
              <div class="row-other">
                <p>Tutorials</p>
              </div>
              <div class="row-other">
                <p>FAQs</p>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col mt-1">
            <div
              class="d-flex flex-column justify-content-start align-items-start space-between"
            >
              <div class="row-top">
                <p>Support</p>
              </div>
              <div class="row-other">
                <p>Contact Us</p>
              </div>
              <div class="row-other">
                <p>Developers</p>
              </div>
              <div class="row-other">
                <p>Documentation</p>
              </div>
              <div class="row-other">
                <p>Integrations</p>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col mt-1">
            <div
              class="d-flex flex-column justify-content-start align-items-start space-between"
            >
              <div class="row-top">
                <p>Company</p>
              </div>
              <div class="row-other">
                <p>About</p>
              </div>
              <div class="row-other">
                <p>Press</p>
              </div>
              <div class="row-other">
                <p>Events</p>
              </div>
              <div class="row-other">
                <p>Request Demo &#x2794;</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row footer-main-lower">footer-main-lower</div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.row-top {
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
}
.row-other {
  font-size: 16px;
  font-weight: 400;
  color: #e2e8f0;
}
.row-other p span {
  color: #6b21a8;
  background-color: white;
  border-radius: 1px;
  font-size: 12px;
  font-weight: 400;
  /* margin: 4px; */
}
.logo-container {
  align-items: center !important;
}
.logo-container img {
  height: 20px;
  width: 20px;
  margin-bottom: 5px;
}
.logo-container span {
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
}
.footer-main {
  height: 100%;
  width: 88%;
}
.bg-custom {
  background-color: #0f172a;
  width: 100%;
  height: auto;
  color: white;
}
</style>
