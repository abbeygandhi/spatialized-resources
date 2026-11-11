# Spatialize Activity Library / Bibliothèque d'activités Spatialize

A bilingual (English/French) searchable library of hands-on activities that build spatial reasoning in Grades 5–10 math and science. Each activity is tagged with the spatial skills it develops, the specific Ontario curriculum expectations it supports (science and math), the Ontario thinking processes it uses, and whether a French version exists.

**Live site:** https://YOUR-USERNAME.github.io/spatialize-activities/

## What's in this repository

| File | What it is |
|---|---|
| `index.html` | The public website |
| `admin.html` | The editor for adding and updating activities (not linked from search engines) |
| `data/activities.json` | All activity data, curriculum expectations and thinking processes. **This is the only file that changes when you update activities.** |
| `data/spatialize-activities-ontario.csv` | A spreadsheet copy of the activities for Excel or Google Sheets |
| `assets/` | Shared styles, skill icons and helper code |
| `LICENSE.md` | License and credits for third-party and adapted activities |

## Adding or updating activities

1. Open `https://YOUR-USERNAME.github.io/spatialize-activities/admin.html`.
2. Click an activity to edit it, or **+ New activity**. Fill in English and French side by side; French fields can be left blank for now.
3. Save your changes in one of two ways:
   - **Publish to GitHub** (fastest): enter your GitHub username, the repository name and a fine-grained personal access token with *Contents: Read and write* permission for this repository. Create one at GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens.
   - **Download activities.json**, then in GitHub open the `data` folder, choose **Add file → Upload files**, drop the file in and commit.

The site updates within a minute or two. The editor keeps an unsaved draft in your browser, so closing the tab doesn't lose work.

## Curriculum alignment

Expectations are drawn from Science and Technology, Grades 1–8 (2022); Science, Grade 9 SNC1W (2022); Science, Grade 10 SNC2D (2008); Mathematics, Grades 1–8 (2020); Mathematics, Grade 9 MTH1W (2021); and Mathematics, Grade 10 MPM2D (2005). Wording on the site is abridged, and the French wording is a draft translation. Teachers should check the official curriculum for full text.

## License

Original and adapted activities and the library content are © Project Spatialize, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Curated activities from other organizations are linked, not copied, and remain their creators' property. The website code is MIT-licensed. See [LICENSE.md](LICENSE.md).
