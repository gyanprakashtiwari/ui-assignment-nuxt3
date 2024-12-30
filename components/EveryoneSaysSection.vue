<template>
  <div class="my-5">
    <div class="row">
      <div class="col-6 d-flex justify-content-start align-items-center">
        <h1 class="fw-bolder">What everyone says</h1>
      </div>
      <div
        class="col-6 d-flex justify-content-end align-items-center space-between gap-1"
      >
        <button id="prevSlide" class="arrow-btn">
          <img src="/assets/icons/btn-left-arrow.png" alt="Previous" />
        </button>
        <button id="nextSlide" class="arrow-btn">
          <img src="/assets/icons/btn-right-arrow.png" alt="Next" />
        </button>
      </div>
    </div>

    <div id="customCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div
            class="cards d-flex justify-content-start align-items-center gap-3 py-3"
          >
            <div class="card">
              <div class="card-body">
                <div class="card-content">
                  <p class="card-text">
                    ONE vestibulum ultricies mi risus, duis non, volutpat nullam
                    non. Magna congue nisi maecenas elit aliquet eu sed
                    consectetur. Vitae quis cras vitae praesent morbi adipiscing
                    purus consectetur mi.
                  </p>
                </div>
                <div class="row mt-2">
                  <div
                    class="col-3 d-flex justify-content-center align-items-center user-thumb"
                  >
                    <img src="/assets/icons/user-thumb-1.png" alt="" />
                  </div>
                  <div
                    class="col-9 d-flex flex-column justify-content-center align-items-start"
                  >
                    <div class="card-author">Hellen Jummy</div>
                    <div class="card-author-designation">
                      Financial Counselor
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="card-content">
                  <p class="card-text">
                    TWO vestibulum ultricies mi risus, duis non, volutpat nullam
                    non. Magna congue nisi maecenas elit aliquet eu sed
                    consectetur. Vitae quis cras vitae praesent morbi adipiscing
                    purus consectetur mi.
                  </p>
                </div>
                <div class="row mt-2">
                  <div
                    class="col-3 d-flex justify-content-center align-items-center user-thumb"
                  >
                    <img src="/assets/icons/user-thumb-1.png" alt="" />
                  </div>
                  <div
                    class="col-9 d-flex flex-column justify-content-center align-items-start"
                  >
                    <div class="card-author">Hellen Jummy</div>
                    <div class="card-author-designation">
                      Financial Counselor
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="card-content">
                  <p class="card-text">
                    THREE vestibulum ultricies mi risus, duis non, volutpat
                    nullam non. Magna congue nisi maecenas elit aliquet eu sed
                    consectetur. Vitae quis cras vitae praesent morbi adipiscing
                    purus consectetur mi.
                  </p>
                </div>
                <div class="row mt-2">
                  <div
                    class="col-3 d-flex justify-content-center align-items-center user-thumb"
                  >
                    <img src="/assets/icons/user-thumb-1.png" alt="" />
                  </div>
                  <div
                    class="col-9 d-flex flex-column justify-content-center align-items-start"
                  >
                    <div class="card-author">Hellen Jummy</div>
                    <div class="card-author-designation">
                      Financial Counselor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div
            class="cards d-flex justofy-content-start align-items-center gap-3 py-3"
          >
            <div class="card">
              <div class="card-body">
                <div class="card-content">
                  <p class="card-text">
                    FOUR Lacus vestibulum ultricies mi risus, duis non, volutpat
                    nullam non. Magna congue nisi maecenas elit aliquet eu sed
                    consectetur. Vitae quis cras vitae praesent morbi adipiscing
                    purus consectetur mi.
                  </p>
                </div>
                <div class="row mt-2">
                  <div
                    class="col-3 d-flex justify-content-center align-items-center user-thumb"
                  >
                    <img src="/assets/icons/user-thumb-1.png" alt="" />
                  </div>
                  <div
                    class="col-9 d-flex flex-column justify-content-center align-items-start"
                  >
                    <div class="card-author">Hellen Jummy</div>
                    <div class="card-author-designation">
                      Financial Counselor
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="card-content">
                  <p class="card-text">
                    FIVE vestibulum ultricies mi risus, duis non, volutpat
                    nullam non. Magna congue nisi maecenas elit aliquet eu sed
                    consectetur. Vitae quis cras vitae praesent morbi adipiscing
                    purus consectetur mi.
                  </p>
                </div>
                <div class="row mt-2">
                  <div
                    class="col-3 d-flex justify-content-center align-items-center user-thumb"
                  >
                    <img src="/assets/icons/user-thumb-1.png" alt="" />
                  </div>
                  <div
                    class="col-9 d-flex flex-column justify-content-center align-items-start"
                  >
                    <div class="card-author">Hellen Jummy</div>
                    <div class="card-author-designation">
                      Financial Counselor
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="card-content">
                  <p class="card-text">
                    SIX vestibulum ultricies mi risus, duis non, volutpat nullam
                    non. Magna congue nisi maecenas elit aliquet eu sed
                    consectetur. Vitae quis cras vitae praesent morbi adipiscing
                    purus consectetur mi.
                  </p>
                </div>
                <div class="row mt-2">
                  <div
                    class="col-3 d-flex justify-content-center align-items-center user-thumb"
                  >
                    <img src="/assets/icons/user-thumb-1.png" alt="" />
                  </div>
                  <div
                    class="col-9 d-flex flex-column justify-content-center align-items-start"
                  >
                    <div class="card-author">Hellen Jummy</div>
                    <div class="card-author-designation">
                      Financial Counselor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div
            class="cards d-flex justify-content-start align-items-center gap-3 py-3"
          >
            <div class="card">
              <div class="card-body">
                <div class="card-content">
                  <p class="card-text">
                    ALPHA Lacus vestibulum ultricies mi risus, duis non,
                    volutpat nullam non. Magna congue nisi maecenas elit aliquet
                    eu sed consectetur. Vitae quis cras vitae praesent morbi
                    adipiscing purus consectetur mi.
                  </p>
                </div>
                <div class="row mt-2">
                  <div
                    class="col-3 d-flex justify-content-center align-items-center user-thumb"
                  >
                    <img src="/assets/icons/user-thumb-1.png" alt="" />
                  </div>
                  <div
                    class="col-9 d-flex flex-column justify-content-center align-items-start"
                  >
                    <div class="card-author">Hellen Jummy</div>
                    <div class="card-author-designation">
                      Financial Counselor
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="card-content">
                  <p class="card-text">
                    BETA vestibulum ultricies mi risus, duis non, volutpat
                    nullam non. Magna congue nisi maecenas elit aliquet eu sed
                    consectetur. Vitae quis cras vitae praesent morbi adipiscing
                    purus consectetur mi.
                  </p>
                </div>
                <div class="row mt-2">
                  <div
                    class="col-3 d-flex justify-content-center align-items-center user-thumb"
                  >
                    <img src="/assets/icons/user-thumb-1.png" alt="" />
                  </div>
                  <div
                    class="col-9 d-flex flex-column justify-content-center align-items-start"
                  >
                    <div class="card-author">Hellen Jummy</div>
                    <div class="card-author-designation">
                      Financial Counselor
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="card-content">
                  <p class="card-text">
                    GAMMA vestibulum ultricies mi risus, duis non, volutpat
                    nullam non. Magna congue nisi maecenas elit aliquet eu sed
                    consectetur. Vitae quis cras vitae praesent morbi adipiscing
                    purus consectetur mi.
                  </p>
                </div>
                <div class="row mt-2">
                  <div
                    class="col-3 d-flex justify-content-center align-items-center user-thumb"
                  >
                    <img src="/assets/icons/user-thumb-1.png" alt="" />
                  </div>
                  <div
                    class="col-9 d-flex flex-column justify-content-center align-items-start"
                  >
                    <div class="card-author">Hellen Jummy</div>
                    <div class="card-author-designation">
                      Financial Counselor
                    </div>
                  </div>
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
.arrow-btn {
  border: none;
  background-color: white;
}
.arrow-btn img {
  height: 40px;
  width: 40px;
}
.card-author {
  color: #0f172a;
  font-size: 18px;
  font-weight: 400;
}

.card-author-designation {
  color: #475569;
  font-size: 16px;
  font-weight: 400;
}

.user-thumb img {
  height: 64px;
  width: 64px;
}
</style>
