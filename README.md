This is a node.js based web application, that allows users to send a message to a someone through email or text.
It creates a http link to the actual message that gets sent to the recipient. 

It validates the email/phone number field to decide if the message should be sent via email or text.
Text sending is through the twilio api.
Email sending is through the mailgun api.

The account settings are read from environment variables to be safer instead of writing in the code.
The actual message is stored in a sql database.
I used sequelize to model the message table.

In order to run the application, you will need a postgres sql instance and the twilio and mailgun api/auth keys.

Directions to install/run:
start a postgres instance
run psql (postgres console)
# createdb winit

clone this repo
$ npm start

You will be able to see a webpage running on port 8080.