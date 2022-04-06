const router = require('express').Router()
const {
  Bank,
} = require('../../models')
const getDistance = require('../../funcs/get-distance')

router.get('/', (async (req, res) => {
  const {
    query: {
      latitude,
      longitude,
    },
  } = req

  try {
    const banksDB = await Bank.find({
      $and: [
        { X_Coordinate: { $ne: null } },
        { Y_Coordinate: { $ne: null } },
      ],
    }).lean().exec()

    const banks = banksDB
      .map((bank) => {
        let dis = getDistance(latitude, longitude, bank.X_Coordinate, bank.Y_Coordinate)
        dis = dis.toFixed(3)
        return {
          dis,
          ...bank,
        }
      })
      .sort((a, b) => a.dis - b.dis)

    return res.json({
      banks,
    })
  } catch (e) {
    console.log({ stack: e.stack }, 'error with get-banks route', { message: e.toString() })

    return res.status(500).json({
      error: e,
    })
  }
}))

module.exports = router
