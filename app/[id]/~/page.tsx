type EditPageProps = {
	params: {
		id: string;
	};
};

export default function EditPage(props: EditPageProps) {
	return <div>Edit/delete choice {props.params.id}</div>;
}
