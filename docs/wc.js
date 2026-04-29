const ft = globalThis, Jt = ft.ShadowRoot && (ft.ShadyCSS === void 0 || ft.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Kt = /* @__PURE__ */ Symbol(), Ss = /* @__PURE__ */ new WeakMap();
let Ni = class {
  constructor(e, r, o) {
    if (this._$cssResult$ = !0, o !== Kt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (Jt && e === void 0) {
      const o = r !== void 0 && r.length === 1;
      o && (e = Ss.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), o && Ss.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const en = (t) => new Ni(typeof t == "string" ? t : t + "", void 0, Kt), C = (t, ...e) => {
  const r = t.length === 1 ? t[0] : e.reduce((o, i, a) => o + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + t[a + 1], t[0]);
  return new Ni(r, t, Kt);
}, tn = (t, e) => {
  if (Jt) t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of e) {
    const o = document.createElement("style"), i = ft.litNonce;
    i !== void 0 && o.setAttribute("nonce", i), o.textContent = r.cssText, t.appendChild(o);
  }
}, ks = Jt ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const o of e.cssRules) r += o.cssText;
  return en(r);
})(t) : t;
const { is: rn, defineProperty: sn, getOwnPropertyDescriptor: an, getOwnPropertyNames: on, getOwnPropertySymbols: nn, getPrototypeOf: cn } = Object, yt = globalThis, xs = yt.trustedTypes, ln = xs ? xs.emptyScript : "", dn = yt.reactiveElementPolyfillSupport, tt = (t, e) => t, $t = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? ln : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let r = t;
  switch (e) {
    case Boolean:
      r = t !== null;
      break;
    case Number:
      r = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(t);
      } catch {
        r = null;
      }
  }
  return r;
} }, Qt = (t, e) => !rn(t, e), As = { attribute: !0, type: String, converter: $t, reflect: !1, useDefault: !1, hasChanged: Qt };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), yt.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let Y = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = As) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(e, r), !r.noAccessor) {
      const o = /* @__PURE__ */ Symbol(), i = this.getPropertyDescriptor(e, o, r);
      i !== void 0 && sn(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, r, o) {
    const { get: i, set: a } = an(this.prototype, e) ?? { get() {
      return this[r];
    }, set(l) {
      this[r] = l;
    } };
    return { get: i, set(l) {
      const n = i?.call(this);
      a?.call(this, l), this.requestUpdate(e, n, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? As;
  }
  static _$Ei() {
    if (this.hasOwnProperty(tt("elementProperties"))) return;
    const e = cn(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(tt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(tt("properties"))) {
      const r = this.properties, o = [...on(r), ...nn(r)];
      for (const i of o) this.createProperty(i, r[i]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0) for (const [o, i] of r) this.elementProperties.set(o, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, o] of this.elementProperties) {
      const i = this._$Eu(r, o);
      i !== void 0 && this._$Eh.set(i, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const o = new Set(e.flat(1 / 0).reverse());
      for (const i of o) r.unshift(ks(i));
    } else e !== void 0 && r.push(ks(e));
    return r;
  }
  static _$Eu(e, r) {
    const o = r.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
  }
  addController(e) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
  }
  removeController(e) {
    this._$EO?.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const o of r.keys()) this.hasOwnProperty(o) && (e.set(o, this[o]), delete this[o]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return tn(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((e) => e.hostDisconnected?.());
  }
  attributeChangedCallback(e, r, o) {
    this._$AK(e, o);
  }
  _$ET(e, r) {
    const o = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, o);
    if (i !== void 0 && o.reflect === !0) {
      const a = (o.converter?.toAttribute !== void 0 ? o.converter : $t).toAttribute(r, o.type);
      this._$Em = e, a == null ? this.removeAttribute(i) : this.setAttribute(i, a), this._$Em = null;
    }
  }
  _$AK(e, r) {
    const o = this.constructor, i = o._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const a = o.getPropertyOptions(i), l = typeof a.converter == "function" ? { fromAttribute: a.converter } : a.converter?.fromAttribute !== void 0 ? a.converter : $t;
      this._$Em = i;
      const n = l.fromAttribute(r, a.type);
      this[i] = n ?? this._$Ej?.get(i) ?? n, this._$Em = null;
    }
  }
  requestUpdate(e, r, o, i = !1, a) {
    if (e !== void 0) {
      const l = this.constructor;
      if (i === !1 && (a = this[e]), o ??= l.getPropertyOptions(e), !((o.hasChanged ?? Qt)(a, r) || o.useDefault && o.reflect && a === this._$Ej?.get(e) && !this.hasAttribute(l._$Eu(e, o)))) return;
      this.C(e, r, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, r, { useDefault: o, reflect: i, wrapped: a }, l) {
    o && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, l ?? r ?? this[e]), a !== !0 || l !== void 0) || (this._$AL.has(e) || (this.hasUpdated || o || (r = void 0), this._$AL.set(e, r)), i === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [i, a] of this._$Ep) this[i] = a;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [i, a] of o) {
        const { wrapped: l } = a, n = this[i];
        l !== !0 || this._$AL.has(i) || n === void 0 || this.C(i, void 0, a, n);
      }
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), this._$EO?.forEach((o) => o.hostUpdate?.()), this.update(r)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach((r) => r.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq &&= this._$Eq.forEach((r) => this._$ET(r, this[r])), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
Y.elementStyles = [], Y.shadowRootOptions = { mode: "open" }, Y[tt("elementProperties")] = /* @__PURE__ */ new Map(), Y[tt("finalized")] = /* @__PURE__ */ new Map(), dn?.({ ReactiveElement: Y }), (yt.reactiveElementVersions ??= []).push("2.1.2");
const Yt = globalThis, Cs = (t) => t, bt = Yt.trustedTypes, Os = bt ? bt.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, Fi = "$lit$", H = `lit$${Math.random().toFixed(9).slice(2)}$`, Ui = "?" + H, hn = `<${Ui}>`, Z = document, rt = () => Z.createComment(""), st = (t) => t === null || typeof t != "object" && typeof t != "function", jt = Array.isArray, pn = (t) => jt(t) || typeof t?.[Symbol.iterator] == "function", St = `[ 	
\f\r]`, Pe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Es = /-->/g, zs = />/g, q = RegExp(`>|${St}(?:([^\\s"'>=/]+)(${St}*=${St}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ps = /'/g, Ms = /"/g, Bi = /^(?:script|style|textarea|title)$/i, vn = (t) => (e, ...r) => ({ _$litType$: t, strings: e, values: r }), x = vn(1), j = /* @__PURE__ */ Symbol.for("lit-noChange"), A = /* @__PURE__ */ Symbol.for("lit-nothing"), Is = /* @__PURE__ */ new WeakMap(), X = Z.createTreeWalker(Z, 129);
function Ri(t, e) {
  if (!jt(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Os !== void 0 ? Os.createHTML(e) : e;
}
const _n = (t, e) => {
  const r = t.length - 1, o = [];
  let i, a = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Pe;
  for (let n = 0; n < r; n++) {
    const v = t[n];
    let p, _, s = -1, u = 0;
    for (; u < v.length && (l.lastIndex = u, _ = l.exec(v), _ !== null); ) u = l.lastIndex, l === Pe ? _[1] === "!--" ? l = Es : _[1] !== void 0 ? l = zs : _[2] !== void 0 ? (Bi.test(_[2]) && (i = RegExp("</" + _[2], "g")), l = q) : _[3] !== void 0 && (l = q) : l === q ? _[0] === ">" ? (l = i ?? Pe, s = -1) : _[1] === void 0 ? s = -2 : (s = l.lastIndex - _[2].length, p = _[1], l = _[3] === void 0 ? q : _[3] === '"' ? Ms : Ps) : l === Ms || l === Ps ? l = q : l === Es || l === zs ? l = Pe : (l = q, i = void 0);
    const h = l === q && t[n + 1].startsWith("/>") ? " " : "";
    a += l === Pe ? v + hn : s >= 0 ? (o.push(p), v.slice(0, s) + Fi + v.slice(s) + H + h) : v + H + (s === -2 ? n : h);
  }
  return [Ri(t, a + (t[r] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), o];
};
class it {
  constructor({ strings: e, _$litType$: r }, o) {
    let i;
    this.parts = [];
    let a = 0, l = 0;
    const n = e.length - 1, v = this.parts, [p, _] = _n(e, r);
    if (this.el = it.createElement(p, o), X.currentNode = this.el.content, r === 2 || r === 3) {
      const s = this.el.content.firstChild;
      s.replaceWith(...s.childNodes);
    }
    for (; (i = X.nextNode()) !== null && v.length < n; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const s of i.getAttributeNames()) if (s.endsWith(Fi)) {
          const u = _[l++], h = i.getAttribute(s).split(H), g = /([.?@])?(.*)/.exec(u);
          v.push({ type: 1, index: a, name: g[2], strings: h, ctor: g[1] === "." ? gn : g[1] === "?" ? fn : g[1] === "@" ? $n : mt }), i.removeAttribute(s);
        } else s.startsWith(H) && (v.push({ type: 6, index: a }), i.removeAttribute(s));
        if (Bi.test(i.tagName)) {
          const s = i.textContent.split(H), u = s.length - 1;
          if (u > 0) {
            i.textContent = bt ? bt.emptyScript : "";
            for (let h = 0; h < u; h++) i.append(s[h], rt()), X.nextNode(), v.push({ type: 2, index: ++a });
            i.append(s[u], rt());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Ui) v.push({ type: 2, index: a });
      else {
        let s = -1;
        for (; (s = i.data.indexOf(H, s + 1)) !== -1; ) v.push({ type: 7, index: a }), s += H.length - 1;
      }
      a++;
    }
  }
  static createElement(e, r) {
    const o = Z.createElement("template");
    return o.innerHTML = e, o;
  }
}
function ee(t, e, r = t, o) {
  if (e === j) return e;
  let i = o !== void 0 ? r._$Co?.[o] : r._$Cl;
  const a = st(e) ? void 0 : e._$litDirective$;
  return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(t), i._$AT(t, r, o)), o !== void 0 ? (r._$Co ??= [])[o] = i : r._$Cl = i), i !== void 0 && (e = ee(t, i._$AS(t, e.values), i, o)), e;
}
class un {
  constructor(e, r) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = r;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: r }, parts: o } = this._$AD, i = (e?.creationScope ?? Z).importNode(r, !0);
    X.currentNode = i;
    let a = X.nextNode(), l = 0, n = 0, v = o[0];
    for (; v !== void 0; ) {
      if (l === v.index) {
        let p;
        v.type === 2 ? p = new pt(a, a.nextSibling, this, e) : v.type === 1 ? p = new v.ctor(a, v.name, v.strings, this, e) : v.type === 6 && (p = new bn(a, this, e)), this._$AV.push(p), v = o[++n];
      }
      l !== v?.index && (a = X.nextNode(), l++);
    }
    return X.currentNode = Z, i;
  }
  p(e) {
    let r = 0;
    for (const o of this._$AV) o !== void 0 && (o.strings !== void 0 ? (o._$AI(e, o, r), r += o.strings.length - 2) : o._$AI(e[r])), r++;
  }
}
class pt {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, r, o, i) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = e, this._$AB = r, this._$AM = o, this.options = i, this._$Cv = i?.isConnected ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const r = this._$AM;
    return r !== void 0 && e?.nodeType === 11 && (e = r.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, r = this) {
    e = ee(this, e, r), st(e) ? e === A || e == null || e === "" ? (this._$AH !== A && this._$AR(), this._$AH = A) : e !== this._$AH && e !== j && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : pn(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== A && st(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Z.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: r, _$litType$: o } = e, i = typeof o == "number" ? this._$AC(e) : (o.el === void 0 && (o.el = it.createElement(Ri(o.h, o.h[0]), this.options)), o);
    if (this._$AH?._$AD === i) this._$AH.p(r);
    else {
      const a = new un(i, this), l = a.u(this.options);
      a.p(r), this.T(l), this._$AH = a;
    }
  }
  _$AC(e) {
    let r = Is.get(e.strings);
    return r === void 0 && Is.set(e.strings, r = new it(e)), r;
  }
  k(e) {
    jt(this._$AH) || (this._$AH = [], this._$AR());
    const r = this._$AH;
    let o, i = 0;
    for (const a of e) i === r.length ? r.push(o = new pt(this.O(rt()), this.O(rt()), this, this.options)) : o = r[i], o._$AI(a), i++;
    i < r.length && (this._$AR(o && o._$AB.nextSibling, i), r.length = i);
  }
  _$AR(e = this._$AA.nextSibling, r) {
    for (this._$AP?.(!1, !0, r); e !== this._$AB; ) {
      const o = Cs(e).nextSibling;
      Cs(e).remove(), e = o;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}
class mt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, r, o, i, a) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = e, this.name = r, this._$AM = i, this.options = a, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = A;
  }
  _$AI(e, r = this, o, i) {
    const a = this.strings;
    let l = !1;
    if (a === void 0) e = ee(this, e, r, 0), l = !st(e) || e !== this._$AH && e !== j, l && (this._$AH = e);
    else {
      const n = e;
      let v, p;
      for (e = a[0], v = 0; v < a.length - 1; v++) p = ee(this, n[o + v], r, v), p === j && (p = this._$AH[v]), l ||= !st(p) || p !== this._$AH[v], p === A ? e = A : e !== A && (e += (p ?? "") + a[v + 1]), this._$AH[v] = p;
    }
    l && !i && this.j(e);
  }
  j(e) {
    e === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class gn extends mt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === A ? void 0 : e;
  }
}
class fn extends mt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== A);
  }
}
class $n extends mt {
  constructor(e, r, o, i, a) {
    super(e, r, o, i, a), this.type = 5;
  }
  _$AI(e, r = this) {
    if ((e = ee(this, e, r, 0) ?? A) === j) return;
    const o = this._$AH, i = e === A && o !== A || e.capture !== o.capture || e.once !== o.once || e.passive !== o.passive, a = e !== A && (o === A || i);
    i && this.element.removeEventListener(this.name, this, o), a && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class bn {
  constructor(e, r, o) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = r, this.options = o;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ee(this, e);
  }
}
const yn = Yt.litHtmlPolyfillSupport;
yn?.(it, pt), (Yt.litHtmlVersions ??= []).push("3.3.2");
const mn = (t, e, r) => {
  const o = r?.renderBefore ?? e;
  let i = o._$litPart$;
  if (i === void 0) {
    const a = r?.renderBefore ?? null;
    o._$litPart$ = i = new pt(e.insertBefore(rt(), a), a, void 0, r ?? {});
  }
  return i._$AI(t), i;
};
const er = globalThis;
class k extends Y {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = mn(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return j;
  }
}
k._$litElement$ = !0, k.finalized = !0, er.litElementHydrateSupport?.({ LitElement: k });
const wn = er.litElementPolyfillSupport;
wn?.({ LitElement: k });
(er.litElementVersions ??= []).push("4.2.2");
const O = (t) => (e, r) => {
  r !== void 0 ? r.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
const Sn = { attribute: !0, type: String, converter: $t, reflect: !1, hasChanged: Qt }, kn = (t = Sn, e, r) => {
  const { kind: o, metadata: i } = r;
  let a = globalThis.litPropertyMetadata.get(i);
  if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), o === "setter" && ((t = Object.create(t)).wrapped = !0), a.set(r.name, t), o === "accessor") {
    const { name: l } = r;
    return { set(n) {
      const v = e.get.call(this);
      e.set.call(this, n), this.requestUpdate(l, v, t, !0, n);
    }, init(n) {
      return n !== void 0 && this.C(l, void 0, t, n), n;
    } };
  }
  if (o === "setter") {
    const { name: l } = r;
    return function(n) {
      const v = this[l];
      e.call(this, n), this.requestUpdate(l, v, t, !0, n);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function m(t) {
  return (e, r) => typeof r == "object" ? kn(t, e, r) : ((o, i, a) => {
    const l = i.hasOwnProperty(a);
    return i.constructor.createProperty(a, o), l ? Object.getOwnPropertyDescriptor(i, a) : void 0;
  })(t, e, r);
}
var xn = Object.create, tr = Object.defineProperty, An = Object.getOwnPropertyDescriptor, Hi = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), _e = (t) => {
  throw TypeError(t);
}, Li = (t, e, r) => e in t ? tr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ws = (t, e) => tr(t, "name", { value: e, configurable: !0 }), Cn = (t) => [, , , xn(t?.[Hi("metadata")] ?? null)], Gi = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Me = (t) => t !== void 0 && typeof t != "function" ? _e("Function expected") : t, On = (t, e, r, o, i) => ({ kind: Gi[t], name: e, metadata: o, addInitializer: (a) => r._ ? _e("Already initialized") : i.push(Me(a || null)) }), En = (t, e) => Li(e, Hi("metadata"), t[3]), Ie = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, rr = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = Gi[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && An(s < 4 ? i : { get [r]() {
    return Ds(this, a);
  }, set [r](c) {
    return Ns(this, a, c);
  } }, r));
  s ? h && s < 4 && Ws(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : Ws(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = On(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => zn(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? Ds : Pn)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => Ns(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? Me(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? _e("Object expected") : (Me(l = n.get) && (d.get = l), Me(l = n.set) && (d.set = l), Me(l = n.init) && y.unshift(l));
  return s || En(t, i), d && tr(i, r, d), h ? s ^ 4 ? a : d : i;
}, qi = (t, e, r) => Li(t, typeof e != "symbol" ? e + "" : e, r), sr = (t, e, r) => e.has(t) || _e("Cannot " + r), zn = (t, e) => Object(e) !== e ? _e('Cannot use the "in" operator on this value') : t.has(e), Ds = (t, e, r) => (sr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Ts = (t, e, r) => e.has(t) ? _e("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ns = (t, e, r, o) => (sr(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), Pn = (t, e, r) => (sr(t, e, "access private method"), r), Vi, Xi, xt, Zi, T, ir, ar;
Zi = [O("sg-accordion-item")];
class te extends (xt = k, Xi = [m({ type: Boolean, reflect: !0 })], Vi = [m({ type: String })], xt) {
  constructor() {
    super(...arguments), Ts(this, ir, Ie(T, 8, this, !1)), Ie(T, 11, this), Ts(this, ar, Ie(T, 12, this, "")), Ie(T, 15, this), qi(this, "toggle", () => {
      this.open = !this.open, this.dispatchEvent(
        new CustomEvent("sg-toggle", {
          detail: { open: this.open },
          bubbles: !0,
          composed: !0
        })
      );
    });
  }
  render() {
    return x`
      <button @click=${this.toggle} aria-expanded=${this.open}>
        <span>${this.heading}</span>
        <span class="chevron">▾</span>
      </button>
      <div class="panel">
        <div class="panel-inner"><slot></slot></div>
      </div>
    `;
  }
}
T = Cn(xt);
ir = /* @__PURE__ */ new WeakMap();
ar = /* @__PURE__ */ new WeakMap();
rr(T, 4, "open", Xi, te, ir);
rr(T, 4, "heading", Vi, te, ar);
te = rr(T, 0, "SgAccordionItem", Zi, te);
qi(te, "styles", C`
    :host {
      display: block;
      border-bottom: 1px solid var(--sg-color-outline-variant);
    }
    button {
      all: unset;
      width: 100%;
      box-sizing: border-box;
      cursor: pointer;
      padding: var(--sg-space-md) 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: var(--sg-font-size-sm);
      font-weight: var(--sg-font-weight-medium);
      color: var(--sg-color-on-surface);
    }
    button:focus-visible {
      outline: 2px solid var(--sg-color-primary);
      outline-offset: 2px;
    }
    .chevron {
      transition: transform var(--sg-duration-fast) var(--sg-easing-standard);
      color: var(--sg-color-on-surface-variant);
    }
    :host([open]) .chevron {
      transform: rotate(180deg);
    }
    .panel {
      max-height: 0;
      overflow: hidden;
      transition: max-height var(--sg-duration-normal) var(--sg-easing-standard);
      color: var(--sg-color-on-surface);
      font-size: var(--sg-font-size-sm);
    }
    :host([open]) .panel {
      max-height: 1000px;
    }
    .panel-inner {
      padding-bottom: var(--sg-space-md);
    }
  `);
Ie(T, 1, te);
var Mn = Object.create, or = Object.defineProperty, In = Object.getOwnPropertyDescriptor, Ji = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), ue = (t) => {
  throw TypeError(t);
}, Ki = (t, e, r) => e in t ? or(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Fs = (t, e) => or(t, "name", { value: e, configurable: !0 }), Wn = (t) => [, , , Mn(t?.[Ji("metadata")] ?? null)], Qi = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], We = (t) => t !== void 0 && typeof t != "function" ? ue("Function expected") : t, Dn = (t, e, r, o, i) => ({ kind: Qi[t], name: e, metadata: o, addInitializer: (a) => r._ ? ue("Already initialized") : i.push(We(a || null)) }), Tn = (t, e) => Ki(e, Ji("metadata"), t[3]), At = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, Yi = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = Qi[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && In(s < 4 ? i : { get [r]() {
    return Us(this, a);
  }, set [r](c) {
    return Bs(this, a, c);
  } }, r));
  s ? h && s < 4 && Fs(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : Fs(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = Dn(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => Fn(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? Us : Bn)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => Bs(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? We(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? ue("Object expected") : (We(l = n.get) && (d.get = l), We(l = n.set) && (d.set = l), We(l = n.init) && y.unshift(l));
  return s || Tn(t, i), d && or(i, r, d), h ? s ^ 4 ? a : d : i;
}, Nn = (t, e, r) => Ki(t, e + "", r), nr = (t, e, r) => e.has(t) || ue("Cannot " + r), Fn = (t, e) => Object(e) !== e ? ue('Cannot use the "in" operator on this value') : t.has(e), Us = (t, e, r) => (nr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Un = (t, e, r) => e.has(t) ? ue("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Bs = (t, e, r, o) => (nr(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), Bn = (t, e, r) => (nr(t, e, "access private method"), r), ji, Ct, ea, re, cr;
const Rn = {
  info: "ⓘ",
  success: "✓",
  warning: "⚠",
  error: "✕"
};
ea = [O("sg-alert")];
class at extends (Ct = k, ji = [m({ type: String, reflect: !0 })], Ct) {
  constructor() {
    super(...arguments), Un(this, cr, At(re, 8, this, "info")), At(re, 11, this);
  }
  render() {
    return x`
      <span class="icon">${Rn[this.variant]}</span>
      <div class="content"><slot></slot></div>
    `;
  }
}
re = Wn(Ct);
cr = /* @__PURE__ */ new WeakMap();
Yi(re, 4, "variant", ji, at, cr);
at = Yi(re, 0, "SgAlert", ea, at);
Nn(at, "styles", C`
    :host {
      display: flex;
      gap: var(--sg-space-md);
      padding: var(--sg-space-md) var(--sg-space-lg);
      border-radius: var(--sg-shape-md);
      background: var(--sg-color-info);
      color: var(--sg-color-on-info);
      font-size: var(--sg-font-size-sm);
      align-items: flex-start;
    }
    :host([variant='success']) {
      background: var(--sg-color-success);
      color: var(--sg-color-on-success);
    }
    :host([variant='warning']) {
      background: var(--sg-color-warning);
      color: var(--sg-color-on-warning);
    }
    :host([variant='error']) {
      background: var(--sg-color-error);
      color: var(--sg-color-on-error);
    }
    .icon {
      font-size: var(--sg-font-size-md);
      flex-shrink: 0;
      line-height: 1.4;
    }
    .content {
      flex: 1;
      line-height: 1.4;
    }
  `);
At(re, 1, at);
var Hn = Object.create, lr = Object.defineProperty, Ln = Object.getOwnPropertyDescriptor, ta = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), ge = (t) => {
  throw TypeError(t);
}, ra = (t, e, r) => e in t ? lr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Rs = (t, e) => lr(t, "name", { value: e, configurable: !0 }), Gn = (t) => [, , , Hn(t?.[ta("metadata")] ?? null)], sa = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], De = (t) => t !== void 0 && typeof t != "function" ? ge("Function expected") : t, qn = (t, e, r, o, i) => ({ kind: sa[t], name: e, metadata: o, addInitializer: (a) => r._ ? ge("Already initialized") : i.push(De(a || null)) }), Vn = (t, e) => ra(e, ta("metadata"), t[3]), Ot = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, ia = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = sa[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && Ln(s < 4 ? i : { get [r]() {
    return Hs(this, a);
  }, set [r](c) {
    return Ls(this, a, c);
  } }, r));
  s ? h && s < 4 && Rs(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : Rs(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = qn(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => Zn(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? Hs : Kn)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => Ls(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? De(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? ge("Object expected") : (De(l = n.get) && (d.get = l), De(l = n.set) && (d.set = l), De(l = n.init) && y.unshift(l));
  return s || Vn(t, i), d && lr(i, r, d), h ? s ^ 4 ? a : d : i;
}, Xn = (t, e, r) => ra(t, e + "", r), dr = (t, e, r) => e.has(t) || ge("Cannot " + r), Zn = (t, e) => Object(e) !== e ? ge('Cannot use the "in" operator on this value') : t.has(e), Hs = (t, e, r) => (dr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Jn = (t, e, r) => e.has(t) ? ge("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ls = (t, e, r, o) => (dr(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), Kn = (t, e, r) => (dr(t, e, "access private method"), r), aa, Et, oa, se, hr;
oa = [O("sg-badge")];
class ot extends (Et = k, aa = [m({ type: String, reflect: !0 })], Et) {
  constructor() {
    super(...arguments), Jn(this, hr, Ot(se, 8, this, "primary")), Ot(se, 11, this);
  }
  render() {
    return x`<slot></slot>`;
  }
}
se = Gn(Et);
hr = /* @__PURE__ */ new WeakMap();
ia(se, 4, "variant", aa, ot, hr);
ot = ia(se, 0, "SgBadge", oa, ot);
Xn(ot, "styles", C`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 var(--sg-space-sm);
      min-height: 18px;
      min-width: 18px;
      box-sizing: border-box;
      border-radius: var(--sg-shape-round);
      font-size: var(--sg-font-size-xs);
      font-weight: var(--sg-font-weight-medium);
      line-height: 1;
      background: var(--sg-color-primary);
      color: var(--sg-color-on-primary);
    }
    :host([variant='success']) {
      background: var(--sg-color-success);
      color: var(--sg-color-on-success);
    }
    :host([variant='warning']) {
      background: var(--sg-color-warning);
      color: var(--sg-color-on-warning);
    }
    :host([variant='error']) {
      background: var(--sg-color-error);
      color: var(--sg-color-on-error);
    }
    :host([variant='info']) {
      background: var(--sg-color-info);
      color: var(--sg-color-on-info);
    }
    :host([variant='neutral']) {
      background: var(--sg-color-surface-variant);
      color: var(--sg-color-on-surface-variant);
    }
  `);
Ot(se, 1, ot);
var Qn = Object.create, pr = Object.defineProperty, Yn = Object.getOwnPropertyDescriptor, na = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), fe = (t) => {
  throw TypeError(t);
}, ca = (t, e, r) => e in t ? pr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Gs = (t, e) => pr(t, "name", { value: e, configurable: !0 }), jn = (t) => [, , , Qn(t?.[na("metadata")] ?? null)], la = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Te = (t) => t !== void 0 && typeof t != "function" ? fe("Function expected") : t, ec = (t, e, r, o, i) => ({ kind: la[t], name: e, metadata: o, addInitializer: (a) => r._ ? fe("Already initialized") : i.push(Te(a || null)) }), tc = (t, e) => ca(e, na("metadata"), t[3]), V = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, wt = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = la[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && Yn(s < 4 ? i : { get [r]() {
    return qs(this, a);
  }, set [r](c) {
    return Vs(this, a, c);
  } }, r));
  s ? h && s < 4 && Gs(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : Gs(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = ec(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => sc(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? qs : ic)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => Vs(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? Te(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? fe("Object expected") : (Te(l = n.get) && (d.get = l), Te(l = n.set) && (d.set = l), Te(l = n.init) && y.unshift(l));
  return s || tc(t, i), d && pr(i, r, d), h ? s ^ 4 ? a : d : i;
}, rc = (t, e, r) => ca(t, e + "", r), vr = (t, e, r) => e.has(t) || fe("Cannot " + r), sc = (t, e) => Object(e) !== e ? fe('Cannot use the "in" operator on this value') : t.has(e), qs = (t, e, r) => (vr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), kt = (t, e, r) => e.has(t) ? fe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Vs = (t, e, r, o) => (vr(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), ic = (t, e, r) => (vr(t, e, "access private method"), r), da, ha, pa, zt, va, M, _r, ur, gr;
va = [O("sg-button")];
class J extends (zt = k, pa = [m({ type: Boolean, reflect: !0 })], ha = [m({ type: String, reflect: !0 })], da = [m({ type: String, reflect: !0 })], zt) {
  constructor() {
    super(...arguments), kt(this, _r, V(M, 8, this, !1)), V(M, 11, this), kt(this, ur, V(M, 12, this, "solid")), V(M, 15, this), kt(this, gr, V(M, 16, this, "md")), V(M, 19, this);
  }
  render() {
    return x`<button ?disabled=${this.disabled}><slot></slot></button>`;
  }
}
M = jn(zt);
_r = /* @__PURE__ */ new WeakMap();
ur = /* @__PURE__ */ new WeakMap();
gr = /* @__PURE__ */ new WeakMap();
wt(M, 4, "disabled", pa, J, _r);
wt(M, 4, "variant", ha, J, ur);
wt(M, 4, "size", da, J, gr);
J = wt(M, 0, "SgButton", va, J);
rc(J, "styles", C`
    :host {
      display: inline-flex;
    }
    button {
      font: inherit;
      font-weight: var(--sg-font-weight-medium);
      padding: var(--sg-space-sm) var(--sg-space-lg);
      border-radius: var(--sg-shape-md);
      border: 1px solid var(--sg-color-primary);
      background: var(--sg-color-primary);
      color: var(--sg-color-on-primary);
      cursor: pointer;
      transition:
        background var(--sg-duration-fast) var(--sg-easing-standard),
        border-color var(--sg-duration-fast) var(--sg-easing-standard),
        opacity var(--sg-duration-fast) var(--sg-easing-standard);
    }
    button:hover:not(:disabled) {
      background: var(--sg-color-primary-hover);
      border-color: var(--sg-color-primary-hover);
    }
    button:active:not(:disabled) {
      background: var(--sg-color-primary-active);
      border-color: var(--sg-color-primary-active);
    }
    button:focus-visible {
      outline: 2px solid var(--sg-color-primary);
      outline-offset: 2px;
    }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    :host([size='sm']) button {
      padding: var(--sg-space-xs) var(--sg-space-md);
      font-size: var(--sg-font-size-sm);
    }
    :host([size='lg']) button {
      padding: var(--sg-space-md) var(--sg-space-xl);
      font-size: var(--sg-font-size-lg);
    }

    :host([variant='ghost']) button,
    :host([variant='outline']) button {
      background: transparent;
      color: var(--sg-color-primary);
    }
    :host([variant='ghost']) button {
      border-color: transparent;
    }
    :host([variant='ghost']) button:hover:not(:disabled),
    :host([variant='outline']) button:hover:not(:disabled) {
      background: var(--sg-color-surface-variant);
      border-color: var(--sg-color-primary);
    }

    :host([variant='tonal']) button {
      background: var(--sg-color-primary-container);
      border-color: var(--sg-color-primary-container);
      color: var(--sg-color-on-primary-container);
    }
    :host([variant='tonal']) button:hover:not(:disabled) {
      background: var(--sg-color-primary-container-hover);
      border-color: var(--sg-color-primary-container-hover);
    }
    :host([variant='tonal']) button:active:not(:disabled) {
      background: var(--sg-color-primary-container-hover);
      border-color: var(--sg-color-primary-container-hover);
    }

    :host([variant='danger']) button {
      background: var(--sg-color-error);
      border-color: var(--sg-color-error);
      color: var(--sg-color-on-error);
    }
  `);
V(M, 1, J);
var ac = Object.create, fr = Object.defineProperty, oc = Object.getOwnPropertyDescriptor, _a = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), $e = (t) => {
  throw TypeError(t);
}, ua = (t, e, r) => e in t ? fr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Xs = (t, e) => fr(t, "name", { value: e, configurable: !0 }), nc = (t) => [, , , ac(t?.[_a("metadata")] ?? null)], ga = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Ne = (t) => t !== void 0 && typeof t != "function" ? $e("Function expected") : t, cc = (t, e, r, o, i) => ({ kind: ga[t], name: e, metadata: o, addInitializer: (a) => r._ ? $e("Already initialized") : i.push(Ne(a || null)) }), lc = (t, e) => ua(e, _a("metadata"), t[3]), Pt = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, fa = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = ga[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && oc(s < 4 ? i : { get [r]() {
    return Zs(this, a);
  }, set [r](c) {
    return Js(this, a, c);
  } }, r));
  s ? h && s < 4 && Xs(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : Xs(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = cc(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => hc(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? Zs : vc)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => Js(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? Ne(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? $e("Object expected") : (Ne(l = n.get) && (d.get = l), Ne(l = n.set) && (d.set = l), Ne(l = n.init) && y.unshift(l));
  return s || lc(t, i), d && fr(i, r, d), h ? s ^ 4 ? a : d : i;
}, dc = (t, e, r) => ua(t, e + "", r), $r = (t, e, r) => e.has(t) || $e("Cannot " + r), hc = (t, e) => Object(e) !== e ? $e('Cannot use the "in" operator on this value') : t.has(e), Zs = (t, e, r) => ($r(t, e, "read from private field"), r ? r.call(t) : e.get(t)), pc = (t, e, r) => e.has(t) ? $e("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Js = (t, e, r, o) => ($r(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), vc = (t, e, r) => ($r(t, e, "access private method"), r), $a, Mt, ba, ie, br;
ba = [O("sg-card")];
class nt extends (Mt = k, $a = [m({ type: String, reflect: !0 })], Mt) {
  constructor() {
    super(...arguments), pc(this, br, Pt(ie, 8, this, "1")), Pt(ie, 11, this);
  }
  render() {
    return x`
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
    `;
  }
}
ie = nc(Mt);
br = /* @__PURE__ */ new WeakMap();
fa(ie, 4, "elevation", $a, nt, br);
nt = fa(ie, 0, "SgCard", ba, nt);
dc(nt, "styles", C`
    :host {
      display: block;
      background: var(--sg-color-surface);
      border: 1px solid var(--sg-color-outline-variant);
      border-radius: var(--sg-shape-lg);
      padding: var(--sg-space-lg);
      box-shadow: var(--sg-elevation-1);
    }
    :host([elevation='0']) {
      box-shadow: none;
    }
    :host([elevation='2']) {
      box-shadow: var(--sg-elevation-2);
    }
    :host([elevation='3']) {
      box-shadow: var(--sg-elevation-3);
    }
    ::slotted([slot='header']) {
      font-size: var(--sg-font-size-lg);
      font-weight: var(--sg-font-weight-medium);
      margin: 0 0 var(--sg-space-md) 0;
    }
    ::slotted([slot='footer']) {
      margin-top: var(--sg-space-md);
      padding-top: var(--sg-space-md);
      border-top: 1px solid var(--sg-color-outline-variant);
    }
  `);
Pt(ie, 1, nt);
var _c = Object.create, yr = Object.defineProperty, uc = Object.getOwnPropertyDescriptor, ya = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), be = (t) => {
  throw TypeError(t);
}, ma = (t, e, r) => e in t ? yr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ks = (t, e) => yr(t, "name", { value: e, configurable: !0 }), gc = (t) => [, , , _c(t?.[ya("metadata")] ?? null)], wa = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Fe = (t) => t !== void 0 && typeof t != "function" ? be("Function expected") : t, fc = (t, e, r, o, i) => ({ kind: wa[t], name: e, metadata: o, addInitializer: (a) => r._ ? be("Already initialized") : i.push(Fe(a || null)) }), $c = (t, e) => ma(e, ya("metadata"), t[3]), Ue = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, mr = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = wa[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && uc(s < 4 ? i : { get [r]() {
    return Qs(this, a);
  }, set [r](c) {
    return js(this, a, c);
  } }, r));
  s ? h && s < 4 && Ks(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : Ks(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = fc(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => bc(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? Qs : yc)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => js(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? Fe(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? be("Object expected") : (Fe(l = n.get) && (d.get = l), Fe(l = n.set) && (d.set = l), Fe(l = n.init) && y.unshift(l));
  return s || $c(t, i), d && yr(i, r, d), h ? s ^ 4 ? a : d : i;
}, Sa = (t, e, r) => ma(t, typeof e != "symbol" ? e + "" : e, r), wr = (t, e, r) => e.has(t) || be("Cannot " + r), bc = (t, e) => Object(e) !== e ? be('Cannot use the "in" operator on this value') : t.has(e), Qs = (t, e, r) => (wr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Ys = (t, e, r) => e.has(t) ? be("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), js = (t, e, r, o) => (wr(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), yc = (t, e, r) => (wr(t, e, "access private method"), r), ka, xa, It, Aa, N, Sr, kr;
Aa = [O("sg-checkbox")];
class ae extends (It = k, xa = [m({ type: Boolean, reflect: !0 })], ka = [m({ type: Boolean, reflect: !0 })], It) {
  constructor() {
    super(...arguments), Ys(this, Sr, Ue(N, 8, this, !1)), Ue(N, 11, this), Ys(this, kr, Ue(N, 12, this, !1)), Ue(N, 15, this), Sa(this, "handleChange", (e) => {
      const r = e.target;
      this.checked = r.checked, this.dispatchEvent(
        new CustomEvent("sg-change", {
          detail: { checked: this.checked },
          bubbles: !0,
          composed: !0
        })
      );
    });
  }
  render() {
    return x`
      <label>
        <input
          type="checkbox"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        />
        <slot></slot>
      </label>
    `;
  }
}
N = gc(It);
Sr = /* @__PURE__ */ new WeakMap();
kr = /* @__PURE__ */ new WeakMap();
mr(N, 4, "checked", xa, ae, Sr);
mr(N, 4, "disabled", ka, ae, kr);
ae = mr(N, 0, "SgCheckbox", Aa, ae);
Sa(ae, "styles", C`
    :host {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }
    :host([disabled]) {
      cursor: not-allowed;
      opacity: 0.5;
    }
    label {
      display: inline-flex;
      align-items: center;
      gap: var(--sg-space-sm);
      cursor: inherit;
      font-size: var(--sg-font-size-sm);
      color: var(--sg-color-on-surface);
    }
    input {
      appearance: none;
      width: 16px;
      height: 16px;
      margin: 0;
      border: 1px solid var(--sg-color-outline);
      border-radius: var(--sg-shape-sm);
      background: var(--sg-color-surface);
      cursor: inherit;
      display: grid;
      place-items: center;
      transition:
        background var(--sg-duration-fast) var(--sg-easing-standard),
        border-color var(--sg-duration-fast) var(--sg-easing-standard);
    }
    input:checked {
      background: var(--sg-color-primary);
      border-color: var(--sg-color-primary);
    }
    input:checked::after {
      content: '';
      width: 12px;
      height: 12px;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='white' d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
      background-size: contain;
      background-repeat: no-repeat;
    }
    input:focus-visible {
      outline: 2px solid var(--sg-color-primary);
      outline-offset: 2px;
    }
  `);
Ue(N, 1, ae);
var mc = Object.create, xr = Object.defineProperty, wc = Object.getOwnPropertyDescriptor, Ca = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), ye = (t) => {
  throw TypeError(t);
}, Oa = (t, e, r) => e in t ? xr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ei = (t, e) => xr(t, "name", { value: e, configurable: !0 }), Sc = (t) => [, , , mc(t?.[Ca("metadata")] ?? null)], Ea = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Be = (t) => t !== void 0 && typeof t != "function" ? ye("Function expected") : t, kc = (t, e, r, o, i) => ({ kind: Ea[t], name: e, metadata: o, addInitializer: (a) => r._ ? ye("Already initialized") : i.push(Be(a || null)) }), xc = (t, e) => Oa(e, Ca("metadata"), t[3]), Re = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, Ar = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = Ea[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && wc(s < 4 ? i : { get [r]() {
    return ti(this, a);
  }, set [r](c) {
    return si(this, a, c);
  } }, r));
  s ? h && s < 4 && ei(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : ei(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = kc(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => Ac(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? ti : Cc)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => si(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? Be(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? ye("Object expected") : (Be(l = n.get) && (d.get = l), Be(l = n.set) && (d.set = l), Be(l = n.init) && y.unshift(l));
  return s || xc(t, i), d && xr(i, r, d), h ? s ^ 4 ? a : d : i;
}, za = (t, e, r) => Oa(t, typeof e != "symbol" ? e + "" : e, r), Cr = (t, e, r) => e.has(t) || ye("Cannot " + r), Ac = (t, e) => Object(e) !== e ? ye('Cannot use the "in" operator on this value') : t.has(e), ti = (t, e, r) => (Cr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ri = (t, e, r) => e.has(t) ? ye("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), si = (t, e, r, o) => (Cr(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), Cc = (t, e, r) => (Cr(t, e, "access private method"), r), Pa, Ma, Wt, Ia, F, Or, Er;
Ia = [O("sg-chip")];
class oe extends (Wt = k, Ma = [m({ type: String, reflect: !0 })], Pa = [m({ type: Boolean, reflect: !0 })], Wt) {
  constructor() {
    super(...arguments), ri(this, Or, Re(F, 8, this, "neutral")), Re(F, 11, this), ri(this, Er, Re(F, 12, this, !1)), Re(F, 15, this), za(this, "handleRemove", () => {
      this.dispatchEvent(new CustomEvent("sg-remove", { bubbles: !0, composed: !0 }));
    });
  }
  render() {
    return x`
      <slot></slot>
      ${this.removable ? x`<button @click=${this.handleRemove} aria-label="Remove">×</button>` : ""}
    `;
  }
}
F = Sc(Wt);
Or = /* @__PURE__ */ new WeakMap();
Er = /* @__PURE__ */ new WeakMap();
Ar(F, 4, "variant", Ma, oe, Or);
Ar(F, 4, "removable", Pa, oe, Er);
oe = Ar(F, 0, "SgChip", Ia, oe);
za(oe, "styles", C`
    :host {
      display: inline-flex;
      align-items: center;
      gap: var(--sg-space-xs);
      padding: var(--sg-space-xs) var(--sg-space-md);
      border-radius: var(--sg-shape-round);
      background: var(--sg-color-surface-variant);
      color: var(--sg-color-on-surface-variant);
      font-size: var(--sg-font-size-sm);
      line-height: 1.4;
    }
    :host([variant='primary']) {
      background: var(--sg-color-primary);
      color: var(--sg-color-on-primary);
    }
    button {
      all: unset;
      cursor: pointer;
      width: 16px;
      height: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      opacity: 0.7;
      font-size: var(--sg-font-size-md);
      line-height: 1;
    }
    button:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.1);
    }
    button:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 1px;
    }
  `);
Re(F, 1, oe);
var Oc = Object.create, zr = Object.defineProperty, Ec = Object.getOwnPropertyDescriptor, Wa = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), me = (t) => {
  throw TypeError(t);
}, Da = (t, e, r) => e in t ? zr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ii = (t, e) => zr(t, "name", { value: e, configurable: !0 }), zc = (t) => [, , , Oc(t?.[Wa("metadata")] ?? null)], Ta = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], He = (t) => t !== void 0 && typeof t != "function" ? me("Function expected") : t, Pc = (t, e, r, o, i) => ({ kind: Ta[t], name: e, metadata: o, addInitializer: (a) => r._ ? me("Already initialized") : i.push(He(a || null)) }), Mc = (t, e) => Da(e, Wa("metadata"), t[3]), Dt = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, Na = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = Ta[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && Ec(s < 4 ? i : { get [r]() {
    return ai(this, a);
  }, set [r](c) {
    return oi(this, a, c);
  } }, r));
  s ? h && s < 4 && ii(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : ii(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = Pc(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => Wc(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? ai : Tc)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => oi(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? He(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? me("Object expected") : (He(l = n.get) && (d.get = l), He(l = n.set) && (d.set = l), He(l = n.init) && y.unshift(l));
  return s || Mc(t, i), d && zr(i, r, d), h ? s ^ 4 ? a : d : i;
}, Ic = (t, e, r) => Da(t, e + "", r), Pr = (t, e, r) => e.has(t) || me("Cannot " + r), Wc = (t, e) => Object(e) !== e ? me('Cannot use the "in" operator on this value') : t.has(e), ai = (t, e, r) => (Pr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Dc = (t, e, r) => e.has(t) ? me("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), oi = (t, e, r, o) => (Pr(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), Tc = (t, e, r) => (Pr(t, e, "access private method"), r), Fa, Tt, Ua, ne, Mr;
Ua = [O("sg-divider")];
class ct extends (Tt = k, Fa = [m({ type: String, reflect: !0 })], Tt) {
  constructor() {
    super(...arguments), Dc(this, Mr, Dt(ne, 8, this, "horizontal")), Dt(ne, 11, this);
  }
}
ne = zc(Tt);
Mr = /* @__PURE__ */ new WeakMap();
Na(ne, 4, "orientation", Fa, ct, Mr);
ct = Na(ne, 0, "SgDivider", Ua, ct);
Ic(ct, "styles", C`
    :host {
      display: block;
      height: 1px;
      width: 100%;
      background: var(--sg-color-outline-variant);
      margin: var(--sg-space-md) 0;
    }
    :host([orientation='vertical']) {
      display: inline-block;
      height: 100%;
      width: 1px;
      margin: 0 var(--sg-space-md);
    }
  `);
Dt(ne, 1, ct);
var Nc = Object.create, Ir = Object.defineProperty, Fc = Object.getOwnPropertyDescriptor, Ba = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), we = (t) => {
  throw TypeError(t);
}, Ra = (t, e, r) => e in t ? Ir(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ni = (t, e) => Ir(t, "name", { value: e, configurable: !0 }), Uc = (t) => [, , , Nc(t?.[Ba("metadata")] ?? null)], Ha = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Le = (t) => t !== void 0 && typeof t != "function" ? we("Function expected") : t, Bc = (t, e, r, o, i) => ({ kind: Ha[t], name: e, metadata: o, addInitializer: (a) => r._ ? we("Already initialized") : i.push(Le(a || null)) }), Rc = (t, e) => Ra(e, Ba("metadata"), t[3]), P = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, K = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = Ha[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && Fc(s < 4 ? i : { get [r]() {
    return ci(this, a);
  }, set [r](c) {
    return li(this, a, c);
  } }, r));
  s ? h && s < 4 && ni(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : ni(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = Bc(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => Hc(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? ci : Lc)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => li(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? Le(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? we("Object expected") : (Le(l = n.get) && (d.get = l), Le(l = n.set) && (d.set = l), Le(l = n.init) && y.unshift(l));
  return s || Rc(t, i), d && Ir(i, r, d), h ? s ^ 4 ? a : d : i;
}, La = (t, e, r) => Ra(t, typeof e != "symbol" ? e + "" : e, r), Wr = (t, e, r) => e.has(t) || we("Cannot " + r), Hc = (t, e) => Object(e) !== e ? we('Cannot use the "in" operator on this value') : t.has(e), ci = (t, e, r) => (Wr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Q = (t, e, r) => e.has(t) ? we("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), li = (t, e, r, o) => (Wr(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), Lc = (t, e, r) => (Wr(t, e, "access private method"), r), Ga, qa, Va, Xa, Za, Ja, Nt, Ka, S, Dr, Tr, Nr, Fr, Ur, Br;
Ka = [O("sg-input")];
class I extends (Nt = k, Ja = [m({ type: String })], Za = [m({ type: String })], Xa = [m({ type: String })], Va = [m({ type: String })], qa = [m({ type: Boolean, reflect: !0 })], Ga = [m({ type: Boolean, reflect: !0 })], Nt) {
  constructor() {
    super(...arguments), Q(this, Dr, P(S, 8, this, "text")), P(S, 11, this), Q(this, Tr, P(S, 12, this, "")), P(S, 15, this), Q(this, Nr, P(S, 16, this, "")), P(S, 19, this), Q(this, Fr, P(S, 20, this, "")), P(S, 23, this), Q(this, Ur, P(S, 24, this, !1)), P(S, 27, this), Q(this, Br, P(S, 28, this, !1)), P(S, 31, this), La(this, "handleInput", (e) => {
      const r = e.target;
      this.value = r.value, this.dispatchEvent(
        new CustomEvent("sg-input", {
          detail: { value: this.value },
          bubbles: !0,
          composed: !0
        })
      );
    });
  }
  render() {
    return x`
      <input
        .type=${this.type}
        .value=${this.value}
        placeholder=${this.placeholder}
        name=${this.name}
        ?disabled=${this.disabled}
        @input=${this.handleInput}
      />
    `;
  }
}
S = Uc(Nt);
Dr = /* @__PURE__ */ new WeakMap();
Tr = /* @__PURE__ */ new WeakMap();
Nr = /* @__PURE__ */ new WeakMap();
Fr = /* @__PURE__ */ new WeakMap();
Ur = /* @__PURE__ */ new WeakMap();
Br = /* @__PURE__ */ new WeakMap();
K(S, 4, "type", Ja, I, Dr);
K(S, 4, "value", Za, I, Tr);
K(S, 4, "placeholder", Xa, I, Nr);
K(S, 4, "name", Va, I, Fr);
K(S, 4, "disabled", qa, I, Ur);
K(S, 4, "invalid", Ga, I, Br);
I = K(S, 0, "SgInput", Ka, I);
La(I, "styles", C`
    :host {
      display: inline-block;
      width: 100%;
    }
    input {
      font: inherit;
      width: 100%;
      box-sizing: border-box;
      padding: var(--sg-space-sm) var(--sg-space-md);
      border-radius: var(--sg-shape-md);
      border: 1px solid var(--sg-color-outline);
      background: var(--sg-color-surface);
      color: var(--sg-color-on-surface);
      transition:
        border-color var(--sg-duration-fast) var(--sg-easing-standard),
        box-shadow var(--sg-duration-fast) var(--sg-easing-standard);
    }
    input::placeholder {
      color: var(--sg-color-on-surface-variant);
    }
    input:focus {
      outline: none;
      border-color: var(--sg-color-primary);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--sg-color-primary) 25%, transparent);
    }
    input:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: var(--sg-color-surface-variant);
    }
    :host([invalid]) input {
      border-color: var(--sg-color-error);
    }
    :host([invalid]) input:focus {
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--sg-color-error) 25%, transparent);
    }
  `);
P(S, 1, I);
var Gc = Object.create, Rr = Object.defineProperty, qc = Object.getOwnPropertyDescriptor, Qa = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), Se = (t) => {
  throw TypeError(t);
}, Ya = (t, e, r) => e in t ? Rr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, di = (t, e) => Rr(t, "name", { value: e, configurable: !0 }), Vc = (t) => [, , , Gc(t?.[Qa("metadata")] ?? null)], ja = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Ge = (t) => t !== void 0 && typeof t != "function" ? Se("Function expected") : t, Xc = (t, e, r, o, i) => ({ kind: ja[t], name: e, metadata: o, addInitializer: (a) => r._ ? Se("Already initialized") : i.push(Ge(a || null)) }), Zc = (t, e) => Ya(e, Qa("metadata"), t[3]), Ft = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, eo = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = ja[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && qc(s < 4 ? i : { get [r]() {
    return hi(this, a);
  }, set [r](c) {
    return pi(this, a, c);
  } }, r));
  s ? h && s < 4 && di(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : di(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = Xc(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => Kc(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? hi : Yc)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => pi(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? Ge(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? Se("Object expected") : (Ge(l = n.get) && (d.get = l), Ge(l = n.set) && (d.set = l), Ge(l = n.init) && y.unshift(l));
  return s || Zc(t, i), d && Rr(i, r, d), h ? s ^ 4 ? a : d : i;
}, Jc = (t, e, r) => Ya(t, e + "", r), Hr = (t, e, r) => e.has(t) || Se("Cannot " + r), Kc = (t, e) => Object(e) !== e ? Se('Cannot use the "in" operator on this value') : t.has(e), hi = (t, e, r) => (Hr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Qc = (t, e, r) => e.has(t) ? Se("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), pi = (t, e, r, o) => (Hr(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), Yc = (t, e, r) => (Hr(t, e, "access private method"), r), to, Ut, ro, ce, Lr;
ro = [O("sg-label")];
class lt extends (Ut = k, to = [m({ type: Boolean, reflect: !0 })], Ut) {
  constructor() {
    super(...arguments), Qc(this, Lr, Ft(ce, 8, this, !1)), Ft(ce, 11, this);
  }
  render() {
    return x`<slot></slot>`;
  }
}
ce = Vc(Ut);
Lr = /* @__PURE__ */ new WeakMap();
eo(ce, 4, "required", to, lt, Lr);
lt = eo(ce, 0, "SgLabel", ro, lt);
Jc(lt, "styles", C`
    :host {
      display: block;
      font-size: var(--sg-font-size-sm);
      font-weight: var(--sg-font-weight-medium);
      color: var(--sg-color-on-surface);
      margin-bottom: var(--sg-space-xs);
    }
    :host([required])::after {
      content: ' *';
      color: var(--sg-color-error);
    }
  `);
Ft(ce, 1, lt);
var jc = Object.create, Gr = Object.defineProperty, el = Object.getOwnPropertyDescriptor, so = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), ke = (t) => {
  throw TypeError(t);
}, io = (t, e, r) => e in t ? Gr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, vi = (t, e) => Gr(t, "name", { value: e, configurable: !0 }), tl = (t) => [, , , jc(t?.[so("metadata")] ?? null)], ao = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], qe = (t) => t !== void 0 && typeof t != "function" ? ke("Function expected") : t, rl = (t, e, r, o, i) => ({ kind: ao[t], name: e, metadata: o, addInitializer: (a) => r._ ? ke("Already initialized") : i.push(qe(a || null)) }), sl = (t, e) => io(e, so("metadata"), t[3]), Bt = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, oo = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = ao[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && el(s < 4 ? i : { get [r]() {
    return _i(this, a);
  }, set [r](c) {
    return ui(this, a, c);
  } }, r));
  s ? h && s < 4 && vi(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : vi(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = rl(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => il(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? _i : ol)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => ui(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? qe(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? ke("Object expected") : (qe(l = n.get) && (d.get = l), qe(l = n.set) && (d.set = l), qe(l = n.init) && y.unshift(l));
  return s || sl(t, i), d && Gr(i, r, d), h ? s ^ 4 ? a : d : i;
}, no = (t, e, r) => io(t, typeof e != "symbol" ? e + "" : e, r), qr = (t, e, r) => e.has(t) || ke("Cannot " + r), il = (t, e) => Object(e) !== e ? ke('Cannot use the "in" operator on this value') : t.has(e), _i = (t, e, r) => (qr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), al = (t, e, r) => e.has(t) ? ke("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), ui = (t, e, r, o) => (qr(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), ol = (t, e, r) => (qr(t, e, "access private method"), r), co, Rt, lo, le, Vr;
lo = [O("sg-modal")];
class dt extends (Rt = k, co = [m({ type: Boolean, reflect: !0 })], Rt) {
  constructor() {
    super(...arguments), al(this, Vr, Bt(le, 8, this, !1)), Bt(le, 11, this), no(this, "handleBackdropClick", (e) => {
      e.target === this && this.close();
    });
  }
  close() {
    this.open = !1, this.dispatchEvent(new CustomEvent("sg-close", { bubbles: !0, composed: !0 }));
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", this.handleBackdropClick);
  }
  render() {
    return x`
      <div class="panel">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
}
le = tl(Rt);
Vr = /* @__PURE__ */ new WeakMap();
oo(le, 4, "open", co, dt, Vr);
dt = oo(le, 0, "SgModal", lo, dt);
no(dt, "styles", C`
    :host {
      display: none;
      position: fixed;
      inset: 0;
      z-index: var(--sg-z-modal);
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
    }
    :host([open]) {
      display: flex;
    }
    .panel {
      background: var(--sg-color-surface);
      border-radius: var(--sg-shape-lg);
      padding: var(--sg-space-xl);
      max-width: 500px;
      width: 90%;
      box-shadow: var(--sg-elevation-4);
      color: var(--sg-color-on-surface);
    }
    ::slotted([slot='header']) {
      font-size: var(--sg-font-size-xl);
      font-weight: var(--sg-font-weight-bold);
      margin: 0 0 var(--sg-space-lg) 0;
    }
    ::slotted([slot='footer']) {
      display: flex;
      justify-content: flex-end;
      gap: var(--sg-space-sm);
      margin-top: var(--sg-space-lg);
    }
  `);
