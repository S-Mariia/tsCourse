class Key {
  private signature: number = Math.random();

  public getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: "open" | "close" = "close";
  protected teenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (this.door === "close") {
      throw new Error("The door is closed");
    }
    this.teenants.push(person);
    console.log("Welcome home");
  }
  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key) {
    if (JSON.stringify(key) !== JSON.stringify(this.key)) {
      throw new Error("Your key cannot open this door");
    }
    this.door = "open";
    console.log("The door is open");
  }
}

const key = new Key();
const tenant = new Person(key);

const myHouse = new MyHouse(key);
myHouse.openDoor(tenant.getKey());
myHouse.comeIn(tenant);
