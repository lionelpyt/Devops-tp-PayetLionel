const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const FILE_PATH = 'stats.json'

const readStats = () => {
    let result = {}
    try {
        result = JSON.parse(fs.readFileSync(FILE_PATH))
    } catch (err) {
        console.error(err)
    }
    return result
}

const dumpStats = (stats) => {
    try {
        fs.writeFileSync(FILE_PATH, JSON.stringify(stats), { flag: 'w+' })
    } catch (err) {
        console.error(err)
    }
}

const getRoute = (req) => {
   const route = req.route ? req.route.path : '' 
   const baseUrl = req.baseUrl ? req.baseUrl : ''

   return route ? `${baseUrl === '/' ? '' : baseUrl}${route}` : 'unknown route'
 }

app.use((req, res, next) => {
    res.on('finish', () => {
        const stats = readStats()
        const event = `${req.method} ${getRoute(req)} ${res.statusCode}`
        stats[event] = stats[event] ? stats[event] + 1 : 1
        dumpStats(stats)
    })
    next()
})

app.get('/ping', (req, res) => {
  res.json({
        headers: req.headers
  });
});

app.get('/stats', (req, res) => {
    res.json(readStats())
})

app.use((req, res) => {
  res.sendStatus(404);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
