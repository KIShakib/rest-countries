import { useEffect } from 'react';


const useDynamicTitle = (title) => {
    useEffect(() => {
        window.document.title = `${title} - Countries Globe`;
    }, [title])
};


export default useDynamicTitle;