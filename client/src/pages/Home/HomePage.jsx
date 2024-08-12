import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
	const [data, setData] = useState(false)

	useEffect(() => {
		const callWelcomeData = async () => {
			const data = await axios.get('http://localhost:8000/api/v1/')
			setData(data.data);
		}

		callWelcomeData();
	}, [])

	return (
		<div className="py-6 display-center h-full">
			<h1 className="text-3xl font-medium -mt-64 dark:text-white">{data.message}</h1>
		</div>
	);
};

export default HomePage;