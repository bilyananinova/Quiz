let express = require('express');
let app = express();
let cors = require('cors');
let port = process.env.NODE_ENV || 9000;

require('./config/express.js')(app);
require('./config/database.js')(app);

app.use(cors());
app.use(require('./router.js'));

app.listen(port, () => {
    console.log(`App is running on port ${port}...`);
});