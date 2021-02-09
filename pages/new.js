const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');
loadLanguages(['base']);
import { UI, Editor, Result, Text } from '../styles/styles.js'

function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}

export default function New() {
    return (
        <div className="body-div">
            <style jsx>
                {`
                    .body-div{
                        background: #eeeeff;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    
                `}
            </style>
            <UI>
                    <Editor spellCheck="false" contentEditable="true" id="editor" onInput={event => {
                        const divElement = event.target;
                        const code = divElement.innerText;
                        console.log(Prism.languages.base)
                        // console.log(Prism.highlight(code, Prism.languages.base, 'base'))
                        // placeCaretAtEnd(divElement)
                    }}></Editor>
                <Result id="result"></Result>
            </UI>
        </div>
    )
}