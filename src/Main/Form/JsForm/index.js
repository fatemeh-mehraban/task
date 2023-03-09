
// import { render } from "@/Main/render";
import {render, replaceEdit} from '@/Main'
const form = document.getElementsByName('llll');
export let infoArr = getLocal()
export const updateinfoarr = (newarr)=>{
  infoArr = newarr
  console.log(newarr);
  localStorage.setItem('item',JSON.stringify(infoArr))
}
export let isEdit = false
export const changeIsEdit= ()=>{
  isEdit = !isEdit
}
export let info = {};

export function closeModal() {
  document.querySelector("#modal").classList.add("hidden")
  console.log(form);
    form[0][6].disabled = false
    form[0][6].classList.add("hover:bg-blue-700")
    form[0][6].classList.remove("bg-blue-300")

    form[0][0].removeAttribute("readonly")

  form[0].reset()
}

export function saveLocal(e) {
  e.preventDefault();
  if (!form[0][0].value) return
  if (isEdit) {
    replaceEdit()
    render(infoArr)

  }else{
    info = {
      id: Date.now(),
      taskName: form[0][0].value,
      priority: form[0][1].value,
      status: form[0][2].value,
      deadline: form[0][3].value,
      message:form[0][4].value,
    };
    infoArr.push(info);
    render(infoArr)
  }
  setLocal()
  closeModal()
}

export function AddTaskTable() {


}





export function setLocal() {
  localStorage.setItem('item', JSON.stringify(infoArr));
}
function getLocal() {
   return JSON.parse(localStorage.getItem('item')) || [];
}

export function drop(e) {
  e.target.previousElementSibling.classList.toggle('hidden');
  e.target.classList.toggle('rotate-180');
  e.target.parentElement.classList.add('border-purple-600');
}
export function li(e) {
  e.target.parentElement.previousElementSibling.value = e.target.innerHTML;
  e.target.parentElement.classList.toggle('hidden');
  e.target.parentElement.parentElement.classList.remove('border-purple-600');
  e.target.parentElement.nextElementSibling.classList.toggle('rotate-180');
}

// export function AddModal(e) {
//   e.preventDefault();
//   form.parentElement.classList.remove('hidden')
// }
// export function closeModal(e) {
//   e.preventDefault();
//   form.parentElement.classList.add('hidden')
// }

