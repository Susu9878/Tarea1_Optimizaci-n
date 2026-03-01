import { memo } from "react";

const HijoA = memo(function HijoC() {
    console.log("Render HijoC");
    return <p>Soy HijoC</p>;
});
 
export default HijoC;