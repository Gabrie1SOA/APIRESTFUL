const tourModel = {

    async getAllToursModel(){
        const peticion = await fetch("http://localhost:4000/tours");
        const tours = await peticion.json();

        return tours;
    },

    async createTourModel(newTour){
        const url = "http://localhost:4000/tours"
        const peticion = await fetch(url,{
            method: 'POST',
            body:JSON.stringify(newTour),
            headers:{'Content-Type':'application/json'}

        })
        const data= await peticion.json()
        return data

    },


    async updateTourModel(tourId,updateTourModel){
        const url = `http://localhost:4000/tours/${tourId}`
        
        const peticion = await fetch(url,{
            method:"PUT",
            body:JSON.stringify(updateTourModel),
            headers:{'Content-Type':'application/json'}

        })
        const data = await peticion.json()
        return data

    },

    async deleteTourModel(tourId){
        const url = `http://localhost:4000/tours/${tourId}`
        
        const peticion = await fetch(url,{
            method:"DELETE",
            

        })
        const data = await peticion.json()
        return data

    }


}

export default tourModel