const express = require('express');

const app = express();
const port = 3000;

const todoRoutes = require('./routes/todo.js');
const { todos } = require('./routes/todo.js'); //Menambahkan impor todos untuk digunakan di app.js

app.use(express.json());
app.use("/todos", todoRoutes); // Menggunakan router dari todo.js

// Atur EJS sebagai view Engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index"); //render file index.ejs
});

app.get("/contact", (req, res) => {
    res.render("contact"); //Render file contact.ejs
});

//middleware
app.use((req, res, next) => {
    res.status(404).send('404 - Page Not Found');
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});