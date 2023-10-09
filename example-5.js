/*Example 5 - Toggle

Write a `Toggle` class that takes a settings object `{isOpen: boolean}` and
declares one property `on` - state on/off (true/false). By default
the value of the `on` property should be `false`.
*/

class Toggle {
  constructor(settings) {
    if (settings && settings.isOpen === true) {  //* setting.isOpen --> trebuie sa fie true: //
      this.on = settings.isOpen;       // "problem" este true, dar nu este egal cu true --> //
      return;                         // this.on = problem, se returneaza problem, nu true //
    }

    this.on = false;  // valoarea default //
  }

  toggle() {
    this.on = !this.on
  }
}

// const firstToggle = new Toggle({ isOpen: "problem" }); //* aici ar fi fost problema //
const firstToggle = new Toggle({ isOpen: true });
console.group("firstToggle");
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd("firstToggle");

const secondToggle = new Toggle();
console.group("secondToggle");
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);