module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const neiController = require('./controllers/nei')(allModels);

    app.post('/activity/:id/reply', neiController.newReply);
    app.post('/activity/new', neiController.postNewPost);
    app.get('/activity/new', neiController.newPost);
    app.put('/activity/:id/edit', neiController. editQuestion);
    app.delete('/activity/:id', neiController.deleteQuestion);
    app.post('/activity/:id', neiController.attend);
    app.get('/activity/:id', neiController.activity)
    app.get('/activity', neiController.home);
    app.post('/login', neiController.loginPost);
    app.post('/register', neiController.registerPost);
    app.get('/user/:id', neiController.user)
    app.get('/profile', neiController.profile);
    app.get('/home', neiController.home);
    app.get('/logout', neiController.logout);
    app.get('/', neiController.root);

};