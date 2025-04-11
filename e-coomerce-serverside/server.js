import { log } from "console";
import cors from "cors";
import express from "express";
import fs from "fs";
import { json } from "stream/consumers";
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());
app.use("/product-list", express.static("images"));
app.get("/", (req, res) => {});
app.post("/signup", (req, res) => {
  let userData = req.body;
  fs.readFile("userDetails.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const users = JSON.parse(data);
      const user = users.find((user) => user.email == userData.email);
      if (user) {
        res.send({ message: "user Found", success: false, name: user.name });
      } else {
        users.push(userData);
        fs.writeFile("userDetails.json", JSON.stringify(users), (err, data) => {
          if (err) {
            console.log(err);
          }
        });
        res.send({ message: "login", success: true, userData: userData });
      }
    }
  });
});
app.post("/login", (req, res) => {
  let userData = req.body;
  fs.readFile("userDetails.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const users = JSON.parse(data);
      const user = users.find(
        (user) =>
          user.email == userData.email && user.password == userData.password
      );
      if (user) {
        res.send({ message: "Login Success", success: true, userData: user });
      } else {
        res.send({ message: "Invalid Credetionals", success: false });
      }
    }
  });
});

app.get("/product-list", (req, res) => {
  fs.readFile("products.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(PORT, () => {
  console.log(`The Server is Live At http://localhost:${PORT}`);
});
