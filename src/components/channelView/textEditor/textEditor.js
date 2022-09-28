import Style from './textEditor.module.scss'
import Image from "../../global/image"

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useStore } from '../../../store';
import { GetData } from '../../../helpers/httpClient.helper';



const TextEditor = () => {
  const { addNewIntroMessage, senders } = useStore();
  const editorRef = useRef(null);
  const [senderInfo, setSenderInfo] = useState(null)

  useEffect(() => {
    if (senders.length < 2) return
    const senderYou = senders.filter(person => person.extraLabel)?.pop()
    console.log("senderYou: ", senderYou)
    setSenderInfo({
      senderAvatar: senderYou.imgSrc,
      senderName: senderYou.name,
    })
  }, [senders.length])



  const submitText = useCallback(() => {
    if (!editorRef?.current) return
    const text = editorRef.current.getContent()
    console.log({
      data: text
    });
    addNewIntroMessage({
      message: text,
      senderInfo
    })


  }, [editorRef.current, senderInfo])

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
          placeholder: "Jot something down",
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