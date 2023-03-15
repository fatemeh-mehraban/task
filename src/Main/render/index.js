import { infoArr,changeIsEdit,getInfo, table } from '@/Main';
let activID =""
const priority ={
Low : 'bg-gray-500 rounded-full px-3 py-1',
Medium : 'bg-yellow-500 rounded-full px-3 py-1',
Hight : 'bg-red-500 rounded-full px-3 py-1'
}

const status ={
  Todo : 'bg-yellow-500 rounded-full px-3 py-1',
  Doing : 'bg-red-500 rounded-full px-3 py-1',
  Done : 'bg-green-500 rounded-full px-3 py-1'
  }
export function render(infoArr) {
const tbody = document.getElementById('tbody');
tbody.innerHTML=''
  infoArr.map((element) => {

    tbody.innerHTML += 
    `<tr class="w-full text-center text-md " data-id="${element.id}">
    <td class="border-collapse border border-black py-4">
      <span>${element.taskName}</span>
    </td>
    
    <td class="border-collapse border border-black py-4">
      <span class="${priority[element.priority]}">${element.priority}</span>
    </td>
    
    <td class="border-collapse border border-black rounded-full px-2 py-1">
      <span class="${status[element.status]}">${element.status}</span>
    </td>
    
    <td class="border-collapse border border-black">
      <span class="border-collapse border border-blue-700 rounded-full px-2 py-1">${element.deadline}</span>
    </td>
    
    <td class="border-collapse border border-black">
      <span class="cursor-pointer bg-red-400 py-1 px-3 rounded-md"  ><ion-icon name="trash-outline" id="delete" data-id="${element.id}"></ion-icon></span>
      <span class="cursor-pointer bg-green-400 py-1 px-3 rounded-md" ><ion-icon name="create-outline" id="edit" data-id="${element.id}"></ion-icon></span>
      <span class="cursor-pointer bg-red-400 py-1 px-3 rounded-md" ><ion-icon name="eye-outline" id="view" data-id="${element.id}"></ion-icon></span>
    </td>
    
    </tr>
    `;
  });

}
infoArr.then(res=>render(res))
async function DeletTask(id) {
try {
  await fetch(`http://localhost:3000/task/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    });
} catch (error) {
  console.log(error);
}
}

export function editTask(ID){
    const form = document.querySelector("#form1")
    const data = getInfo()
    data.then(res=> res.map(item => {  
      if(item.id === +ID){
        console.log( item.taskName);
        form.task.value = item.taskName
        form.pri.value=item.priority
        form.status.value = item.status
        form.date.value = item.deadline
        form.text.value =item.message
      }
      }));
   changeIsEdit()
   activID = +ID
  }

 export async function replaceEdit() {
    const form = document.querySelector("#form1")
   const newInfo = {
        taskName:form.task.value,
        priority:form.pri.value,
        status:form.status.value,
        deadline:form.date.value,
        message:form.text.value

      }
      try {
       const test = await fetch(`http://localhost:3000/task/${activID}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify(newInfo)
          
        });
        return test
      } catch (error) {
        console.log(error);
      }
 
    changeIsEdit()
    // form.submit.innerHTML="save"
  }

export function handleTbl(e) {
//  if (e.target.id === "delete") {
//     const ID = e.target.dataset.id;
//     let data = getInfo()
//    data.then(res=>render(res))
//     DeletTask(ID)
//  }
let data = getInfo()
 if (e.target.id === "delete") {
    const ID = e.target.dataset.id;
    DeletTask(ID)
   data = data.then(res=> {return res.filter(item=>item.id !== activID)})
    data.then(res=>render(res))
 }
if(e.target.id === "edit"){
    const ID = e.target.dataset.id;
    editTask(ID)
    const boxmodal = document.querySelector("#modal")
    boxmodal.classList.remove("hidden")
    console.log(1);
}



if(e.target.id === "view"){
    const boxmodal = document.querySelector("#modal")
    const form = document.querySelector("#form1")
    const ID = e.target.dataset.id;
    const data = getInfo()
    data.then(res=>{res.map(item => {
        
      if(item.id === +ID){
        form.task.value = item.taskName
        form.pri.value=item.priority
        form.status.value = item.status
        form.date.value = item.deadline
        form.text.value =item.message
      }
    });
    }) 

        
    boxmodal.classList.remove("hidden")
    form.submit.disabled= true
    form.submit.classList.remove("hover:bg-blue-700")
    form.submit.classList.add("bg-blue-300")

    form.input.setAttribute("readonly",'')
    form.input.classList.remove("focus:border-purple-600")
    form.task.setAttribute("readonly",'')
    form.status.setAttribute("readonly",'')
}
}