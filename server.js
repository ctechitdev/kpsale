const express = require("express");


const apiStaffRout = require('./src/kpsale/route/staff_user_rout')

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world");
});

app.use('/api', apiStaffRout);

app.listen(port, () => console.log(`App has start on port ${port}`));


