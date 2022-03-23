const cookieParser = require('cookie-parser');
const express = require ('express');
const router = require('./Routes/routes');
const cors = require('cors')
const app = express();
const morgan = require('morgan');
//const jwt = require ('express-jwt')

// const corsConfig = {
//     origin: true,
//     Credentials: true,
// };

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors())
//app.use(cors(corsConfig));
//app.options('*', cors(corsConfig))


app.use('/', router)




app.listen(7979, ()=>{
    console.log('App is listening to port 7979');
})