const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3900;

// Enable CORS for all requests
app.use(cors());

// Serve static files (images in the 'assets' folder)
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Sample restaurant data
const posts = [
  {
    id: 1,
    title: "Black Anchor Steakhouse",
    image: "http://localhost:3900/assets/restaurants/black-anchor-steakhouse.jpg", // 절대 경로로 수정
    user: "Hyein",
    content: "Must visit Black Anchor Steakhouse!",
    location: "Vancouver, BC",
    category: "Italian",
    rating: 4.9,
    reviews: 1038,
    open: true,
    closingTime: "10 p.m.",
    date: "2 days ago"
  },
  {
    id: 2,
    title: "Kyoto Gyukatsu",
    image: "http://localhost:3900/assets/restaurants/kyoto-gyukatsu.jpg", // 절대 경로로 수정
    user: "John",
    content: "Best Japanese food I’ve tried!",
    location: "Vancouver, BC",
    category: "Japanese",
    rating: 4.7,
    reviews: 850,
    open: true,
    closingTime: "9 p.m.",
    date: "3 days ago"
  }
];

// Get all posts
app.get('/api/posts', (req, res) => {
  res.json(posts.map(post => ({ id: post.id, image: post.image })));
});

// Get post details by ID
app.get('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.json({
      user: post.user,
      title: post.title,
      image: post.image,
      content: post.content,
      date: post.date
    });
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
