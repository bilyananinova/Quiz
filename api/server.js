let express = require('express');
let app = express();
let cors = require('cors');
let cookieParser = require('cookie-parser');
let port = process.env.NODE_ENV || 9000;

require('./config/express.js')(app);
require('./config/database.js')(app);

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));
app.use(cookieParser());
app.use(require('./router.js'));

app.listen(port, () => {
    console.log(`App is running on port ${port}...`);
});