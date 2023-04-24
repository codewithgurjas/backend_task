const mongoose = require('mongoose');

module.exports.connection=function(){
    mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.4kfw6ng.mongodb.net/?retryWrites=true&w=majority') .then(function() {
        console.log("mongo is connected") 
    })
    .catch(function(err) {
        console.log(err+"error occurred") })
}
