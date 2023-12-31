!(function (t) {
  function e(i) {
    if (n[i]) return n[i].exports;
    var r = (n[i] = { i: i, l: !1, exports: {} });
    return t[i].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
  }
  var n = {};
  (e.m = t),
    (e.c = n),
    (e.d = function (t, n, i) {
      e.o(t, n) ||
        Object.defineProperty(t, n, {
          configurable: !1,
          enumerable: !0,
          get: i,
        });
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = "dist"),
    e((e.s = 7));
})([
  function (t, e, n) {
    var i, r;
    !(function (o, s) {
      (i = [n(17)]),
        void 0 !==
          (r = function (t) {
            return s(o, t);
          }.apply(e, i)) && (t.exports = r);
    })(window, function (t, e) {
      "use strict";
      var n = {};
      (n.extend = function (t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }),
        (n.modulo = function (t, e) {
          return ((t % e) + e) % e;
        });
      var i = Array.prototype.slice;
      (n.makeArray = function (t) {
        return Array.isArray(t)
          ? t
          : null === t || void 0 === t
          ? []
          : "object" == typeof t && "number" == typeof t.length
          ? i.call(t)
          : [t];
      }),
        (n.removeFrom = function (t, e) {
          var n = t.indexOf(e);
          -1 != n && t.splice(n, 1);
        }),
        (n.getParent = function (t, n) {
          for (; t.parentNode && t != document.body; )
            if (((t = t.parentNode), e(t, n))) return t;
        }),
        (n.getQueryElement = function (t) {
          return "string" == typeof t ? document.querySelector(t) : t;
        }),
        (n.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (n.filterFindElements = function (t, i) {
          t = n.makeArray(t);
          var r = [];
          return (
            t.forEach(function (t) {
              if (t instanceof HTMLElement) {
                if (!i) return void r.push(t);
                e(t, i) && r.push(t);
                for (var n = t.querySelectorAll(i), o = 0; o < n.length; o++)
                  r.push(n[o]);
              }
            }),
            r
          );
        }),
        (n.debounceMethod = function (t, e, n) {
          n = n || 100;
          var i = t.prototype[e],
            r = e + "Timeout";
          t.prototype[e] = function () {
            var t = this[r];
            clearTimeout(t);
            var e = arguments,
              o = this;
            this[r] = setTimeout(function () {
              i.apply(o, e), delete o[r];
            }, n);
          };
        }),
        (n.docReady = function (t) {
          var e = document.readyState;
          "complete" == e || "interactive" == e
            ? setTimeout(t)
            : document.addEventListener("DOMContentLoaded", t);
        }),
        (n.toDashed = function (t) {
          return t
            .replace(/(.)([A-Z])/g, function (t, e, n) {
              return e + "-" + n;
            })
            .toLowerCase();
        });
      var r = t.console;
      return (
        (n.htmlInit = function (e, i) {
          n.docReady(function () {
            var o = n.toDashed(i),
              s = "data-" + o,
              a = document.querySelectorAll("[" + s + "]"),
              l = document.querySelectorAll(".js-" + o),
              c = n.makeArray(a).concat(n.makeArray(l)),
              u = s + "-options",
              h = t.jQuery;
            c.forEach(function (t) {
              var n,
                o = t.getAttribute(s) || t.getAttribute(u);
              try {
                n = o && JSON.parse(o);
              } catch (e) {
                return void (
                  r &&
                  r.error(
                    "Error parsing " + s + " on " + t.className + ": " + e
                  )
                );
              }
              var a = new e(t, n);
              h && h.data(t, i, a);
            });
          });
        }),
        n
      );
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (o, s) {
      (i = [n(3), n(4), n(0), n(18), n(19), n(20)]),
        void 0 !==
          (r = function (t, e, n, i, r, a) {
            return s(o, t, e, n, i, r, a);
          }.apply(e, i)) && (t.exports = r);
    })(window, function (t, e, n, i, r, o, s) {
      "use strict";
      function a(t, e) {
        for (t = i.makeArray(t); t.length; ) e.appendChild(t.shift());
      }
      function l(t, e) {
        var n = i.getQueryElement(t);
        if (!n)
          return void (h && h.error("Bad element for Flickity: " + (n || t)));
        if (((this.element = n), this.element.flickityGUID)) {
          var r = f[this.element.flickityGUID];
          return r.option(e), r;
        }
        c && (this.$element = c(this.element)),
          (this.options = i.extend({}, this.constructor.defaults)),
          this.option(e),
          this._create();
      }
      var c = t.jQuery,
        u = t.getComputedStyle,
        h = t.console,
        d = 0,
        f = {};
      (l.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: 0.075,
        friction: 0.28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: 0.025,
        setGallerySize: !0,
      }),
        (l.createMethods = []);
      var p = l.prototype;
      i.extend(p, e.prototype),
        (p._create = function () {
          var e = (this.guid = ++d);
          (this.element.flickityGUID = e),
            (f[e] = this),
            (this.selectedIndex = 0),
            (this.restingFrames = 0),
            (this.x = 0),
            (this.velocity = 0),
            (this.originSide = this.options.rightToLeft ? "right" : "left"),
            (this.viewport = document.createElement("div")),
            (this.viewport.className = "flickity-viewport"),
            this._createSlider(),
            (this.options.resize || this.options.watchCSS) &&
              t.addEventListener("resize", this),
            l.createMethods.forEach(function (t) {
              this[t]();
            }, this),
            this.options.watchCSS ? this.watchCSS() : this.activate();
        }),
        (p.option = function (t) {
          i.extend(this.options, t);
        }),
        (p.activate = function () {
          if (!this.isActive) {
            (this.isActive = !0),
              this.element.classList.add("flickity-enabled"),
              this.options.rightToLeft &&
                this.element.classList.add("flickity-rtl"),
              this.getSize(),
              a(
                this._filterFindCellElements(this.element.children),
                this.slider
              ),
              this.viewport.appendChild(this.slider),
              this.element.appendChild(this.viewport),
              this.reloadCells(),
              this.options.accessibility &&
                ((this.element.tabIndex = 0),
                this.element.addEventListener("keydown", this)),
              this.emitEvent("activate");
            var t,
              e = this.options.initialIndex;
            (t = this.isInitActivated
              ? this.selectedIndex
              : void 0 !== e && this.cells[e]
              ? e
              : 0),
              this.select(t, !1, !0),
              (this.isInitActivated = !0);
          }
        }),
        (p._createSlider = function () {
          var t = document.createElement("div");
          (t.className = "flickity-slider"),
            (t.style[this.originSide] = 0),
            (this.slider = t);
        }),
        (p._filterFindCellElements = function (t) {
          return i.filterFindElements(t, this.options.cellSelector);
        }),
        (p.reloadCells = function () {
          (this.cells = this._makeCells(this.slider.children)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize();
        }),
        (p._makeCells = function (t) {
          return this._filterFindCellElements(t).map(function (t) {
            return new r(t, this);
          }, this);
        }),
        (p.getLastCell = function () {
          return this.cells[this.cells.length - 1];
        }),
        (p.getLastSlide = function () {
          return this.slides[this.slides.length - 1];
        }),
        (p.positionCells = function () {
          this._sizeCells(this.cells), this._positionCells(0);
        }),
        (p._positionCells = function (t) {
          (t = t || 0), (this.maxCellHeight = t ? this.maxCellHeight || 0 : 0);
          var e = 0;
          if (t > 0) {
            var n = this.cells[t - 1];
            e = n.x + n.size.outerWidth;
          }
          for (var i = this.cells.length, r = t; r < i; r++) {
            var o = this.cells[r];
            o.setPosition(e),
              (e += o.size.outerWidth),
              (this.maxCellHeight = Math.max(
                o.size.outerHeight,
                this.maxCellHeight
              ));
          }
          (this.slideableWidth = e),
            this.updateSlides(),
            this._containSlides(),
            (this.slidesWidth = i
              ? this.getLastSlide().target - this.slides[0].target
              : 0);
        }),
        (p._sizeCells = function (t) {
          t.forEach(function (t) {
            t.getSize();
          });
        }),
        (p.updateSlides = function () {
          if (((this.slides = []), this.cells.length)) {
            var t = new o(this);
            this.slides.push(t);
            var e = "left" == this.originSide,
              n = e ? "marginRight" : "marginLeft",
              i = this._getCanCellFit();
            this.cells.forEach(function (e, r) {
              if (!t.cells.length) return void t.addCell(e);
              var s =
                t.outerWidth - t.firstMargin + (e.size.outerWidth - e.size[n]);
              i.call(this, r, s)
                ? t.addCell(e)
                : (t.updateTarget(),
                  (t = new o(this)),
                  this.slides.push(t),
                  t.addCell(e));
            }, this),
              t.updateTarget(),
              this.updateSelectedSlide();
          }
        }),
        (p._getCanCellFit = function () {
          var t = this.options.groupCells;
          if (!t)
            return function () {
              return !1;
            };
          if ("number" == typeof t) {
            var e = parseInt(t, 10);
            return function (t) {
              return t % e != 0;
            };
          }
          var n = "string" == typeof t && t.match(/^(\d+)%$/),
            i = n ? parseInt(n[1], 10) / 100 : 1;
          return function (t, e) {
            return e <= (this.size.innerWidth + 1) * i;
          };
        }),
        (p._init = p.reposition =
          function () {
            this.positionCells(), this.positionSliderAtSelected();
          }),
        (p.getSize = function () {
          (this.size = n(this.element)),
            this.setCellAlign(),
            (this.cursorPosition = this.size.innerWidth * this.cellAlign);
        });
      var g = {
        center: { left: 0.5, right: 0.5 },
        left: { left: 0, right: 1 },
        right: { right: 0, left: 1 },
      };
      return (
        (p.setCellAlign = function () {
          var t = g[this.options.cellAlign];
          this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
        }),
        (p.setGallerySize = function () {
          if (this.options.setGallerySize) {
            var t =
              this.options.adaptiveHeight && this.selectedSlide
                ? this.selectedSlide.height
                : this.maxCellHeight;
            this.viewport.style.height = t + "px";
          }
        }),
        (p._getWrapShiftCells = function () {
          if (this.options.wrapAround) {
            this._unshiftCells(this.beforeShiftCells),
              this._unshiftCells(this.afterShiftCells);
            var t = this.cursorPosition,
              e = this.cells.length - 1;
            (this.beforeShiftCells = this._getGapCells(t, e, -1)),
              (t = this.size.innerWidth - this.cursorPosition),
              (this.afterShiftCells = this._getGapCells(t, 0, 1));
          }
        }),
        (p._getGapCells = function (t, e, n) {
          for (var i = []; t > 0; ) {
            var r = this.cells[e];
            if (!r) break;
            i.push(r), (e += n), (t -= r.size.outerWidth);
          }
          return i;
        }),
        (p._containSlides = function () {
          if (
            this.options.contain &&
            !this.options.wrapAround &&
            this.cells.length
          ) {
            var t = this.options.rightToLeft,
              e = t ? "marginRight" : "marginLeft",
              n = t ? "marginLeft" : "marginRight",
              i = this.slideableWidth - this.getLastCell().size[n],
              r = i < this.size.innerWidth,
              o = this.cursorPosition + this.cells[0].size[e],
              s = i - this.size.innerWidth * (1 - this.cellAlign);
            this.slides.forEach(function (t) {
              r
                ? (t.target = i * this.cellAlign)
                : ((t.target = Math.max(t.target, o)),
                  (t.target = Math.min(t.target, s)));
            }, this);
          }
        }),
        (p.dispatchEvent = function (t, e, n) {
          var i = e ? [e].concat(n) : n;
          if ((this.emitEvent(t, i), c && this.$element)) {
            t += this.options.namespaceJQueryEvents ? ".flickity" : "";
            var r = t;
            if (e) {
              var o = c.Event(e);
              (o.type = t), (r = o);
            }
            this.$element.trigger(r, n);
          }
        }),
        (p.select = function (t, e, n) {
          this.isActive &&
            ((t = parseInt(t, 10)),
            this._wrapSelect(t),
            (this.options.wrapAround || e) &&
              (t = i.modulo(t, this.slides.length)),
            this.slides[t] &&
              ((this.selectedIndex = t),
              this.updateSelectedSlide(),
              n ? this.positionSliderAtSelected() : this.startAnimation(),
              this.options.adaptiveHeight && this.setGallerySize(),
              this.dispatchEvent("select"),
              this.dispatchEvent("cellSelect")));
        }),
        (p._wrapSelect = function (t) {
          var e = this.slides.length;
          if (!(this.options.wrapAround && e > 1)) return t;
          var n = i.modulo(t, e),
            r = Math.abs(n - this.selectedIndex),
            o = Math.abs(n + e - this.selectedIndex),
            s = Math.abs(n - e - this.selectedIndex);
          !this.isDragSelect && o < r
            ? (t += e)
            : !this.isDragSelect && s < r && (t -= e),
            t < 0
              ? (this.x -= this.slideableWidth)
              : t >= e && (this.x += this.slideableWidth);
        }),
        (p.previous = function (t, e) {
          this.select(this.selectedIndex - 1, t, e);
        }),
        (p.next = function (t, e) {
          this.select(this.selectedIndex + 1, t, e);
        }),
        (p.updateSelectedSlide = function () {
          var t = this.slides[this.selectedIndex];
          t &&
            (this.unselectSelectedSlide(),
            (this.selectedSlide = t),
            t.select(),
            (this.selectedCells = t.cells),
            (this.selectedElements = t.getCellElements()),
            (this.selectedCell = t.cells[0]),
            (this.selectedElement = this.selectedElements[0]));
        }),
        (p.unselectSelectedSlide = function () {
          this.selectedSlide && this.selectedSlide.unselect();
        }),
        (p.selectCell = function (t, e, n) {
          var i;
          "number" == typeof t
            ? (i = this.cells[t])
            : ("string" == typeof t && (t = this.element.querySelector(t)),
              (i = this.getCell(t)));
          for (var r = 0; i && r < this.slides.length; r++)
            if (-1 != this.slides[r].cells.indexOf(i))
              return void this.select(r, e, n);
        }),
        (p.getCell = function (t) {
          for (var e = 0; e < this.cells.length; e++) {
            var n = this.cells[e];
            if (n.element == t) return n;
          }
        }),
        (p.getCells = function (t) {
          t = i.makeArray(t);
          var e = [];
          return (
            t.forEach(function (t) {
              var n = this.getCell(t);
              n && e.push(n);
            }, this),
            e
          );
        }),
        (p.getCellElements = function () {
          return this.cells.map(function (t) {
            return t.element;
          });
        }),
        (p.getParentCell = function (t) {
          return (
            this.getCell(t) ||
            ((t = i.getParent(t, ".flickity-slider > *")), this.getCell(t))
          );
        }),
        (p.getAdjacentCellElements = function (t, e) {
          if (!t) return this.selectedSlide.getCellElements();
          e = void 0 === e ? this.selectedIndex : e;
          var n = this.slides.length;
          if (1 + 2 * t >= n) return this.getCellElements();
          for (var r = [], o = e - t; o <= e + t; o++) {
            var s = this.options.wrapAround ? i.modulo(o, n) : o,
              a = this.slides[s];
            a && (r = r.concat(a.getCellElements()));
          }
          return r;
        }),
        (p.uiChange = function () {
          this.emitEvent("uiChange");
        }),
        (p.childUIPointerDown = function (t) {
          this.emitEvent("childUIPointerDown", [t]);
        }),
        (p.onresize = function () {
          this.watchCSS(), this.resize();
        }),
        i.debounceMethod(l, "onresize", 150),
        (p.resize = function () {
          if (this.isActive) {
            this.getSize(),
              this.options.wrapAround &&
                (this.x = i.modulo(this.x, this.slideableWidth)),
              this.positionCells(),
              this._getWrapShiftCells(),
              this.setGallerySize(),
              this.emitEvent("resize");
            var t = this.selectedElements && this.selectedElements[0];
            this.selectCell(t, !1, !0);
          }
        }),
        (p.watchCSS = function () {
          this.options.watchCSS &&
            (-1 != u(this.element, ":after").content.indexOf("flickity")
              ? this.activate()
              : this.deactivate());
        }),
        (p.onkeydown = function (t) {
          if (
            this.options.accessibility &&
            (!document.activeElement || document.activeElement == this.element)
          )
            if (37 == t.keyCode) {
              var e = this.options.rightToLeft ? "next" : "previous";
              this.uiChange(), this[e]();
            } else if (39 == t.keyCode) {
              var n = this.options.rightToLeft ? "previous" : "next";
              this.uiChange(), this[n]();
            }
        }),
        (p.deactivate = function () {
          this.isActive &&
            (this.element.classList.remove("flickity-enabled"),
            this.element.classList.remove("flickity-rtl"),
            this.cells.forEach(function (t) {
              t.destroy();
            }),
            this.unselectSelectedSlide(),
            this.element.removeChild(this.viewport),
            a(this.slider.children, this.element),
            this.options.accessibility &&
              (this.element.removeAttribute("tabIndex"),
              this.element.removeEventListener("keydown", this)),
            (this.isActive = !1),
            this.emitEvent("deactivate"));
        }),
        (p.destroy = function () {
          this.deactivate(),
            t.removeEventListener("resize", this),
            this.emitEvent("destroy"),
            c && this.$element && c.removeData(this.element, "flickity"),
            delete this.element.flickityGUID,
            delete f[this.guid];
        }),
        i.extend(p, s),
        (l.data = function (t) {
          t = i.getQueryElement(t);
          var e = t && t.flickityGUID;
          return e && f[e];
        }),
        i.htmlInit(l, "flickity"),
        c && c.bridget && c.bridget("flickity", l),
        (l.setJQuery = function (t) {
          c = t;
        }),
        (l.Cell = r),
        l
      );
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (e, n) {
      "use strict";
      "object" == typeof t && "object" == typeof t.exports
        ? (t.exports = e.document
            ? n(e, !0)
            : function (t) {
                if (!t.document)
                  throw new Error("jQuery requires a window with a document");
                return n(t);
              })
        : n(e);
    })("undefined" != typeof window ? window : this, function (n, o) {
      "use strict";
      function s(t, e) {
        e = e || st;
        var n = e.createElement("script");
        (n.text = t), e.head.appendChild(n).parentNode.removeChild(n);
      }
      function a(t) {
        var e = !!t && "length" in t && t.length,
          n = yt.type(t);
        return (
          "function" !== n &&
          !yt.isWindow(t) &&
          ("array" === n ||
            0 === e ||
            ("number" == typeof e && e > 0 && e - 1 in t))
        );
      }
      function l(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      }
      function c(t, e, n) {
        return yt.isFunction(e)
          ? yt.grep(t, function (t, i) {
              return !!e.call(t, i, t) !== n;
            })
          : e.nodeType
          ? yt.grep(t, function (t) {
              return (t === e) !== n;
            })
          : "string" != typeof e
          ? yt.grep(t, function (t) {
              return ht.call(e, t) > -1 !== n;
            })
          : At.test(e)
          ? yt.filter(e, t, n)
          : ((e = yt.filter(e, t)),
            yt.grep(t, function (t) {
              return ht.call(e, t) > -1 !== n && 1 === t.nodeType;
            }));
      }
      function u(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
      }
      function h(t) {
        var e = {};
        return (
          yt.each(t.match(Pt) || [], function (t, n) {
            e[n] = !0;
          }),
          e
        );
      }
      function d(t) {
        return t;
      }
      function f(t) {
        throw t;
      }
      function p(t, e, n, i) {
        var r;
        try {
          t && yt.isFunction((r = t.promise))
            ? r.call(t).done(e).fail(n)
            : t && yt.isFunction((r = t.then))
            ? r.call(t, e, n)
            : e.apply(void 0, [t].slice(i));
        } catch (t) {
          n.apply(void 0, [t]);
        }
      }
      function g() {
        st.removeEventListener("DOMContentLoaded", g),
          n.removeEventListener("load", g),
          yt.ready();
      }
      function m() {
        this.expando = yt.expando + m.uid++;
      }
      function v(t) {
        return (
          "true" === t ||
          ("false" !== t &&
            ("null" === t
              ? null
              : t === +t + ""
              ? +t
              : Ft.test(t)
              ? JSON.parse(t)
              : t))
        );
      }
      function y(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
          if (
            ((i = "data-" + e.replace(Bt, "-$&").toLowerCase()),
            "string" == typeof (n = t.getAttribute(i)))
          ) {
            try {
              n = v(n);
            } catch (t) {}
            Wt.set(t, e, n);
          } else n = void 0;
        return n;
      }
      function b(t, e, n, i) {
        var r,
          o = 1,
          s = 20,
          a = i
            ? function () {
                return i.cur();
              }
            : function () {
                return yt.css(t, e, "");
              },
          l = a(),
          c = (n && n[3]) || (yt.cssNumber[e] ? "" : "px"),
          u = (yt.cssNumber[e] || ("px" !== c && +l)) && zt.exec(yt.css(t, e));
        if (u && u[3] !== c) {
          (c = c || u[3]), (n = n || []), (u = +l || 1);
          do {
            (o = o || ".5"), (u /= o), yt.style(t, e, u + c);
          } while (o !== (o = a() / l) && 1 !== o && --s);
        }
        return (
          n &&
            ((u = +u || +l || 0),
            (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = c), (i.start = u), (i.end = r))),
          r
        );
      }
      function _(t) {
        var e,
          n = t.ownerDocument,
          i = t.nodeName,
          r = Kt[i];
        return (
          r ||
          ((e = n.body.appendChild(n.createElement(i))),
          (r = yt.css(e, "display")),
          e.parentNode.removeChild(e),
          "none" === r && (r = "block"),
          (Kt[i] = r),
          r)
        );
      }
      function E(t, e) {
        for (var n, i, r = [], o = 0, s = t.length; o < s; o++)
          (i = t[o]),
            i.style &&
              ((n = i.style.display),
              e
                ? ("none" === n &&
                    ((r[o] = jt.get(i, "display") || null),
                    r[o] || (i.style.display = "")),
                  "" === i.style.display && Vt(i) && (r[o] = _(i)))
                : "none" !== n && ((r[o] = "none"), jt.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o]);
        return t;
      }
      function T(t, e) {
        var n;
        return (
          (n =
            void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e || "*")
              : void 0 !== t.querySelectorAll
              ? t.querySelectorAll(e || "*")
              : []),
          void 0 === e || (e && l(t, e)) ? yt.merge([t], n) : n
        );
      }
      function w(t, e) {
        for (var n = 0, i = t.length; n < i; n++)
          jt.set(t[n], "globalEval", !e || jt.get(e[n], "globalEval"));
      }
      function C(t, e, n, i, r) {
        for (
          var o,
            s,
            a,
            l,
            c,
            u,
            h = e.createDocumentFragment(),
            d = [],
            f = 0,
            p = t.length;
          f < p;
          f++
        )
          if ((o = t[f]) || 0 === o)
            if ("object" === yt.type(o)) yt.merge(d, o.nodeType ? [o] : o);
            else if (Jt.test(o)) {
              for (
                s = s || h.appendChild(e.createElement("div")),
                  a = (Qt.exec(o) || ["", ""])[1].toLowerCase(),
                  l = Yt[a] || Yt._default,
                  s.innerHTML = l[1] + yt.htmlPrefilter(o) + l[2],
                  u = l[0];
                u--;

              )
                s = s.lastChild;
              yt.merge(d, s.childNodes),
                (s = h.firstChild),
                (s.textContent = "");
            } else d.push(e.createTextNode(o));
        for (h.textContent = "", f = 0; (o = d[f++]); )
          if (i && yt.inArray(o, i) > -1) r && r.push(o);
          else if (
            ((c = yt.contains(o.ownerDocument, o)),
            (s = T(h.appendChild(o), "script")),
            c && w(s),
            n)
          )
            for (u = 0; (o = s[u++]); ) Xt.test(o.type || "") && n.push(o);
        return h;
      }
      function S() {
        return !0;
      }
      function x() {
        return !1;
      }
      function D() {
        try {
          return st.activeElement;
        } catch (t) {}
      }
      function A(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
          "string" != typeof n && ((i = i || n), (n = void 0));
          for (a in e) A(t, a, n, i, e[a], o);
          return t;
        }
        if (
          (null == i && null == r
            ? ((r = n), (i = n = void 0))
            : null == r &&
              ("string" == typeof n
                ? ((r = i), (i = void 0))
                : ((r = i), (i = n), (n = void 0))),
          !1 === r)
        )
          r = x;
        else if (!r) return t;
        return (
          1 === o &&
            ((s = r),
            (r = function (t) {
              return yt().off(t), s.apply(this, arguments);
            }),
            (r.guid = s.guid || (s.guid = yt.guid++))),
          t.each(function () {
            yt.event.add(this, e, r, i, n);
          })
        );
      }
      function I(t, e) {
        return l(t, "table") && l(11 !== e.nodeType ? e : e.firstChild, "tr")
          ? yt(">tbody", t)[0] || t
          : t;
      }
      function O(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
      }
      function N(t) {
        var e = se.exec(t.type);
        return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
      }
      function L(t, e) {
        var n, i, r, o, s, a, l, c;
        if (1 === e.nodeType) {
          if (
            jt.hasData(t) &&
            ((o = jt.access(t)), (s = jt.set(e, o)), (c = o.events))
          ) {
            delete s.handle, (s.events = {});
            for (r in c)
              for (n = 0, i = c[r].length; n < i; n++)
                yt.event.add(e, r, c[r][n]);
          }
          Wt.hasData(t) &&
            ((a = Wt.access(t)), (l = yt.extend({}, a)), Wt.set(e, l));
        }
      }
      function P(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && $t.test(t.type)
          ? (e.checked = t.checked)
          : ("input" !== n && "textarea" !== n) ||
            (e.defaultValue = t.defaultValue);
      }
      function k(t, e, n, i) {
        e = ct.apply([], e);
        var r,
          o,
          a,
          l,
          c,
          u,
          h = 0,
          d = t.length,
          f = d - 1,
          p = e[0],
          g = yt.isFunction(p);
        if (
          g ||
          (d > 1 && "string" == typeof p && !vt.checkClone && oe.test(p))
        )
          return t.each(function (r) {
            var o = t.eq(r);
            g && (e[0] = p.call(this, r, o.html())), k(o, e, n, i);
          });
        if (
          d &&
          ((r = C(e, t[0].ownerDocument, !1, t, i)),
          (o = r.firstChild),
          1 === r.childNodes.length && (r = o),
          o || i)
        ) {
          for (a = yt.map(T(r, "script"), O), l = a.length; h < d; h++)
            (c = r),
              h !== f &&
                ((c = yt.clone(c, !0, !0)), l && yt.merge(a, T(c, "script"))),
              n.call(t[h], c, h);
          if (l)
            for (
              u = a[a.length - 1].ownerDocument, yt.map(a, N), h = 0;
              h < l;
              h++
            )
              (c = a[h]),
                Xt.test(c.type || "") &&
                  !jt.access(c, "globalEval") &&
                  yt.contains(u, c) &&
                  (c.src
                    ? yt._evalUrl && yt._evalUrl(c.src)
                    : s(c.textContent.replace(ae, ""), u));
        }
        return t;
      }
      function H(t, e, n) {
        for (var i, r = e ? yt.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
          n || 1 !== i.nodeType || yt.cleanData(T(i)),
            i.parentNode &&
              (n && yt.contains(i.ownerDocument, i) && w(T(i, "script")),
              i.parentNode.removeChild(i));
        return t;
      }
      function M(t, e, n) {
        var i,
          r,
          o,
          s,
          a = t.style;
        return (
          (n = n || ue(t)),
          n &&
            ((s = n.getPropertyValue(e) || n[e]),
            "" !== s || yt.contains(t.ownerDocument, t) || (s = yt.style(t, e)),
            !vt.pixelMarginRight() &&
              ce.test(s) &&
              le.test(e) &&
              ((i = a.width),
              (r = a.minWidth),
              (o = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = i),
              (a.minWidth = r),
              (a.maxWidth = o))),
          void 0 !== s ? s + "" : s
        );
      }
      function R(t, e) {
        return {
          get: function () {
            return t()
              ? void delete this.get
              : (this.get = e).apply(this, arguments);
          },
        };
      }
      function j(t) {
        if (t in me) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = ge.length; n--; )
          if ((t = ge[n] + e) in me) return t;
      }
      function W(t) {
        var e = yt.cssProps[t];
        return e || (e = yt.cssProps[t] = j(t) || t), e;
      }
      function F(t, e, n) {
        var i = zt.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
      }
      function B(t, e, n, i, r) {
        var o,
          s = 0;
        for (
          o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0;
          o < 4;
          o += 2
        )
          "margin" === n && (s += yt.css(t, n + qt[o], !0, r)),
            i
              ? ("content" === n && (s -= yt.css(t, "padding" + qt[o], !0, r)),
                "margin" !== n &&
                  (s -= yt.css(t, "border" + qt[o] + "Width", !0, r)))
              : ((s += yt.css(t, "padding" + qt[o], !0, r)),
                "padding" !== n &&
                  (s += yt.css(t, "border" + qt[o] + "Width", !0, r)));
        return s;
      }
      function U(t, e, n) {
        var i,
          r = ue(t),
          o = M(t, e, r),
          s = "border-box" === yt.css(t, "boxSizing", !1, r);
        return ce.test(o)
          ? o
          : ((i = s && (vt.boxSizingReliable() || o === t.style[e])),
            "auto" === o && (o = t["offset" + e[0].toUpperCase() + e.slice(1)]),
            (o = parseFloat(o) || 0) +
              B(t, e, n || (s ? "border" : "content"), i, r) +
              "px");
      }
      function z(t, e, n, i, r) {
        return new z.prototype.init(t, e, n, i, r);
      }
      function q() {
        ye &&
          (!1 === st.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(q)
            : n.setTimeout(q, yt.fx.interval),
          yt.fx.tick());
      }
      function V() {
        return (
          n.setTimeout(function () {
            ve = void 0;
          }),
          (ve = yt.now())
        );
      }
      function G(t, e) {
        var n,
          i = 0,
          r = { height: t };
        for (e = e ? 1 : 0; i < 4; i += 2 - e)
          (n = qt[i]), (r["margin" + n] = r["padding" + n] = t);
        return e && (r.opacity = r.width = t), r;
      }
      function K(t, e, n) {
        for (
          var i,
            r = (X.tweeners[e] || []).concat(X.tweeners["*"]),
            o = 0,
            s = r.length;
          o < s;
          o++
        )
          if ((i = r[o].call(n, e, t))) return i;
      }
      function $(t, e, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          c,
          u,
          h = "width" in e || "height" in e,
          d = this,
          f = {},
          p = t.style,
          g = t.nodeType && Vt(t),
          m = jt.get(t, "fxshow");
        n.queue ||
          ((s = yt._queueHooks(t, "fx")),
          null == s.unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a();
            })),
          s.unqueued++,
          d.always(function () {
            d.always(function () {
              s.unqueued--, yt.queue(t, "fx").length || s.empty.fire();
            });
          }));
        for (i in e)
          if (((r = e[i]), be.test(r))) {
            if (
              (delete e[i],
              (o = o || "toggle" === r),
              r === (g ? "hide" : "show"))
            ) {
              if ("show" !== r || !m || void 0 === m[i]) continue;
              g = !0;
            }
            f[i] = (m && m[i]) || yt.style(t, i);
          }
        if ((l = !yt.isEmptyObject(e)) || !yt.isEmptyObject(f)) {
          h &&
            1 === t.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            (c = m && m.display),
            null == c && (c = jt.get(t, "display")),
            (u = yt.css(t, "display")),
            "none" === u &&
              (c
                ? (u = c)
                : (E([t], !0),
                  (c = t.style.display || c),
                  (u = yt.css(t, "display")),
                  E([t]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === yt.css(t, "float") &&
              (l ||
                (d.done(function () {
                  p.display = c;
                }),
                null == c && ((u = p.display), (c = "none" === u ? "" : u))),
              (p.display = "inline-block"))),
            n.overflow &&
              ((p.overflow = "hidden"),
              d.always(function () {
                (p.overflow = n.overflow[0]),
                  (p.overflowX = n.overflow[1]),
                  (p.overflowY = n.overflow[2]);
              })),
            (l = !1);
          for (i in f)
            l ||
              (m
                ? "hidden" in m && (g = m.hidden)
                : (m = jt.access(t, "fxshow", { display: c })),
              o && (m.hidden = !g),
              g && E([t], !0),
              d.done(function () {
                g || E([t]), jt.remove(t, "fxshow");
                for (i in f) yt.style(t, i, f[i]);
              })),
              (l = K(g ? m[i] : 0, i, d)),
              i in m ||
                ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
        }
      }
      function Q(t, e) {
        var n, i, r, o, s;
        for (n in t)
          if (
            ((i = yt.camelCase(n)),
            (r = e[i]),
            (o = t[n]),
            Array.isArray(o) && ((r = o[1]), (o = t[n] = o[0])),
            n !== i && ((t[i] = o), delete t[n]),
            (s = yt.cssHooks[i]) && "expand" in s)
          ) {
            (o = s.expand(o)), delete t[i];
            for (n in o) n in t || ((t[n] = o[n]), (e[n] = r));
          } else e[i] = r;
      }
      function X(t, e, n) {
        var i,
          r,
          o = 0,
          s = X.prefilters.length,
          a = yt.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (r) return !1;
            for (
              var e = ve || V(),
                n = Math.max(0, c.startTime + c.duration - e),
                i = n / c.duration || 0,
                o = 1 - i,
                s = 0,
                l = c.tweens.length;
              s < l;
              s++
            )
              c.tweens[s].run(o);
            return (
              a.notifyWith(t, [c, o, n]),
              o < 1 && l
                ? n
                : (l || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
            );
          },
          c = a.promise({
            elem: t,
            props: yt.extend({}, e),
            opts: yt.extend(
              !0,
              { specialEasing: {}, easing: yt.easing._default },
              n
            ),
            originalProperties: e,
            originalOptions: n,
            startTime: ve || V(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
              var i = yt.Tween(
                t,
                c.opts,
                e,
                n,
                c.opts.specialEasing[e] || c.opts.easing
              );
              return c.tweens.push(i), i;
            },
            stop: function (e) {
              var n = 0,
                i = e ? c.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < i; n++) c.tweens[n].run(1);
              return (
                e
                  ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e]))
                  : a.rejectWith(t, [c, e]),
                this
              );
            },
          }),
          u = c.props;
        for (Q(u, c.opts.specialEasing); o < s; o++)
          if ((i = X.prefilters[o].call(c, t, u, c.opts)))
            return (
              yt.isFunction(i.stop) &&
                (yt._queueHooks(c.elem, c.opts.queue).stop = yt.proxy(
                  i.stop,
                  i
                )),
              i
            );
        return (
          yt.map(u, K, c),
          yt.isFunction(c.opts.start) && c.opts.start.call(t, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          yt.fx.timer(yt.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
          c
        );
      }
      function Y(t) {
        return (t.match(Pt) || []).join(" ");
      }
      function J(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
      }
      function Z(t, e, n, i) {
        var r;
        if (Array.isArray(e))
          yt.each(e, function (e, r) {
            n || Oe.test(t)
              ? i(t, r)
              : Z(
                  t + "[" + ("object" == typeof r && null != r ? e : "") + "]",
                  r,
                  n,
                  i
                );
          });
        else if (n || "object" !== yt.type(e)) i(t, e);
        else for (r in e) Z(t + "[" + r + "]", e[r], n, i);
      }
      function tt(t) {
        return function (e, n) {
          "string" != typeof e && ((n = e), (e = "*"));
          var i,
            r = 0,
            o = e.toLowerCase().match(Pt) || [];
          if (yt.isFunction(n))
            for (; (i = o[r++]); )
              "+" === i[0]
                ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n))
                : (t[i] = t[i] || []).push(n);
        };
      }
      function et(t, e, n, i) {
        function r(a) {
          var l;
          return (
            (o[a] = !0),
            yt.each(t[a] || [], function (t, a) {
              var c = a(e, n, i);
              return "string" != typeof c || s || o[c]
                ? s
                  ? !(l = c)
                  : void 0
                : (e.dataTypes.unshift(c), r(c), !1);
            }),
            l
          );
        }
        var o = {},
          s = t === Ue;
        return r(e.dataTypes[0]) || (!o["*"] && r("*"));
      }
      function nt(t, e) {
        var n,
          i,
          r = yt.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && yt.extend(!0, t, i), t;
      }
      function it(t, e, n) {
        for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
          l.shift(),
            void 0 === i &&
              (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
          for (r in a)
            if (a[r] && a[r].test(i)) {
              l.unshift(r);
              break;
            }
        if (l[0] in n) o = l[0];
        else {
          for (r in n) {
            if (!l[0] || t.converters[r + " " + l[0]]) {
              o = r;
              break;
            }
            s || (s = r);
          }
          o = o || s;
        }
        if (o) return o !== l[0] && l.unshift(o), n[o];
      }
      function rt(t, e, n, i) {
        var r,
          o,
          s,
          a,
          l,
          c = {},
          u = t.dataTypes.slice();
        if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (o = u.shift(); o; )
          if (
            (t.responseFields[o] && (n[t.responseFields[o]] = e),
            !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
            (l = o),
            (o = u.shift()))
          )
            if ("*" === o) o = l;
            else if ("*" !== l && l !== o) {
              if (!(s = c[l + " " + o] || c["* " + o]))
                for (r in c)
                  if (
                    ((a = r.split(" ")),
                    a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]]))
                  ) {
                    !0 === s
                      ? (s = c[r])
                      : !0 !== c[r] && ((o = a[0]), u.unshift(a[1]));
                    break;
                  }
              if (!0 !== s)
                if (s && t.throws) e = s(e);
                else
                  try {
                    e = s(e);
                  } catch (t) {
                    return {
                      state: "parsererror",
                      error: s ? t : "No conversion from " + l + " to " + o,
                    };
                  }
            }
        return { state: "success", data: e };
      }
      var ot = [],
        st = n.document,
        at = Object.getPrototypeOf,
        lt = ot.slice,
        ct = ot.concat,
        ut = ot.push,
        ht = ot.indexOf,
        dt = {},
        ft = dt.toString,
        pt = dt.hasOwnProperty,
        gt = pt.toString,
        mt = gt.call(Object),
        vt = {},
        yt = function (t, e) {
          return new yt.fn.init(t, e);
        },
        bt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        _t = /^-ms-/,
        Et = /-([a-z])/g,
        Tt = function (t, e) {
          return e.toUpperCase();
        };
      (yt.fn = yt.prototype =
        {
          jquery: "3.2.1",
          constructor: yt,
          length: 0,
          toArray: function () {
            return lt.call(this);
          },
          get: function (t) {
            return null == t
              ? lt.call(this)
              : t < 0
              ? this[t + this.length]
              : this[t];
          },
          pushStack: function (t) {
            var e = yt.merge(this.constructor(), t);
            return (e.prevObject = this), e;
          },
          each: function (t) {
            return yt.each(this, t);
          },
          map: function (t) {
            return this.pushStack(
              yt.map(this, function (e, n) {
                return t.call(e, n, e);
              })
            );
          },
          slice: function () {
            return this.pushStack(lt.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          eq: function (t) {
            var e = this.length,
              n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: ut,
          sort: ot.sort,
          splice: ot.splice,
        }),
        (yt.extend = yt.fn.extend =
          function () {
            var t,
              e,
              n,
              i,
              r,
              o,
              s = arguments[0] || {},
              a = 1,
              l = arguments.length,
              c = !1;
            for (
              "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
                "object" == typeof s || yt.isFunction(s) || (s = {}),
                a === l && ((s = this), a--);
              a < l;
              a++
            )
              if (null != (t = arguments[a]))
                for (e in t)
                  (n = s[e]),
                    (i = t[e]),
                    s !== i &&
                      (c && i && (yt.isPlainObject(i) || (r = Array.isArray(i)))
                        ? (r
                            ? ((r = !1), (o = n && Array.isArray(n) ? n : []))
                            : (o = n && yt.isPlainObject(n) ? n : {}),
                          (s[e] = yt.extend(c, o, i)))
                        : void 0 !== i && (s[e] = i));
            return s;
          }),
        yt.extend({
          expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (t) {
            throw new Error(t);
          },
          noop: function () {},
          isFunction: function (t) {
            return "function" === yt.type(t);
          },
          isWindow: function (t) {
            return null != t && t === t.window;
          },
          isNumeric: function (t) {
            var e = yt.type(t);
            return (
              ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            );
          },
          isPlainObject: function (t) {
            var e, n;
            return !(
              !t ||
              "[object Object]" !== ft.call(t) ||
              ((e = at(t)) &&
                ("function" !=
                  typeof (n = pt.call(e, "constructor") && e.constructor) ||
                  gt.call(n) !== mt))
            );
          },
          isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0;
          },
          type: function (t) {
            return null == t
              ? t + ""
              : "object" == typeof t || "function" == typeof t
              ? dt[ft.call(t)] || "object"
              : typeof t;
          },
          globalEval: function (t) {
            s(t);
          },
          camelCase: function (t) {
            return t.replace(_t, "ms-").replace(Et, Tt);
          },
          each: function (t, e) {
            var n,
              i = 0;
            if (a(t))
              for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
            return t;
          },
          trim: function (t) {
            return null == t ? "" : (t + "").replace(bt, "");
          },
          makeArray: function (t, e) {
            var n = e || [];
            return (
              null != t &&
                (a(Object(t))
                  ? yt.merge(n, "string" == typeof t ? [t] : t)
                  : ut.call(n, t)),
              n
            );
          },
          inArray: function (t, e, n) {
            return null == e ? -1 : ht.call(e, t, n);
          },
          merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++)
              t[r++] = e[i];
            return (t.length = r), t;
          },
          grep: function (t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; r < o; r++)
              !e(t[r], r) !== s && i.push(t[r]);
            return i;
          },
          map: function (t, e, n) {
            var i,
              r,
              o = 0,
              s = [];
            if (a(t))
              for (i = t.length; o < i; o++)
                null != (r = e(t[o], o, n)) && s.push(r);
            else for (o in t) null != (r = e(t[o], o, n)) && s.push(r);
            return ct.apply([], s);
          },
          guid: 1,
          proxy: function (t, e) {
            var n, i, r;
            if (
              ("string" == typeof e && ((n = t[e]), (e = t), (t = n)),
              yt.isFunction(t))
            )
              return (
                (i = lt.call(arguments, 2)),
                (r = function () {
                  return t.apply(e || this, i.concat(lt.call(arguments)));
                }),
                (r.guid = t.guid = t.guid || yt.guid++),
                r
              );
          },
          now: Date.now,
          support: vt,
        }),
        "function" == typeof Symbol &&
          (yt.fn[Symbol.iterator] = ot[Symbol.iterator]),
        yt.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (t, e) {
            dt["[object " + e + "]"] = e.toLowerCase();
          }
        );
      var wt = (function (t) {
        function e(t, e, n, i) {
          var r,
            o,
            s,
            a,
            l,
            u,
            d,
            f = e && e.ownerDocument,
            p = e ? e.nodeType : 9;
          if (
            ((n = n || []),
            "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
          )
            return n;
          if (
            !i &&
            ((e ? e.ownerDocument || e : W) !== N && O(e), (e = e || N), P)
          ) {
            if (11 !== p && (l = gt.exec(t)))
              if ((r = l[1])) {
                if (9 === p) {
                  if (!(s = e.getElementById(r))) return n;
                  if (s.id === r) return n.push(s), n;
                } else if (
                  f &&
                  (s = f.getElementById(r)) &&
                  R(e, s) &&
                  s.id === r
                )
                  return n.push(s), n;
              } else {
                if (l[2]) return X.apply(n, e.getElementsByTagName(t)), n;
                if (
                  (r = l[3]) &&
                  _.getElementsByClassName &&
                  e.getElementsByClassName
                )
                  return X.apply(n, e.getElementsByClassName(r)), n;
              }
            if (_.qsa && !q[t + " "] && (!k || !k.test(t))) {
              if (1 !== p) (f = e), (d = t);
              else if ("object" !== e.nodeName.toLowerCase()) {
                for (
                  (a = e.getAttribute("id"))
                    ? (a = a.replace(bt, _t))
                    : e.setAttribute("id", (a = j)),
                    u = C(t),
                    o = u.length;
                  o--;

                )
                  u[o] = "#" + a + " " + h(u[o]);
                (d = u.join(",")), (f = (mt.test(t) && c(e.parentNode)) || e);
              }
              if (d)
                try {
                  return X.apply(n, f.querySelectorAll(d)), n;
                } catch (t) {
                } finally {
                  a === j && e.removeAttribute("id");
                }
            }
          }
          return x(t.replace(ot, "$1"), e, n, i);
        }
        function n() {
          function t(n, i) {
            return (
              e.push(n + " ") > E.cacheLength && delete t[e.shift()],
              (t[n + " "] = i)
            );
          }
          var e = [];
          return t;
        }
        function i(t) {
          return (t[j] = !0), t;
        }
        function r(t) {
          var e = N.createElement("fieldset");
          try {
            return !!t(e);
          } catch (t) {
            return !1;
          } finally {
            e.parentNode && e.parentNode.removeChild(e), (e = null);
          }
        }
        function o(t, e) {
          for (var n = t.split("|"), i = n.length; i--; )
            E.attrHandle[n[i]] = e;
        }
        function s(t, e) {
          var n = e && t,
            i =
              n &&
              1 === t.nodeType &&
              1 === e.nodeType &&
              t.sourceIndex - e.sourceIndex;
          if (i) return i;
          if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
          return t ? 1 : -1;
        }
        function a(t) {
          return function (e) {
            return "form" in e
              ? e.parentNode && !1 === e.disabled
                ? "label" in e
                  ? "label" in e.parentNode
                    ? e.parentNode.disabled === t
                    : e.disabled === t
                  : e.isDisabled === t || (e.isDisabled !== !t && Tt(e) === t)
                : e.disabled === t
              : "label" in e && e.disabled === t;
          };
        }
        function l(t) {
          return i(function (e) {
            return (
              (e = +e),
              i(function (n, i) {
                for (var r, o = t([], n.length, e), s = o.length; s--; )
                  n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
              })
            );
          });
        }
        function c(t) {
          return t && void 0 !== t.getElementsByTagName && t;
        }
        function u() {}
        function h(t) {
          for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
          return i;
        }
        function d(t, e, n) {
          var i = e.dir,
            r = e.next,
            o = r || i,
            s = n && "parentNode" === o,
            a = B++;
          return e.first
            ? function (e, n, r) {
                for (; (e = e[i]); )
                  if (1 === e.nodeType || s) return t(e, n, r);
                return !1;
              }
            : function (e, n, l) {
                var c,
                  u,
                  h,
                  d = [F, a];
                if (l) {
                  for (; (e = e[i]); )
                    if ((1 === e.nodeType || s) && t(e, n, l)) return !0;
                } else
                  for (; (e = e[i]); )
                    if (1 === e.nodeType || s)
                      if (
                        ((h = e[j] || (e[j] = {})),
                        (u = h[e.uniqueID] || (h[e.uniqueID] = {})),
                        r && r === e.nodeName.toLowerCase())
                      )
                        e = e[i] || e;
                      else {
                        if ((c = u[o]) && c[0] === F && c[1] === a)
                          return (d[2] = c[2]);
                        if (((u[o] = d), (d[2] = t(e, n, l)))) return !0;
                      }
                return !1;
              };
        }
        function f(t) {
          return t.length > 1
            ? function (e, n, i) {
                for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
                return !0;
              }
            : t[0];
        }
        function p(t, n, i) {
          for (var r = 0, o = n.length; r < o; r++) e(t, n[r], i);
          return i;
        }
        function g(t, e, n, i, r) {
          for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++)
            (o = t[a]) && ((n && !n(o, i, r)) || (s.push(o), c && e.push(a)));
          return s;
        }
        function m(t, e, n, r, o, s) {
          return (
            r && !r[j] && (r = m(r)),
            o && !o[j] && (o = m(o, s)),
            i(function (i, s, a, l) {
              var c,
                u,
                h,
                d = [],
                f = [],
                m = s.length,
                v = i || p(e || "*", a.nodeType ? [a] : a, []),
                y = !t || (!i && e) ? v : g(v, d, t, a, l),
                b = n ? (o || (i ? t : m || r) ? [] : s) : y;
              if ((n && n(y, b, a, l), r))
                for (c = g(b, f), r(c, [], a, l), u = c.length; u--; )
                  (h = c[u]) && (b[f[u]] = !(y[f[u]] = h));
              if (i) {
                if (o || t) {
                  if (o) {
                    for (c = [], u = b.length; u--; )
                      (h = b[u]) && c.push((y[u] = h));
                    o(null, (b = []), c, l);
                  }
                  for (u = b.length; u--; )
                    (h = b[u]) &&
                      (c = o ? J(i, h) : d[u]) > -1 &&
                      (i[c] = !(s[c] = h));
                }
              } else (b = g(b === s ? b.splice(m, b.length) : b)), o ? o(null, s, b, l) : X.apply(s, b);
            })
          );
        }
        function v(t) {
          for (
            var e,
              n,
              i,
              r = t.length,
              o = E.relative[t[0].type],
              s = o || E.relative[" "],
              a = o ? 1 : 0,
              l = d(
                function (t) {
                  return t === e;
                },
                s,
                !0
              ),
              c = d(
                function (t) {
                  return J(e, t) > -1;
                },
                s,
                !0
              ),
              u = [
                function (t, n, i) {
                  var r =
                    (!o && (i || n !== D)) ||
                    ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                  return (e = null), r;
                },
              ];
            a < r;
            a++
          )
            if ((n = E.relative[t[a].type])) u = [d(f(u), n)];
            else {
              if (((n = E.filter[t[a].type].apply(null, t[a].matches)), n[j])) {
                for (i = ++a; i < r && !E.relative[t[i].type]; i++);
                return m(
                  a > 1 && f(u),
                  a > 1 &&
                    h(
                      t
                        .slice(0, a - 1)
                        .concat({ value: " " === t[a - 2].type ? "*" : "" })
                    ).replace(ot, "$1"),
                  n,
                  a < i && v(t.slice(a, i)),
                  i < r && v((t = t.slice(i))),
                  i < r && h(t)
                );
              }
              u.push(n);
            }
          return f(u);
        }
        function y(t, n) {
          var r = n.length > 0,
            o = t.length > 0,
            s = function (i, s, a, l, c) {
              var u,
                h,
                d,
                f = 0,
                p = "0",
                m = i && [],
                v = [],
                y = D,
                b = i || (o && E.find.TAG("*", c)),
                _ = (F += null == y ? 1 : Math.random() || 0.1),
                T = b.length;
              for (
                c && (D = s === N || s || c);
                p !== T && null != (u = b[p]);
                p++
              ) {
                if (o && u) {
                  for (
                    h = 0, s || u.ownerDocument === N || (O(u), (a = !P));
                    (d = t[h++]);

                  )
                    if (d(u, s || N, a)) {
                      l.push(u);
                      break;
                    }
                  c && (F = _);
                }
                r && ((u = !d && u) && f--, i && m.push(u));
              }
              if (((f += p), r && p !== f)) {
                for (h = 0; (d = n[h++]); ) d(m, v, s, a);
                if (i) {
                  if (f > 0) for (; p--; ) m[p] || v[p] || (v[p] = $.call(l));
                  v = g(v);
                }
                X.apply(l, v),
                  c &&
                    !i &&
                    v.length > 0 &&
                    f + n.length > 1 &&
                    e.uniqueSort(l);
              }
              return c && ((F = _), (D = y)), m;
            };
          return r ? i(s) : s;
        }
        var b,
          _,
          E,
          T,
          w,
          C,
          S,
          x,
          D,
          A,
          I,
          O,
          N,
          L,
          P,
          k,
          H,
          M,
          R,
          j = "sizzle" + 1 * new Date(),
          W = t.document,
          F = 0,
          B = 0,
          U = n(),
          z = n(),
          q = n(),
          V = function (t, e) {
            return t === e && (I = !0), 0;
          },
          G = {}.hasOwnProperty,
          K = [],
          $ = K.pop,
          Q = K.push,
          X = K.push,
          Y = K.slice,
          J = function (t, e) {
            for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
            return -1;
          },
          Z =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          tt = "[\\x20\\t\\r\\n\\f]",
          et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          nt =
            "\\[" +
            tt +
            "*(" +
            et +
            ")(?:" +
            tt +
            "*([*^$|!~]?=)" +
            tt +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            et +
            "))|)" +
            tt +
            "*\\]",
          it =
            ":(" +
            et +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            nt +
            ")*)|.*)\\)|)",
          rt = new RegExp(tt + "+", "g"),
          ot = new RegExp(
            "^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$",
            "g"
          ),
          st = new RegExp("^" + tt + "*," + tt + "*"),
          at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
          lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
          ct = new RegExp(it),
          ut = new RegExp("^" + et + "$"),
          ht = {
            ID: new RegExp("^#(" + et + ")"),
            CLASS: new RegExp("^\\.(" + et + ")"),
            TAG: new RegExp("^(" + et + "|[*])"),
            ATTR: new RegExp("^" + nt),
            PSEUDO: new RegExp("^" + it),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                tt +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                tt +
                "*(?:([+-]|)" +
                tt +
                "*(\\d+)|))" +
                tt +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + Z + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                tt +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                tt +
                "*((?:-\\d)?\\d*)" +
                tt +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          dt = /^(?:input|select|textarea|button)$/i,
          ft = /^h\d$/i,
          pt = /^[^{]+\{\s*\[native \w/,
          gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          mt = /[+~]/,
          vt = new RegExp(
            "\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)",
            "ig"
          ),
          yt = function (t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n
              ? e
              : i < 0
              ? String.fromCharCode(i + 65536)
              : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
          },
          bt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          _t = function (t, e) {
            return e
              ? "\0" === t
                ? "�"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          },
          Et = function () {
            O();
          },
          Tt = d(
            function (t) {
              return !0 === t.disabled && ("form" in t || "label" in t);
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          X.apply((K = Y.call(W.childNodes)), W.childNodes),
            K[W.childNodes.length].nodeType;
        } catch (t) {
          X = {
            apply: K.length
              ? function (t, e) {
                  Q.apply(t, Y.call(e));
                }
              : function (t, e) {
                  for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                  t.length = n - 1;
                },
          };
        }
        (_ = e.support = {}),
          (w = e.isXML =
            function (t) {
              var e = t && (t.ownerDocument || t).documentElement;
              return !!e && "HTML" !== e.nodeName;
            }),
          (O = e.setDocument =
            function (t) {
              var e,
                n,
                i = t ? t.ownerDocument || t : W;
              return i !== N && 9 === i.nodeType && i.documentElement
                ? ((N = i),
                  (L = N.documentElement),
                  (P = !w(N)),
                  W !== N &&
                    (n = N.defaultView) &&
                    n.top !== n &&
                    (n.addEventListener
                      ? n.addEventListener("unload", Et, !1)
                      : n.attachEvent && n.attachEvent("onunload", Et)),
                  (_.attributes = r(function (t) {
                    return (t.className = "i"), !t.getAttribute("className");
                  })),
                  (_.getElementsByTagName = r(function (t) {
                    return (
                      t.appendChild(N.createComment("")),
                      !t.getElementsByTagName("*").length
                    );
                  })),
                  (_.getElementsByClassName = pt.test(
                    N.getElementsByClassName
                  )),
                  (_.getById = r(function (t) {
                    return (
                      (L.appendChild(t).id = j),
                      !N.getElementsByName || !N.getElementsByName(j).length
                    );
                  })),
                  _.getById
                    ? ((E.filter.ID = function (t) {
                        var e = t.replace(vt, yt);
                        return function (t) {
                          return t.getAttribute("id") === e;
                        };
                      }),
                      (E.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && P) {
                          var n = e.getElementById(t);
                          return n ? [n] : [];
                        }
                      }))
                    : ((E.filter.ID = function (t) {
                        var e = t.replace(vt, yt);
                        return function (t) {
                          var n =
                            void 0 !== t.getAttributeNode &&
                            t.getAttributeNode("id");
                          return n && n.value === e;
                        };
                      }),
                      (E.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && P) {
                          var n,
                            i,
                            r,
                            o = e.getElementById(t);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === t)
                              return [o];
                            for (
                              r = e.getElementsByName(t), i = 0;
                              (o = r[i++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === t
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (E.find.TAG = _.getElementsByTagName
                    ? function (t, e) {
                        return void 0 !== e.getElementsByTagName
                          ? e.getElementsByTagName(t)
                          : _.qsa
                          ? e.querySelectorAll(t)
                          : void 0;
                      }
                    : function (t, e) {
                        var n,
                          i = [],
                          r = 0,
                          o = e.getElementsByTagName(t);
                        if ("*" === t) {
                          for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                          return i;
                        }
                        return o;
                      }),
                  (E.find.CLASS =
                    _.getElementsByClassName &&
                    function (t, e) {
                      if (void 0 !== e.getElementsByClassName && P)
                        return e.getElementsByClassName(t);
                    }),
                  (H = []),
                  (k = []),
                  (_.qsa = pt.test(N.querySelectorAll)) &&
                    (r(function (t) {
                      (L.appendChild(t).innerHTML =
                        "<a id='" +
                        j +
                        "'></a><select id='" +
                        j +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        t.querySelectorAll("[msallowcapture^='']").length &&
                          k.push("[*^$]=" + tt + "*(?:''|\"\")"),
                        t.querySelectorAll("[selected]").length ||
                          k.push("\\[" + tt + "*(?:value|" + Z + ")"),
                        t.querySelectorAll("[id~=" + j + "-]").length ||
                          k.push("~="),
                        t.querySelectorAll(":checked").length ||
                          k.push(":checked"),
                        t.querySelectorAll("a#" + j + "+*").length ||
                          k.push(".#.+[+~]");
                    }),
                    r(function (t) {
                      t.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var e = N.createElement("input");
                      e.setAttribute("type", "hidden"),
                        t.appendChild(e).setAttribute("name", "D"),
                        t.querySelectorAll("[name=d]").length &&
                          k.push("name" + tt + "*[*^$|!~]?="),
                        2 !== t.querySelectorAll(":enabled").length &&
                          k.push(":enabled", ":disabled"),
                        (L.appendChild(t).disabled = !0),
                        2 !== t.querySelectorAll(":disabled").length &&
                          k.push(":enabled", ":disabled"),
                        t.querySelectorAll("*,:x"),
                        k.push(",.*:");
                    })),
                  (_.matchesSelector = pt.test(
                    (M =
                      L.matches ||
                      L.webkitMatchesSelector ||
                      L.mozMatchesSelector ||
                      L.oMatchesSelector ||
                      L.msMatchesSelector)
                  )) &&
                    r(function (t) {
                      (_.disconnectedMatch = M.call(t, "*")),
                        M.call(t, "[s!='']:x"),
                        H.push("!=", it);
                    }),
                  (k = k.length && new RegExp(k.join("|"))),
                  (H = H.length && new RegExp(H.join("|"))),
                  (e = pt.test(L.compareDocumentPosition)),
                  (R =
                    e || pt.test(L.contains)
                      ? function (t, e) {
                          var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                          return (
                            t === i ||
                            !(
                              !i ||
                              1 !== i.nodeType ||
                              !(n.contains
                                ? n.contains(i)
                                : t.compareDocumentPosition &&
                                  16 & t.compareDocumentPosition(i))
                            )
                          );
                        }
                      : function (t, e) {
                          if (e)
                            for (; (e = e.parentNode); ) if (e === t) return !0;
                          return !1;
                        }),
                  (V = e
                    ? function (t, e) {
                        if (t === e) return (I = !0), 0;
                        var n =
                          !t.compareDocumentPosition -
                          !e.compareDocumentPosition;
                        return (
                          n ||
                          ((n =
                            (t.ownerDocument || t) === (e.ownerDocument || e)
                              ? t.compareDocumentPosition(e)
                              : 1),
                          1 & n ||
                          (!_.sortDetached &&
                            e.compareDocumentPosition(t) === n)
                            ? t === N || (t.ownerDocument === W && R(W, t))
                              ? -1
                              : e === N || (e.ownerDocument === W && R(W, e))
                              ? 1
                              : A
                              ? J(A, t) - J(A, e)
                              : 0
                            : 4 & n
                            ? -1
                            : 1)
                        );
                      }
                    : function (t, e) {
                        if (t === e) return (I = !0), 0;
                        var n,
                          i = 0,
                          r = t.parentNode,
                          o = e.parentNode,
                          a = [t],
                          l = [e];
                        if (!r || !o)
                          return t === N
                            ? -1
                            : e === N
                            ? 1
                            : r
                            ? -1
                            : o
                            ? 1
                            : A
                            ? J(A, t) - J(A, e)
                            : 0;
                        if (r === o) return s(t, e);
                        for (n = t; (n = n.parentNode); ) a.unshift(n);
                        for (n = e; (n = n.parentNode); ) l.unshift(n);
                        for (; a[i] === l[i]; ) i++;
                        return i
                          ? s(a[i], l[i])
                          : a[i] === W
                          ? -1
                          : l[i] === W
                          ? 1
                          : 0;
                      }),
                  N)
                : N;
            }),
          (e.matches = function (t, n) {
            return e(t, null, null, n);
          }),
          (e.matchesSelector = function (t, n) {
            if (
              ((t.ownerDocument || t) !== N && O(t),
              (n = n.replace(lt, "='$1']")),
              _.matchesSelector &&
                P &&
                !q[n + " "] &&
                (!H || !H.test(n)) &&
                (!k || !k.test(n)))
            )
              try {
                var i = M.call(t, n);
                if (
                  i ||
                  _.disconnectedMatch ||
                  (t.document && 11 !== t.document.nodeType)
                )
                  return i;
              } catch (t) {}
            return e(n, N, null, [t]).length > 0;
          }),
          (e.contains = function (t, e) {
            return (t.ownerDocument || t) !== N && O(t), R(t, e);
          }),
          (e.attr = function (t, e) {
            (t.ownerDocument || t) !== N && O(t);
            var n = E.attrHandle[e.toLowerCase()],
              i =
                n && G.call(E.attrHandle, e.toLowerCase())
                  ? n(t, e, !P)
                  : void 0;
            return void 0 !== i
              ? i
              : _.attributes || !P
              ? t.getAttribute(e)
              : (i = t.getAttributeNode(e)) && i.specified
              ? i.value
              : null;
          }),
          (e.escape = function (t) {
            return (t + "").replace(bt, _t);
          }),
          (e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
          }),
          (e.uniqueSort = function (t) {
            var e,
              n = [],
              i = 0,
              r = 0;
            if (
              ((I = !_.detectDuplicates),
              (A = !_.sortStable && t.slice(0)),
              t.sort(V),
              I)
            ) {
              for (; (e = t[r++]); ) e === t[r] && (i = n.push(r));
              for (; i--; ) t.splice(n[i], 1);
            }
            return (A = null), t;
          }),
          (T = e.getText =
            function (t) {
              var e,
                n = "",
                i = 0,
                r = t.nodeType;
              if (r) {
                if (1 === r || 9 === r || 11 === r) {
                  if ("string" == typeof t.textContent) return t.textContent;
                  for (t = t.firstChild; t; t = t.nextSibling) n += T(t);
                } else if (3 === r || 4 === r) return t.nodeValue;
              } else for (; (e = t[i++]); ) n += T(e);
              return n;
            }),
          (E = e.selectors =
            {
              cacheLength: 50,
              createPseudo: i,
              match: ht,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (t) {
                  return (
                    (t[1] = t[1].replace(vt, yt)),
                    (t[3] = (t[3] || t[4] || t[5] || "").replace(vt, yt)),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                  );
                },
                CHILD: function (t) {
                  return (
                    (t[1] = t[1].toLowerCase()),
                    "nth" === t[1].slice(0, 3)
                      ? (t[3] || e.error(t[0]),
                        (t[4] = +(t[4]
                          ? t[5] + (t[6] || 1)
                          : 2 * ("even" === t[3] || "odd" === t[3]))),
                        (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                      : t[3] && e.error(t[0]),
                    t
                  );
                },
                PSEUDO: function (t) {
                  var e,
                    n = !t[6] && t[2];
                  return ht.CHILD.test(t[0])
                    ? null
                    : (t[3]
                        ? (t[2] = t[4] || t[5] || "")
                        : n &&
                          ct.test(n) &&
                          (e = C(n, !0)) &&
                          (e = n.indexOf(")", n.length - e) - n.length) &&
                          ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                      t.slice(0, 3));
                },
              },
              filter: {
                TAG: function (t) {
                  var e = t.replace(vt, yt).toLowerCase();
                  return "*" === t
                    ? function () {
                        return !0;
                      }
                    : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                      };
                },
                CLASS: function (t) {
                  var e = U[t + " "];
                  return (
                    e ||
                    ((e = new RegExp(
                      "(^|" + tt + ")" + t + "(" + tt + "|$)"
                    )) &&
                      U(t, function (t) {
                        return e.test(
                          ("string" == typeof t.className && t.className) ||
                            (void 0 !== t.getAttribute &&
                              t.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (t, n, i) {
                  return function (r) {
                    var o = e.attr(r, t);
                    return null == o
                      ? "!=" === n
                      : !n ||
                          ((o += ""),
                          "=" === n
                            ? o === i
                            : "!=" === n
                            ? o !== i
                            : "^=" === n
                            ? i && 0 === o.indexOf(i)
                            : "*=" === n
                            ? i && o.indexOf(i) > -1
                            : "$=" === n
                            ? i && o.slice(-i.length) === i
                            : "~=" === n
                            ? (" " + o.replace(rt, " ") + " ").indexOf(i) > -1
                            : "|=" === n &&
                              (o === i ||
                                o.slice(0, i.length + 1) === i + "-"));
                  };
                },
                CHILD: function (t, e, n, i, r) {
                  var o = "nth" !== t.slice(0, 3),
                    s = "last" !== t.slice(-4),
                    a = "of-type" === e;
                  return 1 === i && 0 === r
                    ? function (t) {
                        return !!t.parentNode;
                      }
                    : function (e, n, l) {
                        var c,
                          u,
                          h,
                          d,
                          f,
                          p,
                          g = o !== s ? "nextSibling" : "previousSibling",
                          m = e.parentNode,
                          v = a && e.nodeName.toLowerCase(),
                          y = !l && !a,
                          b = !1;
                        if (m) {
                          if (o) {
                            for (; g; ) {
                              for (d = e; (d = d[g]); )
                                if (
                                  a
                                    ? d.nodeName.toLowerCase() === v
                                    : 1 === d.nodeType
                                )
                                  return !1;
                              p = g = "only" === t && !p && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((p = [s ? m.firstChild : m.lastChild]), s && y)
                          ) {
                            for (
                              d = m,
                                h = d[j] || (d[j] = {}),
                                u = h[d.uniqueID] || (h[d.uniqueID] = {}),
                                c = u[t] || [],
                                f = c[0] === F && c[1],
                                b = f && c[2],
                                d = f && m.childNodes[f];
                              (d =
                                (++f && d && d[g]) || (b = f = 0) || p.pop());

                            )
                              if (1 === d.nodeType && ++b && d === e) {
                                u[t] = [F, f, b];
                                break;
                              }
                          } else if (
                            (y &&
                              ((d = e),
                              (h = d[j] || (d[j] = {})),
                              (u = h[d.uniqueID] || (h[d.uniqueID] = {})),
                              (c = u[t] || []),
                              (f = c[0] === F && c[1]),
                              (b = f)),
                            !1 === b)
                          )
                            for (
                              ;
                              (d =
                                (++f && d && d[g]) || (b = f = 0) || p.pop()) &&
                              ((a
                                ? d.nodeName.toLowerCase() !== v
                                : 1 !== d.nodeType) ||
                                !++b ||
                                (y &&
                                  ((h = d[j] || (d[j] = {})),
                                  (u = h[d.uniqueID] || (h[d.uniqueID] = {})),
                                  (u[t] = [F, b])),
                                d !== e));

                            );
                          return (b -= r) === i || (b % i == 0 && b / i >= 0);
                        }
                      };
                },
                PSEUDO: function (t, n) {
                  var r,
                    o =
                      E.pseudos[t] ||
                      E.setFilters[t.toLowerCase()] ||
                      e.error("unsupported pseudo: " + t);
                  return o[j]
                    ? o(n)
                    : o.length > 1
                    ? ((r = [t, t, "", n]),
                      E.setFilters.hasOwnProperty(t.toLowerCase())
                        ? i(function (t, e) {
                            for (var i, r = o(t, n), s = r.length; s--; )
                              (i = J(t, r[s])), (t[i] = !(e[i] = r[s]));
                          })
                        : function (t) {
                            return o(t, 0, r);
                          })
                    : o;
                },
              },
              pseudos: {
                not: i(function (t) {
                  var e = [],
                    n = [],
                    r = S(t.replace(ot, "$1"));
                  return r[j]
                    ? i(function (t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--; )
                          (o = s[a]) && (t[a] = !(e[a] = o));
                      })
                    : function (t, i, o) {
                        return (
                          (e[0] = t), r(e, null, o, n), (e[0] = null), !n.pop()
                        );
                      };
                }),
                has: i(function (t) {
                  return function (n) {
                    return e(t, n).length > 0;
                  };
                }),
                contains: i(function (t) {
                  return (
                    (t = t.replace(vt, yt)),
                    function (e) {
                      return (
                        (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                      );
                    }
                  );
                }),
                lang: i(function (t) {
                  return (
                    ut.test(t || "") || e.error("unsupported lang: " + t),
                    (t = t.replace(vt, yt).toLowerCase()),
                    function (e) {
                      var n;
                      do {
                        if (
                          (n = P
                            ? e.lang
                            : e.getAttribute("xml:lang") ||
                              e.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === t ||
                            0 === n.indexOf(t + "-")
                          );
                      } while ((e = e.parentNode) && 1 === e.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (e) {
                  var n = t.location && t.location.hash;
                  return n && n.slice(1) === e.id;
                },
                root: function (t) {
                  return t === L;
                },
                focus: function (t) {
                  return (
                    t === N.activeElement &&
                    (!N.hasFocus || N.hasFocus()) &&
                    !!(t.type || t.href || ~t.tabIndex)
                  );
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function (t) {
                  var e = t.nodeName.toLowerCase();
                  return (
                    ("input" === e && !!t.checked) ||
                    ("option" === e && !!t.selected)
                  );
                },
                selected: function (t) {
                  return (
                    t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                  );
                },
                empty: function (t) {
                  for (t = t.firstChild; t; t = t.nextSibling)
                    if (t.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (t) {
                  return !E.pseudos.empty(t);
                },
                header: function (t) {
                  return ft.test(t.nodeName);
                },
                input: function (t) {
                  return dt.test(t.nodeName);
                },
                button: function (t) {
                  var e = t.nodeName.toLowerCase();
                  return (
                    ("input" === e && "button" === t.type) || "button" === e
                  );
                },
                text: function (t) {
                  var e;
                  return (
                    "input" === t.nodeName.toLowerCase() &&
                    "text" === t.type &&
                    (null == (e = t.getAttribute("type")) ||
                      "text" === e.toLowerCase())
                  );
                },
                first: l(function () {
                  return [0];
                }),
                last: l(function (t, e) {
                  return [e - 1];
                }),
                eq: l(function (t, e, n) {
                  return [n < 0 ? n + e : n];
                }),
                even: l(function (t, e) {
                  for (var n = 0; n < e; n += 2) t.push(n);
                  return t;
                }),
                odd: l(function (t, e) {
                  for (var n = 1; n < e; n += 2) t.push(n);
                  return t;
                }),
                lt: l(function (t, e, n) {
                  for (var i = n < 0 ? n + e : n; --i >= 0; ) t.push(i);
                  return t;
                }),
                gt: l(function (t, e, n) {
                  for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                  return t;
                }),
              },
            }),
          (E.pseudos.nth = E.pseudos.eq);
        for (b in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          E.pseudos[b] = (function (t) {
            return function (e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
          })(b);
        for (b in { submit: !0, reset: !0 })
          E.pseudos[b] = (function (t) {
            return function (e) {
              var n = e.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && e.type === t;
            };
          })(b);
        return (
          (u.prototype = E.filters = E.pseudos),
          (E.setFilters = new u()),
          (C = e.tokenize =
            function (t, n) {
              var i,
                r,
                o,
                s,
                a,
                l,
                c,
                u = z[t + " "];
              if (u) return n ? 0 : u.slice(0);
              for (a = t, l = [], c = E.preFilter; a; ) {
                (i && !(r = st.exec(a))) ||
                  (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
                  (i = !1),
                  (r = at.exec(a)) &&
                    ((i = r.shift()),
                    o.push({ value: i, type: r[0].replace(ot, " ") }),
                    (a = a.slice(i.length)));
                for (s in E.filter)
                  !(r = ht[s].exec(a)) ||
                    (c[s] && !(r = c[s](r))) ||
                    ((i = r.shift()),
                    o.push({ value: i, type: s, matches: r }),
                    (a = a.slice(i.length)));
                if (!i) break;
              }
              return n ? a.length : a ? e.error(t) : z(t, l).slice(0);
            }),
          (S = e.compile =
            function (t, e) {
              var n,
                i = [],
                r = [],
                o = q[t + " "];
              if (!o) {
                for (e || (e = C(t)), n = e.length; n--; )
                  (o = v(e[n])), o[j] ? i.push(o) : r.push(o);
                (o = q(t, y(r, i))), (o.selector = t);
              }
              return o;
            }),
          (x = e.select =
            function (t, e, n, i) {
              var r,
                o,
                s,
                a,
                l,
                u = "function" == typeof t && t,
                d = !i && C((t = u.selector || t));
              if (((n = n || []), 1 === d.length)) {
                if (
                  ((o = d[0] = d[0].slice(0)),
                  o.length > 2 &&
                    "ID" === (s = o[0]).type &&
                    9 === e.nodeType &&
                    P &&
                    E.relative[o[1].type])
                ) {
                  if (
                    !(e = (E.find.ID(s.matches[0].replace(vt, yt), e) || [])[0])
                  )
                    return n;
                  u && (e = e.parentNode),
                    (t = t.slice(o.shift().value.length));
                }
                for (
                  r = ht.needsContext.test(t) ? 0 : o.length;
                  r-- && ((s = o[r]), !E.relative[(a = s.type)]);

                )
                  if (
                    (l = E.find[a]) &&
                    (i = l(
                      s.matches[0].replace(vt, yt),
                      (mt.test(o[0].type) && c(e.parentNode)) || e
                    ))
                  ) {
                    if ((o.splice(r, 1), !(t = i.length && h(o))))
                      return X.apply(n, i), n;
                    break;
                  }
              }
              return (
                (u || S(t, d))(
                  i,
                  e,
                  !P,
                  n,
                  !e || (mt.test(t) && c(e.parentNode)) || e
                ),
                n
              );
            }),
          (_.sortStable = j.split("").sort(V).join("") === j),
          (_.detectDuplicates = !!I),
          O(),
          (_.sortDetached = r(function (t) {
            return 1 & t.compareDocumentPosition(N.createElement("fieldset"));
          })),
          r(function (t) {
            return (
              (t.innerHTML = "<a href='#'></a>"),
              "#" === t.firstChild.getAttribute("href")
            );
          }) ||
            o("type|href|height|width", function (t, e, n) {
              if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
            }),
          (_.attributes &&
            r(function (t) {
              return (
                (t.innerHTML = "<input/>"),
                t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
              );
            })) ||
            o("value", function (t, e, n) {
              if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue;
            }),
          r(function (t) {
            return null == t.getAttribute("disabled");
          }) ||
            o(Z, function (t, e, n) {
              var i;
              if (!n)
                return !0 === t[e]
                  ? e.toLowerCase()
                  : (i = t.getAttributeNode(e)) && i.specified
                  ? i.value
                  : null;
            }),
          e
        );
      })(n);
      (yt.find = wt),
        (yt.expr = wt.selectors),
        (yt.expr[":"] = yt.expr.pseudos),
        (yt.uniqueSort = yt.unique = wt.uniqueSort),
        (yt.text = wt.getText),
        (yt.isXMLDoc = wt.isXML),
        (yt.contains = wt.contains),
        (yt.escapeSelector = wt.escape);
      var Ct = function (t, e, n) {
          for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
              if (r && yt(t).is(n)) break;
              i.push(t);
            }
          return i;
        },
        St = function (t, e) {
          for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
          return n;
        },
        xt = yt.expr.match.needsContext,
        Dt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        At = /^.[^:#\[\.,]*$/;
      (yt.filter = function (t, e, n) {
        var i = e[0];
        return (
          n && (t = ":not(" + t + ")"),
          1 === e.length && 1 === i.nodeType
            ? yt.find.matchesSelector(i, t)
              ? [i]
              : []
            : yt.find.matches(
                t,
                yt.grep(e, function (t) {
                  return 1 === t.nodeType;
                })
              )
        );
      }),
        yt.fn.extend({
          find: function (t) {
            var e,
              n,
              i = this.length,
              r = this;
            if ("string" != typeof t)
              return this.pushStack(
                yt(t).filter(function () {
                  for (e = 0; e < i; e++)
                    if (yt.contains(r[e], this)) return !0;
                })
              );
            for (n = this.pushStack([]), e = 0; e < i; e++) yt.find(t, r[e], n);
            return i > 1 ? yt.uniqueSort(n) : n;
          },
          filter: function (t) {
            return this.pushStack(c(this, t || [], !1));
          },
          not: function (t) {
            return this.pushStack(c(this, t || [], !0));
          },
          is: function (t) {
            return !!c(
              this,
              "string" == typeof t && xt.test(t) ? yt(t) : t || [],
              !1
            ).length;
          },
        });
      var It,
        Ot = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((yt.fn.init = function (t, e, n) {
        var i, r;
        if (!t) return this;
        if (((n = n || It), "string" == typeof t)) {
          if (
            !(i =
              "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                ? [null, t, null]
                : Ot.exec(t)) ||
            (!i[1] && e)
          )
            return !e || e.jquery
              ? (e || n).find(t)
              : this.constructor(e).find(t);
          if (i[1]) {
            if (
              ((e = e instanceof yt ? e[0] : e),
              yt.merge(
                this,
                yt.parseHTML(
                  i[1],
                  e && e.nodeType ? e.ownerDocument || e : st,
                  !0
                )
              ),
              Dt.test(i[1]) && yt.isPlainObject(e))
            )
              for (i in e)
                yt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this;
          }
          return (
            (r = st.getElementById(i[2])),
            r && ((this[0] = r), (this.length = 1)),
            this
          );
        }
        return t.nodeType
          ? ((this[0] = t), (this.length = 1), this)
          : yt.isFunction(t)
          ? void 0 !== n.ready
            ? n.ready(t)
            : t(yt)
          : yt.makeArray(t, this);
      }).prototype = yt.fn),
        (It = yt(st));
      var Nt = /^(?:parents|prev(?:Until|All))/,
        Lt = { children: !0, contents: !0, next: !0, prev: !0 };
      yt.fn.extend({
        has: function (t) {
          var e = yt(t, this),
            n = e.length;
          return this.filter(function () {
            for (var t = 0; t < n; t++) if (yt.contains(this, e[t])) return !0;
          });
        },
        closest: function (t, e) {
          var n,
            i = 0,
            r = this.length,
            o = [],
            s = "string" != typeof t && yt(t);
          if (!xt.test(t))
            for (; i < r; i++)
              for (n = this[i]; n && n !== e; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && yt.find.matchesSelector(n, t))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? yt.uniqueSort(o) : o);
        },
        index: function (t) {
          return t
            ? "string" == typeof t
              ? ht.call(yt(t), this[0])
              : ht.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, e) {
          return this.pushStack(yt.uniqueSort(yt.merge(this.get(), yt(t, e))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
        yt.each(
          {
            parent: function (t) {
              var e = t.parentNode;
              return e && 11 !== e.nodeType ? e : null;
            },
            parents: function (t) {
              return Ct(t, "parentNode");
            },
            parentsUntil: function (t, e, n) {
              return Ct(t, "parentNode", n);
            },
            next: function (t) {
              return u(t, "nextSibling");
            },
            prev: function (t) {
              return u(t, "previousSibling");
            },
            nextAll: function (t) {
              return Ct(t, "nextSibling");
            },
            prevAll: function (t) {
              return Ct(t, "previousSibling");
            },
            nextUntil: function (t, e, n) {
              return Ct(t, "nextSibling", n);
            },
            prevUntil: function (t, e, n) {
              return Ct(t, "previousSibling", n);
            },
            siblings: function (t) {
              return St((t.parentNode || {}).firstChild, t);
            },
            children: function (t) {
              return St(t.firstChild);
            },
            contents: function (t) {
              return l(t, "iframe")
                ? t.contentDocument
                : (l(t, "template") && (t = t.content || t),
                  yt.merge([], t.childNodes));
            },
          },
          function (t, e) {
            yt.fn[t] = function (n, i) {
              var r = yt.map(this, e, n);
              return (
                "Until" !== t.slice(-5) && (i = n),
                i && "string" == typeof i && (r = yt.filter(i, r)),
                this.length > 1 &&
                  (Lt[t] || yt.uniqueSort(r), Nt.test(t) && r.reverse()),
                this.pushStack(r)
              );
            };
          }
        );
      var Pt = /[^\x20\t\r\n\f]+/g;
      (yt.Callbacks = function (t) {
        t = "string" == typeof t ? h(t) : yt.extend({}, t);
        var e,
          n,
          i,
          r,
          o = [],
          s = [],
          a = -1,
          l = function () {
            for (r = r || t.once, i = e = !0; s.length; a = -1)
              for (n = s.shift(); ++a < o.length; )
                !1 === o[a].apply(n[0], n[1]) &&
                  t.stopOnFalse &&
                  ((a = o.length), (n = !1));
            t.memory || (n = !1), (e = !1), r && (o = n ? [] : "");
          },
          c = {
            add: function () {
              return (
                o &&
                  (n && !e && ((a = o.length - 1), s.push(n)),
                  (function e(n) {
                    yt.each(n, function (n, i) {
                      yt.isFunction(i)
                        ? (t.unique && c.has(i)) || o.push(i)
                        : i && i.length && "string" !== yt.type(i) && e(i);
                    });
                  })(arguments),
                  n && !e && l()),
                this
              );
            },
            remove: function () {
              return (
                yt.each(arguments, function (t, e) {
                  for (var n; (n = yt.inArray(e, o, n)) > -1; )
                    o.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function (t) {
              return t ? yt.inArray(t, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (r = s = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (r = s = []), n || e || (o = n = ""), this;
            },
            locked: function () {
              return !!r;
            },
            fireWith: function (t, n) {
              return (
                r ||
                  ((n = n || []),
                  (n = [t, n.slice ? n.slice() : n]),
                  s.push(n),
                  e || l()),
                this
              );
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return c;
      }),
        yt.extend({
          Deferred: function (t) {
            var e = [
                [
                  "notify",
                  "progress",
                  yt.Callbacks("memory"),
                  yt.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  yt.Callbacks("once memory"),
                  yt.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  yt.Callbacks("once memory"),
                  yt.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              i = "pending",
              r = {
                state: function () {
                  return i;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (t) {
                  return r.then(null, t);
                },
                pipe: function () {
                  var t = arguments;
                  return yt
                    .Deferred(function (n) {
                      yt.each(e, function (e, i) {
                        var r = yt.isFunction(t[i[4]]) && t[i[4]];
                        o[i[1]](function () {
                          var t = r && r.apply(this, arguments);
                          t && yt.isFunction(t.promise)
                            ? t
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[i[0] + "With"](this, r ? [t] : arguments);
                        });
                      }),
                        (t = null);
                    })
                    .promise();
                },
                then: function (t, i, r) {
                  function o(t, e, i, r) {
                    return function () {
                      var a = this,
                        l = arguments,
                        c = function () {
                          var n, c;
                          if (!(t < s)) {
                            if ((n = i.apply(a, l)) === e.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              yt.isFunction(c)
                                ? r
                                  ? c.call(n, o(s, e, d, r), o(s, e, f, r))
                                  : (s++,
                                    c.call(
                                      n,
                                      o(s, e, d, r),
                                      o(s, e, f, r),
                                      o(s, e, d, e.notifyWith)
                                    ))
                                : (i !== d && ((a = void 0), (l = [n])),
                                  (r || e.resolveWith)(a, l));
                          }
                        },
                        u = r
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (n) {
                                yt.Deferred.exceptionHook &&
                                  yt.Deferred.exceptionHook(n, u.stackTrace),
                                  t + 1 >= s &&
                                    (i !== f && ((a = void 0), (l = [n])),
                                    e.rejectWith(a, l));
                              }
                            };
                      t
                        ? u()
                        : (yt.Deferred.getStackHook &&
                            (u.stackTrace = yt.Deferred.getStackHook()),
                          n.setTimeout(u));
                    };
                  }
                  var s = 0;
                  return yt
                    .Deferred(function (n) {
                      e[0][3].add(
                        o(0, n, yt.isFunction(r) ? r : d, n.notifyWith)
                      ),
                        e[1][3].add(o(0, n, yt.isFunction(t) ? t : d)),
                        e[2][3].add(o(0, n, yt.isFunction(i) ? i : f));
                    })
                    .promise();
                },
                promise: function (t) {
                  return null != t ? yt.extend(t, r) : r;
                },
              },
              o = {};
            return (
              yt.each(e, function (t, n) {
                var s = n[2],
                  a = n[5];
                (r[n[1]] = s.add),
                  a &&
                    s.add(
                      function () {
                        i = a;
                      },
                      e[3 - t][2].disable,
                      e[0][2].lock
                    ),
                  s.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = s.fireWith);
              }),
              r.promise(o),
              t && t.call(o, o),
              o
            );
          },
          when: function (t) {
            var e = arguments.length,
              n = e,
              i = Array(n),
              r = lt.call(arguments),
              o = yt.Deferred(),
              s = function (t) {
                return function (n) {
                  (i[t] = this),
                    (r[t] = arguments.length > 1 ? lt.call(arguments) : n),
                    --e || o.resolveWith(i, r);
                };
              };
            if (
              e <= 1 &&
              (p(t, o.done(s(n)).resolve, o.reject, !e),
              "pending" === o.state() || yt.isFunction(r[n] && r[n].then))
            )
              return o.then();
            for (; n--; ) p(r[n], s(n), o.reject);
            return o.promise();
          },
        });
      var kt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (yt.Deferred.exceptionHook = function (t, e) {
        n.console &&
          n.console.warn &&
          t &&
          kt.test(t.name) &&
          n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
      }),
        (yt.readyException = function (t) {
          n.setTimeout(function () {
            throw t;
          });
        });
      var Ht = yt.Deferred();
      (yt.fn.ready = function (t) {
        return (
          Ht.then(t).catch(function (t) {
            yt.readyException(t);
          }),
          this
        );
      }),
        yt.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (t) {
            (!0 === t ? --yt.readyWait : yt.isReady) ||
              ((yt.isReady = !0),
              (!0 !== t && --yt.readyWait > 0) || Ht.resolveWith(st, [yt]));
          },
        }),
        (yt.ready.then = Ht.then),
        "complete" === st.readyState ||
        ("loading" !== st.readyState && !st.documentElement.doScroll)
          ? n.setTimeout(yt.ready)
          : (st.addEventListener("DOMContentLoaded", g),
            n.addEventListener("load", g));
      var Mt = function (t, e, n, i, r, o, s) {
          var a = 0,
            l = t.length,
            c = null == n;
          if ("object" === yt.type(n)) {
            r = !0;
            for (a in n) Mt(t, e, a, n[a], !0, o, s);
          } else if (
            void 0 !== i &&
            ((r = !0),
            yt.isFunction(i) || (s = !0),
            c &&
              (s
                ? (e.call(t, i), (e = null))
                : ((c = e),
                  (e = function (t, e, n) {
                    return c.call(yt(t), n);
                  }))),
            e)
          )
            for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
          return r ? t : c ? e.call(t) : l ? e(t[0], n) : o;
        },
        Rt = function (t) {
          return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
        };
      (m.uid = 1),
        (m.prototype = {
          cache: function (t) {
            var e = t[this.expando];
            return (
              e ||
                ((e = {}),
                Rt(t) &&
                  (t.nodeType
                    ? (t[this.expando] = e)
                    : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0,
                      }))),
              e
            );
          },
          set: function (t, e, n) {
            var i,
              r = this.cache(t);
            if ("string" == typeof e) r[yt.camelCase(e)] = n;
            else for (i in e) r[yt.camelCase(i)] = e[i];
            return r;
          },
          get: function (t, e) {
            return void 0 === e
              ? this.cache(t)
              : t[this.expando] && t[this.expando][yt.camelCase(e)];
          },
          access: function (t, e, n) {
            return void 0 === e || (e && "string" == typeof e && void 0 === n)
              ? this.get(t, e)
              : (this.set(t, e, n), void 0 !== n ? n : e);
          },
          remove: function (t, e) {
            var n,
              i = t[this.expando];
            if (void 0 !== i) {
              if (void 0 !== e) {
                Array.isArray(e)
                  ? (e = e.map(yt.camelCase))
                  : ((e = yt.camelCase(e)),
                    (e = e in i ? [e] : e.match(Pt) || [])),
                  (n = e.length);
                for (; n--; ) delete i[e[n]];
              }
              (void 0 === e || yt.isEmptyObject(i)) &&
                (t.nodeType
                  ? (t[this.expando] = void 0)
                  : delete t[this.expando]);
            }
          },
          hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !yt.isEmptyObject(e);
          },
        });
      var jt = new m(),
        Wt = new m(),
        Ft = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Bt = /[A-Z]/g;
      yt.extend({
        hasData: function (t) {
          return Wt.hasData(t) || jt.hasData(t);
        },
        data: function (t, e, n) {
          return Wt.access(t, e, n);
        },
        removeData: function (t, e) {
          Wt.remove(t, e);
        },
        _data: function (t, e, n) {
          return jt.access(t, e, n);
        },
        _removeData: function (t, e) {
          jt.remove(t, e);
        },
      }),
        yt.fn.extend({
          data: function (t, e) {
            var n,
              i,
              r,
              o = this[0],
              s = o && o.attributes;
            if (void 0 === t) {
              if (
                this.length &&
                ((r = Wt.get(o)),
                1 === o.nodeType && !jt.get(o, "hasDataAttrs"))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    ((i = s[n].name),
                    0 === i.indexOf("data-") &&
                      ((i = yt.camelCase(i.slice(5))), y(o, i, r[i])));
                jt.set(o, "hasDataAttrs", !0);
              }
              return r;
            }
            return "object" == typeof t
              ? this.each(function () {
                  Wt.set(this, t);
                })
              : Mt(
                  this,
                  function (e) {
                    var n;
                    if (o && void 0 === e) {
                      if (void 0 !== (n = Wt.get(o, t))) return n;
                      if (void 0 !== (n = y(o, t))) return n;
                    } else
                      this.each(function () {
                        Wt.set(this, t, e);
                      });
                  },
                  null,
                  e,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (t) {
            return this.each(function () {
              Wt.remove(this, t);
            });
          },
        }),
        yt.extend({
          queue: function (t, e, n) {
            var i;
            if (t)
              return (
                (e = (e || "fx") + "queue"),
                (i = jt.get(t, e)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = jt.access(t, e, yt.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (t, e) {
            e = e || "fx";
            var n = yt.queue(t, e),
              i = n.length,
              r = n.shift(),
              o = yt._queueHooks(t, e),
              s = function () {
                yt.dequeue(t, e);
              };
            "inprogress" === r && ((r = n.shift()), i--),
              r &&
                ("fx" === e && n.unshift("inprogress"),
                delete o.stop,
                r.call(t, s, o)),
              !i && o && o.empty.fire();
          },
          _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return (
              jt.get(t, n) ||
              jt.access(t, n, {
                empty: yt.Callbacks("once memory").add(function () {
                  jt.remove(t, [e + "queue", n]);
                }),
              })
            );
          },
        }),
        yt.fn.extend({
          queue: function (t, e) {
            var n = 2;
            return (
              "string" != typeof t && ((e = t), (t = "fx"), n--),
              arguments.length < n
                ? yt.queue(this[0], t)
                : void 0 === e
                ? this
                : this.each(function () {
                    var n = yt.queue(this, t, e);
                    yt._queueHooks(this, t),
                      "fx" === t &&
                        "inprogress" !== n[0] &&
                        yt.dequeue(this, t);
                  })
            );
          },
          dequeue: function (t) {
            return this.each(function () {
              yt.dequeue(this, t);
            });
          },
          clearQueue: function (t) {
            return this.queue(t || "fx", []);
          },
          promise: function (t, e) {
            var n,
              i = 1,
              r = yt.Deferred(),
              o = this,
              s = this.length,
              a = function () {
                --i || r.resolveWith(o, [o]);
              };
            for (
              "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
              s--;

            )
              (n = jt.get(o[s], t + "queueHooks")) &&
                n.empty &&
                (i++, n.empty.add(a));
            return a(), r.promise(e);
          },
        });
      var Ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        zt = new RegExp("^(?:([+-])=|)(" + Ut + ")([a-z%]*)$", "i"),
        qt = ["Top", "Right", "Bottom", "Left"],
        Vt = function (t, e) {
          return (
            (t = e || t),
            "none" === t.style.display ||
              ("" === t.style.display &&
                yt.contains(t.ownerDocument, t) &&
                "none" === yt.css(t, "display"))
          );
        },
        Gt = function (t, e, n, i) {
          var r,
            o,
            s = {};
          for (o in e) (s[o] = t.style[o]), (t.style[o] = e[o]);
          r = n.apply(t, i || []);
          for (o in e) t.style[o] = s[o];
          return r;
        },
        Kt = {};
      yt.fn.extend({
        show: function () {
          return E(this, !0);
        },
        hide: function () {
          return E(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                Vt(this) ? yt(this).show() : yt(this).hide();
              });
        },
      });
      var $t = /^(?:checkbox|radio)$/i,
        Qt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Xt = /^$|\/(?:java|ecma)script/i,
        Yt = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
      (Yt.optgroup = Yt.option),
        (Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead),
        (Yt.th = Yt.td);
      var Jt = /<|&#?\w+;/;
      !(function () {
        var t = st.createDocumentFragment(),
          e = t.appendChild(st.createElement("div")),
          n = st.createElement("input");
        n.setAttribute("type", "radio"),
          n.setAttribute("checked", "checked"),
          n.setAttribute("name", "t"),
          e.appendChild(n),
          (vt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (e.innerHTML = "<textarea>x</textarea>"),
          (vt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
      })();
      var Zt = st.documentElement,
        te = /^key/,
        ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ne = /^([^.]*)(?:\.(.+)|)/;
      (yt.event = {
        global: {},
        add: function (t, e, n, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u,
            h,
            d,
            f,
            p,
            g,
            m = jt.get(t);
          if (m)
            for (
              n.handler && ((o = n), (n = o.handler), (r = o.selector)),
                r && yt.find.matchesSelector(Zt, r),
                n.guid || (n.guid = yt.guid++),
                (l = m.events) || (l = m.events = {}),
                (s = m.handle) ||
                  (s = m.handle =
                    function (e) {
                      return void 0 !== yt && yt.event.triggered !== e.type
                        ? yt.event.dispatch.apply(t, arguments)
                        : void 0;
                    }),
                e = (e || "").match(Pt) || [""],
                c = e.length;
              c--;

            )
              (a = ne.exec(e[c]) || []),
                (f = g = a[1]),
                (p = (a[2] || "").split(".").sort()),
                f &&
                  ((h = yt.event.special[f] || {}),
                  (f = (r ? h.delegateType : h.bindType) || f),
                  (h = yt.event.special[f] || {}),
                  (u = yt.extend(
                    {
                      type: f,
                      origType: g,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && yt.expr.match.needsContext.test(r),
                      namespace: p.join("."),
                    },
                    o
                  )),
                  (d = l[f]) ||
                    ((d = l[f] = []),
                    (d.delegateCount = 0),
                    (h.setup && !1 !== h.setup.call(t, i, p, s)) ||
                      (t.addEventListener && t.addEventListener(f, s))),
                  h.add &&
                    (h.add.call(t, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                  r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                  (yt.event.global[f] = !0));
        },
        remove: function (t, e, n, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u,
            h,
            d,
            f,
            p,
            g,
            m = jt.hasData(t) && jt.get(t);
          if (m && (l = m.events)) {
            for (e = (e || "").match(Pt) || [""], c = e.length; c--; )
              if (
                ((a = ne.exec(e[c]) || []),
                (f = g = a[1]),
                (p = (a[2] || "").split(".").sort()),
                f)
              ) {
                for (
                  h = yt.event.special[f] || {},
                    f = (i ? h.delegateType : h.bindType) || f,
                    d = l[f] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    s = o = d.length;
                  o--;

                )
                  (u = d[o]),
                    (!r && g !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (a && !a.test(u.namespace)) ||
                      (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                      (d.splice(o, 1),
                      u.selector && d.delegateCount--,
                      h.remove && h.remove.call(t, u));
                s &&
                  !d.length &&
                  ((h.teardown && !1 !== h.teardown.call(t, p, m.handle)) ||
                    yt.removeEvent(t, f, m.handle),
                  delete l[f]);
              } else for (f in l) yt.event.remove(t, f + e[c], n, i, !0);
            yt.isEmptyObject(l) && jt.remove(t, "handle events");
          }
        },
        dispatch: function (t) {
          var e,
            n,
            i,
            r,
            o,
            s,
            a = yt.event.fix(t),
            l = new Array(arguments.length),
            c = (jt.get(this, "events") || {})[a.type] || [],
            u = yt.event.special[a.type] || {};
          for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
          if (
            ((a.delegateTarget = this),
            !u.preDispatch || !1 !== u.preDispatch.call(this, a))
          ) {
            for (
              s = yt.event.handlers.call(this, a, c), e = 0;
              (r = s[e++]) && !a.isPropagationStopped();

            )
              for (
                a.currentTarget = r.elem, n = 0;
                (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();

              )
                (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
                  ((a.handleObj = o),
                  (a.data = o.data),
                  void 0 !==
                    (i = (
                      (yt.event.special[o.origType] || {}).handle || o.handler
                    ).apply(r.elem, l)) &&
                    !1 === (a.result = i) &&
                    (a.preventDefault(), a.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, a), a.result;
          }
        },
        handlers: function (t, e) {
          var n,
            i,
            r,
            o,
            s,
            a = [],
            l = e.delegateCount,
            c = t.target;
          if (l && c.nodeType && !("click" === t.type && t.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== t.type || !0 !== c.disabled)
              ) {
                for (o = [], s = {}, n = 0; n < l; n++)
                  (i = e[n]),
                    (r = i.selector + " "),
                    void 0 === s[r] &&
                      (s[r] = i.needsContext
                        ? yt(r, this).index(c) > -1
                        : yt.find(r, this, null, [c]).length),
                    s[r] && o.push(i);
                o.length && a.push({ elem: c, handlers: o });
              }
          return (
            (c = this),
            l < e.length && a.push({ elem: c, handlers: e.slice(l) }),
            a
          );
        },
        addProp: function (t, e) {
          Object.defineProperty(yt.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: yt.isFunction(e)
              ? function () {
                  if (this.originalEvent) return e(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
        },
        fix: function (t) {
          return t[yt.expando] ? t : new yt.Event(t);
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function () {
              if (this !== D() && this.focus) return this.focus(), !1;
            },
            delegateType: "focusin",
          },
          blur: {
            trigger: function () {
              if (this === D() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout",
          },
          click: {
            trigger: function () {
              if ("checkbox" === this.type && this.click && l(this, "input"))
                return this.click(), !1;
            },
            _default: function (t) {
              return l(t.target, "a");
            },
          },
          beforeunload: {
            postDispatch: function (t) {
              void 0 !== t.result &&
                t.originalEvent &&
                (t.originalEvent.returnValue = t.result);
            },
          },
        },
      }),
        (yt.removeEvent = function (t, e, n) {
          t.removeEventListener && t.removeEventListener(e, n);
        }),
        (yt.Event = function (t, e) {
          if (!(this instanceof yt.Event)) return new yt.Event(t, e);
          t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? S
                  : x),
              (this.target =
                t.target && 3 === t.target.nodeType
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
            e && yt.extend(this, e),
            (this.timeStamp = (t && t.timeStamp) || yt.now()),
            (this[yt.expando] = !0);
        }),
        (yt.Event.prototype = {
          constructor: yt.Event,
          isDefaultPrevented: x,
          isPropagationStopped: x,
          isImmediatePropagationStopped: x,
          isSimulated: !1,
          preventDefault: function () {
            var t = this.originalEvent;
            (this.isDefaultPrevented = S),
              t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function () {
            var t = this.originalEvent;
            (this.isPropagationStopped = S),
              t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = S),
              t && !this.isSimulated && t.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        yt.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
              var e = t.button;
              return null == t.which && te.test(t.type)
                ? null != t.charCode
                  ? t.charCode
                  : t.keyCode
                : !t.which && void 0 !== e && ee.test(t.type)
                ? 1 & e
                  ? 1
                  : 2 & e
                  ? 3
                  : 4 & e
                  ? 2
                  : 0
                : t.which;
            },
          },
          yt.event.addProp
        ),
        yt.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (t, e) {
            yt.event.special[t] = {
              delegateType: e,
              bindType: e,
              handle: function (t) {
                var n,
                  i = this,
                  r = t.relatedTarget,
                  o = t.handleObj;
                return (
                  (r && (r === i || yt.contains(i, r))) ||
                    ((t.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (t.type = e)),
                  n
                );
              },
            };
          }
        ),
        yt.fn.extend({
          on: function (t, e, n, i) {
            return A(this, t, e, n, i);
          },
          one: function (t, e, n, i) {
            return A(this, t, e, n, i, 1);
          },
          off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)
              return (
                (i = t.handleObj),
                yt(t.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" == typeof t) {
              for (r in t) this.off(r, e, t[r]);
              return this;
            }
            return (
              (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
              !1 === n && (n = x),
              this.each(function () {
                yt.event.remove(this, t, n, e);
              })
            );
          },
        });
      var ie =
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        re = /<script|<style|<link/i,
        oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        se = /^true\/(.*)/,
        ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      yt.extend({
        htmlPrefilter: function (t) {
          return t.replace(ie, "<$1></$2>");
        },
        clone: function (t, e, n) {
          var i,
            r,
            o,
            s,
            a = t.cloneNode(!0),
            l = yt.contains(t.ownerDocument, t);
          if (
            !(
              vt.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              yt.isXMLDoc(t)
            )
          )
            for (s = T(a), o = T(t), i = 0, r = o.length; i < r; i++)
              P(o[i], s[i]);
          if (e)
            if (n)
              for (
                o = o || T(t), s = s || T(a), i = 0, r = o.length;
                i < r;
                i++
              )
                L(o[i], s[i]);
            else L(t, a);
          return (
            (s = T(a, "script")), s.length > 0 && w(s, !l && T(t, "script")), a
          );
        },
        cleanData: function (t) {
          for (
            var e, n, i, r = yt.event.special, o = 0;
            void 0 !== (n = t[o]);
            o++
          )
            if (Rt(n)) {
              if ((e = n[jt.expando])) {
                if (e.events)
                  for (i in e.events)
                    r[i]
                      ? yt.event.remove(n, i)
                      : yt.removeEvent(n, i, e.handle);
                n[jt.expando] = void 0;
              }
              n[Wt.expando] && (n[Wt.expando] = void 0);
            }
        },
      }),
        yt.fn.extend({
          detach: function (t) {
            return H(this, t, !0);
          },
          remove: function (t) {
            return H(this, t);
          },
          text: function (t) {
            return Mt(
              this,
              function (t) {
                return void 0 === t
                  ? yt.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = t);
                    });
              },
              null,
              t,
              arguments.length
            );
          },
          append: function () {
            return k(this, arguments, function (t) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                I(this, t).appendChild(t);
            });
          },
          prepend: function () {
            return k(this, arguments, function (t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var e = I(this, t);
                e.insertBefore(t, e.firstChild);
              }
            });
          },
          before: function () {
            return k(this, arguments, function (t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function () {
            return k(this, arguments, function (t) {
              this.parentNode &&
                this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType &&
                (yt.cleanData(T(t, !1)), (t.textContent = ""));
            return this;
          },
          clone: function (t, e) {
            return (
              (t = null != t && t),
              (e = null == e ? t : e),
              this.map(function () {
                return yt.clone(this, t, e);
              })
            );
          },
          html: function (t) {
            return Mt(
              this,
              function (t) {
                var e = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if (
                  "string" == typeof t &&
                  !re.test(t) &&
                  !Yt[(Qt.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = yt.htmlPrefilter(t);
                  try {
                    for (; n < i; n++)
                      (e = this[n] || {}),
                        1 === e.nodeType &&
                          (yt.cleanData(T(e, !1)), (e.innerHTML = t));
                    e = 0;
                  } catch (t) {}
                }
                e && this.empty().append(t);
              },
              null,
              t,
              arguments.length
            );
          },
          replaceWith: function () {
            var t = [];
            return k(
              this,
              arguments,
              function (e) {
                var n = this.parentNode;
                yt.inArray(this, t) < 0 &&
                  (yt.cleanData(T(this)), n && n.replaceChild(e, this));
              },
              t
            );
          },
        }),
        yt.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (t, e) {
            yt.fn[t] = function (t) {
              for (
                var n, i = [], r = yt(t), o = r.length - 1, s = 0;
                s <= o;
                s++
              )
                (n = s === o ? this : this.clone(!0)),
                  yt(r[s])[e](n),
                  ut.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var le = /^margin/,
        ce = new RegExp("^(" + Ut + ")(?!px)[a-z%]+$", "i"),
        ue = function (t) {
          var e = t.ownerDocument.defaultView;
          return (e && e.opener) || (e = n), e.getComputedStyle(t);
        };
      !(function () {
        function t() {
          if (a) {
            (a.style.cssText =
              "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
              (a.innerHTML = ""),
              Zt.appendChild(s);
            var t = n.getComputedStyle(a);
            (e = "1%" !== t.top),
              (o = "2px" === t.marginLeft),
              (i = "4px" === t.width),
              (a.style.marginRight = "50%"),
              (r = "4px" === t.marginRight),
              Zt.removeChild(s),
              (a = null);
          }
        }
        var e,
          i,
          r,
          o,
          s = st.createElement("div"),
          a = st.createElement("div");
        a.style &&
          ((a.style.backgroundClip = "content-box"),
          (a.cloneNode(!0).style.backgroundClip = ""),
          (vt.clearCloneStyle = "content-box" === a.style.backgroundClip),
          (s.style.cssText =
            "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
          s.appendChild(a),
          yt.extend(vt, {
            pixelPosition: function () {
              return t(), e;
            },
            boxSizingReliable: function () {
              return t(), i;
            },
            pixelMarginRight: function () {
              return t(), r;
            },
            reliableMarginLeft: function () {
              return t(), o;
            },
          }));
      })();
      var he = /^(none|table(?!-c[ea]).+)/,
        de = /^--/,
        fe = { position: "absolute", visibility: "hidden", display: "block" },
        pe = { letterSpacing: "0", fontWeight: "400" },
        ge = ["Webkit", "Moz", "ms"],
        me = st.createElement("div").style;
      yt.extend({
        cssHooks: {
          opacity: {
            get: function (t, e) {
              if (e) {
                var n = M(t, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: { float: "cssFloat" },
        style: function (t, e, n, i) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var r,
              o,
              s,
              a = yt.camelCase(e),
              l = de.test(e),
              c = t.style;
            if (
              (l || (e = W(a)),
              (s = yt.cssHooks[e] || yt.cssHooks[a]),
              void 0 === n)
            )
              return s && "get" in s && void 0 !== (r = s.get(t, !1, i))
                ? r
                : c[e];
            (o = typeof n),
              "string" === o &&
                (r = zt.exec(n)) &&
                r[1] &&
                ((n = b(t, e, r)), (o = "number")),
              null != n &&
                n === n &&
                ("number" === o &&
                  (n += (r && r[3]) || (yt.cssNumber[a] ? "" : "px")),
                vt.clearCloneStyle ||
                  "" !== n ||
                  0 !== e.indexOf("background") ||
                  (c[e] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(t, n, i))) ||
                  (l ? c.setProperty(e, n) : (c[e] = n)));
          }
        },
        css: function (t, e, n, i) {
          var r,
            o,
            s,
            a = yt.camelCase(e);
          return (
            de.test(e) || (e = W(a)),
            (s = yt.cssHooks[e] || yt.cssHooks[a]),
            s && "get" in s && (r = s.get(t, !0, n)),
            void 0 === r && (r = M(t, e, i)),
            "normal" === r && e in pe && (r = pe[e]),
            "" === n || n
              ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
              : r
          );
        },
      }),
        yt.each(["height", "width"], function (t, e) {
          yt.cssHooks[e] = {
            get: function (t, n, i) {
              if (n)
                return !he.test(yt.css(t, "display")) ||
                  (t.getClientRects().length && t.getBoundingClientRect().width)
                  ? U(t, e, i)
                  : Gt(t, fe, function () {
                      return U(t, e, i);
                    });
            },
            set: function (t, n, i) {
              var r,
                o = i && ue(t),
                s =
                  i &&
                  B(t, e, i, "border-box" === yt.css(t, "boxSizing", !1, o), o);
              return (
                s &&
                  (r = zt.exec(n)) &&
                  "px" !== (r[3] || "px") &&
                  ((t.style[e] = n), (n = yt.css(t, e))),
                F(t, n, s)
              );
            },
          };
        }),
        (yt.cssHooks.marginLeft = R(vt.reliableMarginLeft, function (t, e) {
          if (e)
            return (
              (parseFloat(M(t, "marginLeft")) ||
                t.getBoundingClientRect().left -
                  Gt(t, { marginLeft: 0 }, function () {
                    return t.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        yt.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
          (yt.cssHooks[t + e] = {
            expand: function (n) {
              for (
                var i = 0,
                  r = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                r[t + qt[i] + e] = o[i] || o[i - 2] || o[0];
              return r;
            },
          }),
            le.test(t) || (yt.cssHooks[t + e].set = F);
        }),
        yt.fn.extend({
          css: function (t, e) {
            return Mt(
              this,
              function (t, e, n) {
                var i,
                  r,
                  o = {},
                  s = 0;
                if (Array.isArray(e)) {
                  for (i = ue(t), r = e.length; s < r; s++)
                    o[e[s]] = yt.css(t, e[s], !1, i);
                  return o;
                }
                return void 0 !== n ? yt.style(t, e, n) : yt.css(t, e);
              },
              t,
              e,
              arguments.length > 1
            );
          },
        }),
        (yt.Tween = z),
        (z.prototype = {
          constructor: z,
          init: function (t, e, n, i, r, o) {
            (this.elem = t),
              (this.prop = n),
              (this.easing = r || yt.easing._default),
              (this.options = e),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = o || (yt.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var t = z.propHooks[this.prop];
            return t && t.get ? t.get(this) : z.propHooks._default.get(this);
          },
          run: function (t) {
            var e,
              n = z.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = e =
                    yt.easing[this.easing](
                      t,
                      this.options.duration * t,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = e = t),
              (this.now = (this.end - this.start) * e + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : z.propHooks._default.set(this),
              this
            );
          },
        }),
        (z.prototype.init.prototype = z.prototype),
        (z.propHooks = {
          _default: {
            get: function (t) {
              var e;
              return 1 !== t.elem.nodeType ||
                (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                ? t.elem[t.prop]
                : ((e = yt.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0);
            },
            set: function (t) {
              yt.fx.step[t.prop]
                ? yt.fx.step[t.prop](t)
                : 1 !== t.elem.nodeType ||
                  (null == t.elem.style[yt.cssProps[t.prop]] &&
                    !yt.cssHooks[t.prop])
                ? (t.elem[t.prop] = t.now)
                : yt.style(t.elem, t.prop, t.now + t.unit);
            },
          },
        }),
        (z.propHooks.scrollTop = z.propHooks.scrollLeft =
          {
            set: function (t) {
              t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
            },
          }),
        (yt.easing = {
          linear: function (t) {
            return t;
          },
          swing: function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (yt.fx = z.prototype.init),
        (yt.fx.step = {});
      var ve,
        ye,
        be = /^(?:toggle|show|hide)$/,
        _e = /queueHooks$/;
      (yt.Animation = yt.extend(X, {
        tweeners: {
          "*": [
            function (t, e) {
              var n = this.createTween(t, e);
              return b(n.elem, t, zt.exec(e), n), n;
            },
          ],
        },
        tweener: function (t, e) {
          yt.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.match(Pt));
          for (var n, i = 0, r = t.length; i < r; i++)
            (n = t[i]),
              (X.tweeners[n] = X.tweeners[n] || []),
              X.tweeners[n].unshift(e);
        },
        prefilters: [$],
        prefilter: function (t, e) {
          e ? X.prefilters.unshift(t) : X.prefilters.push(t);
        },
      })),
        (yt.speed = function (t, e, n) {
          var i =
            t && "object" == typeof t
              ? yt.extend({}, t)
              : {
                  complete: n || (!n && e) || (yt.isFunction(t) && t),
                  duration: t,
                  easing: (n && e) || (e && !yt.isFunction(e) && e),
                };
          return (
            yt.fx.off
              ? (i.duration = 0)
              : "number" != typeof i.duration &&
                (i.duration in yt.fx.speeds
                  ? (i.duration = yt.fx.speeds[i.duration])
                  : (i.duration = yt.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              yt.isFunction(i.old) && i.old.call(this),
                i.queue && yt.dequeue(this, i.queue);
            }),
            i
          );
        }),
        yt.fn.extend({
          fadeTo: function (t, e, n, i) {
            return this.filter(Vt)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: e }, t, n, i);
          },
          animate: function (t, e, n, i) {
            var r = yt.isEmptyObject(t),
              o = yt.speed(e, n, i),
              s = function () {
                var e = X(this, yt.extend({}, t), o);
                (r || jt.get(this, "finish")) && e.stop(!0);
              };
            return (
              (s.finish = s),
              r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            );
          },
          stop: function (t, e, n) {
            var i = function (t) {
              var e = t.stop;
              delete t.stop, e(n);
            };
            return (
              "string" != typeof t && ((n = e), (e = t), (t = void 0)),
              e && !1 !== t && this.queue(t || "fx", []),
              this.each(function () {
                var e = !0,
                  r = null != t && t + "queueHooks",
                  o = yt.timers,
                  s = jt.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else for (r in s) s[r] && s[r].stop && _e.test(r) && i(s[r]);
                for (r = o.length; r--; )
                  o[r].elem !== this ||
                    (null != t && o[r].queue !== t) ||
                    (o[r].anim.stop(n), (e = !1), o.splice(r, 1));
                (!e && n) || yt.dequeue(this, t);
              })
            );
          },
          finish: function (t) {
            return (
              !1 !== t && (t = t || "fx"),
              this.each(function () {
                var e,
                  n = jt.get(this),
                  i = n[t + "queue"],
                  r = n[t + "queueHooks"],
                  o = yt.timers,
                  s = i ? i.length : 0;
                for (
                  n.finish = !0,
                    yt.queue(this, t, []),
                    r && r.stop && r.stop.call(this, !0),
                    e = o.length;
                  e--;

                )
                  o[e].elem === this &&
                    o[e].queue === t &&
                    (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < s; e++)
                  i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        yt.each(["toggle", "show", "hide"], function (t, e) {
          var n = yt.fn[e];
          yt.fn[e] = function (t, i, r) {
            return null == t || "boolean" == typeof t
              ? n.apply(this, arguments)
              : this.animate(G(e, !0), t, i, r);
          };
        }),
        yt.each(
          {
            slideDown: G("show"),
            slideUp: G("hide"),
            slideToggle: G("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (t, e) {
            yt.fn[t] = function (t, n, i) {
              return this.animate(e, t, n, i);
            };
          }
        ),
        (yt.timers = []),
        (yt.fx.tick = function () {
          var t,
            e = 0,
            n = yt.timers;
          for (ve = yt.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
          n.length || yt.fx.stop(), (ve = void 0);
        }),
        (yt.fx.timer = function (t) {
          yt.timers.push(t), yt.fx.start();
        }),
        (yt.fx.interval = 13),
        (yt.fx.start = function () {
          ye || ((ye = !0), q());
        }),
        (yt.fx.stop = function () {
          ye = null;
        }),
        (yt.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (yt.fn.delay = function (t, e) {
          return (
            (t = yt.fx ? yt.fx.speeds[t] || t : t),
            (e = e || "fx"),
            this.queue(e, function (e, i) {
              var r = n.setTimeout(e, t);
              i.stop = function () {
                n.clearTimeout(r);
              };
            })
          );
        }),
        (function () {
          var t = st.createElement("input"),
            e = st.createElement("select"),
            n = e.appendChild(st.createElement("option"));
          (t.type = "checkbox"),
            (vt.checkOn = "" !== t.value),
            (vt.optSelected = n.selected),
            (t = st.createElement("input")),
            (t.value = "t"),
            (t.type = "radio"),
            (vt.radioValue = "t" === t.value);
        })();
      var Ee,
        Te = yt.expr.attrHandle;
      yt.fn.extend({
        attr: function (t, e) {
          return Mt(this, yt.attr, t, e, arguments.length > 1);
        },
        removeAttr: function (t) {
          return this.each(function () {
            yt.removeAttr(this, t);
          });
        },
      }),
        yt.extend({
          attr: function (t, e, n) {
            var i,
              r,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === t.getAttribute
                ? yt.prop(t, e, n)
                : ((1 === o && yt.isXMLDoc(t)) ||
                    (r =
                      yt.attrHooks[e.toLowerCase()] ||
                      (yt.expr.match.bool.test(e) ? Ee : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void yt.removeAttr(t, e)
                      : r && "set" in r && void 0 !== (i = r.set(t, n, e))
                      ? i
                      : (t.setAttribute(e, n + ""), n)
                    : r && "get" in r && null !== (i = r.get(t, e))
                    ? i
                    : ((i = yt.find.attr(t, e)), null == i ? void 0 : i));
          },
          attrHooks: {
            type: {
              set: function (t, e) {
                if (!vt.radioValue && "radio" === e && l(t, "input")) {
                  var n = t.value;
                  return t.setAttribute("type", e), n && (t.value = n), e;
                }
              },
            },
          },
          removeAttr: function (t, e) {
            var n,
              i = 0,
              r = e && e.match(Pt);
            if (r && 1 === t.nodeType)
              for (; (n = r[i++]); ) t.removeAttribute(n);
          },
        }),
        (Ee = {
          set: function (t, e, n) {
            return !1 === e ? yt.removeAttr(t, n) : t.setAttribute(n, n), n;
          },
        }),
        yt.each(yt.expr.match.bool.source.match(/\w+/g), function (t, e) {
          var n = Te[e] || yt.find.attr;
          Te[e] = function (t, e, i) {
            var r,
              o,
              s = e.toLowerCase();
            return (
              i ||
                ((o = Te[s]),
                (Te[s] = r),
                (r = null != n(t, e, i) ? s : null),
                (Te[s] = o)),
              r
            );
          };
        });
      var we = /^(?:input|select|textarea|button)$/i,
        Ce = /^(?:a|area)$/i;
      yt.fn.extend({
        prop: function (t, e) {
          return Mt(this, yt.prop, t, e, arguments.length > 1);
        },
        removeProp: function (t) {
          return this.each(function () {
            delete this[yt.propFix[t] || t];
          });
        },
      }),
        yt.extend({
          prop: function (t, e, n) {
            var i,
              r,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && yt.isXMLDoc(t)) ||
                  ((e = yt.propFix[e] || e), (r = yt.propHooks[e])),
                void 0 !== n
                  ? r && "set" in r && void 0 !== (i = r.set(t, n, e))
                    ? i
                    : (t[e] = n)
                  : r && "get" in r && null !== (i = r.get(t, e))
                  ? i
                  : t[e]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (t) {
                var e = yt.find.attr(t, "tabindex");
                return e
                  ? parseInt(e, 10)
                  : we.test(t.nodeName) || (Ce.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        vt.optSelected ||
          (yt.propHooks.selected = {
            get: function (t) {
              var e = t.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function (t) {
              var e = t.parentNode;
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            },
          }),
        yt.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            yt.propFix[this.toLowerCase()] = this;
          }
        ),
        yt.fn.extend({
          addClass: function (t) {
            var e,
              n,
              i,
              r,
              o,
              s,
              a,
              l = 0;
            if (yt.isFunction(t))
              return this.each(function (e) {
                yt(this).addClass(t.call(this, e, J(this)));
              });
            if ("string" == typeof t && t)
              for (e = t.match(Pt) || []; (n = this[l++]); )
                if (((r = J(n)), (i = 1 === n.nodeType && " " + Y(r) + " "))) {
                  for (s = 0; (o = e[s++]); )
                    i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                  (a = Y(i)), r !== a && n.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function (t) {
            var e,
              n,
              i,
              r,
              o,
              s,
              a,
              l = 0;
            if (yt.isFunction(t))
              return this.each(function (e) {
                yt(this).removeClass(t.call(this, e, J(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
              for (e = t.match(Pt) || []; (n = this[l++]); )
                if (((r = J(n)), (i = 1 === n.nodeType && " " + Y(r) + " "))) {
                  for (s = 0; (o = e[s++]); )
                    for (; i.indexOf(" " + o + " ") > -1; )
                      i = i.replace(" " + o + " ", " ");
                  (a = Y(i)), r !== a && n.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n
              ? e
                ? this.addClass(t)
                : this.removeClass(t)
              : yt.isFunction(t)
              ? this.each(function (n) {
                  yt(this).toggleClass(t.call(this, n, J(this), e), e);
                })
              : this.each(function () {
                  var e, i, r, o;
                  if ("string" === n)
                    for (
                      i = 0, r = yt(this), o = t.match(Pt) || [];
                      (e = o[i++]);

                    )
                      r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                  else
                    (void 0 !== t && "boolean" !== n) ||
                      ((e = J(this)),
                      e && jt.set(this, "__className__", e),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          e || !1 === t
                            ? ""
                            : jt.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (t) {
            var e,
              n,
              i = 0;
            for (e = " " + t + " "; (n = this[i++]); )
              if (1 === n.nodeType && (" " + Y(J(n)) + " ").indexOf(e) > -1)
                return !0;
            return !1;
          },
        });
      var Se = /\r/g;
      yt.fn.extend({
        val: function (t) {
          var e,
            n,
            i,
            r = this[0];
          return arguments.length
            ? ((i = yt.isFunction(t)),
              this.each(function (n) {
                var r;
                1 === this.nodeType &&
                  ((r = i ? t.call(this, n, yt(this).val()) : t),
                  null == r
                    ? (r = "")
                    : "number" == typeof r
                    ? (r += "")
                    : Array.isArray(r) &&
                      (r = yt.map(r, function (t) {
                        return null == t ? "" : t + "";
                      })),
                  ((e =
                    yt.valHooks[this.type] ||
                    yt.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in e &&
                    void 0 !== e.set(this, r, "value")) ||
                    (this.value = r));
              }))
            : r
            ? (e =
                yt.valHooks[r.type] || yt.valHooks[r.nodeName.toLowerCase()]) &&
              "get" in e &&
              void 0 !== (n = e.get(r, "value"))
              ? n
              : ((n = r.value),
                "string" == typeof n ? n.replace(Se, "") : null == n ? "" : n)
            : void 0;
        },
      }),
        yt.extend({
          valHooks: {
            option: {
              get: function (t) {
                var e = yt.find.attr(t, "value");
                return null != e ? e : Y(yt.text(t));
              },
            },
            select: {
              get: function (t) {
                var e,
                  n,
                  i,
                  r = t.options,
                  o = t.selectedIndex,
                  s = "select-one" === t.type,
                  a = s ? null : [],
                  c = s ? o + 1 : r.length;
                for (i = o < 0 ? c : s ? o : 0; i < c; i++)
                  if (
                    ((n = r[i]),
                    (n.selected || i === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !l(n.parentNode, "optgroup")))
                  ) {
                    if (((e = yt(n).val()), s)) return e;
                    a.push(e);
                  }
                return a;
              },
              set: function (t, e) {
                for (
                  var n, i, r = t.options, o = yt.makeArray(e), s = r.length;
                  s--;

                )
                  (i = r[s]),
                    (i.selected =
                      yt.inArray(yt.valHooks.option.get(i), o) > -1) &&
                      (n = !0);
                return n || (t.selectedIndex = -1), o;
              },
            },
          },
        }),
        yt.each(["radio", "checkbox"], function () {
          (yt.valHooks[this] = {
            set: function (t, e) {
              if (Array.isArray(e))
                return (t.checked = yt.inArray(yt(t).val(), e) > -1);
            },
          }),
            vt.checkOn ||
              (yt.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value;
              });
        });
      var xe = /^(?:focusinfocus|focusoutblur)$/;
      yt.extend(yt.event, {
        trigger: function (t, e, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u,
            h,
            d = [i || st],
            f = pt.call(t, "type") ? t.type : t,
            p = pt.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
            ((s = a = i = i || st),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !xe.test(f + yt.event.triggered) &&
              (f.indexOf(".") > -1 &&
                ((p = f.split(".")), (f = p.shift()), p.sort()),
              (c = f.indexOf(":") < 0 && "on" + f),
              (t = t[yt.expando]
                ? t
                : new yt.Event(f, "object" == typeof t && t)),
              (t.isTrigger = r ? 2 : 3),
              (t.namespace = p.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = i),
              (e = null == e ? [t] : yt.makeArray(e, [t])),
              (h = yt.event.special[f] || {}),
              r || !h.trigger || !1 !== h.trigger.apply(i, e)))
          ) {
            if (!r && !h.noBubble && !yt.isWindow(i)) {
              for (
                l = h.delegateType || f, xe.test(l + f) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                d.push(s), (a = s);
              a === (i.ownerDocument || st) &&
                d.push(a.defaultView || a.parentWindow || n);
            }
            for (o = 0; (s = d[o++]) && !t.isPropagationStopped(); )
              (t.type = o > 1 ? l : h.bindType || f),
                (u =
                  (jt.get(s, "events") || {})[t.type] && jt.get(s, "handle")),
                u && u.apply(s, e),
                (u = c && s[c]) &&
                  u.apply &&
                  Rt(s) &&
                  ((t.result = u.apply(s, e)),
                  !1 === t.result && t.preventDefault());
            return (
              (t.type = f),
              r ||
                t.isDefaultPrevented() ||
                (h._default && !1 !== h._default.apply(d.pop(), e)) ||
                !Rt(i) ||
                (c &&
                  yt.isFunction(i[f]) &&
                  !yt.isWindow(i) &&
                  ((a = i[c]),
                  a && (i[c] = null),
                  (yt.event.triggered = f),
                  i[f](),
                  (yt.event.triggered = void 0),
                  a && (i[c] = a))),
              t.result
            );
          }
        },
        simulate: function (t, e, n) {
          var i = yt.extend(new yt.Event(), n, { type: t, isSimulated: !0 });
          yt.event.trigger(i, null, e);
        },
      }),
        yt.fn.extend({
          trigger: function (t, e) {
            return this.each(function () {
              yt.event.trigger(t, e, this);
            });
          },
          triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return yt.event.trigger(t, e, n, !0);
          },
        }),
        yt.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (t, e) {
            yt.fn[e] = function (t, n) {
              return arguments.length > 0
                ? this.on(e, null, t, n)
                : this.trigger(e);
            };
          }
        ),
        yt.fn.extend({
          hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t);
          },
        }),
        (vt.focusin = "onfocusin" in n),
        vt.focusin ||
          yt.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            var n = function (t) {
              yt.event.simulate(e, t.target, yt.event.fix(t));
            };
            yt.event.special[e] = {
              setup: function () {
                var i = this.ownerDocument || this,
                  r = jt.access(i, e);
                r || i.addEventListener(t, n, !0),
                  jt.access(i, e, (r || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this,
                  r = jt.access(i, e) - 1;
                r
                  ? jt.access(i, e, r)
                  : (i.removeEventListener(t, n, !0), jt.remove(i, e));
              },
            };
          });
      var De = n.location,
        Ae = yt.now(),
        Ie = /\?/;
      yt.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
          e = new n.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
          e = void 0;
        }
        return (
          (e && !e.getElementsByTagName("parsererror").length) ||
            yt.error("Invalid XML: " + t),
          e
        );
      };
      var Oe = /\[\]$/,
        Ne = /\r?\n/g,
        Le = /^(?:submit|button|image|reset|file)$/i,
        Pe = /^(?:input|select|textarea|keygen)/i;
      (yt.param = function (t, e) {
        var n,
          i = [],
          r = function (t, e) {
            var n = yt.isFunction(e) ? e() : e;
            i[i.length] =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (Array.isArray(t) || (t.jquery && !yt.isPlainObject(t)))
          yt.each(t, function () {
            r(this.name, this.value);
          });
        else for (n in t) Z(n, t[n], e, r);
        return i.join("&");
      }),
        yt.fn.extend({
          serialize: function () {
            return yt.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var t = yt.prop(this, "elements");
              return t ? yt.makeArray(t) : this;
            })
              .filter(function () {
                var t = this.type;
                return (
                  this.name &&
                  !yt(this).is(":disabled") &&
                  Pe.test(this.nodeName) &&
                  !Le.test(t) &&
                  (this.checked || !$t.test(t))
                );
              })
              .map(function (t, e) {
                var n = yt(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? yt.map(n, function (t) {
                      return { name: e.name, value: t.replace(Ne, "\r\n") };
                    })
                  : { name: e.name, value: n.replace(Ne, "\r\n") };
              })
              .get();
          },
        });
      var ke = /%20/g,
        He = /#.*$/,
        Me = /([?&])_=[^&]*/,
        Re = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        je = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        We = /^(?:GET|HEAD)$/,
        Fe = /^\/\//,
        Be = {},
        Ue = {},
        ze = "*/".concat("*"),
        qe = st.createElement("a");
      (qe.href = De.href),
        yt.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: De.href,
            type: "GET",
            isLocal: je.test(De.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": ze,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": yt.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (t, e) {
            return e ? nt(nt(t, yt.ajaxSettings), e) : nt(yt.ajaxSettings, t);
          },
          ajaxPrefilter: tt(Be),
          ajaxTransport: tt(Ue),
          ajax: function (t, e) {
            function i(t, e, i, a) {
              var c,
                d,
                f,
                _,
                E,
                T = e;
              u ||
                ((u = !0),
                l && n.clearTimeout(l),
                (r = void 0),
                (s = a || ""),
                (w.readyState = t > 0 ? 4 : 0),
                (c = (t >= 200 && t < 300) || 304 === t),
                i && (_ = it(p, w, i)),
                (_ = rt(p, _, w, c)),
                c
                  ? (p.ifModified &&
                      ((E = w.getResponseHeader("Last-Modified")),
                      E && (yt.lastModified[o] = E),
                      (E = w.getResponseHeader("etag")) && (yt.etag[o] = E)),
                    204 === t || "HEAD" === p.type
                      ? (T = "nocontent")
                      : 304 === t
                      ? (T = "notmodified")
                      : ((T = _.state), (d = _.data), (f = _.error), (c = !f)))
                  : ((f = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
                (w.status = t),
                (w.statusText = (e || T) + ""),
                c ? v.resolveWith(g, [d, T, w]) : v.rejectWith(g, [w, T, f]),
                w.statusCode(b),
                (b = void 0),
                h &&
                  m.trigger(c ? "ajaxSuccess" : "ajaxError", [w, p, c ? d : f]),
                y.fireWith(g, [w, T]),
                h &&
                  (m.trigger("ajaxComplete", [w, p]),
                  --yt.active || yt.event.trigger("ajaxStop")));
            }
            "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
            var r,
              o,
              s,
              a,
              l,
              c,
              u,
              h,
              d,
              f,
              p = yt.ajaxSetup({}, e),
              g = p.context || p,
              m = p.context && (g.nodeType || g.jquery) ? yt(g) : yt.event,
              v = yt.Deferred(),
              y = yt.Callbacks("once memory"),
              b = p.statusCode || {},
              _ = {},
              E = {},
              T = "canceled",
              w = {
                readyState: 0,
                getResponseHeader: function (t) {
                  var e;
                  if (u) {
                    if (!a)
                      for (a = {}; (e = Re.exec(s)); )
                        a[e[1].toLowerCase()] = e[2];
                    e = a[t.toLowerCase()];
                  }
                  return null == e ? null : e;
                },
                getAllResponseHeaders: function () {
                  return u ? s : null;
                },
                setRequestHeader: function (t, e) {
                  return (
                    null == u &&
                      ((t = E[t.toLowerCase()] = E[t.toLowerCase()] || t),
                      (_[t] = e)),
                    this
                  );
                },
                overrideMimeType: function (t) {
                  return null == u && (p.mimeType = t), this;
                },
                statusCode: function (t) {
                  var e;
                  if (t)
                    if (u) w.always(t[w.status]);
                    else for (e in t) b[e] = [b[e], t[e]];
                  return this;
                },
                abort: function (t) {
                  var e = t || T;
                  return r && r.abort(e), i(0, e), this;
                },
              };
            if (
              (v.promise(w),
              (p.url = ((t || p.url || De.href) + "").replace(
                Fe,
                De.protocol + "//"
              )),
              (p.type = e.method || e.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match(Pt) || [
                "",
              ]),
              null == p.crossDomain)
            ) {
              c = st.createElement("a");
              try {
                (c.href = p.url),
                  (c.href = c.href),
                  (p.crossDomain =
                    qe.protocol + "//" + qe.host != c.protocol + "//" + c.host);
              } catch (t) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                "string" != typeof p.data &&
                (p.data = yt.param(p.data, p.traditional)),
              et(Be, p, e, w),
              u)
            )
              return w;
            (h = yt.event && p.global),
              h && 0 == yt.active++ && yt.event.trigger("ajaxStart"),
              (p.type = p.type.toUpperCase()),
              (p.hasContent = !We.test(p.type)),
              (o = p.url.replace(He, "")),
              p.hasContent
                ? p.data &&
                  p.processData &&
                  0 ===
                    (p.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (p.data = p.data.replace(ke, "+"))
                : ((f = p.url.slice(o.length)),
                  p.data &&
                    ((o += (Ie.test(o) ? "&" : "?") + p.data), delete p.data),
                  !1 === p.cache &&
                    ((o = o.replace(Me, "$1")),
                    (f = (Ie.test(o) ? "&" : "?") + "_=" + Ae++ + f)),
                  (p.url = o + f)),
              p.ifModified &&
                (yt.lastModified[o] &&
                  w.setRequestHeader("If-Modified-Since", yt.lastModified[o]),
                yt.etag[o] && w.setRequestHeader("If-None-Match", yt.etag[o])),
              ((p.data && p.hasContent && !1 !== p.contentType) ||
                e.contentType) &&
                w.setRequestHeader("Content-Type", p.contentType),
              w.setRequestHeader(
                "Accept",
                p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                  ? p.accepts[p.dataTypes[0]] +
                      ("*" !== p.dataTypes[0] ? ", " + ze + "; q=0.01" : "")
                  : p.accepts["*"]
              );
            for (d in p.headers) w.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, w, p) || u))
              return w.abort();
            if (
              ((T = "abort"),
              y.add(p.complete),
              w.done(p.success),
              w.fail(p.error),
              (r = et(Ue, p, e, w)))
            ) {
              if (((w.readyState = 1), h && m.trigger("ajaxSend", [w, p]), u))
                return w;
              p.async &&
                p.timeout > 0 &&
                (l = n.setTimeout(function () {
                  w.abort("timeout");
                }, p.timeout));
              try {
                (u = !1), r.send(_, i);
              } catch (t) {
                if (u) throw t;
                i(-1, t);
              }
            } else i(-1, "No Transport");
            return w;
          },
          getJSON: function (t, e, n) {
            return yt.get(t, e, n, "json");
          },
          getScript: function (t, e) {
            return yt.get(t, void 0, e, "script");
          },
        }),
        yt.each(["get", "post"], function (t, e) {
          yt[e] = function (t, n, i, r) {
            return (
              yt.isFunction(n) && ((r = r || i), (i = n), (n = void 0)),
              yt.ajax(
                yt.extend(
                  { url: t, type: e, dataType: r, data: n, success: i },
                  yt.isPlainObject(t) && t
                )
              )
            );
          };
        }),
        (yt._evalUrl = function (t) {
          return yt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0,
          });
        }),
        yt.fn.extend({
          wrapAll: function (t) {
            var e;
            return (
              this[0] &&
                (yt.isFunction(t) && (t = t.call(this[0])),
                (e = yt(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (t) {
            return yt.isFunction(t)
              ? this.each(function (e) {
                  yt(this).wrapInner(t.call(this, e));
                })
              : this.each(function () {
                  var e = yt(this),
                    n = e.contents();
                  n.length ? n.wrapAll(t) : e.append(t);
                });
          },
          wrap: function (t) {
            var e = yt.isFunction(t);
            return this.each(function (n) {
              yt(this).wrapAll(e ? t.call(this, n) : t);
            });
          },
          unwrap: function (t) {
            return (
              this.parent(t)
                .not("body")
                .each(function () {
                  yt(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (yt.expr.pseudos.hidden = function (t) {
          return !yt.expr.pseudos.visible(t);
        }),
        (yt.expr.pseudos.visible = function (t) {
          return !!(
            t.offsetWidth ||
            t.offsetHeight ||
            t.getClientRects().length
          );
        }),
        (yt.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (t) {}
        });
      var Ve = { 0: 200, 1223: 204 },
        Ge = yt.ajaxSettings.xhr();
      (vt.cors = !!Ge && "withCredentials" in Ge),
        (vt.ajax = Ge = !!Ge),
        yt.ajaxTransport(function (t) {
          var e, i;
          if (vt.cors || (Ge && !t.crossDomain))
            return {
              send: function (r, o) {
                var s,
                  a = t.xhr();
                if (
                  (a.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(t.mimeType),
                  t.crossDomain ||
                    r["X-Requested-With"] ||
                    (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                (e = function (t) {
                  return function () {
                    e &&
                      ((e =
                        i =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.onreadystatechange =
                          null),
                      "abort" === t
                        ? a.abort()
                        : "error" === t
                        ? "number" != typeof a.status
                          ? o(0, "error")
                          : o(a.status, a.statusText)
                        : o(
                            Ve[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = e()),
                  (i = a.onerror = e("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = i)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          n.setTimeout(function () {
                            e && i();
                          });
                      }),
                  (e = e("abort"));
                try {
                  a.send((t.hasContent && t.data) || null);
                } catch (t) {
                  if (e) throw t;
                }
              },
              abort: function () {
                e && e();
              },
            };
        }),
        yt.ajaxPrefilter(function (t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        yt.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (t) {
              return yt.globalEval(t), t;
            },
          },
        }),
        yt.ajaxPrefilter("script", function (t) {
          void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET");
        }),
        yt.ajaxTransport("script", function (t) {
          if (t.crossDomain) {
            var e, n;
            return {
              send: function (i, r) {
                (e = yt("<script>")
                  .prop({ charset: t.scriptCharset, src: t.url })
                  .on(
                    "load error",
                    (n = function (t) {
                      e.remove(),
                        (n = null),
                        t && r("error" === t.type ? 404 : 200, t.type);
                    })
                  )),
                  st.head.appendChild(e[0]);
              },
              abort: function () {
                n && n();
              },
            };
          }
        });
      var Ke = [],
        $e = /(=)\?(?=&|$)|\?\?/;
      yt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var t = Ke.pop() || yt.expando + "_" + Ae++;
          return (this[t] = !0), t;
        },
      }),
        yt.ajaxPrefilter("json jsonp", function (t, e, i) {
          var r,
            o,
            s,
            a =
              !1 !== t.jsonp &&
              ($e.test(t.url)
                ? "url"
                : "string" == typeof t.data &&
                  0 ===
                    (t.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  $e.test(t.data) &&
                  "data");
          if (a || "jsonp" === t.dataTypes[0])
            return (
              (r = t.jsonpCallback =
                yt.isFunction(t.jsonpCallback)
                  ? t.jsonpCallback()
                  : t.jsonpCallback),
              a
                ? (t[a] = t[a].replace($e, "$1" + r))
                : !1 !== t.jsonp &&
                  (t.url += (Ie.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
              (t.converters["script json"] = function () {
                return s || yt.error(r + " was not called"), s[0];
              }),
              (t.dataTypes[0] = "json"),
              (o = n[r]),
              (n[r] = function () {
                s = arguments;
              }),
              i.always(function () {
                void 0 === o ? yt(n).removeProp(r) : (n[r] = o),
                  t[r] && ((t.jsonpCallback = e.jsonpCallback), Ke.push(r)),
                  s && yt.isFunction(o) && o(s[0]),
                  (s = o = void 0);
              }),
              "script"
            );
        }),
        (vt.createHTMLDocument = (function () {
          var t = st.implementation.createHTMLDocument("").body;
          return (
            (t.innerHTML = "<form></form><form></form>"),
            2 === t.childNodes.length
          );
        })()),
        (yt.parseHTML = function (t, e, n) {
          if ("string" != typeof t) return [];
          "boolean" == typeof e && ((n = e), (e = !1));
          var i, r, o;
          return (
            e ||
              (vt.createHTMLDocument
                ? ((e = st.implementation.createHTMLDocument("")),
                  (i = e.createElement("base")),
                  (i.href = st.location.href),
                  e.head.appendChild(i))
                : (e = st)),
            (r = Dt.exec(t)),
            (o = !n && []),
            r
              ? [e.createElement(r[1])]
              : ((r = C([t], e, o)),
                o && o.length && yt(o).remove(),
                yt.merge([], r.childNodes))
          );
        }),
        (yt.fn.load = function (t, e, n) {
          var i,
            r,
            o,
            s = this,
            a = t.indexOf(" ");
          return (
            a > -1 && ((i = Y(t.slice(a))), (t = t.slice(0, a))),
            yt.isFunction(e)
              ? ((n = e), (e = void 0))
              : e && "object" == typeof e && (r = "POST"),
            s.length > 0 &&
              yt
                .ajax({ url: t, type: r || "GET", dataType: "html", data: e })
                .done(function (t) {
                  (o = arguments),
                    s.html(i ? yt("<div>").append(yt.parseHTML(t)).find(i) : t);
                })
                .always(
                  n &&
                    function (t, e) {
                      s.each(function () {
                        n.apply(this, o || [t.responseText, e, t]);
                      });
                    }
                ),
            this
          );
        }),
        yt.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (t, e) {
            yt.fn[e] = function (t) {
              return this.on(e, t);
            };
          }
        ),
        (yt.expr.pseudos.animated = function (t) {
          return yt.grep(yt.timers, function (e) {
            return t === e.elem;
          }).length;
        }),
        (yt.offset = {
          setOffset: function (t, e, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              c,
              u = yt.css(t, "position"),
              h = yt(t),
              d = {};
            "static" === u && (t.style.position = "relative"),
              (a = h.offset()),
              (o = yt.css(t, "top")),
              (l = yt.css(t, "left")),
              (c =
                ("absolute" === u || "fixed" === u) &&
                (o + l).indexOf("auto") > -1),
              c
                ? ((i = h.position()), (s = i.top), (r = i.left))
                : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
              yt.isFunction(e) && (e = e.call(t, n, yt.extend({}, a))),
              null != e.top && (d.top = e.top - a.top + s),
              null != e.left && (d.left = e.left - a.left + r),
              "using" in e ? e.using.call(t, d) : h.css(d);
          },
        }),
        yt.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function (e) {
                    yt.offset.setOffset(this, t, e);
                  });
            var e,
              n,
              i,
              r,
              o = this[0];
            return o
              ? o.getClientRects().length
                ? ((i = o.getBoundingClientRect()),
                  (e = o.ownerDocument),
                  (n = e.documentElement),
                  (r = e.defaultView),
                  {
                    top: i.top + r.pageYOffset - n.clientTop,
                    left: i.left + r.pageXOffset - n.clientLeft,
                  })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var t,
                e,
                n = this[0],
                i = { top: 0, left: 0 };
              return (
                "fixed" === yt.css(n, "position")
                  ? (e = n.getBoundingClientRect())
                  : ((t = this.offsetParent()),
                    (e = this.offset()),
                    l(t[0], "html") || (i = t.offset()),
                    (i = {
                      top: i.top + yt.css(t[0], "borderTopWidth", !0),
                      left: i.left + yt.css(t[0], "borderLeftWidth", !0),
                    })),
                {
                  top: e.top - i.top - yt.css(n, "marginTop", !0),
                  left: e.left - i.left - yt.css(n, "marginLeft", !0),
                }
              );
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var t = this.offsetParent;
                t && "static" === yt.css(t, "position");

              )
                t = t.offsetParent;
              return t || Zt;
            });
          },
        }),
        yt.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (t, e) {
            var n = "pageYOffset" === e;
            yt.fn[t] = function (i) {
              return Mt(
                this,
                function (t, i, r) {
                  var o;
                  if (
                    (yt.isWindow(t)
                      ? (o = t)
                      : 9 === t.nodeType && (o = t.defaultView),
                    void 0 === r)
                  )
                    return o ? o[e] : t[i];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                    : (t[i] = r);
                },
                t,
                i,
                arguments.length
              );
            };
          }
        ),
        yt.each(["top", "left"], function (t, e) {
          yt.cssHooks[e] = R(vt.pixelPosition, function (t, n) {
            if (n)
              return (n = M(t, e)), ce.test(n) ? yt(t).position()[e] + "px" : n;
          });
        }),
        yt.each({ Height: "height", Width: "width" }, function (t, e) {
          yt.each(
            { padding: "inner" + t, content: e, "": "outer" + t },
            function (n, i) {
              yt.fn[i] = function (r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                  a = n || (!0 === r || !0 === o ? "margin" : "border");
                return Mt(
                  this,
                  function (e, n, r) {
                    var o;
                    return yt.isWindow(e)
                      ? 0 === i.indexOf("outer")
                        ? e["inner" + t]
                        : e.document.documentElement["client" + t]
                      : 9 === e.nodeType
                      ? ((o = e.documentElement),
                        Math.max(
                          e.body["scroll" + t],
                          o["scroll" + t],
                          e.body["offset" + t],
                          o["offset" + t],
                          o["client" + t]
                        ))
                      : void 0 === r
                      ? yt.css(e, n, a)
                      : yt.style(e, n, r, a);
                  },
                  e,
                  s ? r : void 0,
                  s
                );
              };
            }
          );
        }),
        yt.fn.extend({
          bind: function (t, e, n) {
            return this.on(t, null, e, n);
          },
          unbind: function (t, e) {
            return this.off(t, null, e);
          },
          delegate: function (t, e, n, i) {
            return this.on(e, t, n, i);
          },
          undelegate: function (t, e, n) {
            return 1 === arguments.length
              ? this.off(t, "**")
              : this.off(e, t || "**", n);
          },
        }),
        (yt.holdReady = function (t) {
          t ? yt.readyWait++ : yt.ready(!0);
        }),
        (yt.isArray = Array.isArray),
        (yt.parseJSON = JSON.parse),
        (yt.nodeName = l),
        (i = []),
        void 0 !==
          (r = function () {
            return yt;
          }.apply(e, i)) && (t.exports = r);
      var Qe = n.jQuery,
        Xe = n.$;
      return (
        (yt.noConflict = function (t) {
          return (
            n.$ === yt && (n.$ = Xe),
            t && n.jQuery === yt && (n.jQuery = Qe),
            yt
          );
        }),
        o || (n.jQuery = n.$ = yt),
        yt
      );
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (o, s) {
      (i = s),
        void 0 !== (r = "function" == typeof i ? i.call(e, n, e, t) : i) &&
          (t.exports = r);
    })("undefined" != typeof window && window, function () {
      "use strict";
      function t() {}
      var e = t.prototype;
      return (
        (e.on = function (t, e) {
          if (t && e) {
            var n = (this._events = this._events || {}),
              i = (n[t] = n[t] || []);
            return -1 == i.indexOf(e) && i.push(e), this;
          }
        }),
        (e.once = function (t, e) {
          if (t && e) {
            this.on(t, e);
            var n = (this._onceEvents = this._onceEvents || {});
            return ((n[t] = n[t] || {})[e] = !0), this;
          }
        }),
        (e.off = function (t, e) {
          var n = this._events && this._events[t];
          if (n && n.length) {
            var i = n.indexOf(e);
            return -1 != i && n.splice(i, 1), this;
          }
        }),
        (e.emitEvent = function (t, e) {
          var n = this._events && this._events[t];
          if (n && n.length) {
            (n = n.slice(0)), (e = e || []);
            for (
              var i = this._onceEvents && this._onceEvents[t], r = 0;
              r < n.length;
              r++
            ) {
              var o = n[r];
              i && i[o] && (this.off(t, o), delete i[o]), o.apply(this, e);
            }
            return this;
          }
        }),
        (e.allOff = function () {
          delete this._events, delete this._onceEvents;
        }),
        t
      );
    });
  },
  function (t, e, n) {
    var i;
    !(function (r, o) {
      "use strict";
      void 0 !==
        (i = function () {
          return o();
        }.call(e, n, e, t)) && (t.exports = i);
    })(window, function () {
      "use strict";
      function t(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e;
      }
      function e() {}
      function n() {
        for (
          var t = {
              width: 0,
              height: 0,
              innerWidth: 0,
              innerHeight: 0,
              outerWidth: 0,
              outerHeight: 0,
            },
            e = 0;
          e < c;
          e++
        )
          t[l[e]] = 0;
        return t;
      }
      function i(t) {
        var e = getComputedStyle(t);
        return (
          e ||
            a(
              "Style returned " +
                e +
                ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
            ),
          e
        );
      }
      function r() {
        if (!u) {
          u = !0;
          var e = document.createElement("div");
          (e.style.width = "200px"),
            (e.style.padding = "1px 2px 3px 4px"),
            (e.style.borderStyle = "solid"),
            (e.style.borderWidth = "1px 2px 3px 4px"),
            (e.style.boxSizing = "border-box");
          var n = document.body || document.documentElement;
          n.appendChild(e);
          var r = i(e);
          (o.isBoxSizeOuter = s = 200 == t(r.width)), n.removeChild(e);
        }
      }
      function o(e) {
        if (
          (r(),
          "string" == typeof e && (e = document.querySelector(e)),
          e && "object" == typeof e && e.nodeType)
        ) {
          var o = i(e);
          if ("none" == o.display) return n();
          var a = {};
          (a.width = e.offsetWidth), (a.height = e.offsetHeight);
          for (
            var u = (a.isBorderBox = "border-box" == o.boxSizing), h = 0;
            h < c;
            h++
          ) {
            var d = l[h],
              f = o[d],
              p = parseFloat(f);
            a[d] = isNaN(p) ? 0 : p;
          }
          var g = a.paddingLeft + a.paddingRight,
            m = a.paddingTop + a.paddingBottom,
            v = a.marginLeft + a.marginRight,
            y = a.marginTop + a.marginBottom,
            b = a.borderLeftWidth + a.borderRightWidth,
            _ = a.borderTopWidth + a.borderBottomWidth,
            E = u && s,
            T = t(o.width);
          !1 !== T && (a.width = T + (E ? 0 : g + b));
          var w = t(o.height);
          return (
            !1 !== w && (a.height = w + (E ? 0 : m + _)),
            (a.innerWidth = a.width - (g + b)),
            (a.innerHeight = a.height - (m + _)),
            (a.outerWidth = a.width + v),
            (a.outerHeight = a.height + y),
            a
          );
        }
      }
      var s,
        a =
          "undefined" == typeof console
            ? e
            : function (t) {
                console.error(t);
              },
        l = [
          "paddingLeft",
          "paddingRight",
          "paddingTop",
          "paddingBottom",
          "marginLeft",
          "marginRight",
          "marginTop",
          "marginBottom",
          "borderLeftWidth",
          "borderRightWidth",
          "borderTopWidth",
          "borderBottomWidth",
        ],
        c = l.length,
        u = !1;
      return o;
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (o, s) {
      (i = [n(3)]),
        void 0 !==
          (r = function (t) {
            return s(o, t);
          }.apply(e, i)) && (t.exports = r);
    })(window, function (t, e) {
      "use strict";
      function n() {}
      function i() {}
      var r = (i.prototype = Object.create(e.prototype));
      (r.bindStartEvent = function (t) {
        this._bindStartEvent(t, !0);
      }),
        (r.unbindStartEvent = function (t) {
          this._bindStartEvent(t, !1);
        }),
        (r._bindStartEvent = function (e, n) {
          n = void 0 === n || !!n;
          var i = n ? "addEventListener" : "removeEventListener";
          t.PointerEvent
            ? e[i]("pointerdown", this)
            : (e[i]("mousedown", this), e[i]("touchstart", this));
        }),
        (r.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (r.getTouch = function (t) {
          for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (n.identifier == this.pointerIdentifier) return n;
          }
        }),
        (r.onmousedown = function (t) {
          var e = t.button;
          (e && 0 !== e && 1 !== e) || this._pointerDown(t, t);
        }),
        (r.ontouchstart = function (t) {
          this._pointerDown(t, t.changedTouches[0]);
        }),
        (r.onpointerdown = function (t) {
          this._pointerDown(t, t);
        }),
        (r._pointerDown = function (t, e) {
          t.button ||
            this.isPointerDown ||
            ((this.isPointerDown = !0),
            (this.pointerIdentifier =
              void 0 !== e.pointerId ? e.pointerId : e.identifier),
            this.pointerDown(t, e));
        }),
        (r.pointerDown = function (t, e) {
          this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
        });
      var o = {
        mousedown: ["mousemove", "mouseup"],
        touchstart: ["touchmove", "touchend", "touchcancel"],
        pointerdown: ["pointermove", "pointerup", "pointercancel"],
      };
      return (
        (r._bindPostStartEvents = function (e) {
          if (e) {
            var n = o[e.type];
            n.forEach(function (e) {
              t.addEventListener(e, this);
            }, this),
              (this._boundPointerEvents = n);
          }
        }),
        (r._unbindPostStartEvents = function () {
          this._boundPointerEvents &&
            (this._boundPointerEvents.forEach(function (e) {
              t.removeEventListener(e, this);
            }, this),
            delete this._boundPointerEvents);
        }),
        (r.onmousemove = function (t) {
          this._pointerMove(t, t);
        }),
        (r.onpointermove = function (t) {
          t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
        }),
        (r.ontouchmove = function (t) {
          var e = this.getTouch(t.changedTouches);
          e && this._pointerMove(t, e);
        }),
        (r._pointerMove = function (t, e) {
          this.pointerMove(t, e);
        }),
        (r.pointerMove = function (t, e) {
          this.emitEvent("pointerMove", [t, e]);
        }),
        (r.onmouseup = function (t) {
          this._pointerUp(t, t);
        }),
        (r.onpointerup = function (t) {
          t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
        }),
        (r.ontouchend = function (t) {
          var e = this.getTouch(t.changedTouches);
          e && this._pointerUp(t, e);
        }),
        (r._pointerUp = function (t, e) {
          this._pointerDone(), this.pointerUp(t, e);
        }),
        (r.pointerUp = function (t, e) {
          this.emitEvent("pointerUp", [t, e]);
        }),
        (r._pointerDone = function () {
          (this.isPointerDown = !1),
            delete this.pointerIdentifier,
            this._unbindPostStartEvents(),
            this.pointerDone();
        }),
        (r.pointerDone = n),
        (r.onpointercancel = function (t) {
          t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
        }),
        (r.ontouchcancel = function (t) {
          var e = this.getTouch(t.changedTouches);
          e && this._pointerCancel(t, e);
        }),
        (r._pointerCancel = function (t, e) {
          this._pointerDone(), this.pointerCancel(t, e);
        }),
        (r.pointerCancel = function (t, e) {
          this.emitEvent("pointerCancel", [t, e]);
        }),
        (i.getPointerPoint = function (t) {
          return { x: t.pageX, y: t.pageY };
        }),
        i
      );
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (o, s) {
      (i = [n(5)]),
        void 0 !==
          (r = function (t) {
            return s(o, t);
          }.apply(e, i)) && (t.exports = r);
    })(window, function (t, e) {
      "use strict";
      function n(t) {
        this.bindTap(t);
      }
      var i = (n.prototype = Object.create(e.prototype));
      return (
        (i.bindTap = function (t) {
          t &&
            (this.unbindTap(),
            (this.tapElement = t),
            this._bindStartEvent(t, !0));
        }),
        (i.unbindTap = function () {
          this.tapElement &&
            (this._bindStartEvent(this.tapElement, !0), delete this.tapElement);
        }),
        (i.pointerUp = function (n, i) {
          if (!this.isIgnoringMouseUp || "mouseup" != n.type) {
            var r = e.getPointerPoint(i),
              o = this.tapElement.getBoundingClientRect(),
              s = t.pageXOffset,
              a = t.pageYOffset;
            if (
              (r.x >= o.left + s &&
                r.x <= o.right + s &&
                r.y >= o.top + a &&
                r.y <= o.bottom + a &&
                this.emitEvent("tap", [n, i]),
              "mouseup" != n.type)
            ) {
              this.isIgnoringMouseUp = !0;
              var l = this;
              setTimeout(function () {
                delete l.isIgnoringMouseUp;
              }, 400);
            }
          }
        }),
        (i.destroy = function () {
          this.pointerDone(), this.unbindTap();
        }),
        n
      );
    });
  },
  function (t, e, n) {
    "use strict";
    n(8);
    var i = n(2),
      r = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(i);
    n(9), n(13), n(15), n(28), n(30), (window.$ = r.default);
  },
  function (t, e) {},
  function (t, e, n) {
    "use strict";
    (function (t) {
      n(10),
        t('[data-toggle="popover"]').popover(),
        t('[data-toggle="tooltip"]').tooltip();
    }).call(e, n(2));
  },
  function (t, e, n) {
    !(function (t, i) {
      !(function (t, e, n) {
        "use strict";
        function i(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function r(t, e, n) {
          return e && i(t.prototype, e), n && i(t, n), t;
        }
        function o(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function s(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols &&
              (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
              )),
              i.forEach(function (e) {
                o(t, e, n[e]);
              });
          }
          return t;
        }
        function a(t, e) {
          (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e);
        }
        (e = e && e.hasOwnProperty("default") ? e.default : e),
          (n = n && n.hasOwnProperty("default") ? n.default : n);
        var l = (function (t) {
            function e(t) {
              return {}.toString
                .call(t)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase();
            }
            function n() {
              return {
                bindType: r,
                delegateType: r,
                handle: function (e) {
                  if (t(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments);
                },
              };
            }
            function i(e) {
              var n = this,
                i = !1;
              return (
                t(this).one(o.TRANSITION_END, function () {
                  i = !0;
                }),
                setTimeout(function () {
                  i || o.triggerTransitionEnd(n);
                }, e),
                this
              );
            }
            var r = "transitionend",
              o = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function (t) {
                  do {
                    t += ~~(1e6 * Math.random());
                  } while (document.getElementById(t));
                  return t;
                },
                getSelectorFromElement: function (e) {
                  var n = e.getAttribute("data-target");
                  (n && "#" !== n) || (n = e.getAttribute("href") || "");
                  try {
                    return t(document).find(n).length > 0 ? n : null;
                  } catch (t) {
                    return null;
                  }
                },
                getTransitionDurationFromElement: function (e) {
                  if (!e) return 0;
                  var n = t(e).css("transition-duration");
                  return parseFloat(n)
                    ? ((n = n.split(",")[0]), 1e3 * parseFloat(n))
                    : 0;
                },
                reflow: function (t) {
                  return t.offsetHeight;
                },
                triggerTransitionEnd: function (e) {
                  t(e).trigger(r);
                },
                supportsTransitionEnd: function () {
                  return Boolean(r);
                },
                isElement: function (t) {
                  return (t[0] || t).nodeType;
                },
                typeCheckConfig: function (t, n, i) {
                  for (var r in i)
                    if (Object.prototype.hasOwnProperty.call(i, r)) {
                      var s = i[r],
                        a = n[r],
                        l = a && o.isElement(a) ? "element" : e(a);
                      if (!new RegExp(s).test(l))
                        throw new Error(
                          t.toUpperCase() +
                            ': Option "' +
                            r +
                            '" provided type "' +
                            l +
                            '" but expected type "' +
                            s +
                            '".'
                        );
                    }
                },
              };
            return (
              (function () {
                (t.fn.emulateTransitionEnd = i),
                  (t.event.special[o.TRANSITION_END] = n());
              })(),
              o
            );
          })(e),
          c = (function (t) {
            var e = "alert",
              n = t.fn[e],
              i = { DISMISS: '[data-dismiss="alert"]' },
              o = {
                CLOSE: "close.bs.alert",
                CLOSED: "closed.bs.alert",
                CLICK_DATA_API: "click.bs.alert.data-api",
              },
              s = { ALERT: "alert", FADE: "fade", SHOW: "show" },
              a = (function () {
                function e(t) {
                  this._element = t;
                }
                var n = e.prototype;
                return (
                  (n.close = function (t) {
                    var e = this._element;
                    t && (e = this._getRootElement(t)),
                      this._triggerCloseEvent(e).isDefaultPrevented() ||
                        this._removeElement(e);
                  }),
                  (n.dispose = function () {
                    t.removeData(this._element, "bs.alert"),
                      (this._element = null);
                  }),
                  (n._getRootElement = function (e) {
                    var n = l.getSelectorFromElement(e),
                      i = !1;
                    return (
                      n && (i = t(n)[0]),
                      i || (i = t(e).closest("." + s.ALERT)[0]),
                      i
                    );
                  }),
                  (n._triggerCloseEvent = function (e) {
                    var n = t.Event(o.CLOSE);
                    return t(e).trigger(n), n;
                  }),
                  (n._removeElement = function (e) {
                    var n = this;
                    if ((t(e).removeClass(s.SHOW), !t(e).hasClass(s.FADE)))
                      return void this._destroyElement(e);
                    var i = l.getTransitionDurationFromElement(e);
                    t(e)
                      .one(l.TRANSITION_END, function (t) {
                        return n._destroyElement(e, t);
                      })
                      .emulateTransitionEnd(i);
                  }),
                  (n._destroyElement = function (e) {
                    t(e).detach().trigger(o.CLOSED).remove();
                  }),
                  (e._jQueryInterface = function (n) {
                    return this.each(function () {
                      var i = t(this),
                        r = i.data("bs.alert");
                      r || ((r = new e(this)), i.data("bs.alert", r)),
                        "close" === n && r[n](this);
                    });
                  }),
                  (e._handleDismiss = function (t) {
                    return function (e) {
                      e && e.preventDefault(), t.close(this);
                    };
                  }),
                  r(e, null, [
                    {
                      key: "VERSION",
                      get: function () {
                        return "4.1.1";
                      },
                    },
                  ]),
                  e
                );
              })();
            return (
              t(document).on(
                o.CLICK_DATA_API,
                i.DISMISS,
                a._handleDismiss(new a())
              ),
              (t.fn[e] = a._jQueryInterface),
              (t.fn[e].Constructor = a),
              (t.fn[e].noConflict = function () {
                return (t.fn[e] = n), a._jQueryInterface;
              }),
              a
            );
          })(e),
          u = (function (t) {
            var e = "button",
              n = t.fn[e],
              i = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
              o = {
                DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                DATA_TOGGLE: '[data-toggle="buttons"]',
                INPUT: "input",
                ACTIVE: ".active",
                BUTTON: ".btn",
              },
              s = {
                CLICK_DATA_API: "click.bs.button.data-api",
                FOCUS_BLUR_DATA_API:
                  "focus.bs.button.data-api blur.bs.button.data-api",
              },
              a = (function () {
                function e(t) {
                  this._element = t;
                }
                var n = e.prototype;
                return (
                  (n.toggle = function () {
                    var e = !0,
                      n = !0,
                      r = t(this._element).closest(o.DATA_TOGGLE)[0];
                    if (r) {
                      var s = t(this._element).find(o.INPUT)[0];
                      if (s) {
                        if ("radio" === s.type)
                          if (s.checked && t(this._element).hasClass(i.ACTIVE))
                            e = !1;
                          else {
                            var a = t(r).find(o.ACTIVE)[0];
                            a && t(a).removeClass(i.ACTIVE);
                          }
                        if (e) {
                          if (
                            s.hasAttribute("disabled") ||
                            r.hasAttribute("disabled") ||
                            s.classList.contains("disabled") ||
                            r.classList.contains("disabled")
                          )
                            return;
                          (s.checked = !t(this._element).hasClass(i.ACTIVE)),
                            t(s).trigger("change");
                        }
                        s.focus(), (n = !1);
                      }
                    }
                    n &&
                      this._element.setAttribute(
                        "aria-pressed",
                        !t(this._element).hasClass(i.ACTIVE)
                      ),
                      e && t(this._element).toggleClass(i.ACTIVE);
                  }),
                  (n.dispose = function () {
                    t.removeData(this._element, "bs.button"),
                      (this._element = null);
                  }),
                  (e._jQueryInterface = function (n) {
                    return this.each(function () {
                      var i = t(this).data("bs.button");
                      i || ((i = new e(this)), t(this).data("bs.button", i)),
                        "toggle" === n && i[n]();
                    });
                  }),
                  r(e, null, [
                    {
                      key: "VERSION",
                      get: function () {
                        return "4.1.1";
                      },
                    },
                  ]),
                  e
                );
              })();
            return (
              t(document)
                .on(s.CLICK_DATA_API, o.DATA_TOGGLE_CARROT, function (e) {
                  e.preventDefault();
                  var n = e.target;
                  t(n).hasClass(i.BUTTON) || (n = t(n).closest(o.BUTTON)),
                    a._jQueryInterface.call(t(n), "toggle");
                })
                .on(s.FOCUS_BLUR_DATA_API, o.DATA_TOGGLE_CARROT, function (e) {
                  var n = t(e.target).closest(o.BUTTON)[0];
                  t(n).toggleClass(i.FOCUS, /^focus(in)?$/.test(e.type));
                }),
              (t.fn[e] = a._jQueryInterface),
              (t.fn[e].Constructor = a),
              (t.fn[e].noConflict = function () {
                return (t.fn[e] = n), a._jQueryInterface;
              }),
              a
            );
          })(e),
          h = (function (t) {
            var e = "carousel",
              n = "bs.carousel",
              i = "." + n,
              o = t.fn[e],
              a = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
              },
              c = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
              },
              u = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
              h = {
                SLIDE: "slide" + i,
                SLID: "slid" + i,
                KEYDOWN: "keydown" + i,
                MOUSEENTER: "mouseenter" + i,
                MOUSELEAVE: "mouseleave" + i,
                TOUCHEND: "touchend" + i,
                LOAD_DATA_API: "load.bs.carousel.data-api",
                CLICK_DATA_API: "click.bs.carousel.data-api",
              },
              d = {
                CAROUSEL: "carousel",
                ACTIVE: "active",
                SLIDE: "slide",
                RIGHT: "carousel-item-right",
                LEFT: "carousel-item-left",
                NEXT: "carousel-item-next",
                PREV: "carousel-item-prev",
                ITEM: "carousel-item",
              },
              f = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]',
              },
              p = (function () {
                function o(e, n) {
                  (this._items = null),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isPaused = !1),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this._config = this._getConfig(n)),
                    (this._element = t(e)[0]),
                    (this._indicatorsElement = t(this._element).find(
                      f.INDICATORS
                    )[0]),
                    this._addEventListeners();
                }
                var p = o.prototype;
                return (
                  (p.next = function () {
                    this._isSliding || this._slide(u.NEXT);
                  }),
                  (p.nextWhenVisible = function () {
                    !document.hidden &&
                      t(this._element).is(":visible") &&
                      "hidden" !== t(this._element).css("visibility") &&
                      this.next();
                  }),
                  (p.prev = function () {
                    this._isSliding || this._slide(u.PREV);
                  }),
                  (p.pause = function (e) {
                    e || (this._isPaused = !0),
                      t(this._element).find(f.NEXT_PREV)[0] &&
                        (l.triggerTransitionEnd(this._element), this.cycle(!0)),
                      clearInterval(this._interval),
                      (this._interval = null);
                  }),
                  (p.cycle = function (t) {
                    t || (this._isPaused = !1),
                      this._interval &&
                        (clearInterval(this._interval),
                        (this._interval = null)),
                      this._config.interval &&
                        !this._isPaused &&
                        (this._interval = setInterval(
                          (document.visibilityState
                            ? this.nextWhenVisible
                            : this.next
                          ).bind(this),
                          this._config.interval
                        ));
                  }),
                  (p.to = function (e) {
                    var n = this;
                    this._activeElement = t(this._element).find(
                      f.ACTIVE_ITEM
                    )[0];
                    var i = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0)) {
                      if (this._isSliding)
                        return void t(this._element).one(h.SLID, function () {
                          return n.to(e);
                        });
                      if (i === e) return this.pause(), void this.cycle();
                      var r = e > i ? u.NEXT : u.PREV;
                      this._slide(r, this._items[e]);
                    }
                  }),
                  (p.dispose = function () {
                    t(this._element).off(i),
                      t.removeData(this._element, n),
                      (this._items = null),
                      (this._config = null),
                      (this._element = null),
                      (this._interval = null),
                      (this._isPaused = null),
                      (this._isSliding = null),
                      (this._activeElement = null),
                      (this._indicatorsElement = null);
                  }),
                  (p._getConfig = function (t) {
                    return (t = s({}, a, t)), l.typeCheckConfig(e, t, c), t;
                  }),
                  (p._addEventListeners = function () {
                    var e = this;
                    this._config.keyboard &&
                      t(this._element).on(h.KEYDOWN, function (t) {
                        return e._keydown(t);
                      }),
                      "hover" === this._config.pause &&
                        (t(this._element)
                          .on(h.MOUSEENTER, function (t) {
                            return e.pause(t);
                          })
                          .on(h.MOUSELEAVE, function (t) {
                            return e.cycle(t);
                          }),
                        "ontouchstart" in document.documentElement &&
                          t(this._element).on(h.TOUCHEND, function () {
                            e.pause(),
                              e.touchTimeout && clearTimeout(e.touchTimeout),
                              (e.touchTimeout = setTimeout(function (t) {
                                return e.cycle(t);
                              }, 500 + e._config.interval));
                          }));
                  }),
                  (p._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName))
                      switch (t.which) {
                        case 37:
                          t.preventDefault(), this.prev();
                          break;
                        case 39:
                          t.preventDefault(), this.next();
                      }
                  }),
                  (p._getItemIndex = function (e) {
                    return (
                      (this._items = t.makeArray(t(e).parent().find(f.ITEM))),
                      this._items.indexOf(e)
                    );
                  }),
                  (p._getItemByDirection = function (t, e) {
                    var n = t === u.NEXT,
                      i = t === u.PREV,
                      r = this._getItemIndex(e),
                      o = this._items.length - 1;
                    if (
                      ((i && 0 === r) || (n && r === o)) &&
                      !this._config.wrap
                    )
                      return e;
                    var s = t === u.PREV ? -1 : 1,
                      a = (r + s) % this._items.length;
                    return -1 === a
                      ? this._items[this._items.length - 1]
                      : this._items[a];
                  }),
                  (p._triggerSlideEvent = function (e, n) {
                    var i = this._getItemIndex(e),
                      r = this._getItemIndex(
                        t(this._element).find(f.ACTIVE_ITEM)[0]
                      ),
                      o = t.Event(h.SLIDE, {
                        relatedTarget: e,
                        direction: n,
                        from: r,
                        to: i,
                      });
                    return t(this._element).trigger(o), o;
                  }),
                  (p._setActiveIndicatorElement = function (e) {
                    if (this._indicatorsElement) {
                      t(this._indicatorsElement)
                        .find(f.ACTIVE)
                        .removeClass(d.ACTIVE);
                      var n =
                        this._indicatorsElement.children[this._getItemIndex(e)];
                      n && t(n).addClass(d.ACTIVE);
                    }
                  }),
                  (p._slide = function (e, n) {
                    var i,
                      r,
                      o,
                      s = this,
                      a = t(this._element).find(f.ACTIVE_ITEM)[0],
                      c = this._getItemIndex(a),
                      p = n || (a && this._getItemByDirection(e, a)),
                      g = this._getItemIndex(p),
                      m = Boolean(this._interval);
                    if (
                      (e === u.NEXT
                        ? ((i = d.LEFT), (r = d.NEXT), (o = u.LEFT))
                        : ((i = d.RIGHT), (r = d.PREV), (o = u.RIGHT)),
                      p && t(p).hasClass(d.ACTIVE))
                    )
                      return void (this._isSliding = !1);
                    if (
                      !this._triggerSlideEvent(p, o).isDefaultPrevented() &&
                      a &&
                      p
                    ) {
                      (this._isSliding = !0),
                        m && this.pause(),
                        this._setActiveIndicatorElement(p);
                      var v = t.Event(h.SLID, {
                        relatedTarget: p,
                        direction: o,
                        from: c,
                        to: g,
                      });
                      if (t(this._element).hasClass(d.SLIDE)) {
                        t(p).addClass(r),
                          l.reflow(p),
                          t(a).addClass(i),
                          t(p).addClass(i);
                        var y = l.getTransitionDurationFromElement(a);
                        t(a)
                          .one(l.TRANSITION_END, function () {
                            t(p)
                              .removeClass(i + " " + r)
                              .addClass(d.ACTIVE),
                              t(a).removeClass(d.ACTIVE + " " + r + " " + i),
                              (s._isSliding = !1),
                              setTimeout(function () {
                                return t(s._element).trigger(v);
                              }, 0);
                          })
                          .emulateTransitionEnd(y);
                      } else
                        t(a).removeClass(d.ACTIVE),
                          t(p).addClass(d.ACTIVE),
                          (this._isSliding = !1),
                          t(this._element).trigger(v);
                      m && this.cycle();
                    }
                  }),
                  (o._jQueryInterface = function (e) {
                    return this.each(function () {
                      var i = t(this).data(n),
                        r = s({}, a, t(this).data());
                      "object" == typeof e && (r = s({}, r, e));
                      var l = "string" == typeof e ? e : r.slide;
                      if (
                        (i || ((i = new o(this, r)), t(this).data(n, i)),
                        "number" == typeof e)
                      )
                        i.to(e);
                      else if ("string" == typeof l) {
                        if (void 0 === i[l])
                          throw new TypeError('No method named "' + l + '"');
                        i[l]();
                      } else r.interval && (i.pause(), i.cycle());
                    });
                  }),
                  (o._dataApiClickHandler = function (e) {
                    var i = l.getSelectorFromElement(this);
                    if (i) {
                      var r = t(i)[0];
                      if (r && t(r).hasClass(d.CAROUSEL)) {
                        var a = s({}, t(r).data(), t(this).data()),
                          c = this.getAttribute("data-slide-to");
                        c && (a.interval = !1),
                          o._jQueryInterface.call(t(r), a),
                          c && t(r).data(n).to(c),
                          e.preventDefault();
                      }
                    }
                  }),
                  r(o, null, [
                    {
                      key: "VERSION",
                      get: function () {
                        return "4.1.1";
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return a;
                      },
                    },
                  ]),
                  o
                );
              })();
            return (
              t(document).on(
                h.CLICK_DATA_API,
                f.DATA_SLIDE,
                p._dataApiClickHandler
              ),
              t(window).on(h.LOAD_DATA_API, function () {
                t(f.DATA_RIDE).each(function () {
                  var e = t(this);
                  p._jQueryInterface.call(e, e.data());
                });
              }),
              (t.fn[e] = p._jQueryInterface),
              (t.fn[e].Constructor = p),
              (t.fn[e].noConflict = function () {
                return (t.fn[e] = o), p._jQueryInterface;
              }),
              p
            );
          })(e),
          d = (function (t) {
            var e = "collapse",
              n = "bs.collapse",
              i = t.fn[e],
              o = { toggle: !0, parent: "" },
              a = { toggle: "boolean", parent: "(string|element)" },
              c = {
                SHOW: "show.bs.collapse",
                SHOWN: "shown.bs.collapse",
                HIDE: "hide.bs.collapse",
                HIDDEN: "hidden.bs.collapse",
                CLICK_DATA_API: "click.bs.collapse.data-api",
              },
              u = {
                SHOW: "show",
                COLLAPSE: "collapse",
                COLLAPSING: "collapsing",
                COLLAPSED: "collapsed",
              },
              h = { WIDTH: "width", HEIGHT: "height" },
              d = {
                ACTIVES: ".show, .collapsing",
                DATA_TOGGLE: '[data-toggle="collapse"]',
              },
              f = (function () {
                function i(e, n) {
                  (this._isTransitioning = !1),
                    (this._element = e),
                    (this._config = this._getConfig(n)),
                    (this._triggerArray = t.makeArray(
                      t(
                        '[data-toggle="collapse"][href="#' +
                          e.id +
                          '"],[data-toggle="collapse"][data-target="#' +
                          e.id +
                          '"]'
                      )
                    ));
                  for (var i = t(d.DATA_TOGGLE), r = 0; r < i.length; r++) {
                    var o = i[r],
                      s = l.getSelectorFromElement(o);
                    null !== s &&
                      t(s).filter(e).length > 0 &&
                      ((this._selector = s), this._triggerArray.push(o));
                  }
                  (this._parent = this._config.parent
                    ? this._getParent()
                    : null),
                    this._config.parent ||
                      this._addAriaAndCollapsedClass(
                        this._element,
                        this._triggerArray
                      ),
                    this._config.toggle && this.toggle();
                }
                var f = i.prototype;
                return (
                  (f.toggle = function () {
                    t(this._element).hasClass(u.SHOW)
                      ? this.hide()
                      : this.show();
                  }),
                  (f.show = function () {
                    var e = this;
                    if (
                      !this._isTransitioning &&
                      !t(this._element).hasClass(u.SHOW)
                    ) {
                      var r, o;
                      if (
                        (this._parent &&
                          ((r = t.makeArray(
                            t(this._parent)
                              .find(d.ACTIVES)
                              .filter(
                                '[data-parent="' + this._config.parent + '"]'
                              )
                          )),
                          0 === r.length && (r = null)),
                        !(
                          r &&
                          (o = t(r).not(this._selector).data(n)) &&
                          o._isTransitioning
                        ))
                      ) {
                        var s = t.Event(c.SHOW);
                        if (
                          (t(this._element).trigger(s), !s.isDefaultPrevented())
                        ) {
                          r &&
                            (i._jQueryInterface.call(
                              t(r).not(this._selector),
                              "hide"
                            ),
                            o || t(r).data(n, null));
                          var a = this._getDimension();
                          t(this._element)
                            .removeClass(u.COLLAPSE)
                            .addClass(u.COLLAPSING),
                            (this._element.style[a] = 0),
                            this._triggerArray.length > 0 &&
                              t(this._triggerArray)
                                .removeClass(u.COLLAPSED)
                                .attr("aria-expanded", !0),
                            this.setTransitioning(!0);
                          var h = function () {
                              t(e._element)
                                .removeClass(u.COLLAPSING)
                                .addClass(u.COLLAPSE)
                                .addClass(u.SHOW),
                                (e._element.style[a] = ""),
                                e.setTransitioning(!1),
                                t(e._element).trigger(c.SHOWN);
                            },
                            f = a[0].toUpperCase() + a.slice(1),
                            p = "scroll" + f,
                            g = l.getTransitionDurationFromElement(
                              this._element
                            );
                          t(this._element)
                            .one(l.TRANSITION_END, h)
                            .emulateTransitionEnd(g),
                            (this._element.style[a] = this._element[p] + "px");
                        }
                      }
                    }
                  }),
                  (f.hide = function () {
                    var e = this;
                    if (
                      !this._isTransitioning &&
                      t(this._element).hasClass(u.SHOW)
                    ) {
                      var n = t.Event(c.HIDE);
                      if (
                        (t(this._element).trigger(n), !n.isDefaultPrevented())
                      ) {
                        var i = this._getDimension();
                        if (
                          ((this._element.style[i] =
                            this._element.getBoundingClientRect()[i] + "px"),
                          l.reflow(this._element),
                          t(this._element)
                            .addClass(u.COLLAPSING)
                            .removeClass(u.COLLAPSE)
                            .removeClass(u.SHOW),
                          this._triggerArray.length > 0)
                        )
                          for (var r = 0; r < this._triggerArray.length; r++) {
                            var o = this._triggerArray[r],
                              s = l.getSelectorFromElement(o);
                            if (null !== s) {
                              var a = t(s);
                              a.hasClass(u.SHOW) ||
                                t(o)
                                  .addClass(u.COLLAPSED)
                                  .attr("aria-expanded", !1);
                            }
                          }
                        this.setTransitioning(!0);
                        var h = function () {
                          e.setTransitioning(!1),
                            t(e._element)
                              .removeClass(u.COLLAPSING)
                              .addClass(u.COLLAPSE)
                              .trigger(c.HIDDEN);
                        };
                        this._element.style[i] = "";
                        var d = l.getTransitionDurationFromElement(
                          this._element
                        );
                        t(this._element)
                          .one(l.TRANSITION_END, h)
                          .emulateTransitionEnd(d);
                      }
                    }
                  }),
                  (f.setTransitioning = function (t) {
                    this._isTransitioning = t;
                  }),
                  (f.dispose = function () {
                    t.removeData(this._element, n),
                      (this._config = null),
                      (this._parent = null),
                      (this._element = null),
                      (this._triggerArray = null),
                      (this._isTransitioning = null);
                  }),
                  (f._getConfig = function (t) {
                    return (
                      (t = s({}, o, t)),
                      (t.toggle = Boolean(t.toggle)),
                      l.typeCheckConfig(e, t, a),
                      t
                    );
                  }),
                  (f._getDimension = function () {
                    return t(this._element).hasClass(h.WIDTH)
                      ? h.WIDTH
                      : h.HEIGHT;
                  }),
                  (f._getParent = function () {
                    var e = this,
                      n = null;
                    l.isElement(this._config.parent)
                      ? ((n = this._config.parent),
                        void 0 !== this._config.parent.jquery &&
                          (n = this._config.parent[0]))
                      : (n = t(this._config.parent)[0]);
                    var r =
                      '[data-toggle="collapse"][data-parent="' +
                      this._config.parent +
                      '"]';
                    return (
                      t(n)
                        .find(r)
                        .each(function (t, n) {
                          e._addAriaAndCollapsedClass(
                            i._getTargetFromElement(n),
                            [n]
                          );
                        }),
                      n
                    );
                  }),
                  (f._addAriaAndCollapsedClass = function (e, n) {
                    if (e) {
                      var i = t(e).hasClass(u.SHOW);
                      n.length > 0 &&
                        t(n)
                          .toggleClass(u.COLLAPSED, !i)
                          .attr("aria-expanded", i);
                    }
                  }),
                  (i._getTargetFromElement = function (e) {
                    var n = l.getSelectorFromElement(e);
                    return n ? t(n)[0] : null;
                  }),
                  (i._jQueryInterface = function (e) {
                    return this.each(function () {
                      var r = t(this),
                        a = r.data(n),
                        l = s(
                          {},
                          o,
                          r.data(),
                          "object" == typeof e && e ? e : {}
                        );
                      if (
                        (!a &&
                          l.toggle &&
                          /show|hide/.test(e) &&
                          (l.toggle = !1),
                        a || ((a = new i(this, l)), r.data(n, a)),
                        "string" == typeof e)
                      ) {
                        if (void 0 === a[e])
                          throw new TypeError('No method named "' + e + '"');
                        a[e]();
                      }
                    });
                  }),
                  r(i, null, [
                    {
                      key: "VERSION",
                      get: function () {
                        return "4.1.1";
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return o;
                      },
                    },
                  ]),
                  i
                );
              })();
            return (
              t(document).on(c.CLICK_DATA_API, d.DATA_TOGGLE, function (e) {
                "A" === e.currentTarget.tagName && e.preventDefault();
                var i = t(this),
                  r = l.getSelectorFromElement(this);
                t(r).each(function () {
                  var e = t(this),
                    r = e.data(n),
                    o = r ? "toggle" : i.data();
                  f._jQueryInterface.call(e, o);
                });
              }),
              (t.fn[e] = f._jQueryInterface),
              (t.fn[e].Constructor = f),
              (t.fn[e].noConflict = function () {
                return (t.fn[e] = i), f._jQueryInterface;
              }),
              f
            );
          })(e),
          f = (function (t) {
            var e = "dropdown",
              i = "bs.dropdown",
              o = "." + i,
              a = t.fn[e],
              c = new RegExp("38|40|27"),
              u = {
                HIDE: "hide" + o,
                HIDDEN: "hidden" + o,
                SHOW: "show" + o,
                SHOWN: "shown" + o,
                CLICK: "click" + o,
                CLICK_DATA_API: "click.bs.dropdown.data-api",
                KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                KEYUP_DATA_API: "keyup.bs.dropdown.data-api",
              },
              h = {
                DISABLED: "disabled",
                SHOW: "show",
                DROPUP: "dropup",
                DROPRIGHT: "dropright",
                DROPLEFT: "dropleft",
                MENURIGHT: "dropdown-menu-right",
                MENULEFT: "dropdown-menu-left",
                POSITION_STATIC: "position-static",
              },
              d = {
                DATA_TOGGLE: '[data-toggle="dropdown"]',
                FORM_CHILD: ".dropdown form",
                MENU: ".dropdown-menu",
                NAVBAR_NAV: ".navbar-nav",
                VISIBLE_ITEMS:
                  ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
              },
              f = {
                TOP: "top-start",
                TOPEND: "top-end",
                BOTTOM: "bottom-start",
                BOTTOMEND: "bottom-end",
                RIGHT: "right-start",
                RIGHTEND: "right-end",
                LEFT: "left-start",
                LEFTEND: "left-end",
              },
              p = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic",
              },
              g = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string",
              },
              m = (function () {
                function a(t, e) {
                  (this._element = t),
                    (this._popper = null),
                    (this._config = this._getConfig(e)),
                    (this._menu = this._getMenuElement()),
                    (this._inNavbar = this._detectNavbar()),
                    this._addEventListeners();
                }
                var m = a.prototype;
                return (
                  (m.toggle = function () {
                    if (
                      !this._element.disabled &&
                      !t(this._element).hasClass(h.DISABLED)
                    ) {
                      var e = a._getParentFromElement(this._element),
                        i = t(this._menu).hasClass(h.SHOW);
                      if ((a._clearMenus(), !i)) {
                        var r = { relatedTarget: this._element },
                          o = t.Event(u.SHOW, r);
                        if ((t(e).trigger(o), !o.isDefaultPrevented())) {
                          if (!this._inNavbar) {
                            if (void 0 === n)
                              throw new TypeError(
                                "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                              );
                            var s = this._element;
                            "parent" === this._config.reference
                              ? (s = e)
                              : l.isElement(this._config.reference) &&
                                ((s = this._config.reference),
                                void 0 !== this._config.reference.jquery &&
                                  (s = this._config.reference[0])),
                              "scrollParent" !== this._config.boundary &&
                                t(e).addClass(h.POSITION_STATIC),
                              (this._popper = new n(
                                s,
                                this._menu,
                                this._getPopperConfig()
                              ));
                          }
                          "ontouchstart" in document.documentElement &&
                            0 === t(e).closest(d.NAVBAR_NAV).length &&
                            t(document.body)
                              .children()
                              .on("mouseover", null, t.noop),
                            this._element.focus(),
                            this._element.setAttribute("aria-expanded", !0),
                            t(this._menu).toggleClass(h.SHOW),
                            t(e)
                              .toggleClass(h.SHOW)
                              .trigger(t.Event(u.SHOWN, r));
                        }
                      }
                    }
                  }),
                  (m.dispose = function () {
                    t.removeData(this._element, i),
                      t(this._element).off(o),
                      (this._element = null),
                      (this._menu = null),
                      null !== this._popper &&
                        (this._popper.destroy(), (this._popper = null));
                  }),
                  (m.update = function () {
                    (this._inNavbar = this._detectNavbar()),
                      null !== this._popper && this._popper.scheduleUpdate();
                  }),
                  (m._addEventListeners = function () {
                    var e = this;
                    t(this._element).on(u.CLICK, function (t) {
                      t.preventDefault(), t.stopPropagation(), e.toggle();
                    });
                  }),
                  (m._getConfig = function (n) {
                    return (
                      (n = s(
                        {},
                        this.constructor.Default,
                        t(this._element).data(),
                        n
                      )),
                      l.typeCheckConfig(e, n, this.constructor.DefaultType),
                      n
                    );
                  }),
                  (m._getMenuElement = function () {
                    if (!this._menu) {
                      var e = a._getParentFromElement(this._element);
                      this._menu = t(e).find(d.MENU)[0];
                    }
                    return this._menu;
                  }),
                  (m._getPlacement = function () {
                    var e = t(this._element).parent(),
                      n = f.BOTTOM;
                    return (
                      e.hasClass(h.DROPUP)
                        ? ((n = f.TOP),
                          t(this._menu).hasClass(h.MENURIGHT) && (n = f.TOPEND))
                        : e.hasClass(h.DROPRIGHT)
                        ? (n = f.RIGHT)
                        : e.hasClass(h.DROPLEFT)
                        ? (n = f.LEFT)
                        : t(this._menu).hasClass(h.MENURIGHT) &&
                          (n = f.BOTTOMEND),
                      n
                    );
                  }),
                  (m._detectNavbar = function () {
                    return t(this._element).closest(".navbar").length > 0;
                  }),
                  (m._getPopperConfig = function () {
                    var t = this,
                      e = {};
                    "function" == typeof this._config.offset
                      ? (e.fn = function (e) {
                          return (
                            (e.offsets = s(
                              {},
                              e.offsets,
                              t._config.offset(e.offsets) || {}
                            )),
                            e
                          );
                        })
                      : (e.offset = this._config.offset);
                    var n = {
                      placement: this._getPlacement(),
                      modifiers: {
                        offset: e,
                        flip: { enabled: this._config.flip },
                        preventOverflow: {
                          boundariesElement: this._config.boundary,
                        },
                      },
                    };
                    return (
                      "static" === this._config.display &&
                        (n.modifiers.applyStyle = { enabled: !1 }),
                      n
                    );
                  }),
                  (a._jQueryInterface = function (e) {
                    return this.each(function () {
                      var n = t(this).data(i),
                        r = "object" == typeof e ? e : null;
                      if (
                        (n || ((n = new a(this, r)), t(this).data(i, n)),
                        "string" == typeof e)
                      ) {
                        if (void 0 === n[e])
                          throw new TypeError('No method named "' + e + '"');
                        n[e]();
                      }
                    });
                  }),
                  (a._clearMenus = function (e) {
                    if (
                      !e ||
                      (3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    )
                      for (
                        var n = t.makeArray(t(d.DATA_TOGGLE)), r = 0;
                        r < n.length;
                        r++
                      ) {
                        var o = a._getParentFromElement(n[r]),
                          s = t(n[r]).data(i),
                          l = { relatedTarget: n[r] };
                        if (s) {
                          var c = s._menu;
                          if (
                            t(o).hasClass(h.SHOW) &&
                            !(
                              e &&
                              (("click" === e.type &&
                                /input|textarea/i.test(e.target.tagName)) ||
                                ("keyup" === e.type && 9 === e.which)) &&
                              t.contains(o, e.target)
                            )
                          ) {
                            var f = t.Event(u.HIDE, l);
                            t(o).trigger(f),
                              f.isDefaultPrevented() ||
                                ("ontouchstart" in document.documentElement &&
                                  t(document.body)
                                    .children()
                                    .off("mouseover", null, t.noop),
                                n[r].setAttribute("aria-expanded", "false"),
                                t(c).removeClass(h.SHOW),
                                t(o)
                                  .removeClass(h.SHOW)
                                  .trigger(t.Event(u.HIDDEN, l)));
                          }
                        }
                      }
                  }),
                  (a._getParentFromElement = function (e) {
                    var n,
                      i = l.getSelectorFromElement(e);
                    return i && (n = t(i)[0]), n || e.parentNode;
                  }),
                  (a._dataApiKeydownHandler = function (e) {
                    if (
                      (/input|textarea/i.test(e.target.tagName)
                        ? !(
                            32 === e.which ||
                            (27 !== e.which &&
                              ((40 !== e.which && 38 !== e.which) ||
                                t(e.target).closest(d.MENU).length))
                          )
                        : c.test(e.which)) &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      !this.disabled && !t(this).hasClass(h.DISABLED))
                    ) {
                      var n = a._getParentFromElement(this),
                        i = t(n).hasClass(h.SHOW);
                      if (
                        (!i && (27 !== e.which || 32 !== e.which)) ||
                        (i && (27 === e.which || 32 === e.which))
                      ) {
                        if (27 === e.which) {
                          var r = t(n).find(d.DATA_TOGGLE)[0];
                          t(r).trigger("focus");
                        }
                        return void t(this).trigger("click");
                      }
                      var o = t(n).find(d.VISIBLE_ITEMS).get();
                      if (0 !== o.length) {
                        var s = o.indexOf(e.target);
                        38 === e.which && s > 0 && s--,
                          40 === e.which && s < o.length - 1 && s++,
                          s < 0 && (s = 0),
                          o[s].focus();
                      }
                    }
                  }),
                  r(a, null, [
                    {
                      key: "VERSION",
                      get: function () {
                        return "4.1.1";
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return p;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return g;
                      },
                    },
                  ]),
                  a
                );
              })();
            return (
              t(document)
                .on(u.KEYDOWN_DATA_API, d.DATA_TOGGLE, m._dataApiKeydownHandler)
                .on(u.KEYDOWN_DATA_API, d.MENU, m._dataApiKeydownHandler)
                .on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, m._clearMenus)
                .on(u.CLICK_DATA_API, d.DATA_TOGGLE, function (e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    m._jQueryInterface.call(t(this), "toggle");
                })
                .on(u.CLICK_DATA_API, d.FORM_CHILD, function (t) {
                  t.stopPropagation();
                }),
              (t.fn[e] = m._jQueryInterface),
              (t.fn[e].Constructor = m),
              (t.fn[e].noConflict = function () {
                return (t.fn[e] = a), m._jQueryInterface;
              }),
              m
            );
          })(e),
          p = (function (t) {
            var e = "modal",
              n = t.fn[e],
              i = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
              o = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean",
              },
              a = {
                HIDE: "hide.bs.modal",
                HIDDEN: "hidden.bs.modal",
                SHOW: "show.bs.modal",
                SHOWN: "shown.bs.modal",
                FOCUSIN: "focusin.bs.modal",
                RESIZE: "resize.bs.modal",
                CLICK_DISMISS: "click.dismiss.bs.modal",
                KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                CLICK_DATA_API: "click.bs.modal.data-api",
              },
              c = {
                SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                BACKDROP: "modal-backdrop",
                OPEN: "modal-open",
                FADE: "fade",
                SHOW: "show",
              },
              u = {
                DIALOG: ".modal-dialog",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT:
                  ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                STICKY_CONTENT: ".sticky-top",
                NAVBAR_TOGGLER: ".navbar-toggler",
              },
              h = (function () {
                function n(e, n) {
                  (this._config = this._getConfig(n)),
                    (this._element = e),
                    (this._dialog = t(e).find(u.DIALOG)[0]),
                    (this._backdrop = null),
                    (this._isShown = !1),
                    (this._isBodyOverflowing = !1),
                    (this._ignoreBackdropClick = !1),
                    (this._scrollbarWidth = 0);
                }
                var h = n.prototype;
                return (
                  (h.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t);
                  }),
                  (h.show = function (e) {
                    var n = this;
                    if (!this._isTransitioning && !this._isShown) {
                      t(this._element).hasClass(c.FADE) &&
                        (this._isTransitioning = !0);
                      var i = t.Event(a.SHOW, { relatedTarget: e });
                      t(this._element).trigger(i),
                        this._isShown ||
                          i.isDefaultPrevented() ||
                          ((this._isShown = !0),
                          this._checkScrollbar(),
                          this._setScrollbar(),
                          this._adjustDialog(),
                          t(document.body).addClass(c.OPEN),
                          this._setEscapeEvent(),
                          this._setResizeEvent(),
                          t(this._element).on(
                            a.CLICK_DISMISS,
                            u.DATA_DISMISS,
                            function (t) {
                              return n.hide(t);
                            }
                          ),
                          t(this._dialog).on(a.MOUSEDOWN_DISMISS, function () {
                            t(n._element).one(a.MOUSEUP_DISMISS, function (e) {
                              t(e.target).is(n._element) &&
                                (n._ignoreBackdropClick = !0);
                            });
                          }),
                          this._showBackdrop(function () {
                            return n._showElement(e);
                          }));
                    }
                  }),
                  (h.hide = function (e) {
                    var n = this;
                    if (
                      (e && e.preventDefault(),
                      !this._isTransitioning && this._isShown)
                    ) {
                      var i = t.Event(a.HIDE);
                      if (
                        (t(this._element).trigger(i),
                        this._isShown && !i.isDefaultPrevented())
                      ) {
                        this._isShown = !1;
                        var r = t(this._element).hasClass(c.FADE);
                        if (
                          (r && (this._isTransitioning = !0),
                          this._setEscapeEvent(),
                          this._setResizeEvent(),
                          t(document).off(a.FOCUSIN),
                          t(this._element).removeClass(c.SHOW),
                          t(this._element).off(a.CLICK_DISMISS),
                          t(this._dialog).off(a.MOUSEDOWN_DISMISS),
                          r)
                        ) {
                          var o = l.getTransitionDurationFromElement(
                            this._element
                          );
                          t(this._element)
                            .one(l.TRANSITION_END, function (t) {
                              return n._hideModal(t);
                            })
                            .emulateTransitionEnd(o);
                        } else this._hideModal();
                      }
                    }
                  }),
                  (h.dispose = function () {
                    t.removeData(this._element, "bs.modal"),
                      t(window, document, this._element, this._backdrop).off(
                        ".bs.modal"
                      ),
                      (this._config = null),
                      (this._element = null),
                      (this._dialog = null),
                      (this._backdrop = null),
                      (this._isShown = null),
                      (this._isBodyOverflowing = null),
                      (this._ignoreBackdropClick = null),
                      (this._scrollbarWidth = null);
                  }),
                  (h.handleUpdate = function () {
                    this._adjustDialog();
                  }),
                  (h._getConfig = function (t) {
                    return (t = s({}, i, t)), l.typeCheckConfig(e, t, o), t;
                  }),
                  (h._showElement = function (e) {
                    var n = this,
                      i = t(this._element).hasClass(c.FADE);
                    (this._element.parentNode &&
                      this._element.parentNode.nodeType ===
                        Node.ELEMENT_NODE) ||
                      document.body.appendChild(this._element),
                      (this._element.style.display = "block"),
                      this._element.removeAttribute("aria-hidden"),
                      (this._element.scrollTop = 0),
                      i && l.reflow(this._element),
                      t(this._element).addClass(c.SHOW),
                      this._config.focus && this._enforceFocus();
                    var r = t.Event(a.SHOWN, { relatedTarget: e }),
                      o = function () {
                        n._config.focus && n._element.focus(),
                          (n._isTransitioning = !1),
                          t(n._element).trigger(r);
                      };
                    if (i) {
                      var s = l.getTransitionDurationFromElement(this._element);
                      t(this._dialog)
                        .one(l.TRANSITION_END, o)
                        .emulateTransitionEnd(s);
                    } else o();
                  }),
                  (h._enforceFocus = function () {
                    var e = this;
                    t(document)
                      .off(a.FOCUSIN)
                      .on(a.FOCUSIN, function (n) {
                        document !== n.target &&
                          e._element !== n.target &&
                          0 === t(e._element).has(n.target).length &&
                          e._element.focus();
                      });
                  }),
                  (h._setEscapeEvent = function () {
                    var e = this;
                    this._isShown && this._config.keyboard
                      ? t(this._element).on(a.KEYDOWN_DISMISS, function (t) {
                          27 === t.which && (t.preventDefault(), e.hide());
                        })
                      : this._isShown ||
                        t(this._element).off(a.KEYDOWN_DISMISS);
                  }),
                  (h._setResizeEvent = function () {
                    var e = this;
                    this._isShown
                      ? t(window).on(a.RESIZE, function (t) {
                          return e.handleUpdate(t);
                        })
                      : t(window).off(a.RESIZE);
                  }),
                  (h._hideModal = function () {
                    var e = this;
                    (this._element.style.display = "none"),
                      this._element.setAttribute("aria-hidden", !0),
                      (this._isTransitioning = !1),
                      this._showBackdrop(function () {
                        t(document.body).removeClass(c.OPEN),
                          e._resetAdjustments(),
                          e._resetScrollbar(),
                          t(e._element).trigger(a.HIDDEN);
                      });
                  }),
                  (h._removeBackdrop = function () {
                    this._backdrop &&
                      (t(this._backdrop).remove(), (this._backdrop = null));
                  }),
                  (h._showBackdrop = function (e) {
                    var n = this,
                      i = t(this._element).hasClass(c.FADE) ? c.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                      if (
                        ((this._backdrop = document.createElement("div")),
                        (this._backdrop.className = c.BACKDROP),
                        i && t(this._backdrop).addClass(i),
                        t(this._backdrop).appendTo(document.body),
                        t(this._element).on(a.CLICK_DISMISS, function (t) {
                          if (n._ignoreBackdropClick)
                            return void (n._ignoreBackdropClick = !1);
                          t.target === t.currentTarget &&
                            ("static" === n._config.backdrop
                              ? n._element.focus()
                              : n.hide());
                        }),
                        i && l.reflow(this._backdrop),
                        t(this._backdrop).addClass(c.SHOW),
                        !e)
                      )
                        return;
                      if (!i) return void e();
                      var r = l.getTransitionDurationFromElement(
                        this._backdrop
                      );
                      t(this._backdrop)
                        .one(l.TRANSITION_END, e)
                        .emulateTransitionEnd(r);
                    } else if (!this._isShown && this._backdrop) {
                      t(this._backdrop).removeClass(c.SHOW);
                      var o = function () {
                        n._removeBackdrop(), e && e();
                      };
                      if (t(this._element).hasClass(c.FADE)) {
                        var s = l.getTransitionDurationFromElement(
                          this._backdrop
                        );
                        t(this._backdrop)
                          .one(l.TRANSITION_END, o)
                          .emulateTransitionEnd(s);
                      } else o();
                    } else e && e();
                  }),
                  (h._adjustDialog = function () {
                    var t =
                      this._element.scrollHeight >
                      document.documentElement.clientHeight;
                    !this._isBodyOverflowing &&
                      t &&
                      (this._element.style.paddingLeft =
                        this._scrollbarWidth + "px"),
                      this._isBodyOverflowing &&
                        !t &&
                        (this._element.style.paddingRight =
                          this._scrollbarWidth + "px");
                  }),
                  (h._resetAdjustments = function () {
                    (this._element.style.paddingLeft = ""),
                      (this._element.style.paddingRight = "");
                  }),
                  (h._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    (this._isBodyOverflowing =
                      t.left + t.right < window.innerWidth),
                      (this._scrollbarWidth = this._getScrollbarWidth());
                  }),
                  (h._setScrollbar = function () {
                    var e = this;
                    if (this._isBodyOverflowing) {
                      t(u.FIXED_CONTENT).each(function (n, i) {
                        var r = t(i)[0].style.paddingRight,
                          o = t(i).css("padding-right");
                        t(i)
                          .data("padding-right", r)
                          .css(
                            "padding-right",
                            parseFloat(o) + e._scrollbarWidth + "px"
                          );
                      }),
                        t(u.STICKY_CONTENT).each(function (n, i) {
                          var r = t(i)[0].style.marginRight,
                            o = t(i).css("margin-right");
                          t(i)
                            .data("margin-right", r)
                            .css(
                              "margin-right",
                              parseFloat(o) - e._scrollbarWidth + "px"
                            );
                        }),
                        t(u.NAVBAR_TOGGLER).each(function (n, i) {
                          var r = t(i)[0].style.marginRight,
                            o = t(i).css("margin-right");
                          t(i)
                            .data("margin-right", r)
                            .css(
                              "margin-right",
                              parseFloat(o) + e._scrollbarWidth + "px"
                            );
                        });
                      var n = document.body.style.paddingRight,
                        i = t(document.body).css("padding-right");
                      t(document.body)
                        .data("padding-right", n)
                        .css(
                          "padding-right",
                          parseFloat(i) + this._scrollbarWidth + "px"
                        );
                    }
                  }),
                  (h._resetScrollbar = function () {
                    t(u.FIXED_CONTENT).each(function (e, n) {
                      var i = t(n).data("padding-right");
                      void 0 !== i &&
                        t(n)
                          .css("padding-right", i)
                          .removeData("padding-right");
                    }),
                      t(u.STICKY_CONTENT + ", " + u.NAVBAR_TOGGLER).each(
                        function (e, n) {
                          var i = t(n).data("margin-right");
                          void 0 !== i &&
                            t(n)
                              .css("margin-right", i)
                              .removeData("margin-right");
                        }
                      );
                    var e = t(document.body).data("padding-right");
                    void 0 !== e &&
                      t(document.body)
                        .css("padding-right", e)
                        .removeData("padding-right");
                  }),
                  (h._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    (t.className = c.SCROLLBAR_MEASURER),
                      document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e;
                  }),
                  (n._jQueryInterface = function (e, r) {
                    return this.each(function () {
                      var o = t(this).data("bs.modal"),
                        a = s(
                          {},
                          i,
                          t(this).data(),
                          "object" == typeof e && e ? e : {}
                        );
                      if (
                        (o ||
                          ((o = new n(this, a)), t(this).data("bs.modal", o)),
                        "string" == typeof e)
                      ) {
                        if (void 0 === o[e])
                          throw new TypeError('No method named "' + e + '"');
                        o[e](r);
                      } else a.show && o.show(r);
                    });
                  }),
                  r(n, null, [
                    {
                      key: "VERSION",
                      get: function () {
                        return "4.1.1";
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return i;
                      },
                    },
                  ]),
                  n
                );
              })();
            return (
              t(document).on(a.CLICK_DATA_API, u.DATA_TOGGLE, function (e) {
                var n,
                  i = this,
                  r = l.getSelectorFromElement(this);
                r && (n = t(r)[0]);
                var o = t(n).data("bs.modal")
                  ? "toggle"
                  : s({}, t(n).data(), t(this).data());
                ("A" !== this.tagName && "AREA" !== this.tagName) ||
                  e.preventDefault();
                var c = t(n).one(a.SHOW, function (e) {
                  e.isDefaultPrevented() ||
                    c.one(a.HIDDEN, function () {
                      t(i).is(":visible") && i.focus();
                    });
                });
                h._jQueryInterface.call(t(n), o, this);
              }),
              (t.fn[e] = h._jQueryInterface),
              (t.fn[e].Constructor = h),
              (t.fn[e].noConflict = function () {
                return (t.fn[e] = n), h._jQueryInterface;
              }),
              h
            );
          })(e),
          g = (function (t) {
            var e = "tooltip",
              i = ".bs.tooltip",
              o = t.fn[e],
              a = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
              c = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
              },
              u = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left",
              },
              h = {
                animation: !0,
                template:
                  '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
              },
              d = { SHOW: "show", OUT: "out" },
              f = {
                HIDE: "hide" + i,
                HIDDEN: "hidden" + i,
                SHOW: "show" + i,
                SHOWN: "shown" + i,
                INSERTED: "inserted" + i,
                CLICK: "click" + i,
                FOCUSIN: "focusin" + i,
                FOCUSOUT: "focusout" + i,
                MOUSEENTER: "mouseenter" + i,
                MOUSELEAVE: "mouseleave" + i,
              },
              p = { FADE: "fade", SHOW: "show" },
              g = {
                TOOLTIP: ".tooltip",
                TOOLTIP_INNER: ".tooltip-inner",
                ARROW: ".arrow",
              },
              m = {
                HOVER: "hover",
                FOCUS: "focus",
                CLICK: "click",
                MANUAL: "manual",
              },
              v = (function () {
                function o(t, e) {
                  if (void 0 === n)
                    throw new TypeError(
                      "Bootstrap tooltips require Popper.js (https://popper.js.org)"
                    );
                  (this._isEnabled = !0),
                    (this._timeout = 0),
                    (this._hoverState = ""),
                    (this._activeTrigger = {}),
                    (this._popper = null),
                    (this.element = t),
                    (this.config = this._getConfig(e)),
                    (this.tip = null),
                    this._setListeners();
                }
                var v = o.prototype;
                return (
                  (v.enable = function () {
                    this._isEnabled = !0;
                  }),
                  (v.disable = function () {
                    this._isEnabled = !1;
                  }),
                  (v.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled;
                  }),
                  (v.toggle = function (e) {
                    if (this._isEnabled)
                      if (e) {
                        var n = this.constructor.DATA_KEY,
                          i = t(e.currentTarget).data(n);
                        i ||
                          ((i = new this.constructor(
                            e.currentTarget,
                            this._getDelegateConfig()
                          )),
                          t(e.currentTarget).data(n, i)),
                          (i._activeTrigger.click = !i._activeTrigger.click),
                          i._isWithActiveTrigger()
                            ? i._enter(null, i)
                            : i._leave(null, i);
                      } else {
                        if (t(this.getTipElement()).hasClass(p.SHOW))
                          return void this._leave(null, this);
                        this._enter(null, this);
                      }
                  }),
                  (v.dispose = function () {
                    clearTimeout(this._timeout),
                      t.removeData(this.element, this.constructor.DATA_KEY),
                      t(this.element).off(this.constructor.EVENT_KEY),
                      t(this.element).closest(".modal").off("hide.bs.modal"),
                      this.tip && t(this.tip).remove(),
                      (this._isEnabled = null),
                      (this._timeout = null),
                      (this._hoverState = null),
                      (this._activeTrigger = null),
                      null !== this._popper && this._popper.destroy(),
                      (this._popper = null),
                      (this.element = null),
                      (this.config = null),
                      (this.tip = null);
                  }),
                  (v.show = function () {
                    var e = this;
                    if ("none" === t(this.element).css("display"))
                      throw new Error("Please use show on visible elements");
                    var i = t.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                      t(this.element).trigger(i);
                      var r = t.contains(
                        this.element.ownerDocument.documentElement,
                        this.element
                      );
                      if (i.isDefaultPrevented() || !r) return;
                      var o = this.getTipElement(),
                        s = l.getUID(this.constructor.NAME);
                      o.setAttribute("id", s),
                        this.element.setAttribute("aria-describedby", s),
                        this.setContent(),
                        this.config.animation && t(o).addClass(p.FADE);
                      var a =
                          "function" == typeof this.config.placement
                            ? this.config.placement.call(this, o, this.element)
                            : this.config.placement,
                        c = this._getAttachment(a);
                      this.addAttachmentClass(c);
                      var u =
                        !1 === this.config.container
                          ? document.body
                          : t(this.config.container);
                      t(o).data(this.constructor.DATA_KEY, this),
                        t.contains(
                          this.element.ownerDocument.documentElement,
                          this.tip
                        ) || t(o).appendTo(u),
                        t(this.element).trigger(
                          this.constructor.Event.INSERTED
                        ),
                        (this._popper = new n(this.element, o, {
                          placement: c,
                          modifiers: {
                            offset: { offset: this.config.offset },
                            flip: { behavior: this.config.fallbackPlacement },
                            arrow: { element: g.ARROW },
                            preventOverflow: {
                              boundariesElement: this.config.boundary,
                            },
                          },
                          onCreate: function (t) {
                            t.originalPlacement !== t.placement &&
                              e._handlePopperPlacementChange(t);
                          },
                          onUpdate: function (t) {
                            e._handlePopperPlacementChange(t);
                          },
                        })),
                        t(o).addClass(p.SHOW),
                        "ontouchstart" in document.documentElement &&
                          t(document.body)
                            .children()
                            .on("mouseover", null, t.noop);
                      var h = function () {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        (e._hoverState = null),
                          t(e.element).trigger(e.constructor.Event.SHOWN),
                          n === d.OUT && e._leave(null, e);
                      };
                      if (t(this.tip).hasClass(p.FADE)) {
                        var f = l.getTransitionDurationFromElement(this.tip);
                        t(this.tip)
                          .one(l.TRANSITION_END, h)
                          .emulateTransitionEnd(f);
                      } else h();
                    }
                  }),
                  (v.hide = function (e) {
                    var n = this,
                      i = this.getTipElement(),
                      r = t.Event(this.constructor.Event.HIDE),
                      o = function () {
                        n._hoverState !== d.SHOW &&
                          i.parentNode &&
                          i.parentNode.removeChild(i),
                          n._cleanTipClass(),
                          n.element.removeAttribute("aria-describedby"),
                          t(n.element).trigger(n.constructor.Event.HIDDEN),
                          null !== n._popper && n._popper.destroy(),
                          e && e();
                      };
                    if ((t(this.element).trigger(r), !r.isDefaultPrevented())) {
                      if (
                        (t(i).removeClass(p.SHOW),
                        "ontouchstart" in document.documentElement &&
                          t(document.body)
                            .children()
                            .off("mouseover", null, t.noop),
                        (this._activeTrigger[m.CLICK] = !1),
                        (this._activeTrigger[m.FOCUS] = !1),
                        (this._activeTrigger[m.HOVER] = !1),
                        t(this.tip).hasClass(p.FADE))
                      ) {
                        var s = l.getTransitionDurationFromElement(i);
                        t(i).one(l.TRANSITION_END, o).emulateTransitionEnd(s);
                      } else o();
                      this._hoverState = "";
                    }
                  }),
                  (v.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate();
                  }),
                  (v.isWithContent = function () {
                    return Boolean(this.getTitle());
                  }),
                  (v.addAttachmentClass = function (e) {
                    t(this.getTipElement()).addClass("bs-tooltip-" + e);
                  }),
                  (v.getTipElement = function () {
                    return (
                      (this.tip = this.tip || t(this.config.template)[0]),
                      this.tip
                    );
                  }),
                  (v.setContent = function () {
                    var e = t(this.getTipElement());
                    this.setElementContent(
                      e.find(g.TOOLTIP_INNER),
                      this.getTitle()
                    ),
                      e.removeClass(p.FADE + " " + p.SHOW);
                  }),
                  (v.setElementContent = function (e, n) {
                    var i = this.config.html;
                    "object" == typeof n && (n.nodeType || n.jquery)
                      ? i
                        ? t(n).parent().is(e) || e.empty().append(n)
                        : e.text(t(n).text())
                      : e[i ? "html" : "text"](n);
                  }),
                  (v.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return (
                      t ||
                        (t =
                          "function" == typeof this.config.title
                            ? this.config.title.call(this.element)
                            : this.config.title),
                      t
                    );
                  }),
                  (v._getAttachment = function (t) {
                    return u[t.toUpperCase()];
                  }),
                  (v._setListeners = function () {
                    var e = this;
                    this.config.trigger.split(" ").forEach(function (n) {
                      if ("click" === n)
                        t(e.element).on(
                          e.constructor.Event.CLICK,
                          e.config.selector,
                          function (t) {
                            return e.toggle(t);
                          }
                        );
                      else if (n !== m.MANUAL) {
                        var i =
                            n === m.HOVER
                              ? e.constructor.Event.MOUSEENTER
                              : e.constructor.Event.FOCUSIN,
                          r =
                            n === m.HOVER
                              ? e.constructor.Event.MOUSELEAVE
                              : e.constructor.Event.FOCUSOUT;
                        t(e.element)
                          .on(i, e.config.selector, function (t) {
                            return e._enter(t);
                          })
                          .on(r, e.config.selector, function (t) {
                            return e._leave(t);
                          });
                      }
                      t(e.element)
                        .closest(".modal")
                        .on("hide.bs.modal", function () {
                          return e.hide();
                        });
                    }),
                      this.config.selector
                        ? (this.config = s({}, this.config, {
                            trigger: "manual",
                            selector: "",
                          }))
                        : this._fixTitle();
                  }),
                  (v._fixTitle = function () {
                    var t = typeof this.element.getAttribute(
                      "data-original-title"
                    );
                    (this.element.getAttribute("title") || "string" !== t) &&
                      (this.element.setAttribute(
                        "data-original-title",
                        this.element.getAttribute("title") || ""
                      ),
                      this.element.setAttribute("title", ""));
                  }),
                  (v._enter = function (e, n) {
                    var i = this.constructor.DATA_KEY;
                    return (
                      (n = n || t(e.currentTarget).data(i)),
                      n ||
                        ((n = new this.constructor(
                          e.currentTarget,
                          this._getDelegateConfig()
                        )),
                        t(e.currentTarget).data(i, n)),
                      e &&
                        (n._activeTrigger[
                          "focusin" === e.type ? m.FOCUS : m.HOVER
                        ] = !0),
                      t(n.getTipElement()).hasClass(p.SHOW) ||
                      n._hoverState === d.SHOW
                        ? void (n._hoverState = d.SHOW)
                        : (clearTimeout(n._timeout),
                          (n._hoverState = d.SHOW),
                          n.config.delay && n.config.delay.show
                            ? void (n._timeout = setTimeout(function () {
                                n._hoverState === d.SHOW && n.show();
                              }, n.config.delay.show))
                            : void n.show())
                    );
                  }),
                  (v._leave = function (e, n) {
                    var i = this.constructor.DATA_KEY;
                    if (
                      ((n = n || t(e.currentTarget).data(i)),
                      n ||
                        ((n = new this.constructor(
                          e.currentTarget,
                          this._getDelegateConfig()
                        )),
                        t(e.currentTarget).data(i, n)),
                      e &&
                        (n._activeTrigger[
                          "focusout" === e.type ? m.FOCUS : m.HOVER
                        ] = !1),
                      !n._isWithActiveTrigger())
                    ) {
                      if (
                        (clearTimeout(n._timeout),
                        (n._hoverState = d.OUT),
                        !n.config.delay || !n.config.delay.hide)
                      )
                        return void n.hide();
                      n._timeout = setTimeout(function () {
                        n._hoverState === d.OUT && n.hide();
                      }, n.config.delay.hide);
                    }
                  }),
                  (v._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger)
                      if (this._activeTrigger[t]) return !0;
                    return !1;
                  }),
                  (v._getConfig = function (n) {
                    return (
                      (n = s(
                        {},
                        this.constructor.Default,
                        t(this.element).data(),
                        "object" == typeof n && n ? n : {}
                      )),
                      "number" == typeof n.delay &&
                        (n.delay = { show: n.delay, hide: n.delay }),
                      "number" == typeof n.title &&
                        (n.title = n.title.toString()),
                      "number" == typeof n.content &&
                        (n.content = n.content.toString()),
                      l.typeCheckConfig(e, n, this.constructor.DefaultType),
                      n
                    );
                  }),
                  (v._getDelegateConfig = function () {
                    var t = {};
                    if (this.config)
                      for (var e in this.config)
                        this.constructor.Default[e] !== this.config[e] &&
                          (t[e] = this.config[e]);
                    return t;
                  }),
                  (v._cleanTipClass = function () {
                    var e = t(this.getTipElement()),
                      n = e.attr("class").match(a);
                    null !== n && n.length > 0 && e.removeClass(n.join(""));
                  }),
                  (v._handlePopperPlacementChange = function (t) {
                    this._cleanTipClass(),
                      this.addAttachmentClass(this._getAttachment(t.placement));
                  }),
                  (v._fixTransition = function () {
                    var e = this.getTipElement(),
                      n = this.config.animation;
                    null === e.getAttribute("x-placement") &&
                      (t(e).removeClass(p.FADE),
                      (this.config.animation = !1),
                      this.hide(),
                      this.show(),
                      (this.config.animation = n));
                  }),
                  (o._jQueryInterface = function (e) {
                    return this.each(function () {
                      var n = t(this).data("bs.tooltip"),
                        i = "object" == typeof e && e;
                      if (
                        (n || !/dispose|hide/.test(e)) &&
                        (n ||
                          ((n = new o(this, i)), t(this).data("bs.tooltip", n)),
                        "string" == typeof e)
                      ) {
                        if (void 0 === n[e])
                          throw new TypeError('No method named "' + e + '"');
                        n[e]();
                      }
                    });
                  }),
                  r(o, null, [
                    {
                      key: "VERSION",
                      get: function () {
                        return "4.1.1";
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return h;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return e;
                      },
                    },
                    {
                      key: "DATA_KEY",
                      get: function () {
                        return "bs.tooltip";
                      },
                    },
                    {
                      key: "Event",
                      get: function () {
                        return f;
                      },
                    },
                    {
                      key: "EVENT_KEY",
                      get: function () {
                        return i;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return c;
                      },
                    },
                  ]),
                  o
                );
              })();
            return (
              (t.fn[e] = v._jQueryInterface),
              (t.fn[e].Constructor = v),
              (t.fn[e].noConflict = function () {
                return (t.fn[e] = o), v._jQueryInterface;
              }),
              v
            );
          })(e),
          m = (function (t) {
            var e = "popover",
              n = ".bs.popover",
              i = t.fn[e],
              o = new RegExp("(^|\\s)bs-popover\\S+", "g"),
              l = s({}, g.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template:
                  '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
              }),
              c = s({}, g.DefaultType, {
                content: "(string|element|function)",
              }),
              u = { FADE: "fade", SHOW: "show" },
              h = { TITLE: ".popover-header", CONTENT: ".popover-body" },
              d = {
                HIDE: "hide" + n,
                HIDDEN: "hidden" + n,
                SHOW: "show" + n,
                SHOWN: "shown" + n,
                INSERTED: "inserted" + n,
                CLICK: "click" + n,
                FOCUSIN: "focusin" + n,
                FOCUSOUT: "focusout" + n,
                MOUSEENTER: "mouseenter" + n,
                MOUSELEAVE: "mouseleave" + n,
              },
              f = (function (i) {
                function s() {
                  return i.apply(this, arguments) || this;
                }
                a(s, i);
                var f = s.prototype;
                return (
                  (f.isWithContent = function () {
                    return this.getTitle() || this._getContent();
                  }),
                  (f.addAttachmentClass = function (e) {
                    t(this.getTipElement()).addClass("bs-popover-" + e);
                  }),
                  (f.getTipElement = function () {
                    return (
                      (this.tip = this.tip || t(this.config.template)[0]),
                      this.tip
                    );
                  }),
                  (f.setContent = function () {
                    var e = t(this.getTipElement());
                    this.setElementContent(e.find(h.TITLE), this.getTitle());
                    var n = this._getContent();
                    "function" == typeof n && (n = n.call(this.element)),
                      this.setElementContent(e.find(h.CONTENT), n),
                      e.removeClass(u.FADE + " " + u.SHOW);
                  }),
                  (f._getContent = function () {
                    return (
                      this.element.getAttribute("data-content") ||
                      this.config.content
                    );
                  }),
                  (f._cleanTipClass = function () {
                    var e = t(this.getTipElement()),
                      n = e.attr("class").match(o);
                    null !== n && n.length > 0 && e.removeClass(n.join(""));
                  }),
                  (s._jQueryInterface = function (e) {
                    return this.each(function () {
                      var n = t(this).data("bs.popover"),
                        i = "object" == typeof e ? e : null;
                      if (
                        (n || !/destroy|hide/.test(e)) &&
                        (n ||
                          ((n = new s(this, i)), t(this).data("bs.popover", n)),
                        "string" == typeof e)
                      ) {
                        if (void 0 === n[e])
                          throw new TypeError('No method named "' + e + '"');
                        n[e]();
                      }
                    });
                  }),
                  r(s, null, [
                    {
                      key: "VERSION",
                      get: function () {
                        return "4.1.1";
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return l;
                      },
                    },
                    {
                      key: "NAME",
                      get: function () {
                        return e;
                      },
                    },
                    {
                      key: "DATA_KEY",
                      get: function () {
                        return "bs.popover";
                      },
                    },
                    {
                      key: "Event",
                      get: function () {
                        return d;
                      },
                    },
                    {
                      key: "EVENT_KEY",
                      get: function () {
                        return n;
                      },
                    },
                    {
                      key: "DefaultType",
                      get: function () {
                        return c;
                      },
                    },
                  ]),
                  s
                );
              })(g);
            return (
              (t.fn[e] = f._jQueryInterface),
              (t.fn[e].Constructor = f),
              (t.fn[e].noConflict = function () {
                return (t.fn[e] = i), f._jQueryInterface;
              }),
              f
            );
          })(e),
          v = (function (t) {
            var e = "scrollspy",
              n = t.fn[e],
              i = { offset: 10, method: "auto", target: "" },
              o = {
                offset: "number",
                method: "string",
                target: "(string|element)",
              },
              a = {
                ACTIVATE: "activate.bs.scrollspy",
                SCROLL: "scroll.bs.scrollspy",
                LOAD_DATA_API: "load.bs.scrollspy.data-api",
              },
              c = {
                DROPDOWN_ITEM: "dropdown-item",
                DROPDOWN_MENU: "dropdown-menu",
                ACTIVE: "active",
              },
              u = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                NAV_LIST_GROUP: ".nav, .list-group",
                NAV_LINKS: ".nav-link",
                NAV_ITEMS: ".nav-item",
                LIST_ITEMS: ".list-group-item",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle",
              },
              h = { OFFSET: "offset", POSITION: "position" },
              d = (function () {
                function n(e, n) {
                  var i = this;
                  (this._element = e),
                    (this._scrollElement = "BODY" === e.tagName ? window : e),
                    (this._config = this._getConfig(n)),
                    (this._selector =
                      this._config.target +
                      " " +
                      u.NAV_LINKS +
                      "," +
                      this._config.target +
                      " " +
                      u.LIST_ITEMS +
                      "," +
                      this._config.target +
                      " " +
                      u.DROPDOWN_ITEMS),
                    (this._offsets = []),
                    (this._targets = []),
                    (this._activeTarget = null),
                    (this._scrollHeight = 0),
                    t(this._scrollElement).on(a.SCROLL, function (t) {
                      return i._process(t);
                    }),
                    this.refresh(),
                    this._process();
                }
                var d = n.prototype;
                return (
                  (d.refresh = function () {
                    var e = this,
                      n =
                        this._scrollElement === this._scrollElement.window
                          ? h.OFFSET
                          : h.POSITION,
                      i =
                        "auto" === this._config.method
                          ? n
                          : this._config.method,
                      r = i === h.POSITION ? this._getScrollTop() : 0;
                    (this._offsets = []),
                      (this._targets = []),
                      (this._scrollHeight = this._getScrollHeight()),
                      t
                        .makeArray(t(this._selector))
                        .map(function (e) {
                          var n,
                            o = l.getSelectorFromElement(e);
                          if ((o && (n = t(o)[0]), n)) {
                            var s = n.getBoundingClientRect();
                            if (s.width || s.height)
                              return [t(n)[i]().top + r, o];
                          }
                          return null;
                        })
                        .filter(function (t) {
                          return t;
                        })
                        .sort(function (t, e) {
                          return t[0] - e[0];
                        })
                        .forEach(function (t) {
                          e._offsets.push(t[0]), e._targets.push(t[1]);
                        });
                  }),
                  (d.dispose = function () {
                    t.removeData(this._element, "bs.scrollspy"),
                      t(this._scrollElement).off(".bs.scrollspy"),
                      (this._element = null),
                      (this._scrollElement = null),
                      (this._config = null),
                      (this._selector = null),
                      (this._offsets = null),
                      (this._targets = null),
                      (this._activeTarget = null),
                      (this._scrollHeight = null);
                  }),
                  (d._getConfig = function (n) {
                    if (
                      ((n = s({}, i, "object" == typeof n && n ? n : {})),
                      "string" != typeof n.target)
                    ) {
                      var r = t(n.target).attr("id");
                      r || ((r = l.getUID(e)), t(n.target).attr("id", r)),
                        (n.target = "#" + r);
                    }
                    return l.typeCheckConfig(e, n, o), n;
                  }),
                  (d._getScrollTop = function () {
                    return this._scrollElement === window
                      ? this._scrollElement.pageYOffset
                      : this._scrollElement.scrollTop;
                  }),
                  (d._getScrollHeight = function () {
                    return (
                      this._scrollElement.scrollHeight ||
                      Math.max(
                        document.body.scrollHeight,
                        document.documentElement.scrollHeight
                      )
                    );
                  }),
                  (d._getOffsetHeight = function () {
                    return this._scrollElement === window
                      ? window.innerHeight
                      : this._scrollElement.getBoundingClientRect().height;
                  }),
                  (d._process = function () {
                    var t = this._getScrollTop() + this._config.offset,
                      e = this._getScrollHeight(),
                      n = this._config.offset + e - this._getOffsetHeight();
                    if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                      var i = this._targets[this._targets.length - 1];
                      return void (
                        this._activeTarget !== i && this._activate(i)
                      );
                    }
                    if (
                      this._activeTarget &&
                      t < this._offsets[0] &&
                      this._offsets[0] > 0
                    )
                      return (this._activeTarget = null), void this._clear();
                    for (var r = this._offsets.length; r--; )
                      this._activeTarget !== this._targets[r] &&
                        t >= this._offsets[r] &&
                        (void 0 === this._offsets[r + 1] ||
                          t < this._offsets[r + 1]) &&
                        this._activate(this._targets[r]);
                  }),
                  (d._activate = function (e) {
                    (this._activeTarget = e), this._clear();
                    var n = this._selector.split(",");
                    n = n.map(function (t) {
                      return (
                        t +
                        '[data-target="' +
                        e +
                        '"],' +
                        t +
                        '[href="' +
                        e +
                        '"]'
                      );
                    });
                    var i = t(n.join(","));
                    i.hasClass(c.DROPDOWN_ITEM)
                      ? (i
                          .closest(u.DROPDOWN)
                          .find(u.DROPDOWN_TOGGLE)
                          .addClass(c.ACTIVE),
                        i.addClass(c.ACTIVE))
                      : (i.addClass(c.ACTIVE),
                        i
                          .parents(u.NAV_LIST_GROUP)
                          .prev(u.NAV_LINKS + ", " + u.LIST_ITEMS)
                          .addClass(c.ACTIVE),
                        i
                          .parents(u.NAV_LIST_GROUP)
                          .prev(u.NAV_ITEMS)
                          .children(u.NAV_LINKS)
                          .addClass(c.ACTIVE)),
                      t(this._scrollElement).trigger(a.ACTIVATE, {
                        relatedTarget: e,
                      });
                  }),
                  (d._clear = function () {
                    t(this._selector).filter(u.ACTIVE).removeClass(c.ACTIVE);
                  }),
                  (n._jQueryInterface = function (e) {
                    return this.each(function () {
                      var i = t(this).data("bs.scrollspy"),
                        r = "object" == typeof e && e;
                      if (
                        (i ||
                          ((i = new n(this, r)),
                          t(this).data("bs.scrollspy", i)),
                        "string" == typeof e)
                      ) {
                        if (void 0 === i[e])
                          throw new TypeError('No method named "' + e + '"');
                        i[e]();
                      }
                    });
                  }),
                  r(n, null, [
                    {
                      key: "VERSION",
                      get: function () {
                        return "4.1.1";
                      },
                    },
                    {
                      key: "Default",
                      get: function () {
                        return i;
                      },
                    },
                  ]),
                  n
                );
              })();
            return (
              t(window).on(a.LOAD_DATA_API, function () {
                for (var e = t.makeArray(t(u.DATA_SPY)), n = e.length; n--; ) {
                  var i = t(e[n]);
                  d._jQueryInterface.call(i, i.data());
                }
              }),
              (t.fn[e] = d._jQueryInterface),
              (t.fn[e].Constructor = d),
              (t.fn[e].noConflict = function () {
                return (t.fn[e] = n), d._jQueryInterface;
              }),
              d
            );
          })(e),
          y = (function (t) {
            var e = t.fn.tab,
              n = {
                HIDE: "hide.bs.tab",
                HIDDEN: "hidden.bs.tab",
                SHOW: "show.bs.tab",
                SHOWN: "shown.bs.tab",
                CLICK_DATA_API: "click.bs.tab.data-api",
              },
              i = {
                DROPDOWN_MENU: "dropdown-menu",
                ACTIVE: "active",
                DISABLED: "disabled",
                FADE: "fade",
                SHOW: "show",
              },
              o = {
                DROPDOWN: ".dropdown",
                NAV_LIST_GROUP: ".nav, .list-group",
                ACTIVE: ".active",
                ACTIVE_UL: "> li > .active",
                DATA_TOGGLE:
                  '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                DROPDOWN_TOGGLE: ".dropdown-toggle",
                DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active",
              },
              s = (function () {
                function e(t) {
                  this._element = t;
                }
                var s = e.prototype;
                return (
                  (s.show = function () {
                    var e = this;
                    if (
                      !(
                        (this._element.parentNode &&
                          this._element.parentNode.nodeType ===
                            Node.ELEMENT_NODE &&
                          t(this._element).hasClass(i.ACTIVE)) ||
                        t(this._element).hasClass(i.DISABLED)
                      )
                    ) {
                      var r,
                        s,
                        a = t(this._element).closest(o.NAV_LIST_GROUP)[0],
                        c = l.getSelectorFromElement(this._element);
                      if (a) {
                        var u = "UL" === a.nodeName ? o.ACTIVE_UL : o.ACTIVE;
                        (s = t.makeArray(t(a).find(u))), (s = s[s.length - 1]);
                      }
                      var h = t.Event(n.HIDE, { relatedTarget: this._element }),
                        d = t.Event(n.SHOW, { relatedTarget: s });
                      if (
                        (s && t(s).trigger(h),
                        t(this._element).trigger(d),
                        !d.isDefaultPrevented() && !h.isDefaultPrevented())
                      ) {
                        c && (r = t(c)[0]), this._activate(this._element, a);
                        var f = function () {
                          var i = t.Event(n.HIDDEN, {
                              relatedTarget: e._element,
                            }),
                            r = t.Event(n.SHOWN, { relatedTarget: s });
                          t(s).trigger(i), t(e._element).trigger(r);
                        };
                        r ? this._activate(r, r.parentNode, f) : f();
                      }
                    }
                  }),
                  (s.dispose = function () {
                    t.removeData(this._element, "bs.tab"),
                      (this._element = null);
                  }),
                  (s._activate = function (e, n, r) {
                    var s,
                      a = this;
                    s =
                      "UL" === n.nodeName
                        ? t(n).find(o.ACTIVE_UL)
                        : t(n).children(o.ACTIVE);
                    var c = s[0],
                      u = r && c && t(c).hasClass(i.FADE),
                      h = function () {
                        return a._transitionComplete(e, c, r);
                      };
                    if (c && u) {
                      var d = l.getTransitionDurationFromElement(c);
                      t(c).one(l.TRANSITION_END, h).emulateTransitionEnd(d);
                    } else h();
                  }),
                  (s._transitionComplete = function (e, n, r) {
                    if (n) {
                      t(n).removeClass(i.SHOW + " " + i.ACTIVE);
                      var s = t(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];
                      s && t(s).removeClass(i.ACTIVE),
                        "tab" === n.getAttribute("role") &&
                          n.setAttribute("aria-selected", !1);
                    }
                    if (
                      (t(e).addClass(i.ACTIVE),
                      "tab" === e.getAttribute("role") &&
                        e.setAttribute("aria-selected", !0),
                      l.reflow(e),
                      t(e).addClass(i.SHOW),
                      e.parentNode && t(e.parentNode).hasClass(i.DROPDOWN_MENU))
                    ) {
                      var a = t(e).closest(o.DROPDOWN)[0];
                      a && t(a).find(o.DROPDOWN_TOGGLE).addClass(i.ACTIVE),
                        e.setAttribute("aria-expanded", !0);
                    }
                    r && r();
                  }),
                  (e._jQueryInterface = function (n) {
                    return this.each(function () {
                      var i = t(this),
                        r = i.data("bs.tab");
                      if (
                        (r || ((r = new e(this)), i.data("bs.tab", r)),
                        "string" == typeof n)
                      ) {
                        if (void 0 === r[n])
                          throw new TypeError('No method named "' + n + '"');
                        r[n]();
                      }
                    });
                  }),
                  r(e, null, [
                    {
                      key: "VERSION",
                      get: function () {
                        return "4.1.1";
                      },
                    },
                  ]),
                  e
                );
              })();
            return (
              t(document).on(n.CLICK_DATA_API, o.DATA_TOGGLE, function (e) {
                e.preventDefault(), s._jQueryInterface.call(t(this), "show");
              }),
              (t.fn.tab = s._jQueryInterface),
              (t.fn.tab.Constructor = s),
              (t.fn.tab.noConflict = function () {
                return (t.fn.tab = e), s._jQueryInterface;
              }),
              s
            );
          })(e);
        !(function (t) {
          if (void 0 === t)
            throw new TypeError(
              "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
            );
          var e = t.fn.jquery.split(" ")[0].split(".");
          if (
            (e[0] < 2 && e[1] < 9) ||
            (1 === e[0] && 9 === e[1] && e[2] < 1) ||
            e[0] >= 4
          )
            throw new Error(
              "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
            );
        })(e),
          (t.Util = l),
          (t.Alert = c),
          (t.Button = u),
          (t.Carousel = h),
          (t.Collapse = d),
          (t.Dropdown = f),
          (t.Modal = p),
          (t.Popover = m),
          (t.Scrollspy = v),
          (t.Tab = y),
          (t.Tooltip = g),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })(e, n(2), n(11));
    })();
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      function (t) {
        function n(t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function () {
                (e = !1), t();
              }));
          };
        }
        function i(t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              setTimeout(function () {
                (e = !1), t();
              }, ct));
          };
        }
        function r(t) {
          var e = {};
          return t && "[object Function]" === e.toString.call(t);
        }
        function o(t, e) {
          if (1 !== t.nodeType) return [];
          var n = getComputedStyle(t, null);
          return e ? n[e] : n;
        }
        function s(t) {
          return "HTML" === t.nodeName ? t : t.parentNode || t.host;
        }
        function a(t) {
          if (!t) return document.body;
          switch (t.nodeName) {
            case "HTML":
            case "BODY":
              return t.ownerDocument.body;
            case "#document":
              return t.body;
          }
          var e = o(t),
            n = e.overflow,
            i = e.overflowX;
          return /(auto|scroll)/.test(n + e.overflowY + i) ? t : a(s(t));
        }
        function l(t) {
          var e = t && t.offsetParent,
            n = e && e.nodeName;
          return n && "BODY" !== n && "HTML" !== n
            ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) &&
              "static" === o(e, "position")
              ? l(e)
              : e
            : t
            ? t.ownerDocument.documentElement
            : document.documentElement;
        }
        function c(t) {
          var e = t.nodeName;
          return "BODY" !== e && ("HTML" === e || l(t.firstElementChild) === t);
        }
        function u(t) {
          return null !== t.parentNode ? u(t.parentNode) : t;
        }
        function h(t, e) {
          if (!(t && t.nodeType && e && e.nodeType))
            return document.documentElement;
          var n =
              t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            r = n ? e : t,
            o = document.createRange();
          o.setStart(i, 0), o.setEnd(r, 0);
          var s = o.commonAncestorContainer;
          if ((t !== s && e !== s) || i.contains(r)) return c(s) ? s : l(s);
          var a = u(t);
          return a.host ? h(a.host, e) : h(t, u(e).host);
        }
        function d(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "top",
            n = "top" === e ? "scrollTop" : "scrollLeft",
            i = t.nodeName;
          if ("BODY" === i || "HTML" === i) {
            var r = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || r)[n];
          }
          return t[n];
        }
        function f(t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = d(e, "top"),
            r = d(e, "left"),
            o = n ? -1 : 1;
          return (
            (t.top += i * o),
            (t.bottom += i * o),
            (t.left += r * o),
            (t.right += r * o),
            t
          );
        }
        function p(t, e) {
          var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
          return (
            parseFloat(t["border" + n + "Width"], 10) +
            parseFloat(t["border" + i + "Width"], 10)
          );
        }
        function g(t, e, n, i) {
          return Math.max(
            e["offset" + t],
            e["scroll" + t],
            n["client" + t],
            n["offset" + t],
            n["scroll" + t],
            pt()
              ? n["offset" + t] +
                  i["margin" + ("Height" === t ? "Top" : "Left")] +
                  i["margin" + ("Height" === t ? "Bottom" : "Right")]
              : 0
          );
        }
        function m() {
          var t = document.body,
            e = document.documentElement,
            n = pt() && getComputedStyle(e);
          return { height: g("Height", t, e, n), width: g("Width", t, e, n) };
        }
        function v(t) {
          return yt({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height,
          });
        }
        function y(t) {
          var e = {};
          if (pt())
            try {
              e = t.getBoundingClientRect();
              var n = d(t, "top"),
                i = d(t, "left");
              (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
            } catch (t) {}
          else e = t.getBoundingClientRect();
          var r = {
              left: e.left,
              top: e.top,
              width: e.right - e.left,
              height: e.bottom - e.top,
            },
            s = "HTML" === t.nodeName ? m() : {},
            a = s.width || t.clientWidth || r.right - r.left,
            l = s.height || t.clientHeight || r.bottom - r.top,
            c = t.offsetWidth - a,
            u = t.offsetHeight - l;
          if (c || u) {
            var h = o(t);
            (c -= p(h, "x")), (u -= p(h, "y")), (r.width -= c), (r.height -= u);
          }
          return v(r);
        }
        function b(t, e) {
          var n = pt(),
            i = "HTML" === e.nodeName,
            r = y(t),
            s = y(e),
            l = a(t),
            c = o(e),
            u = parseFloat(c.borderTopWidth, 10),
            h = parseFloat(c.borderLeftWidth, 10),
            d = v({
              top: r.top - s.top - u,
              left: r.left - s.left - h,
              width: r.width,
              height: r.height,
            });
          if (((d.marginTop = 0), (d.marginLeft = 0), !n && i)) {
            var p = parseFloat(c.marginTop, 10),
              g = parseFloat(c.marginLeft, 10);
            (d.top -= u - p),
              (d.bottom -= u - p),
              (d.left -= h - g),
              (d.right -= h - g),
              (d.marginTop = p),
              (d.marginLeft = g);
          }
          return (
            (n ? e.contains(l) : e === l && "BODY" !== l.nodeName) &&
              (d = f(d, e)),
            d
          );
        }
        function _(t) {
          var e = t.ownerDocument.documentElement,
            n = b(t, e),
            i = Math.max(e.clientWidth, window.innerWidth || 0),
            r = Math.max(e.clientHeight, window.innerHeight || 0),
            o = d(e),
            s = d(e, "left");
          return v({
            top: o - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: r,
          });
        }
        function E(t) {
          var e = t.nodeName;
          return (
            "BODY" !== e &&
            "HTML" !== e &&
            ("fixed" === o(t, "position") || E(s(t)))
          );
        }
        function T(t, e, n, i) {
          var r = { top: 0, left: 0 },
            o = h(t, e);
          if ("viewport" === i) r = _(o);
          else {
            var l = void 0;
            "scrollParent" === i
              ? ((l = a(s(e))),
                "BODY" === l.nodeName && (l = t.ownerDocument.documentElement))
              : (l = "window" === i ? t.ownerDocument.documentElement : i);
            var c = b(l, o);
            if ("HTML" !== l.nodeName || E(o)) r = c;
            else {
              var u = m(),
                d = u.height,
                f = u.width;
              (r.top += c.top - c.marginTop),
                (r.bottom = d + c.top),
                (r.left += c.left - c.marginLeft),
                (r.right = f + c.left);
            }
          }
          return (
            (r.left += n), (r.top += n), (r.right -= n), (r.bottom -= n), r
          );
        }
        function w(t) {
          return t.width * t.height;
        }
        function C(t, e, n, i, r) {
          var o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === t.indexOf("auto")) return t;
          var s = T(n, i, o, r),
            a = {
              top: { width: s.width, height: e.top - s.top },
              right: { width: s.right - e.right, height: s.height },
              bottom: { width: s.width, height: s.bottom - e.bottom },
              left: { width: e.left - s.left, height: s.height },
            },
            l = Object.keys(a)
              .map(function (t) {
                return yt({ key: t }, a[t], { area: w(a[t]) });
              })
              .sort(function (t, e) {
                return e.area - t.area;
              }),
            c = l.filter(function (t) {
              var e = t.width,
                i = t.height;
              return e >= n.clientWidth && i >= n.clientHeight;
            }),
            u = c.length > 0 ? c[0].key : l[0].key,
            h = t.split("-")[1];
          return u + (h ? "-" + h : "");
        }
        function S(t, e, n) {
          return b(n, h(e, n));
        }
        function x(t) {
          var e = getComputedStyle(t),
            n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
            i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
          return { width: t.offsetWidth + i, height: t.offsetHeight + n };
        }
        function D(t) {
          var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
          };
          return t.replace(/left|right|bottom|top/g, function (t) {
            return e[t];
          });
        }
        function A(t, e, n) {
          n = n.split("-")[0];
          var i = x(t),
            r = { width: i.width, height: i.height },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
          return (
            (r[s] = e[s] + e[l] / 2 - i[l] / 2),
            (r[a] = n === a ? e[a] - i[c] : e[D(a)]),
            r
          );
        }
        function I(t, e) {
          return Array.prototype.find ? t.find(e) : t.filter(e)[0];
        }
        function O(t, e, n) {
          if (Array.prototype.findIndex)
            return t.findIndex(function (t) {
              return t[e] === n;
            });
          var i = I(t, function (t) {
            return t[e] === n;
          });
          return t.indexOf(i);
        }
        function N(t, e, n) {
          return (
            (void 0 === n ? t : t.slice(0, O(t, "name", n))).forEach(function (
              t
            ) {
              t.function &&
                console.warn(
                  "`modifier.function` is deprecated, use `modifier.fn`!"
                );
              var n = t.function || t.fn;
              t.enabled &&
                r(n) &&
                ((e.offsets.popper = v(e.offsets.popper)),
                (e.offsets.reference = v(e.offsets.reference)),
                (e = n(e, t)));
            }),
            e
          );
        }
        function L() {
          if (!this.state.isDestroyed) {
            var t = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {},
            };
            (t.offsets.reference = S(this.state, this.popper, this.reference)),
              (t.placement = C(
                this.options.placement,
                t.offsets.reference,
                this.popper,
                this.reference,
                this.options.modifiers.flip.boundariesElement,
                this.options.modifiers.flip.padding
              )),
              (t.originalPlacement = t.placement),
              (t.offsets.popper = A(
                this.popper,
                t.offsets.reference,
                t.placement
              )),
              (t.offsets.popper.position = "absolute"),
              (t = N(this.modifiers, t)),
              this.state.isCreated
                ? this.options.onUpdate(t)
                : ((this.state.isCreated = !0), this.options.onCreate(t));
          }
        }
        function P(t, e) {
          return t.some(function (t) {
            var n = t.name;
            return t.enabled && n === e;
          });
        }
        function k(t) {
          for (
            var e = [!1, "ms", "Webkit", "Moz", "O"],
              n = t.charAt(0).toUpperCase() + t.slice(1),
              i = 0;
            i < e.length - 1;
            i++
          ) {
            var r = e[i],
              o = r ? "" + r + n : t;
            if (void 0 !== document.body.style[o]) return o;
          }
          return null;
        }
        function H() {
          return (
            (this.state.isDestroyed = !0),
            P(this.modifiers, "applyStyle") &&
              (this.popper.removeAttribute("x-placement"),
              (this.popper.style.left = ""),
              (this.popper.style.position = ""),
              (this.popper.style.top = ""),
              (this.popper.style[k("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy &&
              this.popper.parentNode.removeChild(this.popper),
            this
          );
        }
        function M(t) {
          var e = t.ownerDocument;
          return e ? e.defaultView : window;
        }
        function R(t, e, n, i) {
          var r = "BODY" === t.nodeName,
            o = r ? t.ownerDocument.defaultView : t;
          o.addEventListener(e, n, { passive: !0 }),
            r || R(a(o.parentNode), e, n, i),
            i.push(o);
        }
        function j(t, e, n, i) {
          (n.updateBound = i),
            M(t).addEventListener("resize", n.updateBound, { passive: !0 });
          var r = a(t);
          return (
            R(r, "scroll", n.updateBound, n.scrollParents),
            (n.scrollElement = r),
            (n.eventsEnabled = !0),
            n
          );
        }
        function W() {
          this.state.eventsEnabled ||
            (this.state = j(
              this.reference,
              this.options,
              this.state,
              this.scheduleUpdate
            ));
        }
        function F(t, e) {
          return (
            M(t).removeEventListener("resize", e.updateBound),
            e.scrollParents.forEach(function (t) {
              t.removeEventListener("scroll", e.updateBound);
            }),
            (e.updateBound = null),
            (e.scrollParents = []),
            (e.scrollElement = null),
            (e.eventsEnabled = !1),
            e
          );
        }
        function B() {
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state = F(this.reference, this.state)));
        }
        function U(t) {
          return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
        }
        function z(t, e) {
          Object.keys(e).forEach(function (n) {
            var i = "";
            -1 !==
              ["width", "height", "top", "right", "bottom", "left"].indexOf(
                n
              ) &&
              U(e[n]) &&
              (i = "px"),
              (t.style[n] = e[n] + i);
          });
        }
        function q(t, e) {
          Object.keys(e).forEach(function (n) {
            !1 !== e[n] ? t.setAttribute(n, e[n]) : t.removeAttribute(n);
          });
        }
        function V(t) {
          return (
            z(t.instance.popper, t.styles),
            q(t.instance.popper, t.attributes),
            t.arrowElement &&
              Object.keys(t.arrowStyles).length &&
              z(t.arrowElement, t.arrowStyles),
            t
          );
        }
        function G(t, e, n, i, r) {
          var o = S(r, e, t),
            s = C(
              n.placement,
              o,
              e,
              t,
              n.modifiers.flip.boundariesElement,
              n.modifiers.flip.padding
            );
          return (
            e.setAttribute("x-placement", s), z(e, { position: "absolute" }), n
          );
        }
        function K(t, e) {
          var n = e.x,
            i = e.y,
            r = t.offsets.popper,
            o = I(t.instance.modifiers, function (t) {
              return "applyStyle" === t.name;
            }).gpuAcceleration;
          void 0 !== o &&
            console.warn(
              "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
            );
          var s = void 0 !== o ? o : e.gpuAcceleration,
            a = l(t.instance.popper),
            c = y(a),
            u = { position: r.position },
            h = {
              left: Math.floor(r.left),
              top: Math.floor(r.top),
              bottom: Math.floor(r.bottom),
              right: Math.floor(r.right),
            },
            d = "bottom" === n ? "top" : "bottom",
            f = "right" === i ? "left" : "right",
            p = k("transform"),
            g = void 0,
            m = void 0;
          if (
            ((m = "bottom" === d ? -c.height + h.bottom : h.top),
            (g = "right" === f ? -c.width + h.right : h.left),
            s && p)
          )
            (u[p] = "translate3d(" + g + "px, " + m + "px, 0)"),
              (u[d] = 0),
              (u[f] = 0),
              (u.willChange = "transform");
          else {
            var v = "bottom" === d ? -1 : 1,
              b = "right" === f ? -1 : 1;
            (u[d] = m * v), (u[f] = g * b), (u.willChange = d + ", " + f);
          }
          var _ = { "x-placement": t.placement };
          return (
            (t.attributes = yt({}, _, t.attributes)),
            (t.styles = yt({}, u, t.styles)),
            (t.arrowStyles = yt({}, t.offsets.arrow, t.arrowStyles)),
            t
          );
        }
        function $(t, e, n) {
          var i = I(t, function (t) {
              return t.name === e;
            }),
            r =
              !!i &&
              t.some(function (t) {
                return t.name === n && t.enabled && t.order < i.order;
              });
          if (!r) {
            var o = "`" + e + "`",
              s = "`" + n + "`";
            console.warn(
              s +
                " modifier is required by " +
                o +
                " modifier in order to work, be sure to include it before " +
                o +
                "!"
            );
          }
          return r;
        }
        function Q(t, e) {
          var n;
          if (!$(t.instance.modifiers, "arrow", "keepTogether")) return t;
          var i = e.element;
          if ("string" == typeof i) {
            if (!(i = t.instance.popper.querySelector(i))) return t;
          } else if (!t.instance.popper.contains(i))
            return (
              console.warn(
                "WARNING: `arrow.element` must be child of its popper element!"
              ),
              t
            );
          var r = t.placement.split("-")[0],
            s = t.offsets,
            a = s.popper,
            l = s.reference,
            c = -1 !== ["left", "right"].indexOf(r),
            u = c ? "height" : "width",
            h = c ? "Top" : "Left",
            d = h.toLowerCase(),
            f = c ? "left" : "top",
            p = c ? "bottom" : "right",
            g = x(i)[u];
          l[p] - g < a[d] && (t.offsets.popper[d] -= a[d] - (l[p] - g)),
            l[d] + g > a[p] && (t.offsets.popper[d] += l[d] + g - a[p]),
            (t.offsets.popper = v(t.offsets.popper));
          var m = l[d] + l[u] / 2 - g / 2,
            y = o(t.instance.popper),
            b = parseFloat(y["margin" + h], 10),
            _ = parseFloat(y["border" + h + "Width"], 10),
            E = m - t.offsets.popper[d] - b - _;
          return (
            (E = Math.max(Math.min(a[u] - g, E), 0)),
            (t.arrowElement = i),
            (t.offsets.arrow =
              ((n = {}), vt(n, d, Math.round(E)), vt(n, f, ""), n)),
            t
          );
        }
        function X(t) {
          return "end" === t ? "start" : "start" === t ? "end" : t;
        }
        function Y(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = _t.indexOf(t),
            i = _t.slice(n + 1).concat(_t.slice(0, n));
          return e ? i.reverse() : i;
        }
        function J(t, e) {
          if (P(t.instance.modifiers, "inner")) return t;
          if (t.flipped && t.placement === t.originalPlacement) return t;
          var n = T(
              t.instance.popper,
              t.instance.reference,
              e.padding,
              e.boundariesElement
            ),
            i = t.placement.split("-")[0],
            r = D(i),
            o = t.placement.split("-")[1] || "",
            s = [];
          switch (e.behavior) {
            case Et.FLIP:
              s = [i, r];
              break;
            case Et.CLOCKWISE:
              s = Y(i);
              break;
            case Et.COUNTERCLOCKWISE:
              s = Y(i, !0);
              break;
            default:
              s = e.behavior;
          }
          return (
            s.forEach(function (a, l) {
              if (i !== a || s.length === l + 1) return t;
              (i = t.placement.split("-")[0]), (r = D(i));
              var c = t.offsets.popper,
                u = t.offsets.reference,
                h = Math.floor,
                d =
                  ("left" === i && h(c.right) > h(u.left)) ||
                  ("right" === i && h(c.left) < h(u.right)) ||
                  ("top" === i && h(c.bottom) > h(u.top)) ||
                  ("bottom" === i && h(c.top) < h(u.bottom)),
                f = h(c.left) < h(n.left),
                p = h(c.right) > h(n.right),
                g = h(c.top) < h(n.top),
                m = h(c.bottom) > h(n.bottom),
                v =
                  ("left" === i && f) ||
                  ("right" === i && p) ||
                  ("top" === i && g) ||
                  ("bottom" === i && m),
                y = -1 !== ["top", "bottom"].indexOf(i),
                b =
                  !!e.flipVariations &&
                  ((y && "start" === o && f) ||
                    (y && "end" === o && p) ||
                    (!y && "start" === o && g) ||
                    (!y && "end" === o && m));
              (d || v || b) &&
                ((t.flipped = !0),
                (d || v) && (i = s[l + 1]),
                b && (o = X(o)),
                (t.placement = i + (o ? "-" + o : "")),
                (t.offsets.popper = yt(
                  {},
                  t.offsets.popper,
                  A(t.instance.popper, t.offsets.reference, t.placement)
                )),
                (t = N(t.instance.modifiers, t, "flip")));
            }),
            t
          );
        }
        function Z(t) {
          var e = t.offsets,
            n = e.popper,
            i = e.reference,
            r = t.placement.split("-")[0],
            o = Math.floor,
            s = -1 !== ["top", "bottom"].indexOf(r),
            a = s ? "right" : "bottom",
            l = s ? "left" : "top",
            c = s ? "width" : "height";
          return (
            n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]),
            n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])),
            t
          );
        }
        function tt(t, e, n, i) {
          var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            o = +r[1],
            s = r[2];
          if (!o) return t;
          if (0 === s.indexOf("%")) {
            var a = void 0;
            switch (s) {
              case "%p":
                a = n;
                break;
              case "%":
              case "%r":
              default:
                a = i;
            }
            return (v(a)[e] / 100) * o;
          }
          return "vh" === s || "vw" === s
            ? (("vh" === s
                ? Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0
                  )
                : Math.max(
                    document.documentElement.clientWidth,
                    window.innerWidth || 0
                  )) /
                100) *
                o
            : o;
        }
        function et(t, e, n, i) {
          var r = [0, 0],
            o = -1 !== ["right", "left"].indexOf(i),
            s = t.split(/(\+|\-)/).map(function (t) {
              return t.trim();
            }),
            a = s.indexOf(
              I(s, function (t) {
                return -1 !== t.search(/,|\s/);
              })
            );
          s[a] &&
            -1 === s[a].indexOf(",") &&
            console.warn(
              "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            );
          var l = /\s*,\s*|\s+/,
            c =
              -1 !== a
                ? [
                    s.slice(0, a).concat([s[a].split(l)[0]]),
                    [s[a].split(l)[1]].concat(s.slice(a + 1)),
                  ]
                : [s];
          return (
            (c = c.map(function (t, i) {
              var r = (1 === i ? !o : o) ? "height" : "width",
                s = !1;
              return t
                .reduce(function (t, e) {
                  return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e)
                    ? ((t[t.length - 1] = e), (s = !0), t)
                    : s
                    ? ((t[t.length - 1] += e), (s = !1), t)
                    : t.concat(e);
                }, [])
                .map(function (t) {
                  return tt(t, r, e, n);
                });
            })),
            c.forEach(function (t, e) {
              t.forEach(function (n, i) {
                U(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1));
              });
            }),
            r
          );
        }
        function nt(t, e) {
          var n = e.offset,
            i = t.placement,
            r = t.offsets,
            o = r.popper,
            s = r.reference,
            a = i.split("-")[0],
            l = void 0;
          return (
            (l = U(+n) ? [+n, 0] : et(n, o, s, a)),
            "left" === a
              ? ((o.top += l[0]), (o.left -= l[1]))
              : "right" === a
              ? ((o.top += l[0]), (o.left += l[1]))
              : "top" === a
              ? ((o.left += l[0]), (o.top -= l[1]))
              : "bottom" === a && ((o.left += l[0]), (o.top += l[1])),
            (t.popper = o),
            t
          );
        }
        function it(t, e) {
          var n = e.boundariesElement || l(t.instance.popper);
          t.instance.reference === n && (n = l(n));
          var i = T(t.instance.popper, t.instance.reference, e.padding, n);
          e.boundaries = i;
          var r = e.priority,
            o = t.offsets.popper,
            s = {
              primary: function (t) {
                var n = o[t];
                return (
                  o[t] < i[t] &&
                    !e.escapeWithReference &&
                    (n = Math.max(o[t], i[t])),
                  vt({}, t, n)
                );
              },
              secondary: function (t) {
                var n = "right" === t ? "left" : "top",
                  r = o[n];
                return (
                  o[t] > i[t] &&
                    !e.escapeWithReference &&
                    (r = Math.min(
                      o[n],
                      i[t] - ("right" === t ? o.width : o.height)
                    )),
                  vt({}, n, r)
                );
              },
            };
          return (
            r.forEach(function (t) {
              var e =
                -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
              o = yt({}, o, s[e](t));
            }),
            (t.offsets.popper = o),
            t
          );
        }
        function rt(t) {
          var e = t.placement,
            n = e.split("-")[0],
            i = e.split("-")[1];
          if (i) {
            var r = t.offsets,
              o = r.reference,
              s = r.popper,
              a = -1 !== ["bottom", "top"].indexOf(n),
              l = a ? "left" : "top",
              c = a ? "width" : "height",
              u = {
                start: vt({}, l, o[l]),
                end: vt({}, l, o[l] + o[c] - s[c]),
              };
            t.offsets.popper = yt({}, s, u[i]);
          }
          return t;
        }
        function ot(t) {
          if (!$(t.instance.modifiers, "hide", "preventOverflow")) return t;
          var e = t.offsets.reference,
            n = I(t.instance.modifiers, function (t) {
              return "preventOverflow" === t.name;
            }).boundaries;
          if (
            e.bottom < n.top ||
            e.left > n.right ||
            e.top > n.bottom ||
            e.right < n.left
          ) {
            if (!0 === t.hide) return t;
            (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
          } else {
            if (!1 === t.hide) return t;
            (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
          }
          return t;
        }
        function st(t) {
          var e = t.placement,
            n = e.split("-")[0],
            i = t.offsets,
            r = i.popper,
            o = i.reference,
            s = -1 !== ["left", "right"].indexOf(n),
            a = -1 === ["top", "left"].indexOf(n);
          return (
            (r[s ? "left" : "top"] =
              o[n] - (a ? r[s ? "width" : "height"] : 0)),
            (t.placement = D(e)),
            (t.offsets.popper = v(r)),
            t
          );
        }
        for (
          var at =
              "undefined" != typeof window && "undefined" != typeof document,
            lt = ["Edge", "Trident", "Firefox"],
            ct = 0,
            ut = 0;
          ut < lt.length;
          ut += 1
        )
          if (at && navigator.userAgent.indexOf(lt[ut]) >= 0) {
            ct = 1;
            break;
          }
        var ht = at && window.Promise,
          dt = ht ? n : i,
          ft = void 0,
          pt = function () {
            return (
              void 0 === ft &&
                (ft = -1 !== navigator.appVersion.indexOf("MSIE 10")),
              ft
            );
          },
          gt = function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          },
          mt = (function () {
            function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(t, i.key, i);
              }
            }
            return function (e, n, i) {
              return n && t(e.prototype, n), i && t(e, i), e;
            };
          })(),
          vt = function (t, e, n) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          },
          yt =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
              }
              return t;
            },
          bt = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start",
          ],
          _t = bt.slice(3),
          Et = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise",
          },
          Tt = {
            shift: { order: 100, enabled: !0, fn: rt },
            offset: { order: 200, enabled: !0, fn: nt, offset: 0 },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: it,
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent",
            },
            keepTogether: { order: 400, enabled: !0, fn: Z },
            arrow: { order: 500, enabled: !0, fn: Q, element: "[x-arrow]" },
            flip: {
              order: 600,
              enabled: !0,
              fn: J,
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport",
            },
            inner: { order: 700, enabled: !1, fn: st },
            hide: { order: 800, enabled: !0, fn: ot },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: K,
              gpuAcceleration: !0,
              x: "bottom",
              y: "right",
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: V,
              onLoad: G,
              gpuAcceleration: void 0,
            },
          },
          wt = {
            placement: "bottom",
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: Tt,
          },
          Ct = (function () {
            function t(e, n) {
              var i = this,
                o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              gt(this, t),
                (this.scheduleUpdate = function () {
                  return requestAnimationFrame(i.update);
                }),
                (this.update = dt(this.update.bind(this))),
                (this.options = yt({}, t.Defaults, o)),
                (this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: [],
                }),
                (this.reference = e && e.jquery ? e[0] : e),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(yt({}, t.Defaults.modifiers, o.modifiers)).forEach(
                  function (e) {
                    i.options.modifiers[e] = yt(
                      {},
                      t.Defaults.modifiers[e] || {},
                      o.modifiers ? o.modifiers[e] : {}
                    );
                  }
                ),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function (t) {
                    return yt({ name: t }, i.options.modifiers[t]);
                  })
                  .sort(function (t, e) {
                    return t.order - e.order;
                  })),
                this.modifiers.forEach(function (t) {
                  t.enabled &&
                    r(t.onLoad) &&
                    t.onLoad(i.reference, i.popper, i.options, t, i.state);
                }),
                this.update();
              var s = this.options.eventsEnabled;
              s && this.enableEventListeners(), (this.state.eventsEnabled = s);
            }
            return (
              mt(t, [
                {
                  key: "update",
                  value: function () {
                    return L.call(this);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    return H.call(this);
                  },
                },
                {
                  key: "enableEventListeners",
                  value: function () {
                    return W.call(this);
                  },
                },
                {
                  key: "disableEventListeners",
                  value: function () {
                    return B.call(this);
                  },
                },
              ]),
              t
            );
          })();
        (Ct.Utils = ("undefined" != typeof window ? window : t).PopperUtils),
          (Ct.placements = bt),
          (Ct.Defaults = wt),
          (e.default = Ct);
      }.call(e, n(12));
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    "use strict";
    var i = n(14);
    (0,
    (function (t) {
      return t && t.__esModule ? t : { default: t };
    })(i).default)().render(document.querySelectorAll(".timeago"));
  },
  function (t, e) {
    !(function (e, n) {
      "object" == typeof t && t.exports
        ? ((t.exports = n()), (t.exports.default = t.exports))
        : (e.timeago = n());
    })("undefined" != typeof window ? window : this, function () {
      function t(t) {
        return t instanceof Date
          ? t
          : isNaN(t)
          ? /^\d+$/.test(t)
            ? new Date(e(t))
            : ((t = (t || "")
                .trim()
                .replace(/\.\d+/, "")
                .replace(/-/, "/")
                .replace(/-/, "/")
                .replace(/(\d)T(\d)/, "$1 $2")
                .replace(/Z/, " UTC")
                .replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2")),
              new Date(t))
          : new Date(e(t));
      }
      function e(t) {
        return parseInt(t);
      }
      function n(t, n, i) {
        n = d[n] ? n : d[i] ? i : "en";
        for (
          var r = 0, o = t < 0 ? 1 : 0, s = (t = Math.abs(t));
          t >= f[r] && r < p;
          r++
        )
          t /= f[r];
        return (
          (t = e(t)),
          (r *= 2),
          t > (0 === r ? 9 : 1) && (r += 1),
          d[n](t, r, s)[o].replace("%s", t)
        );
      }
      function i(e, n) {
        return ((n = n ? t(n) : new Date()) - t(e)) / 1e3;
      }
      function r(t) {
        for (var e = 1, n = 0, i = Math.abs(t); t >= f[n] && n < p; n++)
          (t /= f[n]), (e *= f[n]);
        return (i %= e), (i = i ? e - i : e), Math.ceil(i);
      }
      function o(t) {
        return s(t, "data-timeago") || s(t, "datetime");
      }
      function s(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t.attr ? t.attr(e) : void 0;
      }
      function a(t, e) {
        return t.setAttribute
          ? t.setAttribute(g, e)
          : t.attr
          ? t.attr(g, e)
          : void 0;
      }
      function l(t, e) {
        (this.nowDate = t), (this.defaultLocale = e || "en");
      }
      function c(t, e) {
        return new l(t, e);
      }
      var u = "second_minute_hour_day_week_month_year".split("_"),
        h = "秒_分钟_小时_天_周_月_年".split("_"),
        d = {
          en: function (t, e) {
            if (0 === e) return ["just now", "right now"];
            var n = u[parseInt(e / 2)];
            return (
              t > 1 && (n += "s"), [t + " " + n + " ago", "in " + t + " " + n]
            );
          },
          zh_CN: function (t, e) {
            if (0 === e) return ["刚刚", "片刻后"];
            var n = h[parseInt(e / 2)];
            return [t + n + "前", t + n + "后"];
          },
        },
        f = [60, 60, 24, 7, 365 / 7 / 12, 12],
        p = 6,
        g = "data-tid",
        m = {};
      return (
        (l.prototype.doRender = function (t, e, o) {
          var s,
            l = i(e, this.nowDate),
            c = this;
          (t.innerHTML = n(l, o, this.defaultLocale)),
            (m[
              (s = setTimeout(function () {
                c.doRender(t, e, o), delete m[s];
              }, Math.min(1e3 * r(l), 2147483647)))
            ] = 0),
            a(t, s);
        }),
        (l.prototype.format = function (t, e) {
          return n(i(t, this.nowDate), e, this.defaultLocale);
        }),
        (l.prototype.render = function (t, e) {
          void 0 === t.length && (t = [t]);
          for (var n = 0, i = t.length; n < i; n++)
            this.doRender(t[n], o(t[n]), e);
        }),
        (l.prototype.setLocale = function (t) {
          this.defaultLocale = t;
        }),
        (c.register = function (t, e) {
          d[t] = e;
        }),
        (c.cancel = function (t) {
          var e;
          if (t) (e = s(t, g)) && (clearTimeout(e), delete m[e]);
          else {
            for (e in m) clearTimeout(e);
            m = {};
          }
        }),
        c
      );
    });
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      var e = n(16);
      !(function (t) {
        t && t.__esModule;
      })(e),
        t(window).on("load", function () {
          window.dispatchEvent(new Event("resize"));
        });
    }).call(e, n(2));
  },
  function (t, e, n) {
    var i, r, o;
    !(function (s, a) {
      (r = [n(1), n(21), n(23), n(24), n(25), n(26), n(27)]),
        (i = a),
        void 0 !== (o = "function" == typeof i ? i.apply(e, r) : i) &&
          (t.exports = o);
    })(window, function (t) {
      return t;
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (o, s) {
      "use strict";
      (i = s),
        void 0 !== (r = "function" == typeof i ? i.call(e, n, e, t) : i) &&
          (t.exports = r);
    })(window, function () {
      "use strict";
      var t = (function () {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
          var i = e[n],
            r = i + "MatchesSelector";
          if (t[r]) return r;
        }
      })();
      return function (e, n) {
        return e[t](n);
      };
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (o, s) {
      (i = [n(4)]),
        void 0 !==
          (r = function (t) {
            return s(o, t);
          }.apply(e, i)) && (t.exports = r);
    })(window, function (t, e) {
      "use strict";
      function n(t, e) {
        (this.element = t), (this.parent = e), this.create();
      }
      var i = n.prototype;
      return (
        (i.create = function () {
          (this.element.style.position = "absolute"),
            this.element.setAttribute("aria-selected", "false"),
            (this.x = 0),
            (this.shift = 0);
        }),
        (i.destroy = function () {
          this.element.style.position = "";
          var t = this.parent.originSide;
          this.element.removeAttribute("aria-selected"),
            (this.element.style[t] = "");
        }),
        (i.getSize = function () {
          this.size = e(this.element);
        }),
        (i.setPosition = function (t) {
          (this.x = t), this.updateTarget(), this.renderPosition(t);
        }),
        (i.updateTarget = i.setDefaultTarget =
          function () {
            var t =
              "left" == this.parent.originSide ? "marginLeft" : "marginRight";
            this.target =
              this.x + this.size[t] + this.size.width * this.parent.cellAlign;
          }),
        (i.renderPosition = function (t) {
          var e = this.parent.originSide;
          this.element.style[e] = this.parent.getPositionValue(t);
        }),
        (i.wrapShift = function (t) {
          (this.shift = t),
            this.renderPosition(this.x + this.parent.slideableWidth * t);
        }),
        (i.remove = function () {
          this.element.parentNode.removeChild(this.element);
        }),
        n
      );
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (o, s) {
      (i = s),
        void 0 !== (r = "function" == typeof i ? i.call(e, n, e, t) : i) &&
          (t.exports = r);
    })(window, function () {
      "use strict";
      function t(t) {
        (this.parent = t),
          (this.isOriginLeft = "left" == t.originSide),
          (this.cells = []),
          (this.outerWidth = 0),
          (this.height = 0);
      }
      var e = t.prototype;
      return (
        (e.addCell = function (t) {
          if (
            (this.cells.push(t),
            (this.outerWidth += t.size.outerWidth),
            (this.height = Math.max(t.size.outerHeight, this.height)),
            1 == this.cells.length)
          ) {
            this.x = t.x;
            var e = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = t.size[e];
          }
        }),
        (e.updateTarget = function () {
          var t = this.isOriginLeft ? "marginRight" : "marginLeft",
            e = this.getLastCell(),
            n = e ? e.size[t] : 0,
            i = this.outerWidth - (this.firstMargin + n);
          this.target = this.x + this.firstMargin + i * this.parent.cellAlign;
        }),
        (e.getLastCell = function () {
          return this.cells[this.cells.length - 1];
        }),
        (e.select = function () {
          this.changeSelected(!0);
        }),
        (e.unselect = function () {
          this.changeSelected(!1);
        }),
        (e.changeSelected = function (t) {
          var e = t ? "add" : "remove";
          this.cells.forEach(function (n) {
            n.element.classList[e]("is-selected"),
              n.element.setAttribute("aria-selected", t.toString());
          });
        }),
        (e.getCellElements = function () {
          return this.cells.map(function (t) {
            return t.element;
          });
        }),
        t
      );
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (o, s) {
      (i = [n(0)]),
        void 0 !==
          (r = function (t) {
            return s(o, t);
          }.apply(e, i)) && (t.exports = r);
    })(window, function (t, e) {
      "use strict";
      var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
        i = 0;
      n ||
        (n = function (t) {
          var e = new Date().getTime(),
            n = Math.max(0, 16 - (e - i)),
            r = setTimeout(t, n);
          return (i = e + n), r;
        });
      var r = {};
      (r.startAnimation = function () {
        this.isAnimating ||
          ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
      }),
        (r.animate = function () {
          this.applyDragForce(), this.applySelectedAttraction();
          var t = this.x;
          if (
            (this.integratePhysics(),
            this.positionSlider(),
            this.settle(t),
            this.isAnimating)
          ) {
            var e = this;
            n(function () {
              e.animate();
            });
          }
        });
      var o = (function () {
        return "string" == typeof document.documentElement.style.transform
          ? "transform"
          : "WebkitTransform";
      })();
      return (
        (r.positionSlider = function () {
          var t = this.x;
          this.options.wrapAround &&
            this.cells.length > 1 &&
            ((t = e.modulo(t, this.slideableWidth)),
            (t -= this.slideableWidth),
            this.shiftWrapCells(t)),
            (t += this.cursorPosition),
            (t = this.options.rightToLeft && o ? -t : t);
          var n = this.getPositionValue(t);
          this.slider.style[o] = this.isAnimating
            ? "translate3d(" + n + ",0,0)"
            : "translateX(" + n + ")";
          var i = this.slides[0];
          if (i) {
            var r = -this.x - i.target,
              s = r / this.slidesWidth;
            this.dispatchEvent("scroll", null, [s, r]);
          }
        }),
        (r.positionSliderAtSelected = function () {
          this.cells.length &&
            ((this.x = -this.selectedSlide.target), this.positionSlider());
        }),
        (r.getPositionValue = function (t) {
          return this.options.percentPosition
            ? 0.01 * Math.round((t / this.size.innerWidth) * 1e4) + "%"
            : Math.round(t) + "px";
        }),
        (r.settle = function (t) {
          this.isPointerDown ||
            Math.round(100 * this.x) != Math.round(100 * t) ||
            this.restingFrames++,
            this.restingFrames > 2 &&
              ((this.isAnimating = !1),
              delete this.isFreeScrolling,
              this.positionSlider(),
              this.dispatchEvent("settle"));
        }),
        (r.shiftWrapCells = function (t) {
          var e = this.cursorPosition + t;
          this._shiftCells(this.beforeShiftCells, e, -1);
          var n =
            this.size.innerWidth -
            (t + this.slideableWidth + this.cursorPosition);
          this._shiftCells(this.afterShiftCells, n, 1);
        }),
        (r._shiftCells = function (t, e, n) {
          for (var i = 0; i < t.length; i++) {
            var r = t[i],
              o = e > 0 ? n : 0;
            r.wrapShift(o), (e -= r.size.outerWidth);
          }
        }),
        (r._unshiftCells = function (t) {
          if (t && t.length)
            for (var e = 0; e < t.length; e++) t[e].wrapShift(0);
        }),
        (r.integratePhysics = function () {
          (this.x += this.velocity),
            (this.velocity *= this.getFrictionFactor());
        }),
        (r.applyForce = function (t) {
          this.velocity += t;
        }),
        (r.getFrictionFactor = function () {
          return (
            1 -
            this.options[
              this.isFreeScrolling ? "freeScrollFriction" : "friction"
            ]
          );
        }),
        (r.getRestingPosition = function () {
          return this.x + this.velocity / (1 - this.getFrictionFactor());
        }),
        (r.applyDragForce = function () {
          if (this.isPointerDown) {
            var t = this.dragX - this.x,
              e = t - this.velocity;
            this.applyForce(e);
          }
        }),
        (r.applySelectedAttraction = function () {
          if (
            !this.isPointerDown &&
            !this.isFreeScrolling &&
            this.cells.length
          ) {
            var t = -1 * this.selectedSlide.target - this.x,
              e = t * this.options.selectedAttraction;
            this.applyForce(e);
          }
        }),
        r
      );
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (o, s) {
      (i = [n(1), n(22), n(0)]),
        void 0 !==
          (r = function (t, e, n) {
            return s(o, t, e, n);
          }.apply(e, i)) && (t.exports = r);
    })(window, function (t, e, n, i) {
      "use strict";
      function r(t) {
        var e = "touchstart" == t.type,
          n = "touch" == t.pointerType,
          i = h[t.target.nodeName];
        return e || n || i;
      }
      function o() {
        return { x: t.pageXOffset, y: t.pageYOffset };
      }
      i.extend(e.defaults, { draggable: !0, dragThreshold: 3 }),
        e.createMethods.push("_createDrag");
      var s = e.prototype;
      i.extend(s, n.prototype), (s._touchActionValue = "pan-y");
      var a = "createTouch" in document,
        l = !1;
      (s._createDrag = function () {
        this.on("activate", this.bindDrag),
          this.on("uiChange", this._uiChangeDrag),
          this.on("childUIPointerDown", this._childUIPointerDownDrag),
          this.on("deactivate", this.unbindDrag),
          a &&
            !l &&
            (t.addEventListener("touchmove", function () {}), (l = !0));
      }),
        (s.bindDrag = function () {
          this.options.draggable &&
            !this.isDragBound &&
            (this.element.classList.add("is-draggable"),
            (this.handles = [this.viewport]),
            this.bindHandles(),
            (this.isDragBound = !0));
        }),
        (s.unbindDrag = function () {
          this.isDragBound &&
            (this.element.classList.remove("is-draggable"),
            this.unbindHandles(),
            delete this.isDragBound);
        }),
        (s._uiChangeDrag = function () {
          delete this.isFreeScrolling;
        }),
        (s._childUIPointerDownDrag = function (t) {
          t.preventDefault(), this.pointerDownFocus(t);
        });
      var c = { TEXTAREA: !0, INPUT: !0, OPTION: !0 },
        u = {
          radio: !0,
          checkbox: !0,
          button: !0,
          submit: !0,
          image: !0,
          file: !0,
        };
      (s.pointerDown = function (e, n) {
        if (c[e.target.nodeName] && !u[e.target.type])
          return (this.isPointerDown = !1), void delete this.pointerIdentifier;
        this._dragPointerDown(e, n);
        var i = document.activeElement;
        i && i.blur && i != this.element && i != document.body && i.blur(),
          this.pointerDownFocus(e),
          (this.dragX = this.x),
          this.viewport.classList.add("is-pointer-down"),
          this._bindPostStartEvents(e),
          (this.pointerDownScroll = o()),
          t.addEventListener("scroll", this),
          this.dispatchEvent("pointerDown", e, [n]);
      }),
        (s.pointerDownFocus = function (e) {
          var n = r(e);
          if (this.options.accessibility && !n) {
            var i = t.pageYOffset;
            this.element.focus(),
              t.pageYOffset != i && t.scrollTo(t.pageXOffset, i);
          }
        });
      var h = { INPUT: !0, SELECT: !0 };
      return (
        (s.canPreventDefaultOnPointerDown = function (t) {
          return !r(t);
        }),
        (s.hasDragStarted = function (t) {
          return Math.abs(t.x) > this.options.dragThreshold;
        }),
        (s.pointerUp = function (t, e) {
          delete this.isTouchScrolling,
            this.viewport.classList.remove("is-pointer-down"),
            this.dispatchEvent("pointerUp", t, [e]),
            this._dragPointerUp(t, e);
        }),
        (s.pointerDone = function () {
          t.removeEventListener("scroll", this), delete this.pointerDownScroll;
        }),
        (s.dragStart = function (e, n) {
          (this.dragStartPosition = this.x),
            this.startAnimation(),
            t.removeEventListener("scroll", this),
            this.dispatchEvent("dragStart", e, [n]);
        }),
        (s.pointerMove = function (t, e) {
          var n = this._dragPointerMove(t, e);
          this.dispatchEvent("pointerMove", t, [e, n]), this._dragMove(t, e, n);
        }),
        (s.dragMove = function (t, e, n) {
          t.preventDefault(), (this.previousDragX = this.dragX);
          var i = this.options.rightToLeft ? -1 : 1,
            r = this.dragStartPosition + n.x * i;
          if (!this.options.wrapAround && this.slides.length) {
            var o = Math.max(-this.slides[0].target, this.dragStartPosition);
            r = r > o ? 0.5 * (r + o) : r;
            var s = Math.min(
              -this.getLastSlide().target,
              this.dragStartPosition
            );
            r = r < s ? 0.5 * (r + s) : r;
          }
          (this.dragX = r),
            (this.dragMoveTime = new Date()),
            this.dispatchEvent("dragMove", t, [e, n]);
        }),
        (s.dragEnd = function (t, e) {
          this.options.freeScroll && (this.isFreeScrolling = !0);
          var n = this.dragEndRestingSelect();
          if (this.options.freeScroll && !this.options.wrapAround) {
            var i = this.getRestingPosition();
            this.isFreeScrolling =
              -i > this.slides[0].target && -i < this.getLastSlide().target;
          } else
            this.options.freeScroll ||
              n != this.selectedIndex ||
              (n += this.dragEndBoostSelect());
          delete this.previousDragX,
            (this.isDragSelect = this.options.wrapAround),
            this.select(n),
            delete this.isDragSelect,
            this.dispatchEvent("dragEnd", t, [e]);
        }),
        (s.dragEndRestingSelect = function () {
          var t = this.getRestingPosition(),
            e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
            n = this._getClosestResting(t, e, 1),
            i = this._getClosestResting(t, e, -1);
          return n.distance < i.distance ? n.index : i.index;
        }),
        (s._getClosestResting = function (t, e, n) {
          for (
            var i = this.selectedIndex,
              r = 1 / 0,
              o =
                this.options.contain && !this.options.wrapAround
                  ? function (t, e) {
                      return t <= e;
                    }
                  : function (t, e) {
                      return t < e;
                    };
            o(e, r) &&
            ((i += n), (r = e), null !== (e = this.getSlideDistance(-t, i)));

          )
            e = Math.abs(e);
          return { distance: r, index: i - n };
        }),
        (s.getSlideDistance = function (t, e) {
          var n = this.slides.length,
            r = this.options.wrapAround && n > 1,
            o = r ? i.modulo(e, n) : e,
            s = this.slides[o];
          if (!s) return null;
          var a = r ? this.slideableWidth * Math.floor(e / n) : 0;
          return t - (s.target + a);
        }),
        (s.dragEndBoostSelect = function () {
          if (
            void 0 === this.previousDragX ||
            !this.dragMoveTime ||
            new Date() - this.dragMoveTime > 100
          )
            return 0;
          var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
            e = this.previousDragX - this.dragX;
          return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0;
        }),
        (s.staticClick = function (t, e) {
          var n = this.getParentCell(t.target),
            i = n && n.element,
            r = n && this.cells.indexOf(n);
          this.dispatchEvent("staticClick", t, [e, i, r]);
        }),
        (s.onscroll = function () {
          var t = o(),
            e = this.pointerDownScroll.x - t.x,
            n = this.pointerDownScroll.y - t.y;
          (Math.abs(e) > 3 || Math.abs(n) > 3) && this._pointerDone();
        }),
        e
      );
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (o, s) {
      (i = [n(5)]),
        void 0 !==
          (r = function (t) {
            return s(o, t);
          }.apply(e, i)) && (t.exports = r);
    })(window, function (t, e) {
      "use strict";
      function n() {}
      var i = (n.prototype = Object.create(e.prototype));
      return (
        (i.bindHandles = function () {
          this._bindHandles(!0);
        }),
        (i.unbindHandles = function () {
          this._bindHandles(!1);
        }),
        (i._bindHandles = function (e) {
          e = void 0 === e || !!e;
          for (
            var n = e ? "addEventListener" : "removeEventListener", i = 0;
            i < this.handles.length;
            i++
          ) {
            var r = this.handles[i];
            this._bindStartEvent(r, e),
              r[n]("click", this),
              t.PointerEvent &&
                (r.style.touchAction = e ? this._touchActionValue : "");
          }
        }),
        (i._touchActionValue = "none"),
        (i.pointerDown = function (t, e) {
          if ("INPUT" == t.target.nodeName && "range" == t.target.type)
            return (
              (this.isPointerDown = !1), void delete this.pointerIdentifier
            );
          this._dragPointerDown(t, e);
          var n = document.activeElement;
          n && n.blur && n.blur(),
            this._bindPostStartEvents(t),
            this.emitEvent("pointerDown", [t, e]);
        }),
        (i._dragPointerDown = function (t, n) {
          (this.pointerDownPoint = e.getPointerPoint(n)),
            this.canPreventDefaultOnPointerDown(t, n) && t.preventDefault();
        }),
        (i.canPreventDefaultOnPointerDown = function (t) {
          return "SELECT" != t.target.nodeName;
        }),
        (i.pointerMove = function (t, e) {
          var n = this._dragPointerMove(t, e);
          this.emitEvent("pointerMove", [t, e, n]), this._dragMove(t, e, n);
        }),
        (i._dragPointerMove = function (t, n) {
          var i = e.getPointerPoint(n),
            r = {
              x: i.x - this.pointerDownPoint.x,
              y: i.y - this.pointerDownPoint.y,
            };
          return (
            !this.isDragging && this.hasDragStarted(r) && this._dragStart(t, n),
            r
          );
        }),
        (i.hasDragStarted = function (t) {
          return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
        }),
        (i.pointerUp = function (t, e) {
          this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e);
        }),
        (i._dragPointerUp = function (t, e) {
          this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
        }),
        (i._dragStart = function (t, n) {
          (this.isDragging = !0),
            (this.dragStartPoint = e.getPointerPoint(n)),
            (this.isPreventingClicks = !0),
            this.dragStart(t, n);
        }),
        (i.dragStart = function (t, e) {
          this.emitEvent("dragStart", [t, e]);
        }),
        (i._dragMove = function (t, e, n) {
          this.isDragging && this.dragMove(t, e, n);
        }),
        (i.dragMove = function (t, e, n) {
          t.preventDefault(), this.emitEvent("dragMove", [t, e, n]);
        }),
        (i._dragEnd = function (t, e) {
          (this.isDragging = !1),
            setTimeout(
              function () {
                delete this.isPreventingClicks;
              }.bind(this)
            ),
            this.dragEnd(t, e);
        }),
        (i.dragEnd = function (t, e) {
          this.emitEvent("dragEnd", [t, e]);
        }),
        (i.onclick = function (t) {
          this.isPreventingClicks && t.preventDefault();
        }),
        (i._staticClick = function (t, e) {
          if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
            var n = t.target.nodeName;
            ("INPUT" != n && "TEXTAREA" != n) || t.target.focus(),
              this.staticClick(t, e),
              "mouseup" != t.type &&
                ((this.isIgnoringMouseUp = !0),
                setTimeout(
                  function () {
                    delete this.isIgnoringMouseUp;
                  }.bind(this),
                  400
                ));
          }
        }),
        (i.staticClick = function (t, e) {
          this.emitEvent("staticClick", [t, e]);
        }),
        (n.getPointerPoint = e.getPointerPoint),
        n
      );
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (o, s) {
      (i = [n(1), n(6), n(0)]),
        void 0 !==
          (r = function (t, e, n) {
            return s(o, t, e, n);
          }.apply(e, i)) && (t.exports = r);
    })(window, function (t, e, n, i) {
      "use strict";
      function r(t, e) {
        (this.direction = t), (this.parent = e), this._create();
      }
      function o(t) {
        return "string" == typeof t
          ? t
          : "M " +
              t.x0 +
              ",50 L " +
              t.x1 +
              "," +
              (t.y1 + 50) +
              " L " +
              t.x2 +
              "," +
              (t.y2 + 50) +
              " L " +
              t.x3 +
              ",50  L " +
              t.x2 +
              "," +
              (50 - t.y2) +
              " L " +
              t.x1 +
              "," +
              (50 - t.y1) +
              " Z";
      }
      var s = "http://www.w3.org/2000/svg";
      (r.prototype = new n()),
        (r.prototype._create = function () {
          (this.isEnabled = !0), (this.isPrevious = -1 == this.direction);
          var t = this.parent.options.rightToLeft ? 1 : -1;
          this.isLeft = this.direction == t;
          var e = (this.element = document.createElement("button"));
          (e.className = "flickity-prev-next-button"),
            (e.className += this.isPrevious ? " previous" : " next"),
            e.setAttribute("type", "button"),
            this.disable(),
            e.setAttribute("aria-label", this.isPrevious ? "previous" : "next");
          var n = this.createSVG();
          e.appendChild(n),
            this.on("tap", this.onTap),
            this.parent.on("select", this.update.bind(this)),
            this.on(
              "pointerDown",
              this.parent.childUIPointerDown.bind(this.parent)
            );
        }),
        (r.prototype.activate = function () {
          this.bindTap(this.element),
            this.element.addEventListener("click", this),
            this.parent.element.appendChild(this.element);
        }),
        (r.prototype.deactivate = function () {
          this.parent.element.removeChild(this.element),
            n.prototype.destroy.call(this),
            this.element.removeEventListener("click", this);
        }),
        (r.prototype.createSVG = function () {
          var t = document.createElementNS(s, "svg");
          t.setAttribute("viewBox", "0 0 100 100");
          var e = document.createElementNS(s, "path"),
            n = o(this.parent.options.arrowShape);
          return (
            e.setAttribute("d", n),
            e.setAttribute("class", "arrow"),
            this.isLeft ||
              e.setAttribute("transform", "translate(100, 100) rotate(180) "),
            t.appendChild(e),
            t
          );
        }),
        (r.prototype.onTap = function () {
          if (this.isEnabled) {
            this.parent.uiChange();
            var t = this.isPrevious ? "previous" : "next";
            this.parent[t]();
          }
        }),
        (r.prototype.handleEvent = i.handleEvent),
        (r.prototype.onclick = function () {
          var t = document.activeElement;
          t && t == this.element && this.onTap();
        }),
        (r.prototype.enable = function () {
          this.isEnabled ||
            ((this.element.disabled = !1), (this.isEnabled = !0));
        }),
        (r.prototype.disable = function () {
          this.isEnabled &&
            ((this.element.disabled = !0), (this.isEnabled = !1));
        }),
        (r.prototype.update = function () {
          var t = this.parent.slides;
          if (this.parent.options.wrapAround && t.length > 1)
            return void this.enable();
          var e = t.length ? t.length - 1 : 0,
            n = this.isPrevious ? 0 : e;
          this[this.parent.selectedIndex == n ? "disable" : "enable"]();
        }),
        (r.prototype.destroy = function () {
          this.deactivate();
        }),
        i.extend(e.defaults, {
          prevNextButtons: !0,
          arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 },
        }),
        e.createMethods.push("_createPrevNextButtons");
      var a = e.prototype;
      return (
        (a._createPrevNextButtons = function () {
          this.options.prevNextButtons &&
            ((this.prevButton = new r(-1, this)),
            (this.nextButton = new r(1, this)),
            this.on("activate", this.activatePrevNextButtons));
        }),
        (a.activatePrevNextButtons = function () {
          this.prevButton.activate(),
            this.nextButton.activate(),
            this.on("deactivate", this.deactivatePrevNextButtons);
        }),
        (a.deactivatePrevNextButtons = function () {
          this.prevButton.deactivate(),
            this.nextButton.deactivate(),
            this.off("deactivate", this.deactivatePrevNextButtons);
        }),
        (e.PrevNextButton = r),
        e
      );
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (o, s) {
      (i = [n(1), n(6), n(0)]),
        void 0 !==
          (r = function (t, e, n) {
            return s(o, t, e, n);
          }.apply(e, i)) && (t.exports = r);
    })(window, function (t, e, n, i) {
      "use strict";
      function r(t) {
        (this.parent = t), this._create();
      }
      (r.prototype = new n()),
        (r.prototype._create = function () {
          (this.holder = document.createElement("ol")),
            (this.holder.className = "flickity-page-dots"),
            (this.dots = []),
            this.on("tap", this.onTap),
            this.on(
              "pointerDown",
              this.parent.childUIPointerDown.bind(this.parent)
            );
        }),
        (r.prototype.activate = function () {
          this.setDots(),
            this.bindTap(this.holder),
            this.parent.element.appendChild(this.holder);
        }),
        (r.prototype.deactivate = function () {
          this.parent.element.removeChild(this.holder),
            n.prototype.destroy.call(this);
        }),
        (r.prototype.setDots = function () {
          var t = this.parent.slides.length - this.dots.length;
          t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t);
        }),
        (r.prototype.addDots = function (t) {
          for (
            var e = document.createDocumentFragment(),
              n = [],
              i = this.dots.length,
              r = i + t,
              o = i;
            o < r;
            o++
          ) {
            var s = document.createElement("li");
            (s.className = "dot"),
              s.setAttribute("aria-label", "Page dot " + (o + 1)),
              e.appendChild(s),
              n.push(s);
          }
          this.holder.appendChild(e), (this.dots = this.dots.concat(n));
        }),
        (r.prototype.removeDots = function (t) {
          this.dots.splice(this.dots.length - t, t).forEach(function (t) {
            this.holder.removeChild(t);
          }, this);
        }),
        (r.prototype.updateSelected = function () {
          this.selectedDot &&
            ((this.selectedDot.className = "dot"),
            this.selectedDot.removeAttribute("aria-current")),
            this.dots.length &&
              ((this.selectedDot = this.dots[this.parent.selectedIndex]),
              (this.selectedDot.className = "dot is-selected"),
              this.selectedDot.setAttribute("aria-current", "step"));
        }),
        (r.prototype.onTap = function (t) {
          var e = t.target;
          if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var n = this.dots.indexOf(e);
            this.parent.select(n);
          }
        }),
        (r.prototype.destroy = function () {
          this.deactivate();
        }),
        (e.PageDots = r),
        i.extend(e.defaults, { pageDots: !0 }),
        e.createMethods.push("_createPageDots");
      var o = e.prototype;
      return (
        (o._createPageDots = function () {
          this.options.pageDots &&
            ((this.pageDots = new r(this)),
            this.on("activate", this.activatePageDots),
            this.on("select", this.updateSelectedPageDots),
            this.on("cellChange", this.updatePageDots),
            this.on("resize", this.updatePageDots),
            this.on("deactivate", this.deactivatePageDots));
        }),
        (o.activatePageDots = function () {
          this.pageDots.activate();
        }),
        (o.updateSelectedPageDots = function () {
          this.pageDots.updateSelected();
        }),
        (o.updatePageDots = function () {
          this.pageDots.setDots();
        }),
        (o.deactivatePageDots = function () {
          this.pageDots.deactivate();
        }),
        (e.PageDots = r),
        e
      );
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (o, s) {
      (i = [n(3), n(0), n(1)]),
        void 0 !==
          (r = function (t, e, n) {
            return s(t, e, n);
          }.apply(e, i)) && (t.exports = r);
    })(window, function (t, e, n) {
      "use strict";
      function i(t) {
        (this.parent = t),
          (this.state = "stopped"),
          o &&
            ((this.onVisibilityChange = function () {
              this.visibilityChange();
            }.bind(this)),
            (this.onVisibilityPlay = function () {
              this.visibilityPlay();
            }.bind(this)));
      }
      var r, o;
      "hidden" in document
        ? ((r = "hidden"), (o = "visibilitychange"))
        : "webkitHidden" in document &&
          ((r = "webkitHidden"), (o = "webkitvisibilitychange")),
        (i.prototype = Object.create(t.prototype)),
        (i.prototype.play = function () {
          if ("playing" != this.state) {
            var t = document[r];
            if (o && t)
              return void document.addEventListener(o, this.onVisibilityPlay);
            (this.state = "playing"),
              o && document.addEventListener(o, this.onVisibilityChange),
              this.tick();
          }
        }),
        (i.prototype.tick = function () {
          if ("playing" == this.state) {
            var t = this.parent.options.autoPlay;
            t = "number" == typeof t ? t : 3e3;
            var e = this;
            this.clear(),
              (this.timeout = setTimeout(function () {
                e.parent.next(!0), e.tick();
              }, t));
          }
        }),
        (i.prototype.stop = function () {
          (this.state = "stopped"),
            this.clear(),
            o && document.removeEventListener(o, this.onVisibilityChange);
        }),
        (i.prototype.clear = function () {
          clearTimeout(this.timeout);
        }),
        (i.prototype.pause = function () {
          "playing" == this.state && ((this.state = "paused"), this.clear());
        }),
        (i.prototype.unpause = function () {
          "paused" == this.state && this.play();
        }),
        (i.prototype.visibilityChange = function () {
          this[document[r] ? "pause" : "unpause"]();
        }),
        (i.prototype.visibilityPlay = function () {
          this.play(), document.removeEventListener(o, this.onVisibilityPlay);
        }),
        e.extend(n.defaults, { pauseAutoPlayOnHover: !0 }),
        n.createMethods.push("_createPlayer");
      var s = n.prototype;
      return (
        (s._createPlayer = function () {
          (this.player = new i(this)),
            this.on("activate", this.activatePlayer),
            this.on("uiChange", this.stopPlayer),
            this.on("pointerDown", this.stopPlayer),
            this.on("deactivate", this.deactivatePlayer);
        }),
        (s.activatePlayer = function () {
          this.options.autoPlay &&
            (this.player.play(),
            this.element.addEventListener("mouseenter", this));
        }),
        (s.playPlayer = function () {
          this.player.play();
        }),
        (s.stopPlayer = function () {
          this.player.stop();
        }),
        (s.pausePlayer = function () {
          this.player.pause();
        }),
        (s.unpausePlayer = function () {
          this.player.unpause();
        }),
        (s.deactivatePlayer = function () {
          this.player.stop(),
            this.element.removeEventListener("mouseenter", this);
        }),
        (s.onmouseenter = function () {
          this.options.pauseAutoPlayOnHover &&
            (this.player.pause(),
            this.element.addEventListener("mouseleave", this));
        }),
        (s.onmouseleave = function () {
          this.player.unpause(),
            this.element.removeEventListener("mouseleave", this);
        }),
        (n.Player = i),
        n
      );
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (o, s) {
      (i = [n(1), n(0)]),
        void 0 !==
          (r = function (t, e) {
            return s(o, t, e);
          }.apply(e, i)) && (t.exports = r);
    })(window, function (t, e, n) {
      "use strict";
      function i(t) {
        var e = document.createDocumentFragment();
        return (
          t.forEach(function (t) {
            e.appendChild(t.element);
          }),
          e
        );
      }
      var r = e.prototype;
      return (
        (r.insert = function (t, e) {
          var n = this._makeCells(t);
          if (n && n.length) {
            var r = this.cells.length;
            e = void 0 === e ? r : e;
            var o = i(n),
              s = e == r;
            if (s) this.slider.appendChild(o);
            else {
              var a = this.cells[e].element;
              this.slider.insertBefore(o, a);
            }
            if (0 === e) this.cells = n.concat(this.cells);
            else if (s) this.cells = this.cells.concat(n);
            else {
              var l = this.cells.splice(e, r - e);
              this.cells = this.cells.concat(n).concat(l);
            }
            this._sizeCells(n);
            var c = e > this.selectedIndex ? 0 : n.length;
            this._cellAddedRemoved(e, c);
          }
        }),
        (r.append = function (t) {
          this.insert(t, this.cells.length);
        }),
        (r.prepend = function (t) {
          this.insert(t, 0);
        }),
        (r.remove = function (t) {
          var e,
            i,
            r = this.getCells(t),
            o = 0,
            s = r.length;
          for (e = 0; e < s; e++)
            (i = r[e]),
              (o -= this.cells.indexOf(i) < this.selectedIndex ? 1 : 0);
          for (e = 0; e < s; e++)
            (i = r[e]), i.remove(), n.removeFrom(this.cells, i);
          r.length && this._cellAddedRemoved(0, o);
        }),
        (r._cellAddedRemoved = function (t, e) {
          (e = e || 0),
            (this.selectedIndex += e),
            (this.selectedIndex = Math.max(
              0,
              Math.min(this.slides.length - 1, this.selectedIndex)
            )),
            this.cellChange(t, !0),
            this.emitEvent("cellAddedRemoved", [t, e]);
        }),
        (r.cellSizeChange = function (t) {
          var e = this.getCell(t);
          if (e) {
            e.getSize();
            var n = this.cells.indexOf(e);
            this.cellChange(n);
          }
        }),
        (r.cellChange = function (t, e) {
          var n = this.slideableWidth;
          if (
            (this._positionCells(t),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent("cellChange", [t]),
            this.options.freeScroll)
          ) {
            var i = n - this.slideableWidth;
            (this.x += i * this.cellAlign), this.positionSlider();
          } else
            e && this.positionSliderAtSelected(),
              this.select(this.selectedIndex);
        }),
        e
      );
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (o, s) {
      (i = [n(1), n(0)]),
        void 0 !==
          (r = function (t, e) {
            return s(o, t, e);
          }.apply(e, i)) && (t.exports = r);
    })(window, function (t, e, n) {
      "use strict";
      function i(t) {
        if ("IMG" == t.nodeName && t.getAttribute("data-flickity-lazyload"))
          return [t];
        var e = t.querySelectorAll("img[data-flickity-lazyload]");
        return n.makeArray(e);
      }
      function r(t, e) {
        (this.img = t), (this.flickity = e), this.load();
      }
      e.createMethods.push("_createLazyload");
      var o = e.prototype;
      return (
        (o._createLazyload = function () {
          this.on("select", this.lazyLoad);
        }),
        (o.lazyLoad = function () {
          var t = this.options.lazyLoad;
          if (t) {
            var e = "number" == typeof t ? t : 0,
              n = this.getAdjacentCellElements(e),
              o = [];
            n.forEach(function (t) {
              var e = i(t);
              o = o.concat(e);
            }),
              o.forEach(function (t) {
                new r(t, this);
              }, this);
          }
        }),
        (r.prototype.handleEvent = n.handleEvent),
        (r.prototype.load = function () {
          this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.img.src = this.img.getAttribute("data-flickity-lazyload")),
            this.img.removeAttribute("data-flickity-lazyload");
        }),
        (r.prototype.onload = function (t) {
          this.complete(t, "flickity-lazyloaded");
        }),
        (r.prototype.onerror = function (t) {
          this.complete(t, "flickity-lazyerror");
        }),
        (r.prototype.complete = function (t, e) {
          this.img.removeEventListener("load", this),
            this.img.removeEventListener("error", this);
          var n = this.flickity.getParentCell(this.img),
            i = n && n.element;
          this.flickity.cellSizeChange(i),
            this.img.classList.add(e),
            this.flickity.dispatchEvent("lazyLoad", t, i);
        }),
        (e.LazyLoader = r),
        e
      );
    });
  },
  function (t, e, n) {
    "use strict";
    var i = n(29);
    (0,
    (function (t) {
      return t && t.__esModule ? t : { default: t };
    })(i).default)(document.querySelectorAll('[data-action="zoom"]'), {
      margin: 32,
    });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i =
        Object.assign ||
        function (t) {
          for (var e, n = 1; n < arguments.length; n++)
            for (var i in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        },
      r = ["IMG"],
      o = [27, 81],
      s = function (t) {
        return -1 < r.indexOf(t.tagName);
      },
      a = function (t) {
        return t.naturalWidth !== t.width;
      },
      l = function (t) {
        return (
          NodeList.prototype.isPrototypeOf(t) ||
          HTMLCollection.prototype.isPrototypeOf(t)
        );
      },
      c = function (t) {
        return t && 1 === t.nodeType;
      },
      u = function (t) {
        var e =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.margin,
          u = void 0 === n ? 0 : n,
          h = e.background,
          d = void 0 === h ? "#fff" : h,
          f = e.scrollOffset,
          p = void 0 === f ? 48 : f,
          g = e.metaClick,
          m = e.container,
          v = e.template,
          y = function (t) {
            var e = t.getBoundingClientRect(),
              n = e.top,
              i = e.left,
              r = e.width,
              o = e.height,
              s = t.cloneNode(),
              a =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0,
              l =
                window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0;
            return (
              s.removeAttribute("id"),
              (s.style.position = "absolute"),
              (s.style.top = n + a + "px"),
              (s.style.left = i + l + "px"),
              (s.style.width = r + "px"),
              (s.style.height = o + "px"),
              (s.style.transform = ""),
              s
            );
          },
          b = function (t) {
            var e =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : { bubbles: !1, cancelable: !1, detail: void 0 };
            if ("function" == typeof window.CustomEvent)
              return new CustomEvent(t, e);
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
          },
          _ = function () {
            if (L.original) {
              if (
                (L.original.dispatchEvent(b("show")),
                (P =
                  window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop ||
                  0),
                (k = !0),
                (L.zoomed = y(L.original)),
                document.body.appendChild(N),
                I.template)
              ) {
                var t = c(I.template)
                  ? I.template
                  : document.querySelector(I.template);
                (L.template = document.createElement("div")),
                  L.template.appendChild(t.content.cloneNode(!0)),
                  document.body.appendChild(L.template);
              }
              if (
                (document.body.appendChild(L.zoomed),
                requestAnimationFrame(function () {
                  document.body.classList.add("medium-zoom--open");
                }),
                (L.original.style.visibility = "hidden"),
                L.zoomed.classList.add("medium-zoom-image--open"),
                L.zoomed.addEventListener("click", E),
                L.zoomed.addEventListener("transitionend", C),
                L.original.getAttribute("data-zoom-target"))
              ) {
                (L.zoomedHd = L.zoomed.cloneNode()),
                  (L.zoomedHd.src = L.zoomed.getAttribute("data-zoom-target")),
                  (L.zoomedHd.onerror = function () {
                    clearInterval(e),
                      console.error(
                        "Unable to reach the zoom image target " +
                          L.zoomedHd.src
                      ),
                      (L.zoomedHd = null),
                      A();
                  });
                var e = setInterval(function () {
                  L.zoomedHd.naturalWidth &&
                    (clearInterval(e),
                    L.zoomedHd.classList.add("medium-zoom-image--open"),
                    L.zoomedHd.addEventListener("click", E),
                    document.body.appendChild(L.zoomedHd),
                    A());
                }, 10);
              } else A();
            }
          },
          E = function t() {
            var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              n = function () {
                k ||
                  !L.original ||
                  (L.original.dispatchEvent(b("hide")),
                  (k = !0),
                  document.body.classList.remove("medium-zoom--open"),
                  (L.zoomed.style.transform = ""),
                  L.zoomedHd &&
                    ((L.zoomedHd.style.transform = ""),
                    L.zoomedHd.removeEventListener("click", t)),
                  L.template &&
                    ((L.template.style.transition = "opacity 150ms"),
                    (L.template.style.opacity = 0)),
                  L.zoomed.removeEventListener("click", t),
                  L.zoomed.addEventListener("transitionend", S));
              };
            0 < e ? setTimeout(n, e) : n();
          },
          T = function (t) {
            t && t.target
              ? ((L.original = t.target), _())
              : L.original
              ? E()
              : ((L.original = O[0]), _());
          },
          w = function (t) {
            return (t.metaKey || t.ctrlKey) && I.metaClick
              ? window.open(
                  t.target.getAttribute("data-original") ||
                    t.target.parentNode.href ||
                    t.target.src,
                  "_blank"
                )
              : (t.preventDefault(), void T(t));
          },
          C = function t() {
            (k = !1),
              L.zoomed.removeEventListener("transitionend", t),
              L.original.dispatchEvent(b("shown"));
          },
          S = function t() {
            L.original &&
              ((L.original.style.visibility = ""),
              document.body.removeChild(L.zoomed),
              L.zoomedHd && document.body.removeChild(L.zoomedHd),
              document.body.removeChild(N),
              L.zoomed.classList.remove("medium-zoom-image--open"),
              L.template && document.body.removeChild(L.template),
              (k = !1),
              L.zoomed.removeEventListener("transitionend", t),
              L.original.dispatchEvent(b("hidden")),
              (L.original = null),
              (L.zoomed = null),
              (L.zoomedHd = null),
              (L.template = null));
          },
          x = function () {
            if (!k && L.original) {
              var t =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
              Math.abs(P - t) > I.scrollOffset && E(150);
            }
          },
          D = function (t) {
            -1 < o.indexOf(t.keyCode || t.which) && E();
          },
          A = function () {
            var t = Math.min;
            if (L.original) {
              var e,
                n,
                r = {
                  width: window.innerWidth,
                  height: window.innerHeight,
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                };
              if (I.container)
                if (I.container instanceof Object)
                  i(r, I.container),
                    (e = r.width - r.left - r.right - 2 * I.margin),
                    (n = r.height - r.top - r.bottom - 2 * I.margin);
                else {
                  var o = c(I.container)
                      ? I.container
                      : document.querySelector(I.container),
                    s = o.getBoundingClientRect(),
                    a = s.width,
                    l = s.height,
                    u = s.left,
                    h = s.top;
                  i(r, { width: a, height: l, left: u, top: h });
                }
              (e = e || r.width - 2 * I.margin),
                (n = n || r.height - 2 * I.margin);
              var d = L.zoomedHd || L.original,
                f = d.naturalWidth,
                p = void 0 === f ? e : f,
                g = d.naturalHeight,
                m = void 0 === g ? n : g,
                v = d.getBoundingClientRect(),
                y = v.top,
                b = v.left,
                _ = v.width,
                E = v.height,
                T = t(p, e) / _,
                w = t(m, n) / E,
                C = t(T, w) || 1,
                S = ((e - _) / 2 - b + I.margin + r.left) / C,
                x = ((n - E) / 2 - y + I.margin + r.top) / C,
                D = "scale(" + C + ") translate3d(" + S + "px, " + x + "px, 0)";
              (L.zoomed.style.transform = D),
                L.zoomedHd && (L.zoomedHd.style.transform = D);
            }
          },
          I = {
            margin: u,
            background: d,
            scrollOffset: p,
            metaClick: void 0 === g || g,
            container: m,
            template: v,
          };
        t instanceof Object && i(I, t);
        var O = (function (t) {
            try {
              return Array.isArray(t)
                ? t.filter(s)
                : l(t)
                ? Array.apply(null, t).filter(s)
                : c(t)
                ? [t].filter(s)
                : "string" == typeof t
                ? Array.apply(null, document.querySelectorAll(t)).filter(s)
                : Array.apply(
                    null,
                    document.querySelectorAll(
                      r
                        .map(function (t) {
                          return t.toLowerCase();
                        })
                        .join(",")
                    )
                  ).filter(a);
            } catch (t) {
              throw new TypeError(
                "The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList, an HTMLCollection or an array.\nSee: https://github.com/francoischalifour/medium-zoom"
              );
            }
          })(t),
          N = (function (t) {
            var e = document.createElement("div");
            return (
              e.classList.add("medium-zoom-overlay"),
              (e.style.backgroundColor = t),
              e
            );
          })(I.background),
          L = { original: null, zoomed: null, zoomedHd: null, template: null },
          P = 0,
          k = !1;
        return (
          O.forEach(function (t) {
            t.classList.add("medium-zoom-image"),
              t.addEventListener("click", w);
          }),
          N.addEventListener("click", E),
          document.addEventListener("scroll", x),
          document.addEventListener("keyup", D),
          window.addEventListener("resize", E),
          {
            show: T,
            hide: E,
            toggle: T,
            update: function () {
              var t =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return (
                t.background && (N.style.backgroundColor = t.background),
                t.container &&
                  t.container instanceof Object &&
                  (t.container = i({}, I.container, t.container)),
                i(I, t)
              );
            },
            addEventListeners: function (t, e) {
              O.forEach(function (n) {
                n.addEventListener(t, e);
              });
            },
            detach: function () {
              L.zoomed && E();
              var t = b("detach");
              O.forEach(function (e) {
                e.classList.remove("medium-zoom-image"),
                  e.removeEventListener("click", w),
                  e.dispatchEvent(t);
              }),
                O.splice(0, O.length),
                N.removeEventListener("click", E),
                document.removeEventListener("scroll", x),
                document.removeEventListener("keyup", D),
                window.removeEventListener("resize", E);
            },
            images: O,
            options: I,
          }
        );
      },
      h = Object.freeze({ default: u });
    !(function (t, e) {
      void 0 === e && (e = {});
      var n = e.insertAt;
      if ("undefined" != typeof document) {
        var i = document.head || document.getElementsByTagName("head")[0],
          r = document.createElement("style");
        (r.type = "text/css"),
          "top" === n && i.firstChild
            ? i.insertBefore(r, i.firstChild)
            : i.appendChild(r),
          r.styleSheet
            ? (r.styleSheet.cssText = t)
            : r.appendChild(document.createTextNode(t));
      }
    })(
      ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--open .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s}.medium-zoom-image--open{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"
    );
    var d = (h && u) || h,
      f = d;
    e.default = f;
  },
  function (t, e, n) {
    "use strict";
    (function (t) {
      function n(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        r = {
          countdown: ".js-countdown",
          days: ".js-days",
          hours: ".js-hours",
          minutes: ".js-minutes",
          seconds: ".js-seconds",
        },
        o = (function () {
          function t(e, i) {
            var o = this;
            n(this, t),
              (this.deadline = i),
              (this.days = e.querySelector(r.days)),
              (this.hours = e.querySelector(r.hours)),
              (this.minutes = e.querySelector(r.minutes)),
              (this.seconds = e.querySelector(r.seconds)),
              this.updateCountdown(),
              (this.timeInterval = setInterval(function () {
                return o.updateCountdown();
              }, 1e3));
          }
          return (
            i(t, [
              {
                key: "updateCountdown",
                value: function () {
                  var t = this.getTimeRemaining();
                  (this.days.innerHTML = t.days),
                    (this.hours.innerHTML = ("0" + t.hours).slice(-2)),
                    (this.minutes.innerHTML = ("0" + t.minutes).slice(-2)),
                    (this.seconds.innerHTML = ("0" + t.seconds).slice(-2)),
                    t.total <= 0 && clearInterval(this.timeInterval);
                },
              },
              {
                key: "getTimeRemaining",
                value: function () {
                  var t = Date.parse(this.deadline) - Date.parse(new Date()),
                    e = Math.floor((t / 1e3) % 60),
                    n = Math.floor((t / 1e3 / 60) % 60),
                    i = Math.floor((t / 36e5) % 24);
                  return {
                    total: t,
                    days: Math.floor(t / 864e5),
                    hours: i,
                    minutes: n,
                    seconds: e,
                  };
                },
              },
            ]),
            t
          );
        })();
      e.default = o;
      var s = new Date(Date.parse(new Date()) + 1296e6);
      t(r.countdown).each(function () {
        new o(this, s);
      });
    }).call(e, n(2));
  },
]);
//# sourceMappingURL=bundle.js.map
