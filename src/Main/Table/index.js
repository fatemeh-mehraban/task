import { El } from '@/library';
import {handleTbl} from '@/Main'
export const table = () => {
  return El({
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
    ],
  });
};
