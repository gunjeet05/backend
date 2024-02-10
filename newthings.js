/*
I have to create a backend project using nodeJs and express
Set up all the file 
npm init
installed express 
installed nodemon 
make changes into package.json so that it automatically run 
we can provide PORT number directly but we have use .env file for that 
command npm i dotenv 

 write dotenv.config it will do its work then using process.env to use values in env file

app.get("url" , callback )
we have different crud methods like put -> to update something , post -to create , delete, get
Then we made a seprate file for all urls 
we have middlewares which we apply using use


if we are getting something we have to parse it else it will show undefined 
app.use(express.json())-->this will parse the data we are getting

app.listen(port , ()=>{

})

*/

/*
1.whatever we are importing and whatever we are exporting name should be same.
2.Whenever we are dealing with mongo db and mongoose we will be getting promises and to deal 
with then we have to use async await 
now we have to deal with error in async await and for that we have to provide try catch block to avoid that 
we can use express-async-handler
command->npm i express-async-handler and then wrap all the async with this handler
*/


/*
Error handling
(err, req, res ,next)=>{

}
*/


/*

Contact Controller.js

Since we are dealing with mongo and mongoose we will be recieving promise 
to deal with them we will use async await
to avoid multiple try and catch block we will use async-handler 
npm i express-async-handler 
and we will wrap all the async method with this handler 
this handler will automatically handle the errors 
*/