import {ApiService} from "../api.service.ts";
import {JsonPlaceHolderUrl} from "./jsonPlaceHolderUrl.ts";

export class JsonPlaceHolderApiService extends ApiService{
     url = new JsonPlaceHolderUrl();

    public async getPosts(postId: string) {
        return this.GET(await this.url.getPostsUrl(postId));
    }

    public async postPosts(body: object) {
        return this.POST(await this.url.postPostsUrl(), body);
    }

    public async putPosts(postId: string, body: object) {
        return this.PUT(await this.url.putPostsUrl(postId), body);
    }

    public async deletePosts(postId: string) {
        return this.DELETE(await this.url.putPostsUrl(postId));
    }
}