const util = require('util')
const fs = require('fs');

let items = {
  mystic_enhancement_ore: {
    id: "mystic_enhancement_ore",
    name: "Mystic Enhancement Ore",
  },
  fine_enhancement_ore: {
    id: "fine_enhancement_ore",
    name: "Fine Enhancement Ore",
  },
  enhancement_ore: { id: "enhancement_ore", name: "Enhancement Ore" },
  any_weapon_1: { id: "any_weapon_1", name: "1 Star Weapon" },
  any_weapon_2: { id: "any_weapon_2", name: "2 Star Weapon" },
  any_weapon_3: { id: "any_weapon_3", name: "3 Star Weapon" },
  mora: { id: "mora", name: "Mora" },
  heros_wit: { id: "heros_wit", name: "Hero's Wit" },
  adventurers_experience: {
    id: "adventurers_experience",
    name: "Adventurer's Experience",
  },
  wanderes_advice: { id: "wanderes_advice", name: "Wanderer's Advice" },
  crown_of_insight: { id: "crown_of_insight", name: "Crown of Insight" },

  fetters_of_the_dandelion_gladiator: {
    id: "fetters_of_the_dandelion_gladiator",
    name: "Fetters of the Dandelion Gladiator",
    day: ["wednesday", "saturday"],
    rarity: 1,
  },
  chaos_device: { id: "chaos_device", name: "Chaos Device" },
  divining_scroll: { id: "divining_scroll", name: "Divining Scroll" },
  chains_of_the_dandelion_gladiator: {
    id: "chains_of_the_dandelion_gladiator",
    name: "Chains of the Dandelion Gladiator",
    day: ["wednesday", "saturday"],
    rarity: 2,
    parent: "fetters_of_the_dandelion_gladiator",
  },
  chaos_circuit: { id: "chaos_circuit", name: "Chaos Circuit" },
  sealed_scroll: { id: "sealed_scroll", name: "Sealed Scroll" },
  shackles_of_the_dandelion_gladiator: {
    id: "shackles_of_the_dandelion_gladiator",
    name: "Shackles of the Dandelion Gladiator",
    day: ["wednesday", "saturday"],
    rarity: 3,
    parent: "fetters_of_the_dandelion_gladiator",
  },
  chaos_core: { id: "chaos_core", name: "Chaos Core" },
  forbidden_curse_scroll: {
    id: "forbidden_curse_scroll",
    name: "Forbidden Curse Scroll",
  },
  dream_of_the_dandelion_gladiator: {
    id: "dream_of_the_dandelion_gladiator",
    name: "Dream of the Dandelion Gladiator",
    day: ["wednesday", "saturday"],
    rarity: 4,
    parent: "fetters_of_the_dandelion_gladiator",
  },
  tile_of_decarabians_tower: {
    id: "tile_of_decarabians_tower",
    name: "Tile of Decarabian's Tower",
    day: ["monday", "thursday"],
    rarity: 1,
  },
  heavy_horn: { id: "heavy_horn", name: "Heavy Horn" },
  firm_arrowhead: { id: "firm_arrowhead", name: "Firm Arrowhead" },
  debris_of_decarabians_city: {
    id: "debris_of_decarabians_city",
    name: "Debris of Decarabian's City",
    day: ["monday", "thursday"],
    rarity: 2,
    parent: "tile_of_decarabians_tower",
  },
  black_bronze_horn: {
    id: "black_bronze_horn",
    name: "Black Bronze Horn",
  },
  sharp_arrowhead: { id: "sharp_arrowhead", name: "Sharp Arrowhead" },
  fragment_of_decarabians_epic: {
    id: "fragment_of_decarabians_epic",
    name: "Fragment of Decarabian's Epic",
    day: ["monday", "thursday"],
    rarity: 3,
    parent: "tile_of_decarabians_tower",
  },
  black_crystal_horn: {
    id: "black_crystal_horn",
    name: "Black Crystal Horn",
  },
  weathered_arrowhead: {
    id: "weathered_arrowhead",
    name: "Weathered Arrowhead",
  },
  scattered_piece_of_decarabians_dream: {
    id: "scattered_piece_of_decarabians_dream",
    name: "Scattered Piece of Decarabian's Dream",
    day: ["monday", "thursday"],
    rarity: 4,
    parent: "tile_of_decarabians_tower",
  },
  slime_condensate: { id: "slime_condensate", name: "Slime Condensate" },
  slime_secretions: { id: "slime_secretions", name: "Slime Secretions" },
  slime_concentrate: {
    id: "slime_concentrate",
    name: "Slime Concentrate",
  },
  boreal_wolfs_milk_tooth: {
    id: "boreal_wolfs_milk_tooth",
    name: "Boreal Wolf's Milk Tooth",
    day: ["tuesday", "friday"],
    rarity: 1,
  },
  dead_ley_line_branch: {
    id: "dead_ley_line_branch",
    name: "Dead Ley Line Branch",
  },
  boreal_wolfs_cracked_tooth: {
    id: "boreal_wolfs_cracked_tooth",
    name: "Boreal Wolf's Cracked Tooth",
    day: ["tuesday", "friday"],
    rarity: 2,
    parent: "boreal_wolfs_milk_tooth",
  },
  dead_ley_line_leaves: {
    id: "dead_ley_line_leaves",
    name: "Dead Ley Line Leaves",
  },
  boreal_wolfs_broken_fang: {
    id: "boreal_wolfs_broken_fang",
    name: "Boreal Wolf's Broken Fang",
    day: ["tuesday", "friday"],
    rarity: 3,
    parent: "boreal_wolfs_milk_tooth",
  },
  ley_line_sprouts: { id: "ley_line_sprouts", name: "Ley Line Sprouts" },
  boreal_wolfs_nostalgia: {
    id: "boreal_wolfs_nostalgia",
    name: "Boreal Wolf's Nostalgia",
    day: ["tuesday", "friday"],
    rarity: 4,
    parent: "boreal_wolfs_milk_tooth",
  },
  grain_of_aerosiderite: {
    id: "grain_of_aerosiderite",
    name: "Grain of Aerosiderite",
    day: ["wednesday", "saturday"],
    rarity: 1,
  },
  fragile_bone_shard: {
    id: "fragile_bone_shard",
    name: "Fragile Bone Shard",
  },
  damaged_mask: { id: "damaged_mask", name: "Damaged Mask" },
  piece_of_aerosiderite: {
    id: "piece_of_aerosiderite",
    name: "Piece of Aerosiderite",
    day: ["wednesday", "saturday"],
    rarity: 2,
    parent: "grain_of_aerosiderite",
  },
  sturdy_bone_shard: {
    id: "sturdy_bone_shard",
    name: "Sturdy Bone Shard",
  },
  stained_mask: { id: "stained_mask", name: "Stained Mask" },
  bit_of_aerosiderite: {
    id: "bit_of_aerosiderite",
    name: "Bit of Aerosiderite",
    day: ["wednesday", "saturday"],
    rarity: 3,
    parent: "grain_of_aerosiderite",
  },
  fossilized_bone_shard: {
    id: "fossilized_bone_shard",
    name: "Fossilized Bone Shard",
  },
  ominous_mask: { id: "ominous_mask", name: "Ominous Mask" },
  chunk_of_aerosiderite: {
    id: "chunk_of_aerosiderite",
    name: "Chunk of Aerosiderite",
    day: ["wednesday", "saturday"],
    rarity: 4,
    parent: "grain_of_aerosiderite",
  },
  mist_veiled_lead_elixir: {
    id: "mist_veiled_lead_elixir",
    name: "Mist Veiled Lead Elixir",
    day: ["tuesday", "friday"],
    rarity: 1,
  },
  mist_grass_pollen: {
    id: "mist_grass_pollen",
    name: "Mist Grass Pollen",
  },
  treasure_hoarder_insignia: {
    id: "treasure_hoarder_insignia",
    name: "Treasure Hoarder Insignia",
  },
  mist_veiled_mercury_elixir: {
    id: "mist_veiled_mercury_elixir",
    name: "Mist Veiled Mercury Elixir",
    day: ["tuesday", "friday"],
    rarity: 2,
    parent: "mist_veiled_lead_elixir",
  },
  mist_grass: { id: "mist_grass", name: "Mist Grass" },
  silver_raven_insignia: {
    id: "silver_raven_insignia",
    name: "Silver Raven Insignia",
  },
  mist_veiled_gold_elixir: {
    id: "mist_veiled_gold_elixir",
    name: "Mist Veiled Gold Elixir",
    day: ["tuesday", "friday"],
    rarity: 3,
    parent: "mist_veiled_lead_elixir",
  },
  mist_grass_wick: { id: "mist_grass_wick", name: "Mist Grass Wick" },
  golden_raven_insignia: {
    id: "golden_raven_insignia",
    name: "Golden Raven Insignia",
  },
  mist_veiled_primo_elixir: {
    id: "mist_veiled_primo_elixir",
    name: "Mist Veiled Primo Elixir",
    day: ["tuesday", "friday"],
    rarity: 4,
    parent: "mist_veiled_lead_elixir",
  },
  luminous_sands_from_guyun: {
    id: "luminous_sands_from_guyun",
    name: "Luminous Sands from Guyun",
    day: ["monday", "thursday"],
    rarity: 1,
  },
  hunters_sacrificial_knife: {
    id: "hunters_sacrificial_knife",
    name: "Hunter's Sacrificial Knife",
  },
  recruits_insignia: {
    id: "recruits_insignia",
    name: "Recruit's Insignia",
  },
  lustrous_stone_from_guyun: {
    id: "lustrous_stone_from_guyun",
    name: "Lustrous Stone from Guyun",
    day: ["monday", "thursday"],
    rarity: 2,
    parent: "luminous_sands_from_guyun",
  },
  agents_sacrificial_knife: {
    id: "agents_sacrificial_knife",
    name: "Agent's Sacrificial Knife",
  },
  sergeants_insignia: {
    id: "sergeants_insignia",
    name: "Sergeant's Insignia",
  },
  relic_from_guyun: {
    id: "relic_from_guyun",
    name: "Relic from Guyun",
    day: ["monday", "thursday"],
    rarity: 3,
    parent: "luminous_sands_from_guyun",
  },
  inspectors_sacrificial_knife: {
    id: "inspectors_sacrificial_knife",
    name: "Inspector's Sacrificial Knife",
  },
  lieutenants_insignia: {
    id: "lieutenants_insignia",
    name: "Lieutenant's Insignia",
  },
  divine_body_from_guyun: {
    id: "divine_body_from_guyun",
    name: "Divine Body from Guyun",
    day: ["monday", "thursday"],
    rarity: 4,
    parent: "luminous_sands_from_guyun",
  },
  whopperflower_nectar: {
    id: "whopperflower_nectar",
    name: "Whopperflower Nectar",
  },
  shimmering_nectar: {
    id: "shimmering_nectar",
    name: "Shimmering Nectar",
  },
  energy_nectar: { id: "energy_nectar", name: "Energy Nectar" },
  prithiva_topaz_sliver: {
    id: "prithiva_topaz_sliver",
    name: "Prithiva Topaz Sliver",
    rarity: 1,
  },
  cecilia: { id: "cecilia", name: "Cecilia" },
  prithiva_topaz_fragment: {
    id: "prithiva_topaz_fragment",
    name: "Prithiva Topaz Fragment",
    rarity: 2,
    parent: "prithiva_topaz_sliver",
  },
  basalt_pillar: {
    id: "basalt_pillar",
    name: "Basalt Pillar",
    rarity: 5,
    parent: "prithiva_topaz_sliver",
  },
  prithiva_topaz_chunk: {
    id: "prithiva_topaz_chunk",
    name: "Prithiva Topaz Chunk",
    rarity: 3,
    parent: "prithiva_topaz_sliver",
  },
  prithiva_topaz_gemstone: {
    id: "prithiva_topaz_gemstone",
    name: "Prithiva Topaz Gemstone",
    rarity: 4,
    parent: "prithiva_topaz_sliver",
  },
  teachings_of_ballad: {
    id: "teachings_of_ballad",
    name: "Teachings of Ballad",
    day: ["wednesday", "saturday"],
    rarity: 2,
  },
  guide_to_ballad: {
    id: "guide_to_ballad",
    name: "Guide to Ballad",
    day: ["wednesday", "saturday"],
    rarity: 3,
    parent: "teachings_of_ballad",
  },
  philosophies_of_ballad: {
    id: "philosophies_of_ballad",
    name: "Philosophies of Ballad",
    day: ["wednesday", "saturday"],
    rarity: 4,
    parent: "teachings_of_ballad",
  },
  tusk_of_monoceros_caeli: {
    id: "tusk_of_monoceros_caeli",
    name: "Tusk of Monoceros Caeli",
  },
  agnidus_agate_sliver: {
    id: "agnidus_agate_sliver",
    name: "Agnidus Agate Sliver",
    rarity: 1,
  },
  small_lamp_grass: { id: "small_lamp_grass", name: "Small Lamp Grass" },
  agnidus_agate_fragment: {
    id: "agnidus_agate_fragment",
    name: "Agnidus Agate Fragment",
    rarity: 2,
    parent: "agnidus_agate_sliver",
  },
  everflame_seed: {
    id: "everflame_seed",
    name: "Everflame Seed",
    rarity: 5,
    parent: "agnidus_agate_sliver",
  },
  agnidus_agate_chunk: {
    id: "agnidus_agate_chunk",
    name: "Agnidus Agate Chunk",
    rarity: 3,
    parent: "agnidus_agate_sliver",
  },
  agnidus_agate_gemstone: {
    id: "agnidus_agate_gemstone",
    name: "Agnidus Agate Gemstone",
    rarity: 4,
    parent: "agnidus_agate_sliver",
  },
  teachings_of_freedom: {
    id: "teachings_of_freedom",
    name: "Teachings of Freedom",
    day: ["monday", "thursday"],
    rarity: 2,
  },
  guide_to_freedom: {
    id: "guide_to_freedom",
    name: "Guide to Freedom",
    day: ["monday", "thursday"],
    rarity: 3,
    parent: "teachings_of_freedom",
  },
  philosophies_of_freedom: {
    id: "philosophies_of_freedom",
    name: "Philosophies of Freedom",
    day: ["monday", "thursday"],
    rarity: 4,
    parent: "teachings_of_freedom",
  },
  dvalins_sigh: { id: "dvalins_sigh", name: "Dvalin's Sigh" },
  varunada_lazurite_sliver: {
    id: "varunada_lazurite_sliver",
    name: "Varunada Lazurite Sliver",
    rarity: 1,
  },
  philanemo_mushroom: {
    id: "philanemo_mushroom",
    name: "Philanemo Mushroom",
  },
  varunada_lazurite_fragment: {
    id: "varunada_lazurite_fragment",
    name: "Varunada Lazurite Fragment",
    rarity: 2,
    parent: "varunada_lazurite_sliver",
  },
  cleansing_heart: {
    id: "cleansing_heart",
    name: "Cleansing Heart",
    rarity: 5,
    parent: "varunada_lazurite_sliver",
  },
  varunada_lazurite_chunk: {
    id: "varunada_lazurite_chunk",
    name: "Varunada Lazurite Chunk",
    rarity: 3,
    parent: "varunada_lazurite_sliver",
  },
  varunada_lazurite_gemstone: {
    id: "varunada_lazurite_gemstone",
    name: "Varunada Lazurite Gemstone",
    rarity: 4,
    parent: "varunada_lazurite_sliver",
  },
  ring_of_boreas: { id: "ring_of_boreas", name: "Ring of Boreas" },
  vajrada_amethyst_sliver: {
    id: "vajrada_amethyst_sliver",
    name: "Vajrada Amethyst Sliver",
    rarity: 1,
  },
  noctilucous_jade: { id: "noctilucous_jade", name: "Noctilucous Jade" },
  vajrada_amethyst_fragment: {
    id: "vajrada_amethyst_fragment",
    name: "Vajrada Amethyst Fragment",
    rarity: 2,
    parent: "vajrada_amethyst_sliver",
  },
  lightning_prism: {
    id: "lightning_prism",
    name: "Lightning Prism",
    rarity: 5,
    parent: "vajrada_amethyst_sliver",
  },
  vajrada_amethyst_chunk: {
    id: "vajrada_amethyst_chunk",
    name: "Vajrada Amethyst Chunk",
    rarity: 3,
    parent: "vajrada_amethyst_sliver",
  },
  vajrada_amethyst_gemstone: {
    id: "vajrada_amethyst_gemstone",
    name: "Vajrada Amethyst Gemstone",
    rarity: 4,
    parent: "vajrada_amethyst_sliver",
  },
  teachings_of_gold: {
    id: "teachings_of_gold",
    name: "Teachings of Gold",
    day: ["wednesday", "saturday"],
    rarity: 2,
  },
  guide_to_gold: {
    id: "guide_to_gold",
    name: "Guide to Gold",
    day: ["wednesday", "saturday"],
    rarity: 3,
    parent: "teachings_of_gold",
  },
  philosophies_of_gold: {
    id: "philosophies_of_gold",
    name: "Philosophies of Gold",
    day: ["wednesday", "saturday"],
    rarity: 4,
    parent: "teachings_of_gold",
  },
  windwheel_aster: { id: "windwheel_aster", name: "Windwheel Aster" },
  teachings_of_resistance: {
    id: "teachings_of_resistance",
    name: "Teachings of Resistance",
    day: ["tuesday", "friday"],
    rarity: 2,
  },
  guide_to_resistance: {
    id: "guide_to_resistance",
    name: "Guide to Resistance",
    day: ["tuesday", "friday"],
    rarity: 3,
    parent: "teachings_of_resistance",
  },
  philosophies_of_resistance: {
    id: "philosophies_of_resistance",
    name: "Philosophies of Resistance",
    day: ["tuesday", "friday"],
    rarity: 4,
    parent: "teachings_of_resistance",
  },
  dvalins_plume: { id: "dvalins_plume", name: "Dvalin's Plume" },
  shivada_jade_sliver: {
    id: "shivada_jade_sliver",
    name: "Shivada Jade Sliver",
    rarity: 1,
  },
  cor_lapis: { id: "cor_lapis", name: "Cor Lapis" },
  shivada_jade_fragment: {
    id: "shivada_jade_fragment",
    name: "Shivada Jade Fragment",
    rarity: 2,
    parent: "shivada_jade_sliver",
  },
  hoarfrost_core: {
    id: "hoarfrost_core",
    name: "Hoarfrost Core",
    rarity: 5,
    parent: "shivada_jade_sliver",
  },
  shivada_jade_chunk: {
    id: "shivada_jade_chunk",
    name: "Shivada Jade Chunk",
    rarity: 3,
    parent: "shivada_jade_sliver",
  },
  shivada_jade_gemstone: {
    id: "shivada_jade_gemstone",
    name: "Shivada Jade Gemstone",
    rarity: 4,
    parent: "shivada_jade_sliver",
  },
  teachings_of_diligence: {
    id: "teachings_of_diligence",
    name: "Teachings of Diligence",
    day: ["tuesday", "friday"],
    rarity: 2,
  },
  guide_to_diligence: {
    id: "guide_to_diligence",
    name: "Guide to Diligence",
    day: ["tuesday", "friday"],
    rarity: 3,
    parent: "teachings_of_diligence",
  },
  philosophies_of_diligence: {
    id: "philosophies_of_diligence",
    name: "Philosophies of Diligence",
    day: ["tuesday", "friday"],
    rarity: 4,
    parent: "teachings_of_diligence",
  },
  calla_lily: { id: "calla_lily", name: "Calla Lily" },
  shard_of_a_foul_legacy: {
    id: "shard_of_a_foul_legacy",
    name: "Shard of a Foul Legacy",
  },
  spirit_locket_of_boreas: {
    id: "spirit_locket_of_boreas",
    name: "Spirit Locket of Boreas",
  },
  vayuda_turquoise_sliver: {
    id: "vayuda_turquoise_sliver",
    name: "Vayuda Turquoise Sliver",
    rarity: 1,
  },
  dandelion_seed: { id: "dandelion_seed", name: "Dandelion Seed" },
  vayuda_turquoise_fragment: {
    id: "vayuda_turquoise_fragment",
    name: "Vayuda Turquoise Fragment",
    rarity: 2,
    parent: "vayuda_turquoise_sliver",
  },
  hurricane_seed: {
    id: "hurricane_seed",
    name: "Hurricane Seed",
    rarity: 5,
    parent: "vayuda_turquoise_sliver",
  },
  vayuda_turquoise_chunk: {
    id: "vayuda_turquoise_chunk",
    name: "Vayuda Turquoise Chunk",
    rarity: 3,
    parent: "vayuda_turquoise_sliver",
  },
  vayuda_turquoise_gemstone: {
    id: "vayuda_turquoise_gemstone",
    name: "Vayuda Turquoise Gemstone",
    rarity: 4,
    parent: "vayuda_turquoise_sliver",
  },
  teachings_of_prosperity: {
    id: "teachings_of_prosperity",
    name: "Teachings of Prosperity",
    day: ["monday", "thursday"],
    rarity: 2,
  },
  guide_to_prosperity: {
    id: "guide_to_prosperity",
    name: "Guide to Prosperity",
    day: ["monday", "thursday"],
    rarity: 3,
    parent: "teachings_of_prosperity",
  },
  philosophies_of_prosperity: {
    id: "philosophies_of_prosperity",
    name: "Philosophies of Prosperity",
    day: ["monday", "thursday"],
    rarity: 4,
    parent: "teachings_of_prosperity",
  },
  valberry: { id: "valberry", name: "Valberry" },
  dvalins_claw: { id: "dvalins_claw", name: "Dvalin's Claw" },
  glaze_lily: { id: "glaze_lily", name: "Glaze Lily" },
  violetgrass: { id: "violetgrass", name: "Violetgrass" },
  tail_of_boreas: { id: "tail_of_boreas", name: "Tail of Boreas" },
  wolfhook: { id: "wolfhook", name: "Wolfhook" },
  starconch: { id: "starconch", name: "Starconch" },
  brilliant_diamond_sliver: {
    id: "brilliant_diamond_sliver",
    name: "Brilliant Diamond Sliver",
    rarity: 1,
  },
  brilliant_diamond_fragment: {
    id: "brilliant_diamond_fragment",
    name: "Brilliant Diamond Fragment",
    rarity: 2,
    parent: "brilliant_diamond_sliver",
  },
  brilliant_diamond_chunk: {
    id: "brilliant_diamond_chunk",
    name: "Brilliant Diamond Chunk",
    rarity: 3,
    parent: "brilliant_diamond_sliver",
  },
  brilliant_diamond_gemstone: {
    id: "brilliant_diamond_gemstone",
    name: "Brilliant Diamond Gemstone",
    rarity: 4,
    parent: "brilliant_diamond_sliver",
  },
  jueyun_chili: { id: "jueyun_chili", name: "Jueyun Chili" },
  silk_flower: { id: "silk_flower", name: "Silk Flower" },
  qingxin: { id: "qingxin", name: "Qingxin" },
  shadow_of_the_warrior: {
    id: "shadow_of_the_warrior",
    name: "Shadow of the Warrior",
  },
  juvenile_jade: { id: "juvenile_jade", name: "Juvenile Jade", rarity: 5 },
  bloodjade_branch: {
    id: "bloodjade_branch",
    name: "Bloodjade Branch",
    rarity: 5,
  },
  crystalline_bloom: {
    id: "crystalline_bloom",
    name: "Crystalline Bloom",
    rarity: 5,
  },
  dragon_lords_crown: {
    id: "dragon_lords_crown",
    name: "Dragon Lord's Crown",
    rarity: 5,
  },
  sea_ganoderma: { id: "sea_ganoderma", name: "Sea Ganoderma" },
  marionette_core: {
    id: "marionette_core",
    name: "Marionette Core",
    rarity: 4,
  },
  gilded_scale: { id: "gilded_scale", name: "Gilded Scale", rarity: 5 },
  coral_branch_of_a_distant_sea: {
    id: "coral_branch_of_a_distant_sea",
    name: "Coral Branch of a Distant Sea",
    day: ["monday", "thursday"],
    rarity: 1,
  },
  jeweled_branch_of_a_distant_sea: {
    id: "jeweled_branch_of_a_distant_sea",
    name: "Jeweled Branch of a Distant Sea",
    day: ["monday", "thursday"],
    rarity: 2,
    parent: "coral_branch_of_a_distant_sea",
  },
  jade_branch_of_a_distant_sea: {
    id: "jade_branch_of_a_distant_sea",
    name: "Jade Branch of a Distant Sea",
    day: ["monday", "thursday"],
    rarity: 3,
    parent: "coral_branch_of_a_distant_sea",
  },
  golden_branch_of_a_distant_sea: {
    id: "golden_branch_of_a_distant_sea",
    name: "Golden Branch of a Golden Sea",
    day: ["monday", "thursday"],
    rarity: 4,
    parent: "coral_branch_of_a_distant_sea",
  },

  narukamis_wisdom: {
    id: "narukamis_wisdom",
    name: "Narukami's Wisdom",
    day: ["tuesday", "friday"],
    rarity: 1,
  },
  narukamis_joy: {
    id: "narukamis_joy",
    name: "Narukami's Joy",
    day: ["tuesday", "friday"],
    rarity: 2,
    parent: "narukamis_wisdom",
  },
  narukamis_affection: {
    id: "narukamis_affection",
    name: "Narukami's Affection",
    day: ["tuesday", "friday"],
    rarity: 3,
    parent: "narukamis_wisdom",
  },
  narukamis_valor: {
    id: "narukamis_valor",
    name: "Narukami's Valor",
    day: ["tuesday", "friday"],
    rarity: 4,
    parent: "narukamis_wisdom",
  },

  mask_of_the_wicked_lieutenant: {
    id: "mask_of_the_wicked_lieutenant",
    name: "Mask of the Wicked Lieutenant",
    day: ["wednesday", "saturday"],
    rarity: 1,
  },
  mask_of_the_tigers_bite: {
    id: "mask_of_the_tigers_bite",
    name: "Mask of the Tiger's Bite",
    day: ["wednesday", "saturday"],
    rarity: 2,
    parent: "mask_of_the_wicked_lieutenant",
  },
  mask_of_the_one_horned: {
    id: "mask_of_the_one_horned",
    name: "Mask of the One-Horned",
    day: ["wednesday", "saturday"],
    rarity: 3,
    parent: "mask_of_the_wicked_lieutenant",
  },
  mask_of_the_kijin: {
    id: "mask_of_the_kijin",
    name: "Mask of the Kijin",
    day: ["wednesday", "saturday"],
    rarity: 4,
    parent: "mask_of_the_wicked_lieutenant",
  },

  teachings_of_transience: {
    id: "teachings_of_transience",
    name: "Teachings of Transience",
    day: ["monday", "thursday"],
    rarity: 2,
  },
  guide_to_transience: {
    id: "guide_to_transience",
    name: "Guide to Transience",
    day: ["monday", "thursday"],
    rarity: 3,
    parent: "teachings_of_transience",
  },
  philosophies_of_transience: {
    id: "philosophies_of_transience",
    name: "Philosophies of Transience",
    day: ["monday", "thursday"],
    rarity: 4,
    parent: "teachings_of_transience",
  },

  teachings_of_elegance: {
    id: "teachings_of_elegance",
    name: "Teachings of Elegance",
    day: ["tuesday", "friday"],
    rarity: 2,
  },
  guide_to_elegance: {
    id: "guide_to_elegance",
    name: "Guide to Elegance",
    day: ["tuesday", "friday"],
    rarity: 3,
    parent: "teachings_of_elegance",
  },
  philosophies_of_elegance: {
    id: "philosophies_of_elegance",
    name: "Philosophies of Elegance",
    day: ["tuesday", "friday"],
    rarity: 4,
    parent: "teachings_of_elegance",
  },

  teachings_of_light: {
    id: "teachings_of_light",
    name: "Teachings of Light",
    day: ["wednesday", "saturday"],
    rarity: 2,
  },
  guide_to_light: {
    id: "guide_to_light",
    name: "Guide to Light",
    day: ["wednesday", "saturday"],
    rarity: 3,
    parent: "teachings_of_light",
  },
  philosophies_of_light: {
    id: "philosophies_of_light",
    name: "Philosophies of Light",
    day: ["wednesday", "saturday"],
    rarity: 4,
    parent: "teachings_of_light",
  },

  perpetual_heart: {
    id: "perpetual_heart",
    name: "Perpetual Heart",
    rarity: 5,
  },
  smoldering_pearl: {
    id: "smoldering_pearl",
    name: "Smoldering Pearl",
    rarity: 5,
  },

  old_handguard: { id: "old_handguard", name: "Old Handguard" },
  kageuchi_handguard: { id: "kageuchi_handguard", name: "Kageuchi Handguard" },
  famed_handguard: { id: "famed_handguard", name: "Famed Handguard" },

  chaos_gear: { id: "chaos_gear", name: "Chaos Gear" },
  chaos_axis: { id: "chaos_axis", name: "Chaos Axis" },
  chaos_oculus: { id: "chaos_oculus", name: "Chaos Oculus" },

  dismal_prism: { id: "dismal_prism", name: "Dismal Prism" },
  crystal_prism: { id: "crystal_prism", name: "Crystal Prism" },
  polarizing_prism: { id: "polarizing_prism", name: "Polarizing Prism" },

  sakura_bloom: { id: "sakura_bloom", name: "Sakura Bloom" },
  crystal_marrow: { id: "crystal_marrow", name: "Crystal Marrow" },
  dendrobium: { id: "dendrobium", name: "Dendrobium" },
  naku_weed: { id: "naku_weed", name: "Naku Weed" },
  okinabuto: { id: "okinabuto", name: "Okinabuto" },

  amakumo_fruit: { id: "amakumo_fruit", name: "Amakumo Fruit" },
  storm_beads: { id: "storm_beads", name: "Storm Beads" },
  molten_moment: { id: "molten_moment", name: "Molten Moment", rarity: 5 },
  ashen_heart: { id: "ashen_heart", name: "Ashen Heart", rarity: 5 },
  spectral_husk: { id: "spectral_husk", name: "Spectral Husk" },
  spectral_heart: { id: "spectral_heart", name: "Spectral Heart" },
  spectral_nucleus: { id: "spectral_nucleus", name: "Spectral Nucleus" },

  sango_pearl: { id: "sango_pearl", name: "Sango Pearl" },
  dew_of_repudiation: {
    id: "dew_of_repudiation",
    name: "Dew of Repudiation",
    rarity: 5,
  },
  hellfire_butterfly: {
    id: "hellfire_butterfly",
    name: "Hellfire Butterfly",
    rarity: 5,
  },

  concealed_claw: { id: "concealed_claw", name: "Concealed Claw" },
  concealed_unguis: { id: "concealed_unguis", name: "Concealed Unguis" },
  concealed_talon: { id: "concealed_talon", name: "Concealed Talon" },

  fluorescent_fungus: { id: "fluorescent_fungus", name: "Fluorescent Fungus" },
  onikabuto: { id: "onikabuto", name: "Onikabuto" },

  riftborn_regalia: {
    id: "riftborn_regalia",
    name: "Riftborn Regalia",
    rarity: 5,
    parent: "prithiva_topaz_sliver",
  },

  dragonheirs_false_fin: {
    id: "dragonheirs_false_fin",
    name: "Dragonheir's False Fin",
    rarity: 5,
    parent: "shivada_jade_sliver",
  },

  the_meaning_of_aeons: {
    id: "the_meaning_of_aeons",
    name: "The Meaning of Aeons",
    rarity: 5,
  },

  mudra_of_the_malefic_general: {
    id: "mudra_of_the_malefic_general",
    name: "Mudra of the Malefic General",
    rarity: 5,
  },

  gloomy_statuette: { id: "gloomy_statuette", name: "Gloomy Statuette" },
  dark_statuette: { id: "dark_statuette", name: "Dark Statuette" },
  deathly_statuette: { id: "deathly_statuette", name: "Deathly Statuette" },
  tears_of_the_calamitous_god: {
    id: "tears_of_the_calamitous_god",
    name: "Tears of the Calamitous God",
  },

  runic_fang: { id: "runic_fang", name: "Runic Fang", rarity: 4 },

  runic_fang: { id: "runic_fang", name: "Runic Fang", rarity: 4 },

  teachings_of_admonition: {
    id: "teachings_of_admonition",
    name: "Teachings of Admonition",
    day: ["monday", "thursday"],
    rarity: 2,
  },
  guide_to_admonition: {
    id: "guide_to_admonition",
    name: "Guide to Admonition",
    day: ["monday", "thursday"],
    rarity: 3,
    parent: "teachings_of_admonition",
  },
  philosophies_of_admonition: {
    id: "philosophies_of_admonition",
    name: "Philosophies of Admonition",
    day: ["monday", "thursday"],
    rarity: 4,
    parent: "teachings_of_admonition",
  },

  teachings_of_ingenuity: {
    id: "teachings_of_ingenuity",
    name: "Teachings of Ingenuity",
    day: ["tuesday", "friday"],
    rarity: 2,
  },
  guide_to_ingenuity: {
    id: "guide_to_ingenuity",
    name: "Guide to Ingenuity",
    day: ["tuesday", "friday"],
    rarity: 3,
    parent: "teachings_of_ingenuity",
  },
  philosophies_of_ingenuity: {
    id: "philosophies_of_ingenuity",
    name: "Philosophies of Ingenuity",
    day: ["tuesday", "friday"],
    rarity: 4,
    parent: "teachings_of_ingenuity",
  },

  teachings_of_praxis: {
    id: "teachings_of_praxis",
    name: "Teachings of Praxis",
    day: ["wednesday", "saturday"],
    rarity: 2,
  },
  guide_to_praxis: {
    id: "guide_to_praxis",
    name: "Guide to Praxis",
    day: ["wednesday", "saturday"],
    rarity: 3,
    parent: "teachings_of_praxis",
  },
  philosophies_of_praxis: {
    id: "philosophies_of_praxis",
    name: "Philosophies of Praxis",
    day: ["wednesday", "saturday"],
    rarity: 4,
    parent: "teachings_of_praxis",
  },

  nagadus_emerald_sliver: {
    id: "nagadus_emerald_sliver",
    name: "Nagadus Emerald Sliver",
    rarity: 1,
  },
  nagadus_emerald_fragment: {
    id: "nagadus_emerald_fragment",
    name: "Nagadus Emerald Fragment",
    rarity: 2,
    parent: "nagadus_emerald_sliver",
  },
  nagadus_emerald_chunk: {
    id: "nagadus_emerald_chunk",
    name: "Nagadus Emerald Chunk",
    rarity: 3,
    parent: "nagadus_emerald_sliver",
  },
  nagadus_emerald_gemstone: {
    id: "nagadus_emerald_gemstone",
    name: "Nagadus Emerald Gemstone",
    rarity: 4,
    parent: "nagadus_emerald_sliver",
  },

  majestic_hooked_beak: {
    id: "majestic_hooked_beak",
    name: "Majestic Hooked Beak",
    rarity: 5,
  },
  nilotpala_lotus: { id: "nilotpala_lotus", name: "Nilotpala Lotus" },
  kalpalata_lotus: { id: "kalpalata_lotus", name: "Kalpalata Lotus" },

  fungal_spores: {
    id: "fungal_spores",
    name: "Fungal Spores",
  },
  luminescent_pollen: {
    id: "luminescent_pollen",
    name: "Luminescent Pollen",
  },
  crystalline_cyst_dust: {
    id: "crystalline_cyst_dust",
    name: "Crystalline Cyst Dust",
  },
  rukkhashava_mushrooms: {
    id: "rukkhashava_mushrooms",
    name: "Rukkhashava Mushrooms",
  },

  echo_of_scorching_might: {
    id: "echo_of_scorching_might",
    name: "Echo of Scorching Might",
    day: ["wednesday", "saturday"],
    rarity: 1,
  },
  remnant_glow_of_scorching_might: {
    id: "remnant_glow_of_scorching_might",
    name: "Remnant Glow of Scorching Might",
    day: ["wednesday", "saturday"],
    rarity: 2,
    parent: "echo_of_scorching_might",
  },
  dream_of_scorching_might: {
    id: "dream_of_scorching_might",
    name: "Dream of Scorching Might",
    day: ["wednesday", "saturday"],
    rarity: 3,
    parent: "echo_of_scorching_might",
  },
  olden_days_of_scorching_might: {
    id: "olden_days_of_scorching_might",
    name: "Olden Days of Scorching Might",
    day: ["wednesday", "saturday"],
    rarity: 4,
    parent: "echo_of_scorching_might",
  },

  inactivated_fungal_nucleus: {
    id: "inactivated_fungal_nucleus",
    name: "Inactivated Fungal Nucleus",
  },
  dormant_fungal_nucleus: {
    id: "dormant_fungal_nucleus",
    name: "Dormant Fungal Nucleus",
  },
  robust_fungal_nucleus: {
    id: "robust_fungal_nucleus",
    name: "Robust Fungal Nucleus",
  },

  faded_red_satin: { id: "faded_red_satin", name: "Faded Red Satin" },
  trimmed_red_silk: { id: "trimmed_red_silk", name: "Trimmed Red Silk" },
  rich_red_brocade: { id: "rich_red_brocade", name: "Rich Red Brocade" },

  copper_talisman_of_the_forest_dew: {
    id: "copper_talisman_of_the_forest_dew",
    name: "Copper Talisman of the Forest Dew",
    day: ["monday", "thursday"],
    rarity: 1,
  },
  iron_talisman_of_the_forest_dew: {
    id: "iron_talisman_of_the_forest_dew",
    name: "Iron Talisman of the Forest Dew",
    day: ["monday", "thursday"],
    rarity: 2,
    parent: "copper_talisman_of_the_forest_dew",
  },
  silver_talisman_of_the_forest_dew: {
    id: "silver_talisman_of_the_forest_dew",
    name: "Silver Talisman of the Forest Dew",
    day: ["monday", "thursday"],
    rarity: 3,
    parent: "copper_talisman_of_the_forest_dew",
  },
  golden_talisman_of_the_forest_dew: {
    id: "golden_talisman_of_the_forest_dew",
    name: "Golden Talisman of the Forest Dew",
    day: ["monday", "thursday"],
    rarity: 4,
    parent: "copper_talisman_of_the_forest_dew",
  },

  chaos_storage: { id: "chaos_storage", name: "Chaos Storage" },
  chaos_module: { id: "chaos_module", name: "Chaos Module" },
  chaos_bolt: { id: "chaos_bolt", name: "Chaos Bolt" },

  oasis_gardens_reminiscence: {
    id: "oasis_gardens_reminiscence",
    name: "Oasis Garden's Reminiscence",
    day: ["tuesday", "friday"],
    rarity: 1,
  },
  oasis_gardens_kindness: {
    id: "oasis_gardens_kindness",
    name: "Oasis Garden's Kindness",
    day: ["tuesday", "friday"],
    rarity: 2,
    parent: "oasis_gardens_reminiscence",
  },
  oasis_gardens_mourning: {
    id: "oasis_gardens_mourning",
    name: "Oasis Garden's Mourning",
    day: ["tuesday", "friday"],
    rarity: 3,
    parent: "oasis_gardens_reminiscence",
  },
  oasis_gardens_truth: {
    id: "oasis_gardens_truth",
    name: "Oasis Garden's Truth",
    day: ["tuesday", "friday"],
    rarity: 4,
    parent: "oasis_gardens_reminiscence",
  },

  thunderclap_fruitcore: {
    id: "thunderclap_fruitcore",
    name: "Thunderclap Fruitcore",
    rarity: 5,
    parent: "vajrada_amethyst_sliver",
  },

  scarab: { id: "scarab", name: "Scarab" },
  henna_berry: { id: "henna_berry", name: "Henna Berry" },
  light_guiding_tetrahedron: {
    id: "light_guiding_tetrahedron",
    name: "Light Guiding Tetrahedron",
    rarity: 5,
    parent: "vajrada_amethyst_sliver",
  },

  damaged_prism: {
    id: "damaged_prism",
    name: "Damaged Prism",
  },
  turbid_prism: {
    id: "turbid_prism",
    name: "Turbid Prism",
  },
  radiant_prism: {
    id: "radiant_prism",
    name: "Radiant Prism",
  },

  perpetual_caliber: {
    id: "perpetual_caliber",
    name: "Perpetual Caliber",
    rarity: 4,
  },
  padisarah: {
    id: "padisarah",
    name: "Padisarah",
  },
  quelled_creeper: {
    id: "quelled_creeper",
    name: "Quelled Creeper",
    rarity: 5,
    parent: "nagadus_emerald_sliver",
  },
  puppet_strings: {
    id: "puppet_strings",
    name: "Puppet Strings",
  },
  mirror_of_mushin: {
    id: "mirror_of_mushin",
    name: "Mirror of Mushin",
  },
  dakas_bell: {
    id: "dakas_bell",
    name: "Daka's Bell",
  },
  pseudo_stamens: {
    id: 'pseudo_stamens',
    name: 'Pseudo-Stamens',
    rarity: 4,
  },
  sand_grease_pupa: {
    id: 'sand_grease_pupa',
    name: 'Sand Grease Pupa',
  },
  desiccated_shell: {
    id: 'desiccated_shell',
    name: 'Desiccated Shell',
    rarity: 2,
  },
  sturdy_shell: {
    id: 'sturdy_shell',
    name: 'Sturdy Shell',
    rarity: 3,
  },
  marked_shell: {
    id: 'marked_shell',
    name: 'Marked Shell',
    rarity: 4,
  },
  mourning_flower: {
    id: 'mourning_flower',
    name: 'Mourning Flower',
  },
  evergloom_ring: {
    id: 'evergloom_ring',
    name: 'Evergloom Ring',
    rarity: 4,
  },
  worldspan_fern: { id: 'worldspan_fern', name: 'Worldspan Fern' },
  primordial_greenbloom: { id: 'primordial_greenbloom', name: 'Primordial Greenbloom' },
  a_flower_yet_to_bloom: {
    id: 'a_flower_yet_to_bloom',
    name: 'A Flower Yet to Bloom',
    rarity: 2,
  },
  treasured_flower: {
    id: 'treasured_flower',
    name: 'Treasured Flower',
    rarity: 3,
  },
  wanderers_blooming_flower: {
    id: 'wanderers_blooming_flower',
    name: "Wanderer's Blooming Flower",
    rarity: 4,
  },

  everamber: { id: 'everamber', name: 'Everamber' },

  artificed_spare_clockwork_component_coppelius: {
    id: 'artificed_spare_clockwork_component_coppelius',
    name: 'Artificed Spare Clockwork Component — Coppelius',
    rarity: 4,
  },
  lumidouce_bell: {
    id: 'lumidouce_bell',
    name: 'Lumidouce Bell',
  },
  mechanical_spur_gear: {
    id: 'mechanical_spur_gear',
    name: 'Mechanical Spur Gear',
    rarity: 2,
  },
  artificed_dynamic_gear: {
    id: 'artificed_dynamic_gear',
    name: 'Artificed Dynamic Gear',
    rarity: 3,
  },
  meshing_gear: {
    id: 'meshing_gear',
    name: 'Meshing Gear',
    rarity: 1,
  },
  rainbow_rose: {
    id: 'rainbow_rose',
    name: 'Rainbow Rose',
  },
  emperors_resolution: {
    id: 'emperors_resolution',
    name: "Emperor's Resolution",
    rarity: 4,
  },

  teachings_of_order: {
    id: 'teachings_of_order',
    name: 'Teachings of Order',
    day: ['wednesday', 'saturday'],
    rarity: 2,
  },
  guide_to_order: {
    id: 'guide_to_order',
    name: 'Guide to Order',
    day: ['wednesday', 'saturday'],
    rarity: 3,
    parent: 'teachings_of_order',
  },
  philosophies_of_order: {
    id: 'philosophies_of_order',
    name: 'Philosophies of Order',
    day: ['wednesday', 'saturday'],
    rarity: 4,
    parent: 'teachings_of_order',
  },

  teachings_of_equity: {
    id: 'teachings_of_equity',
    name: 'Teachings of Equity',
    day: ['monday', 'thursday'],
    rarity: 2,
  },
  guide_to_equity: {
    id: 'guide_to_equity',
    name: 'Guide to Equity',
    day: ['monday', 'thursday'],
    rarity: 3,
    parent: 'teachings_of_equity',
  },
  philosophies_of_equity: {
    id: 'philosophies_of_equity',
    name: 'Philosophies of Equity',
    day: ['monday', 'thursday'],
    rarity: 4,
    parent: 'teachings_of_equity',
  },

  teachings_of_justice: {
    id: 'teachings_of_justice',
    name: 'Teachings of Justice',
    day: ['tuesday', 'friday'],
    rarity: 2,
  },
  guide_to_justice: {
    id: 'guide_to_justice',
    name: 'Guide to Justice',
    day: ['tuesday', 'friday'],
    rarity: 3,
    parent: 'teachings_of_justice',
  },
  philosophies_of_justice: {
    id: 'philosophies_of_justice',
    name: 'Philosophies of Justice',
    day: ['tuesday', 'friday'],
    rarity: 4,
    parent: 'teachings_of_justice',
  },

  fragment_of_an_ancient_chord: {
    id: 'fragment_of_an_ancient_chord',
    name: 'Fragment of an Ancient Chord',
    rarity: 2,
  },
  chapter_of_an_ancient_chord: {
    id: 'chapter_of_an_ancient_chord',
    name: 'Chapter of an Ancient Chord',
    rarity: 3,
  },
  movement_of_an_ancient_chord: {
    id: 'movement_of_an_ancient_chord',
    name: 'Movement of an Ancient Chord',
    rarity: 4,
  },
  echo_of_an_ancient_chord: {
    id: 'echo_of_an_ancient_chord',
    name: 'Echo of an Ancient Chord',
    rarity: 5,
  },
  transoceanic_pearl: {
    id: 'transoceanic_pearl',
    name: 'Transoceanic Pearl',
    rarity: 1,
  },
  transoceanic_chunk: {
    id: 'transoceanic_chunk',
    name: 'Transoceanic Chunk',
    rarity: 2,
  },
  xenochromatic_crystal: {
    id: 'xenochromatic_crystal',
    name: 'Xenochromatic Crystal',
    rarity: 3,
  },
  dross_of_pure_sacred_dewdrop: {
    id: 'dross_of_pure_sacred_dewdrop',
    name: 'Dross of Pure Sacred Dewdrop',
    rarity: 2,
  },
  drop_of_tainted_water: {
    id: 'drop_of_tainted_water',
    name: 'Drop of Tainted Water',
    rarity: 2,
  },
  sublimation_of_pure_sacred_dewdrop: {
    id: 'sublimation_of_pure_sacred_dewdrop',
    name: 'Sublimation of Pure Sacred Dewdrop',
    rarity: 3,
  },
  scoop_of_tainted_water: {
    id: 'scoop_of_tainted_water',
    name: 'Scoop of Tainted Water',
    rarity: 3,
  },
  spring_of_pure_sacred_dewdrop: {
    id: 'spring_of_pure_sacred_dewdrop',
    name: 'Spring of Pure Sacred Dewdrop',
    rarity: 4,
  },
  newborn_tainted_hydro_phantasm: {
    id: 'newborn_tainted_hydro_phantasm',
    name: 'Newborn Tainted Hydro Phantasm',
    rarity: 4,
  },

  broken_goblet_of_the_pristine_sea: {
    id: 'broken_goblet_of_the_pristine_sea',
    name: 'Broken Goblet of the Pristine Sea',
    rarity: 2,
  },
  wine_goblet_of_the_pristine_sea: {
    id: 'wine_goblet_of_the_pristine_sea',
    name: 'Wine Goblet of the Pristine Sea',
    rarity: 3,
  },
  silver_goblet_of_the_pristine_sea: {
    id: 'silver_goblet_of_the_pristine_sea',
    name: 'Silver Goblet of the Pristine Sea',
    rarity: 4,
  },
  golden_goblet_of_the_pristine_sea: {
    id: 'golden_goblet_of_the_pristine_sea',
    name: 'Golden Goblet of the Pristine Sea',
    rarity: 5,
  },

  dross_of_pure_sacred_dewdrop: {
    id: 'dross_of_pure_sacred_dewdrop',
    name: 'Dross of Pure Sacred Dewdrop',
    rarity: 2,
  },
  sublimation_of_pure_sacred_dewdrop: {
    id: 'sublimation_of_pure_sacred_dewdrop',
    name: 'Sublimation of Pure Sacred Dewdrop',
    rarity: 3,
  },
  spring_of_pure_sacred_dewdrop: {
    id: 'spring_of_pure_sacred_dewdrop',
    name: 'Spring of Pure Sacred Dewdrop',
    rarity: 4,
  },
  essence_of_pure_sacred_dewdrop: {
    id: 'essence_of_pure_sacred_dewdrop',
    name: 'Essence of Pure Sacred Dewdrop',
    rarity: 5,
  },

  rift_core: {
    id: 'rift_core',
    name: 'Rift Core',
    rarity: 2,
  },
  foreign_synapse: {
    id: 'foreign_synapse',
    name: 'Foreign Synapse',
    rarity: 3,
  },
  alien_life_core: {
    id: 'alien_life_core',
    name: 'Alien Life Core',
    rarity: 4,
  },

  romaritime_flower: {
    id: 'romaritime_flower',
    name: 'Romaritime Flower',
  },

  fontemer_unihorn: {
    id: 'fontemer_unihorn',
    name: 'Fontemer Unihorn',
    rarity: 4,
  },
  lumitoile: {
    id: 'lumitoile',
    name: 'Lumitoile',
  },

  old_operatives_pocket_watch: {
    id: 'old_operatives_pocket_watch',
    name: "Old Operative's Pocket Watch",
    rarity: 2,
  },
  operatives_standard_pocket_watch: {
    id: 'operatives_standard_pocket_watch',
    name: "Operative's Standard Pocket Watch",
    rarity: 3,
  },
  operatives_constancy: {
    id: 'operatives_constancy',
    name: "Operative's Constancy",
    rarity: 4,
  },

  subdetection_unit: {
    id: 'subdetection_unit',
    name: 'Subdetection Unit',
  },
  tourbillon_device: {
    id: 'tourbillon_device',
    name: '"Tourbillon Device"',
    rarity: 4,
  },
};

for (const i in items) {
  // console.log(items[i])
  if (items[i]['day']) {
    items[i]['day'].push("sunday");
  }
}

console.log('done!', items)