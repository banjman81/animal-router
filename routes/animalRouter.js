const express = require("express")
const router = express.Router()

let animalArray = [
    { id: 1, animalName: "dog" },
    { id: 2, animalName: "cat" },
    { id: 3, animalName: "hamster" },
];

router.get('/', function(req,res){
    let animalFound;
    console.log(req.query)
    if(Object.keys(req.query).length === 0){
        return res.json(animalArray)
    }
    else{
        animalArray.forEach((animal) =>{
            if (animal.animalName === req.query.name.toLocaleLowerCase()){
                animalFound = animal
            }
        })
    }
    if(animalFound){
        return res.json(animalFound)
    }
    else{
        return res.json(animalArray)
    }
})

router.get('/animal-id/:id', function(req, res){
    let animalFound;
    console.log(req.params.id)
    animalArray.forEach((animal) =>{
        if(animal.id === Number(req.params.id)){
            animalFound = animal
        }
    })
    if(animalFound){
        return res.json(animalFound)
    }
    else{
        return res.send('Animal not found!! Please check your input')
    }
})

router.get('/animal-name/:name', function(req, res){
    let animalFound;
    animalArray.forEach((animal) => {
        if(animal.animalName === req.params.name.toLocaleLowerCase()){
            animalFound = animal
        }
    })
    if(animalFound){
        return res.json(animalFound)
    }
    else{
        return res.send('Animal not found!! Please check your input')
    }
})

router.post('/add-animal', function(req, res){
    let animalFound;
    console.log(req.body.id, req.body.animalName)
    animalArray.forEach((animal) =>{
        if(animal.id === req.body.id || animal.animalName == req.body.animalName){
            animalFound = animal
        }
    })
    if(!animalFound){
        animalArray.push(req.body)
        console.log(animalArray)
    }
    else{
        res.send("Plase enter a unique name and id for the new animal")
    }
    res.json(animalArray)
})

router.put('/edit-animal-by-name/:name', function(req, res) {
    console.log("here")
    let animalUpdate;
    animalArray.forEach((animal) =>{
        if(animal.animalName === req.params.name){
            animal.animalName = req.body.animalName
            animalUpdate = animal
        }
    })
    if(animalUpdate){
        return res.json({animalUpdate, animalArray })
    }
    else{
        return res.send("Please check your spelling.")
    }
})

router.put('/edit-animal-by-id/:id', function(req, res) {
    console.log("here")
    let animalUpdate;
    animalArray.forEach((animal) =>{
        if(animal.id === Number(req.params.id)){
            animal.animalName = req.body.animalName
            animalUpdate = animal
        }
    })
    if(animalUpdate){
        return res.json({animalUpdate, animalArray })
    }
    else{
        return res.send("Please check your spelling.")
    }
})

router.delete('/delete-animal-by-name/:name', function(req, res){
    let animalDeleted;
    animalArray.forEach((animal) =>{
        if(animal.animalName === req.params.name.toLowerCase()){
            animalDeleted = animal
            animalArray.splice(animalArray.indexOf(animal), 1)
        }
    })
    if(animalDeleted){
        return res.json({animalDeleted, animalArray })
    }
    else{
        return res.send("Please check your spelling.")
    }
})

router.delete('/delete-animal-by-id/:id', function(req, res){
    let animalDeleted;
    animalArray.forEach((animal) =>{
        if(animal.id === Number(req.params.id)){
            animalDeleted = animal
            animalArray.splice(animalArray.indexOf(animal), 1)
        }
    })
    if(animalDeleted){
        return res.json({animalDeleted, animalArray })
    }
    else{
        return res.send("Please check your spelling.")
    }
})

module.exports = router;