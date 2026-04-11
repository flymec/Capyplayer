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
          type: "string",
          value: "",
          description: "女優/番號/關鍵字搜索…",
        },
        { name: "page", title: "页码", type: "page", description: "搜索结果页码" }
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
        { name: "page", title: "页码", type: "page" }
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
        { name: "page", title: "页码", type: "page" }
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
        { name: "page", title: "页码", type: "page" }
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
        { name: "page", title: "页码", type: "page" }
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
        { name: "page", title: "页码", type: "page" }
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
        { name: "page", title: "页码", type: "page" }
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
        { name: "page", title: "页码", type: "page" }
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
        { name: "page", title: "页码", type: "page" }
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
        { name: "page", title: "页码", type: "page" }
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
            { title: "台湾 AV",  value: "https://javday.app/index.php/category/twav/" },
            { title: "JVID",    value: "https://javday.app/index.php/category/jvid/" },
            { title: "萝莉社",   value: "https://javday.app/index.php/category/luolisheus/" },
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
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

// == Constants ================================================================

// == Constants ================================================================
const CONFIG = {
  BASE_URL: "https://javday.app",
  USER_AGENT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
  LOG_PREFIX: "JAVDay Widget -",
  TIMEOUT: 10000,
};

// == Utility Functions ========================================================

/**
 * 发送 HTTP GET 请求（封装错误处理和 headers）
 * @param {string} url 请求地址
 * @param {string} referer Referer 头，默认使用 BASE_URL
 * @returns {Promise<string>} HTML 内容
 */
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

/**
 * 将相对 URL 转换为绝对 URL
 * @param {string} url 原始 URL
 * @returns {string} 绝对 URL
 */
function normalizeUrl(url) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("//")) return `https:${url}`;
  const base = CONFIG.BASE_URL.replace(/\/+$/, "");
  const path = url.startsWith("/") ? url : `/${url}`;
  return (base + path).replace(/([^:]\/)\/+/g, "$1");
}

/**
 * 从元素的 style 属性中提取背景图片 URL
 * @param {string} styleAttr style 属性值
 * @returns {string} 图片 URL
 */
function getCoverImgFromStyle(styleAttr) {
  if (!styleAttr) return "";
  const match = styleAttr.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
  if (!match || !match[1]) return "";
  return normalizeUrl(match[1]);
}

/**
 * 解析视频列表页的 DOM，提取视频项（使用 Widget.dom）
 * @param {string} html HTML 内容
 * @param {string} context 描述信息（用于返回值）
 * @returns {Array} 视频项数组
 */
