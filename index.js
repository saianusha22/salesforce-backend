const express = require('express');
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 3000


app.use(express.json());
app.use(cors());
app.get('/',(req,res) =>{
    res.sendFile(__dirname+"/index.html");
})
app.post('/', (req, res) => {
  const { email, mobileNo } = req.body;
  let isValidDetails = false;
  console.log(email);
  console.log(mobileNo);
  for(let i=0;i<dummyData.length ;i++)
  {
    console.log(dummyData[i].emailId)
      if(email == dummyData[i].emailId && mobileNo == dummyData[i].phoneNo)
      {
        isValidDetails = true;
		res.statusCode = 200;
        res.send({ 'data': { 
            ...dummyData
          },'rc':{'returncode':0,errorMessage :''}});
          break;
      }
  }
  if(!isValidDetails)
  {
      res.send({'rc':{'returncode':2,errorMessage :'Please enter valid details'}})
  } 
 
});

app.listen(port, () => {
console.log('Our express server is up on port '+port);
});
var dummyData = [
  {
    "id": 1,
    "firstName": "Rahul",
    "lastName": "Sharma",
    "emailId": "rahul@testorg.com",
    "phoneNo": "223232",
    "company": "Salesforce",
    "jobRole": "Software Engineer"
  },
  {
    "id": 2,
    "firstName": "Peter",
    "lastName": "Roch",
    "emailId": "peterr@testorg.com",
    "phoneNo": "+14353458435",
    "company": "SR Solutions",
    "jobRole": "Test Engineer"
  },
  {
    "id": 3,
    "firstName": "Mark",
    "lastName": "Lasmat",
    "emailId": "mlasmat@testorg.com",
    "phoneNo": "9439437947384",
    "company": "RK Softwares",
    "jobRole": "Product Manager"
  }
]