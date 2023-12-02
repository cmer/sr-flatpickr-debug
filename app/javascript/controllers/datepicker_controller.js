import Flatpickr from "stimulus-flatpickr";
import dayjs from "dayjs";

// Improved Flatpickr supporting arbitrary date parsing
export default class extends Flatpickr {
  static values = {
    submitOnChange: { type: Boolean, default: false },
    selectOnFocus: { type: Boolean, default: true },
    swallowPaste: { type: Boolean, default: true }
  }

  initialize() {
    this.config = {
      parseDate: (dateString) => {
        if (dateString && dateString.length > 0) {
          let parsed = dayjs(dateString);
          if (parsed.isValid()) return parsed.toDate();
        }
      }
    }

    if (!this.element.hasAttribute("autocomplete"))
      this.element.setAttribute("autocomplete", "off");
  }

  connect() {
    super.connect();
    const _this = this;

    setTimeout(() => {
      _this.visibleInput = _this.fp.input.nextElementSibling;
      if (!_this.visibleInput || _this.visibleInput.type !== 'text') {
        _this.visibleInput = null;
        return
      }

      if (_this.selectOnFocusValue) {
        _this.visibleInput.addEventListener("focus", () => {
          _this.visibleInput.select();
        });
      }

      if (_this.swallowPasteValue) {
        _this.visibleInput.addEventListener("paste", (e) => {
          e.preventDefault();
          let text = e.clipboardData.getData("text/plain");
          _this.fp.setDate(text, false);
        });
      }
    }, 300);
  }

  change(selectedDates, dateStr, instance) {
    if (dateStr && this.submitOnChangeValue) this.element.form.requestSubmit();
  }
}
