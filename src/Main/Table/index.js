import { El } from '@/library';
import {handleTbl,pagination,prepageselect,pageNo} from '@/Main'

export const table = () => {
  const table =  El({
    element: 'div',
    id:'boxtable',
    child: [
      El({
        id:'tab',
        element: 'table',
        className: 'w-full border-collapse border border-black',
        child: [
          // ***********thead*********
          El({
            element: 'thead',
            className: 'w-full p-4',
            child: El({
              element: 'tr',
              child: [
                El({
                  element: 'th',
                  className: ' border border-black py-4',
                  child: 'task name',
                }),

                El({
                  element: 'th',
                  className: ' border border-black',
                  child: 'priority',
                }),

                El({
                  element: 'th',
                  className: ' border border-black',
                  child: 'status',
                }),

                El({
                  element: 'th',
                  className: ' border border-black',
                  child: 'deadline',
                }),

                El({
                  element: 'th',
                  className: ' border border-black',
                  child: 'actions',
                }),
              ],
            }),
          }),
          // **********************************
          El({
            element: 'tbody',
            id:'tbody',
            className: 'w-full p-4 tbody border-collapse border border-black',
            child: '',
            eventL:[
              {
              event:"click",
              callback:handleTbl,
            }
          ],
          }),
        ],
      }),
      El({
        id:"pagination",
        element: 'div',
        className: 'w-full flex justify-end p-10 items-center',
        child:[El({
          element: 'select',
          className: 'w-28 p-2 border-2',
          child:[
            El({
              id:"all",
            element: 'option',
            className: '',
            child:'all'
          }),
          El({
            id:"page1",
            element: 'option',
            className: 'w-full',
            child:'3'
          }),
          El({
            id:"page2",
            element: 'option',
            className: 'w-full',
            child:'5'
          }),
          El({
            id:"page3",
            element: 'option',
            className: 'w-full',
            child:'10'
          })
        ]
        }),
        El({
          id:"paperNext",
          element: 'div',
          className: ' ml-5',
          child:[
            El({
              id:"previous",
              element: 'button',
              className: 'bg-gray-100 px-2',
              child :[El({
                element:'ion-icon',
                name:"chevron-back-outline"
              })]
            }),
            El({
              id:"numberPage",
              element: 'span',
              className: 'bg-gray-100 px-2',
              child : '1'
            }),
            El({
              id:"next",
              element: 'button',
              className: 'bg-gray-100 px-2',
              child :[El({
                element:'ion-icon',
                name:"chevron-forward-outline"
              })]
            })
          ]
        })
      
      ]

      }),
      
    ],
    
  });
  table.addEventListener("click",(e)=>{
    prepageselect(e)
    pagination(e)
if (pageNo<=0) return
      document.getElementById('numberPage').innerHTML = pageNo
   
    })
  return table
};
// const pagination = document.getElementById('pagination')
// console.log(pagination);
