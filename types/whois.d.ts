declare module 'whois' {
    function lookup(domain: string, callback: (err: any, data: string) => void): void;
}