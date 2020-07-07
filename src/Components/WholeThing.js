import React from 'react';
import {useOvermind} from '../Others/OvermindHelper'
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
//
const electron = window.require('electron')

const getKey = (actions, state) => {
    if (state.enabled) {
        console.log("ENABLED")
        actions.setCopiedText(electron.clipboard.readText())

        electron.remote.globalShortcut.register(`CommandOrControl+Shift+C`, () => {
            var textFromClipboard = electron.clipboard.readText()
            console.log("TFC: " + textFromClipboard)
            actions.setCopiedText(textFromClipboard.trim())
            electron.clipboard.writeText(textFromClipboard.trim())
        })

    } else {
        console.log("DISABLED")
        electron.remote.globalShortcut.unregisterAll()
    }
}


const WholeThing = (props) => {
    const {actions, state} = useOvermind()

    return (
        <Grid style={{padding: 36}} container direction='column' justify='center' alignContent='center'
              alignItems='center'>

            {
                getKey(actions, state)
            }

            <Button variant='contained' style={{backgroundColor: state.enabled ? "#E53935" : "#43A047", color: "#FFF"}}
                    onClick={() => {
                        actions.changeEnabled()
                    }}>{state.enabled ? "Disable" : "Enable"}</Button>

            <p>{state.copiedText}</p>

        </Grid>
    );
};

export default WholeThing;