import React, {useState , useEffect} from "react";

function ResizeComponent(){
    const [windowWidth , setWindowWidht] = useState(window.innerWidth);
//  sate creation of windowwidth
    useEffect(() => {
      const handleResize = ()=> setWindowWidht(window.innerWidth);

      window.addEventListener('resize', handleResize);

    
      return () => {
        window.removeEventListener('resize', handleResize);
        // cleanup function component ko hatane pe ye cll hoga
      };
    }, []);
// run on only first render
    return (
        <div>
            <h1>Window Width:{ windowWidth}px</h1>
        </div>
    );
    
}
export default ResizeComponent;