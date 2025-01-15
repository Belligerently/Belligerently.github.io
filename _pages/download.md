---
permalink: /download/
title: "Download SpecMatrix"
layout: page
---

# Download SpecMatrix

## App Store Release

[Download from App Store](https://apps.apple.com/us/app/specmatrix/id6740110428)

## GitHub Releases

{% raw %}
{% assign releases = site.github.releases %}
{% for release in releases %}
### {{ release.name | default: release.tag_name }}

Released on {{ release.published_at | date: "%B %d, %Y" }}

{% for asset in release.assets %}
- [Download {{ asset.name }}]({{ asset.browser_download_url }}) ({{ asset.size | divided_by: 1048576.0 | round: 2 }} MB)
{% endfor %}

{% endfor %}
{% endraw %}

## Sideloading Instructions

To sideload the IPA, you can use one of these tools:

- [AltStore](https://altstore.io)
- [SideStore](https://sidestore.io)
- [FeatherSign](https://github.com/khcrysalis/Feather)
