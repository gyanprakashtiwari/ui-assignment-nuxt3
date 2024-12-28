<template>
  <div class="container">
    <div class="row">
      <div class="right-section col-lg-7">
        <div
          class="bg custom-background-img outer-div d-flex justify-content-start align-items-start"
        >
          <div class="row my-auto custom-single-card">
            <div class="">
              <div class="col-4 custom-small-card">
                <div>
                  <div class="bg text-wrap custom-content-popular">
                    <p>Popular</p>
                  </div>
                </div>
                <div>
                  <div class="bg text-wrap custom-sub-heading">
                    Design for how people think
                  </div>
                </div>
                <div>
                  <div class="bg text-wrap custom-content-sub-heading">
                    <p>
                      Egestas elit dui scelerisque ut eu purus aliquam vitae
                      habitasse.
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-primary custom-btn"
                  >
                    Take Lesson
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="left-section col-lg-5 d-flex flex-column justify-content-center align-items-start"
      >
        <div class="mt-5">
          <div class="">
            <h1 class="fw-bolder">All the cool features</h1>
          </div>
          <div class="mt-4">
            <p>
              Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio
              ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
              pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,
              ullamcorper non viverra a, neque orci.
            </p>
          </div>
          <div class="my-4">
            <a href="#" class="text-decoration-none">
              Find more about the app
              <img src="/assets/icons/right-arrow.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-single-card {
  margin-left: 2.5rem !important;
  margin-bottom: 13rem !important;
}
.custom-btn {
  /* color: #2563eb; */
  height: 40px;
  width: 150px;
  font-size: 14px;
  font-weight: 400;
}
/* .custom-btn :hover {
    color: white;
  } */
.custom-content-sub-heading {
  font-size: 14px;
  font-weight: 300;
  color: #475569;
}
.custom-sub-heading {
  font-size: 20px;
  font-weight: 500;
  color: #0f172a;
}
.custom-small-card {
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  width: 170px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 5px;
}
.custom-content-new {
  color: #166534;
  text-align: center;
  width: 71px;
  height: 24px;
  background-color: #dcfce7;
  color: #1e40af;
  border-radius: 4px;
  padding: 2px;
  font-size: 14px;
  font-weight: 400;
}
.custom-content-popular {
  width: 71px;
  height: 24px;
  text-align: center;

  background-color: #dbeafe;
  color: #1e40af;
  border-radius: 4px;
  padding: 2px;
  font-size: 14px;
  font-weight: 400;
}
.custom-content-feature {
  width: 71px;
  height: 24px;
  background-color: #f3e8ff;
  color: #6b21a8;
  border-radius: 4px;
  text-align: center;

  padding: 2px;
  font-size: 14px;
  font-weight: 400;
}
.custom-background-img {
  background-image: url(assets/icons/cool-sec-right.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 450px;
  width: 100%;
}
.tick-list {
  list-style: none; /* Remove default bullets */
  padding: 0;
  margin: 0;
}

.tick-list li {
  background-image: url(/assets/icons/li-tick-mark.png); /* Replace with the path to your tick mark PNG */
  background-repeat: no-repeat;
  background-position: left center;
  color: #0f172a;
  background-size: 13px 9px;
  padding-left: 20px;
  margin-bottom: 10px;
}

.left-section {
  border: none;
}

.right-section {
  border: none;
}
</style>
