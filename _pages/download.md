---
permalink: /download/
title: "Download SpecMatrix"
---

<div id="root">
  <div id="release-info"></div>
</div>

{% raw %}
<script type="text/javascript">
  import { createRoot } from 'react-dom/client';
  import { ReleaseInfo } from './ReleaseInfo';
  
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('release-info');
    const root = createRoot(container);
    root.render(<ReleaseInfo />);
  });
</script>
{% endraw %}