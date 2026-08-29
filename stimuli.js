var stimuli = [
    {
        "id": "面白い_warning",
        "predicate": "面白い",
        "context": "warning",
        "context_label": "力になりたいと思い、遠慮がちに指摘します。(warning)",
        "sentence": "社内報に載せる連載記事の原稿をアキラが見せてきます。大輔は力になりたいと思い、遠慮がちに指摘します。「中盤が<modifier>面白くない気がするから、そこにエピソードを一つ足したらどう？」"
    },
    {
        "id": "面白い_cautious",
        "predicate": "面白い",
        "context": "cautious",
        "context_label": "自分の意見を押し付けたくない+慎重に答えます。",
        "sentence": "大輔は友人とどの映画を見るか話しています。自分の意見を押し付けたくない大輔は、慎重に答えます。「それ、映像は綺麗だけど、<modifier>面白くないらしい。」"
    },
    {
        "id": "面白い_agree",
        "predicate": "面白い",
        "context": "agree",
        "context_label": "同調・認める・感謝する\nagree/acknowledge/thank",
        "sentence": "友人が絶対面白いと言い、大輔をマイナー映画を観に誘います。半信半疑でついてきたのですが、本当感動し、友人に言います。「<modifier>面白かった。誘ってくれてありがとう」"
    },
    {
        "id": "面白い_direct",
        "predicate": "面白い",
        "context": "direct",
        "context_label": "どれくらpredicateか聞かれ、率直に答えます",
        "sentence": "上映後、大輔はまだその映画を見ていない同僚に、どれくらい面白かったか聞かれ、率直に答えます。「<modifier>面白かったです。後半は少し眠くなりましたけど」"
    },
    {
        "id": "面白い_irritated",
        "predicate": "面白い",
        "context": "irritated",
        "context_label": "（苛立って）キレ気味に答えます",
        "sentence": "大輔は、楽しみにしていた劇を観に行ったのですが、隣の上司がいいところでいつもネタバレをしてくるので、キレて言います。「あなたのせいで、<modifier>面白くないんですけど。静かにしていただけますか？」"
    },
    {
        "id": "面白い_encourage",
        "predicate": "面白い",
        "context": "encourage",
        "context_label": "励まします",
        "sentence": "友人の提案で見に来た映画が少し退屈でした。提案したことを申し訳ないと思っている彼女を大輔が励まします。「<modifier>面白かったよ。みんなで映画館に一緒に行く機会ができただけでも嬉しいし。」"
    },
    {
        "id": "美味しい_warning",
        "predicate": "美味しい",
        "context": "warning",
        "context_label": "力になりたいと思い、遠慮がちに指摘します。(warning)",
        "sentence": "アキラが同窓会の場所として提案したお店は、最近味が落ちています。大輔は力になりたいと思い、遠慮がちに指摘します。「そこ、最近<modifier>美味しくないから、他の店にしたら？」"
    },
    {
        "id": "美味しい_cautious",
        "predicate": "美味しい",
        "context": "cautious",
        "context_label": "自分の意見を押し付けたくない+慎重に答えます。",
        "sentence": "大輔は友人とどの店で食べるか話しています。自分の意見を押し付けたくない大輔は、慎重に答えます。「そこ、安くて量も多いけど、<modifier>美味しくないかもしれない。ここでいい？」"
    },
    {
        "id": "美味しい_agree",
        "predicate": "美味しい",
        "context": "agree",
        "context_label": "同調・認める・感謝する\nagree/acknowledge/thank",
        "sentence": "大輔は、見た目が地味だからと敬遠していた店に入ります。友人に絶対美味しいと言われ、半信半疑でついてきたのですが、美味しい料理に感動します。「<modifier>美味しいね。誘ってくれてありがとう」"
    },
    {
        "id": "美味しい_direct",
        "predicate": "美味しい",
        "context": "direct",
        "context_label": "どれくらpredicateか聞かれ、率直に答えます",
        "sentence": "ランチから戻った大輔は、その店を気にしていた同僚に、料理がどれくらい美味しかったか聞かれ、率直に答えます。「<modifier>美味しかったです。近くを通ったら入るくらいですかね」"
    },
    {
        "id": "美味しい_irritated",
        "predicate": "美味しい",
        "context": "irritated",
        "context_label": "（苛立って）キレ気味に答えます",
        "sentence": "大輔はせっかく楽しみにしていた料理に、友人が大量に香辛料をかけて台無しにします。大輔はキレ気味に言います。「料理、<modifier>美味しくなくなっちゃったんだけど！」"
    },
    {
        "id": "美味しい_encourage",
        "predicate": "美味しい",
        "context": "encourage",
        "context_label": "励まします",
        "sentence": "友人が作った料理の味が少し薄いです。彼女はそれを申し訳ないと思っているようなので大輔が励まします。「<modifier>美味しいよ。味は少し薄いけど、塩足せるし。」"
    },
    {
        "id": "綺麗_warning",
        "predicate": "綺麗",
        "context": "warning",
        "context_label": "力になりたいと思い、遠慮がちに指摘します。(warning)",
        "sentence": "アキラが商品の撮影写真を選んで大輔に見せてきます。大輔は力になりたいと思い、遠慮がちに指摘します。「その写真、<modifier>綺麗じゃないと思うな。取り直した方がいいんじゃない？」"
    },
    {
        "id": "綺麗_cautious",
        "predicate": "綺麗",
        "context": "cautious",
        "context_label": "自分の意見を押し付けたくない+慎重に答えます。",
        "sentence": "友人はデートで行くスポットについて相談してきます。自分の意見を押し付けたくない大輔は、慎重に答えます。「そこの景色<modifier>綺麗じゃないかも。料理は美味しいけどね。」"
    },
    {
        "id": "綺麗_agree",
        "predicate": "綺麗",
        "context": "agree",
        "context_label": "同調・認める・感謝する\nagree/acknowledge/thank",
        "sentence": "大輔は、古いからと敬遠していた庭園に行きます。友人に手入れが行き届いていると言われ、半信半疑でついてきたのですが、本当に整えられた景色を見て感心します。「<modifier>綺麗だね。連れてきてくれてありがとう。」"
    },
    {
        "id": "綺麗_direct",
        "predicate": "綺麗",
        "context": "direct",
        "context_label": "どれくらpredicateか聞かれ、率直に答えます",
        "sentence": "旅行から帰った大輔は、次に行こうか迷っている友人に、その場所がどれくらい綺麗だったか聞かれ、率直に答えます。「<modifier>綺麗でした。写真、何枚も撮りました」"
    },
    {
        "id": "綺麗_irritated",
        "predicate": "綺麗",
        "context": "irritated",
        "context_label": "（苛立って）キレ気味に答えます",
        "sentence": "大輔は、来客のために家具の配置まで整えた部屋に、友人が荷物を次々と置いていって台無しになりました。大輔はキレ気味に言います。「整えたばっかりなのに、<modifier>綺麗じゃなくなっちゃったんだけど！」"
    },
    {
        "id": "綺麗_encourage",
        "predicate": "綺麗",
        "context": "encourage",
        "context_label": "励まします",
        "sentence": "大輔は後輩と一緒に作品に取り組んでいます。描いた絵の線が少し歪んでいることを申し訳ないと思っている後輩を大輔が励まします。「<modifier>綺麗に描けてるよ。線はあとで整えられるし、全然大丈夫だよ。」"
    },
    {
        "id": "遅い_warning",
        "predicate": "遅い",
        "context": "warning",
        "context_label": "力になりたいと思い、遠慮がちに指摘します。(warning)",
        "sentence": "社員旅行の移動手段を担当しているアキラが、バスで行く案を見せてきます。大輔は力になりたいと思い、遠慮がちに指摘します。「その時間帯のバス、<modifier>遅いかも。電車にしたらどう？」"
    },
    {
        "id": "遅い_cautious",
        "predicate": "遅い",
        "context": "cautious",
        "context_label": "自分の意見を押し付けたくない+慎重に答えます。",
        "sentence": "大輔は友人とどの交通手段で行くか相談しています。自分の意見を押し付けたくない大輔は、友人の提案に対して慎重に答えます。「バス、乗り換えなしで楽だけど、<modifier>遅いみたいだよ。」"
    },
    {
        "id": "遅い_agree",
        "predicate": "遅い",
        "context": "agree",
        "context_label": "同調・認める・感謝する\nagree/acknowledge/thank",
        "sentence": "大輔は、処理が遅いからと使うのを避けていたアプリを開きます。友人に最新版は速くなったと言われ、半信半疑で試したのですが、本当にすぐ動く画面を見て感心します。「<modifier>遅くないね。教えてくれてありがとう」"
    },
    {
        "id": "遅い_direct",
        "predicate": "遅い",
        "context": "direct",
        "context_label": "どれくらpredicateか聞かれ、率直に答えます",
        "sentence": "進捗を確認しにきた上司に、大輔はその作業がどれくらい遅いか聞かれ、率直に答えます。「<modifier>遅いです。半日ほど押していますが、今週中には追いつけます」"
    },
    {
        "id": "遅い_irritated",
        "predicate": "遅い",
        "context": "irritated",
        "context_label": "（苛立って）キレ気味に答えます",
        "sentence": "大輔は、急ぎだと伝えていた作業を任せたのに急ぎもせず、数日遅れて提出されました。大輔はキレ気味に言います。「<modifier>遅いんだけど、何度も早く出してって言ったよね？」"
    },
    {
        "id": "遅い_encourage",
        "predicate": "遅い",
        "context": "encourage",
        "context_label": "励まします",
        "sentence": "慣れない作業をしている友人は、仕事が遅いことを申し訳ないと思っているようなので大輔が励まします。「<modifier>遅くないよ。一緒にやってくれる人がいるだけでも気が楽になる。」"
    },
    {
        "id": "寒い_warning",
        "predicate": "寒い",
        "context": "warning",
        "context_label": "力になりたいと思い、遠慮がちに指摘します。(warning)",
        "sentence": "会議室の空調を担当しているアキラが、設定を終えて席に戻ってきます。大輔は力になりたいと思い、遠慮がちに指摘します。「ここ、<modifier>寒いと思う。温度上げた方がいいんじゃない？」"
    },
    {
        "id": "寒い_cautious",
        "predicate": "寒い",
        "context": "cautious",
        "context_label": "自分の意見を押し付けたくない+慎重に答えます。",
        "sentence": "友人に何をきて行けばいいか相談され自分の意見を押し付けたくない大輔は、慎重に答えます。「それは身軽で動きやすいけど、今日は<modifier>寒いみたいだよ。」"
    },
    {
        "id": "寒い_agree",
        "predicate": "寒い",
        "context": "agree",
        "context_label": "同調・認める・感謝する\nagree/acknowledge/thank",
        "sentence": "大輔は、「絶対暖かいよ」と友人に勧められたコートを半信半疑で買い、スキー場に着てきました。リフトに乗っても風を感じない暖かさに感心して言います。「<modifier>寒くない！このコート買ってよかった。ありがとう」"
    },
    {
        "id": "寒い_direct",
        "predicate": "寒い",
        "context": "direct",
        "context_label": "どれくらpredicateか聞かれ、率直に答えます",
        "sentence": "これから出かける友人に、大輔は外がどれくらい寒いか聞かれ、率直に答えます。「<modifier>寒いです。上着はあった方がいいかもしれないです。」"
    },
    {
        "id": "寒い_irritated",
        "predicate": "寒い",
        "context": "irritated",
        "context_label": "（苛立って）キレ気味に答えます",
        "sentence": "同僚がエアコンを下げすぎていたせいで、オフィスが寒いです。大輔はキレ気味に言います。「<modifier>寒いんだけど、どうにかして」"
    },
    {
        "id": "寒い_encourage",
        "predicate": "寒い",
        "context": "encourage",
        "context_label": "励まします",
        "sentence": "友人の提案で来たテラス席が少し寒いです。申し訳ないと思っている彼女を大輔が励まします。「<modifier>寒くないよ。お茶飲めばすぐ温まるよ。」"
    },
    {
        "id": "汚い_warning",
        "predicate": "汚い",
        "context": "warning",
        "context_label": "力になりたいと思い、遠慮がちに指摘します。(warning)",
        "sentence": "アキラが共用の給湯室を使い終えて戻ってきます。大輔は力になりたいと思い、遠慮がちに指摘します。「シンクのところ、<modifier>汚いから、流しておいた方がいいよ」"
    },
    {
        "id": "汚い_cautious",
        "predicate": "汚い",
        "context": "cautious",
        "context_label": "自分の意見を押し付けたくない+慎重に答えます。",
        "sentence": "大輔は友人とどの宿に泊まるか相談しています。友人の提案に対し、自分の意見を押し付けたくない大輔は、慎重に答えます。「そこ、駅から近くて安いけど、<modifier>汚いかも。」"
    },
    {
        "id": "汚い_agree",
        "predicate": "汚い",
        "context": "agree",
        "context_label": "同調・認める・感謝する\nagree/acknowledge/thank",
        "sentence": "大輔は、古いからと敬遠していた店に入ります。友人にちゃんと手入れされていると言われ、半信半疑でついてきたのですが、本当に清潔な店内を見て感心します。「確かに<modifier>汚くないね。ついてきてよかった。」"
    },
    {
        "id": "汚い_direct",
        "predicate": "汚い",
        "context": "direct",
        "context_label": "どれくらpredicateか聞かれ、率直に答えます",
        "sentence": "内見を頼んでいた友人に、大輔はその部屋がどれくらい汚いか聞かれ、率直に答えます。「<modifier>汚いです。軽く拭けば気にならない程度でした」"
    },
    {
        "id": "汚い_irritated",
        "predicate": "汚い",
        "context": "irritated",
        "context_label": "（苛立って）キレ気味に答えます",
        "sentence": "大輔は、共用スペースの掃除を任せたのに何週間も放置されお客さんが来た際にも片付いていませんでした。お客さんが不快な顔をしているのをみて、彼らが帰ってからキレ気味に言います。「この部屋<modifier>汚いんだけど、いつになったら綺麗にしてくれるの？」"
    },
    {
        "id": "汚い_encourage",
        "predicate": "汚い",
        "context": "encourage",
        "context_label": "励まします",
        "sentence": "友人が先立って選んだ席が少し汚れていることに気づきます。申し訳ないと思っている彼女を大輔が励まします。「<modifier>汚くないよ。ちょっと拭けば大丈夫だよ。」"
    }
];
