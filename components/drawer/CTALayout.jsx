import React from 'react';
import { Grid, Icon } from '@chakra-ui/react';

import CTA from './CTA';

const CTALayout = ({ functions, title }) => {
  let boxs = functions.map((box) => {
    return (
      <CTA
        name={box.name}
        height={`5.5rem`}
        key={box.id}
        title={title}
      >
        <Icon
          className={`accent`}
          fontSize={`1.3rem`}
          as={box.icon}
        />
      </CTA>
    );
  });

  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={2}>
      {boxs}
    </Grid>
  );
};

export default CTALayout;
