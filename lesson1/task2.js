const cpec = new Set();
cpec.add("Пицца");
cpec.add("Суши");
cpec.add("Десерты");
// console.log(cpec);

const dishes = new Map();
dishes.set("Маргарита", [...cpec][0]);
dishes.set("Пепперони", [...cpec][0]);
dishes.set("Филадельфия", [...cpec][1]);
dishes.set("Калифорния", [...cpec][1]);
dishes.set("Тирамису", [...cpec][2]);
dishes.set("Чизкейк", [...cpec][2]);
// console.log(dishes);

const сooks = new Map();
сooks.set("Виктор", [...cpec][0]);
сooks.set("Ольга", [...cpec][1]);
сooks.set("Дмитрий", [...cpec][2]);
// console.log(сooks);

const clients = [];
clients.push({name: "Алексей"});
clients.push({name: "Мария"});
clients.push({name: "Ирина"});
// console.log(clients);

const orders = new Map();
orders.set(clients[0], [[...dishes][1], [...dishes][4]]);
orders.set(clients[1], [[...dishes][3], [...dishes][0]]);
orders.set(clients[2], [[...dishes][5]]);
// console.log(orders);

for (const key of orders.keys()) {
    console.log(`Клиент ${key.name} заказал: ${orders.get(key)}`);
};