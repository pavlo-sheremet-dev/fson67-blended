import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({ stat, icon: Icon }) => {
  return (
    <StatisticBox>
      <Icon size="30" />
      <StatisticCounter>{stat.total}</StatisticCounter>
      <StatisticText>{stat.title}</StatisticText>
    </StatisticBox>
  );
};
