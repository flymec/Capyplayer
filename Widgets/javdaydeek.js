// == Metadata =================================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday",
  title: "JAVDay",
  description: "获取 JAVDay 推荐（修复 404 问题）",
  author: "flyme",
  site: "https://javday.app",
  version: "1.6.3",
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

var BASE_URL = "https://javday.app";
var UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36";
var COOKIE_KEY = "javday_cookie";

// == Cookie 管理 ===============================================================

function getStoredCookie() {
  try {
    return Widget.storage.get(COOKIE_KEY, "");
  } catch (e) {
    return "";
  }
}

function setStoredCookie(cookie) {
  try {
    Widget.storage.set(COOKIE_KEY, cookie);
  } catch (e) {}
}

// 从响应头中提取 Cookie（简单实现，只取第一个 Set-Cookie）
function extractCookieFromResponse(response) {
  if (!response || !response.headers) return "";
  var setCookie = response.headers["Set-Cookie"] || response.headers["set-cookie"];
  if (!setCookie) return "";
  // 取第一个 cookie 的分号前部分（名称=值）
  var cookiePart = setCookie.split(";")[0];
  return cookiePart || "";
}

// == Network ==================================================================

async function fetchHtml(url, referer) {
  var headers = {
    "User-Agent": UA,
    "Referer": referer || BASE_URL,
    "Origin": BASE_URL,
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
  };
  
  var storedCookie = getStoredCookie();
  if (storedCookie) {
    headers["Cookie"] = storedCookie;
  }
  
  var response = await Widget.http.get(url, { headers: headers });
  
  // 如果响应中有新的 Set-Cookie，保存起来
  var newCookie = extractCookieFromResponse(response);
  if (newCookie) {
    setStoredCookie(newCookie);
  }
  
  if (!response || !response.ok) {
    throw new Error("HTTP " + (response ? response.status : "?") + " - " + url);
  }
  if (typeof response.data !== "string" || response.data.length === 0) {
    throw new Error("响应内容为空: " + url);
  }
  return response.data;
}

// == Utility Functions ========================================================

function normalizeUrl(url) {
  if (!url) return "";
  if (url.indexOf("http://") === 0 || url.indexOf("https://") === 0) return url;
  if (url.indexOf("//") === 0) return "https:" + url;
  var base = BASE_URL.replace(/\/+$/, "");
  var path = url.indexOf("/") === 0 ? url : "/" + url;
  return (base + path).replace(/([^:]\/)\/+/g, "$1");
}

function extractCategoryId(url) {
  var parts = url.split("/").filter(function(p) { return p && p !== "index.php"; });
  return parts.pop() || "unknown";
}

function buildPageUrl(baseUrl, sortBy, page) {
  var cleanBase = baseUrl.replace(/\/+$/, "").replace(/\/page\/\d+$/, "");
  var id = extractCategoryId(cleanBase);
  var isLabel = cleanBase.indexOf("/label/") !== -1;
  var hasIndexPhp = cleanBase.indexOf("index.php") !== -1;

  var path;
  if (sortBy === "popular") {
    path = "/fiter/by/hits/id/" + id + "/";
  } else {
    path = isLabel ? ("/label/" + id + "/") : ("/category/" + id + "/");
  }

  if (hasIndexPhp) {
    path = "/index.php" + path;
  }

  if (page > 1) {
    path += "page/" + page + "/";
  }

  return path;
}

// == HTML Parsing (Widget.dom) ================================================

function extractBgImgUrl(style) {
  if (!style) return "";
  var match = style.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
  return (match && match[1]) ? normalizeUrl(match[1]) : "";
}

