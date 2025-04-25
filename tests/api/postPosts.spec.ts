import { expect } from 'chai';
import {JsonPlaceHolderApiService} from "../../apiService/jsonPlaceHolder/jsonPlaceHolderApi.service.js";
import {JsonPlaceHolderBody} from "../../apiService/jsonPlaceHolder/jsonPlaceHolderBody.js";

describe(`★ JsonPlaceholder API – POST /posts`, function () {
    const jsonApi = new JsonPlaceHolderApiService();
    const body = new JsonPlaceHolderBody()

    it('should return status 201 and a verify created post', async function () {
        const title = 'test title - regression test';
        const postsBody = 'test posts body - regression test';
        const userId = 9;
        const getRequestBody = await body.postPostsBody(title, postsBody, userId);
        const response = await jsonApi.postPosts(getRequestBody);  //fake create
        expect(response.status).to.equal(201);

        /*  Verify created post
       The POST /posts endpoint only simulates creating a post; it doesn’t actually create one.
       const postId = response.data.id;
       const responseGetPost = await jsonApi.getPosts(postId);
       expect(responseGetPost.data.userId).to.equal(userId);
       expect(responseGetPost.data.id).to.equal(postId);
       expect(responseGetPost.data.title).to.equal(title);
       expect(responseGetPost.data.body).to.equal(postsBody);
        */
    });
});