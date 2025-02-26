// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';
import Experience from '../../blocks/about.experience.block';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="With a diverse skill set that includes No-code development, full stack development, and systems design, I am a well-rounded digital professional."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image src="/img/me2.jpeg" alt="csb profile picture" width={600} height={800}/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills that pay the bills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Hey there! I'm C.S Bhagwant, a freelance web developer based in India. My skills span traditional web development , and no-code development, allowing me to bring your digital vision to life with precision and creativity.From sleek landing pages to robust e-commerce platforms, I've got you covered. I thrive on exceeding client expectations, whether it's building responsive designs or optimizing for SEO. I take the time to understand your goals, ensuring the end product meets your needs.Located in India , I draw inspiration from the city's diverse culture and innovative spirit. Let's collaborate and turn your ideas into captivating online experiences!"
						/>

						{/* <Experience
						 title="Work Experience"
						 containerClass={about.container}
						 list={experiences}
						 iconClass={about.icon}
						 icon={[ 'fat', 'briefcase' ]}
						/> */}

						
{/* 
						<BadgesBlock 
							title="Reasearch and planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/> */}
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const experiences = [
	{ key:"openfactory" , company:"The Open Factory" , role:"Freelance Frontend Developer" , tenure:"2024" },
	{ key:"rablo" ,       company:"Rablo" ,            role:"Frontend Developer" ,           tenure:"2023-2024"}
]

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]