import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ list }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {list.map(item => {
          return (
            <ForbesListItem
              avatar={item.avatar}
              capital={item.capital}
              name={item.name}
              isIncrease={item.isIncrease}
              key={item.id}
            />
          );
        })}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};
