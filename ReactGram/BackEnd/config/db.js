const mongoose = require("mongoose");

// conection 
const dbuser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
    try {
        const dbconn = await mongoose.connect(
            `mongodb+srv://${dbuser}:${dbPassword} @cluster0.hv6b2mm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        );

        console.log("Conectou ao banco!")

        return dbconn;
    } catch (error) {
        console.log(error)
        
    }
};

conn()

module.exports = conn;