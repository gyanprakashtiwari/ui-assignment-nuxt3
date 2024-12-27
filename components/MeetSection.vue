<template>
  <div class="">
    <div class="row mt-5">
      <div class="col-lg-6 col-md-12 left">
        <div class="custom-bg"></div>
      </div>
      <div
        class="col-lg-6 col-md-12 right d-flex flex-column justify-content-center align-items-start"
      >
        <!-- <div
          class="d-flex flex-column justify-content-center align-items-start"
        > -->
        <div class="aeroplane">
          <img src="/assets/icons/aeroplane.png" alt="" />
        </div>
        <div>
          <h1 class="fw-bolder">Meet international students & teachers</h1>
        </div>
        <div>
          <p>
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
            senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
            facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
            urna, faucibus aenean lorem faucibus integer.
          </p>
        </div>
        <div>
          <a href="#" class="text-decoration-none">
            Explore teachers and students
            <img src="/assets/icons/right-arrow.png" alt="" />
          </a>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.left {
  border: 2px solid red;
  border: none;
}
.right {
  border: 2px solid black;
  border: none;
}
.custom-bg {
  background-image: url(/assets/icons/sec-4-left.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 470px;
}
.aeroplane img {
  height: 50px;
  width: 50px;
  margin-left: 15rem;
  margin-bottom: -20px;
}
</style>
