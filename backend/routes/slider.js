const Slider = require("../models/Slider");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

// CREATE SLIDER
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newSlider = new Slider(req.body);
  try {
    const data = await newSlider.save();
    res.status(200).json({ status: true, data });
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const data = await Slider.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ status: true, data });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE SLIDER
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Slider.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: true, message: "Đã xóa thành công!"})
  } catch (err) {
    res.status(500).json(err);
  }
})

// GET ALL SLIDER
router.get("/", async (req, res) => {
  const newSlider = req.query.new;
  const qCategory = req.query.category;
  try {
    let data;
    if (newSlider) {
      data = await Slider.find().sort({ createAt: -1 }).limit(1);
    } else if (qCategory) {
      data = await Slider.find({
        data: {
          $in: [qCategory],
        },
      });
    } else {
      data = await Slider.find();
    }
    res.status(200).json({ status: true, data: data, total: data.length });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
