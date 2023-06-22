export default {  
    data() {  
        return {  
            number : 0,
            numberTwo : 0 
        }  
    },  
    methods : {  
        addOne()
        {
	        this.numberTwo = this.numberTwo + 1;
        },
        subOne()
        {
            this.number = this.number - 1;
        }  
    }  
}