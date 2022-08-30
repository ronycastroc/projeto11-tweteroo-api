import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {     
    const { username, avatar } = req.body;

    if(!username || !avatar) {
        res.status(400).send({message: 'Preencha todos os campos!'})
        return;
    }

    const isUserExist = users.find((value) => value.username === username);

    if (isUserExist) {
        res.status(400).send({message: 'Usuário existente!'});
        return;
    }

    users.push({
        username,
        avatar,
        id: users.length + 1
    });

    res.status(201).send({message:'OK'});
});

app.post('/tweets', (req, res) => {
    const { user: username} = req.headers;
    const { tweet } = req.body;
    const { avatar } = users.find(value => value.username === username);

    if(!username || !tweet) {
        res.status(400).send({message: 'Preencha todos os campos!'})
    }

    tweets.push({
        username,
        tweet,
        avatar,
        id: tweets.length + 1
    });

    res.status(201).send({message:'OK'});
});

app.get('/tweets', (req, res) => {
    res.send(tweets.slice(-10).reverse())
});

app.get('/tweets/:username', (req, res) => {
    const { username } = req.params;

    const userTweet = tweets.filter(value => value.username === username);

    res.send(userTweet);

})


app.listen(5000, () => console.log('Listen on 5000'));