export class Post {
  private _id: number;
  private _title: string;
  private _body: string;

  constructor(post: PostInterface) {
    this._id = post.id;
    this._title = post.title;
    this._body = post.body;
  }

  getId(): number {
    return this._id;
  }

  getTitle(): string {
    return this._title;
  }

  getBody(): string {
    return this._body;
  }
}

export interface PostInterface {
  id: number;
  title: string;
  body: string;
}
