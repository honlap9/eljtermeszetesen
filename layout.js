document.addEventListener("DOMContentLoaded", async () => {

    // HEADER betöltése
    const header = await fetch("/eljtermeszetesen/header.html")
        .then(r => r.text());
    document.getElementById("header").innerHTML = header;

    // FOOTER betöltése
    const footer = await fetch("/eljtermeszetesen/footer.html")
        .then(r => r.text());
    document.getElementById("footer").innerHTML = footer;

    // KERESŐ SCRIPT automatikus betöltése
    const script = document.createElement("script");
    script.src = "/eljtermeszetesen/search.js";
    document.body.appendChild(script);
});
`
