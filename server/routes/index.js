const { Router } = require("express");

const router = Router();

const {
  createCtrl,
  reactCtrl,
  updateCtrl,
  deleteCtrl
} = require("../controllers/");

router.post("/create", createCtrl);

router.get("/read", reactCtrl);

router.put("/update", updateCtrl);

router.patch("/delete", deleteCtrl);

module.exports = router;
