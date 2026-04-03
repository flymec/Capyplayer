// == Metadata =================================================================
var WidgetMetadata = {
  id: "missav",
  title: "MissAV",
  description: "获取 MissAV 推荐",
  author: "\ud835\udcd1\ud835\udcfe\ud835\udcfd\ud835\udcfd\ud835\udcee\ud835\udcfb\ud835\udcef\ud835\udcf5\ud835\udd02",
  site: "https://",
  version: "1.1.0",
  requiredVersion: "0.0.2",
  detailCacheDuration: 300,
  modules: [
    {
      title: "搜索影片",
      description: "搜索 MissAV 影片内容",
      requiresWebView: false,
      functionName: "search",
      cacheDuration: 1800,
      params: [
        {
          name: "keyword",
          title: "搜索关键词",
          type: "string",
          description: "输入搜索关键词（演员名、番号、标题等）",
          value: ""
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "released_at",
          enumOptions: [
            { title: "发行日期",   value: "released_at" },
            { title: "最近更新",   value: "published_at" },
            { title: "收藏数",     value: "saved" },
            { title: "今日浏览数", value: "today_views" },
            { title: "本周浏览数", value: "weekly_views" },
            { title: "本月浏览数", value: "monthly_views" },
            { title: "总浏览数",   value: "views" }
          ]
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "今日热门",
      description: "今日热门影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://missav.ai/dm291/cn/today-hot?sort=today_views"
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "本周热门",
      description: "本周热门影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://missav.ai/dm169/cn/weekly-hot?sort=weekly_views"
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "本月热门",
      description: "本月热门影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://missav.ai/dm257/cn/monthly-hot?sort=monthly_views"
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "新作上市",
      description: "新作上市影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://missav.ai/dm588/cn/release?sort=released_at"
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "中文字幕",
      description: "中文字幕影片",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "列表地址",
          type: "constant",
          value: "https://missav.ai/dm265/cn/chinese-subtitle"
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "released_at",
          enumOptions: [
            { title: "发行日期",   value: "released_at" },
            { title: "最近更新",   value: "published_at" },
            { title: "收藏数",     value: "saved" },
            { title: "今日浏览数", value: "today_views" },
            { title: "本周浏览数", value: "weekly_views" },
            { title: "本月浏览数", value: "monthly_views" },
            { title: "总浏览数",   value: "views" }
          ]
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "无码影片库",
      description: "无码影片各分类",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "选择分类",
          type: "enumeration",
          enumOptions: [
            { title: "无码流出",     value: "https://missav.ai/dm621/cn/uncensored-leak" },
            { title: "FC2",         value: "https://missav.ai/dm99/cn/fc2" },
            { title: "HEYZO",       value: "https://missav.ai/dm319995/cn/heyzo" },
            { title: "东京热",      value: "https://missav.ai/dm29/cn/tokyohot" },
            { title: "Caribbeancom", value: "https://missav.ai/dm1271239/cn/caribbeancom" },
            { title: "Gachinco",    value: "https://missav.ai/dm135/cn/gachinco" },
            { title: "XXX-AV",      value: "https://missav.ai/dm29/cn/xxxav" },
            { title: "人妻斩",      value: "https://missav.ai/dm24/cn/marriedslash" },
            { title: "顽皮 4610",   value: "https://missav.ai/dm19/cn/naughty4610" },
            { title: "顽皮 0930",   value: "https://missav.ai/dm22/cn/naughty0930" }
          ],
          value: "https://missav.ai/dm621/cn/uncensored-leak"
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "released_at",
          enumOptions: [
            { title: "发行日期",   value: "released_at" },
            { title: "最近更新",   value: "published_at" },
            { title: "收藏数",     value: "saved" },
            { title: "今日浏览数", value: "today_views" },
            { title: "本周浏览数", value: "weekly_views" },
            { title: "本月浏览数", value: "monthly_views" },
            { title: "总浏览数",   value: "views" }
          ]
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "亚洲AV专区",
      description: "亚洲AV各分类",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "选择分类",
          type: "enumeration",
          enumOptions: [
            { title: "麻豆传媒", value: "https://missav.ai/dm34/cn/madou" },
            { title: "韩国直播", value: "https://missav.ai/cn/klive" },
            { title: "中国直播", value: "https://missav.ai/cn/clive" }
          ],
          value: "https://missav.ai/dm34/cn/madou"
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "released_at",
          enumOptions: [
            { title: "发行日期",   value: "released_at" },
            { title: "最近更新",   value: "published_at" },
            { title: "收藏数",     value: "saved" },
            { title: "今日浏览数", value: "today_views" },
            { title: "本周浏览数", value: "weekly_views" },
            { title: "本月浏览数", value: "monthly_views" },
            { title: "总浏览数",   value: "views" }
          ]
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "影片质量类",
      description: "影片质量类 - 12个类型",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "选择类型",
          type: "enumeration",
          enumOptions: [
            { title: "高清 (248,852部)",     value: "https://missav.ai/dm95/cn/genres/%E9%AB%98%E6%B8%85" },
            { title: "独家 (220,805部)",     value: "https://missav.ai/dm136/cn/genres/%E7%8B%AC%E5%AE%B6" },
            { title: "单体作品 (185,259部)", value: "https://missav.ai/dm118/cn/genres/%E5%8D%95%E4%BD%93%E4%BD%9C%E5%93%81" },
            { title: "薄格 (93,610部)",      value: "https://missav.ai/dm95/cn/genres/%E8%96%84%E6%A0%BC" },
            { title: "全高清 FHD (11928部)", value: "https://missav.ai/cn/genres/%E5%85%A8%E9%AB%98%E6%B8%85%20(FHD)" },
            { title: "低成本影片 (70部)",    value: "https://missav.ai/cn/genres/%E4%BD%8E%E6%88%90%E6%9C%AC%E5%BD%B1%E7%89%87" },
            { title: "套装商品 (44部)",      value: "https://missav.ai/cn/genres/%E5%A5%97%E8%A3%85%E5%95%86%E5%93%81" },
            { title: "限时特卖 (37部)",      value: "https://missav.ai/cn/genres/%E9%99%90%E6%97%B6%E7%89%B9%E5%8D%96" },
            { title: "高清 HD (36部)",       value: "https://missav.ai/cn/genres/%E9%AB%98%E6%B8%85%20%28HD%29" },
            { title: "协力作品 (32部)",      value: "https://missav.ai/cn/genres/%E5%8D%8F%E5%8A%9B%E4%BD%9C%E5%93%81" },
            { title: "单一作品 (13部)",      value: "https://missav.ai/cn/genres/%E5%8D%95%E4%B8%80%E4%BD%9C%E5%93%81" },
            { title: "仅限分发 (12部)",      value: "https://missav.ai/cn/genres/%E4%BB%85%E9%99%90%E5%88%86%E5%8F%91" }
          ],
          value: "https://missav.ai/dm95/cn/genres/%E9%AB%98%E6%B8%85"
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "released_at",
          enumOptions: [
            { title: "发行日期",   value: "released_at" },
            { title: "最近更新",   value: "published_at" },
            { title: "收藏数",     value: "saved" },
            { title: "今日浏览数", value: "today_views" },
            { title: "本周浏览数", value: "weekly_views" },
            { title: "本月浏览数", value: "monthly_views" },
            { title: "总浏览数",   value: "views" }
          ]
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "角色与身份",
      description: "角色与身份 - 23个类型",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "选择类型",
          type: "enumeration",
          enumOptions: [
            { title: "人妻 (123,405部)",    value: "https://missav.ai/dm67/cn/genres/%E4%BA%BA%E5%A6%BB" },
            { title: "熟女 (111,004部)",    value: "https://missav.ai/dm107/cn/genres/%E7%86%9F%E5%A5%B3" },
            { title: "素人 (97,868部)",     value: "https://missav.ai/dm95/cn/genres/%E7%B4%A0%E4%BA%BA" },
            { title: "美少女 (89,506部)",   value: "https://missav.ai/dm93/cn/genres/%E7%BE%8E%E5%B0%91%E5%A5%B3" },
            { title: "痴女 (71,969部)",     value: "https://missav.ai/dm68/cn/genres/%E7%97%B4%E5%A5%B3" },
            { title: "女高中生 (62,542部)", value: "https://missav.ai/dm61/cn/genres/%E5%A5%B3%E9%AB%98%E4%B8%AD%E7%94%9F" },
            { title: "秘书 (997部)",        value: "https://missav.ai/dm63/cn/genres/%E7%A7%98%E4%B9%A6" },
            { title: "妈妈朋友 (98部)",     value: "https://missav.ai/cn/genres/%E5%A6%88%E5%A6%88%E6%9C%8B%E5%8F%8B" },
            { title: "M女人 (77部)",        value: "https://missav.ai/dm1/cn/genres/M%E5%A5%B3%E4%BA%BA" },
            { title: "大小姐 (19部)",       value: "https://missav.ai/dm69/cn/genres/%E5%A4%A7%E5%B0%8F%E5%A7%90" },
            { title: "公主 (18部)",         value: "https://missav.ai/cn/genres/%E5%85%AC%E4%B8%BB" },
            { title: "新娘 (10部)",         value: "https://missav.ai/cn/genres/%E6%96%B0%E5%A8%98%20/%20%E5%B9%B4%E8%BD%BB%E7%9A%84%E5%A6%BB%E5%AD%90" },
            { title: "养女 (10部)",         value: "https://missav.ai/dm1/cn/genres/%E5%85%BB%E5%A5%B3" }
          ],
          value: "https://missav.ai/dm67/cn/genres/%E4%BA%BA%E5%A6%BB"
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "released_at",
          enumOptions: [
            { title: "发行日期",   value: "released_at" },
            { title: "最近更新",   value: "published_at" },
            { title: "收藏数",     value: "saved" },
            { title: "今日浏览数", value: "today_views" },
            { title: "本周浏览数", value: "weekly_views" },
            { title: "本月浏览数", value: "monthly_views" },
            { title: "总浏览数",   value: "views" }
          ]
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "性行为类型",
      description: "性行为类型 - 19个类型",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "选择类型",
          type: "enumeration",
          enumOptions: [
            { title: "中出 (198,292部)", value: "https://missav.ai/dm127/cn/genres/%E4%B8%AD%E5%87%BA" },
            { title: "口交 (95,026部)",  value: "https://missav.ai/dm93/cn/genres/%E5%8F%A3%E4%BA%A4" },
            { title: "骑乘 (86,850部)",  value: "https://missav.ai/dm82/cn/genres/%E9%AA%91%E4%B9%98" },
            { title: "潮吹 (73,825部)",  value: "https://missav.ai/dm71/cn/genres/%E6%BD%AE%E5%90%B9" },
            { title: "乳交 (68,569部)",  value: "https://missav.ai/dm67/cn/genres/%E4%B9%B3%E4%BA%A4" },
            { title: "颜射 (63,513部)",  value: "https://missav.ai/dm59/cn/genres/%E9%A2%9C%E5%B0%84" },
            { title: "自慰 (60,648部)",  value: "https://missav.ai/dm59/cn/genres/%E8%87%AA%E6%85%B0" },
            { title: "手淫 (58,635部)",  value: "https://missav.ai/dm57/cn/genres/%E6%89%8B%E6%B7%AB" },
            { title: "3P (26部)",        value: "https://missav.ai/dm45/cn/genres/3P" },
            { title: "多人 (26部)",      value: "https://missav.ai/cn/genres/%E5%A4%9A%E4%BA%BA" },
            { title: "撒尿 (17部)",      value: "https://missav.ai/cn/genres/%E6%92%92%E5%B0%BF" },
            { title: "盐吹 (16部)",      value: "https://missav.ai/cn/genres/%E7%9B%90%E5%90%B9" },
            { title: "洗濯 (26部)",      value: "https://missav.ai/cn/genres/%E6%B4%97%E6%BE%A1" }
          ],
          value: "https://missav.ai/dm127/cn/genres/%E4%B8%AD%E5%87%BA"
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "released_at",
          enumOptions: [
            { title: "发行日期",   value: "released_at" },
            { title: "最近更新",   value: "published_at" },
            { title: "收藏数",     value: "saved" },
            { title: "今日浏览数", value: "today_views" },
            { title: "本周浏览数", value: "weekly_views" },
            { title: "本月浏览数", value: "monthly_views" },
            { title: "总浏览数",   value: "views" }
          ]
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "情节与主题",
      description: "情节与主题 - 15个类型",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "选择类型",
          type: "enumeration",
          enumOptions: [
            { title: "企划 (67,686部)",  value: "https://missav.ai/dm67/cn/genres/%E4%BC%81%E5%88%92" },
            { title: "乱伦 (56,481部)",  value: "https://missav.ai/dm55/cn/genres/%E4%B9%B1%E4%BC%A6" },
            { title: "NTR (51,273部)",   value: "https://missav.ai/dm51/cn/genres/NTR" },
            { title: "搭讪 (48,965部)",  value: "https://missav.ai/dm48/cn/genres/%E6%90%AD%E8%AE%AA" },
            { title: "淫乱 (47,821部)",  value: "https://missav.ai/dm47/cn/genres/%E6%B7%AB%E4%B9%B1" },
            { title: "剧情 (46,573部)",  value: "https://missav.ai/dm46/cn/genres/%E5%89%A7%E6%83%85" },
            { title: "羞辱 (44,892部)",  value: "https://missav.ai/dm44/cn/genres/%E7%BE%9E%E8%BE%B1" },
            { title: "戴绿帽子 (39部)",  value: "https://missav.ai/cn/genres/%E6%88%B4%E7%BB%BF%E5%B8%BD%E5%AD%90" },
            { title: "告白体验 (30部)",  value: "https://missav.ai/cn/genres/%E5%91%8A%E7%99%BD%E4%BD%93%E9%AA%8C" },
            { title: "交往 (13部)",      value: "https://missav.ai/cn/genres/%E4%BA%A4%E5%BE%80" }
          ],
          value: "https://missav.ai/dm67/cn/genres/%E4%BC%81%E5%88%92"
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "released_at",
          enumOptions: [
            { title: "发行日期",   value: "released_at" },
            { title: "最近更新",   value: "published_at" },
            { title: "收藏数",     value: "saved" },
            { title: "今日浏览数", value: "today_views" },
            { title: "本周浏览数", value: "weekly_views" },
            { title: "本月浏览数", value: "monthly_views" },
            { title: "总浏览数",   value: "views" }
          ]
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "特殊玩法类",
      description: "特殊玩法 - 9个类型",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "选择类型",
          type: "enumeration",
          enumOptions: [
            { title: "多人运动 (53,962部)", value: "https://missav.ai/dm53/cn/genres/%E5%A4%9A%E4%BA%BA%E8%BF%90%E5%8A%A8" },
            { title: "拘束 (41,628部)",     value: "https://missav.ai/dm41/cn/genres/%E6%8B%98%E6%9D%9F" },
            { title: "脏话 (63部)",         value: "https://missav.ai/cn/genres/%E8%84%8F%E8%AF%9D" },
            { title: "催眠洗脑 (62部)",     value: "https://missav.ai/cn/genres/%E5%82%AC%E7%9C%A0%E6%B4%97%E8%84%91" },
            { title: "口球 (51部)",         value: "https://missav.ai/cn/genres/%E5%8F%A3%E7%90%83" },
            { title: "放置Play (31部)",     value: "https://missav.ai/cn/genres/%E6%94%BE%E7%BD%AEPlay" },
            { title: "奴隶 (26部)",         value: "https://missav.ai/dm6/cn/genres/%E5%A5%B4%E9%9A%B6" }
          ],
          value: "https://missav.ai/dm53/cn/genres/%E5%A4%9A%E4%BA%BA%E8%BF%90%E5%8A%A8"
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "released_at",
          enumOptions: [
            { title: "发行日期",   value: "released_at" },
            { title: "最近更新",   value: "published_at" },
            { title: "收藏数",     value: "saved" },
            { title: "今日浏览数", value: "today_views" },
            { title: "本周浏览数", value: "weekly_views" },
            { title: "本月浏览数", value: "monthly_views" },
            { title: "总浏览数",   value: "views" }
          ]
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "身材特征类",
      description: "身材特征 - 14个类型",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "选择类型",
          type: "enumeration",
          enumOptions: [
            { title: "巨乳 (165,810部)",   value: "https://missav.ai/dm112/cn/genres/%E5%B7%A8%E4%B9%B3" },
            { title: "苗条 (34,968部)",    value: "https://missav.ai/dm34/cn/genres/%E8%8B%97%E6%9D%A1" },
            { title: "美乳 (33,527部)",    value: "https://missav.ai/dm33/cn/genres/%E7%BE%8E%E4%B9%B3" },
            { title: "背部 (73部)",        value: "https://missav.ai/dm355/cn/genres/%E8%83%8C%E9%83%A8" },
            { title: "美尻 (60部)",        value: "https://missav.ai/cn/genres/%E7%BE%8E%E4%B8%BD%E7%9A%84%E5%B1%81%E8%82%A1" },
            { title: "甜屁股 (54部)",      value: "https://missav.ai/cn/genres/%E7%94%9C%E5%B1%81%E8%82%A1" },
            { title: "美臀 (46部)",        value: "https://missav.ai/cn/genres/%E7%BE%8E%E5%B0%BB" },
            { title: "性感的腿 (42部)",    value: "https://missav.ai/cn/genres/%E6%80%A7%E6%84%9F%E7%9A%84%E8%85%BF" },
            { title: "大乳房 (31部)",      value: "https://missav.ai/cn/genres/%E5%A4%A7%E4%B9%B3%E6%88%BF" },
            { title: "白皙的皮肤 (16部)",  value: "https://missav.ai/cn/genres/%E7%99%BD%E7%9A%99%E7%9A%84%E7%9A%AE%E8%82%A4" },
            { title: "小乳房 (16部)",      value: "https://missav.ai/cn/genres/%E5%B0%8F%E4%B9%B3%E6%88%BF" },
            { title: "皮肤黑 (44部)",      value: "https://missav.ai/cn/genres/%E7%9A%AE%E8%82%A4%E9%BB%91" }
          ],
          value: "https://missav.ai/dm112/cn/genres/%E5%B7%A8%E4%B9%B3"
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "released_at",
          enumOptions: [
            { title: "发行日期",   value: "released_at" },
            { title: "最近更新",   value: "published_at" },
            { title: "收藏数",     value: "saved" },
            { title: "今日浏览数", value: "today_views" },
            { title: "本周浏览数", value: "weekly_views" },
            { title: "本月浏览数", value: "monthly_views" },
            { title: "总浏览数",   value: "views" }
          ]
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    },
    {
      title: "时长合集类",
      description: "时长与合集 - 3个类型",
      requiresWebView: false,
      functionName: "loadPage",
      cacheDuration: 1800,
      params: [
        {
          name: "url",
          title: "选择类型",
          type: "enumeration",
          enumOptions: [
            { title: "4小时以上 (37,685部)",    value: "https://missav.ai/dm37/cn/genres/4%E5%B0%8F%E6%97%B6%E4%BB%A5%E4%B8%8A" },
            { title: "合集 (36,142部)",          value: "https://missav.ai/dm36/cn/genres/%E5%90%88%E9%9B%86" },
            { title: "超过工作时间4小时 (12部)", value: "https://missav.ai/cn/genres/%E8%B6%85%E8%BF%87%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%97%B4%204%20%E5%B0%8F%E6%97%B6" }
          ],
          value: "https://missav.ai/dm37/cn/genres/4%E5%B0%8F%E6%97%B6%E4%BB%A5%E4%B8%8A"
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "released_at",
          enumOptions: [
            { title: "发行日期",   value: "released_at" },
            { title: "最近更新",   value: "published_at" },
            { title: "收藏数",     value: "saved" },
            { title: "今日浏览数", value: "today_views" },
            { title: "本周浏览数", value: "weekly_views" },
            { title: "本月浏览数", value: "monthly_views" },
            { title: "总浏览数",   value: "views" }
          ]
        },
        { name: "page", title: "页码", type: "page", description: "页码", value: "1" }
      ]
    }
  ]
};

// == Constants ================================================================

var BASE_URL = "https://missav.ai";
var UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15";

// == Network ==================================================================

async function fetchHtml(url) {
  var response = await Widget.http.get(url, {
    headers: {
      "User-Agent":      UA,
      "Referer":         BASE_URL + "/",
      "Accept":          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
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

// == Utility ==================================================================

function extractVideoId(url) {
  var m = url.match(/\/cn\/([a-zA-Z0-9-]+?)(?:-uncensored-leak)?(?:[?#].*)?$/);
  return m ? m[1] : url.split("/").pop();
}

function buildUrl(baseUrl, sortBy, page) {
  var url = baseUrl;
  var hasQuery = url.indexOf("?") !== -1;
  if (sortBy) {
    url += (hasQuery ? "&" : "?") + "sort=" + sortBy;
    hasQuery = true;
  }
  if (page > 1) {
    url += (hasQuery ? "&" : "?") + "page=" + page;
  }
  return url;
}

// == HTML Parsing (Widget.dom) ================================================
//
// MissAV 列表结构：
//   <a href="/cn/番号" title="标题">
//     <img data-src="..." alt="标题">
//   </a>

function parseHtml(htmlContent) {
  var items   = [];
  var seen    = {};
  var docId   = Widget.dom.parse(htmlContent);

  try {
    var linkNodes = Widget.dom.select(docId, "a");
    console.log("parseHtml: scanning " + linkNodes.length + " links");

    for (var i = 0; i < linkNodes.length; i++) {
      var href = Widget.dom.attr(linkNodes[i], "href") || "";
      if (!href.match(/\/cn\/[a-zA-Z0-9-]+$/)) continue;
      if (seen[href]) continue;
      seen[href] = true;

      var cardDocId = Widget.dom.parse(linkNodes[i].outerHtml);
      try {
        var imgNodes = Widget.dom.select(cardDocId, "img");
        if (imgNodes.length === 0) { Widget.dom.remove(cardDocId); continue; }

        var imgSrc = Widget.dom.attr(imgNodes[0], "data-src") ||
                     Widget.dom.attr(imgNodes[0], "src") || "";
        if (!imgSrc) { Widget.dom.remove(cardDocId); continue; }

        var title = Widget.dom.attr(linkNodes[i], "title") ||
                    Widget.dom.attr(imgNodes[0], "alt") || "";

        var fullUrl = href.indexOf("http") === 0
          ? href
          : BASE_URL + href;

        var videoId   = extractVideoId(href);
        var videoCode = videoId.toUpperCase()
          .replace(/-CHINESE-SUBTITLE$/, "")
          .replace(/-UNCENSORED-LEAK$/, "");

        if (title && !title.match(/[A-Z]+-\d+/i)) {
          title = videoCode + " " + title;
        }
        if (!title) title = videoCode;

        var poster = "https://fourhoi.com/" + videoId + "/cover-t.jpg";

        items.push({
          id:          fullUrl,
          title:       title,
          posterUrl:   poster,
          backdropUrl: poster,
          link:        fullUrl,
          mediaType:   "movie"
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
  var sortBy  = params.sort_by || "";
  var page    = parseInt(params.page, 10) || 1;

  if (!baseUrl) {
    console.error("loadPage: 缺少 url 参数");
    return [];
  }

  try {
    var html = await fetchHtml(buildUrl(baseUrl, sortBy, page));
    return parseHtml(html);
  } catch (err) {
    console.error("loadPage error: " + err.message);
    return [];
  }
}

async function search(params) {
  params = params || {};
  var keyword = (params.keyword || "").trim();
  var sortBy  = params.sort_by || "";
  var page    = parseInt(params.page, 10) || 1;

  if (!keyword) {
    console.error("search: 请输入搜索关键词");
    return [];
  }

  var url = buildUrl(BASE_URL + "/cn/search/" + encodeURIComponent(keyword), sortBy, page);

  try {
    var html    = await fetchHtml(url);
    var results = parseHtml(html);

    // 番号精确匹配过滤
    if (/^[A-Za-z]+-?\d+$/i.test(keyword) && results.length > 0) {
      var norm = keyword.toUpperCase().replace(/-/g, "");
      var filtered = results.filter(function(v) {
        var code = (v.title.match(/^([A-Za-z]+-?\d+)/i) || [])[1] || "";
        return code.toUpperCase().replace(/-/g, "") === norm;
      });
      if (filtered.length > 0) return filtered;
    }

    return results;
  } catch (err) {
    console.error("search error: " + err.message);
    return [];
  }
}

async function loadDetail(link) {
  try {
    var html = await fetchHtml(link);

    var videoId   = extractVideoId(link);
    var videoCode = videoId.toUpperCase()
      .replace(/-CHINESE-SUBTITLE$/, "")
      .replace(/-UNCENSORED-LEAK$/, "");

    var videoUrl = null;

    // 1. surrit.com 直链 m3u8
    var surritMatch = html.match(/https:\/\/surrit\.com\/[a-f0-9-]+\/[^"'\s]*\.m3u8/);
    if (surritMatch) videoUrl = surritMatch[0];

    // 2. eval(function...) 中的 UUID → 拼接 playlist.m3u8
    if (!videoUrl) {
      var uuidMatch = html.match(/eval\(function[\s\S]{0,2000}?([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/);
      if (uuidMatch) videoUrl = "https://surrit.com/" + uuidMatch[1] + "/playlist.m3u8";
    }

    // 3. 任意裸 m3u8
    if (!videoUrl) {
      var m3u8Match = html.match(/(https?:\/\/[^\s'"<>]+\.m3u8[^\s'"<>]*)/);
      if (m3u8Match) videoUrl = m3u8Match[1];
    }

    if (!videoUrl) throw new Error("无法找到视频源");

    // 标题：og:title 优先，其次 <title>
    var ogMatch = html.match(/<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["']/i)
      || html.match(/content=["']([^"']+)["'][^>]*property=["']og:title["']/i);
    var title = "";
    if (ogMatch && ogMatch[1]) {
      title = ogMatch[1].trim();
    } else {
      var tMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      title = tMatch ? tMatch[1].replace(/\s*-\s*MissAV.*$/i, "").trim() : "";
    }
    if (!title) title = videoCode;

    console.log("loadDetail: videoUrl=" + (videoUrl ? "found" : "missing") + " title=" + title);

    return {
      title:       title,
      videoUrl:    videoUrl,
      posterUrl:   "https://fourhoi.com/" + videoId + "/cover-t.jpg",
      backdropUrl: "https://fourhoi.com/" + videoId + "/cover-t.jpg",
      customHeaders: {
        "Referer":    link,
        "User-Agent": UA
      }
    };
  } catch (err) {
    console.error("loadDetail error: " + err.message);
    throw err;
  }
}
