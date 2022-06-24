import React from 'react';
import Img from 'react-cool-img';

export const Header = () => {
	return (
		<div className="flex items-center justify-between w-full h-14 pb text-gray-800">
			<figure className="w-full flex items-center justify-start relative">
				<div className="text-2xl px-2"><Img src="/assets/logos/kollider_logo_black.png" className="w-32"/></div><div className="mb-4 text-sm font-bold">Wallet</div>
			</figure>
			<div className="col-span-2 w-full flex items-center justify-end gap-3 xxs:gap-4">
				<div className="flex h-full border-r border-gray-800">
				</div>
			</div>
		</div>
	);
};
