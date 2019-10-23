var contents = [
    {
        "id": 0,
        "title": "慈母吟1",
        "dynasty": "唐",
        "author": "孟郊",
        "main": "慈母手中线，游子身上衣。\n" +
        "临行密密缝，意恐迟迟归。\n" +
        "谁言寸草心，报得三春晖?",
        "grade": "7",
        "seq_id": "10",
        "comment": "这是唐代诗人孟郊的一首诗"
    }, {
        "id": 1,
        "title": "慈母吟",
        "dynasty": "唐",
        "author": "孟郊",
        "main": "慈母手中线，游子身上衣。\n" +
        "临行密密缝，意恐迟迟归。\n" +
        "谁言寸草心，报得三春晖?"
    }, {
        "id": 2,
        "title": "慈母吟2",
        "dynasty": "唐",
        "author": "孟郊",
        "main": "慈母手中线，游子身上衣。\n" +
        "临行密密缝，意恐迟迟归。\n" +
        "谁言寸草心，报得三春晖?"
    }
];

function get_indexes() {
    let indexes = [];
    for(let i = 0; i < contents.length; i++){
        indexes.push(i);
    }
    return indexes;
}

var all_indexes = get_indexes();