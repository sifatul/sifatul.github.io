import MessageWrapper from "../../../Hoc/messageWrapper";

import { textToLinkMarkup } from "../../../helpers/string.helper";



import React, { useEffect, useState } from 'react';

const TextMessage = (props) => {
  const { message, senderInfo, created_at, typingSpeed = 50, isSeen=true } = props;
  
  const [revealedMessage, setRevealedMessage] = useState('');

  function splitDOMString(domString) {
    // Regular expression to match HTML tags
    const tagRegex = /<[^>]+>/g;
    // Initialize an empty array to store the output
    let output = [];
    // Variables to keep track of the last index and the current match
    let lastIndex = 0;
    let match;

    // Iterate through all the matches of the regex in the domString
    while ((match = tagRegex.exec(domString)) !== null) {
        // If there is text between the last match and the current match, add it to the output array
        if (match.index > lastIndex) {
            output.push(domString.slice(lastIndex, match.index));
        }
        // Add the current match (HTML tag) to the output array
        output.push(match[0]);
        // Update the last index to the end of the current match
        lastIndex = tagRegex.lastIndex;
    }

    // If there is any remaining text after the last match, add it to the output array
    if (lastIndex < domString.length) {
        output.push(domString.slice(lastIndex));
    }

    return output;
}

  useEffect(() => {
  
 
    if(isSeen){
      return setRevealedMessage((prevRevealedMessage) => prevRevealedMessage + message);
    }
    
   
    const splittedMsg = splitDOMString(message)
    const tags =['<div>','</div>','<b>','</b>','<p>','</p>','<a>','</a>']
    const regex = new RegExp(tags.join('|'), 'g'); // Combine tags with "|" an
     console.log("splittedMsg", splittedMsg)
    async function testType(){
      for (const text of splittedMsg) {

        if (regex.test(text)) {
          setRevealedMessage((prevRevealedMessage) => prevRevealedMessage + text);
        }else{
          for (const char of text) {
            await new Promise((resolve) => setTimeout(resolve, typingSpeed));
            setRevealedMessage((prevRevealedMessage) => prevRevealedMessage + char);
          }
        }
  
      }

    }
  


    testType();
  }, [message, typingSpeed]);

  const messageArr = textToLinkMarkup(revealedMessage).trim().split(/\r?\\n/);


  return (
    <>
      <MessageWrapper
        {...senderInfo}
        created_at={created_at}
      >
        <>
          {messageArr.map((text, idx) => (
            <div className="block" key={idx}>
              <span dangerouslySetInnerHTML={{ __html: text }} />
            </div>
          ))}
        </>
      </MessageWrapper>
    </>
  );
};

export default TextMessage;
