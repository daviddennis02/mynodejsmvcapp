const {
    Client
} = require("pg");

// Declare constants for the PostgreSQL Pool connection
const postgresUser = "crud_user";
const postgresDb = "crud_db";
const postgresPass = "1019";

var connectionString = `postgres://${postgresUser}:${postgresPass}@localhost:5432/${postgresDb}`;

const client = new Client({
    connectionString: connectionString,
});
client.connect();

exports.employees = function (req, res) {
    client.query("SELECT * FROM employee", function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render("employee/employees", {
            title: "Employee",
            data: result.rows
        });
    });
};

exports.view = function (req, res) {
    var id = req.params.id;
    client.query("SELECT * FROM employee WHERE id=$1", [id], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render("employee/view", {
            title: "Employee",
            data: result.rows
        });
    });
};


exports.add = function (req, res) {
    res.render("employee/add", {
        title: "Add Employee"
    });
};


exports.edit = function (req, res) {
    // get the Postgres record ID from the request 'params' body
    var id = req.params.id;

    client.query("SELECT * FROM employee WHERE id=$1", [id], function (
        err,
        result
    ) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render("employee/edit", {
            title: "Edit Employee",
            data: result.rows
        });
        // Test logs
        // console.dir(result);
        // console.dir(result.rows);
        // console.log(result.rows[0].name)
        // console.log(result.rows[0].email)
        // console.log(result.rows[0].address)
        // console.log(result.rows[0].phone)
        // console.log(data.name);
    });
};

exports.save = function (req, res) {
    var cols = [req.body.name,  req.body.email, req.body.address, req.body.phone];

    client.query(
        "INSERT INTO employee(name, email, address, phone) VALUES($1, $2, $3, $4) RETURNING *",
        cols,
        function (err, result) {
            if (err) {
                console.log("Error. Not Saved! : %s ", err);
            }
            res.redirect("/employee/employees");
        }
    );
};

exports.update = function (req, res) {
    // Postgres table column names go here
    var cols = [
        req.body.name,
        req.body.email,
        req.body.address,
        req.body.phone,
        req.params.id
    ];

    client.query(
        "UPDATE employee SET name=$1, email=$3, address=$2, phone=$4 WHERE id=$5", 
        cols, 
        function (err, result) {
            if (err) {
                console.log("Error. Updating : %s ", err);
            }
            res.redirect("/employee/employees");
            console.log(result);
        }
        );
        // console.log(cols, id);
};

exports.delete = function (req, res) {
    var id = req.params.id;

    client.query("DELETE FROM employee WHERE id=$1", [id], function (err, rows) {
        if (err) {
            console.log("Error deleting : %s ", err);
        }
        res.redirect("/employee/employees");
    });
};