function parseVideoList(html, context = "来自 JAVDay") {
  const items = [];
  const docId = Widget.dom.parse(html);
  try {
    const videoBoxes = Widget.dom.select(docId, ".video-wrapper .videoBox");
    for (let i = 0; i < videoBoxes.length; i++) {
      const box = videoBoxes[i];
      const link = Widget.dom.attr(box, "href");
      if (!link) continue;

      // 解析内部子元素
      const boxHtml = Widget.dom.outerHtml(box);
      const boxDoc = Widget.dom.parse(boxHtml);
      try {
        const titleElem = Widget.dom.select(boxDoc, ".videoBox-info .title")[0];
        if (!titleElem) continue;
        const title = Widget.dom.text(titleElem).trim();
        if (!title) continue;

        // 提取封面图（从 style 背景图）
        const coverDiv = Widget.dom.select(boxDoc, ".videoBox-cover")[0];
        let imgSrc = "";
        if (coverDiv) {
          const styleAttr = Widget.dom.attr(coverDiv, "style");
          imgSrc = getCoverImgFromStyle(styleAttr);
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
        Widget.dom.remove(boxDoc);
      }
    }
  } finally {
    Widget.dom.remove(docId);
  }
  return items;
}

/**
 * 从 URL 中提取分类/标签 ID（用于构建人气排序路径）
 * @param {string} url 基础 URL
 * @returns {string} ID
 */
function extractCategoryId(url) {
  const parts = url.split("/").filter(p => p && p !== "index.php");
  return parts.pop() || "unknown";
}

/**
 * 构建分页 URL（支持排序）
 * @param {string} baseUrl 基础 URL（如分类页、标签页）
 * @param {string} sortBy 排序方式 new / popular
 * @param {number} page 页码
 * @returns {string} 完整分页 URL
 */
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

/**
 * 加载通用列表页（分类/标签/厂商）
 * @param {Object} params 参数 { url, sort_by, from }
 * @returns {Promise<Array>} 视频项数组
 */
async function loadPage(params = {}) {
  const { url, sort_by = "new", from: page = 1 } = params;
  if (!url) throw new Error("缺少 URL 参数");

  let targetUrl;
  if (sort_by === "popular") {
    const popularPath = buildPageUrl(url, "popular", page);
    targetUrl = popularPath;
  } else {
    const normalPath = buildPageUrl(url, "new", page);
    targetUrl = normalPath;
  }

  try {
    const html = await fetchHtml(targetUrl, url);
    const items = parseVideoList(html, `排序:${sort_by === "new" ? "最新" : "人气"}`);

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

/**
 * 搜索视频
 * @param {Object} params 参数 { keyword, from }
 * @returns {Promise<Array>} 视频项数组
 */
async function search(params = {}) {
  const { keyword, from: page = 1 } = params;
  if (!keyword) throw new Error("请输入搜索关键词");

  const encodedKeyword = encodeURIComponent(keyword);
  let searchUrl;
  if (page === 1) {
    searchUrl = `${CONFIG.BASE_URL}/search/wd/${encodedKeyword}/`;
  } else {
    searchUrl = `${CONFIG.BASE_URL}/search/wd/${encodedKeyword}/page/${page}/`;
  }

  const html = await fetchHtml(searchUrl);
  const items = parseVideoList(html, `搜索: ${keyword}`);
  return items;
}

/**
 * 从详情页 HTML 中提取视频源 URL（正则 + 轻量 DOM）
 * @param {string} html 详情页 HTML
 * @returns {string|null} 视频 URL
 */
function extractVideoUrlFromHtml(html) {
  // 1. 查找 DPlayer 脚本块中的 url
  const dplayerRegex = /new DPlayer\([\s\S]*?video\s*:\s*{\s*[^}]*url\s*:\s*['"]([^'"]+)['"]/;
  let match = html.match(dplayerRegex);
  if (match && match[1]) return match[1];

  // 2. 直接匹配 .m3u8 地址
  const m3u8Regex = /(https?:\/\/[^"'\s]+\.m3u8[^"'\s]*)/;
  match = html.match(m3u8Regex);
  if (match && match[1]) return match[1];

  // 3. 尝试从 video 标签中提取
  const videoSrcRegex = /<video[^>]+src=["']([^"']+\.m3u8[^"']*)["']/;
  match = html.match(videoSrcRegex);
  if (match && match[1]) return match[1];

  // 4. 尝试从 iframe 中提取（某些播放器嵌入）
  const iframeRegex = /<iframe[^>]+src=["']([^"']+player[^"']+)["']/;
  match = html.match(iframeRegex);
  if (match && match[1]) return normalizeUrl(match[1]);

  return null;
}

/**
 * 加载视频详情，提取播放地址
 * @param {string} link 视频详情页 URL
 * @returns {Promise<Object>} 视频源对象
 */
async function loadDetail(link) {
  const fullLink = normalizeUrl(link);
  const html = await fetchHtml(fullLink, fullLink);

  const videoUrl = extractVideoUrlFromHtml(html);
  if (!videoUrl) throw new Error("无法找到视频源");

  // 尝试提取标题（可选）
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
    };
  } catch (err) {
    console.error("loadDetail error: " + err.message);
    throw err;
  }
}
