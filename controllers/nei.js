var sha256 = require('js-sha256');
const SALT = "project two gogogo";
const cookieParser = require('cookie-parser')

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

//app.POST (register)
    let registerPostController = (request, response) => {

        let hashedPassword = sha256( request.body.password + SALT );

        request.body.password = hashedPassword;

        db.nei.registerUser(request.body, (err, result) => {
            if (err) {
                response.send(err)

            } else {

                if (result) {
                    let user_id = result.rows[0].id;

                    let loggedInCookie = sha256( user_id + 'logged_id' + SALT );

                    response.cookie('user_name', result.rows[0].first_name + " " + result.rows[0].last_name);
                    response.cookie('user_company', result.rows[0].company);
                    response.cookie('user_type', result.rows[0].user_type);
                    response.cookie('loggedIn', loggedInCookie);
                    response.cookie('user_id', user_id);

                    response.redirect('/home');

                } else {
                    response.render('./login/usernameTaken');
                }
            }
        });
    };

//app.POST (login)
    let loginPostController = (request, response) => {
        let hashedPassword = sha256( request.body.password + SALT );

        request.body.password = hashedPassword;

        db.nei.loginUser(request.body, (err, result) => {
            if (err) {
                response.send(err)

            } else {
                if (result){
                    if(result.rows[0].password === hashedPassword) {
                        let user_id = result.rows[0].id;

                        let loggedInCookie = sha256( user_id + 'logged_id' + SALT );

                        response.cookie('user_name', result.rows[0].first_name + " " + result.rows[0].last_name);
                        response.cookie('user_company', result.rows[0].company);
                        response.cookie('user_type', result.rows[0].user_type);
                        response.cookie('loggedIn', loggedInCookie);
                        response.cookie('user_id', user_id);

                        response.redirect('/home');

                    } else {
                        response.render('./login/wrongPwd');
                    }
                }
                else {
                    response.send("no such user");
                }
            }
        });
    };

//app.GET (home - view all questions)
    let homeController = (request, response) => {

        db.nei.showAllQuestions(request.body, request.cookies, (err, result) => {
            if (err) {
                response.send(err)
            }

            else {
                let data = {
                    allQuestions : result.rows,
                    status: request.cookies
                }
                response.render('home', data);
            }
        });
    };


//app.DELETE (Delete question)
    let  deleteQuestionController = (request, response) => {
       let questionID = parseInt(request.params.id);

        db.nei.deleteQuestion(questionID, request.cookies, (err, result) => {
            if (err) {
                response.send(err)

            } else {
                response.redirect("/home");
            }
        });

    };

//app.PUT (Update questions)
    let editQuestionController = (request, response) => {
       let questionID = parseInt(request.params.id);

        db.nei.editQuestion(request.body, questionID, request.cookies, (err, result) => {
            if (err) {
                response.send(err)

            } else {
                response.redirect("/activity/"+ questionID);
            }
        });

    };

//app.GET (view respective question)
    let questionController = (request, response) => {
        let questionId = parseInt(request.params.id);

        db.nei.singleQuestion(questionId, request.cookies, (err, result) => {
            if (err) {
                response.send(err)
            }
            else {
                let data = {
                    replyDetails : result.replyDetails,
                    specificQuestion : result.questionDetails,
                    Id : questionId,
                    status : request.cookies
                }

                response.render('singleQuestion',data);
            }
        });
    };

//app.GET (view all equipment)
    let equipmentController = (request, response) => {

        db.nei.allEquipment(request.cookies, (err, result) => {
            if (err) {
                response.send(err)
            }
            else {
                let data = {
                    equipmentList : result.rows,
                    status : request.cookies
                }

                response.render('allEquipment',data);
            }
        });
    };

//app.GET (view single equipment)
    let singleEquipmentController = (request, response) => {
        let equipment = request.params.name;

        db.nei.singleEquipment(equipment, request.cookies, (err, result) => {
            if (err) {
                response.send(err)
            }
            else {
                let data = {
                    questionList : result.rows,
                    status : request.cookies
                }

                response.render('singleEquipment',data);
            }
        });
    };




