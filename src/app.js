import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {     
    const signup = req.body;

    //signup.id = user.length + 1;

    users.push({
        ...signup,
        id: users.length + 1
    });

    res.send('OK');
});

app.post('/tweets', (req, res) => {

    res.send('OK');
});

app.get('/tweets', (req, res) => {    

    res.send('OK');
});


app.listen(5000, () => console.log('Listen on 5000'));