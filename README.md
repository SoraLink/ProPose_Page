# ProPose project page

Static project page for **ProPose: Topology-Unified 2D Pose Estimation across Intact, Residual and
Prosthetic Limbs**. Plain HTML/CSS/JS — no build step, no dependencies beyond a MathJax CDN script
for the equations.

```
docs/index.html     the whole page          <- GitHub Pages serves docs/
docs/style.css
docs/script.js      nav, image lightbox, BibTeX copy
docs/images/        figures rendered from the paper's PDFs (200 dpi, 1800 px wide)
docs/static/        put the paper PDF here when it is ready
```

The page lives in `docs/` so the repository root stays free for the code release later.

## Preview locally

```bash
python3 -m http.server 8000 --directory docs
# open http://localhost:8000
```

## Publish on GitHub Pages

Create an empty public repository on GitHub (no README, no .gitignore), then:

```bash
cd /home/sora/workspace/ProPose_Page
git remote add origin git@github.com:SoraLink/ProPose.git
git push -u origin main
```

In the repository: **Settings → Pages → Build and deployment → Deploy from a branch →
branch `main`, folder `/docs` → Save**. After a minute the page is live at
`https://soralink.github.io/ProPose/`. `.nojekyll` is present so GitHub serves the files as they are.

To update it later, edit the files and `git push` — Pages rebuilds by itself.

## Turning the "coming soon" buttons on

The hero has three placeholder buttons. Each is a `<span class="btn btn-disabled">`; replace one with a
real link when the artefact is public, e.g. the paper:

```html
<a href="static/ProPose_paper.pdf" class="btn btn-primary">&#128196; Paper (PDF)</a>
```

and drop the `<span class="badge">coming soon</span>` from the matching card in the
**Paper, Code & Data** section.

## Regenerating the figures

The images come straight from `ProPose_Overleaf/figures/`:

```bash
pdftoppm -png -r 200 -scale-to-x 1800 -scale-to-y -1 -singlefile <fig>.pdf docs/images/<fig>
```

Photographic figures are then saved as JPEG (quality 90) to keep the page light; the bar charts stay PNG.
