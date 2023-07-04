import { useState } from "react";

const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];

function App() {
	const [step, setStep] = useState(1);
	const [isOpened, setIsOpened] = useState(true);

	const handleNext = () => {
		setStep((prev) => (prev < 3 ? prev + 1 : prev));
	};

	const handlePrevious = () => {
		setStep((prev) => (prev > 1 ? prev - 1 : prev));
	};

	return (
		<>
			<button className="close" onClick={() => setIsOpened((s) => !s)}>
				&times;
			</button>
			{isOpened && (
				<div className="steps">
					<div className="numbers">
						<div className={step >= 1 ? "active" : ""}>1</div>
						<div className={step >= 2 ? "active" : ""}>2</div>
						<div className={step >= 3 ? "active" : ""}>3</div>
					</div>
					<p className="message">
						Step {step}: {messages[step - 1]}
					</p>
					<div className="buttons">
						<button
							style={{ backgroundColor: "#7950f2", color: "#fff" }}
							onClick={handlePrevious}
						>
							Previous
						</button>
						<button
							style={{ backgroundColor: "#7950f2", color: "#fff" }}
							onClick={handleNext}
						>
							Next
						</button>
					</div>
				</div>
			)}
		</>
	);
}

export default App;
