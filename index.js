const express = require ('express');
const app = express();
app.set('view engine', 'ejs')


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
//  res.json({message:"Welcome to the Game Store"})
//res.download('index.js')

res.render('index', {text: "World"})
})

const gameRouter = require ('./routes/games')
const studioRouter = require('./routes/studios')


app.use('/games', gameRouter)
app.use('/studios', studioRouter)

app.listen (PORT, () => console.log(`Server started ${PORT}`));

