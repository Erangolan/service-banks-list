const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

const schema = {
  _id: { type: Number },
  Bank_Code: { type: Number },
  Bank_Name: { type: String },
  Branch_Code: { type: Number },
  Branch_Name: { type: String },
  Branch_Address: { type: String },
  City: { type: String },
  Zip_Code: { type: Number },
  POB: '',
  Telephone: { type: String },
  Fax: { type: String },
  Free_Tel: '',
  Handicap_Access: { type: String },
  day_closed: '',
  Branch_Type: { type: String },
  Date_Open: '',
  Date_Closed: '',
  X_Coordinate: { type: Number },
  Y_Coordinate: { type: Number },
  saved: { type: Boolean, default: false, required: true },
}

const bankSchema = new mongoose.Schema(schema, {
  timestamps: { createdAt: true }, upsert: true,
})

const Bank = mongoose.model('Bank', bankSchema)
module.exports = Bank
