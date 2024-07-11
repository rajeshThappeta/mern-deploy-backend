const express = require('express');

const app = express()
const cors=require('cors');
const PORT = 8000

app.use(cors({
  origin:'',
  methods:['GET','POST','PUT','DELETE'],
  credentials:true
}))

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/users', (req, res) => {
  res.send([{id:1,name:"rvi"},{id:2,name:"bhanu"}])
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})