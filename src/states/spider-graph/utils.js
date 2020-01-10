export const getIndexOfSpiderWithServerId = (spiderArray, serverId) => {

    // if graph with ServerId is in array of spiders, return its index in openedSpiders array, else return -1

    let arrayIndex = -1;
    spiderArray.forEach((spider, i) => {
        if (spider.id === serverId){
            arrayIndex = i;
        }
    } )
    return (arrayIndex);
}