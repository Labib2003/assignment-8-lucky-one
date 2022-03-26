import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='questions'>
            <h3>How React works.</h3>
            <p>
                React uses components to efficiently render the UI. Components are individual parts of a webpage. They can be elements that are similar in look but different in data, or an element containing other elements, can be a special element like a nav bar or just a stand alone element. Every element in a react app is a component. When rendering the DOM, react does not re render everything. Instead, it uses a virtual DOM with all of the new changes and compares with the real DOM and only updates the changed components. This makes react more efficient than re rendering the entire DOM for every small changes.
            </p>
            <h3>Difference between props and state.</h3>
            <p>
                Props are attributes passed into a react component to have dynamic data in them. We can pass functions, objects, arrays, api etc to a component as props or properties and access them inside the component to have dynamic data.<br></br>
                If a component changes something in the DOM, it is called a stateful component. That means the user can interact with the component and change something in the page. Or in other words, the user can change the state of the website. 
            </p>
            <h3>How useState works</h3>
            <p>
                useState is a react hook that adds a state to the component. That means something in this component may change. It is declared as value of an array containing two elements. The first one is the state that will change and the other one is a function to update that state. It also takes the default value of the state as a parameter.<br></br>
                For example,<br></br>
                const [number, setNumber] = useState([]);
            </p>
        </div>
    );
};

export default Questions;