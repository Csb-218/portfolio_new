// Default core packages
import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Load custom scripts in <Head>
 * 
 * @returns <Html>
 */
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
			</Head>
			<body>
				<Main />
				<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
				<script type="text/javascript" src="https://www.powr.io/powr.js?platform=html" async>  </script>
				<NextScript />
			</body>
		</Html>
	)
}