// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
// import python from "highlight.js/lib/languages/python";
// import cpp from "highlight.js/lib/languages/cpp";
// import pgsql from "highlight.js/lib/languages/pgsql";
// import typescript from "highlight.js/lib/languages/typescript";

// import markdownit from "markdown-it";

// hljs.registerLanguage("javascript", javascript);
// hljs.registerLanguage("python", python);
// hljs.registerLanguage("cpp", cpp);
// hljs.registerLanguage("pgsql", pgsql);
// hljs.registerLanguage("typescript", typescript);

// export const md: markdownit = new markdownit({
//   breaks: true,
//   xhtmlOut: true,
//   highlight: function (str, lang) {
//     if (lang && hljs.getLanguage(lang)) {
//       try {
//         return (
//           '<pre><code class="hljs">' +
//           hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
//           "</code></pre>"
//         );
//       } catch (__) {}
//     }

//     return (
//       '<pre><code class="hljs">' + md.utils.escapeHtml(str) + "</code></pre>"
//     );
//   },
// });

export const supportLang = [
  { name: "Text", value: "text" },
  { name: "Python", value: "python" },
  { name: "Javascript", value: "javascript" },
  { name: "Postgresql", value: "pgsql" },
  { name: "C++", value: "cpp" },
  { name: "Typescript", value: "typescript" },
];
