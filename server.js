var express = require("express");
var app = express();

var PORT = 3000;

app.use(
  "/",
  (req, res, next) => {
    console.log(req.url);
    next();
  },
  express.static(__dirname)
);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!\n`);
});
