import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];
let avatar;

app.post('/sign-up', (req, res) => {     
    const signup = req.body;
    avatar = req.body.avatar;

    users.push({
        ...signup,
        id: users.length + 1
    });

    res.send('OK');
});

app.post('/tweets', (req, res) => {
    const tweet = req.body;

    tweets.push({
        ...tweet,
        avatar,
        id: tweets.length + 1
    })

    res.send('OK');
});

app.get('/tweets', (req, res) => {

    res.send(tweets.slice(-10));
});


app.listen(5000, () => console.log('Listen on 5000'));