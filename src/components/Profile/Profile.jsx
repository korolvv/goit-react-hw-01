import css from "./Profile.module.css";

export default function Profile({
	name,
	tag,
	location,
	image,
	stats: { followers, views, likes },
}) {
	return (
		<div className={css.wrapper}>
			<div className={css.top_wrapper}>
				<div className={css.img_wrapper}>
					<img className={css.avatar} src={image} alt="User avatar" />
				</div>
				<p className={css.name}>{name}</p>
				<p className={css.tag}>@{tag}</p>
				<p className={css.location}>{location}</p>
			</div>

			<ul className={css.stats}>
				<li className={css.stats_item}>
					<span>Followers</span>
					<span>{followers}</span>
				</li>
				<li className={css.stats_item}>
					<span>Views</span>
					<span>{views}</span>
				</li>
				<li className={css.stats_item}>
					<span>Likes</span>
					<span>{likes}</span>
				</li>
			</ul>
		</div>
	);
}
