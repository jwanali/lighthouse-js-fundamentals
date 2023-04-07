const smartGarbage = function (trash, bins) {
    // Your code in here ...
    switch (trash) {
        case 'recycling':
            bins.recycling = bins.recycling + 1;
            
            break;
            case 'waste':
            bins.waste = bins.waste + 1;
            
            break;
            case 'compost':
            bins.compost = bins.compost + 1;
            
            break;
    
        default:
            break;
    }
    return bins;
  }
console.log('recycling', { waste: 4, recycling: 2, compost: 5 });