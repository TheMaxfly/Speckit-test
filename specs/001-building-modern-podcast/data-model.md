# Data Model

## Entities

### Episode

**Purpose**: Represents a single podcast episode displayed on Landing (featured) and Episodes pages.

**Fields**
- `id` (string): Stable unique identifier.
- `slug` (string): URL-safe identifier for linking (unique).
- `title` (string)
- `description` (string): Short summary used in lists and on the landing hero.
- `publishedAt` (string, date): ISO date (YYYY-MM-DD).
- `durationSeconds` (integer): Positive duration.
- `coverImage` (string): Path/URL to cover art.
- `audioSrc` (string): Path/URL to mocked audio file.
- `featured` (boolean): True for exactly one episode.
- `season` (integer, optional)
- `episodeNumber` (integer, optional)
- `tags` (array of string, optional)

**Validation rules**
- Exactly 20 episodes exist.
- `id` and `slug` are unique across all episodes.
- Exactly one episode has `featured = true`.
- `durationSeconds > 0`.
- `publishedAt` is a valid date string.

### FAQ Entry

**Purpose**: Question/answer content for the FAQ page.

**Fields**
- `id` (string)
- `question` (string)
- `answer` (string)

### About Content

**Purpose**: Copy for the About page.

**Fields**
- `title` (string)
- `body` (string): Markdown or HTML string (implementation choice).

## Relationships

- Landing page references exactly one `Episode` where `featured = true`.
- Episodes page lists all 20 `Episode` items.