function parseHtml(htmlContent) {
  var items = [];
  var docId = Widget.dom.parse(htmlContent);

  try {
    var cardNodes = Widget.dom.select(docId, ".videoBox");
    console.log("parseHtml: found " + cardNodes.length + " cards");

    for (var i = 0; i < cardNodes.length; i++) {
      var cardDocId = Widget.dom.parse(cardNodes[i].outerHtml);
      try {
        var rootNodes = Widget.dom.select(cardDocId, "a.videoBox, .videoBox");
        var link = "";
        if (rootNodes.length > 0) {
          link = Widget.dom.attr(rootNodes[0], "href") || "";
        }

        var titleNodes = Widget.dom.select(cardDocId, ".videoBox-info .title, .title");
        if (titleNodes.length === 0) {
          Widget.dom.remove(cardDocId);
          continue;
        }
        var title = Widget.dom.text(titleNodes[0]).trim();
        if (!title) {
          Widget.dom.remove(cardDocId);
          continue;
        }

        var coverNodes = Widget.dom.select(cardDocId, ".videoBox-cover");
        var poster = "";
        if (coverNodes.length > 0) {
          var style = Widget.dom.attr(coverNodes[0], "style") || "";
          poster = extractBgImgUrl(style);
        }

        if (!poster) {
          var imgNodes = Widget.dom.select(cardDocId, "img");
          for (var j = 0; j < imgNodes.length; j++) {
            var src = Widget.dom.attr(imgNodes[j], "data-src") ||
                      Widget.dom.attr(imgNodes[j], "src") || "";
            if (src) { poster = normalizeUrl(src); break; }
          }
        }

        link = normalizeUrl(link);
        if (!link) {
          Widget.dom.remove(cardDocId);
          continue;
        }

        items.push({
          id:          link,
          title:       title,
          posterUrl:   poster,
          backdropUrl: poster,
          link:        link,
          mediaType:   "movie",
        });
      } finally {
        Widget.dom.remove(cardDocId);
      }
    }
  } finally {
    Widget.dom.remove(docId);
  }

  console.log("parseHtml: returning " + items.length + " items");
  return items;
}

// == Core Functions ===========================================================

async function loadPage(params) {
  params = params || {};
  var baseUrl = params.url;
  var sortBy  = params.sort_by || "new";
  var page    = parseInt(params.page, 10) || 1;

  if (!baseUrl) {
    console.error("loadPage: 缺少 url 参数");
    return [];
  }

  var path = buildPageUrl(baseUrl, sortBy, page);
  var targetUrl = normalizeUrl(path);

  try {
    var html = await fetchHtml(targetUrl, baseUrl);
    var items = parseHtml(html);

    if (items.length === 0 && sortBy === "popular") {
      console.warn("loadPage: 人气路径无数据，降级到普通路径");
      var fallbackPath = buildPageUrl(baseUrl, "new", page);
      var fallbackHtml = await fetchHtml(normalizeUrl(fallbackPath), baseUrl);
      return parseHtml(fallbackHtml);
    }

    return items;
  } catch (err) {
    if (sortBy === "popular") {
      console.warn("loadPage: 人气路径失败，降级: " + err.message);
      try {
        var fbPath = buildPageUrl(baseUrl, "new", page);
        var fbHtml = await fetchHtml(normalizeUrl(fbPath), baseUrl);
        return parseHtml(fbHtml);
      } catch (fbErr) {
        console.error("loadPage: 降级也失败: " + fbErr.message);
        return [];
      }
    }
    console.error("loadPage error: " + err.message);
    return [];
  }
}

async function search(params) {
  params = params || {};
  var keyword = params.keyword || "";
  var page    = parseInt(params.page, 10) || 1;

  if (!keyword) {
    console.error("search: 请输入搜索关键词");
    return [];
  }

  var encoded = encodeURIComponent(keyword);
  var url = BASE_URL + "/search/wd/" + encoded + "/";
  if (page > 1) {
    url += "page/" + page + "/";
  }

  try {
    var html = await fetchHtml(url);
    return parseHtml(html);
  } catch (err) {
    console.error("search error: " + err.message);
    return [];
  }
}

/**
 * 从 DPlayer 脚本内容中精确提取视频 URL
 * @param {string} scriptHtml 脚本 HTML 内容
 * @returns {string|null}
 */
function extractVideoUrlFromDPlayerScript(scriptHtml) {
  if (!scriptHtml) return null;
  var match = scriptHtml.match(/video\s*:\s*{\s*[^}]*url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/);
  if (match && match[1]) return match[1];
  match = scriptHtml.match(/url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/);
  if (match && match[1]) return match[1];
  return null;
}

