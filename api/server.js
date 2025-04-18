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
    title: "Black Steakhouse",
    image: "http://10.0.2.2:3900/assets/restaurants/post1.jpg", 
    location: "Vancouver, BC",
    category: "Italian",
    date: "2 days ago"
  },
  {
    id: 2,
    title: "Kyoto Gyukatsu",
    image: "http://10.0.2.2:3900/assets/restaurants/post2.jpg", 
    location: "Vancouver, BC",
    category: "Japanese",
    date: "3 days ago"
  },
  {
    id: 3,
    title: "Seoul Gogi",
    image: "http://10.0.2.2:3900/assets/restaurants/post3.jpg", 
    location: "Vancouver, BC",
    category: "Korean",
    date: "1 day ago"
  },
  {
    id: 4,
    title: "Sushi Paradise",  
    image: "http://10.0.2.2:3900/assets/restaurants/post4.jpg",
    location: "Vancouver, BC",
    category: "Japanese",
    date: "3 day ago"
  },
  {
    id: 5,
    title: "Kokoro",  
    image: "http://10.0.2.2:3900/assets/restaurants/post5.jpg",
    location: "Vancouver, BC",
    category: "Japanese",
    date: "4 day ago"
  },
  {
    id: 6,
    title: "Hotpot House",  
    image: "http://10.0.2.2:3900/assets/restaurants/post6.jpg",
    location: "Vancouver, BC",
    category: "Chinese",
    date: "6 day ago"
  },
];

// Get all posts
app.get('/api/posts', (req, res) => {
  // 게시물 목록 반환 (id, title, image만 포함)
  res.json(posts.map(post => ({
    id: post.id,
    image: post.image,
    title: post.title,
    category: post.category,
    location: post.location,
    rating: post.rating,
    reviews: post.reviews,
    date: post.date
  })));
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
      location: post.location,
      category: post.category,
      rating: post.rating,
      reviews: post.reviews,
      closingTime: post.closingTime,
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
