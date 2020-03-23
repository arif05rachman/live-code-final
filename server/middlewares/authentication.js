module.exports = (req, res, next) =>{
    const {verifyToken} = require('../helpers/verifyToken')
    const {User} = require('../models')
    
    if (!req.headers.token) {
        throw {message: "Require Token"}
    }
    try {
        const userToken = verifyToken(req.headers.token)
        User
        .findOne({
            where:{
                id: userToken.id
            }
        })
        .then(data =>{
            if (data) {
                console.log(data)
                req.user = userToken.id
                next()
            }else{
              throw {message: "User not valid"}
            }
        })
            .catch(err => {
            next(err)
        })
    } catch (error) {
        next(error)
    }
}