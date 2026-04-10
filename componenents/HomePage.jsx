export default function HomePage({ onStart }) {
	return (
		<div id='homepage'>
			<h1 className="handwriting" id='start-writing' onClick={onStart}>
				start writing
			</h1>
		</div>
	);
}
