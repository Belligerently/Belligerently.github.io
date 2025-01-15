---
permalink: /download/
title: "Download SpecMatrix"
layout: default
---

<!-- Page header -->
<h1>Download SpecMatrix</h1>

<!-- App Store Release -->
<h2>App Store Release</h2>
<p>
  <a href="https://apps.apple.com/app/specmatrix/idYOUR_APP_ID">Download from App Store</a>
</p>

<!-- GitHub Releases -->
<h2>GitHub Releases</h2>
{% if site.github.releases and site.github.releases.size > 0 %}
  {% for release in site.github.releases %}
    <h3>{{ release.name | default: release.tag_name }}</h3>
    <p>Released on {{ release.published_at | date: "%B %d, %Y" }}</p>

    <ul>
      {% for asset in release.assets %}
        <li>
          <a href="{{ asset.browser_download_url }}">
            Download {{ asset.name }}
          </a>
          ({{ asset.size | divided_by: 1048576.0 | round: 2 }} MB)
        </li>
      {% endfor %}
    </ul>
  {% endfor %}
{% else %}
  <p>No releases found.</p>
{% endif %}

<!-- Sideloading Instructions -->
<h2>Sideloading Instructions</h2>
<p>To sideload the IPA, you can use one of these tools:</p>
<ul>
  <li><a href="https://altstore.io/">AltStore</a></li>
  <li><a href="https://sidestore.io/">SideStore</a></li>
  <li><a href="https://feathersign.com/">FeatherSign</a></li>
</ul>
