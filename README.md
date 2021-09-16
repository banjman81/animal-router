1. create a animalRouter.js in the router folder

2. make sure to require it in app.js

3. create a Get request to query all the animalArray and in the same request if query exists your program should able to query a specific animal using animalName

    Request -- "/" or "/api/?name={animal name}

4. create a Get request that uses params id to query to animal by ID

    Request -- "/api/animal-id/?name={animal id}

5. create a Get request that uses params animalName to query to animal by animalName

    Request -- "/api/animal-name/?name={animal name}

6. create a Post request to create a new animal and if there's duplicate in the array, you should let the user know that the animal already exists and please pick another animal. If the user sends in an empty object your program will tell the user "sorry no empty data"

    Request -- "/api/add-animal"
    use raw JSON in this format {
                                    "id": {unique id},
                                    "animalName": "{unique animal}"
                                }

7. create a Put request to update the animalName using animalName params. If successfully updated the name, your program should tell the user that successfully updated and send back the updated animal object. If the animal doesnt exists it should tell the user animal doesnt exists please check your spelling

    Request -- "/api/edit-animal-by-name/:name"
        use raw JSON in this format {
                                        "animalName": "{unique animal}"
                                    }

8. create a Put request to update the animalName using ID params. If successfully updated the name, your program should tell the user that successfully updated and send back the updated animal object. If the animal doesnt exists it should tell the user animal doesnt exists please check your spelling

    Request -- "/api/edit-animal-by-id/:id"
        use raw JSON in this format {
                                        "animalName": "{unique animal}"
                                    }

9. create a delete request to delete the animalName using animalName params. If successfully deleted, your program should tell the user that successfully deleted the animal, and returns the deleted animal to the user. 

    Request -- "/api/delete-animal-by-name/:{animal name}"

10. create a delete request to delete the animalName using ID params. If successfully deleted, your program should tell the user that successfully deleted the animal, and returns the deleted animal to the user. 

    Request -- "/api/delete-animal-by-id/:{animal id}"