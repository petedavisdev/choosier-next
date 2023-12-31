type ResultPageProps = {
	params: {
		id: string;
	};
};

export default function ResultPage(props: ResultPageProps) {
	return <div>Results for choice {props.params.id}</div>;
}
