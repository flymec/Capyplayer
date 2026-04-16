// == CapyPlayer 组件规范（DOM提取视频 + 标题保护）============================
var WidgetMetadata = {
  id: "ti.bemarkt.javday",
  title: "JAVDay",
  description: "获取 JAVDay 推荐",
  author: "flyme",
  site: "https://javday.app",
  version: "1.7.0",
  modules: [
    {
      id: "search",
      title: "搜索视频",
      type: "media_list",
      functionName: "search",
      cacheDuration: 3600,
      params: [
        { name: "keyword", label: "女優/番號/關鍵字", type: "string", defaultValue: "" },
        { name: "page", label: "页码", type: "page" }
      ]
    },
    {
      id: "new",
      title: "最新更新",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", defaultValue: "https://javday.app/label/new/" },
        { name: "page", label: "页码", type: "page" }
      ]
    },
    {
      id: "hot",
      title: "人气系列",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", defaultValue: "https://javday.app/label/hot/" },
        { name: "page", label: "页码", type: "page" }
      ]
    },
    {
      id: "new_release",
      title: "新作上市",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", defaultValue: "https://javday.app/category/new-release/" },
        { name: "sort_by", label: "排序方式", type: "enum", enumOptions: [{ title: "最新上架", value: "new" }, { title: "人气最高", value: "popular" }], defaultValue: "new" },
        { name: "page", label: "页码", type: "page" }
      ]
    },
    {
      id: "censored",
      title: "有码视频",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", defaultValue: "https://javday.app/category/censored/" },
        { name: "sort_by", label: "排序方式", type: "enum", enumOptions: [{ title: "最新上架", value: "new" }, { title: "人气最高", value: "popular" }], defaultValue: "popular" },
        { name: "page", label: "页码", type: "page" }
      ]
    },
    {
      id: "uncensored",
      title: "无码视频",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", defaultValue: "https://javday.app/category/uncensored/" },
        { name: "sort_by", label: "排序方式", type: "enum", enumOptions: [{ title: "最新上架", value: "new" }, { title: "人气最高", value: "popular" }], defaultValue: "new" },
        { name: "page", label: "页码", type: "page" }
      ]
    },
    {
      id: "uncensored_leaked",
      title: "无码流出",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", defaultValue: "https://javday.app/category/uncensored-leaked/" },
        { name: "sort_by", label: "排序方式", type: "enum", enumOptions: [{ title: "最新上架", value: "new" }, { title: "人气最高", value: "popular" }], defaultValue: "new" },
        { name: "page", label: "页码", type: "page" }
      ]
    },
    {
      id: "sex8",
      title: "杏吧视频",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", defaultValue: "https://javday.app/category/sex8/" },
        { name: "sort_by", label: "排序方式", type: "enum", enumOptions: [{ title: "最新上架", value: "new" }, { title: "人气最高", value: "popular" }], defaultValue: "popular" },
        { name: "page", label: "页码", type: "page" }
      ]
    },
    {
      id: "hongkongdoll",
      title: "玩偶姐姐",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", defaultValue: "https://javday.app/category/hongkongdoll/" },
        { name: "sort_by", label: "排序方式", type: "enum", enumOptions: [{ title: "最新上架", value: "new" }, { title: "人气最高", value: "popular" }], defaultValue: "popular" },
        { name: "page", label: "页码", type: "page" }
      ]
    },
    {
      id: "chinese_av",
      title: "国产 AV",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", type: "constant", defaultValue: "https://javday.app/category/chinese-av/" },
        { name: "sort_by", label: "排序方式", type: "enum", enumOptions: [{ title: "最新上架", value: "new" }, { title: "人气最高", value: "popular" }], defaultValue: "popular" },
        { name: "page", label: "页码", type: "page" }
      ]
    },
    {
      id: "chinese_factory",
      title: "国产厂商",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        { name: "url", label: "厂商选择", type: "enum", enumOptions: [
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
        ], defaultValue: "https://javday.app/index.php/category/madou/" },
        { name: "sort_by", label: "排序方式", type: "enum", enumOptions: [{ title: "最新上架", value: "new" }, { title: "人气最高", value: "popular" }], defaultValue: "new" },
        { name: "page", label: "页码", type: "page" }
      ]
    }
  ]
};

// == 核心逻辑（DOM 提取 + 标题保护）==========================================
var BASE_URL = "https://javday.app";
var UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36";

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

