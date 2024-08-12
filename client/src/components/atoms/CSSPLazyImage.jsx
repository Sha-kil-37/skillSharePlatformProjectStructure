import { useEffect, useState } from "react";
import fallBackImage from '../../assets/image/image-fallback.png';
import cn from "../../utils/cn";

const CSSPLazyImage = ({src, className, alt}) => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const image = new Image();
		image.onload = () => setIsLoaded(true);
		image.onerror = () => setIsLoaded(false);
		image.src = src;
	}, [src])

	return (
		<div className={cn(
			"size-10 overflow-hidden",
			className
		)}>
			{
				isLoaded ?
				<img 
					src={src || fallBackImage} 
					alt={alt}
					className="size-full"
				/>

				: <span className="block size-full bg-gray-400 animate-pulse"/>
			}
		</div>
	);
};

Image.defaultProps = {
	alt: 'Lazy load Image'
}

export default CSSPLazyImage;