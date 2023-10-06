const express = require("express");
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
    const friends = [
        { name: "Ian", department: "Engineer", interest: "Dota" },
        { name: "Jess", department: "Product Manager", interest: "Running" },
        { name: "Kendra", department: "Product Operations", interest: "Drinking" },
        { name: "Charmaine", department: "Product Manager", interest: "Giving unsolicited advice" },
        ];
    const tagline = "These are my top 3 + 1 friends in OGP! ";

    res.render("pages/index", {
        friends: friends,
        tagline: tagline,
    });
});

// work page
app.get("/work", function (req, res) {
    const works = [
        { name: "Being a PM of", what: "DGS-Vault" },
        { name: "Eating", what: "Food" },
        { name: "Drinking", what: "Wine" },
        ];
    const tagline = "These are things I love to do!";

  res.render("pages/work", {
    works: works,
    tagline: tagline,
  });
});

// about page
app.get("/interest", function (req, res) {
  res.render("pages/interest");
});

app.listen(3000);
console.log("Server is listening on port 3000");