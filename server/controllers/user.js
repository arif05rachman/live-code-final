const {User} = require('../models')
const {generateToken} = require('../helpers/generateToken')

class Controller{
    
    static login(req, res, next){
        const { username, password } = req.body
        console.log(req.body)
        User
        .findOne({
            where:{username:username}
        })
        .then(data =>{
            if (!data) {
                throw { message: "user not found"} 
            }else{
                if (password === data.password) {
                    const payload = {
                        id: data.id,
                        username:data.username
                    }
                    const token = generateToken(payload)
                    res.status(200).json({token: token, id: data.id, username: data.username})
                }else{
                    throw {message: 'Invalid username or Password'}
                }
            }
        })
        .catch(err =>{
            next(err)
        })
    }
}

module.exports = Controller