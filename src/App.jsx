import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import userData from "./userData.json";
import friends from "./friends.json";

const App = () => {
	return (
		<>
			<Profile
				name={userData.name}
				tag={userData.tag}
				location={userData.location}
				image={userData.image}
				stats={userData.stats}
			/>
			<FriendList friends={friends} />
		</>
	);
};

export default App;
