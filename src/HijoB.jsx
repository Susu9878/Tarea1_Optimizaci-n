import { memo } from "react";

const HijoB = memo(function HijoB() {
    console.log("Render HijoB");
    return <p>Soy HijoB</p>;
});
 
export default HijoB;