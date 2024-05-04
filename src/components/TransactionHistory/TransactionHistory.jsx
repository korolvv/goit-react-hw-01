import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
	return (
		<table>
			<thead>
				<tr className={css.headers}>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map((item) => {
					let type = item.type;

					const caps = type.charAt(0).toUpperCase() + type.slice(1);

					return (
						<tr key={item.id}>
							<td className={css.type}>{caps}</td>
							<td>{item.amount}</td>
							<td>{item.currency}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
