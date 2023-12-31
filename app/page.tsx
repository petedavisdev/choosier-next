import { ChoiceList, ChoiceListSkeleton } from './ChoiceList';

import { CategoryNav } from './-/[category]/CategoryNav';
import Link from 'next/link';
import { PATHS } from './CONSTANTS';
import { Suspense } from 'react';

export default function HomePage() {
	return (
		<div>
			<h1>
				<span className="screenReaderOnly">Choosier. </span>
				Visual decisions made easy
			</h1>

			<CategoryNav />

			{/* <List filter={['visibility', 'promoted']} open /> */}

			<section className="grid">
				<Suspense fallback={<ChoiceListSkeleton count={3} />}>
					<ChoiceList />
				</Suspense>
			</section>

			<article>
				<h2>How Choosier Works</h2>
				<p>When you have too many options, Choosier is here to help.</p>
				<p>
					It shows your images two at a time, like a knock-out
					tournament, so you can make quick comparisons and find your
					favorite.
				</p>
				<p>
					Share your choice with friends, followers, colleagues or
					customers to instantly see their favorites and choose with
					confidence.
				</p>
				<h3>
					No more dithering.
					<br />
					No more guesswork.
				</h3>
			</article>

			<h2>
				<Link href={PATHS.create} className="button">
					+ Create an image poll
				</Link>
			</h2>
		</div>
	);
}
