const express = require("express");
const NewsItemModel = require("../models/NewsItem");
const router = express.Router();

// Endpoint to fetch all news items
router.get("/all", async function (req, res) {
  try {
    const data = await NewsItemModel.find();
    res.send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Endpoint to edit a news item
router.put("/edit/:newsid", async function (req, res) {
  try {
    const { newsid } = req.params;
    await NewsItemModel.findByIdAndUpdate(newsid, req.body);
    res.send("News edited successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

// Endpoint to delete a news item
router.delete("/delete/:newsid", async function (req, res) {
  try {
    const { newsid } = req.params;
    await NewsItemModel.findByIdAndDelete(newsid);
    res.send("News deleted successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;