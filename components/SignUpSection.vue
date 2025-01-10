<template>
  <div>
    <div
      class="bg bg-img d-flex justify-content-center align-items-center py-5 px-5"
    >
      <div
        class="d-flex flex-column justify-content-center align-items-center custom-inner-div"
      >
        <div
          class="d-flex justify-content-center align-items-center custom-inner-div-element"
        >
          <h1>Join a world of learning</h1>
        </div>
        <div
          class="d-flex justify-content-center align-items-center custom-inner-div-element"
        >
          <p>
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus
            elit et fringilla habitant ut facilisi.
          </p>
        </div>
        <div
          class="d-flex justify-content-center align-items-center custom-inner-div-element"
        >
          <button type="button" class="btn btn-danger custom-btn">
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-inner-div-element {
  width: 80%;
  text-align: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.custom-inner-div-element h1 {
  font-size: 56px;
  color: #0f172a;
  font-weight: 800;
}
.custom-inner-div-element p {
  font-size: 20px;
  color: #0f172a;
  font-weight: 400;
}
.custom-inner-div {
  width: 70%;
}
.custom-btn {
  background-color: #ea580c;
  border: #ea580c;
  width: 239px;
  height: 64px;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
}
.bg-img {
  width: 100%;
  height: 500px;
  background-image: url(/assets/icons/signup-bg.png);
  background-size: contain;
  background-position: center;
}
</style>
