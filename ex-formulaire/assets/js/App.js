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
                let btnDone = document.querySelectorAll("#app ul li button");

                for (let btn of btnDone)
                {
                    let click = event.target;
                    let task = document.querySelector("#app ul li");
                    task.style.textDecoration = "line-through";
                }
            }
        }  
    }  
}