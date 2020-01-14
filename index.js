/* Alter code below this line */

class Thermostat {
    constructor(f){
        this.f = f
    }
  
    get t(){
        return (5 / 9) * (this.f - 32);
    }

    set t(celsius){
        this.f = (celsius * 9.0) / 5 + 32
    }
}
/* Alter code above this line */

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.t; // 24.44 in C
console.log(thermos)
thermos.t = 26;
temp = thermos.t; // 26 in C
console.log(thermos)
