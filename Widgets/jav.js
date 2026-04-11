// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday",
  title: "JAVDay",
  description: "获取 JAVDay 推荐",
  author: "flyme",
  site: "https://javday.app",
  version: "1.6.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      title: "搜索视频",
      description: "搜索JAVDay视频库",
      requiresWebView: false,
      functionName: "search",
      cacheDuration: 3600,
      params: [
        {
          name: "keyword",
          title: "女優/番號/關鍵字搜索…",
          type: "input",
          value: "",
          description: "女優/番號/關鍵字搜索…",
        },
        { name: "from", title: "页码", type: "page", description: "搜索结果页码" }
      ]
    },
    {
      title: "最新更新",
      description: "浏览最新更新视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/label/new/" },
        { name: "from", title: "页码", type: "page" }
      ]
    },
    {
      title: "人气系列",
      description: "浏览人气系列视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/label/hot/" },
        { name: "from", title: "页码", type: "page" }
      ]
    },
    {
      title: "新作上市",
      description: "浏览新作上市视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/new-release/" },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "new"
        },
        { name: "from", title: "页码", type: "page" }
      ]
    },
    {
      title: "有码视频",
      description: "浏览有码分类视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/censored/" },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "popular"
        },
        { name: "from", title: "页码", type: "page" }
      ]
    },
    {
      title: "无码视频",
      description: "浏览无码分类视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/uncensored/" },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "new"
        },
        { name: "from", title: "页码", type: "page" }
      ]
    },
    {
      title: "无码流出",
      description: "浏览无码流出视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/uncensored-leaked/" },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "new"
        },
        { name: "from", title: "页码", type: "page" }
      ]
    },
    {
      title: "杏吧视频",
      description: "浏览杏吧分类视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/sex8/" },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "popular"
        },
        { name: "from", title: "页码", type: "page" }
      ]
    },
    {
      title: "玩偶姐姐",
      description: "浏览玩偶姐姐视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/hongkongdoll/" },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "popular"
        },
        { name: "from", title: "页码", type: "page" }
      ]
    },
    {
      title: "国产 AV",
      description: "浏览国产 AV视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", title: "列表地址", type: "constant", value: "https://javday.app/category/chinese-av/" },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "popular"
        },
        { name: "from", title: "页码", type: "page" }
      ]
    },
    {
      title: "国产厂商",
      description: "按厂商标签浏览国产厂商视频",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url", title: "厂商选择", type: "enumeration",
          enumOptions: [
            { title: "麻豆传媒", value: "https://javday.app/index.php/category/madou/" },
            { title: "果冻传媒", value: "https://javday.app/index.php/category/91zhipianchang/" },
            { title: "天美传媒", value: "https://javday.app/index.php/category/timi/" },
            { title: "星空无限", value: "https://javday.app/index.php/category/xingkong/" },
            { title: "皇家华人", value: "https://javday.app/index.php/category/royalasianstudio/" },
            { title: "蜜桃影像", value: "https://javday.app/index.php/category/mtgw/" },
            { title: "精东影业", value: "https://javday.app/index.php/category/jdav/" },
            { title: "台湾 AV", value: "https://javday.app/index.php/category/twav/" },
            { title: "JVID", value: "https://javday.app/index.php/category/jvid/" },
            { title: "萝莉社", value: "https://javday.app/index.php/category/luolisheus/" },
            { title: "糖心VLOG", value: "https://javday.app/index.php/category/txvlog/" },
            { title: "Psychoporn TW", value: "https://javday.app/index.php/category/psychoporn-tw/" }
          ],
          value: "https://javday.app/index.php/category/madou/",
        },
        {
          name: "sort_by", title: "排序方式", type: "enumeration",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          value: "new"
        },
        { name: "from", title: "页码", type: "page" }
      ]
    }
  ]
};

// == Constants ================================================================
const CONFIG = {
  BASE_URL: "https://javday.app",
  USER_AGENT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
  LOG_PREFIX: "JAVDay Widget -",
  TIMEOUT: 10000,
};

// == Utility Functions ========================================================

