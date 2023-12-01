import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!", this.element)
  }

  test(event) {
    console.log("Value changed", event.target)
  }
}
