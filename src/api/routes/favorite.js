const router = require('express').Router()
const {
  Bank,
} = require('../../models')

router.get('/', (async (req, res) => {
  const {
    query: { bankId },
  } = req
  try {
    const {
      saved,
    } = await Bank.findOneAndUpdate({ _id: bankId }, [{ $set: { saved: { $eq: [false, '$saved'] } } }])

    console.log(!saved)
    return res.json({ saved: !saved })
  } catch (e) {
    console.log({ stack: e.stack }, 'error with favorite route', { message: e.toString() })

    return res.status(500).json({
      error: e,
    })
  }
}))

module.exports = router
