import { MOBILE_GAMES } from './mobileGames.js';
// Using CloudFlare CDN for Steam images - much more reliable than Akamai
const getSteamImage = (id) => `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/header.jpg`;

export const GAMES = [
    // Action
    // Action
    {
        id: "gta-v",
        title: "Grand Theft Auto V",
        category: "Action",
        rating: 4.9,
        image: getSteamImage(271590),
        trailerUrl: "https://www.youtube.com/watch?v=QkkoHAzjnUs",
        description: "Grand Theft Auto V offers an expansive, immersive open world that sets a new standard for the genre. Set in the fictional state of San Andreas, the single-player story follows three criminals and their efforts to commit heists while under pressure from a government agency and powerful crime figures. The attention to detail is staggering, from the bustling city streets of Los Santos to the serene wilderness of Blaine County.",
        pros: ["Massive, detailed open world", "Three distinct playable characters", "Incredible variety of missions", "Polished gameplay mechanics"],
        cons: ["Online mode can be grindy", "Loading times can be long"],
        cheatSheet: {
            title: "Ultimate Cheat Codes Pack",
            preview: [
                "[INVINCIBILITY]: Right, X, Right, Left, Right...",
                "[MAX HEALTH]: Circle, L1, Triangle, R2...",
                "[WEAPONS]: Triangle, R2, Left, L1, X...",
                "[SUPER JUMP]: Left, Left, Triangle, Triangle..."
            ],
            content: "Full list of verified cheat codes for PS5, Xbox, and PC."
        }
    },
    {
        id: "rdr2",
        title: "Red Dead Redemption 2",
        category: "Action",
        rating: 4.9,
        image: getSteamImage(1174180),
        trailerUrl: "https://www.youtube.com/watch?v=eaW0tYpxyp0",
        description: "Red Dead Redemption 2 is a sprawling tale of life in America at the dawn of the modern age. Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive.",
        pros: ["Breathtaking visual fidelity", "Deep, emotional storytelling", "Realistic world interaction", "Huge amount of content"],
        cons: ["Pacing can be slow for some", "Controls can feel heavy"],
        cheatSheet: {
            title: "Outlaw Survival Guide",
            preview: [
                "[0.00] INFINITE AMMO: Cheat Code...",
                "[0.00] SPAWN WAR HORSE: Cheat Code...",
                "[0.00] FOG OF WAR: Map Reveal...",
                "[0.00] HIGH HONOR: Stat Boost..."
            ],
            content: "Complete list of newspaper cheat codes and legendary animal locations."
        }
    },
    {
        id: "gow-2018",
        title: "God of War (2018)",
        category: "Action",
        rating: 4.9,
        image: getSteamImage(1593500),
        trailerUrl: "https://www.youtube.com/watch?v=K0u_kAWLJOA",
        description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same. This startling reimagining of God of War deconstructs the core elements that defined the series—satisfying combat; breathtaking scale; and a powerful narrative—and fuses them anew.",
        pros: ["Incredible one-shot camera direction", "Satisfying, visceral combat", "Touching father-son narrative", "Stunning art direction"],
        cons: ["Limited enemy variety in early game", "Fast travel opens up late"],
        cheatSheet: {
            title: "Valkyrie Location Map",
            preview: [
                "[HIGHLANDS]: Hidden Chamber Location...",
                "[RIVER PASS]: Odin's Raven Guide...",
                "[NIFLHEIM]: Mist Armor Stats...",
                "[MUSPELHEIM]: Trial Strategies..."
            ],
            content: "Interactive map of all Odin's Ravens and Valkyrie strategies."
        }
    },
    {
        id: "spiderman-ps4",
        title: "Spider-Man Remastered",
        category: "Action",
        rating: 4.8,
        image: getSteamImage(1817070),
        trailerUrl: "https://www.youtube.com/watch?v=bbFhcztiFK8",
        description: "In Marvel’s Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel’s New York. Web-swing through vibrant neighborhoods and defeat villains with epic takedowns.",
        pros: ["Exhilarating web-swinging traversal", "Faithful recreation of NYC", "Fluid combat system", "Great voice acting"],
        cons: ["Side activities can get repetitive", "Boss fights are scripted"],
        cheatSheet: {
            title: "Suit Unlock Guide",
            preview: [
                "[VINTAGE SUIT]: Level requirement...",
                "[DARK SUIT]: Black Cat Stakeouts...",
                "[HOMEMADE SUIT]: Backpack Token costs...",
                "[IRON SPIDER]: Story progression..."
            ],
            content: "Requirements for unlocking every suit and gadget upgrade."
        }
    },
    {
        id: "dmc5",
        title: "Devil May Cry 5",
        category: "Action",
        rating: 4.7,
        image: getSteamImage(601150),
        trailerUrl: "https://www.youtube.com/watch?v=K783SDTBKmg",
        description: "The ultimate Devil Hunter is back in style, in the game action fans have been waiting for. A brand new entry in the legendary action series, Devil May Cry 5 brings together its signature blend of high-octane stylized action and otherworldly original characters with the latest gaming technology to deliver a visually groundbreaking graphics masterpiece.",
        pros: ["Deep, stylish combat system", "Three unique playstyles", "Great soundtrack", "High replay value"],
        cons: ["Level design is linear", "Story is a bit nonsensical"]
    },
    {
        id: "sekiro",
        title: "Sekiro: Shadows Die Twice",
        category: "Action",
        rating: 4.9,
        image: getSteamImage(814380),
        trailerUrl: "https://www.youtube.com/watch?v=4OgoTZFt5x0",
        description: "Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. In Sekiro: Shadows Die Twice you are the 'one-armed wolf', a disgraced and disfigured warrior rescued from the brink of death.",
        pros: ["Incredible sword combat", "Rewarding difficulty", "Beautiful feudal Japan setting", "Fluid movement"],
        cons: ["Extremely difficult for beginners", "No multiplayer"]
    },
    {
        id: "bayonetta-3",
        title: "Bayonetta 3",
        category: "Action",
        rating: 4.6,
        image: "https://assets-prd.ignimgs.com/2022/10/28/bayonetta3-1666975233948.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=QGjY7vjJz-M",
        description: "Bayonetta struts through multiple locations in an all-new, over-the-top climax action game. Sporting a wicked new ensemble and somehow familiar pigtails, the titular Umbra Witch must face a mysterious evil using her signature guns and time-slowing Witch Time ability. This time, she's fighting man-made bioweapons called Homunculi.",
        pros: ["Spectacular, over-the-top action", "Creative Demon Slave mechanic", "Huge variety of weapons", "Smooth performance"],
        cons: ["Story is a bit convoluted", "Some environments look dated"]
    },
    {
        id: "ghostrunner",
        title: "Ghostrunner",
        category: "Action",
        rating: 4.5,
        image: getSteamImage(1139900),
        trailerUrl: "https://www.youtube.com/watch?v=_Y3k_8FkH4w",
        description: "Ghostrunner is a hardcore FPP slasher packed with lightning-fast action, set in a grim, cyberpunk megastructure. Climb Dharma Tower, humanity’s last shelter, after a world-ending cataclysm. Make your way up from the bottom to the top, confront the tyrannical Keymaster, and take your revenge.",
        pros: ["Fast-paced, adrenaline-pumping gameplay", "Great cyberpunk aesthetic", "Instant respawns keep momentum", "Satisfying one-hit kills"],
        cons: ["Can be frustratingly difficult", "Short campaign length"]
    },
    {
        id: "control",
        title: "Control",
        category: "Action",
        rating: 4.7,
        image: getSteamImage(870780),
        trailerUrl: "https://www.youtube.com/watch?v=F74QFZz2_P8",
        description: "After a secretive agency in New York is invaded by an otherworldly threat, you become the new Director struggling to regain Control. From developer Remedy Entertainment, this supernatural 3rd person action-adventure will challenge you to master the combination of supernatural abilities, modifiable loadouts and reactive environments while fighting through a deep and unpredictable world.",
        pros: ["Unique brutalist architecture setting", "Fun telekinetic powers", "Intriguing, mysterious story", "Great physics engine"],
        cons: ["Map can be confusing", "Performance dips on older hardware"]
    },
    {
        id: "mgr-revengeance",
        title: "Metal Gear Rising: Revengeance",
        category: "Action",
        rating: 4.8,
        image: getSteamImage(235460),
        trailerUrl: "https://www.youtube.com/watch?v=pX7s3YyF1kU",
        description: "Developed by PlatinumGames, Metal Gear Rising: Revengeance takes the renowned METAL GEAR franchise into exciting new territory with an all-new action experience. The game seamlessly melds pure action and epic story-telling that surrounds Raiden – a child soldier transformed into a half-human, half-cyborg ninja who uses his High Frequency katana blade to cut through anything that stands in his vengeful path.",
        pros: ["Blade Mode is incredibly satisfying", "High-energy soundtrack", "Memorable boss fights", "Fast, fluid combat"],
        cons: ["Camera can be finicky", "Campaign is relatively short"]
    },

    // Shooter
    {
        id: "cod-mw",
        title: "Call of Duty: Modern Warfare III",
        category: "Shooter",
        rating: 4.7,
        image: getSteamImage(2519060),
        trailerUrl: "https://www.youtube.com/watch?v=m5devHj18rU",
        description: "In the direct sequel to the record-breaking Call of Duty: Modern Warfare II, Captain Price and Task Force 141 face off against the ultimate threat. The ultranationalist war criminal Vladimir Makarov is extending his grasp across the world causing Task Force 141 to fight like never before.",
        pros: ["Smooth, responsive gunplay", "High-quality production values", "Addictive multiplayer modes", "Cross-platform play"],
        cons: ["Short single-player campaign", "Large install size"]
    },
    {
        id: "apex-legends",
        title: "Apex Legends",
        category: "Shooter",
        rating: 4.6,
        image: getSteamImage(1172470),
        trailerUrl: "https://www.youtube.com/watch?v=oQtHENM_GZU",
        description: "Conquer with character in Apex Legends, a free-to-play Hero shooter where legendary characters with powerful abilities team up to battle for fame and fortune on the fringes of the Frontier. Master an ever-growing roster of diverse legends, deep tactical squad play, and bold new innovations that go beyond the Battle Royale experience.",
        pros: ["Excellent movement mechanics", "Diverse roster of characters", "Ping system is industry standard", "Fair free-to-play model"],
        cons: ["Steep learning curve for new players", "Matchmaking can be unbalanced"]
    },
    {
        id: "fortnite",
        title: "Fortnite",
        category: "Shooter",
        rating: 4.5,
        image: "https://cdn1.epicgames.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb",
        trailerUrl: "https://www.youtube.com/watch?v=2gUtfBmw86Y",
        description: "Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more.",
        pros: ["Constant content updates", "Cross-platform progression", "Creative building mechanics", "Huge variety of game modes"],
        cons: ["Building mechanic is hard to master", "Microtransactions are everywhere"]
    },
    {
        id: "pubg",
        title: "PUBG: BATTLEGROUNDS",
        category: "Shooter",
        rating: 4.4,
        image: getSteamImage(578080),
        trailerUrl: "https://www.youtube.com/watch?v=4rG9noTfb4A",
        description: "PUBG: BATTLEGROUNDS is a battle royale shooter that pits 100 players against each other in a struggle for survival. Gather supplies and outwit your opponents to become the last person standing. Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various distinct Battlegrounds.",
        pros: ["Realistic gunplay and ballistics", "Tense, tactical gameplay", "Large, varied maps", "Regular updates and events"],
        cons: ["Can feel clunky compared to newer BRs", "Cheaters can be an issue"]
    },
    {
        id: "destiny-2",
        title: "Destiny 2",
        category: "Shooter",
        rating: 4.5,
        image: getSteamImage(1085660),
        trailerUrl: "https://www.youtube.com/watch?v=hdWkpbPTpmE",
        description: "Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive first-person shooter combat. Unlock powerful elemental abilities and collect unique gear to customize your Guardian's look and playstyle. Enjoy Destiny 2’s cinematic story, challenging co-op missions, and a variety of PvP modes alone or with friends.",
        pros: ["Fantastic gunplay feel", "Beautiful art direction", "Deep lore and world-building", "Great raids and dungeons"],
        cons: ["New player experience is confusing", "Content vaulting removes paid content"]
    },
    {
        id: "overwatch-2",
        title: "Overwatch 2",
        category: "Shooter",
        rating: 4.3,
        image: getSteamImage(2357570),
        trailerUrl: "https://www.youtube.com/watch?v=GKXS_YA9s7E",
        description: "Overwatch 2 is a free-to-play, team-based action game set in the optimistic future, where every match is the ultimate 5v5 battlefield brawl. Play as a time-jumping freedom fighter, a beat-dropping battlefield DJ, or one of over 30 other unique heroes as you battle it out around the globe.",
        pros: ["Diverse cast of heroes", "Strategic team-based gameplay", "Polished visuals and sound", "Regular seasonal updates"],
        cons: ["5v5 change was controversial", "Monetization feels aggressive"]
    },
    {
        id: "valorant",
        title: "Valorant",
        category: "Shooter",
        rating: 4.6,
        image: "https://images.contentstack.io/v3/assets/bltb653ed6b1f39f2fa/blt9bb219fcd7980336/60d7ca02636a0c7c34dd094b/VALORANT_Key_Art_5.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=e_E9W2vsRbQ",
        description: "Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.",
        pros: ["Precise, high-skill gunplay", "Tactical depth with abilities", "Clean visual clarity", "Strong anti-cheat system"],
        cons: ["Toxic community at times", "Visual style is simple for some"]
    },
    {
        id: "battlefield-v",
        title: "Battlefield V",
        category: "Shooter",
        rating: 4.2,
        image: getSteamImage(1238810),
        trailerUrl: "https://www.youtube.com/watch?v=fb1MR85XFOc",
        description: "Enter mankind’s greatest conflict with Battlefield V as the series goes back to its roots in a never-before-seen portrayal of World War 2. Take on physical, all-out multiplayer with your squad in modes like the vast Grand Operations and the cooperative Combined Arms, or witness human drama set against global combat in the single player War Stories.",
        pros: ["Immersive sound design", "Large scale battles", "Destructible environments", "Squad play is rewarding"],
        cons: ["Launch content was light", "Historical accuracy liberties"]
    },
    {
        id: "halo-infinite",
        title: "Halo Infinite",
        category: "Shooter",
        rating: 4.4,
        image: getSteamImage(1240440),
        trailerUrl: "https://www.youtube.com/watch?v=PyMlV5_HRWk",
        description: "When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced. Step inside the armor of humanity’s greatest hero to experience an epic adventure and explore the massive scale of the Halo ring.",
        pros: ["Classic Halo gunplay feel", "Open-world campaign approach", "Grappleshot is a game-changer", "Great soundtrack"],
        cons: ["Open world can feel empty", "Multiplayer progression issues"]
    },
    {
        id: "r6-siege",
        title: "Rainbow Six Siege",
        category: "Shooter",
        rating: 4.7,
        image: getSteamImage(359550),
        trailerUrl: "https://www.youtube.com/watch?v=6wlvYh0h63k",
        description: "Tom Clancy's Rainbow Six Siege is an elite, realistic, tactical team-based shooter where superior planning and execution triumph. It features 5v5 attack vs. defense gameplay and intense close-quarters combat in destructible environments.",
        pros: ["Deep tactical gameplay", "Destructible environments", "Huge roster of operators", "High skill ceiling"],
        cons: ["Very steep learning curve", "Community can be unwelcoming"]
    },

    // RPG
    // RPG
    {
        id: "witcher-3",
        title: "The Witcher 3: Wild Hunt",
        category: "RPG",
        rating: 4.9,
        image: getSteamImage(292030),
        trailerUrl: "https://www.youtube.com/watch?v=c0i88t0K2k0",
        description: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.",
        pros: ["Incredible story and side quests", "Massive, beautiful open world", "Deep character progression", "Meaningful choices"],
        cons: ["Combat can feel clunky", "Inventory management is tedious"]
    },
    {
        id: "elden-ring",
        title: "Elden Ring",
        category: "RPG",
        rating: 4.9,
        image: getSteamImage(1245620),
        trailerUrl: "https://www.youtube.com/watch?v=E3Huy2cdih0",
        description: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected.",
        pros: ["Unparalleled open-world design", "Deep combat customization", "Rewarding exploration", "Stunning art direction"],
        cons: ["Quest tracking is obscure", "Performance issues on some PCs"]
    },
    {
        id: "skyrim",
        title: "The Elder Scrolls V: Skyrim",
        category: "RPG",
        rating: 4.8,
        image: getSteamImage(489830),
        trailerUrl: "https://www.youtube.com/watch?v=JSRtYpNRoNo",
        description: "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more.",
        pros: ["Endless modding potential", "Freedom to play how you want", "Iconic music and atmosphere", "Huge amount of content"],
        cons: ["Dated combat mechanics", "Still has some bugs"]
    },
    {
        id: "cyberpunk-2077",
        title: "Cyberpunk 2077",
        category: "RPG",
        rating: 4.6,
        image: getSteamImage(1091500),
        trailerUrl: "https://www.youtube.com/watch?v=8X2kIfS6fb8",
        description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and updated with the free Update 2.0, experience the character of V like never before.",
        pros: ["Incredible city design", "Compelling narrative and characters", "Varied playstyles (hacking, stealth, combat)", "Stunning graphics"],
        cons: ["Police AI can still be wonky", "Driving physics are average"]
    },
    {
        id: "dai",
        title: "Dragon Age: Inquisition",
        category: "RPG",
        rating: 4.5,
        image: getSteamImage(1222690),
        trailerUrl: "https://www.youtube.com/watch?v=jJqxfkgSUog",
        description: "When the sky opens up and rains down chaos, the world needs heroes. Become the Inquisitor and lead a team of legendary warriors to save Thedas from the demons of the Fade. Your choices shape the future of the world.",
        pros: ["Great companion characters", "Strategic combat", "Huge zones to explore", "Deep lore"],
        cons: ["Fetch quests can feel grindy", "Main villain is a bit weak"]
    },
    {
        id: "mhw",
        title: "Monster Hunter: World",
        category: "RPG",
        rating: 4.8,
        image: getSteamImage(582010),
        trailerUrl: "https://www.youtube.com/watch?v=Ro6r15wzp2o",
        description: "Welcome to a new world! In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement.",
        pros: ["Addictive gameplay loop", "Living, breathing ecosystem", "14 distinct weapon types", "Great co-op experience"],
        cons: ["Steep learning curve", "UI can be overwhelming"]
    },
    {
        id: "p5r",
        title: "Persona 5 Royal",
        category: "RPG",
        rating: 4.9,
        image: getSteamImage(1687950),
        trailerUrl: "https://www.youtube.com/watch?v=M_p92e2m5ms",
        description: "Don the mask of Joker and join the Phantom Thieves of Hearts. Break free from the chains of modern society and stage grand heists to infiltrate the minds of the corrupt and make them change their ways! Persona 5 Royal is packed with new characters, confidants, story depth, new locations to explore, and a new grappling hook mechanic for stealthy access to new areas.",
        pros: ["Stylish UI and art", "Incredible soundtrack", "Deep social sim mechanics", "Turn-based combat is fast and fun"],
        cons: ["Very long (100+ hours)", "Tutorial is slow"]
    },
    {
        id: "bg3",
        title: "Baldur’s Gate 3",
        category: "RPG",
        rating: 4.9,
        image: getSteamImage(1086940),
        trailerUrl: "https://www.youtube.com/watch?v=OcP0WdH7rTs",
        description: "Baldur’s Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.",
        pros: ["Unprecedented player freedom", "Deep tactical combat", "Rich storytelling and characters", "High replayability"],
        cons: ["Inventory management is messy", "Act 3 performance issues"]
    },
    {
        id: "diablo-4",
        title: "Diablo IV",
        category: "RPG",
        rating: 4.5,
        image: getSteamImage(2344520),
        trailerUrl: "https://www.youtube.com/watch?v=XV4zVqb9rhI",
        description: "Diablo IV is the ultimate action RPG experience with endless evil to slaughter, countless abilities to master, nightmarish Dungeons, and legendary loot. Embark on the campaign solo or with friends, meeting memorable characters through beautifully dark settings and a gripping story.",
        pros: ["Addictive loot loop", "Dark, gritty atmosphere", "Smooth combat", "Cross-play support"],
        cons: ["Endgame can feel repetitive", "Always-online requirement"]
    },
    {
        id: "ds3",
        title: "Dark Souls III",
        category: "RPG",
        rating: 4.8,
        image: getSteamImage(374320),
        trailerUrl: "https://www.youtube.com/watch?v=_zDZYrIUgKE",
        description: "Dark Souls III continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. As fires fade and the world falls into ruin, journey into a universe filled with more colossal enemies and environments.",
        pros: ["Challenging, rewarding combat", "Intricate level design", "Epic boss battles", "Deep lore"],
        cons: ["Linear compared to DS1", "PvP can be laggy"]
    },

    // Sports
    {
        id: "fifa-24",
        title: "EA SPORTS FC 24",
        category: "Sports",
        rating: 4.3,
        image: getSteamImage(2195250),
        trailerUrl: "https://www.youtube.com/watch?v=XhP3Xh4LMA8",
        description: "EA SPORTS FC 24 welcomes you to The World’s Game: the most true-to-football experience ever with HyperMotionV, PlayStyles optimized by Opta, and a revolutionized Frostbite Engine.",
        pros: ["Huge number of licenses", "Realistic animations", "Ultimate Team is addictive", "Cross-play support"],
        cons: ["Microtransactions are heavy", "Career mode needs more love"]
    },
    {
        id: "nba-2k24",
        title: "NBA 2K24",
        category: "Sports",
        rating: 4.2,
        image: getSteamImage(2338770),
        trailerUrl: "https://www.youtube.com/watch?v=O0s58Q9QW8s",
        description: "Grab your squad and experience the past, present, and future of hoops culture in NBA 2K24. Enjoy loads of pure, unadulterated action and limitless personalized MyPLAYER options in MyCAREER. Collect an impressive array of legends and build your perfect lineup in MyTEAM.",
        pros: ["Deepest basketball sim", "Mamba Moments mode", "Great presentation", "Smooth gameplay"],
        cons: ["Aggressive monetization", "PC version is last-gen"]
    },
    {
        id: "madden-24",
        title: "Madden NFL 24",
        category: "Sports",
        rating: 4.1,
        image: getSteamImage(2140330),
        trailerUrl: "https://www.youtube.com/watch?v=1zXQW_Qk5Wc",
        description: "Experience the newest iteration of FieldSENSE in Madden NFL 24. More realistic character movement and smarter AI gives you control to play out your gameplay strategy with the confidence to dominate any opponent.",
        pros: ["Improved blocking AI", "Mini-games are back", "Franchise mode updates", "Cross-play added"],
        cons: ["Still has legacy bugs", "Commentary is stale"]
    },
    {
        id: "ufc-5",
        title: "UFC 5",
        category: "Sports",
        rating: 4.4,
        image: "https://media.contentapi.ea.com/content/dam/ea/ufc/ufc-5/images/2023/10/ufc5-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=aWeaP-a2kdk",
        description: "EA SPORTS UFC 5 is as real as it gets. Powered by Frostbite engine’s advanced rendering capabilities, your favorite fighters now have unparalleled character likenesses to complement next-level environment fidelity that’ll make their walk to the Octagon feel like a PPV main event.",
        pros: ["Realistic damage system", "Fluid grappling mechanics", "Great visuals", "Deep career mode"],
        cons: ["Submission system is complex", "Roster updates can be slow"]
    },
    {
        id: "rocket-league",
        title: "Rocket League",
        category: "Sports",
        rating: 4.7,
        image: getSteamImage(252950),
        trailerUrl: "https://www.youtube.com/watch?v=xvX_5ym_ajI",
        description: "Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition. Hit the field for a fully-featured offline season mode, multiple game types, casual and competitive online matches, and special 'Mutators' that let you entirely change the rules.",
        pros: ["Easy to learn, hard to master", "Short, intense matches", "Cross-platform play", "No pay-to-win"],
        cons: ["Toxic community", "Smurfing is a problem"]
    },
    {
        id: "wwe-2k23",
        title: "WWE 2K23",
        category: "Sports",
        rating: 4.5,
        image: getSteamImage(1942660),
        trailerUrl: "https://www.youtube.com/watch?v=QWbMckU3AOQ",
        description: "Expanded features, gorgeous graphics, and the ultimate WWE experience. Hit the ring with a deep roster of WWE Superstars and Legends including Roman Reigns, 'American Nightmare' Cody Rhodes, Ronda Rousey, Brock Lesnar, 'Stone Cold' Steve Austin and more!",
        pros: ["WarGames mode is fun", "GM Mode improvements", "Huge roster", "Showcase mode is great"],
        cons: ["MyFACTION is grindy", "Load times can be long"]
    },
    {
        id: "mlb-show-24",
        title: "MLB The Show 24",
        category: "Sports",
        rating: 4.6,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b0.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=qQa7YzN-h0U",
        description: "Swing for the fences, experience game-deciding moments, become a legend and live out your baseball dreams. Whatever you want to achieve, MLB The Show 24 has you covered. Earn your call up from the minors to the big leagues and prove you have what it takes at the top.",
        pros: ["Best baseball sim available", "Storylines mode is excellent", "Fair Diamond Dynasty mode", "Cross-platform play"],
        cons: ["Graphics engine showing age", "Commentary is repetitive"]
    },
    {
        id: "thps-1-2",
        title: "Tony Hawk's Pro Skater 1+2",
        category: "Sports",
        rating: 4.8,
        image: getSteamImage(2395210),
        trailerUrl: "https://www.youtube.com/watch?v=r7lFd8SLHHI",
        description: "Play the fully-remastered Tony Hawk’s Pro Skater & Tony Hawk’s Pro Skater 2 games in one epic collection, rebuilt from the ground up in incredible HD. All the pro skaters, levels and tricks are back and fully-remastered, plus more.",
        pros: ["Perfect nostalgia trip", "Tight controls", "Great soundtrack", "Create-a-Park is fun"],
        cons: ["Multiplayer is basic", "Some challenges are frustrating"]
    },
    {
        id: "forza-5",
        title: "Forza Horizon 5",
        category: "Sports",
        rating: 4.9,
        image: getSteamImage(1551360),
        trailerUrl: "https://www.youtube.com/watch?v=FYH9n37B7Yw",
        description: "Blast off to the visually stunning, ever-evolving open world of Mexico with limitless, fun driving action in the world’s greatest cars. Explore a world of striking contrast and beauty. Discover living deserts, lush jungles, historic cities, hidden ruins, pristine beaches, vast canyons and a towering snow-capped volcano.",
        pros: ["Stunning graphics", "Huge car list", "Fun arcade handling", "Diverse map"],
        cons: ["Progression feels too fast", "Online connection issues"]
    },
    {
        id: "gt7",
        title: "Gran Turismo 7",
        category: "Sports",
        rating: 4.7,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2618/phvVT0qZfcRms5qDAk0SI3CM.png",
        trailerUrl: "https://www.youtube.com/watch?v=1tBUsXIkG1A",
        description: "Gran Turismo 7 brings together the very best features of the Real Driving Simulator. Whether you’re a competitive or casual racer, collector, tuner, livery designer, or photographer – find your line with a staggering collection of game modes including fan-favorites like GT Campaign, Arcade, and Driving School.",
        pros: ["Incredible car detail", "Realistic driving physics", "Deep history lessons", "PSVR2 support is amazing"],
        cons: ["Economy is grindy", "Always-online requirement"]
    },

    // Adventure
    // Adventure
    {
        id: "botw",
        title: "The Legend of Zelda: Breath of the Wild",
        category: "Adventure",
        rating: 4.9,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
        trailerUrl: "https://www.youtube.com/watch?v=zw47_q9wbBE",
        description: "Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure.",
        pros: ["Revolutionary open-world physics", "Freedom to go anywhere", "Charming art style", "Creative puzzle shrines"],
        cons: ["Weapon durability is divisive", "Story is sparse"]
    },
    {
        id: "hzd",
        title: "Horizon Zero Dawn",
        category: "Adventure",
        rating: 4.7,
        image: getSteamImage(1151640),
        trailerUrl: "https://www.youtube.com/watch?v=Fkg5UVTsKCE",
        description: "Experience Aloy’s legendary quest to unravel the mysteries of a future Earth ruled by Machines. Use devastating tactical attacks against your prey and explore a majestic open world in this award-winning action RPG!",
        pros: ["Unique robot dinosaur enemies", "Beautiful open world", "Compelling sci-fi mystery", "Tactical combat"],
        cons: ["Facial animations are stiff", "Melee combat is basic"]
    },
    {
        id: "uncharted-4",
        title: "Uncharted: Legacy of Thieves",
        category: "Adventure",
        rating: 4.9,
        image: getSteamImage(1659420),
        trailerUrl: "https://www.youtube.com/watch?v=hh5HV4iic1Y",
        description: "Seek your fortune and leave your mark on the map in the UNCHARTED: Legacy of Thieves Collection. Uncover the thrilling cinematic storytelling and the largest blockbuster action set pieces in the UNCHARTED franchise, packed with all the wit, cunning, and over the top moments of the beloved thieves – Nathan Drake and Chloe Frazer.",
        pros: ["Cinematic storytelling at its best", "Stunning visuals", "Great character chemistry", "Pacing is perfect"],
        cons: ["Linear gameplay", "Puzzles are simple"]
    },
    {
        id: "tomb-raider",
        title: "Tomb Raider",
        category: "Adventure",
        rating: 4.6,
        image: getSteamImage(203160),
        trailerUrl: "https://www.youtube.com/watch?v=xCe8-1dbXZc",
        description: "Tomb Raider explores the intense and gritty origin story of Lara Croft and her ascent from a young woman to a hardened survivor. Armed only with raw instincts and the ability to push beyond the limits of human endurance, Lara must fight to unravel the dark history of a forgotten island to escape its relentless hold.",
        pros: ["Gritty, realistic reboot", "Metroidvania-style exploration", "Great bow combat", "Atmospheric setting"],
        cons: ["Too many QTEs", "Multiplayer was unnecessary"]
    },
    {
        id: "sea-of-thieves",
        title: "Sea of Thieves",
        category: "Adventure",
        rating: 4.5,
        image: getSteamImage(1172620),
        trailerUrl: "https://www.youtube.com/watch?v=1z48qab9AuE",
        description: "Sea of Thieves offers the essential pirate experience, from sailing and fighting to exploring and looting – everything you need to live the pirate life and become a legend in your own right. With no set roles, you have complete freedom to approach the world, and other players, however you choose.",
        pros: ["Ultimate pirate sandbox", "Beautiful water technology", "Great with friends", "Constant free updates"],
        cons: ["Solo play is difficult", "PvP can be frustrating"]
    },
    {
        id: "it-takes-two",
        title: "It Takes Two",
        category: "Adventure",
        rating: 4.9,
        image: getSteamImage(1426210),
        trailerUrl: "https://www.youtube.com/watch?v=GVWnLXlKCCE",
        description: "Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure created purely for co-op. Invite a friend to join for free with Friend’s Pass and work together across a huge variety of gleefully disruptive gameplay challenges.",
        pros: ["Incredible variety of mechanics", "Heartwarming story", "Perfect co-op design", "Visuals are charming"],
        cons: ["Requires a second player", "Some dialogue is cringy"]
    },
    {
        id: "plague-tale",
        title: "A Plague Tale: Requiem",
        category: "Adventure",
        rating: 4.7,
        image: getSteamImage(1182900),
        trailerUrl: "https://www.youtube.com/watch?v=CxHy-N7YvVQ",
        description: "Far across the sea, an island calls… Embark on a heartrending journey into a brutal, breathtaking world twisted by supernatural forces. After escaping their devastated homeland, Amicia and Hugo travel far south, to new regions and vibrant cities.",
        pros: ["Emotional narrative", "Stunning graphics", "Improved stealth mechanics", "Great voice acting"],
        cons: ["Pacing can be slow", "Combat is limited"]
    },
    {
        id: "stray",
        title: "Stray",
        category: "Adventure",
        rating: 4.6,
        image: getSteamImage(1332010),
        trailerUrl: "https://www.youtube.com/watch?v=4uP2MyUL49s",
        description: "Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten city. Stray is a third-person cat adventure game set amidst the detailed, neon-lit alleys of a decaying cybercity and the murky environments of its seedy underbelly.",
        pros: ["You play as a cat!", "Beautiful cyberpunk world", "Charming atmosphere", "Short and sweet"],
        cons: ["Gameplay is simple", "Very short (4-5 hours)"]
    },
    {
        id: "little-nightmares-2",
        title: "Little Nightmares II",
        category: "Adventure",
        rating: 4.7,
        image: getSteamImage(860510),
        trailerUrl: "https://www.youtube.com/watch?v=MlzzBoKTHro",
        description: "Return to a world of charming horror in Little Nightmares II, a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by the humming transmission of a distant tower.",
        pros: ["Creepy, atmospheric design", "Clever puzzles", "Great sound design", "Memorable monsters"],
        cons: ["Trial and error gameplay", "Controls can be finicky"]
    },
    {
        id: "ori-wisps",
        title: "Ori and the Will of the Wisps",
        category: "Adventure",
        rating: 4.9,
        image: getSteamImage(1057090),
        trailerUrl: "https://www.youtube.com/watch?v=2kPSl2vyu2Y",
        description: "The little spirit Ori is no stranger to peril, but when a fateful flight puts the owlet Ku in harm’s way, it will take more than bravery to bring a family back together, heal a broken land, and discover Ori’s true destiny. From the creators of the acclaimed action-platformer Ori and the Blind Forest comes the highly anticipated sequel.",
        pros: ["Breathtaking art style", "Fluid, satisfying movement", "Emotional story", "Great combat improvements"],
        cons: ["Performance drops on Switch", "Difficulty spikes"]
    },

    // Puzzle
    {
        id: "portal-2",
        title: "Portal 2",
        category: "Puzzle",
        rating: 4.9,
        image: getSteamImage(620),
        trailerUrl: "https://www.youtube.com/watch?v=tax4e4hBBZc",
        description: "The 'Perpetual Testing Initiative' has been expanded to allow you to design co-op puzzles for you and your friends! Portal 2 draws from the award-winning formula of innovative gameplay, story, and music that earned the original Portal over 70 industry accolades and created a cult following.",
        pros: ["Hilarious writing", "Genius puzzle design", "Great co-op campaign", "Timeless classic"],
        cons: ["Loading screens are frequent", "You'll wish it was longer"]
    },
    {
        id: "witness",
        title: "The Witness",
        category: "Puzzle",
        rating: 4.7,
        image: getSteamImage(210970),
        trailerUrl: "https://www.youtube.com/watch?v=9ytwNUMdbvs",
        description: "You wake up, alone, on a strange island full of puzzles that will challenge and surprise you. You don't remember who you are, and you don't remember how you got here, but there's one thing you can do: explore the island in hope of discovering clues, regaining your memory, and somehow finding your way home.",
        pros: ["Beautiful open world", "Challenging, intelligent puzzles", "No hand-holding", "Philosophical depth"],
        cons: ["Can be extremely frustrating", "Some puzzles require audio"]
    },
    {
        id: "inside",
        title: "Inside",
        category: "Puzzle",
        rating: 4.8,
        image: getSteamImage(304430),
        trailerUrl: "https://www.youtube.com/watch?v=yDm6PAgNohU",
        description: "Hunted and alone, a boy finds himself drawn into the center of a dark project. INSIDE is a dark, narrative-driven platformer combining intense action with challenging puzzles. It has been critically acclaimed for its moody art style, ambient soundtrack and unsettling atmosphere.",
        pros: ["Masterclass in atmosphere", "Clever environmental storytelling", "Smooth animations", "Shocking ending"],
        cons: ["Very short (3 hours)", "Linear replayability"]
    },
    {
        id: "limbo",
        title: "Limbo",
        category: "Puzzle",
        rating: 4.7,
        image: getSteamImage(48000),
        trailerUrl: "https://www.youtube.com/watch?v=Y4HSyVXKYz8",
        description: "Uncertain of his sister's fate, a boy enters LIMBO. This black and white puzzle-platformer is known for its minimal visual style, eerie sound design, and trial-and-death gameplay mechanics.",
        pros: ["Iconic art style", "Haunting atmosphere", "Clever physics puzzles", "Sound design is top notch"],
        cons: ["Trial and error deaths", "Short duration"]
    },
    {
        id: "tetris-effect",
        title: "Tetris Effect: Connected",
        category: "Puzzle",
        rating: 4.8,
        image: getSteamImage(1003590),
        trailerUrl: "https://www.youtube.com/watch?v=Mr8fVT_Ds4Q",
        description: "Tetris Effect: Connected is Tetris like you've never seen it, or heard it, or felt it before—an incredibly addictive, unique, and breathtakingly gorgeous reinvention of one of the most popular puzzle games of all time.",
        pros: ["Mesmerizing visuals and music", "Zone mechanic is fun", "Great multiplayer modes", "VR support is transcendent"],
        cons: ["It's still just Tetris", "Online can be laggy"]
    },
    {
        id: "baba-is-you",
        title: "Baba Is You",
        category: "Puzzle",
        rating: 4.8,
        image: getSteamImage(736260),
        trailerUrl: "https://www.youtube.com/watch?v=U7MJljsoUSo",
        description: "Baba Is You is a puzzle game where the rules you have to follow are present as blocks you can interact with. By manipulating them, you can change how the level works, repurpose things you find in the levels and cause surprising interactions!",
        pros: ["Incredibly innovative mechanic", "Hundreds of levels", "Rewarding 'aha!' moments", "Cute art style"],
        cons: ["Brain-meltingly difficult", "Later levels are complex"]
    },
    {
        id: "human-fall-flat",
        title: "Human Fall Flat",
        category: "Puzzle",
        rating: 4.5,
        image: getSteamImage(477160),
        trailerUrl: "https://www.youtube.com/watch?v=zKDlwWTT8_E",
        description: "Human: Fall Flat is a hilarious, light-hearted physics platformer set in floating dreamscapes that can be played solo or with up to 8 players online. Free new levels keep its vibrant community rewarded.",
        pros: ["Hilarious physics", "Great fun with friends", "Creative level solutions", "Workshop support"],
        cons: ["Controls are intentionally clumsy", "Solo play is lonely"]
    },
    {
        id: "monument-valley",
        title: "Monument Valley",
        category: "Puzzle",
        rating: 4.8,
        image: getSteamImage(2643600),
        trailerUrl: "https://www.youtube.com/watch?v=wC1jHHF_Wjo",
        description: "Monument Valley is a surreal exploration through fantastical architecture and impossible geometry. Guide the silent princess Ida through mysterious monuments, uncovering hidden paths, unfolding optical illusions and outsmarting the enigmatic Crow People.",
        pros: ["Beautiful Escher-like art", "Relaxing atmosphere", "Clever perspective puzzles", "Touching story"],
        cons: ["Very short", "Puzzles are easy"]
    },
    {
        id: "braid",
        title: "Braid",
        category: "Puzzle",
        rating: 4.7,
        image: getSteamImage(26800),
        trailerUrl: "https://www.youtube.com/watch?v=uqtSKkyJgFM",
        description: "Braid is a puzzle-platformer, drawn in a painterly style, where you can manipulate the flow of time in strange and unusual ways. From a house in the city, journey to a series of worlds and solve puzzles to rescue an abducted princess.",
        pros: ["Time manipulation mechanics", "Beautiful hand-painted art", "Deeply hidden lore", "Challenging puzzles"],
        cons: ["Pretentious story", "Some puzzles are obscure"]
    },
    {
        id: "talos-principle",
        title: "The Talos Principle",
        category: "Puzzle",
        rating: 4.8,
        image: getSteamImage(257510),
        trailerUrl: "https://www.youtube.com/watch?v=N6IHhRa27WY",
        description: "The Talos Principle is a philosophical first-person puzzle game from Croteam, the creators of the Serious Sam series, written by Tom Jubert (FTL, The Swapper) and Jonas Kyratzes (The Sea Will Claim Everything).",
        pros: ["Intellectually stimulating", "Great variety of tools", "Beautiful environments", "Thought-provoking story"],
        cons: ["Pacing can be slow", "Reading terminals is heavy"]
    },

    // Sandbox
    // Sandbox
    {
        id: "minecraft",
        title: "Minecraft",
        category: "Sandbox",
        rating: 4.9,
        image: getSteamImage(1794680),
        trailerUrl: "https://www.youtube.com/watch?v=MmB9b5njVbA",
        description: "Explore infinite worlds and build everything from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off dangerous mobs.",
        pros: ["Infinite creativity", "Huge modding scene", "Great for all ages", "Relaxing soundtrack"],
        cons: ["Graphics are basic (without shaders)", "Combat is simple"]
    },
    {
        id: "terraria",
        title: "Terraria",
        category: "Sandbox",
        rating: 4.8,
        image: getSteamImage(105600),
        trailerUrl: "https://www.youtube.com/watch?v=H77fAeRqGxg",
        description: "Dig, Fight, Explore, Build: The very world is at your fingertips as you fight for survival, fortune, and glory. Will you delve deep into cavernous expanses in search of treasure and raw materials with which to craft ever-evolving gear, machinery, and aesthetics?",
        pros: ["Incredible depth of content", "Satisfying progression", "Thousands of items", "Great boss fights"],
        cons: ["UI is cluttered", "Guide is essential for new players"]
    },
    {
        id: "roblox",
        title: "Roblox",
        category: "Sandbox",
        rating: 4.5,
        image: "https://www.roblox.com/asset-thumbnail/image?assetId=1818&width=768&height=432&format=png",
        trailerUrl: "https://www.youtube.com/watch?v=kHqYBPJPXYQ",
        description: "Roblox is the ultimate virtual universe that lets you create, share experiences with friends, and be anything you can imagine. Join millions of people and discover an infinite variety of immersive experiences created by a global community.",
        pros: ["Endless variety of games", "Free to play", "Great social features", "Learn to code with Lua"],
        cons: ["Graphics are dated", "Community can be toxic"]
    },
    {
        id: "ark",
        title: "ARK: Survival Evolved",
        category: "Sandbox",
        rating: 4.4,
        image: getSteamImage(346110),
        trailerUrl: "https://www.youtube.com/watch?v=FW9vsrPWujI",
        description: "Stranded on the shores of a mysterious island, you must learn to survive. Use your cunning to kill or tame the primeval creatures roaming the land, and encounter other players to survive, dominate... and escape!",
        pros: ["Taming dinosaurs is awesome", "Huge maps", "Deep crafting system", "Tribe warfare is intense"],
        cons: ["Optimization is poor", "Grindy official servers"]
    },
    {
        id: "subnautica",
        title: "Subnautica",
        category: "Sandbox",
        rating: 4.8,
        image: getSteamImage(264710),
        trailerUrl: "https://www.youtube.com/watch?v=Rz2SNm8VguE",
        description: "Descend into the depths of an alien underwater world filled with wonder and peril. Craft equipment, pilot submarines and out-smart wildlife to explore lush coral reefs, volcanoes, cave systems, and more - all while trying to survive.",
        pros: ["Beautiful underwater world", "Genuinely scary at times", "Satisfying base building", "Intriguing story"],
        cons: ["Pop-in issues", "No multiplayer"]
    },
    {
        id: "nms",
        title: "No Man's Sky",
        category: "Sandbox",
        rating: 4.6,
        image: getSteamImage(275850),
        trailerUrl: "https://www.youtube.com/watch?v=nLtmEjqzg7M",
        description: "Inspired by the adventure and imagination that we love from classic science-fiction, No Man's Sky presents you with a galaxy to explore, filled with unique planets and lifeforms, and constant danger and action.",
        pros: ["Infinite universe to explore", "Seamless space travel", "Constant free updates", "VR support is great"],
        cons: ["Planets can feel repetitive", "Combat is weak"]
    },
    {
        id: "forest",
        title: "The Forest",
        category: "Sandbox",
        rating: 4.6,
        image: getSteamImage(242760),
        trailerUrl: "https://www.youtube.com/watch?v=6FdgNLbnsAg",
        description: "As the lone survivor of a passenger jet crash, you find yourself in a mysterious forest battling to stay alive against a society of cannibalistic mutants. Build, explore, survive in this terrifying first person survival horror simulator.",
        pros: ["Terrifying AI behavior", "Great building system", "Immersive atmosphere", "Fun co-op"],
        cons: ["Story is obscure", "Building can be glitchy"]
    },
    {
        id: "starfield",
        title: "Starfield",
        category: "Sandbox",
        rating: 4.3,
        image: getSteamImage(1716740),
        trailerUrl: "https://www.youtube.com/watch?v=zmb2FJGvnAw",
        description: "In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity’s greatest mystery.",
        pros: ["Ship building is fantastic", "Huge amount of content", "Classic Bethesda RPG feel", "Beautiful cities"],
        cons: ["Loading screens everywhere", "Space exploration is limited"]
    },
    {
        id: "conan",
        title: "Conan Exiles",
        category: "Sandbox",
        rating: 4.3,
        image: getSteamImage(440900),
        trailerUrl: "https://www.youtube.com/watch?v=L79sxLcitHo",
        description: "An online multiplayer survival game, now with mounts and mounted combat, set in the lands of Conan the Barbarian. Survive in a vast open world sandbox, build a home and kingdom, dominate your enemies in single or multiplayer.",
        pros: ["Brutal combat", "Thrall system is unique", "Great building mechanics", "Rich lore"],
        cons: ["Buggy at times", "Combat can be clunky"]
    },
    {
        id: "rust",
        title: "Rust",
        category: "Sandbox",
        rating: 4.5,
        image: getSteamImage(252490),
        trailerUrl: "https://www.youtube.com/watch?v=LGcECozNXEw",
        description: "The only aim in Rust is to survive. To do this you will need to overcome struggles such as hunger, thirst and cold. Build a fire. Build a shelter. Kill animals for meat. Protect yourself from other players, and kill them for meat. Create alliances with other players and form a town.",
        pros: ["Intense PvP", "Deep base building", "Regular updates", "High stakes gameplay"],
        cons: ["Extremely toxic community", "Requires huge time investment"]
    },

    // Multiplayer
    {
        id: "among-us",
        title: "Among Us",
        category: "Multiplayer",
        rating: 4.6,
        image: getSteamImage(945360),
        trailerUrl: "https://www.youtube.com/watch?v=BRmIeahj0DI",
        description: "An online and local party game of teamwork and betrayal for 4-15 players... in space! Play online or over local WiFi as you attempt to prepare your spaceship for departure, but beware as one or more random players among the Crew are Impostors bent on killing everyone!",
        pros: ["Incredibly fun social deduction", "Simple to learn", "Great with friends", "Cross-platform"],
        cons: ["Public lobbies are chaotic", "Repetitive after a while"]
    },
    {
        id: "fall-guys",
        title: "Fall Guys",
        category: "Multiplayer",
        rating: 4.5,
        image: getSteamImage(1097150),
        trailerUrl: "https://www.youtube.com/watch?v=FcITAzKW3fY",
        description: "Fall Guys is a free, cross-platform, massively multiplayer, party royale game where you and your fellow contestants compete through escalating rounds of absurd obstacle course chaos until one lucky victor remains!",
        pros: ["Colorful and chaotic fun", "Creative levels", "Short matches", "Family friendly"],
        cons: ["Physics can be frustrating", "Microtransactions"]
    },
    {
        id: "lol",
        title: "League of Legends",
        category: "Multiplayer",
        rating: 4.6,
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=BGtROJeMPeE",
        description: "League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.",
        pros: ["Deep strategic gameplay", "Huge roster of champions", "Highly competitive", "Esports scene is massive"],
        cons: ["Steep learning curve", "Community is notoriously toxic"]
    },
    {
        id: "dota-2",
        title: "Dota 2",
        category: "Multiplayer",
        rating: 4.6,
        image: getSteamImage(570),
        trailerUrl: "https://www.youtube.com/watch?v=-cSFPIwMEq4",
        description: "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.",
        pros: ["Incredible depth", "All heroes are free", "Complex mechanics", "Rewarding to master"],
        cons: ["Extremely difficult to learn", "Matches can be very long"]
    },
    {
        id: "warframe",
        title: "Warframe",
        category: "Multiplayer",
        rating: 4.7,
        image: getSteamImage(230410),
        trailerUrl: "https://www.youtube.com/watch?v=0KZZeNGxRxg",
        description: "Awaken as an unstoppable warrior and battle alongside your friends in this story-driven free-to-play online action game. Follow the guidance of the mysterious Lotus and level up your Warframe, build an Arsenal of destructive firepower, and realize your true potential across massive open worlds.",
        pros: ["Fast, fluid movement", "Fair free-to-play model", "Huge amount of content", "Great customization"],
        cons: ["New player experience is overwhelming", "Crafting times are long"]
    },
    {
        id: "paladins",
        title: "Paladins",
        category: "Multiplayer",
        rating: 4.3,
        image: getSteamImage(444090),
        trailerUrl: "https://www.youtube.com/watch?v=zITSlvGhAG4",
        description: "Join 25+ million players in Paladins, the free-to-play fantasy team-based shooter wielding guns and magic. Customize your core set of abilities to play exactly how you want to play.",
        pros: ["Deep card loadout system", "Fun hero designs", "More casual than Overwatch", "Free to play"],
        cons: ["Graphics are dated", "Matchmaking issues"]
    },
    {
        id: "wow",
        title: "World of Warcraft",
        category: "Multiplayer",
        rating: 4.7,
        image: "https://bnetcmsus-a.akamaihd.net/cms/template_resource/LSQHV9DQXFZP1635369296824.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=jSJr3dXZfcg",
        description: "World of Warcraft is an online role-playing experience set in the award-winning Warcraft universe. Players assume the roles of Warcraft heroes as they explore, adventure, and quest across a vast world.",
        pros: ["The definitive MMORPG", "Decades of content", "Great raids and dungeons", "Addictive progression"],
        cons: ["Subscription fee", "Graphics engine is old"]
    },
    {
        id: "dbd",
        title: "Dead by Daylight",
        category: "Multiplayer",
        rating: 4.5,
        image: getSteamImage(381210),
        trailerUrl: "https://www.youtube.com/watch?v=3FeI1Y7L7z8",
        description: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught, tortured and killed.",
        pros: ["Unique asymmetrical gameplay", "Iconic horror licenses", "Tense atmosphere", "Perk system adds depth"],
        cons: ["Balancing is always an issue", "Grindy progression"]
    },
    {
        id: "payday-2",
        title: "Payday 2",
        category: "Multiplayer",
        rating: 4.6,
        image: getSteamImage(218620),
        trailerUrl: "https://www.youtube.com/watch?v=VJvZejLPRHk",
        description: "PAYDAY 2 is an action-packed, four-player co-op shooter that once again lets gamers don the masks of the original PAYDAY crew - Dallas, Hoxton, Wolf and Chains - as they descend on Washington DC for an epic crime spree.",
        pros: ["Great co-op heist gameplay", "Huge variety of weapons", "Great soundtrack", "Endless replayability"],
        cons: ["Engine is dated", "DLC overload"]
    },
    {
        id: "drg",
        title: "Deep Rock Galactic",
        category: "Multiplayer",
        rating: 4.9,
        image: getSteamImage(548430),
        trailerUrl: "https://www.youtube.com/watch?v=OVZp0lUBuFI",
        description: "Deep Rock Galactic is a 1-4 player co-op FPS featuring badass space Dwarves, 100% destructible environments, procedurally-generated caves, and endless hordes of alien monsters.",
        pros: ["Best co-op community", "Procedural generation keeps it fresh", "Class synergy is perfect", "Rock and Stone!"],
        cons: ["Can be repetitive", "Solo play is less fun"]
    },

    // Horror
    {
        id: "re7",
        title: "Resident Evil 7",
        category: "Horror",
        rating: 4.8,
        image: getSteamImage(418370),
        trailerUrl: "https://www.youtube.com/watch?v=bFQIu_i0rQ4",
        description: "Resident Evil 7 biohazard sets a new course for the Resident Evil series as it leverages its roots and opens the door to a truly terrifying horror experience. Set within a sinister plantation mansion in modern day rural America and taking place after the dramatic events of Resident Evil 6, players experience the terror directly from the first person perspective.",
        pros: ["Return to survival horror roots", "Terrifying atmosphere", "Great VR mode", "Memorable villains"],
        cons: ["Last third is weaker", "Enemy variety is low"]
    },
    {
        id: "re-village",
        title: "Resident Evil Village",
        category: "Horror",
        rating: 4.8,
        image: getSteamImage(1196590),
        trailerUrl: "https://www.youtube.com/watch?v=tjZFlyMSPjQ",
        description: "Experience survival horror like never before in the eighth major installment in the storied Resident Evil franchise - Resident Evil Village. Set a few years after the horrifying events in the critically acclaimed Resident Evil 7 biohazard, the all-new storyline begins with Ethan Winters and his wife Mia living peacefully in a new location.",
        pros: ["Gothic horror setting", "Lady Dimitrescu", "Action-packed gameplay", "Great visuals"],
        cons: ["Less scary than RE7", "Story is bonkers"]
    },
    {
        id: "outlast-2",
        title: "Outlast 2",
        category: "Horror",
        rating: 4.6,
        image: getSteamImage(414700),
        trailerUrl: "https://www.youtube.com/watch?v=u_uHRoIwp0c",
        description: "Outlast 2 introduces you to Sullivan Knoth and his followers, who left our wicked world behind to give birth to Temple Gate, a town, deep in the wilderness and hidden from civilization. You are Blake Langermann, a cameraman working with your wife, Lynn.",
        pros: ["Disturbing atmosphere", "Great sound design", "Controversial story", "Intense chase sequences"],
        cons: ["Trial and error gameplay", "Confusing level design"]
    },
    {
        id: "alien-isolation",
        title: "Alien: Isolation",
        category: "Horror",
        rating: 4.8,
        image: getSteamImage(214490),
        trailerUrl: "https://www.youtube.com/watch?v=AJ1R1b7EK_k",
        description: "Discover the true meaning of fear in Alien: Isolation, a survival horror set in an atmosphere of constant dread and mortal danger. Fifteen years after the events of Alien™, Ellen Ripley’s daughter, Amanda enters a desperate battle for survival, on a mission to unravel the truth behind her mother's disappearance.",
        pros: ["Perfect Alien atmosphere", "Smartest AI in horror", "Faithful to the movie", "Tense gameplay"],
        cons: ["Campaign is too long", "Can be frustrating"]
    },
    {
        id: "amnesia",
        title: "Amnesia: The Dark Descent",
        category: "Horror",
        rating: 4.7,
        image: getSteamImage(57300),
        trailerUrl: "https://www.youtube.com/watch?v=loSyCvGzF1g",
        description: "Amnesia: The Dark Descent, a first person survival horror. A game about immersion, discovery and living through a nightmare. An experience that will chill you to the core.",
        pros: ["Sanity mechanic", "Masterclass in tension", "Great puzzles", "Custom story support"],
        cons: ["Dated graphics", "Physics can be wonky"]
    },
    {
        id: "evil-within-2",
        title: "The Evil Within 2",
        category: "Horror",
        rating: 4.6,
        image: getSteamImage(601430),
        trailerUrl: "https://www.youtube.com/watch?v=0asCPzdZuP8",
        description: "Detective Sebastian Castellanos has lost it all... but when given a chance to save his daughter, he must descend once more into the nightmarish world of STEM. Horrifying threats emerge from every corner as the world twists and warps around him.",
        pros: ["Semi-open world design", "Improved story over original", "Creative monster design", "Good upgrade system"],
        cons: ["Voice acting is hit or miss", "Less scary than the first"]
    },
    {
        id: "phasmophobia",
        title: "Phasmophobia",
        category: "Horror",
        rating: 4.7,
        image: getSteamImage(739630),
        trailerUrl: "https://www.youtube.com/watch?v=DPEukN5oKl4",
        description: "Phasmophobia is a 4 player online co-op psychological horror. Paranormal activity is on the rise and it’s up to you and your team to use all the ghost hunting equipment at your disposal in order to gather as much evidence as you can.",
        pros: ["Voice recognition is scary", "Great co-op fun", "Procedural ghosts", "Immersive atmosphere"],
        cons: ["Janky animations", "Early access bugs"]
    },
    {
        id: "fnaf",
        title: "Five Nights at Freddy's",
        category: "Horror",
        rating: 4.5,
        image: getSteamImage(319510),
        trailerUrl: "https://www.youtube.com/watch?v=iOzDnX1i-vo",
        description: "Welcome to your new summer job at Freddy Fazbear's Pizza, where kids and parents alike come for entertainment and food as far as the eye can see! The main attraction is Freddy Fazbear, of course; and his two friends. They are animatronic robots, programmed to please the crowds!",
        pros: ["Simple but effective premise", "Deep hidden lore", "Jump scares work", "Short and sweet"],
        cons: ["Repetitive gameplay", "Dated visuals"]
    },
    {
        id: "silent-hill-2",
        title: "Silent Hill 2",
        category: "Horror",
        rating: 4.9,
        image: getSteamImage(2124490),
        trailerUrl: "https://www.youtube.com/watch?v=mVOIugMJcH8",
        description: "Having received a letter from his deceased wife, James heads to where they shared so many memories, in the hope of seeing her one more time: Silent Hill. There, by the lake, he finds a woman eerily similar to her...",
        pros: ["Psychological horror masterpiece", "Incredible story", "Haunting soundtrack", "Atmospheric fog"],
        cons: ["Tank controls (original)", "Combat is clunky"]
    },
    {
        id: "quarry",
        title: "The Quarry",
        category: "Horror",
        rating: 4.5,
        image: getSteamImage(1577120),
        trailerUrl: "https://www.youtube.com/watch?v=Ld90b0hNIvI",
        description: "As the sun sets on the last day of summer camp, the teenage counselors of Hackett’s Quarry throw a party to celebrate. No kids. No adults. No rules. But things quickly take a turn for the worse.",
        pros: ["Interactive movie feel", "Great cast of actors", "Branching storyline", "Fun couch co-op"],
        cons: ["Pacing issues", "Some endings are abrupt"]
    },

    // Strategy
    {
        id: "aoe4",
        title: "Age of Empires IV",
        category: "Strategy",
        rating: 4.6,
        image: getSteamImage(1466860),
        trailerUrl: "https://www.youtube.com/watch?v=cTjB5d0oU7c",
        description: "One of the most beloved real-time strategy games returns to glory with Age of Empires IV, putting you at the center of epic historical battles that shaped the world. Featuring both familiar and innovative new ways to expand your empire in vast landscapes with stunning 4K visual fidelity.",
        pros: ["Documentary-style campaign", "Classic RTS gameplay", "Distinct civilizations", "Great sound design"],
        cons: ["Graphics are divisive", "Zoom level is too close"]
    },
    {
        id: "civ6",
        title: "Civilization VI",
        category: "Strategy",
        rating: 4.7,
        image: getSteamImage(289070),
        trailerUrl: "https://www.youtube.com/watch?v=5KdE0p2joJw",
        description: "Civilization VI offers new ways to interact with your world, expand your empire across the map, advance your culture, and compete against history’s greatest leaders to build a civilization that will stand the test of time.",
        pros: ["District system is great", "Deep strategic depth", "One more turn factor", "Great soundtrack"],
        cons: ["AI can be dumb", "Late game lag"]
    },
    {
        id: "starcraft-2",
        title: "StarCraft II",
        category: "Strategy",
        rating: 4.8,
        image: "https://bnetcmsus-a.akamaihd.net/cms/page_media/NO44N7DWHAAR1542831253019.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=MVbeoSPqRs4",
        description: "StarCraft II is a real-time strategy game from Blizzard Entertainment. It features three diverse and powerful races: the Terrans, Protoss, and Zerg. Players command these armies in a fight for survival and dominance across the galaxy.",
        pros: ["The pinnacle of RTS", "Three distinct campaigns", "Highly competitive", "Co-op commanders mode"],
        cons: ["High APM requirement", "Story gets cheesy"]
    },
    {
        id: "xcom-2",
        title: "XCOM 2",
        category: "Strategy",
        rating: 4.8,
        image: getSteamImage(268500),
        trailerUrl: "https://www.youtube.com/watch?v=XeP2IgYt4Ps",
        description: "XCOM 2 is the sequel to XCOM: Enemy Unknown, the 2012 award-winning strategy game of the year. Earth has changed. Twenty years have passed since world leaders offered an unconditional surrender to alien forces. XCOM, the planet’s last line of defense, was decimated and scattered.",
        pros: ["Tense tactical combat", "Deep customization", "Procedural maps", "Great mod support"],
        cons: ["RNG can be brutal", "Performance issues"]
    },
    {
        id: "total-war-warhammer-2",
        title: "Total War: Warhammer II",
        category: "Strategy",
        rating: 4.7,
        image: getSteamImage(594570),
        trailerUrl: "https://www.youtube.com/watch?v=ZyXrJ6S7I-8",
        description: "Strategy gaming perfected. A breath-taking campaign of exploration, expansion and conquest across a fantasy world. Turn-based civilisation management and real-time epic strategy battles with thousands of troops and monsters at your command.",
        pros: ["Massive scale battles", "Unique fantasy factions", "Mortal Empires map", "Deep lore"],
        cons: ["DLC is expensive", "Turn times can be long"]
    },
    {
        id: "cities-skylines",
        title: "Cities: Skylines",
        category: "Strategy",
        rating: 4.7,
        image: getSteamImage(255710),
        trailerUrl: "https://www.youtube.com/watch?v=5xqkCHb4pAA",
        description: "Cities: Skylines is a modern take on the classic city simulation. The game introduces new game play elements to realize the thrill and hardships of creating and maintaining a real city whilst expanding on some well-established tropes of the city building experience.",
        pros: ["Best city builder", "Huge modding community", "Deep traffic simulation", "Relaxing gameplay"],
        cons: ["Traffic AI can be dumb", "DLC overload"]
    },
    {
        id: "frostpunk",
        title: "Frostpunk",
        category: "Strategy",
        rating: 4.6,
        image: getSteamImage(323190),
        trailerUrl: "https://www.youtube.com/watch?v=QsQ1I_JaSe4",
        description: "Frostpunk is the first society survival game. As the ruler of the last city on Earth, you must manage both its citizens and its infrastructure. What decisions will you make to ensure your society's survival? What will you do when pushed to breaking point? Who will you become in the process?",
        pros: ["Unique survival city builder", "Moral dilemmas", "Steampunk aesthetic", "Great atmosphere"],
        cons: ["Very difficult", "Depressing tone"]
    },
    {
        id: "ck3",
        title: "Crusader Kings III",
        category: "Strategy",
        rating: 4.8,
        image: getSteamImage(1158310),
        trailerUrl: "https://www.youtube.com/watch?v=R8m7zITPjlI",
        description: "Paradox Development Studio brings you the sequel to one of the most popular strategy games ever made. Crusader Kings III is the heir to a long legacy of historical grand strategy experiences and arrives with a host of new ways to ensure the success of your royal house.",
        pros: ["Roleplaying strategy", "Accessible UI", "Infinite stories", "Character depth"],
        cons: ["Steep learning curve", "Warfare is simple"]
    },
    {
        id: "rimworld",
        title: "RimWorld",
        category: "Strategy",
        rating: 4.9,
        image: getSteamImage(294100),
        trailerUrl: "https://www.youtube.com/watch?v=JdAjXDDQPJ0",
        description: "A sci-fi colony sim driven by an intelligent AI storyteller. Generates stories by simulating psychology, ecology, gunplay, melee combat, climate, biomes, diplomacy, interpersonal relationships, art, medicine, trade, and more.",
        pros: ["Infinite replayability", "Deep simulation", "Modding community", "Emergent storytelling"],
        cons: ["Graphics are simple", "Can be brutal"]
    },
    {
        id: "clash-clans",
        title: "Clash of Clans",
        category: "Strategy",
        rating: 4.5,
        image: "https://static.wikia.nocookie.net/clashofclans/images/b/b5/Clash_of_Clans_App_Store_Icon.png",
        trailerUrl: "https://www.youtube.com/watch?v=dQ_d_VKrFgM",
        description: "Join millions of players worldwide as you build your village, raise a clan, and compete in epic Clan Wars! Mustachioed Barbarians, fire wielding Wizards, and other unique troops are waiting for you! Enter the world of Clash!",
        pros: ["Addictive base building", "Social clan features", "Regular updates", "Strategic attacks"],
        cons: ["Wait times are long", "Pay to progress faster"]
    },

    // Mobile Games
    ...MOBILE_GAMES
];
