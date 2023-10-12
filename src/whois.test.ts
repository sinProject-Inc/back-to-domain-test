import { expect, it } from 'vitest'
import { get_whois } from './whois'

type Spec = {
	name: string
	domain: string
	expected: string
}

const specs: Spec[] = [
	{
		name: 'example.com',
		domain: 'example.com',
		expected: 'organisation: Internet Assigned Numbers Authority',
	},
	{
		name: 'sinproject.net',
		domain: 'sinproject.net',
		expected: 'Creation Date: 2012-05-05T17:17:07Z',
	},
	{
		name: 'sinpro.dev',
		domain: 'sinpro.dev',
		expected: 'Creation Date: 2023-05-29T06:04:38Z',
	},
	{
		name: 'togei-sf.co.jp',
		domain: 'togei-sf.co.jp',
		expected: '[Registered Date]               2017/12/17',
	},
]

it.each(specs)('get_whois($domain)', async (spec) => {
	const { domain, expected } = spec

	if (!domain) {
		expect(async () => await get_whois(domain)).rejects.toThrow()

		return
	}

	const result = await get_whois(domain)

	expect(result).toContain(expected)
})
