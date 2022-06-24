import 'styles/tailwind.scss';
import 'styles/globals.scss';
import 'styles/styles.scss';

import React from 'react';
import { Provider } from 'react-redux';

import PlausibleProvider from 'next-plausible';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import { PageWrapper } from 'components/wrappers/PageWrapper';
import { defaultOnErrorRetry, fetcher } from 'utils/fetchers';
import { googleTranslateException } from 'utils/misc';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<PlausibleProvider domain="pay.kollider.xyz">
				<SWRConfig
					value={{
						refreshInterval: 0,
						fetcher: fetcher,
						// shouldRetryOnError: false,
						// onErrorRetry: false,
						onErrorRetry: defaultOnErrorRetry,
					}}>
					<DefaultSeo
						title="Kollider Wallet"
						description="Synthetic stablecoins."
						canonical={'trade.kollider.xyz'}
						twitter={{
							handle: '@kollider',
							// site: '@site',
							cardType: 'summary_large_image',
						}}
					/>
					<PageWrapper>
						<Component {...pageProps} />
					</PageWrapper>
				</SWRConfig>
		</PlausibleProvider>
	);
}

googleTranslateException();

export default MyApp;
