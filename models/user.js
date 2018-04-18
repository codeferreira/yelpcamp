var mongoose = require("mongoose"),
    pLM = require("passport-local-mongoose");

var UserSchema = mongoose.Schema({
    username: String,
    password: String
});

UserSchema.plugin(pLM);

module.exports = mongoose.model("User", UserSchema);