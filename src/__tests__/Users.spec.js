import React from 'react';
import renderer from 'react-test-renderer';
import Users from '../Users/Users';

describe('User component snapshot', () => {
  it('matches the component snapshot', () => {
    const tree = renderer.create(<Users />);
    expect(tree).toMatchSnapshot()
  });
});















// import React from 'react';
// import { act } from "react-dom/test-utils";
// import { render, unmountComponentAtNode } from 'react-dom';
// import Users from '../Users/Users';

// let container;

// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// describe('User Component', () => {
//     test('It should render a list of users', () => {
//         const fakeResponse = [
//           {name: 'John Doe'},
//           {name: 'Kevin Mitnik'}
//         ]
        
//         jest.spyOn(window, 'fetch').mockImplementation(() => {
//           const fetchResponse = {
//             json: () => Promise.resolve(fakeResponse)
//           };
//           return Promise.resolve(fetchResponse)
//         })

//          act(() => {
//             render(<Users />, container);
//         })
//         expect(container.textContent).toBe('John DoeKevin Mitnick');

//         window.fetch.mockRestore()
//     })
// })