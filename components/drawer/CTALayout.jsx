import React from 'react';
import { Grid, Icon, Text } from '@chakra-ui/react';

import CTA from './CTA';

const CTALayout = ({ functions, title }) => {
  let boxs = functions.map((box) => {
    return (
      <CTA
        name={box.name}
        height={`5.5rem`}
        key={box.id}
        title={title}
        bgColor={`#ffffff50`}
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
    <>
      {/* <Text textAlign={`end`} mt={`1rem`}>APIs</Text> */}
      <Grid templateColumns='repeat(4, 1fr)' gap={2}>
        {boxs}
      </Grid>
    </>
  );
};

export default CTALayout;
