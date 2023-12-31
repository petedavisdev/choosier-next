import Link from 'next/link';
import { Metadata } from 'next';
import { PATHS } from '../CONSTANTS';

export const metadata: Metadata = {
	title: 'About Choosier image polls',
	description:
		"Hi, I'm Pete. I've created Choosier to help you make visual decisions without the dithering!",
};

export default function AboutPage() {
	return (
		<article>
			<h1>About</h1>

			<p>Hi 👋 I&apos;m Pete.</p>
			<p>
				I&apos;ve created Choosier to help you make visual decisions
				without the dithering!
			</p>

			<h2>Get started</h2>

			<ol>
				<li>
					<Link href={PATHS.about + 'how-to-create-an-image-poll'}>
						How to create an image poll
					</Link>
				</li>
				<li>
					<Link href={PATHS.about + './how-to-edit-your-image-poll'}>
						How to edit your image poll
					</Link>
				</li>
			</ol>

			<h2>Give me some feedback</h2>

			<p>
				Choosier is currently in open beta testing and
				<Link href="./contact">I would love your feedback</Link>.
			</p>
		</article>
	);
}
