function findClosestColor(color){
    const colorValues = [[0x00, '00'], [0x11, '11'], [0x22, '22'],
        [0x33,'33'], [0x44,'44'], [0x55, '55'], [0x66, '66'], 
        [0x77, '77'], [0x88, '88'], [0x99, '99'], 
        [0xaa, 'aa'], [0xbb, 'bb'], [0xcc, 'cc'] , 
        [0xdd, 'dd'], [0xee, 'ee'], [0xff, 'ff']];

    let value = parseInt(color, 16);
    let min = 0xff*0xff;
    let minV = '';
    for(let [v, str] of colorValues){
        let diff = (value-v)*(value-v);
        if(diff < min){
            minV = str;
            min = diff;
        }
    }
    return minV;
}
/**
 * @param color: the given color
 * @return: a 7 character color that is most similar to the given color
 */
export function similarRGB (color) {
    let colors = [color.slice(1,3), color.slice(3,5), color.slice(5)];
    let result = '#';
    for(const c of colors){
        result += findClosestColor(c);
    }
    return result;
}


