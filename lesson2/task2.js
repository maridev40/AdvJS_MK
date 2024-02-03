const express = require('express');

const app = express();
const urlencodedParser = express.urlencoded({ extended: false });

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

let msgID = 0;

const getMessages = (array) => {
    let mess = "";
    array.forEach(element => {
        mess = mess + element.product + ":\n";
        element.reviews.forEach(item => {
            mess = mess + item.text + "\n";
        })
    })

    return mess;
}

const setMessages = (message, array) => {
    let pass = false;
    const arrMsg = message.split(":");
    // console.log(arrMsg);
    let mess = "";
    array.forEach(element => {
        if (element.product === arrMsg[0]) {
            element.reviews.push({ 'id': msgID, text: arrMsg[1] });
            pass = true;
        }
    })
    if (!pass) {
        array.push({
            product: arrMsg[0],
            reviews: [
                {
                    id: msgID,
                    text: arrMsg[1],
                },
            ],
        })
    }

}

app.get('/', (req, res) => {
    // console.log(80, req.body);

    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Отправка сообщений</title>');
    res.write('<meta charset="utf-8" />');
    res.write('</head>');

    res.write('<form action="/" method="post">');
    res.write('<label for="msg">Введите сообщение: </label>');
    res.write('<input ');
    res.write('id="msg" ');
    res.write('type="text" ');
    res.write('name="msg_field" ');
    res.write('value="Модель: Сообщение" />');
    res.write('<input type="submit" value="Отправить" />');
    res.write('</form>');
    res.write('<textarea>' + getMessages(initialData) + '</textarea>');
    res.write('</html>');
    res.send();
})

app.post('/', urlencodedParser, (req, res) => {
    // console.log(104, req.body.msg_field);
    setMessages(req.body.msg_field, initialData);

    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Отправка сообщений</title>');
    res.write('<meta charset="utf-8" />');
    res.write('</head>');

    res.write('<form action="/" method="post">');
    res.write('<label for="msg">Введите сообщение: </label>');
    res.write('<input ');
    res.write('id="msg" ');
    res.write('type="text" ');
    res.write('name="msg_field" ');
    res.write('value="Модель: Сообщение" />');
    res.write('<input type="submit" value="Отправить" />');
    res.write('</form>');
    res.write('<textarea>' + getMessages(initialData) + '</textarea>');
    res.write('</html>');

    res.send();
})

const port = 3000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});