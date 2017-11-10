const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({
    hello: "world"
  });
});

app.listen(PORT, () => {
  console.log(`API server running at: http://localhost:${PORT}`); // eslint-disable-line no-console
});

/*
* ROUTES + ACTIONS
*
* GET -> /customers/ returns all customers */
