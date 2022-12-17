// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const DevSkill = require('./models/devskills');
const DjangoList = require('./models/djangolist');
const ExpressList = require('./models/expresslist');

// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let devskill, djangoList, expressList;
let devskills, djangoLists, expressLists;
// let user, item, category, order;
// let users, items, categories, orders;
