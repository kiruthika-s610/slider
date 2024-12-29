import React from "react";

export default function Child2({getcolor}) {

    function handlecolor(e){
        getcolor(e.target.value);
    }
    return (
<div>
    <input type="text"  onChange={handlecolor} />
</div>
)
}
