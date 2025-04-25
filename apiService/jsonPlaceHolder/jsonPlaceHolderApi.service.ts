import {ApiService} from "../api.service";
import {JsonPlaceHolderUrl} from "./jsonPlaceHolderUrl";
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