// client.ts
const DEFAULT_TIMEOUT = 8000;
const DEFAULT_RETRIES = 2;
export async function fetchJsonWithRetries(url, options, retries = DEFAULT_RETRIES) {
    let lastError;
    for (let attempt = 0; attempt <= retries; attempt += 1) {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT);
        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal,
            });
            if (!response.ok) {
                throw new Error(`Request failed: ${response.status}`);
            }
            return (await response.json());
        }
        catch (error) {
            lastError = error;
            if (attempt === retries)
                break;
        }
        finally {
            clearTimeout(timeout);
        }
    }
    throw lastError;
}
//# sourceMappingURL=client.js.map