Bt(le, 1, dt);
var nl = Object.create, Xr = Object.defineProperty, cl = Object.getOwnPropertyDescriptor, ho = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), xe = (t) => {
  throw TypeError(t);
}, po = (t, e, r) => e in t ? Xr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, gi = (t, e) => Xr(t, "name", { value: e, configurable: !0 }), ll = (t) => [, , , nl(t?.[ho("metadata")] ?? null)], vo = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Ve = (t) => t !== void 0 && typeof t != "function" ? xe("Function expected") : t, dl = (t, e, r, o, i) => ({ kind: vo[t], name: e, metadata: o, addInitializer: (a) => r._ ? xe("Already initialized") : i.push(Ve(a || null)) }), hl = (t, e) => po(e, ho("metadata"), t[3]), Xe = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, Zr = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = vo[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && cl(s < 4 ? i : { get [r]() {
    return fi(this, a);
  }, set [r](c) {
    return bi(this, a, c);
  } }, r));
  s ? h && s < 4 && gi(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : gi(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = dl(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => vl(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? fi : _l)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => bi(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? Ve(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? xe("Object expected") : (Ve(l = n.get) && (d.get = l), Ve(l = n.set) && (d.set = l), Ve(l = n.init) && y.unshift(l));
  return s || hl(t, i), d && Xr(i, r, d), h ? s ^ 4 ? a : d : i;
}, pl = (t, e, r) => po(t, e + "", r), Jr = (t, e, r) => e.has(t) || xe("Cannot " + r), vl = (t, e) => Object(e) !== e ? xe('Cannot use the "in" operator on this value') : t.has(e), fi = (t, e, r) => (Jr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), $i = (t, e, r) => e.has(t) ? xe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), bi = (t, e, r, o) => (Jr(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), _l = (t, e, r) => (Jr(t, e, "access private method"), r), _o, uo, Ht, go, U, Kr, Qr;
go = [O("sg-progress")];
class de extends (Ht = k, uo = [m({ type: Number })], _o = [m({ type: Boolean, reflect: !0 })], Ht) {
  constructor() {
    super(...arguments), $i(this, Kr, Xe(U, 8, this, 0)), Xe(U, 11, this), $i(this, Qr, Xe(U, 12, this, !1)), Xe(U, 15, this);
  }
  render() {
    const e = this.indeterminate ? void 0 : `${Math.max(0, Math.min(100, this.value))}%`;
    return x`<div class="bar" style=${e ? `width: ${e}` : ""}></div>`;
  }
}
U = ll(Ht);
Kr = /* @__PURE__ */ new WeakMap();
Qr = /* @__PURE__ */ new WeakMap();
Zr(U, 4, "value", uo, de, Kr);
Zr(U, 4, "indeterminate", _o, de, Qr);
de = Zr(U, 0, "SgProgress", go, de);
pl(de, "styles", C`
    :host {
      display: block;
      width: 100%;
      height: 6px;
      background: var(--sg-color-surface-variant);
      border-radius: var(--sg-shape-round);
      overflow: hidden;
      position: relative;
    }
    .bar {
      height: 100%;
      background: var(--sg-color-primary);
      border-radius: inherit;
      transition: width var(--sg-duration-normal) var(--sg-easing-standard);
    }
    :host([indeterminate]) .bar {
      width: 30%;
      animation: sg-progress 1.2s var(--sg-easing-standard) infinite;
    }
    @keyframes sg-progress {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(400%);
      }
    }
  `);
Xe(U, 1, de);
var ul = Object.create, Yr = Object.defineProperty, gl = Object.getOwnPropertyDescriptor, fo = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), Ae = (t) => {
  throw TypeError(t);
}, $o = (t, e, r) => e in t ? Yr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, yi = (t, e) => Yr(t, "name", { value: e, configurable: !0 }), fl = (t) => [, , , ul(t?.[fo("metadata")] ?? null)], bo = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Ze = (t) => t !== void 0 && typeof t != "function" ? Ae("Function expected") : t, $l = (t, e, r, o, i) => ({ kind: bo[t], name: e, metadata: o, addInitializer: (a) => r._ ? Ae("Already initialized") : i.push(Ze(a || null)) }), bl = (t, e) => $o(e, fo("metadata"), t[3]), W = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, vt = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = bo[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && gl(s < 4 ? i : { get [r]() {
    return mi(this, a);
  }, set [r](c) {
    return wi(this, a, c);
  } }, r));
  s ? h && s < 4 && yi(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : yi(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = $l(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => yl(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? mi : ml)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => wi(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? Ze(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? Ae("Object expected") : (Ze(l = n.get) && (d.get = l), Ze(l = n.set) && (d.set = l), Ze(l = n.init) && y.unshift(l));
  return s || bl(t, i), d && Yr(i, r, d), h ? s ^ 4 ? a : d : i;
}, yo = (t, e, r) => $o(t, typeof e != "symbol" ? e + "" : e, r), jr = (t, e, r) => e.has(t) || Ae("Cannot " + r), yl = (t, e) => Object(e) !== e ? Ae('Cannot use the "in" operator on this value') : t.has(e), mi = (t, e, r) => (jr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ut = (t, e, r) => e.has(t) ? Ae("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), wi = (t, e, r, o) => (jr(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), ml = (t, e, r) => (jr(t, e, "access private method"), r), mo, wo, So, ko, Lt, xo, E, es, ts, rs, ss;
xo = [O("sg-radio")];
class L extends (Lt = k, ko = [m({ type: String, reflect: !0 })], So = [m({ type: String })], wo = [m({ type: Boolean, reflect: !0 })], mo = [m({ type: Boolean, reflect: !0 })], Lt) {
  constructor() {
    super(...arguments), ut(this, es, W(E, 8, this, "")), W(E, 11, this), ut(this, ts, W(E, 12, this, "")), W(E, 15, this), ut(this, rs, W(E, 16, this, !1)), W(E, 19, this), ut(this, ss, W(E, 20, this, !1)), W(E, 23, this), yo(this, "handleChange", (e) => {
      const r = e.target;
      this.checked = r.checked, this.dispatchEvent(
        new CustomEvent("sg-change", {
          detail: { value: this.value, checked: this.checked },
          bubbles: !0,
          composed: !0
        })
      );
    });
  }
  render() {
    return x`
      <label>
        <input
          type="radio"
          name=${this.name}
          .value=${this.value}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        />
        <slot></slot>
      </label>
    `;
  }
}
E = fl(Lt);
es = /* @__PURE__ */ new WeakMap();
ts = /* @__PURE__ */ new WeakMap();
rs = /* @__PURE__ */ new WeakMap();
ss = /* @__PURE__ */ new WeakMap();
vt(E, 4, "name", ko, L, es);
vt(E, 4, "value", So, L, ts);
vt(E, 4, "checked", wo, L, rs);
vt(E, 4, "disabled", mo, L, ss);
L = vt(E, 0, "SgRadio", xo, L);
yo(L, "styles", C`
    :host {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }
    :host([disabled]) {
      cursor: not-allowed;
      opacity: 0.5;
    }
    label {
      display: inline-flex;
      align-items: center;
      gap: var(--sg-space-sm);
      cursor: inherit;
      font-size: var(--sg-font-size-sm);
      color: var(--sg-color-on-surface);
    }
    input {
      appearance: none;
      width: 16px;
      height: 16px;
      margin: 0;
      border: 1px solid var(--sg-color-outline);
      border-radius: 50%;
      background: var(--sg-color-surface);
      cursor: inherit;
      display: grid;
      place-items: center;
      transition: border-color var(--sg-duration-fast) var(--sg-easing-standard);
    }
    input:checked {
      border-color: var(--sg-color-primary);
    }
    input:checked::after {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--sg-color-primary);
    }
    input:focus-visible {
      outline: 2px solid var(--sg-color-primary);
      outline-offset: 2px;
    }
  `);
W(E, 1, L);
var wl = Object.create, is = Object.defineProperty, Sl = Object.getOwnPropertyDescriptor, Ao = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), Ce = (t) => {
  throw TypeError(t);
}, Co = (t, e, r) => e in t ? is(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Si = (t, e) => is(t, "name", { value: e, configurable: !0 }), kl = (t) => [, , , wl(t?.[Ao("metadata")] ?? null)], Oo = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Je = (t) => t !== void 0 && typeof t != "function" ? Ce("Function expected") : t, xl = (t, e, r, o, i) => ({ kind: Oo[t], name: e, metadata: o, addInitializer: (a) => r._ ? Ce("Already initialized") : i.push(Je(a || null)) }), Al = (t, e) => Co(e, Ao("metadata"), t[3]), D = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, _t = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = Oo[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && Sl(s < 4 ? i : { get [r]() {
    return ki(this, a);
  }, set [r](c) {
    return xi(this, a, c);
  } }, r));
  s ? h && s < 4 && Si(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : Si(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = xl(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => Cl(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? ki : Ol)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => xi(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? Je(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? Ce("Object expected") : (Je(l = n.get) && (d.get = l), Je(l = n.set) && (d.set = l), Je(l = n.init) && y.unshift(l));
  return s || Al(t, i), d && is(i, r, d), h ? s ^ 4 ? a : d : i;
}, Eo = (t, e, r) => Co(t, typeof e != "symbol" ? e + "" : e, r), as = (t, e, r) => e.has(t) || Ce("Cannot " + r), Cl = (t, e) => Object(e) !== e ? Ce('Cannot use the "in" operator on this value') : t.has(e), ki = (t, e, r) => (as(t, e, "read from private field"), r ? r.call(t) : e.get(t)), gt = (t, e, r) => e.has(t) ? Ce("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), xi = (t, e, r, o) => (as(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), Ol = (t, e, r) => (as(t, e, "access private method"), r), zo, Po, Mo, Io, Gt, Wo, z, os, ns, cs, ls;
Wo = [O("sg-select")];
class G extends (Gt = k, Io = [m({ type: String })], Mo = [m({ type: String })], Po = [m({ type: Boolean, reflect: !0 })], zo = [m({ attribute: !1 })], Gt) {
  constructor() {
    super(...arguments), gt(this, os, D(z, 8, this, "")), D(z, 11, this), gt(this, ns, D(z, 12, this, "")), D(z, 15, this), gt(this, cs, D(z, 16, this, !1)), D(z, 19, this), gt(this, ls, D(z, 20, this, [])), D(z, 23, this), Eo(this, "handleChange", (e) => {
      const r = e.target;
      this.value = r.value, this.dispatchEvent(
        new CustomEvent("sg-change", {
          detail: { value: this.value },
          bubbles: !0,
          composed: !0
        })
      );
    });
  }
  render() {
    return x`
      <select
        name=${this.name}
        .value=${this.value}
        ?disabled=${this.disabled}
        @change=${this.handleChange}
      >
        ${this.options.map(
      (e) => x`<option value=${e.value} ?selected=${e.value === this.value}>${e.label}</option>`
    )}
      </select>
    `;
  }
}
z = kl(Gt);
os = /* @__PURE__ */ new WeakMap();
ns = /* @__PURE__ */ new WeakMap();
cs = /* @__PURE__ */ new WeakMap();
ls = /* @__PURE__ */ new WeakMap();
_t(z, 4, "value", Io, G, os);
_t(z, 4, "name", Mo, G, ns);
_t(z, 4, "disabled", Po, G, cs);
_t(z, 4, "options", zo, G, ls);
G = _t(z, 0, "SgSelect", Wo, G);
Eo(G, "styles", C`
    :host {
      display: inline-block;
      width: 100%;
    }
    select {
      font: inherit;
      width: 100%;
      box-sizing: border-box;
      padding: var(--sg-space-sm) var(--sg-space-2xl) var(--sg-space-sm) var(--sg-space-md);
      border-radius: var(--sg-shape-md);
      border: 1px solid var(--sg-color-outline);
      background-color: var(--sg-color-surface);
      color: var(--sg-color-on-surface);
      cursor: pointer;
      appearance: none;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3e%3cpath stroke='%23424957' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none' d='M2 4l4 4 4-4'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right var(--sg-space-md) center;
      background-size: 12px;
      transition:
        border-color var(--sg-duration-fast) var(--sg-easing-standard),
        box-shadow var(--sg-duration-fast) var(--sg-easing-standard);
    }
    select:focus {
      outline: none;
      border-color: var(--sg-color-primary);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--sg-color-primary) 25%, transparent);
    }
    select:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background-color: var(--sg-color-surface-variant);
    }
  `);
D(z, 1, G);
var El = Object.create, ds = Object.defineProperty, zl = Object.getOwnPropertyDescriptor, Do = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), Oe = (t) => {
  throw TypeError(t);
}, To = (t, e, r) => e in t ? ds(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ai = (t, e) => ds(t, "name", { value: e, configurable: !0 }), Pl = (t) => [, , , El(t?.[Do("metadata")] ?? null)], No = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Ke = (t) => t !== void 0 && typeof t != "function" ? Oe("Function expected") : t, Ml = (t, e, r, o, i) => ({ kind: No[t], name: e, metadata: o, addInitializer: (a) => r._ ? Oe("Already initialized") : i.push(Ke(a || null)) }), Il = (t, e) => To(e, Do("metadata"), t[3]), qt = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, Fo = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = No[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && zl(s < 4 ? i : { get [r]() {
    return Ci(this, a);
  }, set [r](c) {
    return Oi(this, a, c);
  } }, r));
  s ? h && s < 4 && Ai(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : Ai(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = Ml(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => Dl(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? Ci : Nl)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => Oi(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? Ke(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? Oe("Object expected") : (Ke(l = n.get) && (d.get = l), Ke(l = n.set) && (d.set = l), Ke(l = n.init) && y.unshift(l));
  return s || Il(t, i), d && ds(i, r, d), h ? s ^ 4 ? a : d : i;
}, Wl = (t, e, r) => To(t, e + "", r), hs = (t, e, r) => e.has(t) || Oe("Cannot " + r), Dl = (t, e) => Object(e) !== e ? Oe('Cannot use the "in" operator on this value') : t.has(e), Ci = (t, e, r) => (hs(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Tl = (t, e, r) => e.has(t) ? Oe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Oi = (t, e, r, o) => (hs(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), Nl = (t, e, r) => (hs(t, e, "access private method"), r), Uo, Vt, Bo, he, ps;
Bo = [O("sg-spinner")];
class ht extends (Vt = k, Uo = [m({ type: String, reflect: !0 })], Vt) {
  constructor() {
    super(...arguments), Tl(this, ps, qt(he, 8, this, "md")), qt(he, 11, this);
  }
  render() {
    return x`<div class="ring"></div>`;
  }
}
he = Pl(Vt);
ps = /* @__PURE__ */ new WeakMap();
Fo(he, 4, "size", Uo, ht, ps);
ht = Fo(he, 0, "SgSpinner", Bo, ht);
Wl(ht, "styles", C`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
    }
    :host([size='sm']) {
      width: 16px;
      height: 16px;
    }
    :host([size='lg']) {
      width: 40px;
      height: 40px;
    }
    .ring {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: 2px solid var(--sg-color-surface-variant);
      border-top-color: var(--sg-color-primary);
      border-radius: 50%;
      animation: sg-spin 0.8s linear infinite;
    }
    @keyframes sg-spin {
      to {
        transform: rotate(360deg);
      }
    }
  `);
qt(he, 1, ht);
var Fl = Object.create, vs = Object.defineProperty, Ul = Object.getOwnPropertyDescriptor, Ro = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), Ee = (t) => {
  throw TypeError(t);
}, Ho = (t, e, r) => e in t ? vs(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ei = (t, e) => vs(t, "name", { value: e, configurable: !0 }), Bl = (t) => [, , , Fl(t?.[Ro("metadata")] ?? null)], Lo = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Qe = (t) => t !== void 0 && typeof t != "function" ? Ee("Function expected") : t, Rl = (t, e, r, o, i) => ({ kind: Lo[t], name: e, metadata: o, addInitializer: (a) => r._ ? Ee("Already initialized") : i.push(Qe(a || null)) }), Hl = (t, e) => Ho(e, Ro("metadata"), t[3]), Ye = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, _s = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = Lo[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && Ul(s < 4 ? i : { get [r]() {
    return zi(this, a);
  }, set [r](c) {
    return Mi(this, a, c);
  } }, r));
  s ? h && s < 4 && Ei(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : Ei(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = Rl(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => Ll(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? zi : Gl)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => Mi(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? Qe(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? Ee("Object expected") : (Qe(l = n.get) && (d.get = l), Qe(l = n.set) && (d.set = l), Qe(l = n.init) && y.unshift(l));
  return s || Hl(t, i), d && vs(i, r, d), h ? s ^ 4 ? a : d : i;
}, Go = (t, e, r) => Ho(t, typeof e != "symbol" ? e + "" : e, r), us = (t, e, r) => e.has(t) || Ee("Cannot " + r), Ll = (t, e) => Object(e) !== e ? Ee('Cannot use the "in" operator on this value') : t.has(e), zi = (t, e, r) => (us(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Pi = (t, e, r) => e.has(t) ? Ee("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Mi = (t, e, r, o) => (us(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), Gl = (t, e, r) => (us(t, e, "access private method"), r), qo, Vo, Xt, Xo, B, gs, fs;
Xo = [O("sg-switch")];
class pe extends (Xt = k, Vo = [m({ type: Boolean, reflect: !0 })], qo = [m({ type: Boolean, reflect: !0 })], Xt) {
  constructor() {
    super(...arguments), Pi(this, gs, Ye(B, 8, this, !1)), Ye(B, 11, this), Pi(this, fs, Ye(B, 12, this, !1)), Ye(B, 15, this), Go(this, "handleChange", (e) => {
      const r = e.target;
      this.checked = r.checked, this.dispatchEvent(
        new CustomEvent("sg-change", {
          detail: { checked: this.checked },
          bubbles: !0,
          composed: !0
        })
      );
    });
  }
  render() {
    return x`
      <label>
        <input
          type="checkbox"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        />
        <span class="track"><span class="thumb"></span></span>
        <slot></slot>
      </label>
    `;
  }
}
B = Bl(Xt);
gs = /* @__PURE__ */ new WeakMap();
fs = /* @__PURE__ */ new WeakMap();
_s(B, 4, "checked", Vo, pe, gs);
_s(B, 4, "disabled", qo, pe, fs);
pe = _s(B, 0, "SgSwitch", Xo, pe);
Go(pe, "styles", C`
    :host {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }
    :host([disabled]) {
      cursor: not-allowed;
      opacity: 0.5;
    }
    label {
      display: inline-flex;
      align-items: center;
      gap: var(--sg-space-sm);
      cursor: inherit;
      font-size: var(--sg-font-size-sm);
      color: var(--sg-color-on-surface);
    }
    input {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
    }
    .track {
      position: relative;
      width: 36px;
      height: 20px;
      border-radius: var(--sg-shape-round);
      background: var(--sg-color-outline);
      transition: background var(--sg-duration-fast) var(--sg-easing-standard);
    }
    .thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--sg-color-surface);
      box-shadow: var(--sg-elevation-1);
      transition: transform var(--sg-duration-fast) var(--sg-easing-standard);
    }
    input:checked + .track {
      background: var(--sg-color-primary);
    }
    input:checked + .track .thumb {
      transform: translateX(16px);
    }
    input:focus-visible + .track {
      outline: 2px solid var(--sg-color-primary);
      outline-offset: 2px;
    }
  `);
Ye(B, 1, pe);
var ql = Object.create, $s = Object.defineProperty, Vl = Object.getOwnPropertyDescriptor, Zo = (t, e) => (e = Symbol[t]) ? e : /* @__PURE__ */ Symbol.for("Symbol." + t), ze = (t) => {
  throw TypeError(t);
}, Jo = (t, e, r) => e in t ? $s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Ii = (t, e) => $s(t, "name", { value: e, configurable: !0 }), Xl = (t) => [, , , ql(t?.[Zo("metadata")] ?? null)], Ko = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], je = (t) => t !== void 0 && typeof t != "function" ? ze("Function expected") : t, Zl = (t, e, r, o, i) => ({ kind: Ko[t], name: e, metadata: o, addInitializer: (a) => r._ ? ze("Already initialized") : i.push(je(a || null)) }), Jl = (t, e) => Jo(e, Zo("metadata"), t[3]), et = (t, e, r, o) => {
  for (var i = 0, a = t[e >> 1], l = a && a.length; i < l; i++) e & 1 ? a[i].call(r) : o = a[i].call(r, o);
  return o;
}, bs = (t, e, r, o, i, a) => {
  var l, n, v, p, _, s = e & 7, u = !!(e & 8), h = !!(e & 16), g = s > 3 ? t.length + 1 : s ? u ? 1 : 2 : 0, b = Ko[s + 5], y = s > 3 && (t[g - 1] = []), w = t[g] || (t[g] = []), d = s && (!h && !u && (i = i.prototype), s < 5 && (s > 3 || !h) && Vl(s < 4 ? i : { get [r]() {
    return Wi(this, a);
  }, set [r](c) {
    return Ti(this, a, c);
  } }, r));
  s ? h && s < 4 && Ii(a, (s > 2 ? "set " : s > 1 ? "get " : "") + r) : Ii(i, r);
  for (var f = o.length - 1; f >= 0; f--)
    p = Zl(s, r, v = {}, t[3], w), s && (p.static = u, p.private = h, _ = p.access = { has: h ? (c) => Ql(i, c) : (c) => r in c }, s ^ 3 && (_.get = h ? (c) => (s ^ 1 ? Wi : Yl)(c, i, s ^ 4 ? a : d.get) : (c) => c[r]), s > 2 && (_.set = h ? (c, $) => Ti(c, i, $, s ^ 4 ? a : d.set) : (c, $) => c[r] = $)), n = (0, o[f])(s ? s < 4 ? h ? a : d[b] : s > 4 ? void 0 : { get: d.get, set: d.set } : i, p), v._ = 1, s ^ 4 || n === void 0 ? je(n) && (s > 4 ? y.unshift(n) : s ? h ? a = n : d[b] = n : i = n) : typeof n != "object" || n === null ? ze("Object expected") : (je(l = n.get) && (d.get = l), je(l = n.set) && (d.set = l), je(l = n.init) && y.unshift(l));
  return s || Jl(t, i), d && $s(i, r, d), h ? s ^ 4 ? a : d : i;
}, Kl = (t, e, r) => Jo(t, e + "", r), ys = (t, e, r) => e.has(t) || ze("Cannot " + r), Ql = (t, e) => Object(e) !== e ? ze('Cannot use the "in" operator on this value') : t.has(e), Wi = (t, e, r) => (ys(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Di = (t, e, r) => e.has(t) ? ze("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ti = (t, e, r, o) => (ys(t, e, "write to private field"), o ? o.call(t, r) : e.set(t, r), r), Yl = (t, e, r) => (ys(t, e, "access private method"), r), Qo, Yo, Zt, jo, R, ms, ws;
jo = [O("sg-tabs")];
class ve extends (Zt = k, Yo = [m({ type: Number })], Qo = [m({ attribute: !1 })], Zt) {
  constructor() {
    super(...arguments), Di(this, ms, et(R, 8, this, 0)), et(R, 11, this), Di(this, ws, et(R, 12, this, [])), et(R, 15, this);
  }
  select(e) {
    this.selected = e, this.dispatchEvent(
      new CustomEvent("sg-change", {
        detail: { selected: e },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const e = `panel-${this.selected}`;
    return x`
      <div class="tablist" role="tablist">
        ${this.tabs.map(
      (r, o) => x`
            <button
              role="tab"
              aria-selected=${this.selected === o ? "true" : "false"}
              @click=${() => this.select(o)}
            >
              ${r}
            </button>
          `
    )}
      </div>
      <div class="panel" role="tabpanel">
        <slot name=${e}></slot>
      </div>
    `;
  }
}
R = Xl(Zt);
ms = /* @__PURE__ */ new WeakMap();
ws = /* @__PURE__ */ new WeakMap();
bs(R, 4, "selected", Yo, ve, ms);
bs(R, 4, "tabs", Qo, ve, ws);
ve = bs(R, 0, "SgTabs", jo, ve);
Kl(ve, "styles", C`
    :host {
      display: block;
      font-size: var(--sg-font-size-sm);
    }
    .tablist {
      display: flex;
      gap: var(--sg-space-md);
      border-bottom: 1px solid var(--sg-color-outline-variant);
      margin-bottom: var(--sg-space-md);
    }
    button {
      all: unset;
      cursor: pointer;
      padding: var(--sg-space-sm) var(--sg-space-md);
      font-weight: var(--sg-font-weight-medium);
      color: var(--sg-color-on-surface-variant);
      border-bottom: 2px solid transparent;
      transition:
        color var(--sg-duration-fast) var(--sg-easing-standard),
        border-color var(--sg-duration-fast) var(--sg-easing-standard);
    }
    button[aria-selected='true'] {
      color: var(--sg-color-primary);
      border-bottom-color: var(--sg-color-primary);
    }
    button:hover:not([aria-selected='true']) {
      color: var(--sg-color-on-surface);
    }
    button:focus-visible {
      outline: 2px solid var(--sg-color-primary);
      outline-offset: 2px;
    }
    .panel {
      color: var(--sg-color-on-surface);
    }
  `);
et(R, 1, ve);
export {
  te as SgAccordionItem,
  at as SgAlert,
  ot as SgBadge,
  J as SgButton,
  nt as SgCard,
  ae as SgCheckbox,
  oe as SgChip,
  ct as SgDivider,
  I as SgInput,
  lt as SgLabel,
  dt as SgModal,
  de as SgProgress,
  L as SgRadio,
  G as SgSelect,
  ht as SgSpinner,
  pe as SgSwitch,
  ve as SgTabs
};
//# sourceMappingURL=index.js.map
