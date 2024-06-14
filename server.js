//   _____                      _    _         _____             _        _____                      _                           
//  / ____|                    | |  (_)       / ____|           | |      |  __ \                    | |                          
//  | |      _ __  _   _  _ __  | |_  _   ___ | |       ___    __| |  ___ | |  | |  ___ __   __  ___ | |  ___   _ __    ___  _ __ 
//  | |     | '__|| | | || '_ \ | __|| | / __|| |      / _ \  / _` | / _ \| |  | | / _ \\ \ / / / _ \| | / _ \ | '_ \  / _ \| '__|
//  | |____ | |   | |_| || |_) || |_ | || (__ | |____ | (_) || (_| ||  __/| |__| ||  __/ \ V / |  __/| || (_) || |_) ||  __/| |   
//   \_____||_|    \__, || .__/  \__||_| \___| \_____| \___/  \__,_| \___||_____/  \___|  \_/   \___||_| \___/ | .__/  \___||_|   
//                  __/ || |                                                                                   | |                
//                 |___/ |_|                                                                                   |_|                
                                                                                                

const nodemailer = require('nodemailer')
const path = require("path")
const fs = require('fs')
require('dotenv').config();

console.log('Operation to send bulk email has started...')
console.time('Operation Ended')

// reading the emails from the emailList.txt file
const emailList = fs.readFileSync(path.join(__dirname,'emailList.txt'), 'utf-8').split('\n');
let filteredEmail = [];
emailList.forEach((email)=>{
    filteredEmail.push(email.replace(/[\r\n]/g, '').trim())
})

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: process.env.USER, // replace with your gmail account
      pass: process.env.APP_PASS, // replace with your gmail app password
    },
 });

const mailOptions = {
    from: {
        name: 'Nodemailer', // Your name
        address: process.env.USER // Replace with your gmail account
    },
    to: 'You', 
    bcc: filteredEmail, // Reading email from the filteredEmail array
    subject: "Test email",
    text: "Hello There! This is a test email",
    html: '<h1 style="color:gray"> Hello world! </h1>',
    headers: {
        'X-Priority': '3',
        'X-MSMail-Priority': 'Normal',
        'Importance': 'Normal'
    },
    // attachments: [
    //     {
    //         filename: "Atomic-Habits.pdf", 
    //         path: path.join(__dirname, "attachments","Atomic-Habits.pdf"),
    //         contentType: "application/pdf"
    //     },
    //     {
    //         filename: "image.jpg",
    //         path: path.join(__dirname,"attachments","image.jpg"),
    //         contentType: "image/jpg"
    //     },
    //     // Add other attachments below
    //     
                // REMOVE ALL COMMENTS IF YOU WISH TO SEND ATTACHMENT(S) IN YOUR MAIL AND MAKE SURE TO
                // CHANGE THE DEFAULT PATHS TO YOUR FILE PATH
    // ],
}

const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions)
        console.log('Email has been sent successfully!')
        console.timeEnd('Operation Ended')
    } catch (error) {
        console.log("Error occured while sending mail: ", error)
    }
}

sendMail(transporter, mailOptions)

                                                                                                   
// _-_ _,,         ,, ,,                                 ,,                          |\               
//    -/  )        || ||                          _    ' ||                           \\              
//   ~||_<   \\ \\ || ||/\        _-_  \\/\\/\\  < \, \\ ||        _-_,  _-_  \\/\\  / \\  _-_  ,._-_ 
//    || \\  || || || ||_<       || \\ || || ||  /-|| || ||       ||_.  || \\ || || || || || \\  ||   
//    ,/--|| || || || || |       ||/   || || || (( || || ||        ~ || ||/   || || || || ||/    ||   
//   _--_-'  \\/\\ \\ \\,\       \\,/  \\ \\ \\  \/\\ \\ \\       ,-_-  \\,/  \\ \\  \\/  \\,/   \\,  
//  (                                                                                                 
    