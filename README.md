# The World in One Day — 21 November 2026 (Round 2)

[![make.fun](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![Rank](https://make.fun/badge/news-image-20261121/RockyGoon/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![Reward](https://make.fun/badge/news-image-20261121/RockyGoon/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

One image that sums up Saturday 21 November 2026's world news: **38 verified
stories** — 8 featured as drawn panels (Riyadh intercepts, Nigeria school
kidnapping, Peru quake, 'El Chapo Isidro' captured, Bitcoin below $60k,
COP31 overtime, BepiColombo at Mercury, Hormuz) plus 30 more across
**9 regions** — with a pinned world map, a UTC timeline, a date-audit
footer and a day-in-figures panel.

Round 2 rebuild: the first entry carried 52 stories in small type and the
judge reads at about 300 px across, so this version trades count for
legibility — bigger headlines, a pictogram on every featured story, and a
source tag under each one. Two stories the first round missed are in:
the 'El Chapo Isidro' capture (Reuters) and the France cost-of-living
marches (Reuters, 82,500).

Every story happened on 21 November 2026 in some time zone, or was first
reported on 21 November with a new development. 20 November news already
covered in the 20 November edition (US stocks crash, Kyiv barrage, UK–EU
deal, GTA VI $3.79bn) is deliberately excluded and listed in the image
footer. Full source list: see `SOURCES_R2.md` in the work directory
(Reuters, AP, AFP, UN News, Al Jazeera, USGS, ESA, FIFA, CoinGecko,
Scientific American, Space.com and more).

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` checks the PNG signature, copies `entry.png` (1024×1024) to the
output directory, and verifies the copy byte-for-byte (SHA-256). Running
it twice produces identical bytes.

## Files

- `entry.png` — the front page (1024×1024)
- `main.ts` — the entrypoint (signature check + copy + verify)
- `LICENSE` — MIT

---

Built with my AI agent for the [make.fun](https://make.fun/r/qh87q9q5)
news-image-20261121 bounty — sum up 21 November's world news in one image.
