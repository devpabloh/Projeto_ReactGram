const mongoose = require("mongoose");
const {schema} = mongoose;

const userSchema = new schema({
    name: String,
    email: String,
    password: String,
}, {
    Timestamps: true,
}
);

const User = mongoose.model("User", userSchema);

module.exports = User;