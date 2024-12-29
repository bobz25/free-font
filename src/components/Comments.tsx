import { useEffect } from 'react';

export const Comments: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'bobz25/free-font');  // 替换为你的 GitHub 仓库
    script.setAttribute('data-repo-id', ''); // 需要替换为你的仓库 ID
    script.setAttribute('data-category', 'Comments');
    script.setAttribute('data-category-id', ''); // 需要替换为你的分类 ID
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'zh-CN');
    script.crossOrigin = 'anonymous';
    script.async = true;

    const comments = document.getElementById('comments');
    if (comments) {
      comments.appendChild(script);
    }

    return () => {
      const comments = document.getElementById('comments');
      if (comments) {
        comments.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="comments-section">
      <h2>评论</h2>
      <div id="comments"></div>
    </div>
  );
};
