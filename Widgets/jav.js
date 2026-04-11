// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday",
  title: "JAVDay",
  description: "获取 JAVDay 推荐",
  author: "flyme",
  site: "https://javday.app",
  version: "1.5.2",
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
  return match ? normalizeUrl(match[1]) : "";
}

// 核心解析函数：参考 capyplays 的 parseHtml，但适配 javday 的 class
function parseVideoList(html, context) {
  const items = [];
  const docId = Widget.dom.parse(html);
  try {
    // JAVDay 的视频卡片使用 .videoBox，外层容器 .video-wrapper
    const videoBoxes = Widget.dom.select(docId, ".video-wrapper .videoBox");
    console.log(`parseVideoList: 找到 ${videoBoxes.length} 个视频卡片`);

    for (let i = 0; i < videoBoxes.length; i++) {
      const box = videoBoxes[i];
      // 获取链接（videoBox 自身的 href 属性）
      let link = Widget.dom.attr(box, "href");
      if (!link) continue;
      link = normalizeUrl(link);

      // 获取标题：在 .videoBox-info .title 内
      const titleNodes = Widget.dom.select(box, ".videoBox-info .title");
      if (titleNodes.length === 0) continue;
      const title = Widget.dom.text(titleNodes[0]).trim();
      if (!title) continue;

      // 获取封面：.videoBox-cover 的 style 背景图
      const coverNodes = Widget.dom.select(box, ".videoBox-cover");
      let poster = "";
      if (coverNodes.length > 0) {
        const styleAttr = Widget.dom.attr(coverNodes[0], "style");
        poster = getCoverImgFromStyle(styleAttr);
      }

      items.push({
        id: link,
        title: title,
        posterUrl: poster,
        backdropUrl: poster,
        previewUrl: "",
        link: link,
        mediaType: "movie",
        description: context || "来自 JAVDay",
      });
    }
  } finally {
    Widget.dom.remove(docId);
  }
  return items;
}

// 从 URL 提取分类 ID（用于构建人气排序路径）
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
    const items = parseVideoList(html, `排序:${sort_by === "new" ? "最新" : "人气"}`);

    // 人气路径无数据时降级
    if (items.length === 0 && sort_by === "popular") {
      console.warn(`${CONFIG.LOG_PREFIX} 人气路径无数据，降级到普通路径`);
      const fallbackUrl = buildPageUrl(url, "new", page);
      const fallbackHtml = await fetchHtml(fallbackUrl, url);
      return parseVideoList(fallbackHtml, "排序:最新(人气降级)");
    }
    return items;
  } catch (error) {
    if (sort_by === "popular") {
      console.warn(`${CONFIG.LOG_PREFIX} 人气路径请求失败，尝试降级`, error.message);
      const fallbackUrl = buildPageUrl(url, "new", page);
      const fallbackHtml = await fetchHtml(fallbackUrl, url);
      return parseVideoList(fallbackHtml, "排序:最新(人气降级)");
    }
    throw error;
  }
}

async function search(params = {}) {
  const { keyword, from: page = 1 } = params;
  if (!keyword) throw new Error("请输入搜索关键词");

  // 注意：JAVDay 的搜索 URL 格式为 /search/wd/关键词/，页码在第二页后加 /page/数字/
  const encodedKeyword = encodeURIComponent(keyword);
  let searchUrl;
  if (page == 1) {
    searchUrl = `${CONFIG.BASE_URL}/search/wd/${encodedKeyword}/`;
  } else {
    searchUrl = `${CONFIG.BASE_URL}/search/wd/${encodedKeyword}/page/${page}/`;
  }

  const html = await fetchHtml(searchUrl);
  const items = parseVideoList(html, `搜索: ${keyword}`);
  return items;
}

// 从详情页 HTML 提取视频源（支持多种常见模式）
function extractVideoUrlFromHtml(html) {
  // 1. DPlayer 配置中的 video url
  let match = html.match(/new DPlayer\([\s\S]*?video\s*:\s*{\s*[^}]*url\s*:\s*['"]([^'"]+)['"]/);
  if (match && match[1]) return match[1];

  // 2. 直接的 m3u8 链接
  match = html.match(/(https?:\/\/[^"'\s]+\.m3u8[^"'\s]*)/);
  if (match && match[1]) return match[1];

  // 3. video 标签的 src
  match = html.match(/<video[^>]+src=["']([^"']+\.m3u8[^"']*)["']/);
  if (match && match[1]) return match[1];

  // 4. iframe 播放器
  match = html.match(/<iframe[^>]+src=["']([^"']+player[^"']+)["']/);
  if (match && match[1]) return normalizeUrl(match[1]);

  return null;
}

async function loadDetail(link) {
  try {
    link = normalizeUrl(link);
    var html = await fetchHtml(link);

    var videoUrl = null;

    // 1. DPlayer new DPlayer({ ... url: '...' ... })
    var dpMatch = html.match(/new\s+DPlayer\s*\([\s\S]*?url\s*:\s*['"]([^'"]+)['"]/);
    if (dpMatch && dpMatch[1]) {
      videoUrl = dpMatch[1];
    }

    // 2. 裸 m3u8 URL
    if (!videoUrl) {
      var m3u8Match = html.match(/['"](https?:\/\/[^'"]+\.m3u8[^'"]*)['"]/);
      if (m3u8Match && m3u8Match[1]) {
        videoUrl = m3u8Match[1];
      }
    }

    // 3. <video src="..."> / <source src="...">
    if (!videoUrl) {
      var vsMatch = html.match(/<(?:video|source)[^>]+src\s*=\s*['"]([^'"]+)['"]/i);
      if (vsMatch && vsMatch[1]) {
        videoUrl = vsMatch[1];
      }
    }

    if (!videoUrl) {
      throw new Error("无法找到视频源");
    }

    // 提取标题
    var titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    var title = titleMatch ? titleMatch[1].replace(/\s*[-|｜].*$/, "").trim() : "";

    console.log("loadDetail: videoUrl=" + (videoUrl ? "found" : "missing") + " title=" + title);

    return {
      title:    title,
      videoUrl: videoUrl,
      customHeaders: {
        "Referer":    link,
        "User-Agent": UA,
      },
    };
  } catch (err) {
    console.error("loadDetail error: " + err.message);
    throw err;
  }
}
