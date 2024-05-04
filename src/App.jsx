import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

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
			<TransactionHistory items={transactions} />
		</>
	);
};

export default App;
