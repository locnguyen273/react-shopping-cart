const User = require("../models/User");
const CryptoJS = require("crypto-js");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET ALL USER
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET USER STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET PROFILE
router.get("/profile/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, __v, isAdmin, ...data } = user._doc;
    res.status(200).json({ status: true, data });
  } catch (err) {
    res.status(500).json(err);
  }
});
// UPDATE PROFILE
router.put("/profile/:id", async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    const { password, __v, isAdmin, ...data } = updateUser._doc;
    res.status(200).json({ status: true, data });
  } catch (err) {
    res.status(500).json(err);
  }
});
// CHANGE PASSWORD
router.post("/change-password", async (req, res) => {
  try {
    const user_id = req.body.userId;
    const password = req.body.oldPassword;
    const new_password = req.body.newPassword;
    const confirm_password = req.body.confirmNewPassword;
    const data = await User.findOne({ id: user_id });

    if (data) {
      if (password === new_password || confirm_password === password) {
        res.status(400).send({
          status: false,
          message: "Mật khẩu mới không được trùng với mật khẩu cũ!",
        });
      } else if (confirm_password !== new_password) {
        res.status(400).send({
          status: false,
          message: "Mật khẩu xác nhận phải trùng với mật khẩu mới!",
        });
      } else {
        const userData = await User.findByIdAndUpdate(
          { _id: user_id }, {
            password: CryptoJS.AES.encrypt(
              new_password,
              process.env.PASS_SEC
            ).toString(),
        }
        );
        res.status(200).send({
          status: true,
          message: "Mật khẩu đã được cập nhật thành công!",
        });
      }
    } else {
      res.status(404).send({ status: false, message: "Mã người dùng không tìm thấy!" });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
