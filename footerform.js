class MyFooterForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="card">
        <div class="card-body">
          <span>Get CDR Engineers Australia</span>
          <form action="" target="_blank">
            <div class="row">
              <div class="col-12 col-md-6">
                <label for="NameFooter" class="form-label">Name*</label>
                <input
                  class="form-control"
                  type="text"
                  name="Name"
                  id="NameFooter"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="col-12 col-md-6">
                <label for="NumberFooter" class="form-label"
                  >Number</label
                >
                <input
                  class="form-control"
                  type="text"
                  name="Number"
                  id="NumberFooter"
                  placeholder="Your Number"
                />
              </div>
              <div class="col-12">
                <label for="EmailFooter" class="form-label">Email*</label>
                <input
                  class="form-control"
                  type="email"
                  name="Email"
                  id="EmailFooter"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div class="col-12">
                <label for="MessageFooter" class="form-label"
                  >Message</label
                >
                <textarea
                  name="Message"
                  id="MessageFooter"
                  rows="1"
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
customElements.define("my-footer-form", MyFooterForm);
