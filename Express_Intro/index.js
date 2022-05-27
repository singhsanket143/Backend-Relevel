const express = require('express'); // the express module exports a function 
const bodyParser = require('body-parser');

const app = express(); // by running the express function we got a new express application object

const logger = (req, res, next) => {
    console.log(req.url);
    next(); // logger1
}

const logger1 = (req, res, next) => {
    console.log("query params are", req.query);
    next(); // last callback function
}

/*
we can define our own middlewares and just pass then in the route one by one in th eorder of execution.
if we want to register a middleware for all the routes, we can use the app.use method
*/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger);
app.use('/request-type', (req, res, next) => {
    console.log("request type is", req.method);
    next();
});

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views')



/*
the express application object includes the functionality to define routes for resources.
when we write app.get it starts defining a new route with http method get
then in the first argument we can pass the url, and in the second argument we can pass a call back function
this callback function expects two arguments, req -> http request object and res -> http response object
*/
app.get('/', (req, res) => {
    res.send('Express server setup');
});

app.get('/home', logger1, (req, res) => {
    res.send('Homepage');
});

app.post('/help', (req, res) => {
    res.send('help page');
})

app.get('/request-type', (req, res) => {
    res.send('done')
})

app.get('/serving', (req, res) => {
    res.render('index', {message: 'ok', success: true, code: 200});
})

app.get('/blog/:blogid', (req, res) => {
    console.log(req.params);
    res.send('blogs');
});

app.get('/user/:userid/blog/:blogid', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    console.log(req.url);
    console.log(req.protocol);
    console.log(req.path);
    console.log(req.method);
    console.log(req.headers);
    console.log(req.header('user-agent'));
    res.append('content-length', 2000);
    // res.status(200).send({message: 'done'});
    // res.redirect('/home');
    res.json({message: 'ok'})
})

let blogs = []

app.get('/blogs', (req, res) => {
    // some tasks
    return res.status(200).json({
        success: true,
        message: 'Successfully fetched the blogs',
        data: blogs,
        err: {},
        statusCode: 200
    })
});

app.post('/blogs', (req, res) => {
    let newBlog = {title: req.body.title, description: req.body.desc};
    blogs.push(newBlog);
    return res.status(200).json({
        message: 'Successfully created the blogs',
        success: true,
        err: {},
        statusCode: 200,
        data: newBlog
    });
})


/*
the port mentioned as the first argument of app.listen tells about the port to listen on and the second
parameter is optional, if you pass a callback function in this argument it will be executed when the server
successfully starts
*/
app.listen(3000, () => {
    console.log('Server started');
});
