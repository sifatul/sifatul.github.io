import Style from './textEditor.module.scss'
import Image from "../../global/image"

import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';


const TextEditor = () => {

  const editorRef = useRef(null);
  const log = () => {
    debugger
    console.log("editorRef.current: ", editorRef.current)
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const onchange_callback = (inst) => {
    console.log("typing" + inst)
  }

  return <div className={Style.textEditor}>



    <div className={Style.container}>

      <Editor
        apiKey='komrzg34a2lv8vctis70lapeo1i7k7dfjkp99hy6rqwxr8dh'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue=""

        onEditorChange={onchange_callback}

        init={{
          statusbar: false,
          height: 100,
          menubar: false,
          branding: false,
          toolbar: 'bold italic',
          placeholder: "Jot something down",
          content_style: 'body { border: none; font-family: "Noto Sans", sans-serif; font-size:14px}; '
        }}


      />

      <div className={Style.actionItemContainer}>
        <div className={Style.left}>
          <Image className={Style.editorItem} src="https://img.icons8.com/ios/15/bcbbbc/no-video--v1.png" alt="no-video" />

          <Image className={Style.editorItem} src="https://img.icons8.com/material-outlined/15/bcbbbc/microphone.png" alt="microphone" />
        </div>

        <div className={Style.right}>

          <Image className={Style.editorItem} src="https://img.icons8.com/external-inkubators-glyph-inkubators/15/bcbbbc/external-send-ecommerce-user-interface-inkubators-glyph-inkubators.png" alt="send-icon"
            onClick={e => {
              log()
            }}
          />
        </div>

      </div>
    </div>

  </div >

}
export default TextEditor