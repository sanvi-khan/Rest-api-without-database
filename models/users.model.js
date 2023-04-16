const { v4: uuidv4 } = require('uuid');
let users=[
    {
        id:uuidv4(),
        username:"anisul islam",
        email:"anisulislam@gmail.com"
    },
    {
        id:uuidv4(),
        username:"sanvi khan",
        email:"sanvikhan@gmail.com"
    },
    {
        id:uuidv4(),
        username:"rakibul islam",
        email:"rakibulislam@gmail.com"
    }
]
module.exports=users;