export type PokemonType = {
  count: number;
  next: string;
  previous: string;
  results: ItemType[];
};

export type ItemType = {
  name: string;
  url: string;
};

export type PokemonGroupType = {
  effect_changes: [];
  effect_entries: { effect: string; language: { name: string; url: string }; url: string }[];
  flavor_text_entries: {
    flavor_text: string;
    generation: { name: string; url: string };

    is_main_series: boolean;
    language: { name: string; url: string };
    name: string;
    names: { language: { name: string; url: string }; name: string }[];
    pokemon: {
      is_hidden: boolean;
      pokemon: {
        name: string;
        url: string;
      };
      slot: number;
    }[];
    version_group: { name: string; url: string };
  }[];
  id: number;
};
