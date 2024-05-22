// 服务器响应的对象  DTO  Data Transfer Object
interface Article {
  id: string;
  title: string;
  content: string;
  publishDate: Date;
  userId: string;
  categoryId: string;
}
// 创建文章时的对象  DTO  Data Transfer Object
interface CreateArticleOptions {
  title: string;
  content: string;
  categoryId: string;
}

// 界面上展示的对象  VO  View Object
type ArticleView = {};
