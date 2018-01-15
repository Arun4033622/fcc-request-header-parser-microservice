const express = require('express'),
      app     = express(),
      routes  = require('./routes/index');
      
app.use('/', routes);

app.listen(process.env.PORT, process.env.IP, () => {
    console.log('Server is running!');
});