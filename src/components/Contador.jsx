import React, { useState } from 'react';



function Contador(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Aumentar
            </button>
            <button onClick={()=> setCount(count -1) }>
                Disminuir
            </button>

        </div>
    );

}

export default Contador;
