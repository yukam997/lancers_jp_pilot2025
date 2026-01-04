const data = [
    {
        "scenarios": "In their office, Terry tells his coworker, \"The room is [modifier] cold,\" and asks them to raise the temperature.",
        "question": "How polite is Terry being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "In their office, Terry tells a coworker, \"The room is [modifier] cold,\" and asks them to go to the temperature control room to raise the temperature.",
        "question": "How polite is Terry being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "In a classroom, Anni says to her homeroom teacher, \"The air conditioning is [modifier] cold\" and asks her teacher to change the settings.                                                                ",
        "question": "How polite is Anni being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "A prestigious guest lecturer is teaching a class today, and Anni says to him, \"The air conditioning is [modifier] cold\" and asks them to change the settings.",
        "question": "How polite is Anni being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "In a taxi, Dan tells the driver, \"It's [modifier] cold,\" and asks them to turn down the air conditioning.",
        "question": "How polite is Dan being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "On a public bus, Dan tells the driver, \"It's [modifier] cold,\" and asks them to turn down the air conditioning.",
        "question": "How polite is Dan being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "At a restaurant, Melissa tells the staff, \"The air conditioning is [modifier] cold,\" and asks him to change the settings.",
        "question": "How polite is Melissa being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "At a restaurant, the waiter notices Melissa wearing \nher jacket and asks if she's comfortable. Melissa tells the \nstaff, \"The air conditioning is [modifier] cold,\" and asks \nthem to change the settings.",
        "question": "How polite is Melissa being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Dan is attending a game night at Mary's house. Dan tells Mary, \"It's [modifier] cold here,\" and asks her to raise the temperature.",
        "question": "How polite is Dan being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Dan is attending a game night at Mary's house. Dan tells Mary, \"It's [modifier] cold here,\" and asks her to hand him a coat from the coat rack.",
        "question": "How polite is Dan being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "A coworker started her lunch break early is talking on the phone with a friend next to Lisa. Lisa tells the coworker, \"Your voice is [modifier] loud,\" and asks them to be quieter.",
        "question": "How polite is Lisa being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "A coworker is talking on the phone with a client. Lisa tells the coworker, \"Your voice is [modifier] loud,\" and asks them to be quieter.",
        "question": "How polite is Lisa being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Amy is playing games in her room, and her roommate Jake is practicing piano in the living room. Amy tells Jake, \"The sound is [modifier] loud,\" and asks him to turn down the volume.",
        "question": "How polite is Amy being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Amy is sick in bed in her room, and her roommate Jake is practicing piano in the living room. Amy tells Jake, \"The sound is [modifier] loud,\" and asks him to turn down the volume.\n",
        "question": "How polite is Amy being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Sarah is at a restaurant with a friend. She tells the staff, \"The volume is [modifier] loud,\" and asks them to turn it down.",
        "question": "How polite is Sarah being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Sarah is at a restaurant with a friend. She tells the staff, \"The volume is [modifier] loud and we can't enjoy our conversation,\" and asks them to turn it down. ",
        "question": "How polite is Sarah being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Claire is studying for an exam, but her brother is gaming in the living room. Claire says, \"The sound is [modifier] loud,\" and asks him to be quieter.",
        "question": "How polite is Claire being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Claire is studying for an exam, but her brother and his friends are having a birthday party in the living room. Claire says, \"The sound is [modifier] loud,\" and asks them to be quieter.",
        "question": "How polite is Claire being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "During class, students sitting near Alex are talking loudly. Alex tells them, \"Your voices are [modifier] loud and disrupting the class,\" and asks them to lower their voices.\n",
        "question": "How polite is Alex being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "During class, students sitting near Alex are talking loudly. Alex tells them, \"Your voices are [modifier] loud,\" and asks them to lower their voices.",
        "question": "How polite is Alex being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Tom and his housemate Jordan have invited their friends over. Tom tells Jordan, \"The sofa is [modifier] messy,\" and asks him to clean his things up before the guests arrive.",
        "question": "How polite is Tom being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Tom and his housemate Jordan have invited their friends over. While showing the coworker around the house, Tom tells Jordan, \"The sofa is [modifier] messy,\" and asks him to clean his things up.",
        "question": "How polite is Tom being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Emma is at Chloe's apartment to work on a class assignment together. Seeing notebooks and candy wrappers on the desk, Emma says, \"This room is [modifier] messy,\" and they clean up together before starting work.",
        "question": "How polite is Emma being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Emma is in the living room of Chloe's apartment to work on a class assignment together. Emma enters Chloe's bedroom to borrow a desk lamp and says, \"The bedroom is [modifier] messy.\"",
        "question": "How polite is Emma being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Leo has come to Noah's apartment to study. Leo says, \"This desk is [modifier] messy,\" and asks him to organize it before they begin.",
        "question": "How polite is Leo being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Leo has come to Noah's apartment to study. After sitting down at the desk and looking at the kitchen, Leo says, \"The kitchen is [modifier] messy.\"",
        "question": "How polite is Leo being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Rachel picks up Sophie to go to a concert together. Seeing trash on the floor, Sophie says, \"The car is [modifier] messy,\" and they clean up together before leaving.",
        "question": "How polite is Sophie being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Rachel picks up Sophie to go to a concert together. Rachel says that the road was bumpy and things she had in the car scattered everywhere. Sophie says, \"You're right. The car is [modifier] messy,\" and they clean up together before leaving.",
        "question": "How polite is Sophie being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Alex's desk is overflowing with documents. Seeing this, Liam says, \"Your desk is [modifier] messy,\" and asks him to clean it up before Liam's client arrives.",
        "question": "How polite is Liam being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Alex is busy with a project deadline approaching, and his desk is overflowing with documents. Seeing this, Liam says, \"Your desk is [modifier] messy,\" and asks him to clean it up before Liam's client arrives.",
        "question": "How polite is Liam being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "James is talking to a coworker about this week's work meeting. James says the coworker's report was \"[modifier] long\" and suggests summarizing it more concisely.",
        "question": "How polite is James being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "James is talking to a coworker about this week's work meeting. James says the coworker's report was \"[modifier] long and lengthen the meeting\" and suggests summarizing it more concisely.",
        "question": "How polite is James being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Bill's gives a practive presentation in class. Afterwards, Anna says to Bill \"The introduction was [modifier] long and hard to follow\" and suggests him to be careful of timing in the actual presentation.",
        "question": "How polite is Anna being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Bill gives a presentation in class. As part of the peer-asessment process, Anna provides feedback saying \"The introduction was [modifier] long and hard to follow\" and suggests him to be careful of timing next time.",
        "question": "How polite is Anna being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Jillian consults Dylan to review the meeting agenda she created. Dylan notices that there are too many items for the allotted time and says, \"This agenda is [modifier] long,\" and suggests cutting out some topics.\n",
        "question": "How polite is Dylan being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Jillian consults Dylan to review the agenda she created for tomorrow's meeting, mentioning that she is worried that there are too many items for the allotted time. Dylan agrees and says, \"You're right, this agenda is [modifier] long,\" and suggests cutting out some topics.",
        "question": "How polite is Dylan being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Maya asks her coworker Peter to check a draft email to send to a client. Peter says, \"This email is [modifier] long,\" and suggests removing details to make it more concise.\n",
        "question": "How polite is Peter being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Maya has Peter, who is working with her on the client, review a draft email to send to the client. Peter says, \"This email is [modifier] long,\" and works with Maya to make it more concise.",
        "question": "How polite is Peter being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Liam is reviewing a report Sofia prepared for her boss at her request. After finishing reading, he says, \"This report is [modifier] long,\" and suggests shortening some parts to make it more concise.",
        "question": "How polite is Liam being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    },
    {
        "scenarios": "Liam is reads the report Sofia created in preparation for a meeting. Just as they are going into the meeting he says, \"This report is [modifier] long.\".",
        "question": "How polite is Liam being?",
        "left_label": "Not polite at all",
        "right_label": "As polite as possible"
    }
];