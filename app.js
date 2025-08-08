require('dotenv').config(); // Memuat variabel lingkungan dari file .env
const express = require('express');
const app = express();
const { router: todoRoutes, todos } = require('./routes/todo.js'); // Import router dan data todos
const port = process.env.PORT; // Gunakan default 3000 jika .env tidak menyediakan PORT




// Middleware
app.use(express.json()); // Agar bisa baca body JSON
app.use(express.urlencoded({ extended: true })); // Untuk parsing form (opsional)




// Set view engine ke EJS
app.set('view engine', 'ejs');


// Routing API todos
app.use("/todos", todoRoutes); // API routes (GET, POST, PUT, DELETE)


// Halaman utama
app.get('/', (req, res) => {
    res.render("index"); // Render index.ejs
});



// Halaman contact
app.get("/contact", (req, res) => {
    res.render("contact"); // Render contact.ejs
});



// Endpoint tambahan untuk melihat data todos secara langsung (opsional)
app.get('/todos-data', (req, res) => {
    res.json(todos); // Menampilkan semua todos dalam format JSON
});



// Halaman list todos dengan tombol GET/POST/PUT/DELETE
app.get("/todos-list", (req, res) => {
    res.render("todos-page", { todos }); // Render todos-page.ejs (yang pakai tombol-tombol)
});



// Middleware 404
app.use((req, res, next) => {
    res.status(404).send('404 - Page Not Found');
});



// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
