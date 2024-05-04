import clsx from "clsx";
import css from "./FriendListItem.module.css";
export default function FriendListItem({ friend: { name, avatar, isOnline } }) {
	return (
		<div className={css.card}>
			<img src={avatar} alt="Avatar" width="70" />
			<p className={css.name}>{name}</p>
			<p className={clsx(css.isOnline, isOnline ? css.online : css.offline)}>
				{isOnline ? "Online" : "Offline"}
			</p>
		</div>
	);
}
