import { expect, it } from 'vitest'
import { get_whois } from './whois'

type Spec = {
	name: string,
	domain: string,
	expected: string
}

const specs: Spec[] = [
	{
		name: 'example.com',
		domain: 'example.com',
		expected: ''
	},
	{
		name: 'sinproject.net',
		domain: 'sinproject.net',
		expected: ''
	},
	{
		name: 'sinpro.dev',
		domain: 'sinpro.dev',
		expected: ''
	},
]

it.each(specs)('get_whois($domain)', async (spec) => {
	const { domain } = spec

	if (!domain) {
		expect(async () => await get_whois(domain)).rejects.toThrow()
		return
	}

	const result = await get_whois(domain)

	console.log(result)

	expect(result).to.not.undefined
})
