export const movie=(req,res)=>{
    const movieslist=req.body
    res.status(200).json({movieslist})
}

export const params=(req,res)=>{
    const movie=req.params
try {
    
    if(movie.id==1){
    res.status(200).json({message:movie.id,"title":"Thangalaan", year: 2025,
    director: "Pa. Ranjith"})
    }
    if(movie.id==2){
         res.status(200).json({message:movie.id, "title": "Vettaiyan",
    "year": 2025,
    "director": "T. J. Gnanavel"})
    }
    if(movie.id==3){
        res.status(200).json({message:movie.id, "title": "GOAT (Greatest of All Time)",
    "year": 2025,
    "director": "Venkat Prabhu"})
    }

    if(movie.id==4){
        res.status(200).json({message:movie.id,
    "title": "Coolie",
    "year": 2025,
    "director": "Lokesh Kanagaraj"})
    }
    if(movie.id==5){
        res.status(200).json({message:movie.id,   "title": "Suriya 43",
    "year": 2025,
    "director": "Sudha Kongara"})
    }
    else{
        res.status(200).json({message:"id is wrong please correct your id 1 to 5"})
    }
    } 
    catch (error) {
    res.status(404).json({message:"not fetch data",error})
}
}


export const body=(req,res)=>{
    const data=req.body
    try {
        res.status(200).json({message:"movie added to  list",data})
    } catch (error) {
         res.status(404).json({message:"not fetch body data",error})
    }
}


export const putparams=(req,res)=>{
    const movie=req.params
    res.status(200).json({message:"suceesfully updated movie : ",movie_id:movie.id})
}
export const deleteparams=(req,res)=>{
    const deletemovie=req.params.id

 res.status(200).json({message:"suceesfully deleted movie : ",movie_id:deletemovie})
}