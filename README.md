# ProPose project page

Static project page for **ProPose: Topology-Unified 2D Pose Estimation across Intact, Residual and
Prosthetic Limbs**. Plain HTML/CSS/JS — no build step, no dependencies beyond a MathJax CDN script
for the equations.

```
index.html          the whole page
style.css
script.js           nav, image lightbox, BibTeX copy
images/             figures rendered from the paper's PDFs (200 dpi, 1800 px wide)
static/             put the paper PDF here when it is ready
```

## Preview locally

```bash
python3 -m http.server 8000 --directory .
# open http://localhost:8000
```

## Publish on GitHub Pages

```bash
git init && git add -A && git commit -m "ProPose project page"
git remote add origin git@github.com:<user>/<repo>.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/ (root)`**.
The page appears at `https://<user>.github.io/<repo>/`. `.nojekyll` is present so GitHub serves the
files as they are.

## Turning the "coming soon" buttons on

The hero has three placeholder buttons. Each is a `<span class="btn btn-disabled">`; replace one with a
real link when the artefact is public, e.g. the paper:

```html
<a href="static/ProPose_paper.pdf" class="btn btn-primary">&#128196; Paper (PDF)</a>
```

and the corresponding card in the **Paper, Code & Data** section (drop the `<span class="badge">`).

## Regenerating the figures

The images come straight from `ProPose_Overleaf/figures/`:

```bash
pdftoppm -png -r 200 -scale-to-x 1800 -scale-to-y -1 -singlefile <fig>.pdf images/<fig>
```

Photographic figures are then saved as JPEG (quality 90) to keep the page light; the bar charts stay PNG.
