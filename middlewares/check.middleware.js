const checkMiddleware = () => {
  return (req, res, next) => {
    const userId = req.params.id;
    if (userId.length !== 24) {
      return res.status(400).json({ message: 'Invalid user ID format' });
    }
    next();
  };
};

export default checkMiddleware;
