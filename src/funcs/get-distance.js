/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-mixed-operators */

const toRad = (Value) => Value * Math.PI / 180

module.exports = (lat1, lon1, lat2, lon2) => {
  try {
    const R = 6371
    const dLat = toRad(lat2 - lat1)
    const dLon = toRad(lon2 - lon1)
    lat1 = toRad(lat1)
    lat2 = toRad(lat2)

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
        + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const d = R * c
    return d
  } catch (e) {
    console.log({ stack: e.stack })
  }
}
