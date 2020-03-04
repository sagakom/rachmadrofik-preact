import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	return (
		<div class={style.home}>
			<div class={style.about}>
				<div class={style.imageContainer}>
					<div class={style.image} />
				</div>
				<div class={style.quote}>
					<div class={style.details}>
						Rachmad presents traditional spanish art with a modern twist. Her work is
						excellent quality, her technique is brilliant and her love of the
						subject matter shines through.
					</div>
					<div class={style.author}>- The Local Newspaper</div>
				</div>
			</div>
			<div class={style.bio}>
				<p class={style.bioleft}>
					“Design is the silent ambassador of your brand.” (Paul Rand)
					“Mass advertising can help build brands, but authenticity is what makes them last. If people believe they share values with a company, they will stay loyal to the brand.” (Howard Schultz)
					“A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.” (Jeff Bezos)
					“Your brand is what other people say about you when you’re not in the room.” (Jeff Bezos)

				</p>
				<p class={style.bioright}>
					“Brand is just a perception, and perception will match reality over time. Sometimes it will be ahead, other times it will be behind. But brand is simply a collective impression some have about a product.” (Elon Musk)
					“A brand is the set of expectations, memories, stories and relationships that, taken together, account for a consumer’s decision to choose one product or service over another.” (Seth Godin)
					“Every advertisement should be thought of as a contribution to the complex symbol which is the brand image.” (David Ogilvy)
					“Too many companies want their brands to reflect some idealised, perfected image of themselves. As a consequence, their brands acquire no texture, no character and no public trust.” (Richard Branson)
					“Your brand is what other people say about you when you’re not in the room.” (Jeff Bezos)

				</p>
			</div>
		</div>
	);
};

export default Home;
