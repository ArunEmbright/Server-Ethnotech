var express = require('express');
var router = express.Router();
var Payment = require('../models/payment');
var {nanoid} = require('nanoid')
require('dotenv/config');


let instanceOfOne = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAJORPAY_KEY_SECRET,
})
let instanceOfTwo = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAJORPAY_KEY_SECRET,
})