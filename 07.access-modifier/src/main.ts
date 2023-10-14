class Post {
  private id: number = 0;
  protected title: string = "";
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }

  getPost() {
    return `postId: ${this.id}, Posttitle: ${this.title}`;
  }
}

class PostB extends Post {
  getPost() {
    return this.title;
  }
}
const post: Post = new Post(1, "title 1");
