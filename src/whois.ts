import whois from 'whois-json';

export async function get_whois(domain: string): Promise<any> {
	try {
		const data = await whois(domain)
		return data
	} catch (error) {
		const message = (error instanceof Error) ? error.message : String(error)

		throw new Error(`Failed to whois lookup for domain ${domain}: ${message}`)
	}
}