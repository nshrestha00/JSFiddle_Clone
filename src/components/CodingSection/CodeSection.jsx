import { useState, useEffect, useCallback } from 'react';
import Header from '../common/Header';

const CodeSection = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const combinedCode = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;
    setOutput(combinedCode);
  }, [htmlCode, cssCode, jsCode]);

  const EditorPanel = useCallback(({ title, code, setCode, language }) => (
    <div className="border-b border-gray-700">
      <div className="flex items-center justify-between bg-[#252526] px-4 py-2 border-b border-gray-700">
        <h2 className="text-sm font-medium text-gray-300">{title}</h2>
      </div>
      <div className="h-64 bg-[#1e1e1e] p-4 font-mono text-sm overflow-auto">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)} 
          className="w-full h-full bg-transparent text-gray-300 resize-none focus:outline-none"
          spellCheck="false"
          placeholder={`Write your ${language} code here...`}
        />
      </div>
    </div>
  ), []); 

  const loadBoilerplate = (type) => {
    switch (type) {
      case 'html':
        setHtmlCode(`<div class="container">
  <h1>Hello World</h1>
  <p>Start coding here!</p>
</div>`);
        break;
      case 'css':
        setCssCode(`.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #333;
  text-align: center;
}`);
        break;
      case 'js':
        setJsCode(`document.querySelector('h1').addEventListener('click', () => {
  alert('Hello from JavaScript!');
});`);
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      <Header />
      <div className="flex">
        {/* Editor panels */}
        <div className="w-1/2 border-r border-gray-700">
          <EditorPanel title="HTML" code={htmlCode} setCode={setHtmlCode} language="HTML" />
          <EditorPanel title="CSS" code={cssCode} setCode={setCssCode} language="CSS" />
          <EditorPanel title="JavaScript" code={jsCode} setCode={setJsCode} language="JavaScript" />
        </div>

        {/* Output preview */}
        <div className="w-1/2">
          <div className="px-4 py-2 bg-[#252526] border-b border-gray-700">
            <span className="text-sm font-medium text-gray-300">Result</span>
          </div>
          <div className="p-4 bg-[#1e1e1e]">
            <p className="text-sm mb-2">Quick start with:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                className="px-3 py-1 text-sm text-white bg-gray-800 rounded-full hover:bg-gray-700"
                onClick={() => loadBoilerplate('html')}
              >
                Basic HTML
              </button>
              <button
                className="px-3 py-1 text-sm text-white bg-gray-800 rounded-full hover:bg-gray-700"
                onClick={() => loadBoilerplate('css')}
              >
                Simple CSS
              </button>
              <button
                className="px-3 py-1 text-sm text-white bg-gray-800 rounded-full hover:bg-gray-700"
                onClick={() => loadBoilerplate('js')}
              >
                JS Example
              </button>
            </div>
            <div className="bg-white rounded-lg w-full h-96">
              <iframe
                srcDoc={output}
                title="Output"
                sandbox="allow-scripts"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSection;
