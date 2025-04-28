import { expect } from 'chai';
import {JsonPlaceHolderApiService} from "../../apiObjects/jsonPlaceHolder/jsonPlaceHolderApi.service.js";

describe(`★ JsonPlaceholder API – PUT /posts`, function () {
    const jsonApi = new JsonPlaceHolderApiService();

    it('should return status 200 and a post object', async function () {
        const postId = '77';
        const response = await jsonApi.deletePosts(postId);
        expect(response.status).to.equal(200);
    });
});