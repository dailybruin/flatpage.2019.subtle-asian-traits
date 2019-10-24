import * as React from 'react'
import { PullQuote } from '@dailybruin/lux'

export interface PQProps {
    /** The id of the YouTube video. */
    text: string
}

export default function CustomPullQuote(props: PQProps) {
    return <div style={{
        paddingBottom: "1em",
    }}>
        <PullQuote text={props.text} style="font-size: 1.2em" />
    </div>

}