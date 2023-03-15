import { getInfo,render,table } from "@/main";
import {showLoading,hiddenLoading } from '@/loading'

const page = 1
export let pageNo = 0
let perpage = 3

export async function searchBox(e) {
  if (e.target.id !== 'inputSearch') return;
  showLoading()
  const data = getInfo()
  data.then(res=>{
    return res.filter(item =>   
     item.taskName.toLowerCase().startsWith(e.target.value.toLowerCase())
    )
}).then(res =>{
  render(res)
  hiddenLoading()
})
}

export async function prepageselect(e) {
  if(e.target.value==="all"){
    try {
   const data= await fetch(`http://localhost:3000/task`);
   data.json().then(res=>render(res))
    } catch (error) {
      console.log(error);
    }
  }
  if(e.target.value==="3"){
    try {
   const data= await fetch(`http://localhost:3000/task?_page=1&_limit=3`);
   console.log(data.headers.get("link"));
   data.json().then(res=>render(res))
    } catch (error) {
      console.log(error);
    }
    perpage = 3
  }

  if(e.target.value==="5"){
    try {
   const data= await fetch(`http://localhost:3000/task?_page=1&_limit=5`);
   data.json().then(res=>render(res))
    } catch (error) {
      console.log(error);
    }
    perpage = 5
  }

  if(e.target.value==="10"){
    try {
   const data= await fetch(`http://localhost:3000/task?_page=1&_limit=10`);
   data.json().then(res=>render(res))
    } catch (error) {
      console.log(error);
    }
    perpage = 10
  }
}
const getNots= async (url)=>{
      try {
   const response= await (await fetch(url)).json();
  const data = await response
  return data
    } catch (error) {
      console.log(error);
    }
  }
  const pagesuffix = (page="",limit="")=>{
return `?_page=${page}&_limit=${limit}`
  }

export async function pagination(e){
  if (e.target.closest('button').id === "next") {
   if(pageNo > Math.ceil(document.querySelector('tbody').children.length/perpage))return
   

      pageNo++
      showLoading()
    const newurl=`http://localhost:3000/task${pagesuffix(pageNo,perpage)}`
    getNots(newurl).then(data=> render(data))
    hiddenLoading()
  }

  if (e.target.closest('button').id === "previous") {
    if (pageNo<=0) return
    pageNo--
    showLoading()
    const newurl=`http://localhost:3000/task${pagesuffix(pageNo,perpage)}`
    getNots(newurl).then(data=> render(data))
    hiddenLoading()
  }
}




