import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

const RedirectPage = () => {
	const router = useRouter()
	useEffect(() => {
		// router.push('/')
		window.history.back()
	},[])

	return <></>
}

export default RedirectPage
