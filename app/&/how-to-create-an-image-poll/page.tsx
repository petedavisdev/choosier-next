import { PATHS } from '../../CONSTANTS';

export default function HowToCreateAnImagePollPage() {
	return (
		<article>
			<h1>How to create an image poll</h1>
			<p>Creating an image poll with Choosier is quick, easy and free!</p>
			<ol>
				<li>Upload between two and ten images.</li>
				<li>
					Add a short title to tell voters what your poll is about.
				</li>
				<li>
					Select a category - public polls will appear on a category
					listing page.
				</li>
				<li>
					Decide how long you want the poll to be open for voting - a
					day or a week.
				</li>
				<li>
					Click &apos;Continue&apos; to check the details and then
					click &apos;Save and publish&apos;.
				</li>
			</ol>
			<p>
				You&apos;ll get 10 credits when you register on Choosier, so you
				can start experimenting with polls straight away.
			</p>
			<p>
				Creating a poll requires 1 credit, plus any extras you choose.
			</p>
			<p>
				You will earn more credits just by inviting new people to vote
				on your polls.
			</p>
			<h2>What are you waiting for?</h2>
			<p>
				<a href={PATHS.create} className="button">
					+ Create an image poll
				</a>
			</p>
		</article>
	);
}
