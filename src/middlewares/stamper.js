function stamper(req,res,next) {
  res.timestamp = new Date(); 
  next();
}

module.exports = stamper;