async function fetchHtml(url) {
  var response = await Widget.http.get(url, {
    headers: {
      "User-Agent": UA,
      "Referer": BASE_URL
    }
  });
  if (!response || !response.ok) {
    throw new Error("HTTP " + (response ? response.status : "?") + " - " + url);
  }
  if (typeof response.data !== "string" || response.data.length === 0) {
    throw new Error("响应内容为空: " + url);
  }
  return response.data;
}

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
          id: link,
          title: title,
          posterUrl: poster,
          backdropUrl: poster,
          link: link,
          mediaType: "movie"
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

async function loadPage(params) {
  params = params || {};
  var baseUrl = params.url;
  var sortBy = params.sort_by || "new";
  var page = parseInt(params.page, 10) || 1;

  if (!baseUrl) {
    console.error("loadPage: 缺少 url 参数");
    return [];
  }

  var path = buildPageUrl(baseUrl, sortBy, page);
  var targetUrl = normalizeUrl(path);

  try {
    var html = await fetchHtml(targetUrl);
    var items = parseHtml(html);

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
  var page = parseInt(params.page, 10) || 1;

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

// ---------- 基于 DOM 提取视频地址（不再使用正则）----------
function extractVideoUrlFromDoc(docId) {
  // 1. 查找所有 script 标签，寻找 new DPlayer 初始化代码
  var scripts = Widget.dom.select(docId, "script");
  for (var i = 0; i < scripts.length; i++) {
    var scriptContent = Widget.dom.text(scripts[i]) || "";
    if (scriptContent.indexOf("new DPlayer") !== -1) {
      // 在脚本内容中用正则提取 url 参数（仅作为辅助，不依赖全局正则）
      var urlMatch = scriptContent.match(/url\s*:\s*['"]([^'"]+)['"]/);
      if (urlMatch && urlMatch[1]) {
        return urlMatch[1];
      }
    }
  }

  // 2. 查找 video 标签的 src 属性
  var videoNodes = Widget.dom.select(docId, "video");
  for (var j = 0; j < videoNodes.length; j++) {
    var src = Widget.dom.attr(videoNodes[j], "src");
    if (src) return src;
  }

  // 3. 查找 source 标签的 src 属性
  var sourceNodes = Widget.dom.select(docId, "source");
  for (var k = 0; k < sourceNodes.length; k++) {
    var src = Widget.dom.attr(sourceNodes[k], "src");
    if (src) return src;
  }

  // 4. 查找 iframe 嵌入（可能包含播放器）
  var iframeNodes = Widget.dom.select(docId, "iframe");
  for (var m = 0; m < iframeNodes.length; m++) {
    var src = Widget.dom.attr(iframeNodes[m], "src");
    if (src && (src.indexOf("player") !== -1 || src.indexOf("m3u8") !== -1)) {
      return normalizeUrl(src);
    }
  }

  return null;
}

// ---------- 基于 DOM 提取标题（多级保护）----------
function extractTitleFromDoc(docId, fallbackUrl) {
  // 1. 从常见标题选择器提取
  var selectors = ["h1", ".video-title", ".entry-title", ".post-title", "title"];
  for (var i = 0; i < selectors.length; i++) {
    var nodes = Widget.dom.select(docId, selectors[i]);
    if (nodes.length > 0) {
      var text = Widget.dom.text(nodes[0]).trim();
      if (text) {
        // 如果是从 <title> 提取，移除站点后缀
        if (selectors[i] === "title") {
          text = text.replace(/\s*[-|｜].*$/, "").trim();
        }
        return text;
      }
    }
  }

  // 2. 后备：从 URL 生成标题
  var parts = fallbackUrl.split("/").filter(function(s) { return s.length > 0; });
  var lastPart = parts[parts.length - 1] || "";
  var fallbackTitle = lastPart.replace(/\.html?$/, "").replace(/-/g, " ").trim();
  return fallbackTitle || "JAVDay Video";
}

async function loadDetail(link) {
  try {
    link = normalizeUrl(link);
    var html = await fetchHtml(link);
    var docId = Widget.dom.parse(html);

    var videoUrl = extractVideoUrlFromDoc(docId);
    var title = extractTitleFromDoc(docId, link);

    Widget.dom.remove(docId);

    if (!videoUrl) {
      throw new Error("无法找到视频源");
    }

    console.log("loadDetail: videoUrl=" + videoUrl + " title=" + title);

    return {
      title: title,
      videoUrl: videoUrl,
      customHeaders: {
        "Referer": link,
        "User-Agent": UA
      }
    };
  } catch (err) {
    console.error("loadDetail error: " + err.message);
    throw err;
  }
}
