import { El } from '@/library'
export const loading = () => {
const loading = El({
    element: 'div',
    id: 'loading',
    className: 'w-screen hidden h-screen bg-black fixed top-0 bg-opacity-40',
    child: [El({
    element: 'div',
    // role: 'status',
    className:
    'absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2',
    innerHTML:'loading...',
    }),
    ],
    });
    return loading
}
export function showLoading() {
    const loading = document.getElementById('loading')
    console.log(loading);
    loading.classList.remove('hidden')
}
export function hiddenLoading() {
    const loading = document.getElementById('loading')
    loading.classList.add('hidden')
}