/**
 * 从完整 HTML 中提取视频地址（优先 DPlayer 脚本）
 * @param {string} html 详情页 HTML
 * @returns {string|null}
 */
function extractVideoUrlFromHtml(html) {
  var scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  var match;
  while ((match = scriptRegex.exec(html)) !== null) {
    var scriptContent = match[1];
    if (scriptContent && scriptContent.indexOf("new DPlayer") !== -1) {
      var url = extractVideoUrlFromDPlayerScript(scriptContent);
      if (url) return url;
    }
  }

  var directMatch = html.match(/url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/);
  if (directMatch && directMatch[1]) return directMatch[1];

  var commentMatch = html.match(/<!--[^>]*?(https?:\/\/[^\s'">]+\.m3u8)/);
  if (commentMatch && commentMatch[1]) return commentMatch[1];

  var srcMatch = html.match(/<source[^>]+src\s*=\s*['"]([^'"]+\.m3u8[^'"]*)['"]/i);
  if (srcMatch && srcMatch[1]) return srcMatch[1];

  return null;
}

/**
 * 提取标题（优先 h1.video-title）
 */
function extractTitleFromHtml(html) {
  var titleMatch = html.match(/<h1[^>]*class="[^"]*video-title[^"]*"[^>]*>([\s\S]*?)<\/h1>/i);
  if (titleMatch && titleMatch[1]) {
    return titleMatch[1].replace(/\s*[-|｜–]\s*JAVDAY.*$/i, "").trim();
  }
  var genericMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (genericMatch && genericMatch[1]) {
    return genericMatch[1].replace(/\s*[-|｜–]\s*JAVDAY.*$/i, "").trim();
  }
  return "";
}

/**
 * 提取封面图（优先 og:image）
 */
function extractPosterFromHtml(html) {
  var ogMatch = html.match(/property=["']og:image["'][^>]*content=["']([^'"]+)["']/i)
             || html.match(/content=["']([^'"]+)["'][^>]*property=["']og:image["']/i);
  if (ogMatch && ogMatch[1]) return normalizeUrl(ogMatch[1]);

  var styleMatch = html.match(/\.videoBox-cover[^>]*style\s*=\s*["'][^"']*url\(['"]?([^'")]+)['"]?\)/i);
  if (styleMatch && styleMatch[1]) return normalizeUrl(styleMatch[1]);

  return "";
}

/**
 * 修复可能的随机子域名：将 *.javday.homes 替换为 javday.homes
 */
function fixM3u8Domain(url) {
  if (!url) return url;
  return url.replace(/\/\/[^\/]+\.javday\.homes\//, "//javday.homes/");
}

// 最终版 loadDetail：精确提取 + 完整信息 + 正确请求头 + 重试 + Cookie
async function loadDetail(link) {
  const MAX_RETRIES = 2;
  let lastError = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      link = normalizeUrl(link);
      console.log(`loadDetail 尝试 ${attempt}: ${link}`);

      // 每次尝试都重新获取 HTML，以防签名刷新
      const html = await fetchHtml(link, link);

      let videoUrl = extractVideoUrlFromHtml(html);
      if (!videoUrl) {
        throw new Error("未找到 m3u8 地址");
      }

      // 修复域名
      videoUrl = fixM3u8Domain(videoUrl);
      videoUrl = normalizeUrl(videoUrl);

      const title = extractTitleFromHtml(html);
      const posterUrl = extractPosterFromHtml(html);

      console.log(`提取到 videoUrl: ${videoUrl}`);

      return {
        title: title,
        posterUrl: posterUrl,
        backdropUrl: posterUrl,
        videoUrl: videoUrl,
        customHeaders: {
          "Referer": link,
          "Origin": BASE_URL,
          "User-Agent": UA,
          "Accept": "*/*",
          "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
        }
      };
    } catch (err) {
      console.error(`loadDetail 尝试 ${attempt} 失败: ${err.message}`);
      lastError = err;
      if (attempt < MAX_RETRIES) {
        // 等待 1 秒再重试
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }
  throw lastError || new Error("无法获取视频地址");
}
