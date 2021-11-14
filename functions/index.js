const functions = require("firebase-functions");
const express =require("express");
const cors=require("cors");
const stripe=require('stripe')("sk_test_51JuGmnSE4XZmlpDjzUx94JTDKOf2V6MloLMBQDHzVDWTLX4eVxIMhhBcUUBD71haH4XgbgQLkSve6qMcLcwgfzrE00xmrUfkMO")

//now everrything will be done in order to set up an api

//App config
const app=express();
//middlewares
app.use(cors({origin:true}));
app.use(express.json());

//api routes
app.get('/',(request,response)=> response.status(200).send('hello world'))

app.post('/payments/create', async (request,response)=>{
    const total=request.query.total;
    console.log('payment request recieved',total)
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total, //subunits of the currency
        currency: "INR",
    })
    //for ok 
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//listen command
exports.api=functions.https.onRequest(app);
//example endpoint
//http://localhost:5001/e-commerce-24/us-central1/api
const paymentIntent=stripe.paymentIntents.create({
    amount:20000, //subunits of the currency
    currency: "INR",
}).then(console.log)
