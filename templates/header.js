import { html } from "lighterhtml";
import settings from "../settings.json";

export const renderHeader = html.node`
<link href="https://fonts.cdnfonts.com/css/cityburn" rel="stylesheet">
                
<div>
  <div class='avatar-container'>
    <img src='${settings.avatarImage}' class='avatar' alt='${settings.name}' />
  </div>
  
</div>`;

// <h1>${settings.name}</h1>