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

async function loadDetail(link) {
  const fullLink = normalizeUrl(link);
  const html = await httpGet(fullLink, fullLink);
  const $ = Widget.html.load(html);

  const videoUrl = extractVideoUrl($);
  if (!videoUrl) throw new Error("无法找到视频源");

  return {
    id: fullLink,
    type: "url",
    videoUrl: videoUrl,
    customHeaders: {
      Referer: fullLink,
      "User-Agent": CONFIG.USER_AGENT,
    },
  };
}
