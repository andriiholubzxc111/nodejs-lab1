const express = require('express');
const apartmentRoutes = require('./routes/apartments.route');
const app = express();

app.use(express.json());
app.use('/apartments', apartmentRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
