import { expect } from 'chai';
import {JsonPlaceHolderApiService} from "../../apiService/jsonPlaceHolder/jsonPlaceHolderApi.service.js";

describe(`★ JsonPlaceholder API – GET /posts/:id`, function () {
    const jsonApi = new JsonPlaceHolderApiService();

    it('should return status 200 and a post object', async function () {
        const response = await jsonApi.getPosts('1');
        expect(response.status).to.equal(200);
        expect(response.data).to.be.an('object');
        expect(response.data).to.have.property('id', 1);
    });
});