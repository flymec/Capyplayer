// == Metadata =================================================================
var WidgetMetadata = {
id: “ti.bemarkt.javday”,
title: “JAVDay”,
description: “获取 JAVDay 推荐”,
author: “flyme”,
site: “https://javday.app”,
version: “1.6.0”,
requiredVersion: “0.0.1”,
detailCacheDuration: 60,
modules: [
{
title: “搜索视频”,
description: “搜索JAVDay视频库”,
requiresWebView: false,
functionName: “search”,
cacheDuration: 3600,
params: [
{
name: “keyword”,
title: “女優/番號/關鍵字搜索…”,
type: “string”,
value: “”,
description: “女優/番號/關鍵字搜索…”,
},
{ name: “page”, title: “页码”, type: “page”, description: “搜索结果页码” },
],
},
{
title: “最新更新”,
description: “浏览最新更新视频”,
requiresWebView: false,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{ name: “url”, title: “列表地址”, type: “constant”, value: “https://javday.app/label/new/” },
{ name: “page”, title: “页码”, type: “page” },
],
},
{
title: “人气系列”,
description: “浏览人气系列视频”,
requiresWebView: false,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{ name: “url”, title: “列表地址”, type: “constant”, value: “https://javday.app/label/hot/” },
{ name: “page”, title: “页码”, type: “page” },
],
},
{
title: “新作上市”,
description: “浏览新作上市视频”,
requiresWebView: false,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{ name: “url”, title: “列表地址”, type: “constant”, value: “https://javday.app/category/new-release/” },
{
name: “sort_by”, title: “排序方式”, type: “enumeration”,
enumOptions: [
{ title: “最新上架”, value: “new” },
{ title: “人气最高”, value: “popular” },
],
value: “new”,
},
{ name: “page”, title: “页码”, type: “page” },
],
},
{
title: “有码视频”,
description: “浏览有码分类视频”,
requiresWebView: false,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{ name: “url”, title: “列表地址”, type: “constant”, value: “https://javday.app/category/censored/” },
{
name: “sort_by”, title: “排序方式”, type: “enumeration”,
enumOptions: [
{ title: “最新上架”, value: “new” },
{ title: “人气最高”, value: “popular” },
],
value: “popular”,
},
{ name: “page”, title: “页码”, type: “page” },
],
},
{
title: “无码视频”,
description: “浏览无码分类视频”,
requiresWebView: false,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{ name: “url”, title: “列表地址”, type: “constant”, value: “https://javday.app/category/uncensored/” },
{
name: “sort_by”, title: “排序方式”, type: “enumeration”,
enumOptions: [
{ title: “最新上架”, value: “new” },
{ title: “人气最高”, value: “popular” },
],
value: “new”,
},
{ name: “page”, title: “页码”, type: “page” },
],
},
{
title: “无码流出”,
description: “浏览无码流出视频”,
requiresWebView: false,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{ name: “url”, title: “列表地址”, type: “constant”, value: “https://javday.app/category/uncensored-leaked/” },
{
name: “sort_by”, title: “排序方式”, type: “enumeration”,
enumOptions: [
{ title: “最新上架”, value: “new” },
{ title: “人气最高”, value: “popular” },
],
value: “new”,
},
{ name: “page”, title: “页码”, type: “page” },
],
},
{
title: “杏吧视频”,
description: “浏览杏吧分类视频”,
requiresWebView: false,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{ name: “url”, title: “列表地址”, type: “constant”, value: “https://javday.app/category/sex8/” },
{
name: “sort_by”, title: “排序方式”, type: “enumeration”,
enumOptions: [
{ title: “最新上架”, value: “new” },
{ title: “人气最高”, value: “popular” },
],
value: “popular”,
},
{ name: “page”, title: “页码”, type: “page” },
],
},
{
title: “玩偶姐姐”,
description: “浏览玩偶姐姐视频”,
requiresWebView: false,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{ name: “url”, title: “列表地址”, type: “constant”, value: “https://javday.app/category/hongkongdoll/” },
{
name: “sort_by”, title: “排序方式”, type: “enumeration”,
enumOptions: [
{ title: “最新上架”, value: “new” },
{ title: “人气最高”, value: “popular” },
],
value: “popular”,
},
{ name: “page”, title: “页码”, type: “page” },
],
},
{
title: “国产 AV”,
description: “浏览国产 AV 视频”,
requiresWebView: false,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{ name: “url”, title: “列表地址”, type: “constant”, value: “https://javday.app/category/chinese-av/” },
{
name: “sort_by”, title: “排序方式”, type: “enumeration”,
enumOptions: [
{ title: “最新上架”, value: “new” },
{ title: “人气最高”, value: “popular” },
],
value: “popular”,
},
{ name: “page”, title: “页码”, type: “page” },
],
},
{
title: “国产厂商”,
description: “按厂商标签浏览国产厂商视频”,
requiresWebView: false,
functionName: “loadPage”,
cacheDuration: 3600,
params: [
{
name: “url”, title: “厂商选择”, type: “enumeration”,
enumOptions: [
{ title: “麻豆传媒”,       value: “https://javday.app/index.php/category/madou/” },
{ title: “果冻传媒”,       value: “https://javday.app/index.php/category/91zhipianchang/” },
{ title: “天美传媒”,       value: “https://javday.app/index.php/category/timi/” },
{ title: “星空无限”,       value: “https://javday.app/index.php/category/xingkong/” },
{ title: “皇家华人”,       value: “https://javday.app/index.php/category/royalasianstudio/” },
{ title: “蜜桃影像”,       value: “https://javday.app/index.php/category/mtgw/” },
{ title: “精东影业”,       value: “https://javday.app/index.php/category/jdav/” },
{ title: “台湾 AV”,       value: “https://javday.app/index.php/category/twav/” },
{ title: “JVID”,          value: “https://javday.app/index.php/category/jvid/” },
{ title: “萝莉社”,         value: “https://javday.app/index.php/category/luolisheus/” },
{ title: “糖心VLOG”,       value: “https://javday.app/index.php/category/txvlog/” },
{ title: “Psychoporn TW”,  value: “https://javday.app/index.php/category/psychoporn-tw/” },
],
value: “https://javday.app/index.php/category/madou/”,
},
{
name: “sort_by”, title: “排序方式”, type: “enumeration”,
enumOptions: [
{ title: “最新上架”, value: “new” },
{ title: “人气最高”, value: “popular” },
],
value: “new”,
},
{ name: “page”, title: “页码”, type: “page” },
],
},
],
};

// == 常量 =====================================================================

var BASE_URL = “https://javday.app”;
var UA = “Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36”;

// == 工具函数 =================================================================

function normalizeUrl(url) {
if (!url) return “”;
if (url.indexOf(“http://”) === 0 || url.indexOf(“https://”) === 0) return url;
if (url.indexOf(”//”) === 0) return “https:” + url;
var base = BASE_URL.replace(//+$/, “”);
var path = url.indexOf(”/”) === 0 ? url : “/” + url;
return base + path;
}

function extractBgUrl(styleAttr) {
if (!styleAttr) return “”;
var match = styleAttr.match(/url(\s*[’”]?([^’”)]+)[’”]?\s*)/);
return (match && match[1]) ? normalizeUrl(match[1]) : “”;
}

function extractSlug(url) {
var parts = url.replace(//+$/, “”).split(”/”).filter(function(p) {
return p && p !== “index.php”;
});
return parts[parts.length - 1] || “”;
}

function buildTargetUrl(baseUrl, sortBy, page) {
var cleanBase = baseUrl.replace(//+$/, “”).replace(//page/\d+$/, “”);
var slug      = extractSlug(cleanBase);
var isLabel   = cleanBase.indexOf(”/label/”) !== -1;
var hasIndex  = cleanBase.indexOf(“index.php”) !== -1;

var path;
if (sortBy === “popular”) {
path = “/fiter/by/hits/id/” + slug + “/”;
} else {
path = isLabel ? “/label/” + slug + “/” : “/category/” + slug + “/”;
}

if (hasIndex) { path = “/index.php” + path; }
if (page > 1) { path += “page/” + page + “/”; }

return BASE_URL + path;
}

// == HTML 解析（Widget.dom）==================================================

function parseVideoList(htmlContent, context) {
context = context || “来自 JAVDay”;
var items = [];
var docId = Widget.dom.parse(htmlContent);

try {
var cards = Widget.dom.select(docId, “.video-wrapper .videoBox”);
console.log(“parseVideoList: found “ + cards.length + “ cards”);

```
for (var i = 0; i < cards.length; i++) {
  var card = cards[i];

  // 卡片本身是 <a href="/videos/xxx/">，直接从节点取 href
  var link = normalizeUrl(Widget.dom.attr(card, "href") || "");

  var cardDocId = Widget.dom.parse(card.outerHtml);
  try {
    var titleNodes = Widget.dom.select(cardDocId, ".videoBox-info .title");
    if (titleNodes.length === 0) {
      titleNodes = Widget.dom.select(cardDocId, ".title");
    }
    var coverNodes = Widget.dom.select(cardDocId, ".videoBox-cover");

    if (!link || titleNodes.length === 0) {
      console.log("parseVideoList: skip[" + i + "] link=" + link + " titles=" + titleNodes.length);
      continue;
    }

    var title = Widget.dom.text(titleNodes[0]).trim();
    if (!title) continue;

    var poster = "";
    if (coverNodes.length > 0) {
      poster = extractBgUrl(Widget.dom.attr(coverNodes[0], "style") || "");
    }

    items.push({
      id:          link,
      title:       title,
      posterUrl:   poster,
      backdropUrl: poster,
      link:        link,
      mediaType:   "movie",
      description: context,
    });
  } finally {
    Widget.dom.remove(cardDocId);
  }
}
```

} finally {
Widget.dom.remove(docId);
}

return items;
}

// == 网络请求 =================================================================

async function fetchHtml(url, referer) {
referer = referer || BASE_URL;
var response = await Widget.http.get(url, {
headers: {
“User-Agent”: UA,
“Referer”:    referer,
“Accept”:     “text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8”,
},
});

if (!response || !response.ok) {
throw new Error(“HTTP “ + (response ? response.status : “?”) + “ - “ + url);
}
if (typeof response.data !== “string” || response.data.length === 0) {
throw new Error(“无法获取有效的 HTML 内容: “ + url);
}
return response.data;
}

// == 数据源函数 ================================================================

async function loadPage(params) {
params = params || {};
var baseUrl = params.url;
var sortBy  = params.sort_by || “new”;
var page    = parseInt(params.page, 10) || 1;

if (!baseUrl) { throw new Error(“缺少 URL 参数”); }

var targetUrl = buildTargetUrl(baseUrl, sortBy, page);

try {
var html  = await fetchHtml(targetUrl, baseUrl);
var items = parseVideoList(html, “排序:” + (sortBy === “new” ? “最新” : “人气”));
console.log(“loadPage: “ + items.length + “ items from “ + targetUrl);

```
if (items.length === 0 && sortBy === "popular") {
  console.warn("loadPage: 人气路径无数据，降级到最新排序");
  var fallbackUrl  = buildTargetUrl(baseUrl, "new", page);
  var fallbackHtml = await fetchHtml(fallbackUrl, baseUrl);
  return parseVideoList(fallbackHtml, "排序:最新(人气降级)");
}

return items;
```

} catch (err) {
if (sortBy === “popular”) {
console.warn(“loadPage: 人气路径失败，降级到最新排序 -”, err.message);
var fallbackUrl2  = buildTargetUrl(baseUrl, “new”, page);
var fallbackHtml2 = await fetchHtml(fallbackUrl2, baseUrl);
return parseVideoList(fallbackHtml2, “排序:最新(人气降级)”);
}
console.error(“loadPage error:”, err.message);
return [];
}
}

async function search(params) {
params = params || {};
var keyword = params.keyword || “”;
var page    = parseInt(params.page, 10) || 1;

if (!keyword) { throw new Error(“请输入搜索关键词”); }

var encoded = encodeURIComponent(keyword);
var url = BASE_URL + “/search/wd/” + encoded + “/”;
if (page > 1) { url += “page/” + page + “/”; }

try {
var html  = await fetchHtml(url);
var items = parseVideoList(html, “搜索: “ + keyword);
console.log(“search: “ + items.length + “ items for [” + keyword + “] page=” + page);
return items;
} catch (err) {
console.error(“search error:”, err.message);
return [];
}
}

async function loadDetail(link) {
try {
var fullLink = normalizeUrl(link);
var html     = await fetchHtml(fullLink, fullLink);

```
var videoUrl = null;

// 1. 从 DPlayer video: { ... } 块中提取 url（[\s\S] 跨行匹配）
var videoBlockMatch = html.match(/video\s*:\s*\{([\s\S]{0,300}?)\}/);
if (videoBlockMatch) {
  var urlMatch = videoBlockMatch[1].match(/url\s*:\s*['"]([^'"]+)['"]/);
  if (urlMatch && urlMatch[1]) {
    videoUrl = urlMatch[1];
  }
}

// 2. 降级：页面中任意 .m3u8 地址
if (!videoUrl) {
  var m3u8Match = html.match(/['"\s](https?:\/\/[^'">\s]+\.m3u8[^'">\s]*)/);
  if (m3u8Match && m3u8Match[1]) {
    videoUrl = m3u8Match[1].trim();
  }
}

// 3. 降级：<video src> / <source src>
if (!videoUrl) {
  var srcMatch = html.match(/<(?:video|source)[^>]+src=['"]([^'"]+)['"]/i);
  if (srcMatch && srcMatch[1]) {
    videoUrl = srcMatch[1];
  }
}

if (!videoUrl) {
  throw new Error("无法找到视频源，页面结构可能已变更");
}

// CDN 域名（javday.homes）与页面域名（javday.app）不同
// Referer 需用 CDN 域，否则返回 404
var cdnReferer = fullLink;
var originMatch = videoUrl.match(/^(https?:\/\/[^\/]+)/);
if (originMatch && originMatch[1]) {
  cdnReferer = originMatch[1] + "/";
}

// 提取标题，只在非空时返回，避免覆盖列表页已有标题
var titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
var title = titleMatch
  ? titleMatch[1].replace(/\s*[\|｜]\s*JAVDAY.*$/i, "").trim()
  : "";

console.log("loadDetail: videoUrl=" + videoUrl + " cdnReferer=" + cdnReferer + " title=" + title);

var result = {
  videoUrl: videoUrl,
  customHeaders: {
    "Referer":    cdnReferer,
    "User-Agent": UA,
  },
};
if (title) { result.title = title; }
return result;
```

} catch (err) {
console.error(“loadDetail error:”, err.message);
throw err;
}
}
