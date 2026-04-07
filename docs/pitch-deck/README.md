# GroceryIntel Pitch Deck PDF

This folder contains a generated PDF pitch deck tailored for AWS Spendbase onboarding uploads.

## Output
- Generated locally at: `docs/pitch-deck/GroceryIntel-Pitch-Deck.pdf`
- Not committed to git (binary uploads are blocked in this environment).

## Source + regeneration
- Generator script: `scripts/generate_pitch_deck.py`
- Logo source: `public/gi-logo-2.png`
- Color direction is aligned to the marketing site palette (emerald/teal/slate tones from Tailwind usage in the app).

To regenerate:

```bash
python scripts/generate_pitch_deck.py
```
