export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  avatar?: string;
}

// 示例评论数据
export const comments: Comment[] = [
  {
    id: '1',
    author: '设计师小王',
    content: '感谢分享这些免费字体！思源黑体在我的项目中用得很多，确实很好用。',
    date: '2024-12-29',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
  },
  {
    id: '2',
    author: '小红',
    content: '霞鹜文楷的字形很优雅，特别适合文章排版。',
    date: '2024-12-28',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka'
  }
];
