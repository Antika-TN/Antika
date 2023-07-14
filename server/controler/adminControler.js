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

    async deleteSeller(req,res){
        const sellerId = req.params.id
        try{
            const seller= await Seller.findByPk(sellerId)
            if (!seller) {
                return res.status(404).json({ error: 'seller not found' });
              }
              await seller.destroy()
            res.status(200).json({message:'seller deleted successfully'})
        } catch (error){
            console.log('Error deleting seller:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },

    async deleteClient(req,res){
        const clientId = req.params.id
        try{
            const client= await Client.findByPk(clientId)
            if (!client) {
                return res.status(404).json({ error: 'client not found' });
              }
              await client.destroy()
            res.status(200).json({message:'client deleted successfully'})
        } catch (error){
            console.log('Error deleting client:',error)
            res.status(500).json({error:'Internal server error'})
        }
    },
}

module.exports = AdminControler;