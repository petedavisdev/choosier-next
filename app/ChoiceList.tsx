import Image from 'next/image';
import Link from 'next/link';
import supabase from './supabase';

export async function ChoiceList() {
	const response = await supabase
		.from('choices')
		.select(
			`
			id,
			title,
			image_urls,
			profiles!choices_user_id_fkey(username)
			`
		)
		.order('id', { ascending: false })
		.eq('visibility', 'promoted');

	if (response.error) {
		return <pre>{JSON.stringify(response.error, null, 2)}</pre>;
	}

	return (
		<>
			{response.data.map((choice) => (
				<Link href={`${choice.id}`} key={choice.id} className="card">
					<div className="cardImages">
						{choice.image_urls?.map((url: string) => (
							<Image
								src={url}
								key={url}
								alt={''}
								height={210}
								width={210}
								className="cardImage"
							/>
						))}
					</div>

					<div className="cardTitle">
						<small>Help {choice.profiles?.username} choose</small>
						<div>{choice.title}</div>
					</div>
				</Link>
			))}
		</>
	);
}

type ChoiceListSkeletonProps = {
	count: number;
};

export function ChoiceListSkeleton(props: ChoiceListSkeletonProps) {
	return (
		<>
			{Array.from({ length: props.count }).map((_, index) => (
				<article className="card" key={index}></article>
			))}
		</>
	);
}
