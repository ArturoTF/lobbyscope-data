# Lobbyscope — Privacy Policy

*Last updated: 29 October 2026*

Lobbyscope is an unofficial browser extension for FACEIT. This policy explains what it does with data. Short version: **it does not collect or share any personal data. What it saves stays in your browser.**

## What the extension accesses

- **FACEIT pages (faceit.com).** Lobbyscope only runs on faceit.com. It reads the match room or profile you are viewing and requests the related public match and player statistics from FACEIT's own website, using the session you already have open. This information is only used to display it to you on the same page.

## What it saves, only in your browser

Everything below is kept in the extension's storage in your browser (`chrome.storage.local`). It is never sent to the developer or to anyone else, and it is deleted when you remove the extension.

- **Your settings:** which features are on, the stats columns, the language, the auto-accept delay, your position-call messages, your background choice and the extended-levels option.
- **Player notes:** the notes you write about players, with the FACEIT nickname and id they belong to. Only you can see them. You can delete them all from the settings panel (Players → Delete all notes).
- **Recent rivals:** a list of your last FACEIT matches (date, map, result, score and the FACEIT ids of the players in them), built from FACEIT's public match data, to show who has played against you before.
- **Custom background:** if you upload a picture, a resized copy is stored. If you use a link instead, your browser loads that image straight from the address you entered.
- **Technical data:** a copy of the public HLTV players list, the matches where your position was already sent (kept 3 days, so it is never sent twice), and short pauses when FACEIT limits requests.

## Third-party requests

- **GitHub** (`raw.githubusercontent.com`): downloads the public list of HLTV players from <https://github.com/ArturoTF/lobbyscope-data>. No personal data is sent.
- **flagcdn.com**: downloads country flag images, requested by two-letter country code. No personal data is sent.
- **HLTV image CDN** (`img-cdn.hltv.org`): player photos on HLTV cards are loaded by the FACEIT page from HLTV's public CDN.
- **Your background link**, only if you set one: a normal image request to the site you chose.

## What the extension does not do

- No accounts, no analytics, no tracking, no advertising, no cookies of its own.
- No data is sent to the developer or sold or transferred to anyone.
- The optional position call only posts the message **you** wrote, in **your own** team chat, when the map veto ends. It is off by default.

## Contact

Questions or requests: Discord <https://discord.gg/wjefGP5r2j> or an issue at <https://github.com/ArturoTF/lobbyscope-data/issues>.

---

# Lobbyscope — Política de privacidad

*Última actualización: 29 de octubre de 2026*

Lobbyscope es una extensión de navegador no oficial para FACEIT. En resumen: **no recoge ni comparte ningún dato personal. Lo que guarda se queda en tu navegador.**

- **Páginas de FACEIT:** solo funciona en faceit.com. Lee la sala o el perfil que estás viendo y pide a la propia web de FACEIT las estadísticas públicas de la partida y los jugadores, usando la sesión que ya tienes abierta, solo para mostrártelas en esa página.
- **Lo que guarda, solo en tu navegador** (`chrome.storage.local`; nunca sale de él y se borra al quitar la extensión):
  - tus ajustes;
  - las notas que escribes sobre jugadores, con su nick e id de FACEIT (solo las ves tú; se borran desde el panel: Jugadores → Borrar todas las notas);
  - tus últimas partidas (fecha, mapa, resultado, marcador e ids de FACEIT de los jugadores), sacadas de los datos públicos de FACEIT, para avisarte de rivales que ya te han tocado;
  - la imagen de fondo si la subes (una copia reducida); si usas un enlace, el navegador la carga directamente de esa dirección;
  - datos técnicos: copia de la lista pública de jugadores HLTV, las partidas en las que ya se envió tu posición (3 días, para no enviarla dos veces) y pausas cortas cuando FACEIT limita las peticiones.
- **Peticiones a terceros:** GitHub (lista pública de jugadores HLTV), flagcdn.com (banderas, por código de país), el CDN de imágenes de HLTV (fotos de los jugadores) y, solo si lo configuras, el enlace de tu fondo. No se envía ningún dato personal.
- **No hace:** cuentas, analíticas, rastreo, publicidad ni envío de datos al desarrollador o a terceros. El aviso automático de posición solo publica el mensaje que **tú** escribiste, en el chat de **tu** equipo, y viene desactivado.

Contacto: Discord <https://discord.gg/wjefGP5r2j> o un issue en <https://github.com/ArturoTF/lobbyscope-data/issues>.
