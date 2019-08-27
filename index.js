require("dotenv").config();
require("./db");

const path = require('path');
const express = require("express");
// const cors = require('cors')

const route = require("./routes");
const passport = require("passport");
const session = require("express-session");
const mongoDbStore = require("connect-mongodb-session")(session);
const auth = require("./auth");

const dev = process.env.NODE_ENV !== "production";
const store = new mongoDbStore({
  uri: dev ? "mongodb://localhost/journal" : process.env.URI,
  collection: "session"
});

const app = express();
// const cors = require("cors");
const logger = require("morgan");

const port = process.env.PORT || 3001;

app.use(logger('dev'));

// app.use(cors());

 auth();
  app.use(
    session({
      secret: "thisIsASecret",
      cookie: {
        maxAge: 1000 * 60 * 60 * 24  //one day
      },
      resave: false,
      saveUninitialized: true,
      store
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  const restricAccess = (req, res, next) => {
    if (!req.isAuthenticated()) return res.redirect("/auth");
    next();
  };
  const isLogedIn = (req, res, next) => {
    if (req.isAuthenticated()) return res.redirect("/");
    next();
  };
 
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // if(dev){
  //   app.use((req, res, next)=>{
  //     req.user = {_id :"5d63b8053815719539b66c02", local:{username:'yakhousam'}};
  //     next();
  //   })
  // }else{
  //   app.use('/api', restricAccess)  
  // }
  
  app.use('/api', restricAccess)
  app.use(route);

  app.get('/auth', isLogedIn, (req, res) =>{
    res.sendFile(path.join(__dirname, 'build_auth', 'index.html'));
  })
  
  app.get("/",restricAccess,  (req, res) => {
    // res.send('welcom')
    res.sendFile(path.join(__dirname, 'build_client', 'index.html'));
  });
  app.use(express.static(path.join(__dirname, 'build_client')));
  app.use(express.static(path.join(__dirname, 'build_auth')));
  
	app.get("/logout", restricAccess, (req, res) => {
    req.logout();
    res.redirect('/');
  });



  app.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });



