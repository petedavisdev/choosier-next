type VotePageProps = {
	params: {
		id: string;
	};
};

export default function VotePage(props: VotePageProps) {
	return <div>Vote on choice {props.params.id}</div>;
}
