import express from "express";
import { requireAuth } from "../middleware/auth.js";
import User from "../Models/User.js";
import Item from "../Models/Item.js";

const router = express.Router();

//perform the crud operation 
/*get method*/
router.get("/", requireAuth, async (req, res) => {
  const user = await User.findById(req.user.id).populate("cart.item");
  res.json(user.cart);
});

/*post method */
router.post("/add", requireAuth, async (req, res) => {
  const { itemId, quantity = 1 } = req.body;
  const user = await User.findById(req.user.id);

  const exists = user.cart.find((c) => c.item.toString() === itemId);
  if (exists) {
    exists.quantity += Number(quantity);
  } else {
    // ensure item exists
    const item = await Item.findById(itemId);
    if (!item) return res.status(404).json({ message: "Item not found" });
    user.cart.push({ item: itemId, quantity: Number(quantity) });
  }
  await user.save();

  const populated = await user.populate("cart.item");
  res.json(populated.cart);
});

/*put method*/
router.put("/update", requireAuth, async (req, res) => {
  const { itemId, quantity } = req.body;
  const user = await User.findById(req.user.id);

  const target = user.cart.find((c) => c.item.toString() === itemId);
  if (!target) return res.status(404).json({ message: "Not in cart" });

  target.quantity = Math.max(1, Number(quantity));
  await user.save();

  const populated = await user.populate("cart.item");
  res.json(populated.cart);
});

/*delete method*/
router.delete("/remove/:itemId", requireAuth, async (req, res) => {
  const { itemId } = req.params;
  const user = await User.findById(req.user.id);

  user.cart = user.cart.filter((c) => c.item.toString() !== itemId);
  await user.save();

  const populated = await user.populate("cart.item");
  res.json(populated.cart);
});

export default router;
