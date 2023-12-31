import { CATEGORIES, PATHS } from '../../CONSTANTS';

import $style from './CategoryNav.module.css';
import Link from 'next/link';

type CategoryNavProps = {
	currentCategory?: string;
};

export function CategoryNav(props: CategoryNavProps) {
	return (
		<nav className={$style.categories}>
			{CATEGORIES.map(({ slug }) => (
				<Link
					href={PATHS.category + slug}
					key={slug}
					className={slug === props.currentCategory ? 'current' : ''}
				>
					{slug.replace('-', ' ')}
				</Link>
			))}
		</nav>
	);
}
