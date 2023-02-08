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
    const savedSlider = await newSlider.save();
    res.status(200).json({ status: true, savedSlider });
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedSlider = await Slider.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ status: true, updatedSlider });
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
    let sliders;
    if (newSlider) {
      sliders = await Slider.find().sort({ createAt: -1 }).limit(1);
    } else if (qCategory) {
      sliders = await Slider.find({
        sliders: {
          $in: [qCategory],
        },
      });
    } else {
      sliders = await Slider.find();
    }
    res.status(200).json({ status: true, sliders: sliders, total: sliders.length });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
