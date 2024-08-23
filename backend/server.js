const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const problemRoutes = require('./routes/problems');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://pardeepnitkkr2022:Pa%40101556@cluster0.gziurbp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0lhost/raiseproblems", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/problems', problemRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
