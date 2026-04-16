// == CapyPlayer 组件规范 v1.0 ================================================
var WidgetMetadata = {
  id: "ti.bemarkt.javday",
  title: "JAVDay",
  description: "获取 JAVDay 推荐与视频",
  author: "flyme",
  site: "https://javday.app",
  version: "1.5.0",
  modules: [
    {
      id: "search",
      title: "搜索视频",
      type: "media_list",
      functionName: "search",
      cacheDuration: 3600,
      params: [
        {
          name: "keyword",
          label: "女優/番號/關鍵字",
          type: "string",
          defaultValue: "",
          description: "女優/番號/關鍵字搜索…"
        },
        {
          name: "page",
          label: "页码",
          type: "page",
          description: "搜索结果页码"
        }
      ]
    },
    {
      id: "new",
      title: "最新更新",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          type: "constant",
          defaultValue: "https://javday.app/label/new/"
        },
        {
          name: "page",
          label: "页码",
          type: "page"
        }
      ]
    },
    {
      id: "hot",
      title: "人气系列",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          type: "constant",
          defaultValue: "https://javday.app/label/hot/"
        },
        {
          name: "page",
          label: "页码",
          type: "page"
        }
      ]
    },
    {
      id: "new_release",
      title: "新作上市",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          type: "constant",
          defaultValue: "https://javday.app/category/new-release/"
        },
        {
          name: "sort_by",
          label: "排序方式",
          type: "enum",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          defaultValue: "new"
        },
        {
          name: "page",
          label: "页码",
          type: "page"
        }
      ]
    },
    {
      id: "censored",
      title: "有码视频",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          type: "constant",
          defaultValue: "https://javday.app/category/censored/"
        },
        {
          name: "sort_by",
          label: "排序方式",
          type: "enum",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          defaultValue: "popular"
        },
        {
          name: "page",
          label: "页码",
          type: "page"
        }
      ]
    },
    {
      id: "uncensored",
      title: "无码视频",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          type: "constant",
          defaultValue: "https://javday.app/category/uncensored/"
        },
        {
          name: "sort_by",
          label: "排序方式",
          type: "enum",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          defaultValue: "new"
        },
        {
          name: "page",
          label: "页码",
          type: "page"
        }
      ]
    },
    {
      id: "uncensored_leaked",
      title: "无码流出",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          type: "constant",
          defaultValue: "https://javday.app/category/uncensored-leaked/"
        },
        {
          name: "sort_by",
          label: "排序方式",
          type: "enum",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          defaultValue: "new"
        },
        {
          name: "page",
          label: "页码",
          type: "page"
        }
      ]
    },
    {
      id: "sex8",
      title: "杏吧视频",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          type: "constant",
          defaultValue: "https://javday.app/category/sex8/"
        },
        {
          name: "sort_by",
          label: "排序方式",
          type: "enum",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          defaultValue: "popular"
        },
        {
          name: "page",
          label: "页码",
          type: "page"
        }
      ]
    },
    {
      id: "hongkongdoll",
      title: "玩偶姐姐",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          type: "constant",
          defaultValue: "https://javday.app/category/hongkongdoll/"
        },
        {
          name: "sort_by",
          label: "排序方式",
          type: "enum",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          defaultValue: "popular"
        },
        {
          name: "page",
          label: "页码",
          type: "page"
        }
      ]
    },
    {
      id: "chinese_av",
      title: "国产 AV",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          type: "constant",
          defaultValue: "https://javday.app/category/chinese-av/"
        },
        {
          name: "sort_by",
          label: "排序方式",
          type: "enum",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          defaultValue: "popular"
        },
        {
          name: "page",
          label: "页码",
          type: "page"
        }
      ]
    },
    {
      id: "chinese_factory",
      title: "国产厂商",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      params: [
        {
          name: "url",
          label: "厂商选择",
          type: "enum",
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
          defaultValue: "https://javday.app/index.php/category/madou/"
        },
        {
          name: "sort_by",
          label: "排序方式",
          type: "enum",
          enumOptions: [
            { title: "最新上架", value: "new" },
            { title: "人气最高", value: "popular" }
          ],
          defaultValue: "new"
        },
        {
          name: "page",
          label: "页码",
          type: "page"
        }
      ]
    }
  ]
};

// == 常量与工具函数 ============================================================
var CONFIG = {
  BASE_URL: "https://javday.app",
  USER_AGENT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
  LOG_PREFIX: "CapyPlayer: JAVDay -",
  TIMEOUT: 10000
};

// 确保返回数组
function ensureArray(v) {
  return Array.isArray(v) ? v : [];
}

// 安全 JSON 解析
function safeJson(data) {
  if (typeof data === "string") {
    try {
      return JSON.parse(data);
    } catch (_) {
      return {};
    }
  }
  return data || {};
}

