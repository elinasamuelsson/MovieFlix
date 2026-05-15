let movies = [
    {
        id: 1,
        title: "The Dark Knight",
        description:
            "Gotham City's caped crusader faces his most dangerous adversary yet when the anarchic Joker unleashes a reign of chaos. A defining superhero film that redefined the genre.",
        year: 2008,
        rating: 4,
        ageRating: "PG-13",
        duration: "2h 32m",
        genres: ["Action", "Crime", "Drama"],
        categories: ["movie"],
        image: "images/dark-knight.jpg",
    },

    {
        id: 2,
        title: "Interstellar",
        description:
            "A team of astronauts travels through a wormhole near Saturn in search of a new habitable planet for humanity. A visually stunning and emotionally ambitious sci-fi epic.",
        year: 2014,
        rating: 4,
        ageRating: "PG-13",
        duration: "2h 49m",
        genres: ["Sci-Fi", "Drama", "Adventure"],
        categories: ["movie"],
        image: "images/interstellar.jpg",
    },

    {
        id: 3,
        title: "Parasite",
        description:
            "A poor Korean family schemes to become employed by a wealthy household, with darkly comedic and violent consequences. Won the Academy Award for Best Picture.",
        year: 2019,
        rating: 4,
        ageRating: "R",
        duration: "2h 12m",
        genres: ["Thriller", "Drama", "Dark Comedy"],
        categories: ["movie", "trending"],
        image: "images/parasite.jpg",
    },

    {
        id: 4,
        title: "The Godfather",
        description:
            "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son. One of the greatest films ever made.",
        year: 1972,
        rating: 5,
        ageRating: "R",
        duration: "2h 55m",
        genres: ["Crime", "Drama"],
        categories: ["movie"],
        image: "images/godfather.jpg",
    },

    {
        id: 5,
        title: "La La Land",
        description:
            "A jazz musician and an aspiring actress fall in love in Los Angeles while chasing their individual dreams. A bittersweet modern musical from Damien Chazelle.",
        year: 2016,
        rating: 4,
        ageRating: "PG-13",
        duration: "2h 8m",
        genres: ["Musical", "Romance", "Drama"],
        categories: ["movie"],
        image: "images/lalaland.jpg",
    },

    {
        id: 6,
        title: "Spirited Away",
        description:
            "A young girl wanders into a mysterious spirit world and must work to free herself and her parents. Studio Ghibli's Oscar-winning masterpiece.",
        year: 2001,
        rating: 4,
        ageRating: "PG",
        duration: "2h 5m",
        genres: ["Animation", "Fantasy", "Adventure"],
        categories: ["movie"],
        image: "images/spirited-away.jpg",
    },

    {
        id: 7,
        title: "Mad Max: Fury Road",
        description:
            "In a post-apocalyptic wasteland, Max teams with Furiosa to flee a tyrant and his army in a relentless, high-octane chase across the desert. A landmark of action cinema.",
        year: 2015,
        rating: 4,
        ageRating: "R",
        duration: "2h 0m",
        genres: ["Action", "Adventure", "Sci-Fi"],
        categories: ["movie"],
        image: "images/mad-max.jpg",
    },

    {
        id: 8,
        title: "Whiplash",
        description:
            "An ambitious young drummer at a prestigious music conservatory is pushed to his limits by a ruthlessly demanding instructor. An electrifying drama about obsession and excellence.",
        year: 2014,
        rating: 4,
        ageRating: "R",
        duration: "1h 46m",
        genres: ["Drama", "Music"],
        categories: ["movie"],
        image: "images/whiplash.jpg",
    },

    {
        id: 9,
        title: "Get Out",
        description:
            "A Black man visits his white girlfriend's family estate, where unsettling secrets begin to surface. Jordan Peele's acclaimed social horror debut.",
        year: 2017,
        rating: 4,
        ageRating: "R",
        duration: "1h 44m",
        genres: ["Horror", "Thriller", "Mystery"],
        categories: ["movie"],
        image: "images/get-out.jpg",
    },

    {
        id: 10,
        title: "The Shawshank Redemption",
        description:
            "Two imprisoned men bond over years in prison, finding solace and eventual redemption through acts of common decency. A beloved classic of hope and friendship.",
        year: 1994,
        rating: 5,
        ageRating: "R",
        duration: "2h 22m",
        genres: ["Drama"],
        categories: ["movie"],
        image: "images/shawshank.jpg",
    },

    {
        id: 11,
        title: "Blade Runner 2049",
        description:
            "A young blade runner discovers a long-buried secret that leads him to track down former blade runner Rick Deckard. A visually stunning and meditative sci-fi sequel.",
        year: 2017,
        rating: 4,
        ageRating: "R",
        duration: "2h 44m",
        genres: ["Sci-Fi", "Drama", "Thriller"],
        categories: ["movie"],
        image: "images/blade-runner.jpg",
    },

    {
        id: 12,
        title: "Pulp Fiction",
        description:
            "Interconnected crime stories of hitmen, gangsters, a boxer, and a pair of diner bandits unfold in non-linear fashion across Los Angeles. Tarantino's genre-defining crime classic.",
        year: 1994,
        rating: 4,
        ageRating: "R",
        duration: "2h 34m",
        genres: ["Crime", "Drama"],
        categories: ["movie"],
        image: "images/pulp-fiction.jpg",
    },

    {
        id: 13,
        title: "The Grand Budapest Hotel",
        description:
            "The adventures of a legendary hotel concierge and his protégé as they become embroiled in a dispute over a priceless painting. A whimsical Wes Anderson gem.",
        year: 2014,
        rating: 4,
        ageRating: "R",
        duration: "1h 39m",
        genres: ["Comedy", "Adventure", "Drama"],
        categories: ["movie"],
        image: "images/grand-budapest.jpg",
    },

    {
        id: 14,
        title: "Titanic",
        description:
            "A young aristocrat falls in love with a kind-hearted artist aboard the doomed RMS Titanic. James Cameron's epic romance remains one of the highest-grossing films ever made.",
        year: 1997,
        rating: 4,
        ageRating: "PG-13",
        duration: "3h 14m",
        genres: ["Romance", "Drama", "Disaster"],
        categories: ["movie"],
        image: "images/titanic.jpg",
    },

    {
        id: 15,
        title: "The Matrix",
        description:
            "A hacker discovers the world he knows is a computer simulation and joins a rebellion against the machines controlling reality. A groundbreaking sci-fi action classic.",
        year: 1999,
        rating: 4,
        ageRating: "R",
        duration: "2h 16m",
        genres: ["Sci-Fi", "Action"],
        categories: ["movie"],
        image: "images/matrix.jpg",
    },

    {
        id: 16,
        title: "Coco",
        description:
            "A young boy aspiring to be a musician travels to the Land of the Dead on Día de los Muertos. Pixar's beautifully animated celebration of family and remembrance.",
        year: 2017,
        rating: 4,
        ageRating: "PG",
        duration: "1h 45m",
        genres: ["Animation", "Adventure", "Family"],
        categories: ["movie"],
        image: "images/coco.jpg",
    },

    {
        id: 17,
        title: "Joker",
        description:
            "A failed comedian's mental deterioration leads to the birth of one of Gotham's most iconic villains. Joaquin Phoenix delivers an Oscar-winning performance.",
        year: 2019,
        rating: 4,
        ageRating: "R",
        duration: "2h 2m",
        genres: ["Drama", "Crime", "Thriller"],
        categories: ["movie"],
        image: "images/joker.jpg",
    },

    {
        id: 18,
        title: "The Conjuring",
        description:
            "Paranormal investigators Ed and Lorraine Warren help a family terrorized by a dark presence on their farmhouse. A well-crafted supernatural horror that spawned a massive franchise.",
        year: 2013,
        rating: 4,
        ageRating: "R",
        duration: "1h 52m",
        genres: ["Horror", "Thriller"],
        categories: ["movie"],
        image: "images/conjuring.jpg",
    },

    {
        id: 19,
        title: "Gladiator",
        description:
            "A betrayed Roman general becomes a gladiator and seeks revenge against the corrupt emperor who murdered his family. Ridley Scott's epic action masterpiece.",
        year: 2000,
        rating: 4,
        ageRating: "R",
        duration: "2h 35m",
        genres: ["Action", "Adventure", "Drama"],
        categories: ["movie"],
        image: "images/gladiator.jpg",
    },

    {
        id: 20,
        title: "Everything Everywhere All at Once",
        description:
            "A middle-aged Chinese-American woman discovers she must connect with parallel universe versions of herself to prevent a multiversal catastrophe. Won seven Academy Awards including Best Picture.",
        year: 2022,
        rating: 4,
        ageRating: "R",
        duration: "2h 19m",
        genres: ["Sci-Fi", "Comedy", "Adventure"],
        categories: ["movie"],
        image: "images/everything-everywhere.jpg",
    },

    {
        id: 21,
        title: "Squid Game",
        description:
            "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. A tempting prize awaits, but with deadly high stakes.",
        year: 2024,
        rating: 5,
        ageRating: "TV-MA",
        duration: "",
        genres: ["Drama", "Horror", "Thriller"],
        categories: ["hero", "tv-show", "trending"],
        image: "assets/hero.jpg",
    },

    {
        id: 22,
        title: "Jo Nesbø's Detective Hole",
        description:
            "A brilliant but self-destructive Oslo detective hunts a ritualistic serial killer while battling corruption and his own demons. Netflix's acclaimed Norwegian noir series.",
        year: 2026,
        rating: 4,
        ageRating: "TV-MA",
        duration: "55m/ep",
        genres: ["Crime", "Drama", "Mystery"],
        categories: ["tv-show", "new-release", "trending"],
        image: "assets/trending-images/Detective Hole.png",
    },

    {
        id: 23,
        title: "Jujutsu Kaisen",
        description:
            "High schooler Yuji Itadori swallows a cursed object and becomes host to a powerful demon, joining a secret organization of sorcerers. One of the most popular anime series of recent years.",
        year: 2020,
        rating: 4,
        ageRating: "TV-14",
        duration: "24m/ep",
        genres: ["Animation", "Action", "Fantasy"],
        categories: ["tv-show", "trending", "favorite"],
        image: "assets/trending-images/Jujutsu_kaisen.png",
    },

    {
        id: 24,
        title: "Peaky Blinders",
        description:
            "The Shelby crime family rises to power in post-WWI Birmingham, led by the ruthless and cunning Tommy Shelby. A stylish and gripping British crime drama.",
        year: 2013,
        rating: 4,
        ageRating: "TV-MA",
        duration: "1h/ep",
        genres: ["Crime", "Drama"],
        categories: ["tv-show", "my-list"],
        image: "assets/trending-images/Peaky_Blinders_-_The_Immortal_Man_poster.png",
    },

    {
        id: 25,
        title: "The Pitt",
        description:
            "A gripping real-time drama set over a single 15-hour shift in a Pittsburgh emergency room. A raw, critically acclaimed medical series starring Noah Wyle.",
        year: 2025,
        rating: 4,
        ageRating: "TV-MA",
        duration: "1h/ep",
        genres: ["Drama", "Medical"],
        categories: ["tv-show", "trending", "my-list"],
        image: "assets/trending-images/The Pitt.png",
    },

    {
        id: 26,
        title: "War Machine",
        description:
            "During US Army Ranger selection, a combat engineer and his unit face a terrifying alien threat in the Colorado wilderness. A gory, action-packed sci-fi military thriller.",
        year: 2026,
        rating: 3,
        ageRating: "R",
        duration: "1h 46m",
        genres: ["Action", "Sci-Fi", "Thriller"],
        categories: ["movie", "new-release"],
        image: "assets/trending-images/War_Machine.jpeg.png",
    },

    {
        id: 27,
        title: "Casino Royale",
        description:
            "James Bond earns his 00 status and faces his first mission: defeating a private banker funding terrorists in a high-stakes poker game in Montenegro. Daniel Craig's iconic debut as Bond.",
        year: 2006,
        rating: 4,
        ageRating: "PG-13",
        duration: "2h 24m",
        genres: ["Action", "Adventure", "Thriller"],
        categories: ["movie", "my-list"],
        image: "assets/action-and-adventure-images/Casino Royale.png",
    },

    {
        id: 28,
        title: "Monarch: Legacy of Monsters",
        description:
            "Two siblings discover their late father's connection to the secret organization Monarch and the world of Titans. An engaging Apple TV+ entry in the MonsterVerse.",
        year: 2023,
        rating: 3,
        ageRating: "TV-14",
        duration: "1h/ep",
        genres: ["Sci-Fi", "Action", "Adventure"],
        categories: ["tv-show", "my-list"],
        image: "assets/tvshows-images/monarch.png",
    },

    {
        id: 29,
        title: "One Piece",
        description:
            "Monkey D. Luffy and his pirate crew sail the seas in search of the legendary treasure called the One Piece. Netflix's hugely popular live-action adaptation of the beloved manga.",
        year: 2023,
        rating: 4.1,
        ageRating: "TV-14",
        duration: "1h/ep",
        genres: ["Adventure", "Action", "Fantasy"],
        categories: ["tv-show", "trending", "favorite"],
        image: "assets/tvshows-images/onepiece.jpg",
    },

    {
        id: 30,
        title: "Avatar: Fire and Ash",
        description:
            "Jake and Neytiri's family grapples with grief, encountering a new, aggressive Na'vi tribe, the Ash People, who are led by the fiery Varang, as the conflict on Pandora escalates and a new moral focus emerges.",
        year: 2025,
        rating: 4,
        ageRating: "PG-11",
        duration: "3h 17m",
        genres: ["Sci-Fi", "Adventure", "Action"],
        categories: ["movie"],
        image: "assets/action-and-adventure-images/The Avatar.png",
    },

    {
        id: 31,
        title: "The Lost City",
        description:
            "A reclusive romance novelist gets kidnapped by an eccentric billionaire who believes she knows the location of a lost city's treasure. A fun, fast-paced adventure comedy.",
        year: 2022,
        rating: 3,
        ageRating: "PG-13",
        duration: "1h 52m",
        genres: ["Action", "Comedy", "Adventure"],
        categories: ["movie", "favorite"],
        image: "assets/action-and-adventure-images/The Lost City Poster.png",
    },

    {
        id: 32,
        title: "Valhalla",
        description:
            "Two Viking children embark on a journey with the gods Thor and Loki to protect Valhalla from the dreaded Fenrir wolf and prevent Ragnarok. A Danish dark fantasy adventure film.",
        year: 2019,
        rating: 3,
        ageRating: "PG",
        duration: "1h 45m",
        genres: ["Adventure", "Fantasy", "Family"],
        categories: ["movie"],
        image: "assets/action-and-adventure-images/Vikings Valhalla_.png",
    },

    {
        id: 33,
        title: "3 Body Problem",
        description:
            "Scientists around the world face a series of baffling events connected to a secret Chinese project that first contacted an alien civilization decades earlier. Netflix's epic sci-fi adaptation.",
        year: 2024,
        rating: 4,
        ageRating: "TV-MA",
        duration: "1h/ep",
        genres: ["Sci-Fi", "Drama", "Mystery"],
        categories: ["tv-show"],
        image: "assets/scifi-and-fantasy/3 Body Problem.png",
    },

    {
        id: 34,
        title: "Donnie Darko",
        description:
            "A troubled teenager has visions of a giant rabbit who tells him the world will end in 28 days. A cult sci-fi mystery that defies easy categorization.",
        year: 2001,
        rating: 4,
        ageRating: "R",
        duration: "1h 54m",
        genres: ["Sci-Fi", "Drama", "Thriller"],
        categories: ["movie"],
        image: "assets/scifi-and-fantasy/Donnie Darko.png",
    },

    {
        id: 35,
        title: "Inception",
        description:
            "A thief who steals corporate secrets through dream-sharing technology is given the inverse task: planting an idea into a target's subconscious. Christopher Nolan's mind-bending heist film.",
        year: 2010,
        rating: 4,
        ageRating: "PG-13",
        duration: "2h 28m",
        genres: ["Sci-Fi", "Action", "Thriller"],
        categories: ["movie", "my-list"],
        image: "assets/scifi-and-fantasy/Inception.png",
    },

    {
        id: 36,
        title: "The Endless",
        description:
            "Two brothers return to the UFO death cult they escaped years ago, only to encounter inexplicable phenomena and a terrifying supernatural force. A clever indie sci-fi horror.",
        year: 2017,
        rating: 3,
        ageRating: "NR",
        duration: "1h 51m",
        genres: ["Sci-Fi", "Horror", "Mystery"],
        categories: ["movie", "my-list"],
        image: "assets/scifi-and-fantasy/The_Endless.png",
    },

    {
        id: 37,
        title: "The Sandman",
        description:
            "The immortal King of Dreams escapes captivity after a century and sets out to restore his realm. A visually stunning adaptation of Neil Gaiman's beloved comic series.",
        year: 2022,
        rating: 4,
        ageRating: "TV-MA",
        duration: "50m/ep",
        genres: ["Fantasy", "Drama", "Horror"],
        categories: ["tv-show"],
        image: "assets/scifi-and-fantasy/The_Sandman.png",
    },

    {
        id: 38,
        title: "Westworld",
        description:
            "At a futuristic Western theme park populated by lifelike androids, the hosts begin to gain consciousness and question their reality. A complex and visually spectacular HBO drama.",
        year: 2016,
        rating: 4,
        ageRating: "TV-MA",
        duration: "1h/ep",
        genres: ["Sci-Fi", "Drama", "Thriller"],
        categories: ["tv-show"],
        image: "assets/scifi-and-fantasy/Westworld.png",
    },

    {
        id: 39,
        title: "Mad Men",
        description:
            "The brilliant but troubled Don Draper navigates the cutthroat world of advertising in 1960s New York. A critically acclaimed character study and period drama.",
        year: 2007,
        rating: 4,
        ageRating: "TV-14",
        duration: "47m/ep",
        genres: ["Drama"],
        categories: ["tv-show"],
        image: "assets/drama-images/Mad men.jpg",
    },

    {
        id: 40,
        title: "Steve",
        description:
            "Over one intense day, a devoted and troubled headmaster of a last-chance reform school fights to keep his students and himself from falling apart. A powerful Netflix drama starring Cillian Murphy.",
        year: 2025,
        rating: 3,
        ageRating: "R",
        duration: "1h 32m",
        genres: ["Drama"],
        categories: ["movie"],
        image: "assets/drama-images/Steve.jpg",
    },

    {
        id: 41,
        title: "The Boys",
        description:
            "A group of vigilantes fights back against a corrupt corporation that has turned superheroes into celebrities. A darkly satirical, ultra-violent take on superhero culture.",
        year: 2019,
        rating: 4,
        ageRating: "TV-MA",
        duration: "1h/ep",
        genres: ["Action", "Sci-Fi", "Dark Comedy"],
        categories: ["tv-show", "trending"],
        image: "assets/drama-images/The boys.jpg",
    },

    {
        id: 42,
        title: "The Guilty",
        description:
            "A demoted police officer works as an emergency dispatcher and faces a desperate situation when a kidnapped woman calls for help. A taut, real-time thriller.",
        year: 2021,
        rating: 4,
        ageRating: "R",
        duration: "1h 30m",
        genres: ["Thriller", "Drama", "Crime"],
        categories: ["movie"],
        image: "assets/drama-images/The guilty.jpg",
    },

    {
        id: 43,
        title: "The Lost Bus",
        description:
            "Based on true events, a school bus driver and a teacher fight to save 22 children trapped during the 2018 Camp Fire, the deadliest wildfire in California history. Stars Matthew McConaughey and America Ferrera.",
        year: 2025,
        rating: 3,
        ageRating: "R",
        duration: "2h 10m",
        genres: ["Drama", "Thriller", "History"],
        categories: ["movie"],
        image: "assets/drama-images/The last bus.jpg",
    },

    {
        id: 44,
        title: "True Detective",
        description:
            "An anthology crime drama in which each season follows different detectives through harrowing cases. The first season with Matthew McConaughey and Woody Harrelson remains one of the most acclaimed seasons of TV.",
        year: 2014,
        rating: 4,
        ageRating: "TV-MA",
        duration: "55m/ep",
        genres: ["Crime", "Drama", "Mystery"],
        categories: ["tv-show"],
        image: "assets/drama-images/True detective.jpg",
    },

    {
        id: 45,
        title: "Breaking Bad",
        description:
            "A high school chemistry teacher diagnosed with cancer transforms into a ruthless drug kingpin to secure his family's future. Widely considered one of the greatest TV dramas ever made.",
        year: 2008,
        rating: 5,
        ageRating: "TV-MA",
        duration: "47m/ep",
        genres: ["Crime", "Drama", "Thriller"],
        categories: ["tv-show", "my-list"],
        image: "assets/tvshows-images/breaking_bad.jpg",
    },

    {
        id: 46,
        title: "Friends",
        description:
            "Six friends navigate love, careers, and life in New York City. One of the most beloved sitcoms of all time that defined a generation of TV comedy.",
        year: 1994,
        rating: 4,
        ageRating: "TV-PG",
        duration: "22m/ep",
        genres: ["Comedy", "Romance"],
        categories: ["tv-show"],
        image: "assets/tvshows-images/friends.webp",
    },

    {
        id: 47,
        title: "The Office",
        description:
            "A cringe-comedy mockumentary following the daily lives of employees at a paper company in Scranton, Pennsylvania. Michael Scott's antics made this an enduring comedy classic.",
        year: 2005,
        rating: 4,
        ageRating: "TV-14",
        duration: "22m/ep",
        genres: ["Comedy"],
        categories: ["tv-show"],
        image: "assets/tvshows-images/the_office.jpg",
    },

    {
        id: 48,
        title: "How I Met Your Mother",
        description:
            "Ted Mosby recounts to his children the long story of how he met their mother, taking many hilarious and heartfelt detours. A beloved sitcom full of heart and callbacks.",
        year: 2005,
        rating: 4,
        ageRating: "TV-PG",
        duration: "22m/ep",
        genres: ["Comedy", "Romance"],
        categories: ["tv-show"],
        image: "assets/tvshows-images/how_i_met.jpg",
    },

    {
        id: 49,
        title: "The Big Bang Theory",
        description:
            "Genius physicists Sheldon and Leonard navigate everyday life, relationships, and pop culture with their friends. One of the longest-running and highest-rated sitcoms in US history.",
        year: 2007,
        rating: 4,
        ageRating: "TV-PG",
        duration: "22m/ep",
        genres: ["Comedy"],
        categories: ["tv-show"],
        image: "assets/tvshows-images/big_bang.jpg",
    },

    {
        id: 50,
        title: "Lost",
        description:
            "Survivors of a plane crash on a mysterious island encounter supernatural forces and struggle to find rescue. A groundbreaking mystery series that captivated audiences worldwide.",
        year: 2004,
        rating: 4,
        ageRating: "TV-14",
        duration: "42m/ep",
        genres: ["Drama", "Mystery", "Sci-Fi"],
        categories: ["tv-show"],
        image: "assets/tvshows-images/lost.jpg",
    },

    {
        id: 51,
        title: "Seinfeld",
        description:
            "Jerry Seinfeld and his neurotic friends navigate the mundane and absurd situations of New York City life. The defining sitcom of the 1990s.",
        year: 1989,
        rating: 4,
        ageRating: "TV-PG",
        duration: "22m/ep",
        genres: ["Comedy"],
        categories: ["tv-show"],
        image: "assets/tvshows-images/seinfeld.jpg",
    },

    {
        id: 52,
        title: "Everybody Loves Raymond",
        description:
            "A sports writer deals with an overbearing family, including his intrusive parents who live directly across the street. A warm and funny family sitcom.",
        year: 1996,
        rating: 4,
        ageRating: "TV-PG",
        duration: "22m/ep",
        genres: ["Comedy", "Family"],
        categories: ["tv-show"],
        image: "assets/tvshows-images/raymond.jpg",
    },

    {
        id: 53,
        title: "Stranger Things",
        description:
            "A group of kids in a small Indiana town encounter supernatural forces and secret government experiments after their friend goes missing. Netflix's flagship sci-fi mystery phenomenon.",
        year: 2016,
        rating: 4,
        ageRating: "TV-14",
        duration: "50m/ep",
        genres: ["Sci-Fi", "Horror", "Mystery"],
        categories: ["tv-show", "my-list"],
        image: "assets/tvshows-images/stranger_things.jpg",
    },

    {
        id: 54,
        title: "Fallout",
        description:
            "In a post-nuclear future, a vault dweller, a ghoul, and a soldier of the Brotherhood of Steel search for survival and answers across the wasteland. Amazon's hit adaptation of the beloved video game series.",
        year: 2024,
        rating: 4,
        ageRating: "TV-MA",
        duration: "1h/ep",
        genres: ["Sci-Fi", "Adventure", "Dark Comedy"],
        categories: ["tv-show", "trending", "my-list"],
        image: "assets/tvshows-images/fallout.webp",
    },

    {
        id: 55,
        title: "The Walking Dead",
        description:
            "A sheriff's deputy wakes from a coma to find a world overrun by zombies and must lead a group of survivors. The longest-running zombie drama in television history.",
        year: 2010,
        rating: 4,
        ageRating: "TV-MA",
        duration: "44m/ep",
        genres: ["Horror", "Drama", "Action"],
        categories: ["tv-show"],
        image: "assets/tvshows-images/The_Walking_Dead.jpg",
    },

    {
        id: 56,
        title: "Alice in Borderland",
        description:
            "A group of friends find themselves transported to a deserted version of Tokyo where they must compete in deadly games to survive. A gripping Japanese survival thriller on Netflix.",
        year: 2020,
        rating: 4,
        ageRating: "TV-MA",
        duration: "40m/ep",
        genres: ["Sci-Fi", "Thriller", "Action"],
        categories: ["tv-show"],
        image: "assets/tvshows-images/borderland.jpg",
    },

    {
        id: 57,
        title: "From",
        description:
            "Survivors of a mysterious town in rural America must follow strict rules to survive at night, while trying to find a way out. A dark and atmospheric mystery series.",
        year: 2022,
        rating: 4,
        ageRating: "TV-MA",
        duration: "1h/ep",
        genres: ["Horror", "Mystery", "Sci-Fi"],
        categories: ["tv-show"],
        image: "assets/tvshows-images/from.jpg",
    },

    {
        id: 58,
        title: "Grey's Anatomy",
        description:
            "Surgical interns and residents navigate the high-pressure world of a Seattle hospital, balancing demanding careers and complicated personal lives. The longest-running primetime medical drama in US history.",
        year: 2005,
        rating: 4,
        ageRating: "TV-14",
        duration: "43m/ep",
        genres: ["Drama", "Medical", "Romance"],
        categories: ["tv-show"],
        image: "assets/tvshows-images/anatomy.jpg",
    },

    {
        id: 59,
        title: "Outlander",
        description:
            "A married WWII combat nurse is swept back in time to 18th-century Scotland, where she falls in love with a Highland warrior. A sweeping romantic historical drama.",
        year: 2014,
        rating: 4,
        ageRating: "TV-MA",
        duration: "1h/ep",
        genres: ["Drama", "Romance", "Historical"],
        categories: ["tv-show"],
        image: "assets/tvshows-images/outlander.jpg",
    },

    {
        id: 60,
        title: "Chernobyl",
        description:
            "A dramatization of the 1986 Chernobyl nuclear disaster and its aftermath, depicting the heroic efforts to contain the catastrophe. HBO's harrowing and critically acclaimed miniseries.",
        year: 2019,
        rating: 5,
        ageRating: "TV-MA",
        duration: "1h/ep",
        genres: ["Drama", "History", "Thriller"],
        categories: ["tv-show"],
        image: "assets/tvshows-images/chernobyl.jpg",
    },

    {
        id: 61,
        title: "Reacher",
        description:
            "Jack Reacher, a former military police investigator, arrives in a small town and gets ensnared in a web of murder and corruption. A hard-hitting action thriller series.",
        year: 2022,
        rating: 4,
        ageRating: "TV-MA",
        duration: "1h/ep",
        genres: ["Action", "Crime", "Thriller"],
        categories: ["tv-show", "trending"],
        image: "assets/tvshows-images/reacher.jpg",
    },

    {
        id: 62,
        title: "Paradise",
        description:
            "A Secret Service agent investigates the murder of a former president inside a vast underground bunker housing an elite post-apocalyptic community. A gripping sci-fi political thriller with Sterling K. Brown.",
        year: 2025,
        rating: 4,
        ageRating: "TV-MA",
        duration: "1h/ep",
        genres: ["Sci-Fi", "Thriller", "Drama"],
        categories: ["tv-show", "trending"],
        image: "assets/tvshows-images/paradise.jpg",
    },

    {
        id: 63,
        title: "Star Wars: The Last Jedi",
        description:
            "Rey seeks training under a reclusive Luke Skywalker while the Resistance makes a desperate escape from the First Order. The most divisive entry in the Skywalker Saga.",
        year: 2017,
        rating: 3,
        ageRating: "PG-13",
        duration: "2h 32m",
        genres: ["Sci-Fi", "Action", "Adventure"],
        categories: ["movie"],
        image: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    },

    {
        id: 64,
        title: "Avatar: The Way of Water",
        description:
            "Jake Sully and Neytiri flee their home and explore the ocean regions of Pandora to protect their family. James Cameron's visually breathtaking and record-breaking sequel.",
        year: 2022,
        rating: 4,
        ageRating: "PG-13",
        duration: "3h 12m",
        genres: ["Sci-Fi", "Adventure", "Action"],
        categories: ["movie"],
        image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    },

    {
        id: 65,
        title: "Doctor Strange in the Multiverse of Madness",
        description:
            "Doctor Strange travels across the multiverse with a mysterious teenager who can travel between universes, pursued by a terrifying enemy. Sam Raimi's wild MCU horror-adjacent entry.",
        year: 2022,
        rating: 3,
        ageRating: "PG-13",
        duration: "2h 6m",
        genres: ["Sci-Fi", "Action", "Fantasy"],
        categories: ["movie"],
        image: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    },

    {
        id: 66,
        title: "Barbie",
        description:
            "Barbie and Ken travel to the real world after an existential crisis disrupts Barbieland. Greta Gerwig's massively successful and culturally resonant comedy.",
        year: 2023,
        rating: 4,
        ageRating: "PG-13",
        duration: "1h 54m",
        genres: ["Comedy", "Fantasy", "Adventure"],
        categories: ["movie"],
        image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    },

    {
        id: 67,
        title: "Oppenheimer",
        description:
            "The story of American physicist J. Robert Oppenheimer and his pivotal role in the development of the first nuclear weapons during WWII. Christopher Nolan's Oscar-winning biographical epic.",
        year: 2023,
        rating: 4,
        ageRating: "R",
        duration: "3h 0m",
        genres: ["Drama", "History", "Thriller"],
        categories: ["movie"],
        image: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    },

    {
        id: 68,
        title: "The Super Mario Bros. Movie",
        description:
            "Mario and Luigi are swept into the Mushroom Kingdom, where Mario must journey through dangerous lands to save his brother from Bowser. An incredibly successful animated adaptation of the beloved video game franchise.",
        year: 2023,
        rating: 4,
        ageRating: "PG",
        duration: "1h 32m",
        genres: ["Animation", "Adventure", "Comedy"],
        categories: ["movie"],
        image: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    },

    {
        id: 69,
        title: "Mortal Kombat",
        description:
            "Fighters from various realms are chosen to compete in a deadly tournament to determine the fate of Earth. A gory and fan-pleasing martial arts action film.",
        year: 2021,
        rating: 3,
        ageRating: "R",
        duration: "1h 50m",
        genres: ["Action", "Fantasy"],
        categories: ["movie"],
        image: "https://image.tmdb.org/t/p/w500/xGuOF1T3WmPsAcQEQJfnG7Ud9f8.jpg",
    },

    {
        id: 70,
        title: "Dilwale Dulhania Le Jayenge",
        description:
            "Two British-Indian strangers fall in love during a trip across Europe, but face family opposition to their romance. One of the most iconic and longest-running Bollywood films ever made.",
        year: 1995,
        rating: 4,
        ageRating: "NR",
        duration: "3h 10m",
        genres: ["Romance", "Drama", "Musical"],
        categories: ["movie"],
        image: "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    },

    {
        id: 71,
        title: "Sonic the Hedgehog 2",
        description:
            "Sonic teams up with Tails to stop Dr. Robotnik and the powerful Knuckles from claiming the Master Emerald. A fun and fast-paced sequel faithful to the beloved video game franchise.",
        year: 2022,
        rating: 3,
        ageRating: "PG",
        duration: "2h 2m",
        genres: ["Animation", "Action", "Comedy"],
        categories: ["movie"],
        image: "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    },

    {
        id: 72,
        title: "John Wick: Chapter 4",
        description:
            "John Wick seeks a path to freedom from the High Table, fighting through armies of assassins across Paris, Osaka, and Berlin. The biggest and most spectacular installment of the franchise.",
        year: 2023,
        rating: 4,
        ageRating: "R",
        duration: "2h 49m",
        genres: ["Action", "Thriller"],
        categories: ["movie"],
        image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    },

    {
        id: 73,
        title: "The Creator",
        description:
            "A soldier is sent to hunt down and kill the Creator, the elusive architect of advanced AI, and discovers a mysterious AI child. A visually inventive sci-fi action epic.",
        year: 2023,
        rating: 4,
        ageRating: "PG-13",
        duration: "2h 13m",
        genres: ["Sci-Fi", "Action", "Drama"],
        categories: ["movie"],
        image: "https://image.tmdb.org/t/p/w500/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
    },

    {
        id: 74,
        title: "Forrest Gump",
        description:
            "A man with a low IQ from Alabama finds himself at the center of several major historical events while pursuing his childhood love. Tom Hanks delivers an iconic Oscar-winning performance.",
        year: 1994,
        rating: 5,
        ageRating: "PG-13",
        duration: "2h 22m",
        genres: ["Drama", "Romance", "Comedy"],
        categories: ["movie"],
        image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    },

    {
        id: 75,
        title: "Your Name.",
        description:
            "Two high school students in Tokyo and rural Japan mysteriously begin switching bodies and must find each other before a catastrophe strikes. Makoto Shinkai's stunning animated romance.",
        year: 2016,
        rating: 4.4,
        ageRating: "PG",
        duration: "1h 46m",
        genres: ["Animation", "Romance", "Fantasy"],
        categories: ["movie"],
        image: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    },

    {
        id: 76,
        title: "Project Hail Mary",
        description:
            "A lone astronaut wakes up with no memory millions of miles from Earth, only to discover he's humanity's last hope against an extinction-level threat. Ryan Gosling stars in this acclaimed adaptation of Andy Weir's novel.",
        year: 2026,
        rating: 4,
        ageRating: "PG-13",
        duration: "2h 36m",
        genres: ["Sci-Fi", "Adventure", "Drama"],
        categories: ["movie", "new-release", "trending"],
        image: "https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_FMjpg_UY4096_.jpg",
    },

    {
        id: 77,
        title: "The Super Mario Galaxy Movie",
        description:
            "Mario, Luigi, and Princess Peach embark on a galactic adventure to stop Bowser Jr.'s nefarious plans and rescue Rosalina. The sequel to The Super Mario Bros. Movie.",
        year: 2026,
        rating: 3,
        ageRating: "PG",
        duration: "1h 38m",
        genres: ["Animation", "Adventure", "Comedy"],
        categories: ["movie", "new-release", "trending"],
        image: "https://m.media-amazon.com/images/M/MV5BMDg5MjRkNWEtYmU1Mi00MTExLTk5MDQtY2RiMWVkZWNiOThjXkEyXkFqcGc@._V1_FMjpg_UY2500_.jpg",
    },

    {
        id: 78,
        title: "Crime 101",
        description:
            "An elusive jewel thief operating along LA's 101 freeway has his final heist collide with a disillusioned insurance broker and a relentless detective. Chris Hemsworth and Halle Berry star in this acclaimed LA noir thriller.",
        year: 2026,
        rating: 4,
        ageRating: "R",
        duration: "2h 20m",
        genres: ["Crime", "Thriller", "Drama"],
        categories: ["movie", "new-release", "trending"],
        image: "https://m.media-amazon.com/images/M/MV5BZThlN2M4ZTUtYTU3Mi00MDE5LWFhYWUtNjkxMWEwNjUwNDVhXkEyXkFqcGc@._V1_FMjpg_UY4096_.jpg",
    },

    {
        id: 79,
        title: "The Drama",
        description:
            "A happily engaged couple's wedding week is thrown into chaos when one of them reveals an explosive dark secret. Zendaya and Robert Pattinson star in Kristoffer Borgli's darkly funny A24 film.",
        year: 2026,
        rating: 3,
        ageRating: "R",
        duration: "1h 45m",
        genres: ["Romance", "Comedy", "Drama"],
        categories: ["movie", "new-release", "trending"],
        image: "https://m.media-amazon.com/images/M/MV5BMTcwOGZhYmItYTg3ZS00NjUwLWJiMmQtMjU5YjEwYWY0NmNkXkEyXkFqcGc@._V1_FMjpg_UY3000_.jpg",
    },

    {
        id: 80,
        title: "Zootopia 2",
        description:
            "Detectives Judy Hopps and Nick Wilde go undercover to unravel a great mystery when a charismatic reptile upends the city of Zootopia. Disney's record-breaking animated sequel.",
        year: 2025,
        rating: 4,
        ageRating: "PG",
        duration: "1h 48m",
        genres: ["Animation", "Adventure", "Comedy"],
        categories: ["movie", "my-list"],
        image: "assets/trending-images/Zootopia.png",
    },

    {
        id: 81,
        title: "Love Is Blind: Sweden",
        description:
            "Swedish singles seek genuine connection and propose marriage before ever seeing each other in person. Netflix's popular Scandinavian spin on the hit dating experiment.",
        year: 2024,
        rating: 3,
        ageRating: "TV-MA",
        duration: "50m/ep",
        genres: ["Reality", "Romance"],
        categories: ["tv-show"],
        image: "https://m.media-amazon.com/images/M/MV5BODcyMDM5YzQtNjBhOS00ZjFmLTlhZTMtY2FhMjA3NjFjYjdiXkEyXkFqcGc@._V1_FMjpg_UX450_.jpg",
    },

    {
        id: 82,
        title: "Glaskupan",
        description:
            "Criminologist Lejla returns to the small Swedish town where she was abducted as a child, and becomes embroiled in the investigation of another missing girl. An atmospheric Nordic noir miniseries from Camilla Läckberg.",
        year: 2025,
        rating: 3,
        ageRating: "TV-MA",
        duration: "45m/ep",
        genres: ["Crime", "Drama", "Thriller"],
        categories: ["tv-show"],
        image: "https://m.media-amazon.com/images/M/MV5BNDBiMTQ2NzQtYjk2NS00NGRjLTliMDctNWMzOTQ0MTlmYmMzXkEyXkFqcGc@._V1_FMjpg_UX646_.jpg",
    },

    {
        id: 83,
        title: "I Dina Händer",
        description:
            "After a 14-year-old commits a shocking crime, a harrowing investigation asks who bears responsibility. A powerful Swedish crime drama miniseries on Netflix.",
        year: 2024,
        rating: 3,
        ageRating: "TV-MA",
        duration: "45m/ep",
        genres: ["Crime", "Drama", "Thriller"],
        categories: ["tv-show"],
        image: "https://m.media-amazon.com/images/M/MV5BODUzN2M2ZjYtZDczNS00YTRkLWI1ZjUtMzUyZTNlMmZjMGI1XkEyXkFqcGc@._V1_FMjpg_UX1200_.jpg",
    },

    {
        id: 84,
        title: "En Del av Dig",
        description:
            "After a devastating loss shatters her world, a teenager must reinvent herself and navigate grief, identity, and desire. A raw and beautifully shot Swedish coming-of-age drama starring Zara Larsson.",
        year: 2024,
        rating: 4,
        ageRating: "TV-14",
        duration: "1h 39m",
        genres: ["Drama", "Coming-of-Age"],
        categories: ["movie"],
        image: "https://m.media-amazon.com/images/M/MV5BM2M1MzExNGMtYzVlZi00NGUzLWE1MjEtOGZhNmYwNWIyZDI2XkEyXkFqcGc@._V1_FMjpg_UX450_.jpg",
    },

    {
        id: 85,
        title: "Adolescence",
        description:
            "When a 13-year-old boy is accused of murdering his classmate, his family and the detective on the case are all left asking what really happened. Netflix's record-breaking Emmy-winning one-shot limited series.",
        year: 2025,
        rating: 4,
        ageRating: "TV-MA",
        duration: "1h/ep",
        genres: ["Crime", "Drama", "Thriller"],
        categories: ["tv-show", "trending"],
        image: "https://m.media-amazon.com/images/M/MV5BNGY1YjBiNzMtYWZhNC00OWViLWE0MzItNjc4YzczOGNiM2I0XkEyXkFqcGc@._V1_FMjpg_UY2222_.jpg",
    },

    {
        id: 86,
        title: "En Helt Vanlig Familj",
        description:
            "A seemingly perfect Swedish family falls apart when their teenage daughter is accused of murder. A tense crime thriller miniseries based on M.T. Edvardsson's bestselling novel.",
        year: 2023,
        rating: 3,
        ageRating: "TV-MA",
        duration: "46m/ep",
        genres: ["Crime", "Drama", "Thriller"],
        categories: ["tv-show"],
        image: "https://m.media-amazon.com/images/M/MV5BODBjMTlkOWQtNGRkYy00MmNlLWIxYmMtMzU5MjE0ZDJiNjI3XkEyXkFqcGc@._V1_FMjpg_UY1928_.jpg",
    },

    {
        id: 87,
        title: "Snabba Cash",
        description:
            "A tech startup founder becomes entangled with the Stockholm criminal underworld as she fights to save her company. A slick, contemporary Swedish crime series on Netflix.",
        year: 2021,
        rating: 4,
        ageRating: "TV-MA",
        duration: "45m/ep",
        genres: ["Crime", "Drama", "Thriller"],
        categories: ["tv-show"],
        image: "https://m.media-amazon.com/images/M/MV5BNzNhZmY1NWItMzg2Ny00ODJhLWE5YjYtODZlODc4N2I0M2JjXkEyXkFqcGc@._V1_FMjpg_UX607_.jpg",
    },

    {
        id: 88,
        title: "Den stygge stesøsteren",
        description:
            "A dark, gory retelling of Cinderella told from the perspective of the stepsister Elvira, who will go to any grotesque length to catch the prince's eye. A Norwegian body horror satire on beauty standards.",
        year: 2025,
        rating: 3,
        ageRating: "NR",
        duration: "1h 50m",
        genres: ["Horror", "Comedy", "Fantasy"],
        categories: ["movie"],
        image: "https://m.media-amazon.com/images/M/MV5BOTY5N2M2YTctZDUzNi00ZGY0LTk3MzItZTBhZTY5M2VmZTVjXkEyXkFqcGc@._V1_FMjpg_UY2057_.jpg",
    },

    {
        id: 89,
        title: "Kärlek Fårever",
        description:
            "A Stockholm couple's plans for an intimate countryside wedding in Gotland are completely derailed by feuding families and traditions. A Swedish romantic comedy on Netflix.",
        year: 2025,
        rating: 3,
        ageRating: "TV-MA",
        duration: "1h 36m",
        genres: ["Comedy", "Romance"],
        categories: ["movie"],
        image: "https://m.media-amazon.com/images/M/MV5BNTExMDQ0OTMtYzZjYS00YWEzLTk5ZWYtMGUzYWZlNjYxNDcwXkEyXkFqcGc@._V1_FMjpg_UX450_.jpg",
    },

    {
        id: 90,
        title: "The Testaments",
        description:
            "Set 15 years after The Handmaid's Tale, Agnes grows up inside Gilead's gilded cage while a new generation of women begins to fight back. Hulu's highly anticipated sequel series.",
        year: 2026,
        rating: 4,
        ageRating: "TV-MA",
        duration: "1h/ep",
        genres: ["Drama", "Sci-Fi", "Thriller"],
        categories: ["tv-show", "new-release", "trending"],
        image: "https://m.media-amazon.com/images/M/MV5BMjZhODhiYmEtNTg0ZS00Mjc0LTk0NTYtMGEwMGFlNjFkZGM0XkEyXkFqcGc@._V1_.jpg",
    },

    {
        id: 91,
        title: "Lee Cronin's The Mummy",
        description:
            "A journalist's daughter disappears in the desert and returns eight years later, triggering a terrifying ancient nightmare for her family. A horror reimagining from the director of Evil Dead Rise.",
        year: 2026,
        rating: 3,
        ageRating: "R",
        duration: "2h 14m",
        genres: ["Horror", "Thriller"],
        categories: ["movie", "new-release"],
        image: "https://m.media-amazon.com/images/M/MV5BNDhlNTAyYTgtOGRmZS00ZmE0LTk4ZTUtMjk3ZjZhMWE4YWY0XkEyXkFqcGc@._V1_.jpg",
    },

    {
        id: 92,
        title: "Michael",
        description:
            "The authorized biopic of Michael Jackson traces his rise from the Jackson 5 to his iconic status as the King of Pop. Directed by Antoine Fuqua and starring Jackson's nephew Jaafar Jackson in his film debut.",
        year: 2026,
        rating: 3,
        ageRating: "PG-13",
        duration: "2h 10m",
        genres: ["Drama", "Biography", "Music"],
        categories: ["movie", "new-release", "trending"],
        image: "https://m.media-amazon.com/images/M/MV5BNzllNmRlN2EtMDQyOC00ODJjLTg4OWQtZDNmNGU3YzlkNjc1XkEyXkFqcGc@._V1_.jpg",
    },

    {
        id: 93,
        title: "Masters of the Universe",
        description:
            "After 15 years separated from his home planet, Prince Adam returns to Eternia to find it conquered by the evil Skeletor and must embrace his destiny as He-Man. Nicholas Galitzine and Jared Leto star in this highly anticipated live-action reboot.",
        year: 2026,
        rating: 0,
        ageRating: "NR",
        duration: "TBA",
        genres: ["Action", "Adventure", "Fantasy"],
        categories: ["movie", "coming-soon"],
        image: "https://m.media-amazon.com/images/M/MV5BN2MzMjMyNmQtYzkwMC00NTM2LThmN2ItMTczMGVmNGY5ODZlXkEyXkFqcGc@._V1_.jpg",
    },

    {
        id: 94,
        title: "Avatar: The Last Airbender",
        description:
            "Aang, the last Airbender and Avatar, awakens after 100 years and embarks on a quest with new friends to master all four elements and stop the Fire Nation. Netflix's acclaimed live-action adaptation.",
        year: 2024,
        rating: 4,
        ageRating: "TV-14",
        duration: "1h/ep",
        genres: ["Action", "Adventure", "Fantasy"],
        categories: ["tv-show", "community"],
        image: "https://m.media-amazon.com/images/M/MV5BNDllZjAzODktMTlmZS00ZDA2LTlmOTAtODgzZjQ0NTZlMjBlXkEyXkFqcGc@._V1_.jpg",
    },

    {
        id: 95,
        title: "Disclosure Day",
        description:
            "When proof of alien life is discovered, a weather reporter, a whistleblower, and a government official race to bring the truth to seven billion people. Steven Spielberg's long-awaited return to sci-fi blockbusters.",
        year: 2026,
        rating: 0,
        ageRating: "PG-13",
        duration: "2h 0m",
        genres: ["Sci-Fi", "Drama", "Thriller"],
        categories: ["movie", "coming-soon"],
        image: "https://m.media-amazon.com/images/M/MV5BMTgwNDI1ZjctYWNmMS00MTJhLTg1ZWItMzI1Yjk5NjZkYWFkXkEyXkFqcGc@._V1_.jpg",
    },
];

export function setMovies(newMovies) {
    movies = newMovies;
}

export function getMoviesCopy() {
    return movies.map(movie => ({ ...movie }));
}

export function addCommunityMovie(movieData) {
    const newMovie = {
        ...movieData, 
        categories: [...(movieData.categories || []), "community"]
    };

    movies.push(newMovie);

    const communityData = JSON.parse(localStorage.getItem('community_movies')) || [];
    communityData.push(newMovie);
    localStorage.setItem('community_movies', JSON.stringify(communityData));
}

/**
 * This function loads to merge LocalStorage
 * back into main 'movies' array.
 */
export function initializeMovies() {
    const savedCommunityMovies = JSON.parse(localStorage.getItem('community_movies')) || [];

    movies = [...movies, ...savedCommunityMovies];
}