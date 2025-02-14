declare global {
    interface Window {
        ethereum?: {
            isMetaMask?: boolean;
            request: (args: { method: string; params?: never[] }) => Promise<never>;
        };
        bybit?: {
            request: (args: { method: string; params?: never[] }) => Promise<never>;
        };
    }
}

export {};

