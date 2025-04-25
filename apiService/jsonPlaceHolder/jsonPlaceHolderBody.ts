export class JsonPlaceHolderBody {

    async postPostsBody(title: string, body: string, userId: number) {
        return {
            title: `${title}`,
            body: `${body}`,
            userId: `${userId}`,
        }
    }
}