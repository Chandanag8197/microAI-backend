const app = require('./app');
const PORT = process.env.PORT || 10000; // keep fallback, but Render sets it automatically

app.listen(PORT, () => {
  console.log(`✅ Server is running at port ${PORT}`);
});
