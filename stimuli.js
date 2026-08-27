var stimuli = [
    {
        "id": "混んでいる_honest",
        "predicate": "混んでいる",
        "context": "honest",
        "context_label": "正直に指摘します",
        "sentence": "Noticing that the restaurant his friend is about to go to is crowded, Daisuke honestly points it out for their sake: \"That place is <modifier> crowded, so you might want to go at a different time.\""
    },
    {
        "id": "混んでいる_ambiguous",
        "predicate": "混んでいる",
        "context": "ambiguous",
        "context_label": "相手に判断してもらうため、曖昧に答えます",
        "sentence": "To a friend who suggested a restaurant, Daisuke answers vaguely so they can decide for themselves: \"That place seems <modifier> crowded — is this still okay?\""
    },
    {
        "id": "混んでいる_impressed",
        "predicate": "混んでいる",
        "context": "impressed",
        "context_label": "感激した様子で言います",
        "sentence": "Entering a restaurant he'd worried would be crowded, Daisuke says, surprised: \"It's not crowded <modifier>, glad I trusted it.\""
    },
    {
        "id": "混んでいる_direct",
        "predicate": "混んでいる",
        "context": "direct",
        "context_label": "どれくらか聞かれ、率直に答えます",
        "sentence": "Asked how crowded the restaurant was, Daisuke answers frankly: \"It was <modifier> crowded.\""
    },
    {
        "id": "混んでいる_irritated",
        "predicate": "混んでいる",
        "context": "irritated",
        "context_label": "苛立ってキレ気味に答えます",
        "sentence": "Wanting to go somewhere quiet, but instead taken to a place that's neither tasty nor anything but crowded, Daisuke irritably tells the friend who chose it: \"It's <modifier> crowded, and the food's not even good. Next time actually check before bringing me somewhere.\""
    },
    {
        "id": "混んでいる_encourage",
        "predicate": "混んでいる",
        "context": "encourage",
        "context_label": "励まします（多少そうだと思いつつも否定して）",
        "sentence": "To a friend worried about a place being crowded, Daisuke, though he suspects it might be true, denies it and reassures them a little: \"It's not <modifier> crowded — there are still seats, it's totally fine.\""
    },
    {
        "id": "高い_honest",
        "predicate": "高い",
        "context": "honest",
        "context_label": "正直に指摘します",
        "sentence": "To a colleague who asked for advice on a new product's pricing, Daisuke honestly points it out for their sake: \"That price point might be <modifier> high.\""
    },
    {
        "id": "高い_ambiguous",
        "predicate": "高い",
        "context": "ambiguous",
        "context_label": "相手に判断してもらうため、曖昧に答えます",
        "sentence": "To a friend consulting him about a restaurant budget, Daisuke answers vaguely so they can decide: \"That place is <modifier> expensive, but it's fine to splurge once in a while.\""
    },
    {
        "id": "高い_impressed",
        "predicate": "高い",
        "context": "impressed",
        "context_label": "感激した様子で言います",
        "sentence": "Regarding the price of the dish, Daisuke says, impressed: \"This dish is so delicious, and yet it's not expensive <modifier>! Amazing value.\""
    },
    {
        "id": "高い_direct",
        "predicate": "高い",
        "context": "direct",
        "context_label": "どれくらか聞かれ、率直に答えます",
        "sentence": "Asked how expensive the restaurant was, Daisuke answers frankly: \"It was <modifier> expensive.\""
    },
    {
        "id": "高い_irritated",
        "predicate": "高い",
        "context": "irritated",
        "context_label": "苛立ってキレ気味に答えます",
        "sentence": "About a disappointing service, Daisuke irritably tells the staff: \"I paid <modifier> a lot of money for this, and this service isn't worth it. Can I get a refund?\""
    },
    {
        "id": "高い_encourage",
        "predicate": "高い",
        "context": "encourage",
        "context_label": "励まします（多少そうだと思いつつも否定して）",
        "sentence": "To a friend worried about the price, Daisuke, though he suspects it might be true, denies it and reassures them a little: \"It's not <modifier> expensive — for what you get, it's actually a bargain.\""
    },
    {
        "id": "遅い_honest",
        "predicate": "遅い",
        "context": "honest",
        "context_label": "正直に指摘します",
        "sentence": "Regarding a junior colleague's time in their first marathon, Daisuke honestly points it out for their sake: \"Relatively speaking it's <modifier> slow, but that's great for a first attempt.\""
    },
    {
        "id": "遅い_ambiguous",
        "predicate": "遅い",
        "context": "ambiguous",
        "context_label": "相手に判断してもらうため、曖昧に答えます",
        "sentence": "To a colleague consulting him about transportation, Daisuke answers vaguely so they can decide: \"The bus is <modifier> slower, but either way is fine.\""
    },
    {
        "id": "遅い_impressed",
        "predicate": "遅い",
        "context": "impressed",
        "context_label": "感激した様子で言います",
        "sentence": "Surprised by how fast his junior colleague worked, Daisuke says, impressed: \"Not slow <modifier>! I was wrong. Well done.\""
    },
    {
        "id": "遅い_direct",
        "predicate": "遅い",
        "context": "direct",
        "context_label": "どれくらか聞かれ、率直に答えます",
        "sentence": "Asked how slow the work was, Daisuke answers frankly: \"It was <modifier> slow.\""
    },
    {
        "id": "遅い_irritated",
        "predicate": "遅い",
        "context": "irritated",
        "context_label": "苛立ってキレ気味に答えます",
        "sentence": "To a colleague who showed up significantly late to the meeting, Daisuke irritably says: \"You're <modifier> late — what time did you think we were meeting? Please actually be on time next time.\""
    },
    {
        "id": "遅い_encourage",
        "predicate": "遅い",
        "context": "encourage",
        "context_label": "励まします（多少そうだと思いつつも否定して）",
        "sentence": "To a junior colleague worried about being slow at the task, Daisuke, though he suspects it might be true, denies it and reassures them a little: \"The work isn't <modifier> slow — you're just not used to it yet, you'll speed up.\""
    },
    {
        "id": "寒い_honest",
        "predicate": "寒い",
        "context": "honest",
        "context_label": "正直に指摘します",
        "sentence": "To a colleague who manages the meeting room's temperature, Daisuke honestly points it out for their sake: \"It's <modifier> cold in here, I think you should turn up the heat.\""
    },
    {
        "id": "寒い_ambiguous",
        "predicate": "寒い",
        "context": "ambiguous",
        "context_label": "相手に判断してもらうため、曖昧に答えます",
        "sentence": "To a friend consulting him about the temperature outside, Daisuke answers vaguely so they can decide: \"It's <modifier> cold, but you'll be fine if you wear a coat.\""
    },
    {
        "id": "寒い_impressed",
        "predicate": "寒い",
        "context": "impressed",
        "context_label": "感激した様子で言います",
        "sentence": "About the warmth of the down jacket he bought, Daisuke says, impressed: \"This jacket is so thin, and yet it's not cold <modifier>! This brand really delivers on function.\""
    },
    {
        "id": "寒い_direct",
        "predicate": "寒い",
        "context": "direct",
        "context_label": "どれくらか聞かれ、率直に答えます",
        "sentence": "Asked how cold it was outside, Daisuke answers frankly: \"It was <modifier> cold.\""
    },
    {
        "id": "寒い_irritated",
        "predicate": "寒い",
        "context": "irritated",
        "context_label": "苛立ってキレ気味に答えます",
        "sentence": "To the colleague who manages the heater settings, Daisuke irritably says: \"It's <modifier> cold — can you please do something about it?\""
    },
    {
        "id": "寒い_encourage",
        "predicate": "寒い",
        "context": "encourage",
        "context_label": "励まします（多少そうだと思いつつも否定して）",
        "sentence": "To a colleague worried about the cold, Daisuke, though he suspects it might be true, denies it and reassures them a little: \"It's not <modifier> cold — you won't even notice once you're moving around.\""
    },
    {
        "id": "汚い_honest",
        "predicate": "汚い",
        "context": "honest",
        "context_label": "正直に指摘します",
        "sentence": "To a colleague preparing for a client visit, Daisuke honestly points it out for their sake: \"It's <modifier> messy here, let's tidy up before the guests arrive.\""
    },
    {
        "id": "汚い_ambiguous",
        "predicate": "汚い",
        "context": "ambiguous",
        "context_label": "相手に判断してもらうため、曖昧に答えます",
        "sentence": "To a friend consulting him about the state of their accommodation, Daisuke answers vaguely so they can decide: \"It's <modifier> dirty, but it's within an acceptable range, I think.\""
    },
    {
        "id": "汚い_impressed",
        "predicate": "汚い",
        "context": "impressed",
        "context_label": "感激した様子で言います",
        "sentence": "About the condition of a rental he toured, Daisuke says, impressed: \"I was worried since I heard the building is 30 years old, but it's so well-maintained that it's not dirty <modifier>! You can tell it's been taken good care of.\""
    },
    {
        "id": "汚い_direct",
        "predicate": "汚い",
        "context": "direct",
        "context_label": "どれくらか聞かれ、率直に答えます",
        "sentence": "Asked how dirty the room was, Daisuke answers frankly: \"It was <modifier> dirty.\""
    },
    {
        "id": "汚い_irritated",
        "predicate": "汚い",
        "context": "irritated",
        "context_label": "苛立ってキレ気味に答えます",
        "sentence": "About a shared space that hasn't been cleaned, Daisuke irritably tells the colleague in charge: \"It's <modifier> dirty — can someone please clean it?\""
    },
    {
        "id": "汚い_encourage",
        "predicate": "汚い",
        "context": "encourage",
        "context_label": "励まします（多少そうだと思いつつも否定して）",
        "sentence": "To a friend worried about their room being messy, Daisuke, though he suspects it might be true, denies it and reassures them a little: \"It's not <modifier> dirty — a little tidying and it'll be totally fine.\""
    },
    {
        "id": "不便_honest",
        "predicate": "不便",
        "context": "honest",
        "context_label": "正直に指摘します",
        "sentence": "To a friend who suggested a meeting spot, Daisuke honestly points it out for their sake: \"That place is <modifier> inconvenient to get to, maybe a different shop would be better.\""
    },
    {
        "id": "不便_ambiguous",
        "predicate": "不便",
        "context": "ambiguous",
        "context_label": "相手に判断してもらうため、曖昧に答えます",
        "sentence": "To a friend asking his opinion on a shop, Daisuke answers vaguely so they can decide: \"It's <modifier> inconvenient, but if Mika's fine with it, this place works for me.\""
    },
    {
        "id": "不便_impressed",
        "predicate": "不便",
        "context": "impressed",
        "context_label": "感激した様子で言います",
        "sentence": "About the surrounding area of a property he toured, Daisuke says, impressed: \"I was worried since I heard it's a bit of a walk from the station, but there are so many shops nearby that it's not inconvenient <modifier>!\""
    },
    {
        "id": "不便_direct",
        "predicate": "不便",
        "context": "direct",
        "context_label": "どれくらか聞かれ、率直に答えます",
        "sentence": "Asked how inconvenient the location was, Daisuke answers frankly: \"It was <modifier> inconvenient.\""
    },
    {
        "id": "不便_irritated",
        "predicate": "不便",
        "context": "irritated",
        "context_label": "苛立ってキレ気味に答えます",
        "sentence": "About how hard the newly introduced system is to use, Daisuke irritably tells the colleague in charge of the system: \"This is <modifier> inconvenient — can we please go back to the old way?\""
    },
    {
        "id": "不便_encourage",
        "predicate": "不便",
        "context": "encourage",
        "context_label": "励まします（多少そうだと思いつつも否定して）",
        "sentence": "To a colleague worried about how inconvenient a place is, Daisuke, though he suspects it might be true, denies it and reassures them a little: \"It's not <modifier> inconvenient — once you're used to it, you won't even notice.\""
    },
    {
        "id": "面白い_honest",
        "predicate": "面白い",
        "context": "honest",
        "context_label": "正直に指摘します",
        "sentence": "To a junior colleague who performed a comedy routine for feedback, Daisuke honestly tells them for their sake: \"That routine isn't <modifier> funny, you might want to try a different act.\""
    },
    {
        "id": "面白い_ambiguous",
        "predicate": "面白い",
        "context": "ambiguous",
        "context_label": "相手に判断してもらうため、曖昧に答えます",
        "sentence": "To a friend asking if he wants to go see a comedy duo, Daisuke answers vaguely so they can decide: \"I think manzai is <modifier> funny, but I'm not into it enough to go out of my way to see it.\""
    },
    {
        "id": "面白い_impressed",
        "predicate": "面白い",
        "context": "impressed",
        "context_label": "感激した様子で言います",
        "sentence": "About a movie he watched, Daisuke says, impressed: \"That was <modifier> funny!\""
    },
    {
        "id": "面白い_direct",
        "predicate": "面白い",
        "context": "direct",
        "context_label": "どれくらか聞かれ、率直に答えます",
        "sentence": "Asked how interesting the movie was, Daisuke answers frankly: \"It was <modifier> interesting.\""
    },
    {
        "id": "面白い_irritated",
        "predicate": "面白い",
        "context": "irritated",
        "context_label": "苛立ってキレ気味に答えます",
        "sentence": "About an event he'd been looking forward to, Daisuke irritably says: \"That was not interesting <modifier>.\""
    },
    {
        "id": "面白い_encourage",
        "predicate": "面白い",
        "context": "encourage",
        "context_label": "励まします（多少そうだと思いつつも否定して）",
        "sentence": "To a friend worried about falling asleep during the movie, Daisuke reassures them a little: \"The movie was <modifier> interesting, but honestly, I couldn't stay awake till the end either.\""
    },
    {
        "id": "美味しい_honest",
        "predicate": "美味しい",
        "context": "honest",
        "context_label": "正直に指摘します",
        "sentence": "To a friend asking how his cooking tasted, Daisuke honestly tells them for their sake: \"Honestly, it's not <modifier> tasty.\""
    },
    {
        "id": "美味しい_ambiguous",
        "predicate": "美味しい",
        "context": "ambiguous",
        "context_label": "相手に判断してもらうため、曖昧に答えます",
        "sentence": "To a colleague asking his opinion on restaurant choices, Daisuke answers vaguely so they can decide: \"That place is <modifier> tasty, but if there's somewhere better, that works too.\""
    },
    {
        "id": "美味しい_impressed",
        "predicate": "美味しい",
        "context": "impressed",
        "context_label": "感激した様子で言います",
        "sentence": "About the food he ate, Daisuke says, impressed: \"This is <modifier> delicious!\""
    },
    {
        "id": "美味しい_direct",
        "predicate": "美味しい",
        "context": "direct",
        "context_label": "どれくらか聞かれ、率直に答えます",
        "sentence": "Asked how tasty the food was, Daisuke answers frankly: \"It was <modifier> tasty.\""
    },
    {
        "id": "美味しい_irritated",
        "predicate": "美味しい",
        "context": "irritated",
        "context_label": "苛立ってキレ気味に答えます",
        "sentence": "About an expensive meal, Daisuke irritably says: \"This is not tasty <modifier>. Give me my money back.\""
    },
    {
        "id": "美味しい_encourage",
        "predicate": "美味しい",
        "context": "encourage",
        "context_label": "励まします（多少そうだと思いつつも否定して）",
        "sentence": "To a friend worried about the taste of their cooking, Daisuke reassures them a little: \"This is <modifier> tasty, but I think adding some salt would make it even better.\""
    },
    {
        "id": "便利_honest",
        "predicate": "便利",
        "context": "honest",
        "context_label": "正直に指摘します",
        "sentence": "To a colleague asking for his opinion on the app they're using, Daisuke honestly tells them for their sake: \"That's not <modifier> convenient, maybe you should switch.\""
    },
    {
        "id": "便利_ambiguous",
        "predicate": "便利",
        "context": "ambiguous",
        "context_label": "相手に判断してもらうため、曖昧に答えます",
        "sentence": "To a friend consulting him about a place to move to, Daisuke answers vaguely so they can decide: \"That area is <modifier> convenient too, but it also feels a bit pricey.\""
    },
    {
        "id": "便利_impressed",
        "predicate": "便利",
        "context": "impressed",
        "context_label": "感激した様子で言います",
        "sentence": "About a product he used for the first time, Daisuke says, impressed: \"This product is <modifier> convenient!\""
    },
    {
        "id": "便利_direct",
        "predicate": "便利",
        "context": "direct",
        "context_label": "どれくらか聞かれ、率直に答えます",
        "sentence": "Asked how convenient the product was, Daisuke answers frankly: \"It was <modifier> convenient.\""
    },
    {
        "id": "便利_irritated",
        "predicate": "便利",
        "context": "irritated",
        "context_label": "苛立ってキレ気味に答えます",
        "sentence": "About a product he had high expectations for, Daisuke irritably says: \"This product isn't convenient <modifier>.\""
    },
    {
        "id": "便利_encourage",
        "predicate": "便利",
        "context": "encourage",
        "context_label": "励まします（多少そうだと思いつつも否定して）",
        "sentence": "To a friend worried about the reaction to a gift they gave, Daisuke reassures them a little: \"This is <modifier> convenient, I think — we use it at home too.\""
    },
    {
        "id": "綺麗_honest",
        "predicate": "綺麗",
        "context": "honest",
        "context_label": "正直に指摘します",
        "sentence": "To a friend consulting him about a location to open a shop, Daisuke honestly tells them for their sake: \"That place doesn't have <modifier> nice exterior, maybe you should open somewhere else.\""
    },
    {
        "id": "綺麗_ambiguous",
        "predicate": "綺麗",
        "context": "ambiguous",
        "context_label": "相手に判断してもらうため、曖昧に答えます",
        "sentence": "To a colleague asking his opinion on an accessory to buy, Daisuke answers vaguely so they can decide: \"That one's <modifier> pretty too, but this bracelet might be nice as well — I'll leave it up to you.\""
    },
    {
        "id": "綺麗_impressed",
        "predicate": "綺麗",
        "context": "impressed",
        "context_label": "感激した様子で言います",
        "sentence": "While watching TV, Daisuke says, impressed: \"This announcer is <modifier> pretty!\""
    },
    {
        "id": "綺麗_direct",
        "predicate": "綺麗",
        "context": "direct",
        "context_label": "どれくらか聞かれ、率直に答えます",
        "sentence": "Asked how nice the place was, Daisuke answers frankly: \"It was <modifier> nice.\""
    },
    {
        "id": "綺麗_irritated",
        "predicate": "綺麗",
        "context": "irritated",
        "context_label": "苛立ってキレ気味に答えます",
        "sentence": "About a place he'd heard was beautiful, Daisuke irritably says: \"This isn't pretty <modifier>.\""
    },
    {
        "id": "綺麗_encourage",
        "predicate": "綺麗",
        "context": "encourage",
        "context_label": "励まします（多少そうだと思いつつも否定して）",
        "sentence": "To a junior colleague worried about how their drawing turned out, Daisuke reassures them: \"This is drawn <modifier> nicely, I think.\""
    },
    {
        "id": "上手_honest",
        "predicate": "上手",
        "context": "honest",
        "context_label": "正直に指摘します",
        "sentence": "To a student practicing calligraphy, Daisuke honestly tells them for their sake: \"The first character isn't written <modifier> well, let's redo it.\""
    },
    {
        "id": "上手_ambiguous",
        "predicate": "上手",
        "context": "ambiguous",
        "context_label": "相手に判断してもらうため、曖昧に答えます",
        "sentence": "To a friend asking if he wants to go to a live show, Daisuke answers vaguely so they can decide: \"That performer is <modifier> skilled, but not enough that I'd go see them alone — I'll leave it up to you.\""
    },
    {
        "id": "上手_impressed",
        "predicate": "上手",
        "context": "impressed",
        "context_label": "感激した様子で言います",
        "sentence": "Looking at an illustration his colleague drew, Daisuke says, impressed: \"This is <modifier> good!\""
    },
    {
        "id": "上手_direct",
        "predicate": "上手",
        "context": "direct",
        "context_label": "どれくらか聞かれ、率直に答えます",
        "sentence": "Asked how skilled the performance was, Daisuke answers frankly: \"It was <modifier> skilled.\""
    },
    {
        "id": "上手_irritated",
        "predicate": "上手",
        "context": "irritated",
        "context_label": "苛立ってキレ気味に答えます",
        "sentence": "About a performance he'd heard was skillful, Daisuke irritably says: \"This isn't skilled <modifier>.\""
    },
    {
        "id": "上手_encourage",
        "predicate": "上手",
        "context": "encourage",
        "context_label": "励まします（多少そうだと思いつつも否定して）",
        "sentence": "To a junior colleague worried about how their playing turned out, Daisuke reassures them: \"I think you're <modifier> good — now it's just about playing with confidence.\""
    }
];
