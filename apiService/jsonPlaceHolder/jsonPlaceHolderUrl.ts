export class JsonPlaceHolderUrl {

    private async getBaseUrl() {
        return process.env.JSON_PLACEHOLDER_BASE_URL!;
    }

    async getUsersUrl() {
        return await this.getBaseUrl() + `/users`
    }

    async getPostsUrl(postId: string) {
        return await this.getBaseUrl() + `/posts/${postId}`;
    }
}