//app.POST (attend activity)
    let attendController = (request, response) => {

        let activityId = parseInt(request.params.id);

        db.nei.attendActivity(activityId, request.cookies, (err, result) => {
            if (err) {
                response.send(err)
            }
            else {
                response.redirect('/profile')
            }
        });
    };

//app.GET (other members profile)
    let userController = (request, response) => {
        let userId = parseInt(request.params.id);

        db.nei.otherAttending(userId, (err, result) => {
            if (err) {
                response.send(err);

            } else {
                db.nei.otherPosted(userId, (err, result2) => {
                    if (err) {
                        response.send(err)

                    }
                    else {
                        let data = {
                            attending : result.rows,
                            posted: result2.rows
                        };
                        response.render('otherUserProfile', data)
                    }
                });
            }
        });
    };


//app.GET (user profile)
    let profileController = (request, response) => {

        if( request.cookies.loggedIn === undefined ){
            response.render('plsLogin');

        } else {
            db.nei.attending(request.body, request.cookies, (err, result) => {
                if (err) {
                    response.send(err);

                } else {
                    db.nei.postedActivity(request.body, request.cookies, (err, result2) => {
                        if (err) {
                            response.send(err)

                        } else {
                            let data = {
                                userInfo : request.cookies,
                                attending : result.rows,
                                posted: result2.rows
                            };
                            response.render('profile', data)
                        }
                    });
                }
            });
        };
    };


//app.GET (new - get new questions)
    let newPostController = (request, response) =>{
        if( request.cookies.loggedIn === undefined ){
            response.render('./login/plsLogin')
        } else {
            db.nei.getUserDetails(request.body, request.cookies, (err, result) => {
            if (err) {
                response.send(err);
            }
            else {
                let data = {
                    status : request.cookies
                }

                response.render('newQuestion', data);
            }
        });
    }
};



//app.POST (new - post new question)
    let postNewPostController = (request, response) =>{

        db.nei.addNewQuestion(request.body, request.cookies, (err, questionID) => {
            if (err) {
                response.send(err)

            } else {
                response.redirect('/activity/'+ questionID)
            };
        });
    };

//app.DELETE (Delete reply)
    let  deleteReplyController = (request, response) => {
       let questionID = parseInt(request.params.id);
       let replyID = parseInt(request.params.reply_id);

        db.nei.deleteReply(replyID, request.cookies, (err, result) => {
            if (err) {
                response.send(err)

            } else {
                response.redirect("/activity/"+ questionID);
            }
        });

    };

//app.PUT (Update reply)
    let editReplyController = (request, response) => {
       let questionID = parseInt(request.params.id);
       let replyID = parseInt(request.params.reply_id);

        db.nei.editReply(request.body, replyID, request.cookies, (err, result) => {
            if (err) {
                response.send(err)

            } else {
                response.redirect("/activity/"+ questionID);
            }
        });

    };

//app.POST (new - post new reply)
    let newReplyController = (request, response) =>{
        let questionID = request.params.id;

        db.nei.addReply(request.body, questionID, request.cookies, (err, result) => {
            if (err) {
                response.send(err)

            } else {
                response.redirect('/activity/'+ questionID)
            };
        });
    };

//app.GET (default home - not login)
    let rootController = (request, response) => {
        if( request.cookies.loggedIn !== undefined ){
            response.redirect('/home');

        }else{
            db.nei.activityOverview(request.body, (err, result) => {
                if (err) {
                    response.send(err)
                }

                else {
                    let data = {
                        allActivities : result.rows
                    }
                    response.render('./login/rootLayout', data);
                }
            });
        }
    };

//app.GET (logout)
    let logoutController = (request, response) => {
        response.clearCookie('loggedIn');
        response.redirect('/')
    };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    loginPost: loginPostController,
    registerPost: registerPostController,
    profile: profileController,
    home: homeController,
    deleteQuestion: deleteQuestionController,
    editQuestion: editQuestionController,
    user: userController,
    attend: attendController,
    question: questionController,
    equipment: equipmentController,
    singleEquipment: singleEquipmentController,
    newReply: newReplyController,
    editReply: editReplyController,
    deleteReply: deleteReplyController,
    newPost: newPostController,
    postNewPost: postNewPostController,
    logout: logoutController,
    root: rootController,
  };

}