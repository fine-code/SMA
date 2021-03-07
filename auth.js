var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyRQWLXWftIj0QwD'
});
var base = Airtable.base('appHX27JJcJ5mM4K9');

function login() {
    var username = $("#uname").val();
    console.log("Hashing password...")
    //hash password
    var passhash = CryptoJS.MD5($("#psw").val()).toString().toUpperCase();
    console.log("Seraching in database...")
    checkInBase(username, passhash);
}

const checkInBase = async (uname, pass) => {
    //locate this user in the Users table
    base('Users').select({
        maxRecords: 1,
        view: "Users View",
        filterByFormula: `AND({Email}="${uname}",{Hashed Password}="${pass}")`
    }).eachPage(function page(records, fetchNextPage) {
        console.log("Database page retrieved...")
        console.log(records);
        if (records.length == 0) { //remember that the request asked for 1 record
            console.log("User not found....")
        }
        else {
            records.forEach(function(record) {
            console.log("Logged in...")
            console.log(record);
            var role =  record.get('Role');
            var userId = record.get('User Id');
            console.log(`Role: ${role} \n User Id: ${userId}`);
            });
        }
    });
}