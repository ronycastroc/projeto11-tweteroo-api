import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {     
    const signup = req.body;

    users.push({
        ...signup,
        id: users.length + 1
    });

    res.send('OK');
});

app.post('/tweets', (req, res) => {
    const tweet = req.body;
    const pic = users.find(value => value.avatar);

    tweets.push({
        ...tweet,
        avatar: pic.avatar,
        id: tweets.length + 1
    });

    res.send('OK');
});

app.get('/tweets', (req, res) => res.send(tweets.slice(-10)));


app.listen(5000, () => console.log('Listen on 5000'));