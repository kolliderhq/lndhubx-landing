import React, { useEffect, useState } from 'react';

import { Header } from 'components/layout/Header';

import { Landing } from '../components/Landing';

export default function Home() {
	return (
		<div className="w-full sm:grid sm:grid-rows sm:px-4 pt-3 lg:h-sceen relative bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-white font-sans">
			<Header />
			<div className="lg:h-screen h-full w-full">
				<Landing />
			</div>
		</div>
	);
}
