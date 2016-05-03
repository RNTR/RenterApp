import { GetUserItemsForRent } from './userItem';

export function UserItemList(props) {
  return (
    <div className="UserItemList">
        {
          props.userItem.map(function (item) {
            return <GetUserItemsForRent {...item}
            />;
          })
        }
    </div>
  );
};