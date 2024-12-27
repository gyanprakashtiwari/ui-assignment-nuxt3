<template>
  <div class="container">
    <div class="row">
      <div class="left-section col-lg-5">
        <div
          class="d-flex flex-column justify-content-start align-items-top pt-5"
        >
          <div class="">
            <h1 class="fw-bolder">An all-in-one app that makes it easier</h1>
          </div>
          <div class="mt-4">
            <ul class="tick-list">
              <li>Est et in pharetra magna adipiscing ornare aliquam.</li>
              <li>Tellus arcu sed consequat ac velit ut eu blandit.</li>
              <li>Ullamcorper ornare in et egestas dolor orci.</li>
            </ul>
          </div>
          <div class="my-4">
            <a href="#" class="text-decoration-none">
              Find more about the app
            </a>
          </div>
        </div>
      </div>
      <div class="right-section col-lg-7">
        <div
          class="bg custom-background-img outer-div d-flex flex-column justify-content-center align-items-center"
        >
          <div class="row mt-auto">
            <div class="d-flex space-around gap-1">
              <div class="col-4 custom-small-card">
                <div>
                  <div class="bg text-wrap custom-content-feature">
                    <p>Featured</p>
                  </div>
                </div>
                <div>
                  <div class="bg text-wrap custom-sub-heading">
                    <p>The map of mathematics</p>
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
              <div class="col-4 custom-small-card">
                <div>
                  <div class="bg text-wrap custom-content-popular">
                    <p>Popular</p>
                  </div>
                </div>
                <div>
                  <div class="bg text-wrap custom-sub-heading">
                    <p>Design for how people think</p>
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
              <div class="col-4 custom-small-card">
                <div>
                  <div class="bg text-wrap custom-content-new">
                    <p>New</p>
                  </div>
                </div>
                <div>
                  <div class="bg text-wrap custom-sub-heading">
                    <p>International & commercial law</p>
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
    </div>
  </div>
</template>

<style scoped>
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
  background-image: url(assets/icons/sec-3-right.png);
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  height: 400px;
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
