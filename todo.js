const taskInput=document.getElementById('task');
console.log(taskInput.value);

const addBtn=document.getElementById('submit');
addBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    if(taskInput.value===''){
        alert("Please enter task");
        return;
    }
    createTaskList(taskInput.value);
    taskInput.value='';
})

function createTaskList(taskInput){
    const newTaskList=document.createElement('div');
    newTaskList.classList.add('task-list-div');

    const taskListItems=document.createElement('div');
    taskListItems.classList.add('task-list-items');
    taskListItems.textContent=taskInput;

    const closeBtn=document.createElement('button');
    closeBtn.classList.add('close');
    closeBtn.textContent="X";
    closeBtn.style.color="white";
    closeBtn.style.backgroundColor="red";
    closeBtn.style.float="right";

    const line=document.createElement('hr');

    

    closeBtn.addEventListener('click',(event)=>{
        event.preventDefault();
        
        const eventTar=event.target;
        eventTar.parentNode.remove();
        
    })

    const clearBtn=document.getElementById('clear');
        clearBtn.addEventListener('click',(event)=>{
    newTaskList.remove();
})

    taskListItems.appendChild(closeBtn);    
    taskListItems.appendChild(line);
    
    newTaskList.appendChild(taskListItems);

    const taskListSection=document.getElementById('task-list-section');
    taskListSection.appendChild(newTaskList);
}





