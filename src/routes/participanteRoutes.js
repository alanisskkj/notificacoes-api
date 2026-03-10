// src/routes/eventoRoutes.js
const express = require("express");
const router = express.Router();
const ParticipanteController = require("../controllers/ParticipanteController");
router.get("/", ParticipanteController.index); // GET /eventos
router.get("/:id", ParticipanteController.show); // GET /eventos/:id
router.post("/", ParticipanteController.store); // POST /eventos
router.put("/:id", ParticipanteController.update); // PUT /eventos/:id
router.delete("/:id", ParticipanteController.destroy); // DELETE /eventos/:id
module.exports = router;