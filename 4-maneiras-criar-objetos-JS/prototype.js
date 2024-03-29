function Microfone(color = "black") {
    this.color = color;
    this.isOn = true; 
}

Microfone.prototype.toogleOnOff = function() {
    if(this.isOn) {
        console.log("Desligou");
    } else {
        console.log("Ligou");
    }
    this.isOn = !this.isOn;
}

const microfone1 = new Microfone("Red");
const microfone2 = new Microfone();
console.log(microfone1, microfone2);

microfone1.toogleOnOff();
microfone1.toogleOnOff();