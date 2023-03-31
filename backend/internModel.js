var mongoose = require('mongoose'),
Schema = mongoose.Schema,
autoIncrement = require('mongoose-auto-increment');
mongoose.connect('mongodb+srv://jeet_2022:Ar4HvmddT90M2sDB@cluster0.cqe5zy7.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
var conn = mongoose.connection;
autoIncrement.initialize(conn);
// mongoose.connect('mongodb+srv://jeet_2022:Ar4HvmddT90M2sDB@cluster0.cqe5zy7.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
conn.on('connected', function () {
    console.log('database is connected successfully');
});
conn.on('disconnected', function () {
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
var internSchema = new mongoose.Schema({
    intern_name: String,
    intern_phone : String,
    intern_hobbies: String,
    intern_email : String
});
// select:(checkbox Attribute to select row/rows) 
// ID: serial number
// Name: name 
// Phone Number
// Email
// Hobbies
// Update/delete
internSchema.plugin(autoIncrement.plugin, { model: 'intern', field: 'intern_id' });
internModel = mongoose.model('intern', internSchema);
module.exports = internModel;
