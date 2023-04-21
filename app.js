const app = require('fastify')();
require('dotenv').config();

app.get('/', (req,res) => {
    res.send({message: 'Hello World'});
});

app.listen({port: process.env.PORT || 3000},(err) => {
    if(err)
    {
        console.log(err);
    }
    console.log('Server running on http://localhost:3000');
})