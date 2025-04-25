import { expect } from 'chai';
import 'dotenv/config';
import {JsonPlaceHolderApiService} from "../../apiService/jsonPlaceHolder/jsonPlaceHolderApi.service.js";

describe(`★ JSONPlaceholder API – GET /posts/:id`, function () {
    // odsud TS ví, že jsonApi je JsonPlaceHolderApiService (no implicit any)
    const jsonApi = new JsonPlaceHolderApiService();

    it('should return status 200 and a post object', async function (): Promise<void> {
        const response = await jsonApi.getPost('1');
        expect(response.status).to.equal(200);
        expect(response.data).to.be.an('object');
        expect(response.data).to.have.property('id', 1);
    });
});