import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App'
import Message from '../Components/Message.jsx'

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

