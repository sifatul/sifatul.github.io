import { Editor } from '@tinymce/tinymce-react';
import React, { useCallback, useMemo, useRef } from 'react';
import RealtimeDatabaseManage from "../../../hooks/RealtimeDatabase";
import { useStore } from '../../../store';
import Image from "../../global/image";
import { apps } from '../../leftSidebar/appList';
import { channels } from '../../leftSidebar/channelList';
import Style from './textEditor.module.scss';


const TextEditor = () => {
  const { myInfo, activeSidebarItem, users, isAdmin } = useStore();
  const { activeSidebarLabel } = activeSidebarItem;

  const editorRef = useRef(null);
  const { saveDataInFirebase } = RealtimeDatabaseManage()
  const currentUser = useMemo(() => {
    const key = Object.keys(users).find(userId => users[userId].name === activeSidebarLabel)
    const singleUser = users[key]
    return singleUser
  }, [users, activeSidebarLabel])


  const submitText = useCallback(() => {
    if (!editorRef?.current) return
    const text = editorRef.current.getContent()

    let source = myInfo.userId
    let destination = isAdmin ? currentUser.userId : myInfo.userId
    saveDataInFirebase(text, destination, source)

    editorRef.current.setContent("");

  }, [editorRef.current, myInfo, isAdmin, currentUser])


  const readOnly = useMemo(() => {
    const appLevels = [...apps, ...channels].map(item => item.label)
    return activeSidebarLabel == myInfo.name || appLevels.includes(activeSidebarLabel)

  }, [activeSidebarLabel, isAdmin, myInfo])

  return <div className={Style.textEditor}>



    <div className={Style.container}>

      {readOnly && <Editor
        scriptLoading={{ async: true }}
        id={activeSidebarLabel}
        apiKey='komrzg34a2lv8vctis70lapeo1i7k7dfjkp99hy6rqwxr8dh'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue=""
        plugins='autoresize link'
        disabled
        init={{
          statusbar: false,
          height: 50,
          max_height: 300,
          min_height: 50,
          menubar: false,
          branding: false,
          toolbar: 'bold italic link',
          placeholder: "Message is not enabled in this channel",
          content_style: 'body {border: none; font-family: "Noto Sans", sans-serif; font-size:14px}; '
        }}

      />}
      {(!readOnly) && <Editor

        scriptLoading={{ async: true }}
        id={activeSidebarLabel}
        apiKey='komrzg34a2lv8vctis70lapeo1i7k7dfjkp99hy6rqwxr8dh'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue=""
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
          content_style: 'body {border: none; font-family: "Noto Sans", sans-serif; font-size:14px}; ',
        }}

      />}

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