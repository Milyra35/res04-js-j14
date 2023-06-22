export default {  
    data() {  
        return {  
            animal : "Dogs" 
        }  
    },  
    methods : {  
        change() 
        {
            if (this.animal === "Dogs")
            {
                this.animal = "Cats";
            }
            else if (this.animal === "Cats")
            {
                this.animal = "Dogs";
            }
        }  
    }  
}