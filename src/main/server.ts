import app from './config/app'

const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})


