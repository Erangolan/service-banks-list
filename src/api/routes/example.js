const router = require('express').Router()
const axios = require('axios')

const {
  API_KEY1,
  API_URL,
} = require('../../consts')

router.get('/', withSchema(schema), (async (req, res) => {
  const {
    body: {
      locationName,
    },
  } = req

  try {
    const { data } = await axios(`${API_URL}/search?apikey=${API_KEY1}&q=${locationName}`)

    return res.json({
      data,
    })
  } catch (e) {
    console.log({ stack: e.stack }, 'error with autocomplete route', { message: e.toString() })

    return res.status(503).json({
      error: e,
    })
  }
}))

module.exports = router
