import Image from 'next/image';
import { notFound } from 'next/navigation';
import supabase from '../supabase';

type VotePageProps = {
	params: {
		id: string;
	};
};

export default async function VotePage(props: VotePageProps) {
	const response = await supabase
		.from('choices')
		.select(
			`
			title, 
			image_urls,
			profiles!choices_user_id_fkey(username)
			`
		)
		.match({ id: props.params.id })
		.single();

	if (response.error) {
		console.error(response.error);
		return notFound();
		// return <pre>{JSON.stringify(response, null, 2)}</pre>;
	}

	return (
		<>
			<p>Help {response.data.profiles?.username} choose</p>
			<h1>{response.data.title}</h1>
			{response.data.image_urls?.map((url: string) => (
				<Image src={url} key={url} alt={''} height={800} width={800} />
			))}
		</>
	);
}
