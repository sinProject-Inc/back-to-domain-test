import { expect, it } from 'vitest'
import { get_domain } from './back-to-domain'

type Spec = {
	name: string,
	ip: string,
	expected: string
}

const specs: Spec[] = [
	{
		name: 'should return the domain',
		ip: '116.82.205.136',
		expected: 'fp7452cd88.oski512.ap.nuro.jp'
	},
	{
		name: 'should return the domain',
		ip: '153.246.176.60',
		expected: 'p7201061-ipoefx.ipoe.ocn.ne.jp'
	},
	{
		name: 'empty',
		ip: '',
		expected: ''
	},
	{
		name: 'local IP',
		ip: '192.168.0.1',
		expected: ''
	}
]

it.each(specs)('get_domain($ip) -> $expected', async (spec) => {
	const { ip, expected } = spec

	if (!ip) {
		expect(async () => await get_domain(ip)).rejects.toThrow()
		return
	}

	if (ip === '192.168.0.1') {
		expect(async () => await get_domain(ip)).rejects.toThrow()
		return
	}

	const domains = await get_domain(ip)
	const domain = domains[0]

	expect(domain).toBe(expected)
})
