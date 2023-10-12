declare module 'whois' {
	function lookup(domain: string, callback: (err: Error, data: string) => void): void
}
