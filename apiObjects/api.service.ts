import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class ApiService {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({});
    }

    private async request<T>(
        method: 'GET' | 'POST' | 'PUT' | 'DELETE',
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        try {
            const res = await this.client.request<T>({ url, method, data, ...config });
            console.log(`-----[API] ${method} ${url} -> ${res.status}, message: ${JSON.stringify(res.data)}`);
            return res;
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                console.error(`-----[API][ERROR] ${method} ${url} -> ${err.response.status}`);
                console.error('Response body:', err.response.data);
                return err.response;
            }
            //console.error(`-----[API][ERROR] ${method} ${url} ->`, (err as Error).message);
            throw err;
        }
    }

    public async GET<T = any>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return this.request<T>('GET', url, undefined, config);
    }

    public async POST<T = any>(
        url: string,
        body: any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return this.request<T>('POST', url, body, config);
    }

    public async PUT<T = any>(
        url: string,
        body: any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return this.request<T>('PUT', url, body, config);
    }

    public async DELETE<T = any>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return this.request<T>('DELETE', url, undefined, config);
    }
}
