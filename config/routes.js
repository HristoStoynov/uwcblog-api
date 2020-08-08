const routers = require('../routers');

module.exports = (app) => {

    app.use('/api/user', routers.user);

    app.use('/api/post', routers.post);

    app.use('/api/comment', routers.comment);

    app.use('*', (req, res, next) => {
        res.send('<h1>404</h1>')
    })
};