function fn_equal(source, target) {
    for(let i in target){
        if(source === target[i]){
            return true;
        }
    }
    return false;
}

function fn_have_all(source, target){
    for(let i in target){
        if(source.indexOf(target[i]) === -1){
            return false;
        }
    }
    return true;
}

function fn_exact_in(source, target){
    for(let i in target){
        if(target[i] === source){
            return true;
        }
    }
    return false;
}

function fn_exact_not_in(source, target){
    for(let i in target){
        if(target[i] === source){
            return false;
        }
    }
    return true;
}

function fn_have_either(source, target){
    for(let i in target){
        if(source.indexOf(target[i]) > -1){
            return true;
        }
    }
    return false;
}

function fn_not_have_all(source, target){
    for(let i in target){
        if(source.indexOf(target[i]) > -1){
            return false;
        }
    }
    return true;
}

var fn_map = {
    "equal": fn_equal,
    "have_all": fn_have_all,
    "have_either": fn_have_either,
    "not_have_all": fn_not_have_all,
    "exact_in": fn_exact_in,
    "exact_not_in": fn_exact_not_in
};

function filter(op, source, target){
    if(target.length === 0){
        return true;
    }
    return fn_map[op](source, target);
}