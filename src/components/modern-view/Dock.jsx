import './Dock.scss'

import * as React from 'react';

export default function Dock() {

    return (
        <div class="dock">
            <div class="dock-container">
                <li class="li-1">
                    <div class="name">Finder</div>
                    <img class="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png" alt="" />
                </li>
                <li class="li-2">
                    <div class="name">Siri</div>
                    <img class="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ff3bafbac60495771_siri.png" alt="" />
                </li>
                <li class="li-3">
                    <div class="name">LaunchPad</div>
                    <img class="ico" src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853943597517f128b9b4_launchpad.png" alt="" />
                </li>
            </div>
        </div>
    );
}