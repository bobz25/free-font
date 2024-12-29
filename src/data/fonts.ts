export interface FontData {
  name: string;
  description: string;
  downloadUrl: string;
  previewImage: string;
  category: string[];
}

export interface UpdateLog {
  date: string;
  changes: string[];
}

export const fonts: FontData[] = [
  {
    name: "思源黑体",
    description: "Adobe 与 Google 联合开发的开源字体，支持中日韩文字。",
    downloadUrl: "https://github.com/adobe-fonts/source-han-sans/releases",
    previewImage: "https://raw.githubusercontent.com/adobe-fonts/source-han-sans/master/README-images/SourceHanSans.png",
    category: ["黑体", "Sans-serif", "开源"]
  },
  {
    name: "霞鹜文楷",
    description: "优雅的开源中文文楷字体，适合正文排版。",
    downloadUrl: "https://github.com/lxgw/LxgwWenKai/releases",
    previewImage: "https://raw.githubusercontent.com/lxgw/LxgwWenKai/main/documentation/wenkai-1.png",
    category: ["楷体", "开源"]
  },
  {
    name: "OPPO Sans",
    description: "OPPO 定制的品牌字体，可免费商用。",
    downloadUrl: "https://www.oppo.com/content/dam/oppo/common/fonts/font-download.html",
    previewImage: "https://www.oppo.com/content/dam/oppo/common/fonts/font-banner.jpg.webp",
    category: ["Sans-serif", "品牌字体"]
  },
  {
    name: "思源宋体",
    description: "由 Adobe 和 Google 联合开发的开源宋体字体，支持多种语言。",
    downloadUrl: "https://github.com/adobe-fonts/source-han-serif/releases",
    previewImage: "https://raw.githubusercontent.com/adobe-fonts/source-han-serif/master/README-images/SourceHanSerif.png",
    category: ["宋体", "Serif", "开源"]
  },
  {
    name: "阿里巴巴普惠体",
    description: "阿里巴巴推出的一款现代简约的免费商用字体。",
    downloadUrl: "https://alibabafont.taobao.com/wow/alibabafont/act/alifont",
    previewImage: "https://img.alicdn.com/imgextra/i4/O1CN01FT0OIH1nGgE5Ej6Zl_!!6000000005071-2-tps-2880-1070.png",
    category: ["黑体", "Sans-serif", "品牌字体"]
  },
  {
    name: "得意黑",
    description: "开源的中文可变字体，支持字重和宽度的变化。",
    downloadUrl: "https://github.com/atelier-anchor/smiley-sans/releases",
    previewImage: "https://raw.githubusercontent.com/atelier-anchor/smiley-sans/main/docs/assets/hero.png",
    category: ["黑体", "可变字体", "开源"]
  },
  {
    name: "MiSans",
    description: "小米公司设计的现代简约字体，支持多种字重。",
    downloadUrl: "https://web.vip.miui.com/page/info/mio/mio/detail?postId=33935854",
    previewImage: "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-sans/font-preview.png",
    category: ["Sans-serif", "品牌字体"]
  },
  {
    name: "Noto Sans SC",
    description: "Google 开发的 Noto 字体系列中的简体中文版本。",
    downloadUrl: "https://fonts.google.com/noto/specimen/Noto+Sans+SC",
    previewImage: "https://www.google.com/get/noto/images/social/noto-share.png",
    category: ["Sans-serif", "开源"]
  },
  {
    name: "站酷高端黑",
    description: "站酷网发布的免费商用字体，简洁有力。",
    downloadUrl: "https://www.zcool.com.cn/special/zcoolfonts/",
    previewImage: "https://static.zcool.cn/v3/zcool-gt/public/appcss/font/ZCOOL.jpg",
    category: ["黑体", "设计字体"]
  },
  {
    name: "方正黑体",
    description: "方正字库推出的免费商用黑体字体。",
    downloadUrl: "https://www.foundertype.com/index.php/FindFont/searchFont?keyword=方正黑体",
    previewImage: "https://www.foundertype.com/Public/img/hot/hot01.jpg",
    category: ["黑体", "商业字体"]
  }
];

export const updateLogs: UpdateLog[] = [
  {
    date: "2024-12-29",
    changes: [
      "🎉 网站正式上线",
      "✨ 添加10款精选免费商用字体",
      "🏷️ 支持按字体分类筛选",
      "💅 优化字体展示卡片样式",
      "📱 适配多种屏幕尺寸"
    ]
  },
  {
    date: "2024-12-28",
    changes: [
      "🚀 项目初始化",
      "📐 完成基础布局设计",
      "🎨 设计字体展示卡片样式"
    ]
  }
];
