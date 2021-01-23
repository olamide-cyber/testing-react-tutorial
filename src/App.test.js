import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';
import { render } from '@testing-library/react';

const MockMyComponent = () => {
  React.useEffect(() => {
    console.log('using an effect');
  });
  return (<div>Hello World</div>);
};
jest.mock('./MyComponent', () => MockMyComponent);


describe('MyComponent', () => {
  it('renders', () => {
    const { container } = render(<App/>);
    expect(container.textContent).toMatch('Hello World');
  })
});

describe('App component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('p').text();
    expect(text).toBe('Count: 0')
  })

  it('incremenent by one when the increment button is clicked', () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find('button.increment');
    incrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 1');
  });

  it('decrement count when the decrement button is clicked', () => {
    const wrapper = shallow(<App />);
    const decrementBtn = wrapper.find('button.decrement');
    decrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 0');
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});







// import { render, screen } from '@testing-library/react';
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });