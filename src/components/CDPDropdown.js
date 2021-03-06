import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { Dropdown, Flex, Text } from '@makerdao/ui-components-core';
import useLanguage from 'hooks/useLanguage';
import { ReactComponent as BorrowIcon } from 'images/landing/borrow/bg_borrow.svg';

const StyledBorrowIcon = styled(BorrowIcon)`
 width: 30px;
 height: 40px;
`;
const CDPDropdown = memo(function({
  textcolor,
  selected,
  account,
  children,
  ...props
}) {
  const { lang } = useLanguage();
  const [show, setShow] = useState(false);
  return (
    <Dropdown
      hitBoxMargin="0px"
      show={show}
      placement="bottom"
      trigger={
        <Flex
          bg="rgb(45 57 83)"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          py="s"
          onClick={() => setShow(!show)}
          {...props}
        >
          <StyledBorrowIcon
            textcolor={textcolor}
            selected={selected}
            connected={account}
          />
          <Text t="p6" fontWeight="bold" color={textcolor}>
            {lang.navbar.borrow}
          </Text>
        </Flex>
      }
    >
      <Flex
        style={{ transform: 'translateX(-5px)' }}
        flexWrap="wrap"
        onClick={() => setShow(!show)}
      >
        {children}
      </Flex>
    </Dropdown>
  );
});

export default CDPDropdown;
