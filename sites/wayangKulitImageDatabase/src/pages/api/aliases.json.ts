import type { canonical } from "../../types";
import { RateLimit } from "async-sema";

const limit = RateLimit(10);

export async function get() {
  const res = await fetch(
    "https://blooming-badlands-24637.herokuapp.com/canonicals/?limit=1000"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch all canonicals. Status: " + res.status);
  }
  let canonicals: { canonical_name: string }[] = await res.json();

  const getCanonicalWithAliases = async (canonical: string) => {
    await limit();
    const res = await fetch(
      `https://blooming-badlands-24637.herokuapp.com/canonical/?name=${canonical}`
    );
    if (!res.ok) {
      throw new Error(
        "Failed to fetch " + canonical + ". Status: " + res.status
      );
    }
    const fullCanonical: canonical = await res.json();
    const aliases = fullCanonical.other_names.map((alias) => {
      return alias.alias;
    });
    const canonicalWithAliases = {
      canonical_name: fullCanonical.canonical_name,
      aliases: aliases,
    };
    return canonicalWithAliases;
  };

  const canonicalsWithAliases = await Promise.all(
    canonicals.map((canonical) => {
      return getCanonicalWithAliases(canonical.canonical_name);
    })
  );

  const aliasesToCanonicals = canonicalsWithAliases.map((canonical) => {
    return canonical.aliases.map((alias) => {
      return { alias: alias, canonical: canonical.canonical_name };
    });
  });

  return {
    body: JSON.stringify(aliasesToCanonicals.flat()),
  };
}
