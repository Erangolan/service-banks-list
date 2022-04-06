const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const schema = {
  id: { type: Number, required: true },
}

const ExampleSchema = new mongoose.Schema(schema, {
  timestamps: { createdAt: true }, upsert: true,
})

const Example = mongoose.model('Example', ExampleSchema)
module.exports = Example
