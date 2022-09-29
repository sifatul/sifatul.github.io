import { Editor } from '@tinymce/tinymce-react';
import React, { useCallback, useRef } from 'react';
import RealtimeDatabaseManage from "../../../hooks/RealtimeDatabase";
import { useStore } from '../../../store';
import Image from "../../global/image";
import Style from './textEditor.module.scss';




const askEmailText = "<p><span data-preserver-spaces=\"true\">As&nbsp;</span><strong><span data-preserver-spaces=\"true\">Sifatul&nbsp;</span></strong><span data-preserver-spaces=\"true\">is't online. It's best to start conversation by stating your email address so that he may get back to you later.</span></p>"
const TextEditor = () => {
  const { addNewIntroMessage, sifatulInfo, myInfo } = useStore();
  const editorRef = useRef(null);
  const { saveDataInFirebase } = RealtimeDatabaseManage()



  const submitText = useCallback(() => {
    if (!editorRef?.current) return
    const text = editorRef.current.getContent()
    console.log({ text })

    saveDataInFirebase(text)

  }, [editorRef.current, myInfo])



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
        plugins='autoresize link'

        init={{
          statusbar: false,
          height: 50,
          max_height: 300,
          min_height: 50,
          menubar: false,
          branding: false,
          toolbar: 'bold italic link',
          placeholder: "Message Sifatul",
          content_style: 'body { border: none; font-family: "Noto Sans", sans-serif; font-size:14px}; '
        }}

      />

      <div className={Style.actionItemContainer}>
        <div className={Style.left}>
          <Image className={Style.editorItem} src="https://img.icons8.com/ios/15/bcbbbc/no-video--v1.png" alt="no-video" />

          <Image className={Style.editorItem} src="https://img.icons8.com/material-outlined/15/bcbbbc/microphone.png" alt="microphone" />
        </div>

        <div className={Style.right}

          onClick={e => {
            submitText()
          }}
        >

          <Image className={Style.editorItem} src="https://img.icons8.com/external-inkubators-glyph-inkubators/15/bcbbbc/external-send-ecommerce-user-interface-inkubators-glyph-inkubators.png" alt="send-icon"

          />
        </div>

      </div>
    </div>

  </div >

}
export default TextEditor