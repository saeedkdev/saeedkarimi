import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaNodeJs, FaReact, FaPython, FaLaravel, FaDocker } from 'react-icons/fa'

const Container = styled.div`
	width: 80%;
	margin: 0 auto;
`;

const ExpGrid = styled.div`
	display: grid;
	grid-template-columns: 20% 80%;
	grid-gap: 5rem;
	margin-top: 5rem;
`;

const GitHub = styled.div`
	text-align: center;
	p {
		line-height: 1.8rem;
	}
`;

const GridContainer4 = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 20px;
	background: #FFFFFF;
	box-shadow: -2px 3px 20px 17px rgba(0, 0, 0, 0.02);
	border-radius: 21px;
	div {
		/* shadow */
		text-align: center;
		padding: 1.5rem 0;
		p {
			font-size:.8rem;
			color: #616161;
			line-height: 1.8rem;
			padding: 0 1rem;
		}
	}
`;

const Experience = () => {
  return (
	<div>
	  <Head>
		<title>Saeed Karimi - Experience</title>
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		<link rel="icon" href="/logo.png" />
	  </Head>
	  <Container>
		<ExpGrid>
			<GitHub>
				<a href="http://github.com/saeedkdev" target="_blank">
					<h4>
						<FiGithub /> / saeedkdev
					</h4>
				</a>
				<h1>Experience</h1>
				<p>
				Over the past 7 years I’ve build many web based applications using Laravel, Codeigniter, Django, NodeJs and React.
				</p>
			</GitHub>
			<GridContainer4>
				<div>
					<div
						onMouseOver={({target})=>target.style.color="#3c873a"}
						onMouseOut={({target})=>target.style.color="#616161"}
						color="#616161"
					>
					<FaNodeJs size="3rem" 
					/>
					</div>
					<h3>NodeJs</h3>
					<p>
					Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine
					</p>
				</div>
				<div>
					<div
						onMouseOver={({target})=>target.style.color="#61dbfb"}
						onMouseOut={({target})=>target.style.color="#616161"}
					    color="#616161"
					>
					<FaReact size="3rem" 
					/>
					</div>
					<h3>React</h3>
					<p>
					React is an open-source, front end, JavaScript library for building user interfaces or UI components.
					</p>
				</div>
				<div>
					<div
					    color="#616161"
						onMouseOver={({target})=>target.style.color="#F05340"}
						onMouseOut={({target})=>target.style.color="#616161"}
					>
					<FaLaravel 
						size="3rem"
					/>
					</div>
					<h3>Laravel</h3>
					<p>
					Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern.
					</p>
				</div>
				<div>
					<div
					    color="#616161"
						onMouseOver={({target})=>target.style.color="#0db7ed"}
						onMouseOut={({target})=>target.style.color="#616161"}
					>
					<FaDocker 
						size="3rem"
					/>
					</div>
					<h3>Docker</h3>
					<p>
					Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.
					</p>
				</div>
			</GridContainer4>
		</ExpGrid>
	  </Container>
	</div>
  )
}

export default Experience