async function fetchHtml(url, referer = CONFIG.BASE_URL) {
  const response = await Widget.http.get(url, {
    headers: {
      "User-Agent": CONFIG.USER_AGENT,
      "Referer": referer,
    },
    timeout: CONFIG.TIMEOUT,
  });
  if (!response || !response.ok) {
    throw new Error(`HTTP ${response ? response.status : "?"} - ${url}`);
  }
  if (typeof response.data !== "string" || response.data.length === 0) {
    throw new Error(`无法获取有效的 HTML 内容: ${url}`);
  }
  return response.data;
}

function normalizeUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("//")) return `https:${url}`;
  const base = CONFIG.BASE_URL.replace(/\/+$/, "");
  const path = url.startsWith("/") ? url : `/${url}`;
  return (base + path).replace(/([^:]\/)\/+/g, "$1");
}

function getCoverImgFromStyle(styleAttr) {
  if (!styleAttr) return "";
  const match = styleAttr.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
  if (!match || !match[1]) return "";
  return normalizeUrl(match[1]);
}

// 核心解析函数，模仿 capyplays 的 parseHtml，但适配 JAVDay 的 DOM 结构
function parseHtml(htmlContent, context = "来自 JAVDay") {
  const items = [];
  const docId = Widget.dom.parse(htmlContent);
  try {
    // 尝试多个可能的选择器（按优先级）
    let cardSelector = ".video-wrapper .videoBox";
    let cards = Widget.dom.select(docId, cardSelector);
    if (cards.length === 0) {
      cardSelector = ".videoBox";
      cards = Widget.dom.select(docId, cardSelector);
    }
    if (cards.length === 0) {
      cardSelector = ".item";
      cards = Widget.dom.select(docId, cardSelector);
    }
    console.log(`${CONFIG.LOG_PREFIX} parseHtml: 使用选择器 "${cardSelector}" 找到 ${cards.length} 个卡片`);

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const link = Widget.dom.attr(card, "href");
      if (!link) continue;

      // 解析卡片内部
      const cardHtml = Widget.dom.outerHtml(card);
      const cardDoc = Widget.dom.parse(cardHtml);
      try {
        // 标题：优先 .videoBox-info .title，其次 .title a，最后 .title
        let titleElem = Widget.dom.select(cardDoc, ".videoBox-info .title")[0];
        if (!titleElem) titleElem = Widget.dom.select(cardDoc, ".title a")[0];
        if (!titleElem) titleElem = Widget.dom.select(cardDoc, ".title")[0];
        if (!titleElem) continue;
        const title = Widget.dom.text(titleElem).trim();
        if (!title) continue;

        // 封面图：从 style 背景图获取
        let imgSrc = "";
        const coverDiv = Widget.dom.select(cardDoc, ".videoBox-cover")[0];
        if (coverDiv) {
          const styleAttr = Widget.dom.attr(coverDiv, "style");
          imgSrc = getCoverImgFromStyle(styleAttr);
        }
        // 备选：从 img 标签的 data-src 或 src 获取
        if (!imgSrc) {
          const img = Widget.dom.select(cardDoc, "img")[0];
          if (img) {
            imgSrc = Widget.dom.attr(img, "data-src") || Widget.dom.attr(img, "src") || "";
            imgSrc = normalizeUrl(imgSrc);
          }
        }

        items.push({
          id: `${i}|${link}`,
          title: title,
          posterUrl: imgSrc,
          backdropUrl: imgSrc,
          previewUrl: "",
          link: normalizeUrl(link),
          mediaType: "movie",
          description: context,
        });
      } finally {
        Widget.dom.remove(cardDoc);
      }
    }
  } finally {
    Widget.dom.remove(docId);
  }
  console.log(`${CONFIG.LOG_PREFIX} parseHtml: 共解析出 ${items.length} 个视频`);
  return items;
}

function extractCategoryId(url) {
  const parts = url.split("/").filter(p => p && p !== "index.php");
  return parts.pop() || "unknown";
}

function buildPageUrl(baseUrl, sortBy, page) {
  const cleanBase = baseUrl.replace(/\/+$/, "").replace(/\/page\/\d+$/, "");
  const id = extractCategoryId(cleanBase);
  const isLabel = cleanBase.includes("/label/");

  let path;
  if (sortBy === "popular") {
    path = `/fiter/by/hits/id/${id}/`;
  } else {
    path = isLabel ? `/label/${id}/` : `/category/${id}/`;
  }

  if (cleanBase.includes("index.php")) {
    path = `/index.php${path}`;
  }

  if (page > 1) {
    path += `page/${page}/`;
  }

  return path.startsWith("http") ? path : `${CONFIG.BASE_URL}${path}`;
}

