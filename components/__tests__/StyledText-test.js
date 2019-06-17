import React from 'react';
import renderer from 'react-test-renderer';

import { FuturaText } from '../StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<FuturaText>Snapshot test!</FuturaText>).toJSON();

  expect(tree).toMatchSnapshot();
});
