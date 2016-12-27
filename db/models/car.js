import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CarSchema = new Schema({
  name: String,
})

export default mongoose.model('Car', CarSchema)
