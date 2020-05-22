#!/bin/bash

# create the app.js file
touch app.js

# create parent dir 'public' and its files and subdir
mkdir -p public/css && touch public/css/style.css
mkdir -p public/js && touch public/js/main.js

# create 'routes' dir and its files
mkdir routes && touch routes/employee.js routes/index.js

# create parent dir 'views' and its files and subdir
mkdir -p views/employee && touch views/employee/add.ejs
touch views/index.ejs
touch views/employee/edit.ejs views/employee/list.ejs

