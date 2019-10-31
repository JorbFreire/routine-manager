const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const genToken = require('./functions/token');

module.exports = {
  async show(req, res){  // dev function, dont put online
    const {email, password} = req.body;
    const user = await User.findOne({email}).select('+password');
    if(!user){
      return res.status(404).send({ erro: 'User not found'});
    } 
    if(!(await bcrypt.compare(password, user.password))){
      return res.status(401).send({ erro: 'Wrong password'});
    }   
    return res.json(user); // good request
  },

  async login(req, res){
    const {email, password} = req.body;
    const user = await User.findOne({email}).select('+password');
    
    if(!user){ 
      return res.status(404).send({ error: 'User not found'});
    }

    if(!(await bcrypt.compare(password, user.password))){
      return res.status(401).send({ error: 'Wrong password'});
    }

    return res.status(200).send({
      user,
      token: genToken(user.id)
    }); // good request
  },

  async store(req, res){
    const {name, email, password} = req.body;
    let user = await User.findOne({email});
    if(!user){
      console.log("Registrando...");
      user = await User.create({
        name,
        email,
        password
      });
    } else {
      return res.status(406).send({
        erro: "email ja registrado",
      });
    }
    return res.json({
      user,
      token: genToken(user.id)
    });
  }
};