/* Shared by index.html and admin.html: spatial-skill icons, colours, labels, curriculum helpers. */
window.SPZ = (function () {
  const SKILLS = {
    "Mental Rotation":          { c: "--s1", fr: "Rotation mentale",
      en_d: "Turning an object in your mind to see how it looks from another angle.",
      fr_d: "Faire tourner un objet dans sa tête pour voir de quoi il a l'air sous un autre angle.",
      icon: '<path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v4h-4"/><path d="M12 8.5l3 1.6v3.6L12 15.4l-3-1.7v-3.6z"/>' },
    "Visualization":            { c: "--s2", fr: "Visualisation",
      en_d: "Picturing objects, changes or processes that aren't directly in view.",
      fr_d: "Se représenter des objets, des changements ou des processus qu'on ne voit pas directement.",
      icon: '<path d="M7 16a4 4 0 0 1-.6-7.95 5.5 5.5 0 0 1 10.6-.6A4.3 4.3 0 0 1 17 16z"/><circle cx="8" cy="19.5" r="1"/><circle cx="5" cy="22" r=".6"/>' },
    "Perspective Taking":       { c: "--s3", fr: "Prise de perspective",
      en_d: "Imagining how something appears from another viewpoint.",
      fr_d: "Imaginer comment une chose apparaît d'un autre point de vue.",
      icon: '<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>' },
    "Orientation":              { c: "--s4", fr: "Orientation",
      en_d: "Keeping track of position and direction in space.",
      fr_d: "Suivre sa position et sa direction dans l'espace.",
      icon: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2.2 4.8-4.8 2.2 2.2-4.8z"/>' },
    "Spatial Language":         { c: "--s5", fr: "Langage spatial",
      en_d: "Using precise words for location, shape and movement.",
      fr_d: "Employer des mots précis pour la position, la forme et le mouvement.",
      icon: '<path d="M4 4.5h16v11H10l-6 4.5z"/><path d="M8 10h7"/><path d="M12.5 7.5L15 10l-2.5 2.5"/>' },
    "Multiple Representations": { c: "--s6", fr: "Représentations multiples",
      en_d: "Moving between models, diagrams, graphs and symbols.",
      fr_d: "Passer d'un modèle à un schéma, à un graphique ou à des symboles.",
      icon: '<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><path d="M13 21l3-4 2 2 3-5"/>' },
    "Schematizing":             { c: "--s7", fr: "Schématisation",
      en_d: "Reducing a situation to a clear diagram of what matters.",
      fr_d: "Réduire une situation à un schéma clair de l'essentiel.",
      icon: '<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M8.5 6h7M7.3 8.2l3.5 7.6M16.7 8.2l-3.5 7.6"/>' },
    "Visuospatial Manipulation":{ c: "--s8", fr: "Manipulation visuospatiale",
      en_d: "Transforming shapes or images: folding, cutting, combining.",
      fr_d: "Transformer des formes ou des images : plier, découper, combiner.",
      icon: '<path d="M4 4h10l6 6v10H4z"/><path d="M14 4v6h6"/>' },
  };
  const icon = (name, size = 16) => {
    const s = SKILLS[name];
    return `<svg class="ico" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" style="color:var(${s ? s.c : "--s9"})">${s ? s.icon : '<circle cx="12" cy="12" r="6"/>'}</svg>`;
  };
  const skillName = (name, lang) => (lang === "fr" && SKILLS[name] ? SKILLS[name].fr : name);
  const ord = g => (g === 1 ? "1re" : g + "e");
  const gradeLabel = (g, lang) => g === 0 ? (lang === "fr" ? "1re à 8e année" : "Gr 1–8") : (lang === "fr" ? `${ord(g)} année` : `Gr ${g}`);
  const gradesText = (gs, lang) => {
    if (!gs.length) return "";
    const run = gs.length > 2 && gs[gs.length - 1] - gs[0] === gs.length - 1;
    if (lang === "fr") return run ? `${ord(gs[0])} à ${ord(gs[gs.length - 1])} année` : gs.map(ord).join(", ") + " année";
    return run ? `Grades ${gs[0]}–${gs[gs.length - 1]}` : (gs.length > 1 ? "Grades " : "Grade ") + gs.join(", ");
  };
  const expLabel = (e, lang) => `${gradeLabel(e.grade, lang)}${e.course ? " " + e.course : ""} · ${e.code}`;
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const slug = t => String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
  return { SKILLS, icon, skillName, gradeLabel, gradesText, expLabel, esc, slug };
})();
