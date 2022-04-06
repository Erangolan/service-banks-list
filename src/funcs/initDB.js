/* eslint-disable consistent-return */
const axios = require('axios')
const {
  Bank,
} = require('../models')

module.exports = (async () => {
  try {
    const {
      data: {
        result: {
          records,
        },
      },
    } = await axios('https://data.gov.il/api/3/action/datastore_search?resource_id=1c5bc716-8210-4ec7-85be-92e6271955c2&limit=100')

    const bulkRecords = records.map((record) => {
      const { _id } = record
      const write = {
        updateOne: {
          filter: { _id },
          update: {
            $set: {
              saved: false,
              ...record,
            },
          },
          upsert: true,
        },
      }
      return write
    })

    await Bank.bulkWrite(bulkRecords)

    console.log(records)
  } catch (e) {
    console.log({ stack: e.stack }, 'error with autocomplete route', { message: e.toString() })
  }
})
