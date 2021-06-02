const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
]
// [ /users end point ]
app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})
// [ /users/:id end point]
app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

// [ /login end point]
app.post('/login', (req, res) => {
    // we will give data 
    const username = req.body.username;
    const password = req.body.passsword;

    // data will come from database
    const mockUserName = "Diptamoy";
    const mockPassword = "secret";

    if (username == mockUserName && password == mockPassword) {
        res.json({
            success: true,
            message: 'password and username match',
            token: 'encrypted token'
        })
    }
    else {
        res.json({
            success: false,
            message: 'password and username doesnot match'
        })
    }
})

app.listen(8000, function() {
    console.log('server is rumming....')
})