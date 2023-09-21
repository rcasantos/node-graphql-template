import expressSession from 'express-session'

export const session = expressSession({
  secret: process.env.SESSION_SECRET as string,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 3 * 24 * 60 * 60 * 1000, // 3 dias
    signed: true,
    secure: false
  }
})
