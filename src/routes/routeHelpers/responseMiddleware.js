export const responseMiddleware = (error, req, res, next) => {
  if (error) {
    next(error);
  }
  const data = req.body || {};
  return res.status(200).json(data);
};
