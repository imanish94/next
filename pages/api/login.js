export default function handler(req,res){
    if(req.method == "GET"){
        res.status(200).json({
            name : "Get Data",
            message : "success"
        })
    }
    else{
        res.status(200).json({
            name : "Post Data",
            message : "ok"
        })
    }

}