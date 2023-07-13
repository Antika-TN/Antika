const Seller = require('../model/Seller')
const Client = require('../model/Client')

const AdminControler ={

    async getAllseller(req,res){
        try{
            const sellers= await Seller.findAll()
            res.status(200).json({message:'sellers retrieved successfully', data:sellers})
        } catch (error){
            console.log('error retrieving sellers:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    async getAllclient(req,res){
        try{
            const clients= await Client.findAll()
            res.status(200).json({message:'clients retrieved successfully', data:clients})
        } catch (error){
            console.log('error retrieving clients:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },
}

module.exports = AdminControler;