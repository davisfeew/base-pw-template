export class JsonPlaceHolderUrl {

    private async getBaseUrl() {
        return process.env.JSON_PLACEHOLDER_BASE_URL!;
    }

    async getPostsUrl(postId: string) {
        return await this.getBaseUrl() + `/posts/${postId}`;
    }

    async postPostsUrl() {
        return await this.getBaseUrl() + `/posts`;
    }

    async putPostsUrl(postId: string) {
        return await this.getBaseUrl() + `/posts/${postId}`;
    }
}