import { expect } from 'chai';
import {JsonPlaceHolderApiService} from "../../apiObjects/jsonPlaceHolder/jsonPlaceHolderApi.service.js";
import {JsonPlaceHolderBody} from "../../apiObjects/jsonPlaceHolder/jsonPlaceHolderBody.js";

describe(`★ JsonPlaceholder API – PUT /posts`, function () {
    const jsonApi = new JsonPlaceHolderApiService();
    const body = new JsonPlaceHolderBody()

    it('should return status 200 and a post object', async function () {
        const postId = '5';
        const title = 'test title - regression test';
        const postsBody = 'test posts body - regression test';
        const userId = 9;
        const getRequestBody = await body.postPostsBody(title, postsBody, userId);
        const response = await jsonApi.putPosts(postId, getRequestBody);  //fake create
        expect(response.status).to.equal(200);
    });
});