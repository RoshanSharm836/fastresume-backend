const express = require("express");
const connection = require("./db/config");
const router = require("./Routes/resume.model");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/", router);

// app.use(express.static(path.join(__dirname, "./resume/build")));

// app.get("*", (_, res) => {
//   res.sendFile(
//     path.join(__dirname, "./resume/build/index.html"),
//     (err) => {
//       if (err) {
//         res.status(500).send(err);
//       }
//     }
//   );
// });

app.listen(PORT, () => {
  try {
    connection();
    console.log("listing on port on ", PORT);
  } catch (error) {
    console.log(error);
  }
});
