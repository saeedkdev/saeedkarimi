import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'
import { CiSaveDown1 } from 'react-icons/ci'

const TopContainer = styled.div`
	width: 80%;
	margin: 0 auto;
	min-height: 100px;
	margin-top: 50px;
`;
const NavbarGrid = styled.div`
	display: grid;
	grid-template-columns: 25% 45% auto;
`;
const NavbarUl = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	li {
		list-style: none;
	}
	a { color: #595959; transition: all 0.3s ease-in-out; }
	a:hover { color: #000;transition: all 0.3s ease-in-out; }
`;
const NavbarBtn = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;
const ResumeDownload = styled.a`
	background: #02111B;
	border-radius: 22px;
	color: #fff;
	padding: 10px 20px;
	width: 170px;
	:hover {
		background: #82d4bb;
		transition: all 0.1s ease-in-out;
	}
	svg {
		position: absolute;
	}
	transition: all 0.1s ease-in-out;
`;

function Navbar() {
	return (
		<TopContainer>
			<NavbarGrid>
				<div>
					<img src="/logo.png" alt="logo" width="65" />
				</div>
				<NavbarUl>
				  <li>
					<Link href="/">
					  <a>Home</a>
					</Link>
				  </li>
				  <li>
					<Link href="/experience">
					  <a>Experience</a>
					</Link>
				  </li>
				  <li>
					<Link href="/">
					  <a>About</a>
					</Link>
				  </li>
				  <li>
					<Link href="/">
					  <a>Contact Me</a>
					</Link>
				  </li>
				</NavbarUl>
				<NavbarBtn>
					<ResumeDownload href="#">
						Download CV &nbsp;
						<CiSaveDown1 size={23} />
					</ResumeDownload>
				</NavbarBtn>
			</NavbarGrid>
		</TopContainer>
	)
}

export default Navbar
