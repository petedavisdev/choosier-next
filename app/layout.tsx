import './styles/modern-normalize.css';
import './styles/variables.css';
import './styles/base.css';
import './styles/utils.css';

import $style from './layout.module.css';
import Link from 'next/link';
import { Logo } from './Logo';
import type { Metadata } from 'next';
import { PATHS } from './CONSTANTS';

export const metadata: Metadata = {
	title: {
		template: '%s | Choosier',
		default: 'Choosier. Image polls made easy',
	},
	description:
		'Get help with art, design, fashion, photo and color choices. Create an image poll and share it with friends, followers, colleagues and customers.',
};

type RootLayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout(props: RootLayoutProps) {
	return (
		<html lang="en">
			<body>
				<main className={$style.container}>
					<Link href="/" className={$style.home}>
						<Logo />
					</Link>

					{props.children}
					<nav className={$style.nav}>
						<a href={PATHS.user} className="button">
							Login
						</a>
						<a href={PATHS.create} className="button">
							+ New
						</a>
					</nav>
				</main>

				<footer className={$style.container}>
					<p>
						<Link href={PATHS.about}>About</Link> |
						<Link href={PATHS.about + 'privacy'}>
							Essential cookies only
						</Link>{' '}
						|<Link href={PATHS.about + 'terms'}>Terms of use</Link>{' '}
						| Choosier &copy;
						{new Date().getFullYear()}
						<Link href="https://petedavis.dev">Pete Davis</Link> |
						<Link href={PATHS.about + 'contact'}>Say hello 👋</Link>
					</p>
				</footer>
			</body>
		</html>
	);
}
