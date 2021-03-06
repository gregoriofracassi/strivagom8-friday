export const error400 = (err, req, res, next) => {
  if (err.status === 400) res.status(400).send(err)
  else next(err)
}

export const unAuthorizedHandler = (err, req, res, next) => {
  if (err.status === 401) res.status(401).send(err.message || "unauthorized")
  else next(err)
}

export const forbiddenHandler = (err, req, res, next) => {
  if (err.status === 403) res.status(403).send(err.message || "forbidden")
  else next(err)
}

export const catchAllHandler = (err, req, res, next) => {
  res.status(500).send(err.message)
}
