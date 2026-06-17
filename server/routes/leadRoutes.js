const router = require("express").Router();

const {
  getLeads,
  addLead,
  updateLead,
  deleteLead
} = require("../controllers/leadController");

router.get("/", getLeads);
router.post("/", addLead);
router.put("/:id", updateLead);
router.delete("/:id", deleteLead);

module.exports = router;