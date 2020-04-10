---
layout: default
---

<div id="sample">
  <div style="width: 100%; display: flex; justify-content: center; align-items: center;">
    {% include save.html display="none"%}
    {% include load.html display="none"%}
    {% include zoomin.html display="block"%}
    {% include zoomout.html display="block"%}
    {% include run.html display="block"%}
  </div>
  <div style="width: 100%; display: flex; justify-content: space-between">
    {% include palette.html %}
    {% include diagram.html %}
    {% include stack.html %}
  </div>
  <textarea id="mySavedModel" style="width: 100%; height: 300px; display: none;">
{% include model.json %}
  </textarea>
</div>
