import css from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <div className={css.friendItemContainer}>
        <img src={avatar} alt={`${name}'s avatar`} width="48" />
        <p>{name}</p>
        <p className={isOnline ? css.online : css.offline}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    );
  };

  export default FriendListItem;