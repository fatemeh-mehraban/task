import { El } from '@/library';
import { drop, li, saveLocal,closeModal } from '@/Main';
export const form = () => {
  return El({
    element: 'section',
    id:'modal',
    className:'w-screen h-screen backdrop-blur-sm bg-black/40 absolute top-0 flex flex-col items-center justify-center hidden',
    child: El({
      id:'form1',
      name:'llll',
      element: 'form',
      eventL:[
        {
        event:"submit",
        callback:saveLocal,
      }
    ],

      className: 'w-1/2 bg-white flex flex-col gap-8 py-10 form1',
      child: [
        // **************p**************
        El({
          element: 'p',
          className: 'text-2xl pb-4 px-14 border-b-2 border-gray-300',
          child: 'New Task',
        }),
        // ***************************
        // *************group- text*********

        El({
          element: 'div',
          className: 'px-8',
          child: El({
            element: 'div',
            className: 'text-2xl relative rounded-md',

            child: [
              El({
                element: 'label',
                className:
                  'absolute -top-5 left-4 bg-white text-purple-700 px-2 z-10',
                child: 'Task Name',
              }),

              El({
                name: 'task',
                id: 'input',
                element: 'input',
                className:
                  'w-full h-full p-4 outline-none border-2 border-gray-300 focus:border-purple-600',
                type: 'text',
              }),
            ],
          }),
        }),

        // **************************
        // **************drop boxes**********
        El({
          
          element: 'div',
          className: 'flex px-8 gap-5 div',
          child: [
            El({
              
              element: 'div',
              className:
                'border-2 border-gray-300 w-1/3 h-14 relative flex items-center justify-between',
              child: [
                El({
                  
                  id: 'pri',
                  element: 'input',
                  type:'text',
                  className: 'w-full outline-none h-full px-2',
                  child: '',
                }),
                // ******************ul*******
                El({
                  element: 'ul',
                  className:
                    'w-full bg-white absolute top-14 shadow-2xl hidden transition duration-1000',
                  onclick: (e) => {
                    li(e);
                  },
                  child: [
                    El({
                      id: '1',
                      element: 'li',
                      className:
                        'active:bg-purple-100  hover:bg-gray-100 w-full p-2',
                      child: 'priority',
                    }),

                    El({
                      id: '2',
                      element: 'li',
                      className:
                        'active:bg-purple-100  hover:bg-gray-100 w-full p-2',
                      child: 'Low',
                    }),

                    El({
                      id: '3',
                      element: 'li',
                      className:
                        'active:bg-purple-100  hover:bg-gray-100 w-full p-2',
                      child: 'Medium',
                    }),

                    El({
                      id: '4',
                      element: 'li',
                      className:
                        'active:bg-purple-100  hover:bg-gray-100 w-full p-2',
                      child: 'Hight',
                    }),
                  ],
                }),
                // ************icon************
                El({
                  id: 'drop',
                  element: 'ion-icon',
                  name: 'caret-down-outline',
                  className: 'mr-4',
                  onclick: (e) => {
                    drop(e);
                  },
                }),
              ],
            }),
            // *********************************div 2 ******************
            El({
              id:"disdiv",
              element: 'div',
              className:
                'border-2 border-gray-300 w-1/3 h-14 relative flex items-center justify-between',
              child: [
                El({
                  id:'status',
                  element: 'input',
                  type:'text',
                  className: 'w-full outline-none h-full px-2',
                  child: '',
                }),
                // ******************ul*******
                El({
                  
                  name:"ul",
                  element: 'ul',
                  className:
                    'w-full bg-white absolute top-14 shadow-2xl hidden transition duration-1000',
                  onclick: (e) => {
                    li(e);
                  },
                  child: [
                    El({
                      id: '1',
                      element: 'li',
                      className:
                        'active:bg-purple-100 hover:bg-gray-100 w-full p-2',
                      child: 'Status',
                    }),

                    El({
                      id: '2',
                      element: 'li',
                      className:
                        'active:bg-purple-100  hover:bg-gray-100 w-full p-2',
                      child: 'Todo',
                    }),

                    El({
                      id: '3',
                      element: 'li',
                      className:
                        'active:bg-purple-100  hover:bg-gray-100 w-full p-2',
                      child: 'Doing',
                    }),

                    El({
                      id: '4',
                      element: 'li',
                      className:
                        'active:bg-purple-100  hover:bg-gray-100 w-full p-2',
                      child: 'Done',
                    }),
                  ],
                }),
                // ************icon************
                El({
                  id: 'drop',
                  element: 'ion-icon',
                  name: 'caret-down-outline',
                  className: 'mr-4',
                  onclick: (e) => drop(e),
                }),
              ],
            }),
            // **********************************div 3 تقویم********************
            El({
              element: 'div',
              className: ' bg-red-200 w-1/4 h-14 ',
              child: [
                El({

                  id:'date',
                  element: 'input',
                  className:
                    'w-full h-full px-4 border-2 border-gray-300 active:border-purple-100 outline-none',
                  type: 'date',
                }),
              ],
            }),
          ],
        }),
        // *******************************
        El({
          element: 'div',
          className: 'w-full p-4 border-b-2 border-gray-300',
          child: [
            El({
              id:"text",
              element: 'textarea',
              className: 'w-full border-gray-300 border outline-none',
              rows: '5',
              cols: '33',
            }),
          ],
        }),
        // **********************cansel-save**************
        El({
          element: 'div',
          className: 'w-full  px-4 flex justify-between',
          child: [
            El({
              element: 'button',
              type:'button',
              className:'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
              child: 'cansel',
              eventL:[
                {
                event:"click",
                callback:closeModal,
              }
            ],
            }),
            El({
              id: 'submit',
              element: 'button',
              className:
                'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ',
              child: 'save',
              type: 'submit',
            }),
          ],
        }),
      ],
    }),
  });
};
export default El;
