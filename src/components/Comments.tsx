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
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://giscus.app') return;

      const { data } = event;
      if (data && typeof data === 'object') {
        const message = data as GiscusMessage;

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

    // 检测系统暗色模式
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

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
    script.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    script.setAttribute('data-lang', 'zh-CN');
    script.crossOrigin = 'anonymous';
    script.async = true;

    const comments = document.getElementById('comments');
    if (comments) {
      comments.innerHTML = '';
      comments.appendChild(script);
    }

    // 监听系统主题变化
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (e: MediaQueryListEvent) => {
      const theme = e.matches ? 'dark' : 'light';
      const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
      if (iframe) {
        iframe.contentWindow?.postMessage(
          { giscus: { setConfig: { theme } } },
          'https://giscus.app'
        );
      }
    };

    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      window.removeEventListener('message', handleMessage);
      mediaQuery.removeEventListener('change', handleThemeChange);
      const comments = document.getElementById('comments');
      if (comments) {
        comments.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 w-full">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">评论</h2>
      <div id="comments" className="giscus"></div>
    </div>
  );
};
