import React, { useState } from "react";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="text-center">
    	<div className="titulo display-1">todos</div>
		<div className=" d-flex pila mt-5">
			<div className="papel">
				<input
					type="text"
					className="form-control border-0 shadow-none mt-3"
					placeholder="Escribe algo y presiona Enter"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<hr class="hr hr-blurry" />
				<ul className="list-group border-0">
					{items.map((item, index) => (
					<ListItem
						key={index}
						text={item}
						onRemove={() => handleRemoveItem(index)}
					/>
					))}
				</ul>
			</div>
		</div>
    </div>
  );
}

function ListItem({ text, onRemove }) {
  const [hover, setHover] = useState(false);

  return (
	<div className="d-flex flex-column">
		<li
		className="list-group-item d-flex justify-content-between border-0 pb-2"
		onMouseEnter={() => setHover(true)}
		onMouseLeave={() => setHover(false)}
		>
		{text}
		{hover && (
			<button
			className="btn btn-sm border-0"
			onClick={onRemove}
			>
			X
			</button>
		)}
		</li>
		<hr className="hr"></hr>
	</div>
  );
}

export default Home;
