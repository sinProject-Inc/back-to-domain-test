import * as whois from 'whois'
import { promisify } from 'util'

const whois_lookup_async = promisify(whois.lookup)

export async function get_whois(domain: string): Promise<string> {
	return whois_lookup_async(domain)
}