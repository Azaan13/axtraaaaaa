const { Client } = require("discord.js");
const mongoose = require("mongoose");
const { Database } = require("../../config.json");

module.exports = {
    name: "ready",
    once: true,
    /**
    * @param {Client} client
    */
    execute(client) {
        console.log("The client is now ready!");
        client.user.setActivity("Bodu balaa eh!", {type: "LISTENING"});

        if(!Database) return;
        mongoose.connect(Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() =>{
            console.log("Client is connected to database now!");
        }).catch((err) => {
            console.log(err)
        });
    }
} 