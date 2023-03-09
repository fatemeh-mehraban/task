import { El } from '@/library';
// import { AddModal } from '@/Main';
const header = () => {
  return El({
    element: 'header',
    className: 'w-full h-20 bg-purple-700 flex justify-between  px-4',
    child: [
      // ***************div 1 **************
      El({
        element: 'div',
        className: 'text-white flex justify-center items-center gap-2',
        child: [
          El({
            element: 'ion-icon',
            className: 'text-4xl',
            name: 'list-outline',
          }),
          El({
            element: 'h2',
            className: 'capitalize text-3xl',
            child: 'my to-do tasks',
          }),
        ],
      }),
      // ****************div 2 ***********
      El({
        element: 'div',
        className: 'text-white flex justify-center items-center gap-10 px-2',
        child: [
          // ************search********
          El({
            element: 'div',
            className: 'bg-purple-300 flex w-80 rounded-md gap-2 px-4',
            child: [
              El({
                element: 'input',
                type: 'text',
                className:
                  'w-full text-gray-900 p-2 outline-none bg-purple-300',
              }),
              El({
                element: 'ion-icon',
                className:
                  'text-4xl text-purple-700 rounded-md bg-purple-300',
                name: 'search-outline',
              }),
            ],
          }),
          // ***********************
          El({
            element: 'ion-icon',
            className: 'text-4xl',
            name: 'funnel-outline',
          }),

          El({
            element: 'ion-icon',
            className: 'text-4xl bg-white text-purple-700 rounded-md',
            name: 'add-outline',
            onclick:() => {
              document.querySelector("#modal").classList.remove("hidden")
            },
          }),
        ],
      }),
    ],
  });
};
export default header;
