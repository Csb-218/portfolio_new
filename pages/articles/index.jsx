import { useState, useEffect } from "react"

import Recent 		from '../../components/sections/articles/recent'

import Color 	from '../../components/utils/page.colors.util'

import colors 		from '../../content/articles/_colors.json'
import settings 	from '../../content/_settings.json'

//
export default function Articles({ mediumArticles }) {
	return (
		<>
			<Color colors={colors} />
			<Recent mediumArticles={mediumArticles}/>
		</>
	)
}

// This gets called on every request
export async function getServerSideProps({ res }) {

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	)


	// const [ mediumRSS ] = await Promise.all( [
	// 	fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${settings.username.medium}`),
	// ] )
	
	// let [ mediumArticles ] = await Promise.all( [
	// 	mediumRSS.json(),
	// ] )

	const host = process.env.X_Rapidapi_Host
	const api_key = process.env.X_Rapidapi_Key
	const user_id = process.env.Rapid_Medium_User_Id
 

	const [userArticles] = await Promise.all([
		
		fetch(`https://${host}/user/${user_id}/articles`,{
			method:"GET",
			headers:{
				"Host" : host ,
				"X-Rapidapi-Host" : host ,
				"X-Rapidapi-Key" : api_key
			}

		})
	])

	const [article_ids] = await Promise.all([
		userArticles.json()
	])

	const mediumArticles = await Promise.all(
		article_ids?.associated_articles?.map(id =>
			fetch(`https://${host}/article/${id}`, {
				method: "GET",
				headers: {
					"Host": host,
					"X-Rapidapi-Host": host,
					"X-Rapidapi-Key": api_key
				}
			}).then(res => res.json())
		)
	)


	return {
		props: { mediumArticles }
	}
}
