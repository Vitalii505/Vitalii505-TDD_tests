import { el, mount } from "redom";
export class AddItemForm {
  #dom;
  #header;
  #input;
  #button;
  constructor() {
    this.#dom = el("div#container", "Add new item you want to purchase");
    this.#header = el("h3#header", "Add item");
    this.#input = el("input#inpTitle", { placeholder: "Type item title here" });
    this.#button = el("button#btnAdd", { disabled: true, value: "Add item" });
    mount(this.#dom, this.#header);
    mount(this.#dom, this.#input);
    mount(this.#dom, this.#button);
    this.#button.addEventListener("click", this.onAddItemClicked);
  }
  get dom() {
    return this.#dom;
  }

  onAddItemClicked() {
    alert("Add new item logic here");
  }
}