// 发送 HTTP 请求
async function httpGet(url, referer) {
  referer = referer || CONFIG.BASE_URL;
  try {
    var resp = await Widget.http.get(url, {
      headers: {
        "User-Agent": CONFIG.USER_AGENT,
        "Referer": referer
      },
      timeout: CONFIG.TIMEOUT
    });
    if (!resp.ok) {
      throw new Error("HTTP " + resp.status + " - " + url);
    }
    return resp.data;
  } catch (error) {
    console.error(CONFIG.LOG_PREFIX + " 请求失败: " + url, error.message);
    throw error;
  }
}

// 规范化 URL
function normalizeUrl(url) {
  if (!url) return "";
  if (url.indexOf("http://") === 0 || url.indexOf("https://") === 0) return url;
  if (url.indexOf("//") === 0) return "https:" + url;
  var base = CONFIG.BASE_URL.replace(/\/+$/, "");
  var path = url.charAt(0) === "/" ? url : "/" + url;
  return (base + path).replace(/([^:]\/)\/+/g, "$1");
}

// 提取背景图 URL
function getCoverImgSrc(node) {
  var styleAttr = Widget.dom.attr(node, "style") || "";
  var match = styleAttr.match(/url\(\s*['"]?([^'")]+)['"]?\s*\)/);
  if (match && match[1]) {
    return normalizeUrl(match[1]);
  }
  return "";
}

// 解析视频列表页
function parseVideoList(docId, context) {
  context = context || "来自 JAVDay";
  var items = [];
  // 选择所有视频项
  var videoBoxes = Widget.dom.select(docId, ".video-wrapper .videoBox");
  for (var i = 0; i < videoBoxes.length; i++) {
    var box = videoBoxes[i];
    var link = Widget.dom.attr(box, "href");
    if (!link) continue;
    
    // 查找标题
    var titleNodes = Widget.dom.select(box, ".videoBox-info .title");
    var title = titleNodes.length > 0 ? Widget.dom.text(titleNodes[0]).trim() : "";
    if (!title) continue;
    
    // 查找封面图（通过 style 属性）
    var coverNodes = Widget.dom.select(box, ".videoBox-cover");
    var imgSrc = "";
    if (coverNodes.length > 0) {
      imgSrc = getCoverImgSrc(coverNodes[0]);
    }
    
    var id = i + "|" + link;
    var normalizedLink = normalizeUrl(link);
    
    items.push({
      id: String(id),
      title: title,
      posterUrl: imgSrc,
      backdropUrl: imgSrc,
      description: context,
      mediaType: "movie",
      link: normalizedLink
    });
  }
  return items;
}

// 从 DPlayer 脚本提取视频 URL
function extractVideoUrlFromDPlayerScript(scriptContent) {
  if (!scriptContent) return null;
  var regexes = [
    /video\s*:\s*{\s*[^}]*url\s*:\s*['"]([^'"]+)['"]/,
    /url\s*:\s*['"]([^'"]+\.m3u8[^'"]*)['"]/
  ];
  for (var i = 0; i < regexes.length; i++) {
    var match = scriptContent.match(regexes[i]);
    if (match && match[1]) return match[1];
  }
  return null;
}

