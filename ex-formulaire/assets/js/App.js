export default {  
    data() {  
        return {  
            tasks : [  
  
            ],
            done : true  
        }  
    },  
    methods : {  
        addTask (event) {  
            let task = event.target.elements.task.value;  
            this.tasks.push(task);  
        },
        taskDone(event) {
            if (this.done === true)
            {
                let btnDone = document.querySelector("#app ul li button");

                btnDone.addEventListener("click", function(event) {
                    let task = document.querySelector("#app ul li");
                    task.style.textDecoration = "line-through";
                })
            }
        }  
    }  
}