const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
// const dbConfig = require('./db/dbconf');


// Access library attributes from the imported modules
// var employee = require('./routes/employee')
// var routes = require('./routes/index')
const orgsRouter = require('./routes/orgs')
const employeesRouter = require('./routes/employees');
var app = express()


// Set EJS engine as the default engine
app.set('view engine', 'ejs')

// Use the body-parser body parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, 'public')))


// Express routes for the HTTP 'GET' methods
app.use('/orgs', orgsRouter)
app.use('/employees', employeesRouter)
// app.get('/employee/employees', employee.employees)
// app.get('/employee/add', employee.add)
// app.get('/employee/:id/delete', employee.delete)
// app.get('/employee/:id/edit', employee.edit)
// app.get('/employee/:id/view', employee.view)
// app.get('/', routes)

// Express routes for the HTTP 'POST' methods
// app.post('/employee/add', employee.save)
// app.post('/employee/:id/edit', employee.update)

// Set a port for the app to listen on
const PORT = process.env.PORT || 5005;

app.listen(PORT, function () {
    console.log(`Server is running on Port ${PORT}. Press CTRL+C to stop server.`)
});