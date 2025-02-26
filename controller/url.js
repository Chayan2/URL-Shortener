const shorturl = require('short-id');
const Url = require('../model/index')

async function handleGetShortURLData(req,res){
console.log(req.params)
const result = await Url.findOneAndUpdate({shortID:req.params.id},{
   $push:{
    vistorHistory:{
        timeStamp:Date.now()
    }
   }
});
console.log("result "+result);
console.log("result.redirectURL "+result.redirectURL);
return res.redirect(result.redirectURL)
}

async function getUserCreatedUrls(req, res){
    console.log("inside need to rename")
        const result = await Url.find({createdBy:req.user._id})
        return res.render('home',{
            allurls:result
        });
    }
async function getAllUserCreatedUrls(req, res){
        console.log("inside need to rename")
            const result = await Url.find({})
            return res.render('home',{
                allurls:result
            });
        }

async function handleGenrateNewShortURL(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json({msg:"Bed Request"});
    const shortID = shorturl.generate();
    console.log("shortId "+shortID)
    result = await Url.find({})
    let duplicate = false
    result.forEach(element => {
        if (element.redirectURL==body.url){
            duplicate = true
        }
    });
    if (duplicate){
        return res.render('home',{
            allurls:result,
            duplicate:true
        })
    }
    console.log("req.user._id "+req.user._id)
    console.log("req.user._id "+req.user)
    await Url.create({
        shortID:shortID,
        redirectURL:body.url,
        vistorHistory:[],
        createdBy:req.user._id,
    })
    result = await Url.find({})

    return res.render('home',{
        idOfRedirectUrl:shortID,
        allurls:result
    })
   
}


module.exports = {handleGenrateNewShortURL,handleGetShortURLData,getUserCreatedUrls,
    getAllUserCreatedUrls
}