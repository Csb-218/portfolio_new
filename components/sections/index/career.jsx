// Core packages
import Image from 'next/image'
import Link from 'next/link';
import Badges from '../../utils/badge.list.util'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'

// 
import companies from '../../../content/index/technical.json'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="I am currently creating and developing at Founders.careers . "
				/>
				<section className={career.area}>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<Link href={companies[0].url}>
									<Image
										src={companies[0].logo}
										alt={companies[0].alt}
										height={40}
										width={40} >
									</Image>

								</Link>
								<h3>Founders Careers</h3>
								<h4>Freelance</h4>
								<h4>Nov 2024 - Jan 2025 · 3 month</h4>
								<h5>Remote</h5>
							</span>
							<p>
								A platform for companies to hire pre-vetted ex-startup founders and operators.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						{/* <div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Director of Product Design and Development</h3>
									<h4>Nov 2021 - Present · 1 yrs 3 mos</h4>
								</span>
								<p>
								I am responsible for the ideation, planning, and development of new consumer goods—and customer and employee facing microservice software. During these projects I work with key stakeholders within our company and supplychain to ensure and meet quality goals across multiple domains.
								</p>
							</div>
							<div className={career.positionAlt}></div>
						</div> */}

						{/* <div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Full Stack Developer & User Experience Designer</h3>
									<h4>Feb 2020 - Nov 2021 · 1 yrs 10 mos</h4>
								</span>
								<p>
								As the lead full stack developer I am responsible for all software development, CI/CD, and QA. This is for the front end, APIs, and the back end. Additionally I was tasked with identifying and analyzing weak points in the customer journey and employee workflows. Each project had to be estimated and prioritized based on its workload and immediate impact to efficiency or revenue. Some of these projects have been so successful internally that we have planned refactoring for commercialization. 
								</p>
								<p>
								Some key projects complete during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										Product attribute and settings automated testing
										<span className={career.subList}><span className={career.bullet}></span>Eradicated critical data input errors</span>
									</li>
									<li>
										Inventory management reporting and automation 
										<span className={career.subList}><span className={career.bullet}></span>Decreased purchasing labour by ~80%</span>
									</li>
									<li>
										Sales management plugin with AJAX shopping cart integration
										<span className={career.subList}><span className={career.bullet}></span>Increased AOV by 8.3%</span>
									</li>
									<li>
										Bespoke ID verification software and WooCommerce integration
										<span className={career.subList}><span className={career.bullet}></span>Decreased Credit Card fraud by 98%</span>
									</li>
								</ul>
								<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div> */}

						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Freelance Bubble.io Developer</h3>
									<h4>Nov 2024 - Jan 2025 · 3 month</h4>
								</span>
								{/* <p>
									I was brought on to help fill multiple creative rolls in a small start-up environment. Working with the marketing team to create the brand and logos — designing and developing a new front end for the website — and improving the users experience and store KPIs through design and merchandising optimizations.
								</p> */}
								<p>
									Some key projects completed during this time 👇
								</p>
								<ul className={career.list}>
									{/* <li>
									    Page Workflows(improved page loading time)
										<span className={career.subList}><span className={career.bullet}></span>Increased conversions by 0.7%</span>
									</li> */}
									{/* <li>
										Implemented dynamic search .
										<span className={career.subList}><span className={career.bullet}></span>reduced loading time by 50%</span>
									</li> */}
									<li>
									    <span className={career.subList}><span className={career.bullet}></span>Implemented dynamic search .</span>
										<span className={career.subList}><span className={career.bullet}></span>Page Workflows(improved page loading time)</span>
										<span className={career.subList}><span className={career.bullet}></span>Backend workflows</span>
										<span className={career.subList}><span className={career.bullet}></span>Third-party Authentication and API Integration</span>
										<span className={career.subList}><span className={career.bullet}></span>Webhooks</span>
										<span className={career.subList}><span className={career.bullet}></span>Payment Gateway setup</span>
									</li>
								</ul>
								<Badges list={NoCode} block="stack" fullContainer="fullContainer" />
							</div>
							<div className={career.positionAlt}></div>
						</div>

					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<Link href={companies[1].url}>
									<Image
										src={companies[1].logo}
										alt={companies[1].alt}
										height={40}
										width={100} >
									</Image>

								</Link>
								<h3>Rablo Learing Pvt. Ltd. </h3>
								<h4>Intern Full-time</h4>
								<h4>Aug 2024 - Oct 2024 · 3 months</h4>
								<h5>Remote</h5>
							</span>
							<p>
								Rablo is a ready-to-teach Platform to help private educators and small and midsize tuition businesses grow their businesses, run their classes, and establish credibility in the market through Zero Platform Charge.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						{/* <div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Director of Product Design and Development</h3>
									<h4>Nov 2021 - Present · 1 yrs 3 mos</h4>
								</span>
								<p>
								I am responsible for the ideation, planning, and development of new consumer goods—and customer and employee facing microservice software. During these projects I work with key stakeholders within our company and supplychain to ensure and meet quality goals across multiple domains.
								</p>
							</div>
							<div className={career.positionAlt}></div>
						</div> */}

						{/* <div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Full Stack Developer & User Experience Designer</h3>
									<h4>Feb 2020 - Nov 2021 · 1 yrs 10 mos</h4>
								</span>
								<p>
								As the lead full stack developer I am responsible for all software development, CI/CD, and QA. This is for the front end, APIs, and the back end. Additionally I was tasked with identifying and analyzing weak points in the customer journey and employee workflows. Each project had to be estimated and prioritized based on its workload and immediate impact to efficiency or revenue. Some of these projects have been so successful internally that we have planned refactoring for commercialization. 
								</p>
								<p>
								Some key projects complete during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										Product attribute and settings automated testing
										<span className={career.subList}><span className={career.bullet}></span>Eradicated critical data input errors</span>
									</li>
									<li>
										Inventory management reporting and automation 
										<span className={career.subList}><span className={career.bullet}></span>Decreased purchasing labour by ~80%</span>
									</li>
									<li>
										Sales management plugin with AJAX shopping cart integration
										<span className={career.subList}><span className={career.bullet}></span>Increased AOV by 8.3%</span>
									</li>
									<li>
										Bespoke ID verification software and WooCommerce integration
										<span className={career.subList}><span className={career.bullet}></span>Decreased Credit Card fraud by 98%</span>
									</li>
								</ul>
								<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div> */}

						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Front End Developer Intern</h3>
									<h4>Aug 2024 - Present · 2 months</h4>
								</span>
								{/* <p>
									I was brought on to help fill multiple creative rolls in a small start-up environment. Working with the marketing team to create the brand and logos — designing and developing a new front end for the website — and improving the users experience and store KPIs through design and merchandising optimizations.
								</p> */}
								<p>
									Some key projects completed during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										Collaborated with the design and backend teams to implement responsive design solutions, ensuring seamless functionality across various devices and browsers.
										{/* <span className={career.subList}><span className={career.bullet}></span>Increased conversions by 0.7%</span> */}
									</li>
									<li>
										Implemented dynamic imports .
										<span className={career.subList}><span className={career.bullet}></span>reduced loading time by 50%</span>
									</li>
									<li>
										Developed and optimized user interfaces using HTML, CSS, and JavaScript, enhancing the overall user experience
										and performance of Rablo.in&apos;s web applications.
										{/* <span className={career.subList}><span className={career.bullet}></span>7.1% overall conversion rate </span> */}
									</li>
								</ul>
								<Badges list={stack} block="stack" fullContainer="fullContainer" />
							</div>
							<div className={career.positionAlt}></div>
						</div>

					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>The Open Factory LLP.</h3>
								<h4>Freelance </h4>
								<h4>May 2023 - Dec 2023 · 8 mos</h4>
								<h5>Remote</h5>
							</span>
							<p>
								The Open Factory is a tech startup where the elegance of OT
								meets the open standards of IT. It aims for its users to create, deploy and manage their IT solutions for their OT applications.
								TheOpenFactory&apos;s Low-Code platform helps elevate industries, one connection at a time.
							</p>
						</div>
						<div className={career.companyAlt}></div>


					</article>

					<article className={career.companyPositions}>


						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Freelance Frontend Developer </h3>
									<h4>May 2023 - Dec 2023 · 8 mos</h4>
								</span>
								{/* <p>
									I was brought on to help fill multiple creative rolls in a small start-up environment. Working with the marketing team to create the brand and logos — designing and developing a new front end for the website — and improving the users experience and store KPIs through design and merchandising optimizations.
								</p> */}
								<p>
									Some key projects completed during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										Developed the entire frontend from scratch and implemented responsive design solutions, ensuring seamless functionality across various devices and browsers.
										{/* <span className={career.subList}><span className={career.bullet}></span>Increased conversions by 0.7%</span> */}
									</li>
									<li>
										Collaborated with backend developers and implemented real-time data tracking using MQTT protocol  .
										{/* <span className={career.subList}><span className={career.bullet}></span>reduced loading time by 50%</span> */}
									</li>
									{/* <li>
									Developed and optimized user interfaces using HTML, CSS, and JavaScript, enhancing the overall user experience
									and performance of Rablo.in&apos;s web applications.
										<span className={career.subList}><span className={career.bullet}></span>7.1% overall conversion rate </span>
									</li> */}
								</ul>
								<Badges list={stack} block="stack" fullContainer="fullContainer" />
							</div>
							<div className={career.positionAlt}></div>
						</div>

					</article>

					{/* <article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>West Coast Electronics</h3>
								<h4>Permanent Full-time</h4>
								<h4>Jan 2006 - Nov 2011 · 5 yrs 11 mos</h4>
								<h5>Vancouver, British Columbia, Canada</h5>
							</span>
							<p>I was the Electronics Wizard 🧙‍♂️</p>
							<p>West Coast Electronics was a repair shop that fixed computers, consoles, and cell phones.</p>
						</div>
						<div className={career.companyAlt}></div>
					</article> */}
				</section>
			</Container>
		</Section>
	)
}

const fullStack = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'php', name: 'PHP', type: 'devicon' },
	{ key: 'wordpress', name: 'WordPress', type: 'devicon' },
	{ key: 'woocommerce', name: 'WooCommerce', type: 'devicon' },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'sass', name: 'SASS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
]

const stack = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	// { key: 'php', 			name: 'PHP', 				type: 'devicon' },
	// { key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	// { key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'sass', name: 'SCSS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	// { key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	// { key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]

const NoCode = [
	{ key: 'bubble', name: 'bubble.io', type: 'devicon' }
]