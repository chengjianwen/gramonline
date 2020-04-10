﻿---
layout: default
---

<div id="sample">
  <div style="width: 100%; display: flex; justify-content: center; align-items: center;">
    {% include save.html display="block"%}
    {% include load.html display="block"%}
    {% include run.html display="block"%}
  </div>
  <div style="width: 100%; display: flex; justify-content: space-between">
    {% include palette.html %}
    {% include diagram.html %}
    {% include stack.html %}
  </div>
  <textarea id="mySavedModel" style="width:100%;height:300px;display:block;">
{% include model.json %}
  </textarea>
</div>
