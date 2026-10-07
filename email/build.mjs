import {createClient} from '@sanity/client'
import fs from 'node:fs'

const client = createClient({
projectId: 'cyb6akuc',
dataset: 'production',
apiVersion: '2025-01-01',
useCdn: true,
})

const query = '*[_type == "emailCampaign"][0]{subject, preheader, headline, body, ctaLabel, ctaUrl, "heroUrl": heroImage.asset->url + "?w=1200&fm=jpg"}'

const doc = await client.fetch(query)

if (!doc) {
console.error('No published Email Campaign found. Publish one in the Studio first.')
process.exit(1)
}

let html = fs.readFileSync('template.html', 'utf8')
for (const [key, value] of Object.entries(doc)) {
html = html.replaceAll('{{' + key + '}}', value ?? '')
}
fs.mkdirSync('dist', {recursive: true})
fs.writeFileSync('dist/email.html', html)
console.log('Built dist/email.html') 