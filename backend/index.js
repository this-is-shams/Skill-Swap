const express = require('express')
const mongoose = require('mongoose');
const signupHandler = require("./routeHandler/signupHandler")
const signinHandler = require("./routeHandler/signinHandler")
const cors = require('cors')

//express app initialization
const app = express()
app.use(express.json())
app.use(cors())

//cygnus
//star99MOON


//database connection with mongoose
mongoose.connect('mongodb+srv://cygnus:star99MOON@cluster0.ifcdflc.mongodb.net/mentorship?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log('Connection Success'))
.catch(err => console.log(err))

//application routes
app.use('/signup',signupHandler);
app.use('/signin',signinHandler);


//default error handler
function errorHandler(err,req,res,next){
    if(res.headerSent){
        return next(err);
    }
    res.status(500).json({error:err});
}


app.listen(5000, () => {
    console.log("app listening at port 5000")
});

