class MyHeroForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="card">
      <div class="card-body">
        <span>Get CDR Engineers Australia</span>
        <form action="" target="_blank">
          <div class="row">
            <div class="col-12 col-md-6">
              <label for="NameHero" class="form-label">Name*</label>
              <input
                class="form-control"
                type="text"
                name="Name"
                id="NameHero"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="col-12 col-md-6">
              <label for="NumberHero" class="form-label"
                >Number</label
              >
              <input
                class="form-control"
                type="text"
                name="Number"
                id="NumberHero"
                placeholder="Your Number"
              />
            </div>
            <div class="col-12">
              <label for="EmailHero" class="form-label">Email*</label>
              <input
                class="form-control"
                type="email"
                name="Email"
                id="EmailHero"
                placeholder="Your Email"
                required
              />
            </div>
            <div class="col-12">
              <label for="MessageHero" class="form-label"
                >Message</label
              >
              <textarea
                name="Message"
                id="MessageHero"
                rows="3"
                class="form-control"
                placeholder="Enter Your Query"
              ></textarea>
            </div>
            <button class="btn-all">Free Consultation</button>
          </div>
        </form>
      </div>
    </div>
      `;
  }
}
customElements.define("my-hero-form", MyHeroForm);
