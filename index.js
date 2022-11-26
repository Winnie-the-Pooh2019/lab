const cowsay = require("cowsay");
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.set('view engine', 'pug');
app.set('views', '');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.pug');
});

router.get('/name', (req, res) => {
    const name = cowsay.say({
        text: `Hello, ${req.query.name}`,
        e : "oO",
        T : "U "
    });

    res.render('name.pug', {message: name});
});

app.use('/', router);

function greet() {
    console.log('Welcome to the club buddy!');
}
setTimeout (greet, 2000);

function sayHello(name) {
    console.log('Hello there');
}
let timerID = setInterval(sayHello, 3000);

app.listen(8080).on("error", () => {
    console.log('error');
});

process.on("SIGINT", () => {
    Connection.getInstance().disconnect().then(r => {
        process.exit();
    });
});