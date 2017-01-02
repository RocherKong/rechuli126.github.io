document.write('<div id="flo"></div><div id="aja"></div>');
function cklist(l1) {
    var I1 = '<input name="list" id="list_' + l1 + '" type="checkbox" value="' + l1 + '"/>';
    return I1;
};
function menu() {
    var sfEls = document.getElementById("menu").getElementsByTagName("li");
    for (var i = 0; i < sfEls.length; i++) {
        sfEls[i].onmouseover = function() {
            this.className += (this.className.length > 0 ? " ": "") + "sfhover";
        }
        sfEls[i].onMouseDown = function() {
            this.className += (this.className.length > 0 ? " ": "") + "sfhover";
        }
        sfEls[i].onMouseUp = function() {
            this.className += (this.className.length > 0 ? " ": "") + "sfhover";
        }
        sfEls[i].onmouseout = function() {
            this.className = this.className.replace(new RegExp("( ?|^)sfhover\\b"), "");
        }
    }
}
function check(obj) {
    for (var i = 0; i < obj.form.list.length; i++) {
        if (obj.form.list[i].checked == false) {
            obj.form.list[i].checked = true;
        }
        else {
            obj.form.list[i].checked = false;
        }
    };
    if (obj.form.list.length == undefined) {
        if (obj.form.list.checked == false) {
            obj.form.list.checked = true;
        } else {
            obj.form.list.checked = false;
        }
    }
}
function checkall(obj) {
    for (var i = 0; i < obj.form.list.length; i++) {
        obj.form.list[i].checked = true
    };
    if (obj.form.list.length == undefined) {
        obj.form.list.checked = true
    }
}
function checkno(obj) {
    for (var i = 0; i < obj.form.list.length; i++) {
        obj.form.list[i].checked = false
    };
    if (obj.form.list.length == undefined) {
        obj.form.list.checked = false
    }
}
function gm(url, id, obj) {
    if (obj.options[obj.selectedIndex].value != "" || obj.options[obj.selectedIndex].value != "-") {
        var I1 = escape(obj.options[obj.selectedIndex].value);
        var isconfirm;
        if (I1 == 'delete') {
            isconfirm = confirm(k_delete);
        } else {
            isconfirm = true
        };
        if (I1 != '-') {
            var verbs = "submits=" + I1 + "&list=" + escape(getchecked()); //选择框提交命令
            if (isconfirm) {
                posthtm(url, id, verbs);
            }
        }
    }
    if (obj.options[obj.selectedIndex].value) {
        obj.options[0].selected = true;
    }
}
function getchecked() {
    var strcheck;
    strcheck = "";
    for (var i = 0; i < document.form1.list.length; i++) {
        if (document.form1.list[i].checked) {
            if (strcheck == "") {
                strcheck = document.form1.list[i].value;
            }
            else {
                strcheck = strcheck + ',' + document.form1.list[i].value;
            }
        }
    }
    if (document.form1.list.length == undefined) {
        if (document.form1.list.checked == true) {
            strcheck = document.form1.list.value;
        }
    }
    return strcheck;
}
//load  *** Copyright &copy 杨文军.com All Rights Reserved ***
function load(id) {
    var doc = document.getElementById(id);
    if (id == 'aja' || id == 'flo') {
        if (id == 'aja') { //document.body.scrollTop
            var widthaja = (document.documentElement.scrollWidth - 680 - 30) / 2;
            doc.style.left = widthaja + 'px';
            doc.style.top = (document.documentElement.scrollTop + 90) + 'px';
            doc.innerHTML = '<div id="ajatitle"><span>Loading...</span><img src="' + king_page + 'system/images/close.gif" class="os" onclick="display(\'aja\')"/></div><div id="load"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>Loading...</div>';
        }
        else {
            var widthflo = (document.documentElement.scrollWidth - 360 - 30) / 2;
            doc.style.left = widthflo + 'px';
            doc.style.top = (document.documentElement.scrollTop + 190) + 'px';
            if (is != 0) {
				doc.innerHTML = '<div id="flotitle"><span>Loading...</span><img src="' + king_page + 'system/images/close.gif" class="os" onclick="display(\'aja\')"/></div><div id="flomain">Loading...</div>';
			}
        }
    }
    else {
        doc.innerHTML = '<img class=""os"" src="' + king_page + 'system/images/load.gif"/>';
    }
}
function getBrowserCount(id)
{
    var doc = document.getElementById(id);
    doc.innerHTML = Math.floor(Math.random() * 1000) + 1;
 //  return Math.floor(Math.random() * 1000) + 1;
}
function posthtm2(browsercountid,url, id, verbs, is)
{
    var doc = document.getElementById(browsercountid);
    doc.innerHTML = Math.floor(Math.random() * 1000) + 1;
}
//posthtm  *** Copyright &copy 杨文军.com All Rights Reserved ***
function posthtm(url, id, verbs, is) { //is null or 1
    var doc = document.getElementById(id);
    load(id);
    //	doc.innerHTML='<span><img src="image/load.gif"/>Loading...</span>';
    var xmlhttp = false;
    if (doc != null) {
        doc.style.visibility = "visible";
        if (doc.style.visibility == "visible") {
            xmlhttp = ajax_driv();
            xmlhttp.open("POST", url, true);
            xmlhttp.setRequestHeader("If-Modified-Since", "Thu, 01 Jan 1970 00:00:00 GMT");
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4) {
                    if (is || is == null) {
                        doc.innerHTML = xmlhttp.responseText;
                    }
                    else {
                        var data = {};
                        data = eval('(' + xmlhttp.responseText + ')');
                        doc.innerHTML = data.main;
                        eval(data.js);
                    };
                }
            }
            xmlhttp.setRequestHeader("Content-Length", verbs.length);
            xmlhttp.setRequestHeader("CONTENT-TYPE", "application/x-www-form-urlencoded");
            xmlhttp.send(verbs);
        }
    }
}
//gethtm  *** Copyright &copy 杨文军.com All Rights Reserved ***
function gethtm(url, id, is) {
    var doc = document.getElementById(id);
    load(id);
    var xmlhttp = false;
    if (doc != null) {
        doc.style.visibility = "visible";
        if (doc.style.visibility == "visible") {
            xmlhttp = ajax_driv();
            xmlhttp.open("GET", url, true);
            xmlhttp.setRequestHeader("If-Modified-Since", "Thu, 01 Jan 1970 00:00:00 GMT");
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4) {
                    if (is || is == null) {
                        doc.innerHTML = xmlhttp.responseText;
                    } else {
                        eval(xmlhttp.responseText);
                    };
                }
            }
            xmlhttp.send(null);
        }
    }
}
//getdom  *** Copyright &copy 杨文军.com All Rights Reserved ***
function getdom(url) {
    var xmlhttp = false;
    var I1;
    xmlhttp = ajax_driv();
    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader("If-Modified-Since", "Thu, 01 Jan 1970 00:00:00 GMT");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            I1 = xmlhttp.responseText;
        }
    }
    xmlhttp.send(null);
    return I1;
}
//display  *** Copyright &copy 杨文军.com All Rights Reserved ***
function display(id) {
    var doc = document.getElementById(id);
    if (doc != null) {
        doc.style.visibility = "hidden";
    }
}
//ajax_driv  *** Copyright &copy 杨文军.com All Rights Reserved ***
function ajax_driv() {
    var xmlhttp;
    if (window.ActiveXObject) {
        /* 不要删除以下注释，这部分不是注释 */
        /*@cc_on @*/
        /*@if (@_jscript_version >= 5)
		try {
		  xmlhttp = new ActiveXObject("Msxml2.xmlhttp");
		} catch (e) {
		  try {
			xmlhttp = new ActiveXObject("Microsoft.xmlhttp");
		  } catch (e) {
			xmlhttp = false;
		  }
		}
		@end @*/
    } else {
        xmlhttp = new XMLHttpRequest();
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}
//readCookie  *** Copyright &copy 杨文军.com All Rights Reserved ***
function readCookie(l1) { //一维数组直接写值即可，二维数组用垂直线分开
    var I1 = "";
    if (l1.indexOf("|") != -1) { //包含垂直线，是二维cookie
        var I2 = l1.split("|");
        var I3 = i_readCookie(I2[0], document.cookie);
        I1 = i_readCookie(I2[1], I3);
    }
    else { //一维数组
        if (document.cookie.length > 0) {
            I1 = i_readCookie(l1, document.cookie)
        }

    }
    return I1;

}
//i_readCookie  *** Copyright &copy 杨文军.com All Rights Reserved ***
function i_readCookie(l1, l2) {
    var cookieValue = "";
    var search = l1 + "=";
    if (l2.length > 0) {
        offset = l2.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = l2.indexOf(";", offset);
            if (end == -1) end = l2.length;
            cookieValue = unescape(l2.substring(offset, end))
        }
    }
    return cookieValue;

}