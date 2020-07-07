// npm install overmind overmind-react
// yarn add overmind overmind-react

import {createOvermind} from "overmind";
import {createHook} from "overmind-react";

export const useOvermind = createHook();
export const overmind = createOvermind({
    state: {
        counter: 0,
        copiedText: "NOTHING",
        enabled: true,
    },
    actions: {
        increase({state}, number) {
            state.counter += number
        },
        setCopiedText({state}, text) {
            state.copiedText = text.trim()
        },
        changeEnabled({state}) {
            state.enabled = !state.enabled
        },
    }
});