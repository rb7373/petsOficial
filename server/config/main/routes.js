var authController = require("../../controllers/main/authController");
var userController = require("../../controllers/main/userController");
var translatorController = require("../../controllers/main/translatorController");

module.exports = function (app) {

    app.get('/api/users', authController.requiresRole('admin'), userController.getUsers);
    app.post('/api/users', userController.createUser);
    app.put('/api/users', userController.updateUser);

    app.get('/api/translation/:language', translatorController.getLanguage);

    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });
    app.get('/layout/*', function (req, res) {
        res.render('../../public/app/layout/' + req.params[0]);
    });

    app.get('/animations/*', function (req, res) {
        res.render('../../public/app/physics/' + req.params[0]);
    });

    app.all('/api/*', function (req, res) {
        res.sendStatus(404);
    });

    app.post('/signin', authController.authenticate);
    app.post('/logout', function (req, res) {
        req.logout();
        res.end();
    });


    app.get('*', function (req, res) {
        res.render('./main/index', {
            bootstrappedUser: req.user
        });
    });

};