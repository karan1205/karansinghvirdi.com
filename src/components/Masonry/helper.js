function resizeMasonryItem(item, rowGap, rowHeight){
    const img = item.querySelector('img');
    const rowSpan = Math.ceil((img.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = 'span '+rowSpan;
    console.log('------vbfdbjv')
}

export function resizeAllMasonryItems(el){
    const computedStyle = window.getComputedStyle(el);
    const rowGap = parseInt(computedStyle.getPropertyValue('grid-row-gap'));
    const rowHeight = parseInt(computedStyle.getPropertyValue('grid-auto-rows'));
    const allItems = el.getElementsByClassName('masonry--content');
    Array.prototype.forEach.call(allItems, item => {
        resizeMasonryItem(item, rowGap, rowHeight);
    });
}