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
          class="bg custom-background-img outer-div d-flex flex-column justify-content-end align-items-center"
        >
          <div class="row">
            <div class="d-flex space-around">
              <div class="col-4">
                <div>one</div>
                <div>two</div>
                <div>three</div>
                <div>four</div>
              </div>
              <div class="col-4">
                <div>one</div>
                <div>two</div>
                <div>three</div>
                <div>four</div>
              </div>
              <div class="col-4">
                <div>one</div>
                <div>two</div>
                <div>three</div>
                <div>four</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  border: 2px solid red;
}

.right-section {
  border: 2px solid green;
}
</style>
