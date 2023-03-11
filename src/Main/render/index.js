import { infoArr,changeIsEdit,getInfo } from '@/Main';
let activID =""

export function render(infoArr) {
const tbody = document.getElementById('tbody');
tbody.innerHTML=''
  infoArr.map((element) => {

    tbody.innerHTML += 
    `<tr class="w-full text-center text-md " data-id="${element.id}">
    <td class="border-collapse border border-black py-4">
      <span>${element.taskName}</span>
    </td>
    
    <td class="border-collapse border border-black rounded-full px-2 py-1">
      <span>${element.priority}</span>
    </td>
    
    <td class="border-collapse border border-black rounded-full px-2 py-1">
      <span>${element.status}</span>
    </td>
    
    <td class="border-collapse border border-black">
      <span class="border-collapse border border-blue-700 rounded-full px-2 py-1">${element.deadline}</span>
    </td>
    
    <td class="border-collapse border border-black">
      <span class="cursor-pointer" ><ion-icon name="trash-outline" id="delete" data-id="${element.id}"></ion-icon></span>
      <span class="cursor-pointer"><ion-icon name="create-outline" id="edit" data-id="${element.id}"></ion-icon></span>
      <span class="cursor-pointer"><ion-icon name="eye-outline" id="view" data-id="${element.id}"></ion-icon></span>
    </td>
    
    </tr>`;
  });
}

async function DeletTask(ID) {
try {
  await fetch(`http://localhost:3000/task/${ID}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    });
} catch (error) {
  console.log(error);
}
}

function editTask(ID){
    // const ID = e.target.dataset.id;
    const form = document.querySelector("#form1")
    infoArr.forEach(item => {
        console.log(ID,item.id);
        
      if(item.id === +ID){
        console.log( item.taskName);
        form.task.value = item.taskName
        form.pri.value=item.priority
        form.status.value = item.status
        form.date.value = item.deadline
        form.text.value =item.message
      }
    });
//    form.submit.innerHTML="edit"
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
        await fetch(`http://localhost:3000/task/${activID}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify(newInfo)
          });
      } catch (error) {
        console.log(error);
      }
 
    changeIsEdit()
    // form.submit.innerHTML="save"
  }

export function handleTbl(e) {
 if (e.target.id === "delete") {
    const ID = e.target.dataset.id;
    DeletTask(ID)
    const data = getInfo()
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
    infoArr.forEach(item => {
        console.log(ID,item.id);
        
      if(item.id === +ID){
        console.log( item.taskName);
        form.task.value = item.taskName
        form.pri.value=item.priority
        form.status.value = item.status
        form.date.value = item.deadline
        form.text.value =item.message
      }
    });

        
    boxmodal.classList.remove("hidden")
    form.submit.disabled= true
    form.submit.classList.remove("hover:bg-blue-700")
    form.submit.classList.add("bg-blue-300")

    form.input.setAttribute("readonly",'')
    form.input.classList.remove("focus:border-purple-600")

    form.text.setAttribute.readonly= true
   form.date.setAttribute.readonly= true

  
    console.log(2);
}
}