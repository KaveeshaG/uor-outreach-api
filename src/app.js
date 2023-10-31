const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const apiRoutes = require('./routes/api.routes');
app.use('/api/v1', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});