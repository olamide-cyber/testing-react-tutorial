import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';


// TESTING WITH THE ACTUAL DOM
let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
})

function Button(props) {
  const [text, setText] = useState("");
  function handleClick() {
    setText("PROCEED TO CHECKOUT");
  }
  return <button onClick={handleClick}>{text || props.text}</button>;
}

describe("Button component", () => {
  test("it shows expected text when clicked", () => {
    act(() => {
      ReactDOM.render(<Button text="SUBSCRIBE TO BASIC" />, container)
    });
    const button = container.getElementsByTagName('Button')[0];
    expect(button.textContent).toBe("SUBSCRIBE TO BASIC");
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(button.textContent).toBe("PROCEED TO CHECKOUT");
  })
})






// TESTING WITHOUT THE REAL DOM
// function Button(props) {
//   const [text, setText] = useState("");
//   function handleClick() {
//     setText("PROCEED TO CHECKOUT");
//   }
//   return <button onClick={handleClick}>{text || props.text}</button>;
// }

// describe("Button component", () => {
//   test("it shows the expected text when clicked", () => {
//     let component; 
//     act(() => {
//       component = create(<Button text="SUBSCRIBE TO BASIC" />);
//     });
//     const instance = component.root;
//     const button = instance.findByType("button");
//     act(() => button.props.onClick());
//     expect(button.props.children).toBe("PROCEED TO CHECKOUT");
//   });
// });


// CLASS COMPONENT 
// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: ""
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(() => {
//       return {text: "PROCEED TO CHECKOUT"}
//     })
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.text || this.props.text}
//       </button>
//     );
//   }
// };

// SNAPSHOT TESTING
// function Button(props) {
//   return <button>Nothing to do for now</button>;
// }

// describe("Button component", () => {
// test("Matches the snapshot", () => {
//   const button = create(<Button />);
//   expect(button.toJSON()).toMatchSnapshot();
// });
// });