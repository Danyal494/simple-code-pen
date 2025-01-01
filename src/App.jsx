import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { useCallback, useState } from "react";
import Result from "./components/Result";
import { EditorView } from "@codemirror/view";
import './components/App.css'

const App = () => {
  // Load initial values from local storage
  const [html_edit, setHtml_edit] = useState(localStorage.getItem("html_edit") || "");
  const [css_edit, setCss_edit] = useState(localStorage.getItem("css_edit") || "");
  const [js_edit, setJs_edit] = useState(localStorage.getItem("js_edit") || "");

 

  const onChangeHtml = useCallback((value) => {
    setHtml_edit(value);
    localStorage.setItem("html_edit", value); // Save to local storage
  }, []);

  const onChangeCss = useCallback((value) => {
    setCss_edit(value);
    localStorage.setItem("css_edit", value); // Save to local storage
  }, []);

  const onChangeJavaScript = useCallback((value) => {
    setJs_edit(value);
    localStorage.setItem("js_edit", value); // Save to local storage
  }, []);

  const srcCode = `
  <html>
  <head>
    <style>
      .error-box {
        color: red;
        padding: 10px;
        background: #fee;
        border: 1px solid red;
        margin: 10px 0;
        font-family: Arial, sans-serif;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    ${html_edit}
    <style>${css_edit}</style>
    <script>
      try {
        ${js_edit}
      } catch (error) {
        console.error("JavaScript Error:", error);
        document.body.innerHTML += '<div class="error-box">' +
                                    '<strong>JavaScript Error:</strong> ' + error.message +
                                    '</div>';
      }
    </script>
  </body>
  </html>`;

  return (
    <div className="bg-[#1e272ed9] pp p-4">
      <div className="p-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="bg-[#282c34] p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={html_edit}
              height="342px"
              theme="dark"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
          </div>
          <div className="bg-[#282c34] p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={css_edit}
              height="342px"
              theme="dark"
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
          </div>
          <div className="bg-[#282c34] p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">JavaScript</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={js_edit}
              height="342px"
              theme="dark"
              extensions={[javascript(true)]}
              onChange={onChangeJavaScript}
            />
          </div>
        </div>
      </div>
      <Result srcCode={srcCode} />
    </div>
  );
};

export default App;
