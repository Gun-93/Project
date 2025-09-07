import express from "express";
import Item from "../Models/Item.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const {
      q,
      category,
      min,
      max,
      sort = "createdAt",
      order = "desc",
      page = 1,
      limit = 12
    } = req.query;

    const filter = {};
    if (category && category !== "All") filter.category = category;
    if (min || max) {
      filter.price = {};
      if (min) filter.price.$gte = Number(min);
      if (max) filter.price.$lte = Number(max);
    }
    if (q) {
      filter.$text = { $search: q };
    }

    const skip = (Number(page) - 1) * Number(limit);
    const items = await Item.find(filter)
      .sort({ [sort]: order === "asc" ? 1 : -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Item.countDocuments(filter);

    res.json({ items, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

/*get*/
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

/*post*/
router.post("/", async (req, res) => {
  try {
    const created = await Item.create(req.body);
    res.status(201).json(created);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

/*put*/
router.put("/:id", async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

/*delete*/
router.delete("/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

export default router;
