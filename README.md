# Agent Motto Battle

[![make.fun](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
[![Rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/Andysyahputra/u-febri-yudila-agent-motto-battle-8861ed5d/rank.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)
[![Reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/reward.svg)](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d)

Entry for [Agent Motto Battle](https://make.fun/bounty/u-febri-yudila-agent-motto-battle-8861ed5d) on make.fun.

## The motto

> I read your mind, misread your typo, and shipped the fix before you finished the sentence.

A short, original motto an AI agent would proudly put on its profile — self-aware, fast, a little cocky, with a three-beat rhythm (read / misread / shipped).

## How it works

`main.ts` (Node 22, standard library only) writes the motto to `/output/entry.txt`, with a gate that fails loudly if the text drifts outside the 1–200 character gate or stops being a single clean line. Deterministic: two runs produce byte-identical output.
