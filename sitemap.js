var tocConfig = {
  url: "http://www.solopulsa.com",
  feedNum: 6,
  labelName: (window.location.hash && window.location.hash != "#0" && window.location.hash != "#search") ? encodeURIComponent(window.location.hash.substr(1)) : false,
  numChars: 140,
  thumbWidth: 90,
  navText: "Load More &#9660;",
  frontText: "Top &uArr;",
  noImage: "data:image/png;base64,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",
  loading: "<span>Loading...</span>",
  searching: "<span>Searching...</span>",
  MonthNames: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
  noResult: "No Result"
};

function getID(b) {
  return document.getElementById(b)
}
var head = document.getElementsByTagName("head")[0],
  tocContainer = getID("feedContainer"),
  feedNav = getID("feedNav"),
  orderByer = getID("orderFeedBy"),
  labelSorter = getID("labelSorter"),
  input = getID("postSearcher").getElementsByTagName("input")[0],
  resultDesc = getID("resultDesc"),
  nextPage, feedArchive, startPage = 0;

function cropFeed(d, c) {
  var f = d.split("<");
  for (var e = 0; e < f.length; e++) {
    if (f[e].indexOf(">") != -1) {
      f[e] = f[e].substring(f[e].indexOf(">") + 1, f[e].length)
    }
  }
  f = f.join(" ");
  f = f.substring(0, c - 1);
  return f
}

function showLabels(c) {
  var a = c.feed.category,
    d = "";
  d = "<select id='labelSorter' onchange='changeSort(this.value);'>";
  d += "<option value='' selected>CATEGORY...</option>";
  for (var b = 0; b < a.length; b++) {
    d += "<option value='" + decodeURIComponent(a[b].term) + "'>" + a[b].term.toUpperCase() + "</option>"
  }
  d += "</select>";
  labelSorter.innerHTML = d
}

function showFeedList(t) {
  var m = t.feed.entry,
    o, s, n, h, e, u, g, p, r, q, c = "";
  if (typeof(t.feed.entry) !== "undefined") {
    for (var f = 0; f < tocConfig.feedNum; f++) {
      o = (m) ? m[f] : "", nextPage = "";
      if (f == t.feed.entry.length) {
        break
      }
      s = o.title.$t;
      for (var d = 0; d < o.link.length; d++) {
        if (o.link[d].rel == "alternate") {
          n = o.link[d].href;
          break
        }
      }
      for (var b = 0; b < t.feed.link.length; b++) {
        if (t.feed.link[b].rel == "next") {
          nextPage = t.feed.link[b].href
        }
      }
      for (var a = 0; a < o.link.length; a++) {
        if (o.link[a].rel == "replies" && o.link[a].type == "text/html") {
          q = o.link[a].title;
          break
        }
      }
      if ("content" in o) {
        e = o.content.$t
      } else {
        if ("summary" in o) {
          e = o.summary.$t
        } else {
          e = ""
        }
      }
      if ("media$thumbnail" in o) {
        h = o.media$thumbnail.url.replace(/\/s[0-9]+\-c/, "/s" + tocConfig.thumbWidth + "-c")
      } else {
        h = tocConfig.noImage.replace(/\/s[0-9]+\-c/, "/s" + tocConfig.thumbWidth + "-c")
      }
      postdate = o.published.$t.substring(0, 10), u = postdate.substring(0, 4), g = postdate.substring(5, 7), p = postdate.substring(8, 10), r = tocConfig.MonthNames[parseInt(g, 10) - 1];
      c += "<li><div class='inner'>";
      c += "<a href='" + n + "' target='_blank'><img style='width:" + tocConfig.thumbWidth + "px;height:" + tocConfig.thumbWidth + "px;' src='" + h + "' alt='" + s + "' /></a>";
      c += "<a class='toc-title' href='" + n + "' target='_blank'>" + s + "</a><strong> - (" + q + ")</strong><br>";
      c += "<div class='news-text'>" + cropFeed(e, tocConfig.numChars) + "&hellip;<br style='clear:both;'/></div>";
      c += '<div class="date"><span class="dd">' + p + '</span><span class="dm">' + r + '</span><span class="dy">' + u + "</span></div></div></li>"
    }
    if (input.value !== "" && window.location.hash == "#search") {
      resultDesc.innerHTML = "<span>Search result for keyword <strong>&quot;" + input.value + "&quot;</strong></span>"
    } else {
      resultDesc.innerHTML = ""
    }
    feedContainer.innerHTML += c;
    if (nextPage) {
      if (window.location.hash && window.location.hash !== "#0") {
        c = "<a href='javascript:initResult(2);' class='next'>" + tocConfig.navText + "</a>"
      } else {
        c = "<a href='javascript:initResult(1);' class='next'>" + tocConfig.navText + "</a>"
      }
    } else {
      c = "<a href='#table-outer' onclick='jQuery(&apos;html, body&apos;).animate({scrollTop: jQuery(&apos;#table-outer&apos;).offset().top}, 1500); return false' class='front'>" + tocConfig.frontText + "</a>"
    }
    feedNav.innerHTML = c;
    input.value = "";
    labelSorter.getElementsByTagName("select")[0].removeAttribute("disabled");
    orderByer.removeAttribute("disabled")
  } else {
    feedContainer.innerHTML = "";
    alert(tocConfig.noResult);
    feedNav.innerHTML = "<a href='?reload=true'>" + tocConfig.frontText + "</a>";
    searchDesc.innerHTML = ""
  }
}

function initResult(a) {
  var b, c;
  if (a == 1) {
    b = nextPage.indexOf("?");
    c = nextPage.substring(b)
  } else {
    if (a == 2) {
      b = nextPage.indexOf("?");
      c = nextPage.substring(b).replace(/\?/, "/-/" + window.location.hash.substr(1) + "?")
    } else {
      c = "?start-index=1&max-results=" + tocConfig.feedNum + "&orderby=" + orderByer.value + "&alt=json-in-script"
    }
  }
  c += "&callback=showFeedList";
  updateScript(c)
}

function removeScript() {
  var a = getID("temporer-script");
  a.parentNode.removeChild(a)
}

function buildLabels() {
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.src = (tocConfig.url === "" ? window.location.protocol + "//" + window.location.host : tocConfig.url) + "/feeds/posts/summary?max-results=0&alt=json-in-script&callback=showLabels";
  head.appendChild(a)
}

function updateScript(b) {
  if (startPage == 1) {
    removeScript()
  }
  feedNav.innerHTML = tocConfig.loading;
  if (tocConfig.labelName !== false) {
    feedArchive = (tocConfig.url === "" ? window.location.protocol + "//" + window.location.host : tocConfig.url) + "/feeds/posts/summary/-/" + tocConfig.labelName + b
  } else {
    feedArchive = (tocConfig.url === "" ? window.location.protocol + "//" + window.location.host : tocConfig.url) + "/feeds/posts/summary" + b
  }
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.src = feedArchive;
  a.id = "temporer-script";
  head.appendChild(a);
  startPage = 1
}

function changeSort(c) {
  removeScript();
  tocContainer.innerHTML = "";
  feedNav.innerHTML = tocConfig.loading;
  var b = document.createElement("script"),
    d = labelSorter.getElementsByTagName("select")[0],
    a = (c !== 0) ? "/-/" + c : "";
  b.type = "text/javascript";
  b.id = "temporer-script";
  b.src = (tocConfig.url === "" ? window.location.protocol + "//" + window.location.host : tocConfig.url) + "/feeds/posts/summary" + a + "?alt=json-in-script&max-results=" + tocConfig.feedNum + "&orderby=" + orderByer.value + "&callback=showFeedList";
  head.appendChild(b);
  d.disabled = true;
  orderByer.disabled = true;
  window.location.hash = c
}

function searchPost() {
  removeScript();
  tocContainer.innerHTML = "";
  resultDesc.innerHTML = "";
  feedNav.innerHTML = tocConfig.searching;
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.id = "temporer-script";
  a.src = (tocConfig.url === "" ? window.location.protocol + "//" + window.location.host : tocConfig.url) + "/feeds/posts/summary?alt=json-in-script&orderby=published&q=" + input.value + "&max-results=9999&callback=showFeedList";
  head.appendChild(a);
  window.location.hash = "#search";
  return false
}
getID("postSearcher").onsubmit = function() {
  return searchPost()
};
orderByer.onchange = function() {
  changeSort(0)
};
labelSorter.getElementsByTagName("select")[0].onchange = function() {
  changeSort(this.value)
};
window.onload = function() {
  initResult(0);
  buildLabels();
  window.location.hash = "#0"
};
