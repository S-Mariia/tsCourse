// const button = document.querySelector("button")! as HTMLElement;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });
var Key = /** @class */ (function () {
    function Key() {
        this.signature = Math.random();
    }
    Key.prototype.getSignature = function () {
        return this.signature;
    };
    return Key;
}());
var Person = /** @class */ (function () {
    function Person(key) {
        this.key = key;
    }
    Person.prototype.getKey = function () {
        return this.key;
    };
    return Person;
}());
var House = /** @class */ (function () {
    function House(key) {
        this.key = key;
        this.door = "close";
        this.teenants = [];
    }
    House.prototype.comeIn = function (person) {
        if (this.door === "close") {
            throw new Error("The door is closed");
        }
        this.teenants.push(person);
        console.log("Welcome home");
    };
    return House;
}());
var MyHouse = /** @class */ (function (_super) {
    __extends(MyHouse, _super);
    function MyHouse(key) {
        return _super.call(this, key) || this;
    }
    MyHouse.prototype.openDoor = function (key) {
        if (JSON.stringify(key) !== JSON.stringify(this.key)) {
            throw new Error("Your key cannot open this door");
        }
        this.door = "open";
        console.log("The door is open");
    };
    return MyHouse;
}(House));
var key = new Key();
var tenant = new Person(key);
var myHouse = new MyHouse(key);
myHouse.openDoor(tenant.getKey());
myHouse.comeIn(tenant);
