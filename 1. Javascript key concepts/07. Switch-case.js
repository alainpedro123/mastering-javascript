const moving = direction =>{
    let whatHappens;
    switch(direction){
        case "forward": whatHappens = "you encountered a monster";
            break;
        case "back": whatHappens = "you arrived home";
            break;
        case "left": whatHappens = "you found a river";
            break;
        case "right": whatHappens = "50m away from the beach";
            break;
        default: whatHappens = "Please enter a vild direction";
    }
    return whatHappens;
}

moving("forward");
