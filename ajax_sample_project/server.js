const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Habilitar CORS para todas las rutas

app.use(express.static('public'));

app.get('/ajax.json', (req, res) => {
  res.json([
    {
      "title": "Video 1 - Introducción a Python",
      "content": "Este video proporciona una introducción a Python y sus conceptos básicos.",
      "url": "https://www.youtube.com/embed/Kp4Mvapo5kc"
    },
    {
      "title": "Video 2 - Python Intermedio",
      "content": "Este video explora conceptos intermedios de Python y cómo aplicarlos.",
      "url": "https://www.youtube.com/embed/IimBRwHhW54"
    },
    {
      "title": "Video 3 - Desarrollo de Aplicaciones con Python",
      "content": "Este video cubre el desarrollo de aplicaciones usando Python.",
      "url": "https://www.youtube.com/embed/gOR9qZ3ZgwA"
    }
  ]);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
