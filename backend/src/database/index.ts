import mongoose from 'mongoose'

const database = mongoose.connect('mongodb://localhost:27017/week10', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

export default database
