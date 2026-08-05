# The Grimsby Institute of Experimental Medicine

An institutional archive website preserving the journals, observations, and
historical records of Dr. Elias Grimsby and the H-31 journal sequence.

## Website

This repository includes two versions:

- `app/` contains the Vinext/Sites source project.
- `docs/` contains the static GitHub Pages version.

For GitHub Pages, publish from:

- Branch: `main`
- Folder: `/docs`

After Pages finishes deploying, the public site should be available at:

```text
https://collective001.github.io/GrimsbyInstitute/
```

## Local Development

```bash
pnpm install
pnpm run dev
pnpm run build
```

## Updating GitHub

After editing files:

```bash
git add .
git commit -m "Describe the change"
git push
```

GitHub Pages will redeploy automatically when changes to `docs/` are pushed to
`main`.
