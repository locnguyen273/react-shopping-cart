const Address = require("../models/Address");
const {
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

// CREATE ADDRESS
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newAddress = new Address(req.body);
  try {
    const results = await Address.findOne({ locate: newAddress.locate });
    if (results) {
      res.status(400).send({ 
        status: false, message: "Địa chỉ đã tồn tại không thể tạo được!" 
      });
    } else {
      const data = await newAddress.save();
      res.status(200).send({ status: true, message: "Tạo địa chỉ mới thành công!", data });
    }
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
});
// GET LIST ADDRESS
router.get("/", async (req, res) => {
  const addressNew = req.query.new;
  try {
    let data;
    if(addressNew) {
      data = await Address.find().sort({ createdAt: -1 }).limit(1);
    } else {
      data = await Address.find();
    }
    res.status(200).send({ status: true, data, total: data.length});
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
});
// UPDATE ADDRESS
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateAddress = await Address.findByIdAndUpdate(
      req.params.id, {$set: req.body }, { new: true });
      res.status(200).send({ status: true, data: updateAddress, message: "Cập nhật địa chỉ thành công!" });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
});
// DELETE ADDRESS
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Address.findByIdAndRemove(req.params.id);
    res.status(200).send({ status: true, message: "Xóa địa chỉ thành công!"});
  } catch (err) {
    res.status(500).send({ status: 500, message: err.message });
  }
});


module.exports = router;