```Repo Link:https://github.com/s0hamsaha/crudapp```

**Technology Stack Used - MongoDB, ExpressJs, NodeJs, Reactjs**

# Steps to start the application:
Clone the repository or unzip this project in a new folder


In a editor(VS code),open two terminals, one for client and one for server and change the path in each terminal by  ```cd .\client``` and 
```cd.\server``` respectively.



In both terminals, ```run npm init```
In client terminal, install ```parcel``` by typing ```npm i -D parcel```(installing dev dependencies)



In package.json, type ```"start": "parcel index.html"``` and ```"build": "parcel build index.html"``` inside script and hit save.

The app starts running on ```localhost:1234```

Then start the app by typing npm run start or npm start.
Install ```react``` , ```react-dom```, ```react-router-dom```, ```bootstrap``` and ```material ui``` by following commands:
```
    npm i react;
    npm i react-dom;
    npm i react-router-dom;
    npm i bootstrap;
    npm i @mui/material @emotion/react @emotion/styled;
    npm install @mui/icons-material;
```
In server terminal install nodemon by typing ```npm i nodemon```;

In app.js of server, set port number to ```8003``` and then type ```nodemon app.js``` to start server on ```localhost:8003```;

Here we are using ```MongoDB ATLAS``` as our database and a free cluster. You can set a cluster in ATLAS and use the connection string to connect to the database with the following Schema:
```
name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  phone: {
    type: "Number",
    required: true,
  },
  bookid: {
    type: "Number",
    required: true,
  },
  time: {
    type: "string",
    required: true,
  },
  droneshot: {
    type: "string",
    required: true,
  }
  ```
  Then we are ready to use the application.


