import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { BiRocket } from 'react-icons/bi'
import { CgWebsite } from 'react-icons/cg'
import { GiStarCycle } from 'react-icons/gi'

const HeroAvatarBg = styled.div`
	/* Rectangle 3 */
	width: 500px;
	height: 500px;
	margin: 0 auto;
`;

const HeroName = styled.h1`
	/* Name */
	margin: 0 auto;
	width: 643px;
	text-align: center;
	height: 100px;
	font-size: 6rem;
	margin-top: -50px;
	color: #02111B;
	small {
		font-size: 1.5rem;
		color: #616161;
		/* new line */
		display: block;
		font-weight: 400;
		margin-top: -15px;
	}
`;

const DividerGradient = styled.div`
	width: 100%;
	height: 188px;
	background: linear-gradient(180deg, #82D4BB 0%, rgba(144, 213, 192, 0.2) 0.01%, rgba(217, 217, 217, 0) 100%);
	margin-top: 100px;
	padding-top: 60px;
`;

const DividerGrid = styled.div`
	width: 80%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 60% auto;
	p {
		width: 500px;
		text-align: center;
		font-size: 1.2rem;
		font-weight: 500;
	}
`;

const ImgGrd = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	/* add gap */
	gap: 40px;
`;

const ServicesGrid = styled.div`
	width: 70%;
	margin: 30px auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10%;
	min-height: 500px;
	.box {
		h1 {
			font-size: 1.3rem;
			text-align: center;
			padding: 20px 0;
		}
		div {
			font-size: 1rem;
			font-weight: 400;
			text-align: center;
			padding: 20px 45px;
			height: 250px;
			background: #FFFFFF;
			box-shadow: 13px 11px 23px 31px rgba(0, 0, 0, 0.03);
			border-radius: 50px;
		}
	}
`;

export default function Home() {
  return (
	  <div>
		<Head>
			<title>Saeed Karimi - Software Engineer</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="icon" href="/logo.png" />
		</Head>

		<HeroAvatarBg>
			<Image src="/avatar-full.png" alt="avatar" width="643" height="643" />
		</HeroAvatarBg>
		<HeroName>
			Saeed Karimi
			<small>SOFTWARE ENGINEER / / PRODUCT MANAGER</small>
		</HeroName>
		<DividerGradient>
			<DividerGrid>
				<div>
					<p>
					I’m a fullstack software engineer living in Vancouver. I work with PHP, Python, Javascript.
					</p>
				</div>
				<ImgGrd>
					<Image src="/php.png" width="65" height="65" />
					<Image src="/python.png" width="65" height="65" />
					<Image src="/javascript.png" width="55" height="55" />
				</ImgGrd>
			</DividerGrid>
		</DividerGradient>
	  </div>
  )
}
