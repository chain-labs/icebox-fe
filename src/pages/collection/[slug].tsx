import axios from 'axios'
import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import absoluteUrl from 'next-absolute-url'
import CollectionPage from '@/modules/collection'

export async function getServerSideProps(context: NextPageContext) {
    const { origin } = absoluteUrl(context.req)
    const { query } = context
    const url = `${origin}/api/collection?slug=${query.slug}`

    const res = await axios.get(url)

    return {
        props: res.data,
    }
}

const CollectionSlug = (props) => {
    const router = useRouter()
    console.log({ props: props })

    return <CollectionPage {...props} />
}

export default CollectionSlug
