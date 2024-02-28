class CreateAppendContent {
  constructor(element) {
    this.element = document.querySelector(element);
    // this.position;
  }
  insertContent(txt) {
    if (!this.element) {
      this.element = document.createElement("p");
    }
    this.element.textContent = txt;
  }

  appendContentAt(position) {
    let container = document.querySelector(position);
    if (!container) {
      document.body.append(this.element);
    }
    container.append(this.element);
  }
}

window.CreateAppendContent = CreateAppendContent;
