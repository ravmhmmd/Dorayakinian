let home = [{id:1, name:"home"}]

module.exports = {
    index: function(req, res){
        res.status(200).send('ini homepage')        
    },
    post: function(request, response){
        if(home.length>0){
            response.json({
                status : true,
                data : home,
                method : request.method,
                url : request.url
            })
        }else{
            response.json({
                status : false                                
            })                        
        }
    }    
}