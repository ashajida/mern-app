require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use(fileUpload());
app.use(cookieParser());
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

const db = require('./database');
const Post = require('./models/Post');
const Category = require('./models/Category');
const User = require('./models/User');
Post.belongsTo(Category);
Category.hasMany(Post);



db.authenticate()
.then(() => console.log('db connected'))
.catch((error) => console.log(error));


// Login
app.post('/api/login', function(req, res) { 

  const {email, password} = req.body;

  User.findOne({
    where: {
      email
    }
  })
  .then(user => {

    //Check if user exists
    if(!user) return res.sendStatus(401);

     // validate password
    bcrypt.compare(password, user.password, function(err, result) {

      if(err) return res.sendStatus(401);

      if(!result) return res.sendStatus(401);

      const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '60mins'
      });
  
      const refreshToken = jwt.sign({user}, process.env.REFRESH_TOKEN_SECRET);

      res.setHeader('set-cookie', [
        
         `accessToken=${accessToken}; httponly`,
         `refreshToken=${refreshToken}; httponly`,
        
      ]);
  
      res.send({
        accessToken,
        refreshToken
      })

    });

  })
  .catch(error => sendStatus(401));

});

// Register
app.post('/api/register', function(req, res) { 

  const {username, password, email} = req.body;

  bcrypt.hash(password, saltRounds, function(err, hashPassword) {

      if(err) return res.send({'Error': error})

      User.create({
        username,
        password: hashPassword,
        email,
        avatar: '123'
      })
      .then(user => {
        res.sendStatus(201);
      })
      .catch(error => res.sendStatus(401));
  });

});

// Logout
app.get('/api/logout', function(req, res) {

  res.setHeader('set-cookie', [
        
    `accessToken=; max-age=1 httponly`,
    `refreshToken=; max-age=1 httponly`,
   
 ])

  
  res.send({
    'Message': 'successful'
  })
  res.sendStatus(200);
})


const filterCookies = (req, res, next) => {


  if(req.headers.cookie == null) return res.sendStatus(401);

  const cookies = req.headers.cookie.split('; ');

  const cookiesArr = cookies.map(cookie => {
    const newCookie = cookie.split('=');
    return {
      [newCookie[0]]: newCookie[1]
    }
  })

  req.cookies = cookiesArr;
  next();
} 

app.post('/api/refresh', filterCookies, function(req, res) { 

  const refreshToken = req.cookies[1]['refreshToken'];


  if(refreshToken == null) {

  }

  // Verify token
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if(err) return res.sendStatus(403);
    const accessToken = jwt.sign({name: user.email}, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '10mins'
    });

    res.setHeader('set-cookie', [
      `accessToken=${accessToken}; httponly`,       
    ])

    res.sendStatus(200)
  });
})

const authenticate = (req, res, next) => {
 
  const accessToken = req.cookies[0] && req.cookies[0]['accessToken'];

  if(accessToken == null) return res.status(401);

  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
     if(err) return res.sendStatus(403);
  
     req.user = user;

     next();
     
  });


}

app.get('/api/verify-token', filterCookies, authenticate, function(req, res) {
  res.sendStatus(200);
});

app.get('/api/recipes', (req, res) => {
  Post.findAll({
    include: [
      { model: Category }
    ]
  })
.then(posts => res.json(posts) )
.catch(error => console.log(error));

});

const upload = (req, res) => {
  let file;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  file = req.files.file;
  uploadPath = path.join(__dirname, './frontend/public/uploads/' + file.name);

  // Use the mv() method to place the file somewhere on your server
  file.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);
  });

  return file;
}

app.post('/api/recipes', filterCookies, authenticate, function(req, res) {

  const file = upload(req, res);

  const payload = {
    title: req.body.title,
    body: req.body.content, 
    categoryId: req.body.category,
    image: file.name,
    featured: req.body.featured,
    duration: '30mins'
  } 

  Post.create(payload).then(posts => {
    res.json(posts);
  })
  .catch(error => {
    res.sendStatus(403);
    console.log(error);
  });

});

app.post('/api/recipes/:id/edit', function(req, res) {

  let payload = {
    body: req.body.content,
    title: req.body.title,
    categoryId: req.body.categoryId,
    featured: req.body.featured
  };

  if(req.files) {
    const file = upload(req, res);
    payload = Object.assign(payload, {image: file.name});
  }
 
  Post.update(
    payload,
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(() => {
    Post.findOne({
      where: {
        id: req.params.id
      }
    }).then(post => res.json(post));
  })
  .catch(error => console.log(error));

});

app.get('/api/recipes/:id', function(req, res) {

  Post.findOne({
    where: {
      id: req.params.id
    }
  }).then(recipe => res.json(recipe) )
  .catch(error => console.log(error));

});

app.post('/api/recipes/:id/delete', filterCookies, authenticate, function(req, res) {
  Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
      Post.findAll()
      .then(posts => res.json(posts) )
      .catch(() => res.sendStatus(404));
    })
  .catch(() => res.sendStatus(404));
  
});


app.post('/api/categories', filterCookies, authenticate, function(req, res) {

  const file = upload(req, res);

  const payload = {
    name: req.body.name,
    image: file.name,
    isBig: req.body.featured
  } 

  Category.create(payload).then(categories => {
    res.json(categories)
  } )
  .catch(error => {
    res.sendStatus(401);
    console.log(error)
  });

});

app.get('/api/categories/:id', filterCookies, authenticate, function(req, res) {

  Category.findOne({
    where: {
      id: req.params.id
    }
  }).then(category => res.json(category) )
  .catch(error => console.log(error));

});

app.get('/api/categories', (req, res) => {
  Category.findAll({
    include: [
      { model: Post }
    ]
  })
.then(categories => res.json(categories) )
.catch(error => console.log(error));

});

app.get('/api/recipes/categories/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Post]
  })
.then(category => {
  res.json(category); 
})
.catch(error => console.log(error));

});



if(process.env.NODE_ENV === 'production') {
  
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html' ))
  });

}