// 从详情页提取视频源
function extractVideoUrl(docId) {
  // 1. 查找包含 new DPlayer 的脚本
  var scripts = Widget.dom.select(docId, "script");
  for (var i = 0; i < scripts.length; i++) {
    var scriptContent = Widget.dom.text(scripts[i]) || "";
    if (scriptContent.indexOf("new DPlayer") >= 0) {
      var url = extractVideoUrlFromDPlayerScript(scriptContent);
      if (url) return url;
    }
  }
  
  // 2. video 标签
  var videoNodes = Widget.dom.select(docId, "video#J_prismPlayer");
  if (videoNodes.length > 0) {
    var src = Widget.dom.attr(videoNodes[0], "src");
    if (src) return src;
  }
  
  var sourceNodes = Widget.dom.select(docId, "source[src*='.m3u8']");
  if (sourceNodes.length > 0) {
    var src = Widget.dom.attr(sourceNodes[0], "src");
    if (src) return src;
  }
  
  // 3. 脚本中的 m3u8
  for (var j = 0; j < scripts.length; j++) {
    var content = Widget.dom.text(scripts[j]) || "";
    if (content.indexOf(".m3u8") >= 0) {
      var match = content.match(/['"](https?:\/\/[^'"]+\.m3u8[^'"]*)['"]/);
      if (match && match[1]) return match[1];
    }
  }
  
  // 4. iframe
  var iframeNodes = Widget.dom.select(docId, "iframe[src*='player']");
  if (iframeNodes.length > 0) {
    var src = Widget.dom.attr(iframeNodes[0], "src");
    if (src) return normalizeUrl(src);
  }
  
  return null;
}

// 提取分类 ID
function extractCategoryId(url) {
  var parts = url.split("/").filter(function(p) { return p && p !== "index.php"; });
  return parts.pop() || "unknown";
}

// 构建分页 URL
function buildPageUrl(baseUrl, sortBy, page) {
  var cleanBase = baseUrl.replace(/\/+$/, "").replace(/\/page\/\d+$/, "");
  var id = extractCategoryId(cleanBase);
  var isLabel = cleanBase.indexOf("/label/") >= 0;
  
  var path;
  if (sortBy === "popular") {
    path = "/fiter/by/hits/id/" + id + "/";
  } else {
    path = isLabel ? "/label/" + id + "/" : "/category/" + id + "/";
  }
  
  if (cleanBase.indexOf("index.php") >= 0) {
    path = "/index.php" + path;
  }
  
  if (page > 1) {
    path += "page/" + page + "/";
  }
  
  return path;
}

function getFullUrl(path) {
  if (path.indexOf("http") === 0) return path;
  return CONFIG.BASE_URL + (path.charAt(0) === "/" ? path : "/" + path);
}

// == 核心功能函数 ==============================================================

/**
 * 加载通用列表页
 */
async function loadPage(params) {
  params = params || {};
  var url = params.url;
  var sortBy = params.sort_by || "new";
  var page = params.page || 1;
  
  if (!url) {
    console.error(CONFIG.LOG_PREFIX + " 缺少 URL 参数");
    return [];
  }
  
  var targetPath = buildPageUrl(url, sortBy, page);
  var targetUrl = getFullUrl(targetPath);
  
  try {
    var html = await httpGet(targetUrl, url);
    var docId = Widget.dom.parse(html);
    var items = parseVideoList(docId, "排序:" + (sortBy === "new" ? "最新" : "人气"));
    Widget.dom.remove(docId);
    
    // 降级处理
    if (items.length === 0 && sortBy === "popular") {
      console.warn(CONFIG.LOG_PREFIX + " 人气路径无数据，降级到普通路径");
      var fallbackPath = buildPageUrl(url, "new", page);
      var fallbackHtml = await httpGet(getFullUrl(fallbackPath), url);
      var fallbackDocId = Widget.dom.parse(fallbackHtml);
      items = parseVideoList(fallbackDocId, "排序:最新(人气降级)");
      Widget.dom.remove(fallbackDocId);
    }
    
    return items;
  } catch (error) {
    if (sortBy === "popular") {
      console.warn(CONFIG.LOG_PREFIX + " 人气路径请求失败，尝试降级", error.message);
      var fallbackPath = buildPageUrl(url, "new", page);
      var fallbackHtml = await httpGet(getFullUrl(fallbackPath), url);
      var fallbackDocId = Widget.dom.parse(fallbackHtml);
      var fallbackItems = parseVideoList(fallbackDocId, "排序:最新(人气降级)");
      Widget.dom.remove(fallbackDocId);
      return fallbackItems;
    }
    console.error(CONFIG.LOG_PREFIX + " loadPage 失败", error);
    return [];
  }
}

/**
 * 搜索视频
 */
async function search(params) {
  params = params || {};
  var keyword = params.keyword;
  var page = params.page || 1;
  
  if (!keyword) {
    console.error(CONFIG.LOG_PREFIX + " 缺少关键词");
    return [];
  }
  
  var encodedKeyword = encodeURIComponent(keyword);
  var searchUrl = CONFIG.BASE_URL + "/search/wd/" + encodedKeyword + "/";
  if (page > 1) {
    searchUrl += "page/" + page + "/";
  }
  
  try {
    var html = await httpGet(searchUrl);
    var docId = Widget.dom.parse(html);
    var items = parseVideoList(docId, "搜索: " + keyword);
    Widget.dom.remove(docId);
    return items;
  } catch (error) {
    console.error(CONFIG.LOG_PREFIX + " search 失败", error);
    return [];
  }
}

/**
 * 加载视频详情
 */
async function loadDetail(link) {
  if (!link) {
    throw new Error("缺少详情链接");
  }
  
  var fullLink = normalizeUrl(link);
  var html = await httpGet(fullLink, fullLink);
  var docId = Widget.dom.parse(html);
  var videoUrl = extractVideoUrl(docId);
  Widget.dom.remove(docId);
  
  if (!videoUrl) {
    throw new Error("无法找到视频源");
  }
  
  // 返回符合规范的结构
  return {
    title: "",
    videoUrl: videoUrl
  };
}
