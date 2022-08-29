// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import { ProgressBar } from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// // import css from './Loader.module.css';

// export const Loader = () => {
//     return (
//        <div>Loading</div>
//     )
    
// };

import { ThreeDots  } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loader = () => {
    return (
        <ThreeDots 
height="100" 
width="100" 
radius="9"
color="#6997d3" 
ariaLabel="three-dots-loading"
            wrapperStyle={{
                display: 'flex',
                justifyContent:'center',
}}
// wrapperClassName=""
visible={true}
 />)
}