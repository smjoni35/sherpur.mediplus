const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// সাইটের নাম ও তথ্য (একটা জায়গা থেকে কন্ট্রোল করা, চাইলে পরে .env এ নেওয়া যাবে)
const site = {
  name: 'মেডিভিশন অ্যাডমিশন কেয়ার',
  tagline: 'স্বপ্ন এখন সাদা অ্যাপ্রোনে',
  phone: '01XXXXXXXXX',
  whatsapp: '8801XXXXXXXXX',
  address: 'ধানমন্ডি, ঢাকা',
  email: 'info@example.com'
};

app.get('/', (req, res) => {
  res.render('index', { site, active: 'home' });
});

app.get('/courses', (req, res) => {
  res.render('courses', { site, active: 'courses' });
});

app.get('/success', (req, res) => {
  res.render('success', { site, active: 'success' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { site, active: 'contact' });
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
