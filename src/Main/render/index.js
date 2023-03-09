import { infoArr, updateinfoarr, setLocal, form,changeIsEdit } from '@/Main';
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

function DeletTask(ID) {
    const filter = infoArr.filter((item) => item.id !== +ID)
    updateinfoarr(filter)
    render(filter);
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
   activID = ID
  }

 export function replaceEdit() {
    const form = document.querySelector("#form1")
    infoArr.forEach((item)=>{
      if (item.id === +activID) {
        item.taskName=form.task.value
        item.priority=form.pri.value
        item.status=form.status.value
        item.deadline=form.date.value
        item.message=form.text.value

      }
    })
    changeIsEdit()
    // form.submit.innerHTML="save"
  }

export function handleTbl(e) {
 if (e.target.id === "delete") {
    const ID = e.target.dataset.id;
    DeletTask(ID)
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