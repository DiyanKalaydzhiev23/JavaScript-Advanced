class Textbox {
    constructor(selector, regEx) {
      this._elements = document.querySelectorAll(selector);
      //this._value = this.value;
      this._invalidSymbols = regEx;
      this._elements[0].addEventListener("input", () => {
        this._elements[1].value = this._elements[0].value;
        this._value = this._elements[0].value;
      });
    }
   
    get elements() {
      return this._elements;
    }
   
    get value() {
      //return this._elements[0].value;
      return this._value;
    }
   
    set value(str) {
      console.log("hello");
      Array.from(this._elements).forEach((el) => (el.value = str));
      this._value = str;
      //Array.from(this.elements).forEach((el) => (el.value = this._value));
    }
   
    isValid() {
      let temp = this._invalidSymbols.exec(this.value);
      if (temp === null) {
        return true;
      } else {
        return false;
      }
    }
  }
let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
 