const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 3306

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

// конфигурация базы данных
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydatabase'
})

// проверяем соединение с базой данных
db.connect((err) => {
  if (err) {
    throw err
  }
  console.log('Connected to database')
})

// обработчик маршрута для получения всех пользователей
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users'
  db.query(sql, (err, result) => {
    if (err) {
      throw err
    }
    res.send(result)
  })
})

// обработчик маршрута для регистрации нового пользователя
app.post('/register', (req, res) => {
  const { username, password } = req.body
  const sql = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`
  db.query(sql, (err, result) => {
    if (err) {
      throw err
    }
    res.send('User registered successfully')
  })
})

// обработчик маршрута для авторизации пользователя
app.post('/login', (req, res) => {
  const { username, password } = req.body
  const sql = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`
  db.query(sql, (err, result) => {
    if (err) {
      throw err
    }
    if (result.length > 0) {
      res.send('Login successful')
    } else {
      res.send('Invalid credentials')
    }
  })
})

// обработчик маршрута для изменения данных пользователя
app.put('/users/:id', (req, res) => {
  const id = req.params.id
  const { username, password } = req.body
  const sql = `UPDATE users SET username='${username}', password='${password}' WHERE id=${id}`
  db.query(sql, (err, result) => {
    if (err) {
      throw err
    }
    res.send('User data updated successfully')
  })
})

// запуск сервера
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
