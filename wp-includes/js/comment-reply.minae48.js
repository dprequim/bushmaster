/*! This file is auto-generated */
window.addComment = function(v) {
  var I, C, h, E = v.document,
      b = {
          commentReplyClass: "comment-reply-link",
          commentReplyTitleId: "reply-title",
          cancelReplyId: "cancel-comment-reply-link",
          commentFormId: "commentform",
          temporaryFormId: "wp-temp-form-div",
          parentIdFieldId: "comment_parent",
          postIdFieldId: "comment_post_ID"
      },
      e = v.MutationObserver || v.WebKitMutationObserver || v.MozMutationObserver,
      r = "querySelector" in E && "addEventListener" in v,
      n = !!E.documentElement.dataset;

  function t() {
      d(), e && new e(o).observe(E.body, {
          childList: !0,
          subtree: !0
      })
  }

  function d(e) {
      if (r && (I = g(b.cancelReplyId), C = g(b.commentFormId), I)) {
          I.addEventListener("touchstart", l), I.addEventListener("click", l);

          function t(e) {
              if ((e.metaKey || e.ctrlKey) && 13 === e.keyCode) return C.removeEventListener("keydown", t), e.preventDefault(), C.submit.click(), !1
          }
          C && C.addEventListener("keydown", t);
          for (var n, d = function(e) {
                  var t = b.commentReplyClass;
                  e && e.childNodes || (e = E);
                  e = E.getElementsByClassName ? e.getElementsByClassName(t) : e.querySelectorAll("." + t);
                  return e
              }(e), o = 0, i = d.length; o < i; o++)(n = d[o]).addEventListener("touchstart", a), n.addEventListener("click", a)
      }
  }

  function l(e) {
      var t, n, d = g(b.temporaryFormId);
      d && h && (g(b.parentIdFieldId).value = "0", t = d.textContent, d.parentNode.replaceChild(h, d), this.style.display = "none", n = (d = (d = g(b.commentReplyTitleId)) && d.firstChild) && d.nextSibling, d && d.nodeType === Node.TEXT_NODE && t && (n && "A" === n.nodeName && n.id !== b.cancelReplyId && (n.style.display = ""), d.textContent = t), e.preventDefault())
  }

  function a(e) {
      var t = g(b.commentReplyTitleId),
          t = t && t.firstChild.textContent,
          n = this,
          d = m(n, "belowelement"),
          o = m(n, "commentid"),
          i = m(n, "respondelement"),
          r = m(n, "postid"),
          n = m(n, "replyto") || t;
      d && o && i && r && !1 === v.addComment.moveForm(d, o, i, r, n) && e.preventDefault()
  }

  function o(e) {
      for (var t = e.length; t--;)
          if (e[t].addedNodes.length) return void d()
  }

  function m(e, t) {
      return n ? e.dataset[t] : e.getAttribute("data-" + t)
  }

  function g(e) {
      return E.getElementById(e)
  }
  return r && "loading" !== E.readyState ? t() : r && v.addEventListener("DOMContentLoaded", t, !1), {
      init: d,
      moveForm: function(e, t, n, d, o) {
          var i, r, l, a, m, c, s, e = g(e),
              n = (h = g(n), g(b.parentIdFieldId)),
              y = g(b.postIdFieldId),
              p = g(b.commentReplyTitleId),
              u = (p = p && p.firstChild) && p.nextSibling;
          if (e && h && n) {
              void 0 === o && (o = p && p.textContent), a = h, m = b.temporaryFormId, c = g(m), s = (s = g(b.commentReplyTitleId)) ? s.firstChild.textContent : "", c || ((c = E.createElement("div")).id = m, c.style.display = "none", c.textContent = s, a.parentNode.insertBefore(c, a)), d && y && (y.value = d), n.value = t, I.style.display = "", e.parentNode.insertBefore(h, e.nextSibling), p && p.nodeType === Node.TEXT_NODE && (u && "A" === u.nodeName && u.id !== b.cancelReplyId && (u.style.display = "none"), p.textContent = o), I.onclick = function() {
                  return !1
              };
              try {
                  for (var f = 0; f < C.elements.length; f++)
                      if (i = C.elements[f], r = !1, "getComputedStyle" in v ? l = v.getComputedStyle(i) : E.documentElement.currentStyle && (l = i.currentStyle), (i.offsetWidth <= 0 && i.offsetHeight <= 0 || "hidden" === l.visibility) && (r = !0), "hidden" !== i.type && !i.disabled && !r) {
                          i.focus();
                          break
                      }
              } catch (e) {}
              return !1
          }
      }
  }
}(window);