import { useEffect } from 'react';

interface GiscusMessage {
  giscus: {
    discussion: {
      id: string;
      url: string;
      totalComments: number;
      totalReplies: number;
    };
    comment: {
      id: string;
      url: string;
      author: {
        name: string;
        avatar: string;
      };
      content: string;
      createdAt: string;
    };
  };
}

export const Comments: React.FC = () => {
  useEffect(() => {
    // 添加消息监听器
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://giscus.app') return;

      const { data } = event;
      if (data && typeof data === 'object') {
        const message = data as GiscusMessage;

        // 处理不同类型的消息
        switch (data.giscus?.discussion) {
          case 'discussion:loaded':
            console.log('评论已加载');
            break;
          case 'comment:created': {
            console.log('新评论已创建');
            const { author, content, createdAt } = message.giscus.comment;
            console.log('评论详情:', {
              author: author.name,
              content,
              createdAt
            });
            break;
          }
          case 'comment:replied':
            console.log('评论已回复');
            break;
        }
      }
    };

    window.addEventListener('message', handleMessage);

    // 初始化 giscus
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'bobz25/free-font');
    script.setAttribute('data-repo-id', 'R_kgDONjgmEA');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDONjgmEM4ClltN');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '1');
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
      window.removeEventListener('message', handleMessage);
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
