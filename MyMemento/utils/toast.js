import toast, { Toaster } from 'react-hot-toast';
export const f = (title,color) => {
    return toast(title, {
        duration: 2000,
        position: 'top-center',
        style: {
        background:color,
        color:"#fff",
        fontWeight:"bold",
        fontFamily:'sans-serif'
      },
    });
}