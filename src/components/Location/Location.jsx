export const getCordinate = (setaddress) =>{
    navigator.geolocation.getCurrentPosition(async function(position){
        console.log(position.coords.latitude,position.coords.longitude)
        const address = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=9c59c650c372444cb8485f97cc1091a0`)
        const res = await address.json()
        console.log(res)
        setaddress(res.features)
    })
}
