import { expect } from 'chai';
import {JsonPlaceHolderApiService} from "../../apiService/jsonPlaceHolder/jsonPlaceHolderApi.service.js";
import {JsonPlaceHolderBody} from "../../apiService/jsonPlaceHolder/jsonPlaceHolderBody.js";

describe(`★ JsonPlaceholder API – PUT /posts`, function () {
    const jsonApi = new JsonPlaceHolderApiService();
    const body = new JsonPlaceHolderBody()

    it('should return status 200 and a post object', async function () {
        const postId = '77';
        const response = await jsonApi.deletePosts(postId);
        expect(response.status).to.equal(200);
    });
});