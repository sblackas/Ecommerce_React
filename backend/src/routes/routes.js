const express = require('express');
const router = express.Router();
const db = require('../database/db');
const bcrypt = require('bcrypt');
const saltRounds = 10; // le nombre de fois que l'on hashe le mdp
const config = require('./config');
const jwt = require('jsonwebtoken');

// USERS

// Get pour recuperer la liste des users

router.get('/users', function (req,res) {
    let allUsers = `SELECT id,name FROM users`;
    db.query(allUsers, function (err, todoUser) {
 
      if (err) res.send (err);
          console.log(todoUser);
          res.send(todoUser)
    })
    
  })

// Les routes on utilise ici des post car il s'agit de formulaire à remplir

// Route pour le sign up

router.post('/users/sign-up', function(req, res) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        let newUser = `INSERT INTO users (name, email, password) VALUES ('${req.body.name}','${req.body.email}','${hash}')`; // on a remplacé '${req.body.password}' par hash au moment de crypter le mdp
        db.query(newUser, function (err, result) { // envoyer mon newUser dans ma database
            if (err) throw err;
            console.log("one user inserted");


            db.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function (err, result) { 
              if (err) throw err;
              let token = jwt.sign({ id: result[0].id }, config.secret, {expiresIn: 86400 });
              console.log(token);
              res.status(200).send({ auth: true, token: token, user: result[0] });
            })
        });
    });
});

// Route pour le sign in pour l'authentification

  router.post('/users/sign-in', function(req, res) {

      db.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function (err, result) { // *=tout
        if (err) throw err;
        if (result.length) {
          bcrypt.compare(req.body.password, result[0].password, function(err,theuser){
            console.log(theuser);
            if(theuser) {
              let token = jwt.sign({ id: result[0].id, name: result[0].name }, config.secret, { expiresIn: 86400 });
              console.log(token);
              res.send({ auth: true, token: token, user: result[0] }); 
            } else {
              res.status(400).send("wrong password") //rajout de .status(400)

            }
       
        })

        } else {
          res.status(400).send("sorry we don't know this user") //rajout de .status(400)
        }
        
      });

  });

  // PRODUCTS

  // Recuperer les produits

  router.get('/products', function (req,res) {
    let produit = `SELECT id,name,marque,price,category,description,picture FROM products`;
    db.query(produit, function (err, leproduit) {
 
      if (err) res.send (err);
          console.log(leproduit);
          res.send(leproduit)
    })
    
  })

  // Ajouter un produit que si le token du user est valide

  router.post('/products', function(req, res) {
    try {
      if(!req.headers.authorization){ // on demnde si res.h.a existe alors envoie le message
        throw "no token"
      }
      console.log(req.headers);
      let decoded = jwt.verify(req.headers.authorization, config.secret); // dans postman on a fait headers -> beared token et on met le token --- slice 7 c'est parce que devant le token affiché ds la console on avait le mot beared et dc c'est pour supprimer dans la chaine de caractères
      if(!decoded.id) {
        console.log(decoded.id);
          throw "invalid token" // on a un meilleur message que celui là dans postman {token malformaded}
      }
      console.log(decoded);
      let newProduct = `INSERT INTO products (name, description, price, picture, user_id, category, marque) VALUES ('${req.body.name}','${req.body.description}','${req.body.price}', '${req.body.picture}','${decoded.id}', '${req.body.category}', '${req.body.marque}') `; // il faut que les valeurs et param soient dans le même ordre
      db.query(newProduct, function (err, theproduct) { // envoyer mon newProduct dans ma database
      console.log(theproduct);
          if (err) res.send(err);
          //faire un select et res.send le result de ce select
          db.query(`SELECT * FROM products WHERE id = '${theproduct.insertId}'`, function (err, results) {
            res.send(results)

          })
          console.log("one new product registered");
      })
    } catch(err) {
      res.send(err)
    }

});

// Route pour toutes les infos concernant un produit

router.get('/products/:id', function(req,res){
  try {
      let idProduits = req.params.id
      console.log(idProduits)
          db.query(`SELECT * FROM products WHERE id = ${idProduits}`, function(err, poResult){
              db.query(`SELECT name FROM users WHERE id = ${poResult[0].user_id}`, function(err, usersName){
                  let tab = [];
                  tab.push(poResult[0])
                  tab.push(usersName[0])
                  console.log(tab)
                  res.status(200).send(tab)
              })              
          })
  } catch (error) {
      res.status(400);
  }
});



  module.exports = router;