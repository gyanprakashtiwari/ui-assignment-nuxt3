<template>
  <div class="container">
    <div class="row mt-5 pt-4">
      <div class="col-lg-6">
        <div class="left-section">
          <div
            class="d-flex justify-content-start align-items-center space-around"
          >
            <h1>Teach Students Worldwide</h1>
          </div>
          <div
            class="d-flex justify-content-start align-items-center space-around"
          >
            <p class="left-section-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At earum
              dolorum saepe, voluptate perspiciatis libero voluptas, repellat
              officia?
            </p>
          </div>

          <div
            class="d-flex justify-content-start align-items-center space-around my-5"
          >
            <div class="col-lg-6">
              <button
                type="button"
                class="btn btn-primary custom-text-singup custom-text-dec-none"
              >
                Sign Up Now
              </button>
            </div>
            <div class="col-lg-6">
              <a href="" class="custom-text-dec-none">
                <img
                  class="mx-2"
                  src="/assets/icons/v_play_vector.png"
                  alt=""
                />
                <span>View Demo</span>
              </a>
            </div>
          </div>
          <div>
            <div class="row mt-4">
              <div
                class="d-flex justify-content-start align-items-start space-around gap-3"
              >
                <div class="col-lg-4 col-md-3">
                  <p class="text-color-company">Trusted by leading companies</p>
                </div>
                <div class="col-lg-8 col-md-9">
                  <div class="row">
                    <div
                      class="d-flex justify-content-start align-items-center space-between gap-2"
                    >
                      <div class="col-2">
                        <img
                          class="company-logo"
                          src="/assets/icons/company/logo1.png"
                          alt=""
                        />
                      </div>
                      <div class="col-2">
                        <img
                          class="company-logo"
                          src="/assets/icons/company/logo2.png"
                          alt=""
                        />
                      </div>
                      <div class="col-2">
                        <img
                          class="company-logo"
                          src="/assets/icons/company/logo3.png"
                          alt=""
                        />
                      </div>
                      <div class="col-2">
                        <img
                          class="company-logo"
                          src="/assets/icons/company/logo4.png"
                          alt=""
                        />
                      </div>
                      <div class="col-2">
                        <img
                          class="company-logo"
                          src="/assets/icons/company/logo5.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div
          class="right-section d-flex justify-content-center align-items-center"
        >
          <div class="row">
            <div class="col-lg-12 col">
              <img
                class="img-fluid"
                src="/assets/icons/hero-col-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-image-contain {
  background-image: cover;
}
.text-color-company {
  color: #475569;
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
}
.custom-text-dec-none {
  text-decoration: none;
}
.custom-text-singup {
  background-color: #ea580c;
  border: none;
  height: 64px;
  width: 239px;
  font-size: 24px;
  font-weight: 700;
  /* margin: 1rem; */
}
.left-section {
  border: none;
}
.left-section h1 {
  font-size: 72px;
  font-weight: 700;
  color: #0f172a;
}
.left-section-text {
  font-size: 24px;
  font-weight: 400;
  color: #0f172a;
}
.right-section {
  border: none;
}
.company-logo {
  height: 32px;
  width: 32px;
}
</style>
