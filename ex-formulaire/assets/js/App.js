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
                let ul = document.querySelector("#app ul");

                ul.addEventListener("click", function(event) {
                    let li = event.target.parentElement;
                    let task = li.querySelector("p");
                    task.style.textDecoration = "line-through";
                })
            }
        }  
    }  
}