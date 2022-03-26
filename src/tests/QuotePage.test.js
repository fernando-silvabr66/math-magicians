import renderer from 'react-test-renderer';
import Quote from '../pages/QuotePage';

it('renders correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
