import cors from 'cors'
import { createServer } from './utils/server.js'
import defaultConfig from './config/default'

const app = createServer()

app.use(cors({origin: 'https://63c4bc8b3a64455afde13b40--spiffy-chimera-cf83fd.netlify.app/'}))
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/test', (req, res) => res.status(200).json({message: 'This is a message from the server'}))

app.listen(defaultConfig.PORT, () => console.log(`SERVER listening on port ${defaultConfig.PORT}!`))