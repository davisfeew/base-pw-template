import {ApiService} from "../api.service.ts";
import {JsonPlaceHolderUrl} from "./jsonPlaceHolderUrl.ts";
import {AxiosResponse} from "axios";


export class JsonPlaceHolderApiService {
     api = new ApiService();
     url = new JsonPlaceHolderUrl();

    public async getUsers(): Promise<AxiosResponse> {
        return this.api.GET(await this.url.getUsersUrl());
    }

    public async getPost(postId: string): Promise<AxiosResponse> {
        return this.api.GET(await this.url.getPostsUrl(postId));
    }
}