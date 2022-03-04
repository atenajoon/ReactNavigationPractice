// components: 
// 1. Button

// isLoggedIn ? "FavBtn" : noBtn

// FavBtn: 

//  isFav state default value: null
//  isFav ? title & onPress === RemoveFav : title & onPress === AddFav

//  onPress handler: 
//  setIsFav(isFav = !isFav)
//  useEffect () => 
//    if(isFav) setFavList([...favList, newFav])
//    else filter FaveList remove fav

//  I'm still not creal about updating the state nd funcitonality of the Fav buttons