import { useState } from 'react';
import Header from '../common/Header';

const CodeSection = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  const EditorPanel = ({ title, code, setCode, language }) => (
    <div className="border-b border-gray-700">
      <div className="flex items-center justify-between bg-[#252526] px-4 py-2 border-b border-gray-700">
        <div className="flex items-center gap-1">
          <h2 className="text-sm font-medium text-gray-300">{title}</h2>
          <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="h-64 bg-[#1e1e1e] p-4 font-mono text-sm overflow-auto">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-full bg-transparent text-gray-300 resize-none focus:outline-none"
          spellCheck="false"
          placeholder={`Write your ${language} here...`}
        />
      </div>
    </div>
  );

  const BoilerplateButton = ({ text }) => (
    <button className="px-3 py-1 text-sm text-white bg-gray-800 rounded-full hover:bg-gray-700">
      {text}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      <Header />
      <div className="flex">
        {/* Left Panels */}
        <div className="w-1/2 border-r border-gray-700">
          <EditorPanel 
            title="HTML" 
            code={htmlCode} 
            setCode={setHtmlCode} 
            language="HTML"
          />
          <EditorPanel 
            title="CSS" 
            code={cssCode} 
            setCode={setCssCode}
            language="CSS" 
          />
          <EditorPanel 
            title="JavaScript" 
            code={jsCode} 
            setCode={setJsCode}
            language="JavaScript"
          />
        </div>

        {/* Right Panel */}
        <div className="w-1/2">
          <div className="px-4 py-2 bg-[#252526] border-b border-gray-700">
            <span className="text-sm font-medium text-gray-300">Result</span>
          </div>
          <div className="p-4 bg-[#1e1e1e]">
            <p className="text-sm mb-2">Start with a boilerplate:</p>
            <div className="flex flex-wrap gap-2">
              <BoilerplateButton text="Tailwind Checkboxes" />
              <BoilerplateButton text="Import a JS Module" />
              <BoilerplateButton text="jQuery" />
              <BoilerplateButton text="React" />
              <BoilerplateButton text="React + JSX" />
              <BoilerplateButton text="Preact" />
              <BoilerplateButton text="TypeScript" />
              <BoilerplateButton text="CoffeeScript" />
              <BoilerplateButton text="SCSS" />
              <BoilerplateButton text="CSS Grid" />
              <BoilerplateButton text="Bootstrap" />
              <BoilerplateButton text="PostCSS" />
            </div>
            <div className="mt-4 text-gray-500 text-sm">
              JSFiddle Console (beta) - Press F1 to focus, F2 to toggle console, F3 to toggle measurements.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeSection;