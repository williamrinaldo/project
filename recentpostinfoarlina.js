function recentpostinfoarlina(_data) {
  document.write('<ul class="recent_posts_arlina">');
  var j = 0;
  for (; j < numposts; j++) {
    var l;
    var data = _data.feed.entry[j];
    var video1title = data.title.$t;
    if (j == _data.feed.entry.length) {
      break;
    }
    var i = 0;
    for (; i < data.link.length; i++) {
      if ("replies" == data.link[i].rel && "text/html" == data.link[i].type) {
        var spacingPx = data.link[i].title;
        var entityUrl = data.link[i].href;
      }
      if ("alternate" == data.link[i].rel) {
        l = data.link[i].href;
        break;
      }
    }
    var url_salt;
    try {
      url_salt = data.media$thumbnail.url;
    } catch (h) {
      s = data.content.$t;
      a = s.indexOf("<img");
      b = s.indexOf('src="', a);
      c = s.indexOf('"', b + 5);
      d = s.substr(b + 5, c - b - 5);
      url_salt = -1 != a && -1 != b && -1 != c && "" != d ? d : "https://2.bp.blogspot.com/-Q6S8qhkE33I/V0VwhvhULoI/AAAAAAAAHfQ/VZkkOgl_wX4X59EP31Jpl1swFsj6-n0TQCLcB/s1600/InfoArlina.png";
    }
    var summary = data.published.$t;
    var spacingRulerPx = summary.substring(0, 4);
    var total_pageviews_raw = summary.substring(5, 7);
    var _transactionName = summary.substring(8, 10);
    var month = new Array;
    if (month[1] = "Jan", month[2] = "Feb", month[3] = "Mar", month[4] = "Apr", month[5] = "May", month[6] = "Jun", month[7] = "Jul", month[8] = "Aug", month[9] = "Sep", month[10] = "Oct", month[11] = "Nov", month[12] = "Dec", document.write('<li class="clearfix">'), 1 == showpostthumbnails && document.write('<span class="wrapinfo"><img class="recent_thumb" src="' + url_salt + '"/></span>'), document.write('<b><a href="' + l + '" target ="_top">' + video1title + "</a></b>"), "content" in data) {
      var id = data.content.$t;
    } else {
      if ("summary" in data) {
        id = data.summary.$t;
      } else {
        id = "";
      }
    }
    var VARS_RE = /<\S[^>]*>/g;
    if (id = id.replace(VARS_RE, ""), 1 == showpostsummary) {
      if (id.length < numchars) {
        document.write("<i>");
        document.write(id);
        document.write("</i>");
      } else {
        document.write("<i>");
        id = id.substring(0, numchars);
        var indexOfSlash = id.lastIndexOf(" ");
        id = id.substring(0, indexOfSlash);
        document.write(id + "...");
        document.write("</i>");
      }
    }
    var x = "";
  
    var $ = 0;
    document.write;
    if (1 == showpostdate) {
      
      x = x + month[parseInt(total_pageviews_raw, 10)] + "-" + _transactionName + " - " + spacingRulerPx;
      
      $ = 1;
    }
    if (1 == showcommentnum) {
      if (1 == $) {
        
        x = x + " | ";
      }
      if ("1 Comments" == spacingPx) {
        
        spacingPx = "1 Comment";
      }
      if ("0 Comments" == spacingPx) {
        
        spacingPx = "No Comments";
      }
      
      spacingPx = '<a href="' + entityUrl + '" target ="_top">' + spacingPx + "</a>";
      
      x = x + spacingPx;
      
      $ = 1;
    }
    if (1 == displaymore) {
      if (1 == $) {
        
        x = x + " | ";
      }
      
      x = x + '<a href="' + l + '" class="url" target ="_top">More -></a>';
      
      $ = 1;
    }
    document.write(x);
    document.write("</li>");
    if (1 == displayseparator && j != numposts - 1) {
      document.write("<hr size=0.5>");
    }
  }
  document.write("</ul>");
}
;