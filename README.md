
# Bulk Email Sender Using NodeMailer

NodeMailer Bulk Email Sender is a Node.js application that allows you to send bulk emails with attachments(optional) to multiple recipients using NodeMailer. 

## Features

- Send bulk emails to multiple recipients with ease
- Sanitize email addresses to prevent formatting issues
- Recipients email addresses kept private
- Customize email content with plain text and HTML
- Add attachments to email

## Prerequisites
- Node.js (version 14 or higher)
- NPM (Node Package Manager)
## Table of Contents

-  [Installation](#installation)
- [Usage/Examples](#usage/examples)
- [Getting a Google App Password](#getting-a-google-app-password)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
## Installation

`Clone the project`

```bash
  git clone https://github.com/crypticcodedeveloper/nodemailer-bulk-email-sender.git
```

`Go to the project directory`

```bash
  cd nodemailer-bulk-email-sender
```

`Install dependencies`

```bash
  npm install
```

`Run the appliication - Don't do this until you configure the app`

```bash
  npm run send-bulk-email
```



    
## Usage/Examples

- Configure your email credentials:
`Edit code below in the server.js file on line 32:`
```javascript 
    auth: {
      user: process.env.USER, // replace with your gmail account
      pass: process.env.APP_PASS, // replace with your gmail app password
    },
```

Quick Guide: [How to get a Google App Password](#getting-a-google-app-password)

- Add recipient emails:

      Add all recipients email address in the emailList.txt file.
      Each email address should be on a new line.

- Run the application:
```bash
npm run send-bulk-email
```
OR
```bash
node server
```
- Customize Email Content:

`You can customize the email subject, text, and HTML content in the sendEmails.js file:`

`Edit from line 37 in the server.js file`

```javascript 
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
```

- Sending Attachments with mail:
        
`Edit this code from line 52. The code has been commented out by default so you need to uncomment the code which ends at line 67. Make sure to edit path and Filename`

```javascript
attachments: [
        {
            filename: "Atomic-Habits.pdf", 
            path: path.join(__dirname, "attachments","Atomic-Habits.pdf"),
            contentType: "application/pdf"
        },
        {
            filename: "image.jpg",
            path: path.join(__dirname,"attachments","image.jpg"),
            contentType: "image/jpg"
        },
```
## Getting a Google App Password

`To send emails through your Gmail account using NodeMailer, you need to create an app password. Here’s how:`

### Step 1: Enable 2-Step Verification

    1. Go to your [Google Account](https://myaccount.google.com/).
    2. Navigate to `Security`.
    3. Under `Signing in to Google`, select `2-Step Verification`.
    4. Follow the steps to set up 2-Step Verification.

### Step 2: Generate an App Password

    1. After enabling 2-Step Verification, go back to the `Security` section.
    2. Under `Signing in to Google`, select `App Passwords`.
    3. You may need to sign in again.
    4. In the `Select app` dropdown, choose `Mail`.
    5. In the `Select device` dropdown, choose the device you're using or `Other` to enter a custom name.
    6. Click `Generate`.
    7. Copy the 16-character app password.

### Step 3: Use the App Password in Your Project

    Replace the placeholder in your NodeMailer configuration with the app password you generated.

## Contributing

```Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding guidelines and includes relevant tests.```



## License

`Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at`

https://www.apache.org/licenses/LICENSE-2.0

`Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`


## Acknowledgements

 - [NodeMailer](#)
 - [Node.js](#)
 - [NPM](#)

