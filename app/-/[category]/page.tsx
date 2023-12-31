import { CATEGORIES } from '../../CONSTANTS';
import { CONTENT } from './CONTENT';
import { CategoryNav } from './CategoryNav';
import { Metadata } from 'next';

type CategoryPageProps = {
	params: {
		category: string;
	};
};

export default function CategoryPage(props: CategoryPageProps) {
	const categoryName = CATEGORIES.find(
		({ slug }) => slug === props.params.category
	)?.name;

	return (
		<div>
			<h1>{categoryName || 'Visual'} decisions made easy</h1>
			<CategoryNav currentCategory={props.params.category} />

			{categoryName === 'Art and illustration' && CONTENT.art}
			{categoryName === 'Graphic design' && CONTENT.graphicDesign}
			{categoryName === 'Photography' && CONTENT.photography}
			{categoryName === 'Style' && CONTENT.style}
		</div>
	);
}

export async function generateMetadata(props: CategoryPageProps) {
	const categoryName = CATEGORIES.find(
		({ slug }) => slug === props.params.category
	)?.name;

	if (categoryName === 'Art and illustration') {
	}

	if (categoryName === 'Graphic design') {
	}

	if (categoryName === 'Photography') {
	}

	if (categoryName === 'Style') {
	}
}
