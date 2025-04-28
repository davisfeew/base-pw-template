import { expect } from 'chai';
import {JsonPlaceHolderApiService} from "../../apiObjects/jsonPlaceHolder/jsonPlaceHolderApi.service.js";

describe(`★ JsonPlaceholder API – GET /posts/:id`, function () {
    const jsonApi = new JsonPlaceHolderApiService();

    it('should return status 200 and a post object', async function () {
        const postId = 1;
        const response = await jsonApi.getPosts(postId.toString());
        expect(response.status).to.equal(200);
        expect(response.data).to.be.an('object');
        expect(response.data).to.have.property('id', postId);
        expect(response.data).to.have.property('userId');
        expect(response.data).to.have.property('title');
        expect(response.data).to.have.property('body');
    });
});