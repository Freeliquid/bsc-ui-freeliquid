import React from 'react';
import useLanguage from 'hooks/useLanguage';
import { Text, Box, Card, CardBody, Flex } from '@makerdao/ui-components-core';
import { prettifyNumber, formatter } from 'utils/ui';
import BigNumber from 'bignumber.js';
import { getColor } from 'styles/theme';

const SidebarDetails = ({ system, savings }) => {
  const { lang } = useLanguage();

  const TOTAL_DAI_SUPPLY = ({ system }) => [
    lang.sidebar.save_details.total_dai_supply,
    prettifyNumber(system.totalDaiSupply)
  ];

  const TOTAL_SAVINGS_DAI = ({ system }) => [
    lang.sidebar.save_details.total_savings_dai,
    prettifyNumber(system.totalDaiLockedInDsr)
  ];

  const DAI_SAVINGS_RATE = ({ system }) => [
    lang.sidebar.save_details.dai_savings_rate,
    system.annualDaiSavingsRate
      ? formatter(system.annualDaiSavingsRate, {
        rounding: BigNumber.ROUND_HALF_UP
      }) + '%'
      : ''
  ];

  const params = [
    TOTAL_DAI_SUPPLY,
    TOTAL_SAVINGS_DAI,
    DAI_SAVINGS_RATE
  ].map(f => f({ system, savings }));

  return (
    <Card
      style={{
        background: getColor('cardBg'),
        borderColor: getColor('dashBorder')
      }}
      pt="2xs"
    >
      <Box p="s" pb="0" mb="xs">
        <Text style={{ fontSize: '20px', color: getColor('whiteText') }}>
          {lang.sidebar.save_details.title}
        </Text>
      </Box>
      <CardBody mt="xs">
        {params.map(([param, value], idx) => (
          <Flex
            key={`details_${param}`}
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            py="xs"
            px="s"
            bg={getColor('cardBg')}
          >
            <Text style={{ color: getColor('greyText') }} fontWeight="semibold" t="smallCaps">
              {param}
            </Text>
            <Text fontSize="1.4rem">
              {value}
            </Text>
          </Flex>
        ))}
      </CardBody>
    </Card>
  );
};

export default SidebarDetails;