// == Core Functions ===========================================================

async function loadPage(params = {}) {
  const { url, sort_by = "new", from: page = 1 } = params;
  if (!url) throw new Error("缺少 URL 参数");

  let targetUrl;
  if (sort_by === "popular") {
    targetUrl = buildPageUrl(url, "popular", page);
  } else {
    targetUrl = buildPageUrl(url, "new", page);
  }

  try {
    const html = await fetchHtml(targetUrl, url);
    const items = parseHtml(html, `排序:${sort_by === "new" ? "最新" : "人气"}`);

    if (items.length === 0 && sort_by === "popular") {
      console.warn(`${CONFIG.LOG_PREFIX} 人气路径无数据，降级到普通路径`);
      const fallbackUrl = buildPageUrl(url, "new", page);
      const fallbackHtml = await fetchHtml(fallbackUrl, url);
      return parseHtml(fallbackHtml, "排序:最新(人气降级)");
    }
    return items;
  } catch (error) {
    if (sort_by === "popular") {
      console.warn(`${CONFIG.LOG_PREFIX} 人气路径请求失败，尝试降级`, error.message);
      const fallbackUrl = buildPageUrl(url, "new", page);
      const fallbackHtml = await fetchHtml(fallbackUrl, url);
      return parseHtml(fallbackHtml, "排序:最新(人气降级)");
    }
    throw error;
  }
}

async function search(params = {}) {
  const { keyword, from: page = 1 } = params;
  if (!keyword) throw new Error("请输入搜索关键词");

  const encodedKeyword = encodeURIComponent(keyword);
  // 优先尝试异步块请求（模仿 capyplays 的搜索方式）
  let searchUrl = `${CONFIG.BASE_URL}/search/wd/${encodedKeyword}/`;
  if (page > 1) {
    searchUrl = `${CONFIG.BASE_URL}/search/wd/${encodedKeyword}/page/${page}/`;
  }

  // 可选：尝试添加异步参数（如果站点支持）
  // 有些站点会返回完整 HTML，直接使用即可
  console.log(`${CONFIG.LOG_PREFIX} 搜索 URL: ${searchUrl}`);
  const html = await fetchHtml(searchUrl);
  const items = parseHtml(html, `搜索: ${keyword}`);
  return items;
}

function extractVideoUrlFromHtml(html) {
  // 1. 匹配 DPlayer 中的 url
  const dplayerRegex = /new DPlayer\([\s\S]*?video\s*:\s*{\s*[^}]*url\s*:\s*['"]([^'"]+)['"]/;
  let match = html.match(dplayerRegex);
  if (match && match[1]) return match[1];

  // 2. 直接匹配 .m3u8 地址
  const m3u8Regex = /(https?:\/\/[^"'\s]+\.m3u8[^"'\s]*)/;
  match = html.match(m3u8Regex);
  if (match && match[1]) return match[1];

  // 3. video 标签 src
  const videoSrcRegex = /<video[^>]+src=["']([^"']+\.m3u8[^"']*)["']/;
  match = html.match(videoSrcRegex);
  if (match && match[1]) return match[1];

  // 4. iframe 中的播放器
  const iframeRegex = /<iframe[^>]+src=["']([^"']+player[^"']+)["']/;
  match = html.match(iframeRegex);
  if (match && match[1]) return normalizeUrl(match[1]);

  return null;
}

async function loadDetail(link) {
  const fullLink = normalizeUrl(link);
  const html = await fetchHtml(fullLink, fullLink);

  const videoUrl = extractVideoUrlFromHtml(html);
  if (!videoUrl) throw new Error("无法找到视频源");

  let title = "";
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (titleMatch && titleMatch[1]) {
    title = titleMatch[1].replace(/\s*[\|｜]\s*JAVDay.*$/i, "").trim();
  }

  const headers = {
    Referer: fullLink,
    "User-Agent": CONFIG.USER_AGENT,
  };

  return {
    title: title,
    videoUrl: videoUrl,
    customHeaders: headers,
    playUrls: [
      {
        title: "HD",
        url: videoUrl,
        headers: headers,
      },
    ],
  };
}
