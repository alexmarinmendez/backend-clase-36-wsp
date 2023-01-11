require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
.create({ 
    body: 'Your Yummy Cupcakes Company order of 1 dozen frosted cupcakes has shipped and should be delivered on July 10, 2019. Details: http://www.yummycupcakes.com/', 
    from: 'whatsapp:+14155238886',       
    to: 'whatsapp:+51942270712' 
  }) 
      .then(message => console.log(message.sid))
      .catch(err => console.log(err));