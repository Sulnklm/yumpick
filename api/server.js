const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3900;

// Enable CORS for all requests
app.use(cors());

// Serve static files (images in the 'assets' folder)
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Sample restaurant data with more realistic details
const posts = [
  {
    id: 1,
    title: "Anchor Steakhouse",
    image: "http://10.0.2.2:3900/assets/restaurants/post1.jpg", 
    location: "Vancouver, BC",
    category: "Italian",
    content: "Perfectly grilled steaks with mouth-watering sides. Must try!",
    rating: 4.9,
    reviews: 1038,
    closingTime: "10 p.m.",
    date: "2 days ago"
  },
  {
    id: 2,
    title: "Kyoto Gyukatsu",
    image: "http://10.0.2.2:3900/assets/restaurants/post2.jpg", 
    location: "Vancouver, BC",
    category: "Japanese",
    content: "Authentic Gyukatsu with a crispy exterior and juicy interior.",
    rating: 4.7,
    reviews: 850,
    closingTime: "9 p.m.",
    date: "3 days ago"
  },
  {
    id: 3,
    title: "Seoul Gogi",
    image: "http://10.0.2.2:3900/assets/restaurants/post3.jpg", 
    location: "Vancouver, BC",
    category: "Korean",
    content: "Delicious Korean BBQ with tender cuts of meat and great sides.",
    rating: 4.8,
    reviews: 950,
    closingTime: "11 p.m.",
    date: "1 day ago"
  },
  {
    id: 4,
    title: "Sushi Paradise",  
    image: "http://10.0.2.2:3900/assets/restaurants/post4.jpg",
    location: "Vancouver, BC",
    category: "Japanese",
    content: "Fresh sushi with a variety of options from classic rolls to sashimi.",
    rating: 4.9,
    reviews: 1200,
    closingTime: "10 p.m.",
    date: "3 days ago"
  },
  {
    id: 5,
    title: "Kokoro",  
    image: "http://10.0.2.2:3900/assets/restaurants/post5.jpg",
    location: "Vancouver, BC",
    category: "Japanese",
    content: "Ramen lovers, this is the spot for rich broths and perfectly cooked noodles.",
    rating: 4.6,
    reviews: 850,
    closingTime: "9:30 p.m.",
    date: "4 days ago"
  },
  {
    id: 6,
    title: "Hotpot House",  
    image: "http://10.0.2.2:3900/assets/restaurants/post6.jpg",
    location: "Vancouver, BC",
    category: "Chinese",
    content: "Experience traditional Chinese hotpot with fresh ingredients and flavorful broths.",
    rating: 4.7,
    reviews: 980,
    closingTime: "10 p.m.",
    date: "6 days ago"
  },
];

// Get all posts
app.get('/api/posts', (req, res) => {
  // Return basic post info (id, title, image)
  res.json(posts.map(post => ({
    id: post.id,
    image: post.image,
    title: post.title,
    category: post.category,
    location: post.location,
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
