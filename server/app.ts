import { createServer } from './utils/server.js'
import defaultConfig from './config/default'
import cors from 'cors'
const app = createServer()

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use(cors())
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/test', (req, res) => res.status(200).json({message: 'This is a message from the server'}))

app.listen(defaultConfig.PORT, () => console.log(`SERVER listening on port ${defaultConfig.PORT}!`))