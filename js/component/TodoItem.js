const template = document.createElement('template');
template.innerHTML = `
  <style>
    .card {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      border-radius: 3px;
      padding: 15px 0;
    }
    
    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
      cursor: pointer;
    }
    
    .card-content {
      padding: 2px 16px;
    }

    .custom-checkbox {
      float: right;
      margin-block-start: 1.33em;
      margin-block-end: 1.33em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
    
    .custom-header {
      display: inline-block;
    }
  </style>

  <div class="card">
    <div class="card-content">
      <h2 class="custom-header"></h2>
      <input class="custom-checkbox" type="checkbox"/>
      <p>Architect & Engineer</p>
    </div>
  </div>
`;

class TodoItem extends HTMLElement {

  static get observedAttributes() {
    return ["checked"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("div").setAttribute("id", this.getAttribute("id"));
    this.shadowRoot.querySelector("h2").innerText = this.getAttribute("title");
    this.shadowRoot.querySelector("p").innerText = this.getAttribute("description");
  }

  get checked() {
    return this.shadowRoot.getAttribute("checked");
  }

  set checked(value) {
    if (value) {
      this.shadowRoot.querySelector("input").setAttribute("checked", "checked");
    }
    else {
      this.shadowRoot.querySelector("input").removeAttribute("checked")
    }
  }

  attributeChangedCallback(checked) {
    if(checked === "checked") {
      const currentValue = this.shadowRoot.querySelector("input").checked;
      if (!currentValue) {
        this.shadowRoot.querySelector("input").setAttribute("checked", "checked");
        this.shadowRoot.querySelector("h2").style.textDecoration = "line-through";
        this.shadowRoot.querySelector("p").style.textDecoration = "line-through";
      }
      else {
        this.shadowRoot.querySelector("input").removeAttribute("checked");
        this.shadowRoot.querySelector("h2").style.textDecoration = "none";
        this.shadowRoot.querySelector("p").style.textDecoration = "none";
      }
    }
  }

  toggle(){
    //if(checked === "checked") {
      const currentValue = this.shadowRoot.querySelector("input").checked;
      if (!currentValue) {
        this.shadowRoot.querySelector("input").setAttribute("checked", "checked");
        this.shadowRoot.querySelector("h2").style.textDecoration = "line-through";
        this.shadowRoot.querySelector("p").style.textDecoration = "line-through";
      }
      else {
        this.shadowRoot.querySelector("input").removeAttribute("checked");
        this.shadowRoot.querySelector("h2").style.textDecoration = "none";
        this.shadowRoot.querySelector("p").style.textDecoration = "none";
      }
    //}
  }

  /**
   * sets todoitem properties
   * @param {Object} todoItem 
   */
  setTodoItem(todoItem) {
    this.shadowRoot.querySelector("h2").innerText = todoItem.title;
    this.shadowRoot.querySelector("p").innerText = todoItem.description;
    todoItem.checked && this.shadowRoot.querySelector("input").setAttribute("checked", "checked");
  }
}

function onClick(event) {
  const id = event?.currentTarget?.id;
  if(id) {
    document.getElementById(id).toggle();
  }
}

customElements.define("todo-item", TodoItem);
