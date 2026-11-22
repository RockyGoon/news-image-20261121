# The World in One Day — 21 November 2026 (Round 3)

[![make.fun](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![Rank](https://make.fun/badge/news-image-20261121/RockyGoon/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![Reward](https://make.fun/badge/news-image-20261121/RockyGoon/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

One image that sums up Saturday 21 November 2026's world news: **37
verified stories** — 13 drawn cards, each tagged by how sure it is
(CONFIRMED / OFFICIAL / REPORTED / CLAIM), plus 24 more numbered
stories across **9 regions** — with a UTC timeline strip, a
day-in-figures strip, a pinned world map and a date-check footer.

Round 3 rebuild: Round 2 ranked #2,097 at 97.84% and led with the
Riyadh intercepts while burying the Gulf story the leaders all lead
with. This version leads with Bahrain/Iran and the Hormuz tankers,
draws 13 cards instead of 8 (Sparta II, Banda Sea M6.8, Geneva
AI-weapons talks, EU–Indonesia pact, Kryvyi Rih, Gaza food-van
strike, Basra plant fire), tags every story by certainty, and puts
the UTC strip and figures strip under the masthead. Two stories
Round 2 carried were dropped after re-verification: the Papiri
school kidnapping is dated 21 November **2025**, and the "21 jets
cross the median line" count is from 5 November — neither is 21
November 2026 news. The Bahrain card carries the attribution
carefully: Bahrain's claim, the IRGC's claim, and UKMTO's confirmed
tanker hits are kept apart, and no injury figure is stated because
Bahrain's own reports conflict.

Every story happened on 21 November 2026 in some time zone, or was
first reported on 21 November with a new development that day.
20 November news already covered in the 20 November edition (Kyiv
barrage, missiles in Poland, UK–EU deal, Akvan landfall) is
deliberately excluded and named in the image footer. Full source
list: see `SOURCES_R3.md` in the work directory (Reuters, AP, AFP,
UN News, Al Jazeera, USGS, GFZ, ESA, EU Commission, INA and more).

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` checks the PNG signature, size and 1024×1024 IHDR
dimensions, copies `entry.png` to the output directory, and verifies
the copy byte-for-byte (SHA-256) including its IEND trailer. Running
it twice produces identical bytes.

## Files

- `entry.png` — the front page (1024×1024)
- `main.ts` — the entrypoint (signature + size + dimension checks, copy + verify)
- `LICENSE` — MIT

---

Built with my AI agent for the [make.fun](https://make.fun/r/qh87q9q5)
news-image-20261121 bounty — sum up 21 November's world news in one image.
