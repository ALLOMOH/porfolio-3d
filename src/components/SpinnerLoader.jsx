import { useEffect , useState } from "react";

import App from "../App";
import { spinnerImgs } from "../constants";
// import Loading from "../Loading";
export default function SpinnerLoader() {

    
    const [spinnded,setSpinned] = useState(true); 
    
    
    
     useEffect(() => {
         setTimeout(() => {
             setSpinned(false);
         }, 3000);

    }, []);

    return (
        <>

            {
                spinnded ? (
                    <div className="flex flex-col justify-center items-center h-screen w-full bg-black">
                       <img src={spinnerImgs.img} alt="loading" className="w-20 h-20 animate-spin rounded-full" />
                       {/* <Loading/> */}
                    </div>
                ):
                (
                    <App/>
                )
            }

        </>
    );
}