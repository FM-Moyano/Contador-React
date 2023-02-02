
import React, { useState } from 'react';


//contador con una clase
class Contador2 extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {count: 0};
    }

    render(){
        return (

            <div>
                <p>Contador: {this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Aumentar
                </button>
                <button onClick={()=> this.setState({count: this.state.count -1})}>
                    Disminuir
                </button>

            </div>
        );
    }
}


export default Contador2;