import { Link } from 'react-router-dom';
import userProfileAvater from '../../assets/image/user-profile-avater.png'
import CSSPLazyImage from '../atoms/CSSPLazyImage';
import { Bell, Lightbulb, Moon, SunMedium } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setThemeDirectly } from '../../redux/theme/themeSlice';

const Header = () => {
	const { theme } = useSelector((state) => state.theme)
  const dispatch = useDispatch()

	return (
		<header className="h-[60px] px-4 desktop:px-8 border-b dark:border-slate-800">
			<div className="display-center-y justify-between h-full">

				{/* app logo */}
				<Link to={'/'}>
					<div>
						<h1 className="text-2xl text-slate-600 dark:text-slate-500 font-bold">
							<span className="hidden tablet:block">Community Skill Share Platform</span>
							<span className="tablet:hidden">CSSP</span>
						</h1>
					</div>
				</Link>

				{/* header end nav */}
				<div>
					<nav className='flex gap-8'>
						<Link to={'/share-skill'}>
							<div className='display-center gap-2 px-8 py-2 border-e border-slate-300 dark:border-slate-700 hover:border-transparent hover:rounded-md text-base text-slate-500 hover:text-slate-700 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition'>
								<Lightbulb />
								<span className='tracking-wider font-medium capitalize'>Share my skill</span>
							</div>
						</Link>

						{/* app theme button */}
						<button 
							onClick={() => {
                  theme === 'dark' 
                  ? dispatch(setThemeDirectly("light")) 
                  : dispatch(setThemeDirectly("dark"))
              }}
							className='text-slate-500'
						>
							{
								theme === 'light'
								? <Moon />
								: <SunMedium />
							}
						</button>

						{/* notification bell */}
						<Link to={'/notifications'}>
							<button className='text-slate-500 h-full display-center'>
								<Bell />
							</button>
						</Link>

						{/* user button */}
						<div>
							<div>
								<CSSPLazyImage 
									src={userProfileAvater} 
									alt="User Profile Avater"
									className={'rounded-full size-10'}
								/>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;