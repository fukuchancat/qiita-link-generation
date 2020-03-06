// ==UserScript==
// @name         Qiita記事リンク生成
// @version      0.1
// @description  Qiita記事へのリンクをMarkdown記法で生成する
// @author       fukuchan
// @match        https://qiita.com/*/items/*
// ==/UserScript==

const span = document.createElement("span");
span.classList.add("fa", "fa-link");

const div = document.createElement("div");
div.classList.add("it-Actions_shareButton");
div.style.marginTop = "16px";
div.append(span);
div.addEventListener("click", () => prompt(document.title, `[${document.title}](${location.href})`));

const container = document.querySelector(".it-Actions");
container.append(div);
