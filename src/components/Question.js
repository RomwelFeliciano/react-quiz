import Options from './Options';

function Question({ questions, dispatch, answer, points }) {
	console.log(questions);

	return (
		<div>
			<p>{points}</p>
			<h4>{questions.question}</h4>
			<Options
				questions={questions}
				dispatch={dispatch}
				answer={answer}
			/>
		</div>
	);
}

export default Question;
