import $style from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Image poll creator',
	description:
		'Use Choosier to create an image poll, collect votes and make better visual decisions. Perfect for art, design, fashion and photography choices.',
};

export default function CreatePage() {
	return (
		<div>
			<h1>Create an image poll</h1>
			<h2>You have 5 credits</h2>
			<p>
				You will earn 1 credit for each first-time chooser who votes on
				your poll.
			</p>

			<section className={$style.columns}>
				<label
					htmlFor="public"
					className={`button ${$style.visibilityLabel}`}
				>
					<h2>
						<input
							type="radio"
							name="visibility"
							value="public"
							id="public"
							className={$style.visibilityInput}
						/>
						Public 🤗
					</h2>
					<p>Anyone can view and vote.</p>
					<h3>1 credit</h3>
				</label>

				<label
					htmlFor="private"
					className={`button ${$style.visibilityLabel}`}
				>
					<h2>
						<input
							type="radio"
							name="visibility"
							value="private"
							id="private"
							className={$style.visibilityInput}
						/>
						Private 🔒
					</h2>
					<p>You choose who can view and vote.</p>
					<h3>5 credits</h3>
				</label>
			</section>
		</div>
	);
}
