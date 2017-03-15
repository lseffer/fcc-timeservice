var express = require("express");

var app = express();

app.get('/:date', function(req, res){
    // res.send('try a string after the url');
    var inputurl = req.params.date;
    var outputdate;
    var output = {"date" : null, "unix": null};
    if(!isNaN(parseInt(inputurl, 10))){
        outputdate = new Date(parseInt(inputurl, 10)*1000);
        output["date"] = outputdate.toDateString();
        output["unix"] = outputdate.getTime() / 1000;
    } else {
        outputdate = new Date(Date.parse(inputurl));
        if(!isNaN(outputdate)){
        output["date"] = outputdate.toDateString();
        output["unix"] = outputdate.getTime() / 1000;
        }
    }
    
    res.end(JSON.stringify(output, null, 4));
});

app.listen(8080, function(){
    console.log('App listening on 8080');
});