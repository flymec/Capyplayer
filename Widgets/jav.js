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

var BASE_URL = "https://javday.app";
var UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36";

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

// == Network ==================================================================

async function fetchHtml(url) {
  var response = await Widget.http.get(url, {
    headers: {
      "User-Agent": UA,
      "Referer":    BASE_URL,
    },
  });
  if (!response || !response.ok) {
    throw new Error("HTTP " + (response ? response.status : "?") + " - " + url);
  }
  if (typeof response.data !== "string" || response.data.length === 0) {
    throw new Error("响应内容为空: " + url);
  }
  return response.data;
}

// == HTML Parsing (Widget.dom) ================================================

/**
 * 从 style 属性字符串中提取 background-image url
 * e.g. "background-image: url('https://...')"
 */
function extractBgImgUrl(style) {
  if (!style) return "";
  var match = style.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
  return (match && match[1]) ? normalizeUrl(match[1]) : "";
}

/**
 * 解析列表页 HTML，提取视频卡片
 * JAVDay 结构：<a class="videoBox" href="...">
 *   <div class="videoBox-cover" style="background-image:url(...)"></div>
 *   <div class="videoBox-info"><div class="title">...</div></div>
 * </a>
 */
function parseHtml(htmlContent) {
  var items = [];
  var docId = Widget.dom.parse(htmlContent);

  try {
    var cardNodes = Widget.dom.select(docId, ".videoBox");
    console.log("parseHtml: found " + cardNodes.length + " cards");

    for (var i = 0; i < cardNodes.length; i++) {
      var cardDocId = Widget.dom.parse(cardNodes[i].outerHtml);
      try {
        // 链接取自卡片根节点 <a href="...">
        var rootNodes = Widget.dom.select(cardDocId, "a.videoBox, .videoBox");
        var link = "";
        if (rootNodes.length > 0) {
          link = Widget.dom.attr(rootNodes[0], "href") || "";
        }

        // 标题
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

        // 封面（background-image in style）
        var coverNodes = Widget.dom.select(cardDocId, ".videoBox-cover");
        var poster = "";
        if (coverNodes.length > 0) {
          var style = Widget.dom.attr(coverNodes[0], "style") || "";
          poster = extractBgImgUrl(style);
        }

        // 如果没拿到封面，尝试 img[src] / img[data-src]
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
    var html = await fetchHtml(targetUrl);
    var items = parseHtml(html);

    // 人气路径返回空时降级
    if (items.length === 0 && sortBy === "popular") {
      console.warn("loadPage: 人气路径无数据，降级到普通路径");
      var fallbackPath = buildPageUrl(baseUrl, "new", page);
      var fallbackHtml = await fetchHtml(normalizeUrl(fallbackPath));
      return parseHtml(fallbackHtml);
    }

    return items;
  } catch (err) {
    if (sortBy === "popular") {
      console.warn("loadPage: 人气路径失败，降级: " + err.message);
      try {
        var fbPath = buildPageUrl(baseUrl, "new", page);
        var fbHtml = await fetchHtml(normalizeUrl(fbPath));
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

// 辅助函数：从 HTML 字符串或 DOM 对象提取视频 m3u8 地址
function extractVideoUrlFromHtml(html) {
  var videoUrl = null;
  
  // 策略1：匹配 DPlayer 的 url 配置
  var dpMatch = html.match(/url\s*:\s*['"]([^'"]*\.m3u8[^'"]*)['"]/i);
  if (dpMatch && dpMatch[1]) {
    videoUrl = dpMatch[1];
    console.log("提取自 DPlayer url:", videoUrl);
    return videoUrl;
  }
  
  // 策略2：从 HTML 注释中提取（页面中有 <!-- https://...m3u8 -->）
  var commentMatch = html.match(/<!--\s*(https?:\/\/[^\s]+\.m3u8[^\s]*)\s*-->/i);
  if (commentMatch && commentMatch[1]) {
    videoUrl = commentMatch[1];
    console.log("提取自注释:", videoUrl);
    return videoUrl;
  }
  
  // 策略3：全局搜索 m3u8 链接
  var globalMatch = html.match(/https?:\/\/[^"'\s]+\.m3u8[^"'\s]*/i);
  if (globalMatch) {
    videoUrl = globalMatch[0];
    console.log("提取自全局搜索:", videoUrl);
    return videoUrl;
  }
  
  return videoUrl;
}

// 主详情加载函数（替换原 loadDetail）
async function loadDetail(link) {
  try {
    // 确保链接完整
    var fullLink = normalizeUrl(link);
    
    // 获取详情页 HTML
    var html = await fetchHtml(fullLink);
    
    // 提取视频地址
    var videoUrl = extractVideoUrlFromHtml(html);
    if (!videoUrl) {
      throw new Error("未找到播放地址");
    }
    
    // 确保 URL 绝对化
    videoUrl = normalizeUrl(videoUrl);
    
    // 提取标题（与原脚本逻辑一致）
    var titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    var title = titleMatch ? titleMatch[1].replace(/\s*[\|｜].*$/, "").trim() : "";
    
    // 构建请求头（重点：添加 Range 头解决 404）
    var videoHeaders = {
      "Referer": fullLink,
      "Origin": BASE_URL,
      "User-Agent": UA,
      "Range": "bytes=0-",          // 关键！缺少此头会导致 CDN 返回 404
      "Accept": "*/*",
      "Accept-Language": "zh-CN,zh;q=0.9"
    };
    
    // 可选：预检视频地址可用性（仅用于调试）
    try {
      var testRes = await Widget.http.get(videoUrl, {
        headers: videoHeaders
      });
      console.log("视频地址预检状态码: " + testRes.status);
    } catch (e) {
      console.warn("预检失败，但播放器可能仍能工作: " + e.message);
    }
    
    // 返回符合 Widget 规范的结构
    return {
      title: title,
      videoUrl: videoUrl,
      customHeaders: videoHeaders,
      playUrls: [{
        title: "HD",
        url: videoUrl,
        headers: videoHeaders
      }]
    };
  } catch (err) {
    console.error("loadDetail error: " + err.message);
    throw err;
  }
}
