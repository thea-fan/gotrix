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


//Equipment
    app.get('/equipment', neiController.equipment);
    app.get('/equipment/:name', neiController.singleEquipment);

//Reply
    app.post('/activity/:id/reply/', neiController.newReply);
    app.put('/activity/:id/reply/:reply_id/edit', neiController.editReply);
    app.delete('/activity/:id/reply/:reply_id', neiController.deleteReply);

//Question
    app.get('/activity/new', neiController.newPost);
    app.post('/activity/new', neiController.postNewPost);
    app.get('/activity/:id', neiController.question)
    app.put('/activity/:id/edit', neiController. editQuestion);
    app.delete('/activity/:id', neiController.deleteQuestion);

//Root
    app.post('/login', neiController.loginPost);
    app.post('/register', neiController.registerPost);
    app.get('/logout', neiController.logout);
    app.get('/', neiController.root);
    app.get('/home', neiController.home);





    app.post('/activity/:id', neiController.attend);
    app.get('/user/:id', neiController.user)
    app.get('/profile', neiController.profile);


};