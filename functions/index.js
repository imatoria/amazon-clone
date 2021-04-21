const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IiJb3SJ3lzTtxS8jCSVHf8V0J7NuEJ9HW3Ej85ii4m3ZllJsQoyd1IUYT0LdyzjlMtCUmHmP94OkRI4ffWGJbRG00cUk1SCvA"
);

//API

//App Config
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);
