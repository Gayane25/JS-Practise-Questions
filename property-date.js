'use strict';

let dateNow = new Date();

let myobj = {
  hour: dateNow.getHours(),
  minutes: dateNow.getMinutes(),
  seconds: dateNow.getSeconds(),

  get date() {
    return `${this.hour} : ${this.minutes} : ${this.seconds}`;
  },
};

console.log(myobj.date);
