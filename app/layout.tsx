import './styles/modern-normalize.css';
import './styles/variables.css';
import './styles/base.css';
import './styles/utils.css';

import $style from './layout.module.css';
import Link from 'next/link';
import { Logo } from './Logo';
import type { Metadata } from 'next';

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
						{/* <NuxtLink
				:to="profile?.username ? PATHS.user + profile?.username : PATHS.user"
				className="button"
			>
				{{
					profile?.username
						? profile?.username
						: profile?.userId
							? 'Account'
							: 'Login'
				}}
			</NuxtLink>
			<NuxtLink :to="PATHS.new" className="New button">+ New</NuxtLink> */}
					</nav>
				</main>

				<footer className={$style.container}>
					<p>
						{/* <NuxtLink to="/about">About</NuxtLink> |
			<NuxtLink to="/privacy">Essential cookies only</NuxtLink> |
			<NuxtLink to="/terms">Terms of use</NuxtLink> | Choosier &copy;
			{{ new Date().getFullYear() }}
			<LinkTo to="https://petedavis.dev">Pete Davis</LinkTo> |
			<LinkTo to="/contact">Say hello 👋</LinkTo> */}
					</p>
				</footer>
			</body>
		</html>
	);
}
