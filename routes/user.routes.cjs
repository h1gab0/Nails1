const express = require('express');
const router = express.Router();
const { db } = require('../db.cjs');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email, and password are required' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.read();
  db.data.users.push({ name, email, password: hashedPassword });
  await db.write();

  res.status(201).json({ message: 'User created successfully' });
});

module.exports = router;
