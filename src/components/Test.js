import React, { Component } from 'react';
import axios from 'axios';
class Test extends Component {

    constructor(props){
    super(props);
    this.state={
        todos: [{
            text: 'Eat food',
            completed: true,
            number:5
          }, {
            text: 'Exercise',
            completed: false,
            number:5
          }]
    }
    }



render(){
    const { todos } = this.state;

    return(
<div>
 <ul>{todos.map(el => <li key={el.number}>{el.text}</li>)}</ul>
</div>

    );
}

}
export default Test;