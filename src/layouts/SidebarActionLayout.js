import React from 'react';
import { Box, Flex, Card } from '@makerdao/ui-components-core';
import { ReactComponent as CloseIcon } from 'images/close-simple.svg';
import { getColor } from 'styles/theme';
const fullscreenCardProps = {
  border: '0',
  borderRadius: '0'
};

const SidebarActionLayout = ({ onClose, children, fullscreen }) => {
  return (
    <Card
      p="m"
      {...(fullscreen ? fullscreenCardProps : {})}
      style={{
        color: getColor('greyText'),
        backgroundColor: getColor('cardBg'),
        borderColor: getColor('dashBorder')
      }}
    >
      <Flex justifyContent="flex-end" pb="xs">
        <Box
          onClick={onClose}
          position="absolute"
          zIndex="2"
          css={{ cursor: 'pointer' }}
        >
          <CloseIcon />
        </Box>
      </Flex>
      {children}
    </Card>
  );
};
export default SidebarActionLayout;
