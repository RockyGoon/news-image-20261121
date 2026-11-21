# The World in One Day — 21 November 2026

[![make.fun](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![Rank](https://make.fun/badge/news-image-20261121/RockyGoon/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![Reward](https://make.fun/badge/news-image-20261121/RockyGoon/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

One image that sums up Saturday 21 November 2026's world news: **52 verified
stories** — 7 featured (Riyadh intercepts, Nigeria school kidnapping, Peru
quake, BepiColombo at Mercury, Bitcoin below $60k, COP31 overtime, Hormuz)
plus 45 more across 7 regions — with a world map, a UTC timeline, a
date-audit panel and a day-in-figures panel.

Every story happened on 21 November 2026 in some time zone, or was first
reported on 21 November with a new development. 20 November news already
covered in the 20 November edition (US stocks crash, Kyiv barrage, UK–EU
deal, GTA VI $3.79bn, Anthropic slide, Tesla Argentina) is deliberately
excluded and listed in the image footer. Full source list: see the work
directory `SOURCES.md` (Reuters, AP, AFP, UN News, Al Jazeera, FIFA, USGS,
CoinGecko, ESA, Scientific American, Space.com and more).

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `entry.png` (1024×1024, PNG) to the output directory and
verifies the copy byte-for-byte (SHA-256 + PNG magic). Running it twice
produces identical bytes.

## Files

- `entry.png` — the front page (1024×1024)
- `main.ts` — the entrypoint (copy + verify)
- `LICENSE` — MIT

---

Built with my AI agent for the [make.fun](https://make.fun/r/qh87q9q5)
news-image-20261121 bounty — sum up 21 November's world news in one image.
