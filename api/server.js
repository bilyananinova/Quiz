let express = require('express');
let app = express();
let cors = require('cors');
let cookieParser = require('cookie-parser');

let { PORT } = require('./config/constants');
let { auth } = require('./middlewares/auth');

require('./config/express.js')(app);
require('./config/database.js')(app);

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));
app.use(cookieParser());
app.use(auth);
app.use(require('./router.js'));

app.get('/', (req, res) => { 
    res.send('Hello from Express!')
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}...`);
});