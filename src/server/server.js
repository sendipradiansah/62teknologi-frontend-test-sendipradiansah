const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(express.json());
app.use(cors());

app.get('/api/yelp', async (req, res) => {
  try {
    const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
      params: req.query,
      headers: {
        Authorization: `Bearer Ubf1-f0uqsJUnssqPMGo-tiFeZTT85oFmKfznlPmjDtX8s83jYMoAb-ApuD63wgq6LDZNsUXG6gurZIVYaj2jzxJmmLdCdXbDqIHU_b6KiCEVi8v-YB0OSsW6MWaY3Yx`
      }
    });
    res.json(response.data);
  } catch(error){
    console.error('Error fetching data from Yelp API:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/yelp/detail', async (req, res) => {
    try{
        const response = await axios.get(`https://api.yelp.com/v3/businesses/${req.query.id}`, {
            headers: {
                Authorization: `Bearer Ubf1-f0uqsJUnssqPMGo-tiFeZTT85oFmKfznlPmjDtX8s83jYMoAb-ApuD63wgq6LDZNsUXG6gurZIVYaj2jzxJmmLdCdXbDqIHU_b6KiCEVi8v-YB0OSsW6MWaY3Yx`,
            }
        });
        res.json(response.data);
    } catch(error){
        console.error('Error fetching data from Yelp API:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});