# Spatialize Activity Library / Bibliothèque d'activités Spatialize

A bilingual (English/French) searchable library of hands-on activities that build spatial reasoning in Grades 5–10 math and science. Each activity is tagged with the spatial skills it develops, the specific Ontario curriculum expectations it supports (science and math), the Ontario thinking processes it uses, and whether a French version exists.

**Live site:** https://YOUR-USERNAME.github.io/spatialize-activities/

## What's in this repository

| File | What it is |
|---|---|
| `index.html` | The public website |
| `admin.html` | The editor for adding and updating activities (not linked from search engines) |
| `data/activities.json` | All activity data, the curriculum expectations they link to, and thinking processes. **This is the only file that changes when you update activities.** |
| `data/curriculum.json` | Every Ontario specific expectation for Grades 5–10 math and science (570), in English and French, for searching in the editor. It doesn't need updating unless the curriculum changes. |
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

Expectations come from the Ministry of Education's Curriculum and Resources website (dcp.edu.gov.on.ca), with official English and French wording: Science and Technology, Grades 5–8 (2022); Science, Grade 9 SNC1W (2022); Science, Grade 10 SNC2D (2008); Mathematics, Grades 5–8 (2020); Mathematics, Grade 9 MTH1W (2021). Grade 10 MPM2D (2005) is published only as a PDF, so its overall expectations are included, with draft French. 24 SNC2D expectations have no French version on the Ministry site and show in English.

## License

Original and adapted activities and the library content are © Project Spatialize, licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Curated activities from other organizations are linked, not copied, and remain their creators' property. The website code is MIT-licensed. See [LICENSE.md](LICENSE.md).
