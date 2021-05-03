class VendingMachine {
    counter = 0;
    inItChangeMoney = 20;
    vend(itemCode, price) {
        if (this.counter == 10) {
            return this.generateString(10);
        }
        this.counter++;
        let temp = 0;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].code.toUpperCase() === itemCode.toUpperCase()) {
                temp = 1;
                if (this.items[i].price > price) {   // not enough money to buy
                    return "Not Enough Money!";
                }
                if (this.items[i].quantity === 0) {
                    return this.items[i].name + " is out of stock!";
                }
                if (this.items[i].price <= price) {
                    this.items[i].quantity = this.items[i].quantity - 1;  //updating quantity
                    const change = (price - this.items[i].price).toFixed(2);
                    if (change === 0) {  //no change to dispense
                        return "Vending" + this.items[i].name;
                    }
                    if (this.inItChangeMoney - change <= 0) {
                        this.inItChangeMoney = 0;
                    } else {
                        this.inItChangeMoney = this.inItChangeMoney - change;
                    }
                    return " Vending " + this.items[i].name + " with " + change + " change ";  //change to dispense
                }
            }
        }
        if (temp === 0) {
            return "Invalid Selection ! Money in vending machine " + this.initChangeMoney;
        }
    }
    add(items) {
        if (this.counter === 10) {
            return this.generateString(10);
        }
        this.counter++;
        this.items = items;
        console.log("Items Added");
    }

    addNewItem(name, code, quantity, price) {
        if (this.counter === 10) {
            return this.generateString(10);
        }
        this.counter++;
        const len = parseInt(this.items.length);
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].code === code) {
                return " Sorry, but the item " + code + " is already using that code, please pick another ";
            }
        }
        const newItem = { name: name, code: code, quantity: quantity, price: price };
        this.items.push(newItem);
        return "New product available: " + items[len].name + " for only " + items[len].price;
    }
    repair() {
        this.counter = 0;
    }
    generateString(length) {  // Random string to be generated when the machine has been used 10 times
        const characters = 'fnkfl38s!ERROR@893infk';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}


const items = [
    { name: "Smarties", code: "A01", quantity: 10, price: 1.6 },
    { name: "Caramilk Bar", code: "A02", quantity: 5, price: 1.3 },
    { name: "Dairy Milk", code: "A03", quantity: 1, price: 1.35 },
    { name: "Aero", code: "A04", quantity: 1, price: 0.25 },
    { name: "Protein Bar", code: "B01", quantity: 6, price: 2.25 },
    { name: "Salt & Vinager Chips", code: "B02", quantity: 10, price: 1.45 },
    { name: "Ketchup Chips", code: "B03", quantity: 3, price: 1.45 },
    { name: "Chocolate Cookies", code: "B04", quantity: 1, price: 0.45 },
    { name: "Gummy Bears", code: "C02", quantity: 300, price: 0.01 },
    { name: "Caramels", code: "C01", quantity: 0, price: 3.25 },
];

let machine = new VendingMachine();
machine.add(items);
machine.addNewItem("Coffee", "F01", 5, 1.5);
machine.addNewItem("Apple Juice", "A05", 5, 3.5);
machine.addNewItem("Water", "W01", 9, 1.45);
machine.addNewItem("Coke", "C03", 5, 2.25);
machine.vend("B02", 1.75);
machine.vend("A06", 3, 98);
machine.vend("C01", 2.25);