function ActivitiesInput({ activities, setActivities }) {
	
	function handleKeyDown(e) {
		// If user did not press enter key, return
		if (e.key !== "Enter") return;
		// Get the value of the input
		const value = e.target.value;
		// If the value is empty, return
		if (!value.trim()) return;
		// preventDefault for the mother form and add the value to the tags array
		e.preventDefault();
		setActivities([...activities, value]);
		// Clear the input
		e.target.value = "";
	}

	function deleteActivity(index) {
		setActivities(activities.filter((_, i) => i !== index));
	}

	return (
		<>
			<div className="input-container">
				{activities.map((activity, index) => {
					return (
						<div key={index} className="item">
							<span className="text">{activity}</span>
							<span
								onClick={() => {
									deleteActivity(index);
								}}
								className="delete"
							>
								&times;
							</span>
						</div>
					);
				})}

				<input
					onKeyDown={handleKeyDown}
					type="text"
					className="input"
					placeholder="Add new activities...↵"
				/>
			</div>
		</>
	);
}

export default ActivitiesInput;