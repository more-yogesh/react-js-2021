import { useState } from 'react';

const LiveTypingState = () => {
    const [liveText, setLiveText] = useState();

    const textHandler = (textBoxText) => {
        // console.log(textBoxText.target.value);
        let textBoxValue = textBoxText.target.value;
        setLiveText(textBoxValue.toUpperCase());
    }

    return (
        <div>
            <input type="text" onChange={textHandler}/>
            <h2>{liveText}</h2>
            <h2>Length:{liveText.length}</h2>
        </div>
    );
}

export default LiveTypingState;