type ProfilePageProps = {
	params: {
		username: string;
	};
};

export default function ProfilePage(props: ProfilePageProps) {
	return <div>Profile {props.params.username}</div>;
}
