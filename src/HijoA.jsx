import { memo } from "react";

const HijoA = memo(function HijoA() {
    console.log("Render HijoA");
    return <p>Soy HijoA</p>;
});
 
export default HijoA;