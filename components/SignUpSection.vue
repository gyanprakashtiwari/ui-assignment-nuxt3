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
.custom-inner-div {
  width: 70%;
}
.custom-btn {
  background-color: #ea580c;
  border: #ea580c;
}
.bg-img {
  width: 100%;
  height: 500px;
  background-image: url(/assets/icons/signup-bg.png);
  background-size: contain;
  background-position: center;
}
</style>
