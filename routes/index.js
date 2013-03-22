
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Tuner' });
};

/*
 * GET signup page
 */
exports.signup = function(req,res){
    res.render('signup', {title: 'Signup'});
}

exports.signupFail = function(req,res){
    res.render('signupfail', {title: 'Signup Failed'});
}