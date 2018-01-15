const express = require('express'),
      router  = express.Router();
      
router.get('/', (req, res) => {
    res.send('To know your ip, language and software go to /whoami');
});

router.get('/whoami', (req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    
    var response = {
        ipaddress: ip,
        language: req.headers['accept-language'].split(',')[0],
        software: req.headers['user-agent'].split('(')[1].split(')')[0]
    }
    
    res.json(response);
});

module.exports = router;