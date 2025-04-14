const express = require("express");
const cors = require("core")

const rootroutes = require("./routes");


 const app = express();
app.use(cors())
app.use(express.json());
  app.use("/api/v1",rootroutes );

  app.listen(3000);
  
 