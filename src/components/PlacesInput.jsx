function PlacesInput({ places, setPlaces }) {
	
	function handleKeyDown(e) {
		// If user did not press enter key, return
		if (e.key !== "Enter") return;
		// Get the value of the input
		const value = e.target.value;
		// If the value is empty, return
		if (!value.trim()) return;
		// preventDefault for the mother form and add the value to the tags array
		e.preventDefault();
		setPlaces([...places, value]);
		// Clear the input
		e.target.value = "";
	}

	function deletePlace(index) {
		setPlaces(places.filter((_, i) => i !== index));
	}

	return (
		<>
			<div className="input-container">
				{places.map((places, index) => {
					return (
						<div key={index} className="item">
							<span className="text">{places}</span>
							<span
								onClick={() => {
									deletePlace(index);
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
					placeholder="Add new places...↵"
				/>
			</div>
		</>
	);
}

export default PlacesInput;