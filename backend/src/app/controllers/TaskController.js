const User = require('../../models/User');
const Task = require('../../models/Task');
const drop = require('./functions/drop');
const authMiddleware = require('../middlewares/auth');

module.exports = {
  async index(req, res){
    const {user_id} = req.headers;

    const tasks = await Task.find({user: user_id});

    return res.json(tasks);
  },
  
  async store(req, res){
    const {user_id} = req.headers;
    const {
      title,
      toleranceDefault,
      toleranceNow,
      levels
    } = req.body;
    
    const user = await User.findById(user_id);
    
    if(!user){
      return res.status(400).json({ error: "Usuario não existe"});
    }
    
    const task = await Task.create({
      user: user_id,
      title,
      toleranceDefault,
      toleranceNow,
      levels
    });
    
    drop(task._id);

    return res.json(task);
  },
  
  async remove(req, res){
    await Task.findByIdAndRemove(req.params.id);

    return res.send();
  }
};