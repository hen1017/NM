// 模擬從資料庫取得文章清單
let posts: { title: string; content: string }[] = [];

export function addPost(post: { title: string; content: string }) {
  posts.unshift(post); // 新增在最上面
}

export function getPosts() {
  return Promise.resolve(posts); // 模擬 async fetch
}

