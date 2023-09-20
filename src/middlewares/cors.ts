import Cors from 'cors'

export const cors = Cors({
  origin: process.env.ORIGIN_URL
})
