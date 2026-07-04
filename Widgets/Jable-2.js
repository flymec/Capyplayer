var WidgetMetadata = {
  id: "jable_capyplayer",
  title: "Jable",
  description: "Jable CapyPlayer 规范版，支持热门、最新、中文字幕、女优、玩法、剧情、搜索与播放解析。",
  author: "Minis",
  version: "3.2.0",
  site: "https://fs1.app",
  icon: "https://fs1.app/favicon.ico",
  modules: [
    {
      id: "hot",
      title: "热门",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      timeoutSeconds: 30,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://fs1.app/hot/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enum",
          value: "video_viewed_today",
          enumOptions: [
            { title: "今日热门", value: "video_viewed_today" },
            { title: "本周热门", value: "video_viewed_week" },
            { title: "本月热门", value: "video_viewed_month" },
            { title: "所有时间", value: "video_viewed" }
          ]
        },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      id: "latest",
      title: "最新",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      timeoutSeconds: 30,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://fs1.app/new-release/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enum",
          value: "latest-updates",
          enumOptions: [
            { title: "最新发布", value: "latest-updates" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" }
          ]
        },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      id: "subtitle",
      title: "中文",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      timeoutSeconds: 30,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://fs1.app/categories/chinese-subtitle/?mode=async&function=get_block&block_id=list_videos_common_videos_list"
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enum",
          value: "post_date",
          enumOptions: [
            { title: "最近更新", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" }
          ]
        },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      id: "actress",
      title: "女优",
      type: "media_list",
      functionName: "loadPage",
      cacheDuration: 3600,
      timeoutSeconds: 30,
      params: [
        {
          name: "url",
          title: "选择女优",
          type: "enum",
          value: "https://fs1.app/s1/models/yua-mikami/?mode=async&function=get_block&block_id=list_videos_common_videos_list",
          enumOptions: [
            { title: "三上悠亚", value: "https://fs1.app/s1/models/yua-mikami/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "枫可怜", value: "https://fs1.app/models/86b2f23f95cc485af79fe847c5b9de8d/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "小野夕子", value: "https://fs1.app/models/2958338aa4f78c0afb071e2b8a6b5f1b/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "大槻响", value: "https://fs1.app/models/hibiki-otsuki/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "藤森里穗", value: "https://fs1.app/models/riho-fujimori/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "JULIA", value: "https://fs1.app/models/julia/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "明里紬", value: "https://fs1.app/models/tsumugi-akari/?mode=async&function=get_block&block_id=list_videos_common_videos_list" },
            { title: "桃乃木香奈", value: "https://fs1.app/models/momonogi-kana/?mode=async&function=get_block&block_id=list_videos_common_videos_list" }
          ]
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enum",
          value: "post_date",
          enumOptions: [
            { title: "最近更新", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" }
          ]
        },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      id: "playstyle",
      title: "玩法",
      type: "media_list",
      functionName: "loadTagPage",
      cacheDuration: 3600,
      timeoutSeconds: 30,
      params: [
        {
          name: "url",
          title: "玩法标签",
          type: "enum",
          value: "https://fs1.app/tags/outdoor/",
          enumOptions: [
            { title: "露出", value: "https://fs1.app/tags/outdoor/" },
            { title: "集團進犯", value: "https://fs1.app/tags/gang-intrusion/" },
            { title: "進犯", value: "https://fs1.app/tags/intrusion/" },
            { title: "調教", value: "https://fs1.app/tags/tune/" },
            { title: "綑綁", value: "https://fs1.app/tags/bondage/" },
            { title: "瞬間插入", value: "https://fs1.app/tags/quickie/" },
            { title: "痴漢", value: "https://fs1.app/tags/chikan/" },
            { title: "痴女", value: "https://fs1.app/tags/chizyo/" },
            { title: "男M", value: "https://fs1.app/tags/masochism-guy/" },
            { title: "泥醉", value: "https://fs1.app/tags/crapulence/" },
            { title: "泡姬", value: "https://fs1.app/tags/soapland/" },
            { title: "母乳", value: "https://fs1.app/tags/breast-milk/" },
            { title: "放尿", value: "https://fs1.app/tags/piss/" },
            { title: "按摩", value: "https://fs1.app/tags/massage/" },
            { title: "多P", value: "https://fs1.app/tags/groupsex/" },
            { title: "刑具", value: "https://fs1.app/tags/grip/" },
            { title: "凌辱", value: "https://fs1.app/tags/insult/" },
            { title: "一日十回", value: "https://fs1.app/tags/10-times-a-day/" },
            { title: "3P", value: "https://fs1.app/tags/3p/" }
          ]
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enum",
          value: "post_date",
          enumOptions: [
            { title: "最近更新", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" }
          ]
        },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      id: "story",
      title: "劇情",
      type: "media_list",
      functionName: "loadTagPage",
      cacheDuration: 3600,
      timeoutSeconds: 30,
      params: [
        {
          name: "url",
          title: "劇情标签",
          type: "enum",
          value: "https://fs1.app/tags/black/",
          enumOptions: [
            { title: "黑人", value: "https://fs1.app/tags/black/" },
            { title: "醜男", value: "https://fs1.app/tags/ugly-man/" },
            { title: "誘惑", value: "https://fs1.app/tags/temptation/" },
            { title: "親屬", value: "https://fs1.app/tags/kinship/" },
            { title: "童貞", value: "https://fs1.app/tags/virginity/" },
            { title: "時間停止", value: "https://fs1.app/tags/time-stop/" },
            { title: "復仇", value: "https://fs1.app/tags/avenge/" },
            { title: "年齡差", value: "https://fs1.app/tags/age-difference/" },
            { title: "巨漢", value: "https://fs1.app/tags/giant/" },
            { title: "媚藥", value: "https://fs1.app/tags/love-potion/" },
            { title: "夫目前犯", value: "https://fs1.app/tags/sex-beside-husband/" },
            { title: "出軌", value: "https://fs1.app/tags/affair/" },
            { title: "催眠", value: "https://fs1.app/tags/hypnosis/" },
            { title: "偷拍", value: "https://fs1.app/tags/private-cam/" },
            { title: "下雨天", value: "https://fs1.app/tags/rainy-day/" },
            { title: "NTR", value: "https://fs1.app/tags/ntr/" },
            { title: "風俗娘", value: "https://fs1.app/tags/club-hostess-and-sex-worker/" },
            { title: "醫生", value: "https://fs1.app/tags/doctor/" },
            { title: "逃犯", value: "https://fs1.app/tags/fugitive/" },
            { title: "護士", value: "https://fs1.app/tags/nurse/" },
            { title: "老師", value: "https://fs1.app/tags/teacher/" },
            { title: "空姐", value: "https://fs1.app/tags/flight-attendant/" },
            { title: "球隊經理", value: "https://fs1.app/tags/team-manager/" },
            { title: "未亡人", value: "https://fs1.app/tags/widow/" },
            { title: "搜查官", value: "https://fs1.app/tags/detective/" },
            { title: "情侶", value: "https://fs1.app/tags/couple/" },
            { title: "家政婦", value: "https://fs1.app/tags/housewife/" },
            { title: "家庭教師", value: "https://fs1.app/tags/private-teacher/" },
            { title: "偶像", value: "https://fs1.app/tags/idol/" },
            { title: "人妻", value: "https://fs1.app/tags/wife/" },
            { title: "主播", value: "https://fs1.app/tags/female-anchor/" },
            { title: "OL", value: "https://fs1.app/tags/ol/" },
            { title: "魔鏡號", value: "https://fs1.app/tags/magic-mirror/" },
            { title: "電車", value: "https://fs1.app/tags/tram/" },
            { title: "處女", value: "https://fs1.app/tags/first-night/" },
            { title: "監獄", value: "https://fs1.app/tags/prison/" },
            { title: "溫泉", value: "https://fs1.app/tags/hot-spring/" },
            { title: "洗浴場", value: "https://fs1.app/tags/bathing-place/" },
            { title: "泳池", value: "https://fs1.app/tags/swimming-pool/" },
            { title: "汽車", value: "https://fs1.app/tags/car/" },
            { title: "廁所", value: "https://fs1.app/tags/toilet/" },
            { title: "學校", value: "https://fs1.app/tags/school/" },
            { title: "圖書館", value: "https://fs1.app/tags/library/" },
            { title: "健身房", value: "https://fs1.app/tags/gym-room/" },
            { title: "便利店", value: "https://fs1.app/tags/store/" },
            { title: "錄像", value: "https://fs1.app/tags/video-recording/" },
            { title: "處女作/引退作", value: "https://fs1.app/tags/debut-retires/" },
            { title: "綜藝", value: "https://fs1.app/tags/variety-show/" },
            { title: "節日主題", value: "https://fs1.app/tags/festival/" },
            { title: "感謝祭", value: "https://fs1.app/tags/thanksgiving/" },
            { title: "4小時以上", value: "https://fs1.app/tags/more-than-4-hours/" }
          ]
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enum",
          value: "post_date",
          enumOptions: [
            { title: "最近更新", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" }
          ]
        },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      id: "clothing",
      title: "衣著",
      type: "media_list",
      functionName: "loadTagPage",
      cacheDuration: 3600,
      timeoutSeconds: 30,
      params: [
        {
          name: "url",
          title: "選擇衣著",
          type: "enum",
          value: "https://fs1.app/tags/black-pantyhose/",
          enumOptions: [
            { title: "黑絲", value: "https://fs1.app/tags/black-pantyhose/" },
            { title: "過膝襪", value: "https://fs1.app/tags/knee-socks/" },
            { title: "運動裝", value: "https://fs1.app/tags/sportswear/" },
            { title: "肉絲", value: "https://fs1.app/tags/flesh-toned-pantyhose/" },
            { title: "絲襪", value: "https://fs1.app/tags/pantyhose/" },
            { title: "眼鏡娘", value: "https://fs1.app/tags/glasses/" },
            { title: "獸耳", value: "https://fs1.app/tags/kemonomimi/" },
            { title: "漁網", value: "https://fs1.app/tags/fishnets/" },
            { title: "水着", value: "https://fs1.app/tags/swimsuit/" },
            { title: "校服", value: "https://fs1.app/tags/school-uniform/" },
            { title: "旗袍", value: "https://fs1.app/tags/cheongsam/" },
            { title: "婚紗", value: "https://fs1.app/tags/wedding-dress/" },
            { title: "女僕", value: "https://fs1.app/tags/maid/" },
            { title: "和服", value: "https://fs1.app/tags/kimono/" },
            { title: "吊帶襪", value: "https://fs1.app/tags/stockings/" },
            { title: "兔女郎", value: "https://fs1.app/tags/bunny-girl/" },
            { title: "Cosplay", value: "https://fs1.app/tags/Cosplay/" }
          ]
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enum",
          value: "post_date",
          enumOptions: [
            { title: "最近更新", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" }
          ]
        },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      id: "body",
      title: "身材",
      type: "media_list",
      functionName: "loadTagPage",
      cacheDuration: 3600,
      timeoutSeconds: 30,
      params: [
        {
          name: "url",
          title: "選擇身材",
          type: "enum",
          value: "https://fs1.app/tags/tall/",
          enumOptions: [
            { title: "黑肉", value: "https://fs1.app/tags/suntan/" },
            { title: "長身", value: "https://fs1.app/tags/tall/" },
            { title: "軟體", value: "https://fs1.app/tags/flexible-body/" },
            { title: "貧乳", value: "https://fs1.app/tags/small-tits/" },
            { title: "美腿", value: "https://fs1.app/tags/beautiful-leg/" },
            { title: "美尻", value: "https://fs1.app/tags/beautiful-butt/" },
            { title: "紋身", value: "https://fs1.app/tags/tattoo/" },
            { title: "短髮", value: "https://fs1.app/tags/short-hair/" },
            { title: "白虎", value: "https://fs1.app/tags/hairless-pussy/" },
            { title: "熟女", value: "https://fs1.app/tags/mature-woman/" },
            { title: "巨乳", value: "https://fs1.app/tags/big-tits/" },
            { title: "少女", value: "https://fs1.app/tags/girl/" },
            { title: "嬌小", value: "https://fs1.app/tags/dainty/" }
          ]
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enum",
          value: "post_date",
          enumOptions: [
            { title: "最近更新", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" }
          ]
        },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      id: "sexact",
      title: "交合",
      type: "media_list",
      functionName: "loadTagPage",
      cacheDuration: 3600,
      timeoutSeconds: 30,
      params: [
        {
          name: "url",
          title: "選擇交合",
          type: "enum",
          value: "https://fs1.app/tags/facial/",
          enumOptions: [
            { title: "顏射", value: "https://fs1.app/tags/facial/" },
            { title: "腳交", value: "https://fs1.app/tags/footjob/" },
            { title: "肛交", value: "https://fs1.app/tags/anal-sex/" },
            { title: "痙攣", value: "https://fs1.app/tags/spasms/" },
            { title: "潮吹", value: "https://fs1.app/tags/squirting/" },
            { title: "深喉", value: "https://fs1.app/tags/deep-throat/" },
            { title: "接吻", value: "https://fs1.app/tags/kiss/" },
            { title: "口爆", value: "https://fs1.app/tags/cum-in-mouth/" },
            { title: "口交", value: "https://fs1.app/tags/blowjob/" },
            { title: "乳交", value: "https://fs1.app/tags/tit-wank/" },
            { title: "中出", value: "https://fs1.app/tags/creampie/" }
          ]
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enum",
          value: "post_date",
          enumOptions: [
            { title: "最近更新", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" }
          ]
        },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      id: "theme",
      title: "主題",
      type: "media_list",
      functionName: "loadTagPage",
      cacheDuration: 3600,
      timeoutSeconds: 30,
      params: [
        {
          name: "url",
          title: "選擇主題",
          type: "enum",
          value: "https://fs1.app/categories/roleplay/",
          enumOptions: [
            { title: "角色劇情", value: "https://fs1.app/categories/roleplay/" },
            { title: "制服誘惑", value: "https://fs1.app/categories/uniform/" },
            { title: "直接開啪", value: "https://fs1.app/categories/sex-only/" },
            { title: "絲襪美腿", value: "https://fs1.app/categories/pantyhose/" },
            { title: "主奴調教", value: "https://fs1.app/categories/bdsm/" },
            { title: "多P群交", value: "https://fs1.app/categories/groupsex/" },
            { title: "男友視角", value: "https://fs1.app/categories/pov/" },
            { title: "凌辱快感", value: "https://fs1.app/categories/insult/" },
            { title: "盜攝偷拍", value: "https://fs1.app/categories/private-cam/" },
            { title: "無碼解放", value: "https://fs1.app/categories/uncensored/" },
            { title: "女同歡愉", value: "https://fs1.app/categories/lesbian/" }
          ]
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enum",
          value: "post_date",
          enumOptions: [
            { title: "最近更新", value: "post_date" },
            { title: "最多观看", value: "video_viewed" },
            { title: "最多收藏", value: "most_favourited" }
          ]
        },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    },
    {
      id: "search_module",
      title: "搜索",
      type: "media_list",
      functionName: "searchVideos",
      cacheDuration: 300,
      timeoutSeconds: 30,
      params: [
        { name: "keyword", title: "关键词", type: "string", value: "" },
        {
          name: "sort_by",
          title: "排序",
          type: "enum",
          value: "post_date",
          enumOptions: [
            { title: "最多观看", value: "video_viewed" },
            { title: "近期最佳", value: "post_date_and_popularity" },
            { title: "最近更新", value: "post_date" },
            { title: "最多收藏", value: "most_favourited" }
          ]
        },
        { name: "from", title: "页码", type: "page", value: "1" }
      ]
    }
  ],
  search: {
    title: "搜索",
    functionName: "searchVideos",
    params: [
      { name: "keyword", title: "关键词", type: "string", value: "" },
      { name: "from", title: "页码", type: "page", value: "1" }
    ]
  }
};

var JABLE_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  "Referer": "https://fs1.app/"
};

function ensureArray(v) {
  return Array.isArray(v) ? v : [];
}

function safeText(v) {
  return String(v || "").replace(/\s+/g, " ").trim();
}

function absoluteUrl(url) {
  if (!url) return "";
  if (url.indexOf("http://") === 0 || url.indexOf("https://") === 0) return url;
  return new URL(url, "https://fs1.app").toString();
}

async function fetchHtmlByBrowser(url) {
  if (typeof fetch !== "function") return "";

  try {
    var response = await fetch(url, {
      method: "GET",
      credentials: "include",
      cache: "no-store"
    });
    if (!response || !response.ok) return "";
    return await response.text();
  } catch (e) {
    return "";
  }
}

async function fetchHtml(url) {
  var browserHtml = await fetchHtmlByBrowser(url);
  if (browserHtml) return browserHtml;

  var response = await Widget.http.get(url, { headers: JABLE_HEADERS, timeout: 30000 });
  return String(response.data || "");
}

function mapJableItem(item) {
  return {
    id: String(item.id || item.link || item.title),
    title: safeText(item.title || ""),
    posterUrl: absoluteUrl(item.cover || ""),
    backdropUrl: absoluteUrl(item.cover || ""),
    description: item.duration ? ("时长: " + item.duration) : "",
    mediaType: "movie",
    link: absoluteUrl(item.link || "")
  };
}

function parseJableList(htmlContent) {
  var docId = Widget.dom.parse(htmlContent);
  try {
    var itemNodes = Widget.dom.select(docId, ".video-img-box");
    var results = [];
    var seen = {};

    for (var i = 0; i < itemNodes.length; i++) {
      var node = itemNodes[i];
      var linkNode = Widget.dom.select(node, ".title a")[0];
      if (!linkNode) continue;
      var href = absoluteUrl((linkNode.attributes && linkNode.attributes.href) || "");
      if (!href || seen[href]) continue;
      seen[href] = true;

      var imgNode = Widget.dom.select(node, "img")[0];
      var durationNode = Widget.dom.select(node, ".absolute-bottom-right .label")[0];
      results.push(mapJableItem({
        id: href,
        title: linkNode.text || "",
        link: href,
        cover: imgNode ? ((imgNode.attributes && (imgNode.attributes["data-src"] || imgNode.attributes.src || imgNode.attributes["data-original"])) || "") : "",
        duration: durationNode ? (durationNode.text || "") : ""
      }));
    }

    return results;
  } finally {
    Widget.dom.remove(docId);
  }
}

async function loadPage(params) {
  params = params || {};
  var url = String(params.url || "");
  if (!url) return [];
  if (params.sort_by) url += "&sort_by=" + encodeURIComponent(params.sort_by);
  if (params.from) url += "&from=" + encodeURIComponent(params.from);
  try {
    var html = await fetchHtml(url);
    return ensureArray(parseJableList(html));
  } catch (e) {
    console.error("jable loadPage error", e && e.message ? e.message : e);
    return [];
  }
}

async function loadTagPage(params) {
  params = params || {};
  var url = String(params.url || "");
  if (!url) return [];
  // 该站点标签页分页采用路径拼接方式，例如 /tags/black-pantyhose/2/，
  // 而不是查询参数 ?from=2，因此页码需拼接在路径末尾（紧跟结尾的斜杠之后）。
  if (params.from && String(params.from) !== "1") {
    var qIdx = url.indexOf("?");
    var basePath = qIdx >= 0 ? url.slice(0, qIdx) : url;
    var query = qIdx >= 0 ? url.slice(qIdx) : "";
    if (basePath.charAt(basePath.length - 1) !== "/") basePath += "/";
    basePath += encodeURIComponent(params.from) + "/";
    url = basePath + query;
  }
  if (params.sort_by) {
    if (url.indexOf("?") >= 0) url += "&sort_by=" + encodeURIComponent(params.sort_by);
    else url += "?sort_by=" + encodeURIComponent(params.sort_by);
  }
  try {
    var html = await fetchHtml(url);
    return ensureArray(parseJableList(html));
  } catch (e) {
    console.error("jable loadTagPage error", e && e.message ? e.message : e);
    return [];
  }
}

async function searchVideos(params) {
  params = params || {};
  var keyword = encodeURIComponent(params.keyword || "");
  if (!keyword) return [];
  var url = "https://fs1.app/search/" + keyword + "/?mode=async&function=get_block&block_id=list_videos_videos_list_search_result&q=" + keyword;
  if (params.sort_by) url += "&sort_by=" + encodeURIComponent(params.sort_by);
  if (params.from) url += "&from=" + encodeURIComponent(params.from);
  try {
    var html = await fetchHtml(url);
    return ensureArray(parseJableList(html));
  } catch (e) {
    console.error("jable searchVideos error", e && e.message ? e.message : e);
    return [];
  }
}

async function loadDetail(link) {
  try {
    var html = await fetchHtmlByBrowser(link);
    if (!html) {
      var response = await Widget.http.get(link, { headers: JABLE_HEADERS, timeout: 30000 });
      html = String(response.data || "");
    }
    var hlsUrl = "";

    var key = "var hlsUrl = '";
    var idx = html.indexOf(key);
    if (idx >= 0) {
      var start = idx + key.length;
      var end = html.indexOf("'", start);
      if (end > start) hlsUrl = html.slice(start, end);
    }

    if (!hlsUrl) {
      key = 'var hlsUrl = "';
      idx = html.indexOf(key);
      if (idx >= 0) {
        start = idx + key.length;
        end = html.indexOf('"', start);
        if (end > start) hlsUrl = html.slice(start, end);
      }
    }

    if (!hlsUrl) {
      var marker = '.m3u8';
      var m3u8Index = html.indexOf(marker);
      if (m3u8Index > 0) {
        var begin = html.lastIndexOf('https://', m3u8Index);
        if (begin < 0) begin = html.lastIndexOf('http://', m3u8Index);
        if (begin >= 0) hlsUrl = html.slice(begin, m3u8Index + marker.length);
      }
    }

    if (!hlsUrl) {
      var sourceKey = '<source';
      var sourceIdx = html.indexOf(sourceKey);
      while (sourceIdx >= 0) {
        var srcIdx = html.indexOf('src="', sourceIdx);
        if (srcIdx < 0) srcIdx = html.indexOf("src='", sourceIdx);
        if (srcIdx >= 0) {
          var quote = html[srcIdx + 4];
          var srcStart = srcIdx + 5;
          var srcEnd = html.indexOf(quote, srcStart);
          var candidate = srcEnd > srcStart ? html.slice(srcStart, srcEnd) : '';
          if (candidate.indexOf('.m3u8') >= 0) {
            hlsUrl = candidate;
            break;
          }
        }
        sourceIdx = html.indexOf(sourceKey, sourceIdx + sourceKey.length);
      }
    }

    if (!hlsUrl) {
      return { title: "无法获取有效的播放地址" };
    }

    hlsUrl = hlsUrl.split('\\/').join('/');

    var docId = Widget.dom.parse(html);
    try {
      var title = "";
      var metaTitle = Widget.dom.select(docId, 'meta[property="og:title"]')[0];
      if (metaTitle && metaTitle.attributes && metaTitle.attributes.content) title = metaTitle.attributes.content;
      if (!title) {
        var titleNode = Widget.dom.select(docId, "title")[0];
        title = titleNode ? safeText(titleNode.text) : "Jable";
      }
      var poster = "";
      var metaImage = Widget.dom.select(docId, 'meta[property="og:image"]')[0];
      if (metaImage && metaImage.attributes && metaImage.attributes.content) poster = absoluteUrl(metaImage.attributes.content);
      return {
        title: title || "Jable",
        posterUrl: poster,
        backdropUrl: poster,
        videoUrl: hlsUrl,
        playerType: "ijk",
        headers: {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
          "Referer": link,
          "Origin": "https://fs1.app"
        },
        customHeaders: {
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
          "Referer": link,
          "Origin": "https://fs1.app"
        }
      };
    } finally {
      Widget.dom.remove(docId);
    }
  } catch (e) {
    console.error("jable loadDetail error", e && e.message ? e.message : e);
    return { title: "请求错误" };
  }
}
