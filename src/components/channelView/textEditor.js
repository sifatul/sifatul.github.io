import './textEditor.scss'
const TextEditor = () => {
  return <div className="textEditor">
    <div className="container">
      <div className="editorItemContainer">

        <img className="editorItem" src="https://img.icons8.com/material-outlined/15/cacaca/bold.png" alt="bold-icon" />
        <img className="editorItem" src="https://img.icons8.com/ios-glyphs/15/cacaca/italic.png" alt="italic-icon" />
        <img className="editorItem" src=" https://img.icons8.com/external-tal-revivo-bold-tal-revivo/15/bcbbbc/external-strikethrough-text-feature-in-word-processing-application-text-bold-tal-revivo.png" alt="strike-through-icon" />
      </div>
      <div contentEditable="true" className="textArea">

      </div>
      <div className="actionItemContainer">
        <div className="left">
          <img className="editorItem" src="https://img.icons8.com/ios/15/bcbbbc/no-video--v1.png" alt="no-video" />

          <img className="editorItem" src="https://img.icons8.com/material-outlined/15/bcbbbc/microphone.png" alt="microphone" />
        </div>

        <div className="right">

          <img className="editorItem" src="https://img.icons8.com/external-inkubators-glyph-inkubators/15/bcbbbc/external-send-ecommerce-user-interface-inkubators-glyph-inkubators.png" alt="send-icon" />
        </div>

      </div>
    </div>

  </div>

}
export default TextEditor