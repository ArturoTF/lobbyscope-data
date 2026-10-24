# lobbyscope-data

List of players with an HLTV profile shown by the **Lobbyscope** browser extension (golden card and HLTV badge in the FACEIT match room, photo card on the FACEIT profile). Lobbyscope downloads `hltv-players.json` from this repo, so changes merged here reach every user within a couple of hours without a new extension release.

*Lista de jugadores con perfil de HLTV que muestra la extensión **Lobbyscope**. La extensión descarga `hltv-players.json` de este repositorio, así que lo que se acepta aquí llega a todos los usuarios en un par de horas, sin publicar una versión nueva.*

## Request a player / Solicitar un jugador

- **Discord** (recommended / recomendado): https://discord.gg/56FFFgvC98
- **Issue**: *New issue → Add a player* (no fork needed / sin hacer fork).
- **Pull request**: edit `hltv-players.json` and open a PR. Every PR is checked automatically and reviewed before it is merged. / *Edita `hltv-players.json` y abre un PR. Cada PR se valida automáticamente y se revisa antes de aceptarlo.*

## Entry format / Formato

```json
{
  "faceitId": "ac71ba3c-d3d4-45e7-8be2-26aa3986867d",
  "name": "s1mple",
  "team": "BC.Game",
  "country": "UA",
  "hltvUrl": "https://www.hltv.org/player/7998/s1mple",
  "photo": "https://img-cdn.hltv.org/playerbodyshot/<hash>.png?ixlib=java-2.1.0&w=400&s=<signature>"
}
```

| Field | |
| --- | --- |
| `faceitId` | FACEIT user id (uuid). It is in the FACEIT link of the HLTV profile (`faceit.com/…/users/<id>`) or at `https://www.faceit.com/api/users/v1/nicknames/<nick>` (field `id`). Survives nickname changes. |
| `faceit` | Only if `faceitId` is unknown: the FACEIT nickname. Stops working if the player renames. |
| `name` | HLTV nickname shown on the card. |
| `team`, `country` | Optional. `country` is a 2-letter code (`ES`, `UA`…). |
| `hltvUrl` | HLTV profile. |
| `photo` | HLTV bodyshot, the `w=400` image of the profile. If the player has no bodyshot, their HLTV gallery picture works too. Empty = card without photo. |

Check your change locally with `node scripts/validate.js` (no dependencies).

## Support / Apoyar

Lobbyscope is free and will stay free. If you enjoy it, you can support development on Ko-fi ☕ <https://ko-fi.com/arturotf>. Donations are optional and don't unlock anything.

*Lobbyscope es gratis y lo seguirá siendo. Si te gusta, puedes apoyar el desarrollo en Ko-fi ☕. Las donaciones son opcionales y no desbloquean nada.*

## License / Licencia

All rights reserved, see [LICENSE](LICENSE). / *Todos los derechos reservados, ver [LICENSE](LICENSE).*
