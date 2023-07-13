const Seller = require('../model/Seller')


const AdminControler ={

    async getAllseller(req,res){
        try{
            const sellers= await Seller.findAll()
            res.status(200).json({message:'sellers retrieved successfully', data:sellers})
        } catch (error){
            console.log('error retrieving sellers:',error)
            res.status(500).json({error:'Internal server error'})
        }
    }
}

module.exports = AdminControler;