import { GiLotusFlower } from "react-icons/gi";
import { IoCallSharp } from "react-icons/io5";
import {
	BiLogoFacebookCircle,
	BiLogoGmail,
	BiLogoLinkedinSquare,
} from "react-icons/bi";
const Footer = () => {
	return (
		<div>
			<footer className="w-full bg-gray-100 dark:bg-gray-900 py-16">
				<div className="md:px-12 lg:px-28">
					<div className="container mx-auto space-y-6 text-gray-600 dark:text-gray-300">
						<GiLotusFlower className="shadow-xl rounded-full shadow-purple-400  container mx-auto text-center text-purple-500 h-20 w-20"></GiLotusFlower>
						<ul
							role="list"
							className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
						>
							<li role="listitem">
								<a href="#" className="hover:text-primary">
									Home
								</a>
							</li>
							<li role="listitem">
								<a href="#" className="hover:text-primary">
									Features
								</a>
							</li>
							<li role="listitem">
								<a href="#" className="hover:text-primary">
									Get started
								</a>
							</li>
							<li role="listitem">
								<a href="#" className="hover:text-primary">
									About us
								</a>
							</li>
						</ul>
						<div className="m-auto flex w-max items-center justify-between space-x-4">
							<a href="tel:+243996660436" aria-label="call">
								<IoCallSharp className="shadow-lg rounded-lg shadow-purple-400 text-purple-500 h-10 w-10"></IoCallSharp>
							</a>
							<a href="mailto:hello@mail.com" aria-label="send mail">
								<BiLogoGmail className="shadow-lg rounded-lg shadow-purple-400 text-purple-500 h-10 w-10"></BiLogoGmail>
							</a>
							<a href="#" title="facebook" target="blank" aria-label="facebook">
								<BiLogoFacebookCircle className="shadow-lg rounded-lg shadow-purple-400 text-purple-500 h-10 w-10"></BiLogoFacebookCircle>
							</a>
							<a href="#" title="linkedin" target="blank" aria-label="linkedin">
								<BiLogoLinkedinSquare className="shadow-lg rounded-lg shadow-purple-400 text-purple-500 h-10 w-10"></BiLogoLinkedinSquare>
							</a>
						</div>
						<div className="text-center">
							<span className="text-sm tracking-wide">
								Copyright © farhana yesmin <span id="year">2023</span> | All
								right reserved
							</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
