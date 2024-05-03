import css from "./App.module.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";

const App = () => {
	const { name, tag, location, image, stats } = userData;
	return (
		<>
			<ul className={css.list}>
				<li className={css.item}>
					<Profile
						name={name}
						tag={tag}
						location={location}
						image={image}
						stats={stats}
					/>
				</li>
			</ul>
		</>
	);
};

export default App;
