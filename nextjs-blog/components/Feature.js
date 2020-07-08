const Feature = (props) => {
	return (
		<div className="feature-card">
			<div className="feature-title">
				<span>特徴</span>
				<span>{props.id}</span>
				:
				<span>{props.feature}</span>

			</div>

			<div className="feature-details">
				{props.children}
			</div>

			<style jsx>{`
				.feature-title {
					font-size: 30px;
				}
			`}</style>

		</div>
	);
}

export default Feature
