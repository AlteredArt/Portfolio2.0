hello
needs work on styling in home section / page section / titles and navbar.
trying to figure out when to use percentages / rems /em /vw / vh 
I experimented with percentages and vw on the home page, but not the pages themselves.

    rem is relational to the base html. 
    I know the base html has a set default but does it help if the font size is set in your personal html?

    em is in relation to it's parent component

    Neither em or rem seem to scale very well
    
    vw works best for scaling but gets way to small on smaller screen, maybe set a break point for just that

    for padding and margin is it best to use pixels or percentages
the components may need to be converted to flex box or gird

trying to make more responsive code to avoid making so many dang breakpoints


for overflow on 
html {
    overflow-x: hidden;
}