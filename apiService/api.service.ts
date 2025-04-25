import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class ApiService {
    private client: AxiosInstance;

    constructor(defaultHeaders: Record<string,string> = {}) {
        this.client = axios.create({
            headers: defaultHeaders,
        });
    }

    private async request<T>(
        method: 'GET' | 'POST' | 'PUT' | 'DELETE',
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
        return this.client.request<T>({
            url,
            method,
            data,
            ...config,
        });
    }

    public async GET<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const res = await this.request<T>('GET', url, undefined, config);
        console.log(`-----[API] GET ${url} -> ${res.status}`);
        return res;
    }

    public async POST<T = any>(url: string, body: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const res = await this.request<T>('POST', url, body, config);
        console.log(`-----[API] GET ${url} -> ${res.status}`);
        return res;
    }

    public async PUT<T = any>(url: string, body: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const res = await this.request<T>('PUT', url, body, config);
        console.log(`-----[API] GET ${url} -> ${res.status}`);
        return res;
    }

    public async DELETE<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const res = await this.request<T>('DELETE', url, undefined, config);
        console.log(`-----[API] GET ${url} -> ${res.status}`);
        return res;
    }
}
