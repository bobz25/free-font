export interface FontData {
  name: string;
  description: string;
  downloadUrl: {
    official: string;
    lanzhouCloud?: string;
  };
  category: string[];
  previewImage?: string;
}

export interface UpdateLog {
  date: string;
  changes: string[];
}

export const fonts: FontData[] = [
  {
    name: "思源黑体",
    description: "Adobe 与 Google 联合开发的开源字体，支持中日韩文字。",
    downloadUrl: {
      official: "https://github.com/adobe-fonts/source-han-sans/releases",
    },
    category: ["黑体", "Sans-serif", "开源", "中文简体"]
  },
  {
    name: "霞鹜文楷",
    description: "优雅的开源中文文楷字体，适合正文排版。",
    downloadUrl: {
      official: "https://github.com/lxgw/LxgwWenKai/releases",
    },
    previewImage: "https://raw.githubusercontent.com/lxgw/LxgwWenKai/main/documentation/wenkai-1.png",
    category: ["楷体", "开源", "中文简体"]
  },
  {
    name: "OPPO Sans",
    description: "OPPO 定制的品牌字体，可免费商用。",
    downloadUrl: {
      official: "https://www.oppo.com/content/dam/oppo/common/fonts/font-download.html",
    },
    category: ["Sans-serif", "品牌字体", "中文简体"]
  },
  {
    name: "思源宋体",
    description: "由 Adobe 和 Google 联合开发的开源宋体字体，支持多种语言。",
    downloadUrl: {
      official: "https://github.com/adobe-fonts/source-han-serif/releases",
    },
    category: ["宋体", "Serif", "开源", "中文简体"]
  },
  {
    name: "阿里巴巴普惠体",
    description: "阿里巴巴推出的一款现代简约的免费商用字体。",
    downloadUrl: {
      official: "https://alibabafont.taobao.com/wow/alibabafont/act/alifont",
      lanzhouCloud: "https://wwxz.lanzn.com/iB0Q72ktmnda"
    },
    category: ["黑体", "Sans-serif", "品牌字体", "中文简体"]
  },
  {
    name: "得意黑",
    description: "开源的中文可变字体，支持字重和宽度的变化。",
    downloadUrl: {
      official: "https://github.com/atelier-anchor/smiley-sans/releases",
    },
    category: ["黑体", "可变字体", "开源", "中文简体"]
  },
  {
    name: "MiSans",
    description: "小米公司设计的现代简约字体，支持多种字重。",
    downloadUrl: {
      official: "https://web.vip.miui.com/page/info/mio/mio/detail?postId=33935854",
    },
    category: ["Sans-serif", "品牌字体", "中文简体"]
  },
  {
    name: "Noto Sans SC",
    description: "Google 开发的 Noto 字体系列中的简体中文版本。",
    downloadUrl: {
      official: "https://fonts.google.com/noto/specimen/Noto+Sans+SC",
    },
    category: ["Sans-serif", "开源", "中文简体"]
  },
  {
    name: "站酷高端黑",
    description: "站酷文艺体，由字体设计师刘兵克确定字形和规范，由刘兵克工作室以及刘兵克字体设计直播课学员共同创作完成，设计师郑庆科完成了最终的字库生成工作。字形新颖独特，简洁有力，清新淡雅，文艺范十足。",
    downloadUrl: {
      official: "https://www.zcool.com.cn/special/zcoolfonts/",
    },
    previewImage: "https://img.zcool.cn/special-resource/zcoolfonts/assets/img/t7.png",
    category: ["黑体", "设计字体", "中文简体"]
  },
  {
    name: "站酷仓耳渔阳体",
    description: "仓耳字库在2020新冠疫情期间为造福社会奉上的一份礼物，也是站酷冠名的首款拥有家族字体的公益字库。字形结合宋、黑二体的结构特点，将部分笔画转折处做圆角处理，方圆结合，厚重又不失灵动。家族字体包含5个字重，均可免费商用，2020年9月发布第一版。",
    downloadUrl: {
      official: "https://www.zcool.com.cn/special/zcoolfonts/",
      lanzhouCloud: "https://wwxz.lanzn.com/ijVuq2kth91e"
    },
    previewImage: "https://img.zcool.cn/special-resource/zcoolfonts/assets/img/t0.png",
    category: ["宋体", "黑体", "设计字体", "中文简体"]
  },
  {
    name: "方正黑体",
    description: "方正字库推出的免费商用黑体字体。",
    downloadUrl: {
      official: "https://www.foundertype.com/index.php/FindFont/searchFont?keyword=方正黑体",
    },
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
