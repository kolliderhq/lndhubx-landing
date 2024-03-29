import { useState } from "react"
import Img from "react-cool-img";
import { MdBolt, MdOutlineSyncAlt, MdLock } from "react-icons/md";
import { postRequest } from "utils/api";
import { API_NAMES } from "consts";
import { displayToast, TOAST_LEVEL } from "utils/toast";

export const Landing = () => {
	return (
		<div className="h-full w-full bg-transparent">
			<div className="h-full">
				<div className="">
					<Hero />
				</div>
				<div className="">
					<About />
				</div>
			</div>
		</div>
	)
}

const Hero = () => {
	const [email, setEmail] = useState("");
	const onPresignup = async () => {
		if (!email) return
		try {
			const res = await postRequest(API_NAMES.PRESIGNUP, [], { email: email });
			displayToast('Early Access Registered!', {
				type: 'success',
				level: TOAST_LEVEL.CRITICAL,
				toastId: 'copy-invoice',
			});
		} catch (err) {
			console.log(err)
			displayToast('Error Registering', {
				type: 'error',
				level: TOAST_LEVEL.CRITICAL,
				toastId: 'copy-invoice',
			});

		}

	}
	return (
		<div className="lg:grid lg:grid-cols-2 flex flex-col">
			<div className="flex flex-col h-full">
				<div className="m-auto lg:w-1/2 w-96 ">
					<div className="text-6xl font-bold">
						<span className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Protect </span> your Bitcoin from price drops
					</div>
					<div className="mt-8 text-gray-400 text-xl opacity-60">
						The Lightning wallet that lets you peg your Bitcoin balance to fiat currency.
					</div>
					<div className="mt-8 flex">
						<div className="">
							<a className="flex w-48 bg-transparent border rounded-lg px-4 py-2 ltext-md cursor-pointer hover:border-yellow-400 hover:text-yellow-400" href="https://pay.alpha.kollider.xyz">
								<div className="m-auto">Try out Alpha!</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="flex bg-transparent">
				<div className="">
					<Img src="/assets/landing/landing_hero_v2.png" className="m-auto" />
				</div>
			</div>
		</div>
	)
}

const About = () => {
	return (
		<div className="w-full h-full flex bg-transparent mb-12 mt-12">
			<div className="lg:grid lg:grid-cols-3 m-auto flex flex-col lg:w-4/5">
				<div className="mx-auto w-3/5 mt-4">
					<div className="text-center text-5xl"><MdLock/></div>
					<div className="text-md font-bold mt-6 text-2xl">Lock in value</div>
					<div className="text-lg text-gray-400">Got a purchase coming up? Secure your Bitcoin to the current price in fiat.</div>
				</div>

				<div className="mx-auto w-3/5 mt-4">
					<div className="text-center text-5xl"><MdOutlineSyncAlt /></div>
					<div className="text-md font-bold mt-6 text-2xl">Instant transaction in any currency</div>
					<div className="text-lg text-gray-400">Make and receive payments in fiat over the lightning network.</div>
				</div>
				<div className="mx-auto w-3/5 mt-4">
					<div className="text-center text-5xl"><MdBolt /></div>
					<div className="text-md font-bold mt-6 text-2xl">Always ready to trade</div>
					<div className="text-lg text-gray-400">All balances stay on the network and are ready to trade at any time.</div>
				</div>
			</div>
		</div>
	)
}