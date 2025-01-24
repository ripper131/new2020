const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'این ایمیل قبلاً ثبت‌نام شده است.' });
    }

    // Create a new user
    const newUser = new User({ name, email, password });
    await newUser.save(); // Save the user to the database

    res.status(201).json({ message: 'عضویت با موفقیت انجام شد.' });
  } catch (error) {
    console.error('خطا در ثبت‌نام:', error);
    res.status(500).json({ message: 'خطا در سرور. لطفاً دوباره تلاش کنید.' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'کاربری با این ایمیل یافت نشد.' });
    }

    // Check if the password is correct
    if (user.password !== password) {
      return res.status(400).json({ message: 'رمز عبور اشتباه است.' });
    }

    // If everything is correct, return success
    res.status(200).json({ message: 'ورود موفق‌آمیز بود.', user });
  } catch (error) {
    console.error('خطا در ورود:', error);
    res.status(500).json({ message: 'خطا در سرور. لطفاً دوباره تلاش کنید.' });
  }
});

module.exports = router;