const Manager = (req, res, next) => {
    if (req.user.role !== 'manager') {
      return res.status(403).json({ 
        success: false, 
        message: 'Manager access required' 
      });
    }
    next();
  };
  
  export default Manager;