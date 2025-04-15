import { useState, useEffect } from 'react'
import Link from 'next/link';

import Container from '../structure/container'
import Icon from '../utils/icon.util'

import css from '../../styles/structure/footer.module.scss'
import button from '../../styles/blocks/button.module.scss';

import content from '../../content/footer.json'
import settings from '../../content/_settings.json'


export default function Footer() {
	
	const [gitHubInfo, setGitHubInfo] = useState({
		stars: null,
		forks: null,
	});

	useEffect(() => {
		fetch( settings.portfolio.repo_api )
			.then(response => response.json())
			.then(json => {
				const { stargazers_count, forks_count } = json;
				setGitHubInfo({
					stars: stargazers_count,
					forks: forks_count,
				});
			})
		.catch(e => console.error(e));
	}, []);
	
	return (
		<footer className={css.container}>
			<Container spacing={['verticalXXLrg', 'bottomLrg']}>

				<section 
				  className={css.sections}
				>

					<p style={{fontSize:"2rem"}}>Have a project in mind ?</p>
					<p className={css.para}>
						I&apos;d love to hear from you! Whether you&apos;re ready to kickstart a new website or revamp an existing one, I&apos;m here to help turn your ideas into reality.
					</p>
                   
				    <button
					    style={{width:"180px"}}
						className={`button ${button.primary}`}
						onClick={ () => window.location = 'mailto:csbhagwant@gmail.com' } >
						Contact Me
					</button>

					<ul className={css.social}>
						<li><h4>Social</h4></li>
						<li className={css.socialList}>
							{
							content.social.map( ({ url, icon }, index) => {
								return (
									<a  key={index} href={url} rel="noreferrer" target="_blank"><Icon icon={[ 'fab', icon ]} /></a>
								)
							})
							}
						</li>
					</ul>

					<ul className={css.footerLinks}>
						<li>
							<Link href="/terms">Terms & Conditions</Link>
						</li>
						<li>
							<Link href="/contactUs">Contact Us</Link>
						</li>
					</ul>

				</section>
			</Container>
			<canvas id="gradient-canvas" className={''} data-transition-in ></canvas>
		</footer>
	)
}
