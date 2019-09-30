import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App.jsx';
import Message from '../Components/Message.jsx';

Enzyme.configure({ adapter: new Adapter() });
global.shallow = shallow;
global.mount = mount;


// describe('Testing Counter', () => {
//   it('is alive at application start', function() {
//     let app = shallow(<App />);
//     expect(app.find('div').exists()).toBeTruthy();
//   });
// });
//
// it('should render correctly', () => {
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toMatchSnapshot();
// });


describe('Testing App ', () => {
  it('should should render correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('Testing Message ', () => {
    it('should should render correctly', () => {
      const tree = renderer.create(<Message />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
