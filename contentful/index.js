import {createClient} from 'contentful'
const config = useRuntimeConfig() 

const client=createClient({
    space: config.private.CONTENTFUL_SPACE_ID,
    accessToken: config.private.CONTENTFUL_ACCESS_TOKEN,
});

export {client}