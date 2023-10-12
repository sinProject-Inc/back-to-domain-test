import { reverse } from 'dns'
import { promisify } from 'util'

const reverse_async = promisify(reverse)

export async function get_domain(ip: string): Promise<string[]> {
	try {
		const domains = await reverse_async(ip)

		return domains
	} catch (error) {
		const message = (error as Error).message

		throw new Error(`Failed to reverse lookup for IP ${ip}: ${message}`)
	}
}
